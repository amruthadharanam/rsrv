#!/usr/bin/env python3
"""
AMRUTHADHAARANAM — local dev/production file server
  • Serves every file in this folder as a static asset (GET)
  • POST /save-settings  → overwrites settings.json atomically
  • POST /save-menu      → overwrites menu-data.js atomically

Run:
    python server.py            (defaults to port 5500)
    python server.py 8080       (custom port)

Stop:  Ctrl+C
"""

import json
import os
import sys
import shutil
import tempfile
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Files that the POST endpoints are allowed to write
WRITABLE = {
    "/save-settings": "settings.json",
    "/save-menu":     "menu-data.js",
}


class Handler(SimpleHTTPRequestHandler):

    # Serve from BASE_DIR regardless of cwd
    def translate_path(self, path):
        path = super().translate_path(path)
        # Replace cwd prefix with BASE_DIR
        rel = os.path.relpath(path, os.getcwd())
        return os.path.join(BASE_DIR, rel)

    def end_headers(self):
        # Allow the pages served from this server to call the API
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path not in WRITABLE:
            self._respond(404, {"error": f"Unknown endpoint: {self.path}"})
            return

        target_file = os.path.join(BASE_DIR, WRITABLE[self.path])
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)

        try:
            # Validate JSON for settings; accept raw text for menu JS
            if self.path == "/save-settings":
                # Decode body — browsers send UTF-8; detect BOM if present
                for enc in ("utf-8-sig", "utf-8", "utf-16"):
                    try:
                        body_str = body.decode(enc)
                        break
                    except (UnicodeDecodeError, ValueError):
                        continue
                else:
                    body_str = body.decode("utf-8", errors="replace")
                data = json.loads(body_str)      # raises if invalid JSON
                content = json.dumps(data, ensure_ascii=False, indent=2)
                content_bytes = content.encode("utf-8")
            else:
                content_bytes = body             # raw JS text

            # Write atomically: temp file → rename
            fd, tmp = tempfile.mkstemp(dir=BASE_DIR)
            try:
                with os.fdopen(fd, "wb") as f:
                    f.write(content_bytes)
                shutil.move(tmp, target_file)
            except Exception:
                os.unlink(tmp)
                raise

            ts = datetime.now().strftime("%H:%M:%S")
            print(f"[{ts}] Saved {WRITABLE[self.path]}")
            self._respond(200, {"ok": True, "file": WRITABLE[self.path]})

        except json.JSONDecodeError as e:
            self._respond(400, {"error": f"Invalid JSON: {e}"})
        except Exception as e:
            self._respond(500, {"error": str(e)})

    def _respond(self, status, data):
        body = json.dumps(data).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        # Quieter logging — skip noisy 304s
        code = args[1] if len(args) > 1 else ""
        if code not in ("304",):
            print(f"  {args[0]}  {code}")


if __name__ == "__main__":
    os.chdir(BASE_DIR)

    # Find a free port starting from the requested one
    import socket
    def is_free(p):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try: s.bind(("", p)); return True
            except OSError: return False
    while not is_free(PORT):
        print(f"  Port {PORT} is busy, trying {PORT+1}…")
        PORT += 1

    server = HTTPServer(("", PORT), Handler)
    print(f"\n  AMRUTHADHAARANAM server  →  http://localhost:{PORT}")
    print(f"  Order Terminal  →  http://localhost:{PORT}/AMRUTHADHAARANAM%20Order%20Terminal.html")
    print(f"  Control Panel   →  http://localhost:{PORT}/control-panel.html")
    print(f"  Serving files from: {BASE_DIR}")
    print(f"  Press Ctrl+C to stop.\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Server stopped.")
