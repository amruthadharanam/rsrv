// ================================================================
// menu-data.js — Centralised menu registry for AMRUTHADHAARANAM
// Loaded by: AMRUTHADHAARANAM Order Terminal.html, control-panel.html
//
// ─── ID SCHEME ───────────────────────────────────────────────────
//   s1–s12     Sandwiches       shared across both menus
//   m1–m8      Maggi            shared
//   p1–p4      Pasta            shared
//   j1–j6      Juices           shared
//   d1–d7      Milkshakes       shared
//   b1–b4      Breakfast        shared, off by default
//   i_*        Today's Order-only items
//   f_*        Future Order-only items
//
// ─── active FIELD ────────────────────────────────────────────────
//   true  → shown by default (staff can hide from Control Panel)
//   false → hidden by default (staff can enable from Control Panel)
// ─── optional pricing fields ─────────────────────────────────────
//   oldPrice → if set higher than price, the menu shows it as a
//               strikethrough 'old price' with the current price highlighted.
// ================================================================

const MENU_DATA_BY_MODE = {

/* ================================================================
   TODAY'S ORDER MENU
================================================================ */
Instant: [

    /* ── BREAKFAST  (off by default — enable from Control Panel) ──────── */
    { id:"b1", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Ghee Podi Mini Idli (14 Pcs)", price:80 },
    { id:"b2", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Traditional Steamed Idli (2 Pcs) with Chutney", price:40 },
    { id:"b3", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Crispy Medu Vada (2 Pcs)", price:45 },
    { id:"b4", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Special Ghee Roast Dosa", price:90, popular:true },

    /* ── LUNCH  (off by default in Today's Order) ──────────────────────── */
    { id:"i_l1", active:false, category:"Lunch Special", title:"🍱 Lunch Special", name:"Mint Pulao Rice (Made with Basmati Rice) with Dhal Tadka and Raita", price:149 },
    { id:"i_l2", active:false, category:"Lunch", title:"🍱 Traditional South Indian Lunch", name:"Tangy Lemon Rice with Roasted Peanuts", price:75 },
    { id:"i_l3", active:false, category:"Lunch", title:"🍱 Traditional South Indian Lunch", name:"Creamy Curd Rice with Pickle & Chutney", price:70 },
    { id:"i_l4", active:false, category:"Lunch", title:"🍱 Traditional South Indian Lunch", name:"Executive Mini South Indian Meals", price:130, popular:true },

    /* ── EVENING SNACKS ────────────────────────────────────────────────── */
    { id:"i_es1", active:true,  category:"Evening Snacks", title:"🌆 Delightful Evening Snacks", name:"Veg Paneer wrap", price:99 },
    { id:"i_es2", active:false, category:"Evening Snacks", title:"🌆 Delightful Evening Snacks", name:"Veg-Paneer-Pineapple Grilled Barbeque Box Worth 149/- is now Only 99/-", price:99, popular:true },
    { id:"i_es3", active:false, category:"Evening Snacks", title:"🌆 Delightful Evening Snacks", name:"Sweet Paniyaaram 5pcs", price:99 },

    /* ── DINNER SPECIAL ────────────────────────────────────────────────── */
    { id:"i_ds1",  active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Roti 5pcs", price:99 },
    { id:"i_ds2",  active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Mix Veg Gravy 250ml", price:80 },
    { id:"i_ds2b", active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Butter Roti (2pcs) + Mix Veg Gravy 100ml", price:80 },
    { id:"i_ds3",  active:false, category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Butter Roti (1 pc)", price:25 },
    { id:"i_ds4",  active:false, category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Plain Roti (1 pc)", price:20 },
    { id:"i_ds5",  active:false, category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Butter Naan (1 pc)", price:40 },

    /* ── BAKERY & PASTRY  (off by default) ─────────────────────────────── */
    { id:"i_bp1", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"French Vannila Tea Cake (1 Pc)", price:40 },
    { id:"i_bp2", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Signature Choco Brownie Fudge (1 Pc)", price:59 },
    { id:"i_bp3", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Red Velvet Cream Cheese Pastry", price:95 },
    { id:"i_bp4", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Fresh Cream Pineapple Cake Slice", price:75 },
    { id:"i_bp5", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Rich Chocolate Truffle Cake (Half KG)", price:450, popular:true },
    { id:"i_bp6", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Freshly Baked Veg Puff (1 Pc)", price:30 },
    { id:"i_bp7", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Paneer Tikka Puff", price:45 },

    /* ── SIGNATURE SANDWICHES  (shared IDs — same in Future menu) ──────── */
    { id:"s1",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Bombay Raw Veg Green Chutney Sandwich", price:99 },
    { id:"s2",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Deadly Chocolate with Cheese Sandwich", price:99 },
    { id:"s3",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Minced Veg Spicy Paneer with Butter Grilled Sandwich", price:99 },
    { id:"s4",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Triple Layer Bread Butter Jam", price:75 },
    { id:"s5",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Chilli Cheese Sandwich", price:75 },
    { id:"s6",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Veg Mayo Sandwich", price:75 },
    { id:"s7",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Corn Cheese Sandwich", price:75 },
    { id:"s8",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Cucumber Cheese Sandwich", price:75 },
    { id:"s9",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Onion, Tomato & Cucumber with Green Chutney", price:75 },
    { id:"s10", active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Grilled Nutella Sandwich", price:99, popular:true },
    { id:"s11", active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Grilled Nutella Banana Sandwich", price:120 },
    { id:"s12", active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Extra Cheese (Add-On)", price:20 },

    /* ── MAGGI CORNER ──────────────────────────────────────────────────── */
    { id:"m1", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Plain Maggi", price:50 },
    { id:"m2", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Maggi", price:60 },
    { id:"m3", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Butter Maggi", price:60 },
    { id:"m4", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Butter Maggi", price:60 },
    { id:"m5", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Cheese Maggi", price:70 },
    { id:"m6", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Paneer Cheese Maggi", price:75 },
    { id:"m7", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Cheese Butter Maggi", price:80 },
    { id:"m8", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Cheese Butter Paneer Maggi", price:99, popular:true },

    /* ── PASTA CORNER ──────────────────────────────────────────────────── */
    { id:"p1", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Creamy Cheesy Corn Penne Pasta", price:99, popular:true },
    { id:"p2", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Creamy Veg Fusilli Pasta", price:99 },
    { id:"p3", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Veggy Sweet Spice Red Sauce Shell Pasta", price:99 },
    { id:"p4", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Masala Macaroni Pasta", price:99 },

    /* ── COOLERS & FRESH JUICES ────────────────────────────────────────── */
    { id:"j1", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Watermelon Mint Cooler 250ml", price:60 },
    { id:"j2", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Watermelon Juice 250ml", price:60 },
    { id:"j3", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Lemon Mint Cooler 250ml", price:60 },
    { id:"j4", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Sabja Mint Lime Juice", price:75 },
    { id:"j5", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Original & Natural Mint Mojito 500ml", price:120, popular:true },
    { id:"j6", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Indian Paneer Grape with mint lime cocktail juice 250ml", price:60 },

    /* ── MILKSHAKES & SPECIALS ─────────────────────────────────────────── */
    { id:"d1", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Lassi", price:75 },
    { id:"d2", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Regular Rosemilk", price:99 },
    { id:"d3", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Sabja Rosemilk", price:99 },
    { id:"d4", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Royal Vanilla Rosemilk", price:99 },
    { id:"d5", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Banana Milkshake", price:99 },
    { id:"d6", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Choco Banana Milkshake", price:99, popular:true },
    { id:"d7", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Fresh Coconut Milk (1 Ltr)", price:125 },

    /* ── COMBOS & OFFERS ───────────────────────────────────────────────── */
    { id:"i_co1", active:true,  category:"Combos", title:"🎁 Combos & Offers", name:"BUY 2 WATERMELON MINT COOLER 250ml WORTH 120:", price:99 },
    { id:"i_co2", active:true,  category:"Combos", title:"🎁 Combos & Offers", name:"ANY TWO PORTION MAGGI VARITY WITH WATERMELON MINT COOLER 250ml", price:129 },
    { id:"i_co3", active:true,  category:"Combos", title:"🎁 Combos & Offers", name:"Triple Layer Bread Butter Jam with Cheese 2 sets Worth 150 ONLY 120", price:120 },
    { id:"i_co4", active:true,  category:"Combos", title:"🎁 Combos & Offers", name:"Any Pasta + Lemonade 500ml worth 199 Only 149", price:149 },
    { id:"i_co5", active:false, category:"Combos", title:"🎁 Combos & Offers", name:"Evening Snack Platter (Pakoda + Bajji + Samosa)", price:99 },
    { id:"i_co6", active:false, category:"Combos", title:"🎁 Combos & Offers", name:"Dinner Combo: Parotta (2) + Kurma + Rosemilk", price:175 },

],

/* ================================================================
   FUTURE ORDER MENU
================================================================ */
Future: [

    /* ── BREAKFAST  (off by default) ───────────────────────────────────── */
    { id:"b1", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Ghee Podi Mini Idli (14 Pcs)", price:80 },
    { id:"b2", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Traditional Steamed Idli (2 Pcs) with Chutney", price:40 },
    { id:"b3", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Crispy Medu Vada (2 Pcs)", price:45 },
    { id:"b4", active:false, category:"Breakfast", title:"☀️ Morning Breakfast Specials", name:"Special Ghee Roast Dosa", price:90, popular:true },

    /* ── LUNCH ─────────────────────────────────────────────────────────── */
    { id:"f_l1", active:true,  category:"Lunch Special", title:"🍱 Lunch Special", name:"Mint Pulao Rice (Made with Basmati Rice) with Dhal Tadka and Raita", price:175, tomorrowSpecial:true },
    { id:"f_l2", active:true,  category:"Lunch", title:"🍱 Traditional South Indian Lunch", name:"Tangy Lemon Rice with Roasted Peanuts and a some Fryams, 250ml watermelon mint cooler juice", price:125 },
    { id:"f_l3", active:true,  category:"Lunch", title:"🍱 Traditional South Indian Lunch", name:"Creamy Curd Rice with Pickle & Chutney", price:70 },
    { id:"f_l4", active:false, category:"Lunch", title:"🍱 Traditional South Indian Lunch", name:"Executive Mini South Indian Meals", price:130, popular:true },

    /* ── EVENING SNACKS ────────────────────────────────────────────────── */
    { id:"f_es1", active:true,  category:"Evening Snacks", title:"🌆 Delightful Evening Snacks", name:"Bhel Poori chat", price:50 },
    { id:"f_es2", active:true,  category:"Evening Snacks", title:"🌆 Delightful Evening Snacks", name:"Grilled Veggies Box Worth 149/- is now Only 109/-", price:109, popular:true },
    { id:"f_es3", active:true,  category:"Evening Snacks", title:"🌆 Delightful Evening Snacks", name:"Sweet Paniyaaram 5pcs", price:99 },

    /* ── DINNER SPECIAL ────────────────────────────────────────────────── */
    { id:"f_ds1",  active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Veg Gravy of the Delivery day 250ml", price:90 },
    { id:"f_ds2",  active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Butter Roti 1pc", price:25 },
    { id:"f_ds2b", active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Butter Roti (2pcs) + Veg Gravy of the Delivery day 100ml", price:80 },
    { id:"f_ds3",  active:true,  category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Poori(small size) 5pcs with Veg Gravy of the Delivery day 250ml", price:99 },
    { id:"f_ds4",  active:false, category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Plain Roti (1 pc)", price:20 },
    { id:"f_ds5",  active:false, category:"Dinner Special", title:"🌙 My Dinner Specials", name:"Butter Naan (1 pc)", price:40 },

    /* ── BAKERY & PASTRY  (off by default) ─────────────────────────────── */
    { id:"f_bp1", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"French Vannila Tea Cake (2 box (1pc /box))", price:80 },
    { id:"f_bp2", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Signature Choco Brownie Fudge (1 Pc)", price:59 },
    { id:"f_bp3", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Red Velvet Cream Cheese Pastry", price:95 },
    { id:"f_bp4", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Fresh Cream Pineapple Cake Slice", price:75 },
    { id:"f_bp5", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Rich Chocolate Truffle Cake (Half KG)", price:450, popular:true },
    { id:"f_bp6", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Freshly Baked Veg Puff (1 Pc)", price:30 },
    { id:"f_bp7", active:false, category:"Bakery", title:"🎂 Bakery & Pastry Selection", name:"Paneer Tikka Puff", price:45 },

    /* ── SIGNATURE SANDWICHES  (shared IDs) ────────────────────────────── */
    { id:"s1",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Bombay Raw Veg Green Chutney Sandwich", price:99 },
    { id:"s2",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Deadly Chocolate with Cheese Sandwich", price:99 },
    { id:"s3",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Minced Veg Spicy Paneer with Butter Grilled Sandwich", price:99 },
    { id:"s4",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Triple Layer Bread Butter Jam", price:75 },
    { id:"s5",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Chilli Cheese Sandwich", price:75 },
    { id:"s6",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Veg Mayo Sandwich", price:75 },
    { id:"s7",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Corn Cheese Sandwich", price:75 },
    { id:"s8",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Cucumber Cheese Sandwich", price:75 },
    { id:"s9",  active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Onion, Tomato & Cucumber with Green Chutney", price:75 },
    { id:"s10", active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Grilled Nutella Sandwich", price:99, popular:true },
    { id:"s11", active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Grilled Nutella Banana Sandwich", price:120 },
    { id:"s12", active:true, category:"Sandwich", title:"🥪 Signature Sandwiches", name:"Extra Cheese (Add-On)", price:20 },

    /* ── MAGGI CORNER ──────────────────────────────────────────────────── */
    { id:"m1", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Plain Maggi", price:50 },
    { id:"m2", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Maggi", price:60 },
    { id:"m3", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Butter Maggi", price:60 },
    { id:"m4", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Butter Maggi", price:60 },
    { id:"m5", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Cheese Maggi", price:70 },
    { id:"m6", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Paneer Cheese Maggi", price:75 },
    { id:"m7", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Cheese Butter Maggi", price:80 },
    { id:"m8", active:true, category:"Maggi", title:"🍜 Maggi Corner", name:"Veg Cheese Butter Paneer Maggi", price:99, popular:true },

    /* ── PASTA CORNER ──────────────────────────────────────────────────── */
    { id:"p1", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Creamy Cheesy Corn Penne Pasta", price:99, popular:true },
    { id:"p2", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Creamy Veg Fusilli Pasta", price:99 },
    { id:"p3", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Veggy Sweet Spice Red Sauce Shell Pasta", price:99 },
    { id:"p4", active:true, category:"Pasta", title:"🍝 Pasta Corner", name:"Masala Macaroni Pasta", price:99 },

    /* ── COOLERS & FRESH JUICES ────────────────────────────────────────── */
    { id:"j1", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Watermelon Mint Cooler 250ml", price:60 },
    { id:"j2", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Watermelon Juice 250ml", price:60 },
    { id:"j3", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Lemon Mint Cooler 250ml", price:60 },
    { id:"j4", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Sabja Mint Lime Juice", price:75 },
    { id:"j5", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Original & Natural Mint Mojito 500ml", price:120, popular:true },
    { id:"j6", active:true, category:"Juices", title:"🥤 Coolers & Fresh Juices", name:"Indian Paneer Grape with mint lime cocktail juice 250ml", price:60 },

    /* ── MILKSHAKES & SPECIALS ─────────────────────────────────────────── */
    { id:"d1", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Lassi", price:75 },
    { id:"d2", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Regular Rosemilk", price:99 },
    { id:"d3", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Sabja Rosemilk", price:99 },
    { id:"d4", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Royal Vanilla Rosemilk", price:99 },
    { id:"d5", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Banana Milkshake", price:99 },
    { id:"d6", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Choco Banana Milkshake", price:99, popular:true },
    { id:"d7", active:true, category:"Milkshakes", title:"🥛 Milkshakes & Specials", name:"Fresh Coconut Milk (1 Ltr)", price:125 },

]

};

// ================================================================
// HELPER — used by control-panel.html
// Returns every unique item exactly once, with a `modes` array
// listing which order-mode(s) the item appears in.
// ================================================================
function getAllMenuItems() {
    const map = new Map();
    Object.entries(MENU_DATA_BY_MODE).forEach(function(entry) {
        var mode = entry[0], items = entry[1];
        items.forEach(function(item) {
            if (map.has(item.id)) {
                map.get(item.id).modes.push(mode);
            } else {
                map.set(item.id, Object.assign({}, item, { modes: [mode] }));
            }
        });
    });
    return Array.from(map.values());
}
