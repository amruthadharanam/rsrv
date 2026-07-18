@echo off
title AMRUTHADHAARANAM Server
echo.
echo  Starting AMRUTHADHAARANAM server...
echo  Keep this window open while you work.
echo  Press Ctrl+C to stop.
echo.
cd /d "%~dp0"
py server.py
if errorlevel 1 (
    echo.
    echo  Trying 'python3'...
    python3 server.py
)
