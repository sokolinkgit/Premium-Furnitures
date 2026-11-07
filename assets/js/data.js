/* ==========================================================================
   SMART ART FURNITURE & DESIGNS — Catalogue data
   Every furniture variety we build, sell and deliver.
   ========================================================================== */

const SITE = {
    name: 'Smart Art Furniture & Designs',
    shortName: 'Smart Art',
    phoneDisplay: '0722 824 703',
    phoneIntl: '254722824703',
    phoneTel: '+254722824703',
    location: 'Kiambu Town, Kiambu County, Kenya',
    hours: 'Mon – Sat · 8:00am – 7:00pm',
    delivery: 'Countrywide delivery across Kenya',
    year: new Date().getFullYear()
};

const CATEGORIES = [
    { id: 'living',     name: 'Living Room',        blurb: 'Sofas, sectionals, coffee tables, media units', img: 'hero-living',      tagline: 'Sofas & lounge seating' },
    { id: 'dining',     name: 'Dining & Kitchen',   blurb: 'Dining sets, chairs, islands, bar stools',      img: 'dining-set',       tagline: 'Tables & dining seating' },
    { id: 'bedroom',    name: 'Bedroom',            blurb: 'Beds, bedside tables, dressing tables',         img: 'hero-bedroom',     tagline: 'Beds & bedroom pieces' },
    { id: 'mattress',   name: 'Beds & Mattresses',  blurb: 'Orthopaedic, pocket-spring & foam mattresses',  img: 'hero-bedroom',     tagline: 'Sleep systems' },
    { id: 'storage',    name: 'Wardrobes & Storage',blurb: 'Wardrobes, shelving, shoe racks, ottomans',     img: 'shelving',         tagline: 'Fitted & freestanding' },
    { id: 'office',     name: 'Office & Study',     blurb: 'Desks, task chairs, boardroom & filing',        img: 'office-desk',      tagline: 'Work & study' },
    { id: 'outdoor',    name: 'Outdoor & Garden',   blurb: 'Patio sets, loungers, benches, parasols',       img: 'outdoor-patio',    tagline: 'Veranda & garden' },
    { id: 'kids',       name: 'Kids & Baby',        blurb: 'Bunk beds, cots, study desks, toy storage',     img: 'kids-room',        tagline: 'Little people, big comfort' },
    { id: 'commercial', name: 'Hotel & Commercial', blurb: 'Hotel suites, restaurants, reception, churches',img: 'showroom',         tagline: 'Hospitality & institutions' },
    { id: 'decor',      name: 'Décor & Accents',    blurb: 'Mirrors, rugs, lamps, consoles, wall art',      img: 'decor-console',    tagline: 'The finishing layer' }
];

const PRODUCTS = [
    /* ---------------- LIVING ROOM ---------------- */
    {
        slug: 'luna-sectional-sofa', name: 'Luna L-Shape Sectional', cat: 'living',
        price: 98500, was: 118000, img: 'sofa-sectional', badge: 'Bestseller',
        desc: 'A deep, low-slung sectional built for long evenings. Kiln-dried hardwood frame, high-resilience foam and a removable bouclé cover that survives real life.',
        material: 'Bouclé weave · kiln-dried hardwood frame',
        size: '320 × 180 × 82 cm', finish: 'Charcoal, sand or rust', made: 'Made to order · 10–14 days',
        tags: ['family', 'modular', 'pet-friendly']
    },
    {
        slug: 'amara-3-seater-sofa', name: 'Amara 3-Seater Sofa', cat: 'living',
        price: 72000, img: 'sofa-three-seater',
        desc: 'Soft rounded arms, tapered oak legs and a seat you can sink into. The Amara is our most versatile living room anchor — equally at home in a bungalow or a city apartment.',
        material: 'Linen-blend upholstery · solid oak legs',
        size: '214 × 92 × 84 cm', finish: 'Cream, oat or sage', made: 'In stock · 3–5 days',
        tags: ['apartment', 'classic']
    },
    {
        slug: 'kigali-leather-sofa', name: 'Kigali Full-Grain Leather Sofa', cat: 'living',
        price: 128000, was: 142000, img: 'hero-living', badge: 'Signature',
        desc: 'Full-grain leather that patinas beautifully with age. Hand-stitched seams, feather-wrapped cushions and a frame guaranteed for a decade of daily use.',
        material: 'Full-grain aniline leather · birch frame',
        size: '232 × 96 × 79 cm', finish: 'Cognac, espresso or black', made: 'Made to order · 14–18 days',
        tags: ['leather', 'premium', 'living']
    },
    {
        slug: 'tana-leather-lounge-chair', name: 'Tana Leather Lounge Chair', cat: 'living',
        price: 46500, img: 'armchair-leather',
        desc: 'A single statement chair with a walnut frame and hand-finished brass caps. Deep enough for a book, upright enough for a meeting.',
        material: 'Top-grain leather · solid walnut',
        size: '82 × 86 × 78 cm', finish: 'Tan, mocha or olive', made: 'In stock · 3–5 days',
        tags: ['accent', 'reading nook']
    },
    {
        slug: 'cedar-live-edge-coffee-table', name: 'Cedar Live-Edge Coffee Table', cat: 'living',
        price: 28900, img: 'coffee-table', badge: 'New',
        desc: 'Each top is cut from a single cedar slab, so no two tables are ever the same. Finished with a food-safe hardwax oil that deepens the grain.',
        material: 'Solid cedar slab · steel base',
        size: '120 × 62 × 42 cm', finish: 'Natural oil or smoked oak', made: 'Made to order · 7–10 days',
        tags: ['handmade', 'one-off']
    },
    {
        slug: 'slat-oak-media-console', name: 'Slat Oak Media Console', cat: 'living',
        price: 34500, img: 'tv-stand',
        desc: 'Slatted doors hide the cable spaghetti, soft-close hinges keep it quiet, and the open shelf takes a soundbar or a basket of remotes.',
        material: 'White oak veneer · powder-coated steel',
        size: '180 × 45 × 52 cm', finish: 'Natural oak or walnut', made: 'In stock · 3–5 days',
        tags: ['storage', 'tv unit']
    },
    {
        slug: 'ember-loveseat', name: 'Ember Two-Seater Loveseat', cat: 'living',
        price: 54000, was: 62000, img: 'sofa-three-seater', badge: 'Sale',
        desc: 'The Amara silhouette in a compact two-seater. Ideal for a reading corner, a guest room or a small lounge that still deserves a proper sofa.',
        material: 'Linen-blend upholstery · solid oak legs',
        size: '162 × 92 × 84 cm', finish: 'Cream, clay or forest', made: 'In stock · 3–5 days',
        tags: ['compact', 'apartment']
    },
    {
        slug: 'nesting-side-tables', name: 'Nesting Side Tables (Set of 2)', cat: 'living',
        price: 18500, img: 'coffee-table',
        desc: 'A pair of slim tables that tuck into each other to save floor space, then pull apart when guests arrive with drinks.',
        material: 'Solid mahogany · matte lacquer',
        size: 'Ø 42 × 48 cm / Ø 34 × 40 cm', finish: 'Walnut or ivory', made: 'In stock · 2–4 days',
        tags: ['set', 'space-saving']
    },

    /* ---------------- DINING & KITCHEN ---------------- */
    {
        slug: 'kaya-8-seater-dining-set', name: 'Kaya 8-Seater Dining Set', cat: 'dining',
        price: 138000, img: 'dining-set', badge: 'Signature',
        desc: 'A solid mango-wood table with hand-woven barrel chairs. Built for Sunday lunches that run into the evening.',
        material: 'Solid mango wood · woven rattan chairs',
        size: '240 × 100 × 76 cm', finish: 'Natural, honey or charcoal', made: 'Made to order · 14 days',
        tags: ['family', 'entertaining', 'set']
    },
    {
        slug: 'msaada-6-seater-dining', name: 'Msaada 6-Seater Dining Table', cat: 'dining',
        price: 96000, was: 110000, img: 'dining-set', badge: 'Sale',
        desc: 'Six seats, one beautifully proportioned top. The pedestal base means nobody is straddling a leg at dinner.',
        material: 'Solid acacia · steel pedestal',
        size: '200 × 95 × 76 cm', finish: 'Walnut or smoked oak', made: 'In stock · 5–7 days',
        tags: ['family', 'six seater']
    },
    {
        slug: 'hilla-boucle-dining-chair', name: 'Hilla Bouclé Dining Chair', cat: 'dining',
        price: 14500, img: 'dining-chair',
        desc: 'A curved back that actually supports you through a long meal, in a fabric that wipes clean after a spill.',
        material: 'Bouclé over high-density foam · walnut legs',
        size: '52 × 56 × 82 cm', finish: 'Oat, clay, sage or ink', made: 'In stock · 2–4 days',
        tags: ['chair', 'upholstered']
    },
    {
        slug: 'rush-seat-bar-stool', name: 'Rush-Seat Bar Stool', cat: 'dining',
        price: 9800, img: 'kitchen-island',
        desc: 'Hand-woven rush seat on a slim steel frame. Sold individually — most kitchens take three or four.',
        material: 'Rush seat · powder-coated steel',
        size: '40 × 40 × 68 cm', finish: 'Black, sand or olive frame', made: 'In stock · 2–4 days',
        tags: ['kitchen', 'counter']
    },
    {
        slug: 'soho-kitchen-island', name: 'Soho Kitchen Island', cat: 'dining',
        price: 88000, img: 'kitchen-island', badge: 'New',
        desc: 'A working island with a stone top, integrated shelving and room for three stools. The heart of an open-plan kitchen.',
        material: 'Quartz top · oak carcass',
        size: '180 × 90 × 90 cm', finish: 'Oak or charcoal base', made: 'Made to order · 18 days',
        tags: ['kitchen', 'storage']
    },
    {
        slug: 'acacia-sideboard', name: 'Acacia Sideboard', cat: 'dining',
        price: 42500, img: 'tv-stand',
        desc: 'Six doors of concealed storage for serving dishes, board games and the good cutlery. Cable ports at the back if you prefer a bar setup.',
        material: 'Solid acacia · brass pulls',
        size: '180 × 42 × 82 cm', finish: 'Natural acacia', made: 'In stock · 5–7 days',
        tags: ['storage', 'buffet']
    },
    {
        slug: 'mbuni-dining-bench', name: 'Mbuni Dining Bench', cat: 'dining',
        price: 26500, img: 'dining-set',
        desc: 'A slim bench that seats three and slides entirely under the table — a small room’s best friend.',
        material: 'Solid mango wood',
        size: '160 × 35 × 45 cm', finish: 'Natural or walnut stain', made: 'In stock · 3–5 days',
        tags: ['bench', 'space-saving']
    },

    /* ---------------- BEDROOM ---------------- */
    {
        slug: 'serene-upholstered-bed', name: 'Serene Upholstered Bed', cat: 'bedroom',
        price: 84000, img: 'hero-bedroom', badge: 'Signature',
        desc: 'A channel-tufted headboard you can lean on without a pillow, on a reinforced slat base that keeps the mattress breathing.',
        material: 'Linen-blend upholstery · solid beech slats',
        size: '5 × 6 ft and 6 × 6 ft', finish: 'Oatmeal, sand or slate', made: 'Made to order · 12 days',
        tags: ['bed', 'upholstered']
    },
    {
        slug: 'wazi-oak-platform-bed', name: 'Wazi Oak Platform Bed', cat: 'bedroom',
        price: 62000, img: 'hero-bedroom',
        desc: 'Low, architectural and honest. A solid oak platform with a floating side table detail and no squeak anywhere.',
        material: 'Solid oak · oiled finish',
        size: '5 × 6 ft / 6 × 6 ft', finish: 'Natural oak', made: 'Made to order · 10 days',
        tags: ['bed', 'minimal']
    },
    {
        slug: 'kito-bedside-pair', name: 'Kito Bedside Tables (Pair)', cat: 'bedroom',
        price: 26000, img: 'shelving',
        desc: 'Two matching bedside tables with a soft-close drawer and an open shelf for the book you are actually reading.',
        material: 'Oak veneer · brass handles',
        size: '45 × 40 × 55 cm each', finish: 'Oak or walnut', made: 'In stock · 3–5 days',
        tags: ['pair', 'storage']
    },
    {
        slug: 'vania-dressing-table', name: 'Vania Dressing Table', cat: 'bedroom',
        price: 39500, img: 'decor-console',
        desc: 'A proper vanity with a lit mirror surround, felt-lined jewellery drawer and a stool that tucks away.',
        material: 'Mahogany · antique brass',
        size: '110 × 45 × 78 cm', finish: 'Walnut or ivory', made: 'Made to order · 10 days',
        tags: ['vanity', 'mirror']
    },
    {
        slug: 'jua-round-mirror', name: 'Jua Round Mirror', cat: 'bedroom',
        price: 14200, img: 'decor-console',
        desc: 'A 90cm round mirror with a slim brass rim — the fastest way to make a small room feel twice its size.',
        material: 'Brushed brass · 5mm glass',
        size: 'Ø 90 cm', finish: 'Brass or matte black', made: 'In stock · 2–4 days',
        tags: ['mirror', 'wall']
    },
    {
        slug: 'stonewash-linen-bedding', name: 'Stonewash Linen Bedding Set', cat: 'bedroom',
        price: 12500, img: 'hero-bedroom',
        desc: 'European flax, stonewashed until it feels like it has already been yours for years. Duvet cover, fitted sheet and two pillowcases.',
        material: '100% stonewashed flax linen',
        size: 'Queen & king', finish: 'Cream, clay, olive, charcoal', made: 'In stock · 2–3 days',
        tags: ['bedding', 'soft furnishing']
    },

    /* ---------------- BEDS & MATTRESSES ---------------- */
    {
        slug: 'orthopaedic-queen-mattress', name: 'Orthopaedic Queen Mattress', cat: 'mattress',
        price: 42000, img: 'hero-bedroom',
        desc: 'High-density support layers with a breathable knit cover — the firm, no-nonsense mattress most Kenyan backs ask for.',
        material: 'High-density foam · bonnell spring unit',
        size: '5 × 6 ft (Queen)', finish: 'Firm feel · 8-year warranty', made: 'In stock · 1–3 days',
        tags: ['firm', 'queen']
    },
    {
        slug: 'pocket-spring-king-mattress', name: 'Pocket-Spring King Mattress', cat: 'mattress',
        price: 68000, img: 'hero-bedroom', badge: 'Signature',
        desc: 'Individually pocketed springs so one of you can roll over without waking the other, topped with a cooling gel memory layer.',
        material: 'Pocket springs · gel memory foam',
        size: '6 × 6 ft (King)', finish: 'Medium feel · 10-year warranty', made: 'In stock · 1–3 days',
        tags: ['king', 'premium', 'cooling']
    },
    {
        slug: 'high-density-double-mattress', name: 'High-Density Double Mattress', cat: 'mattress',
        price: 28500, img: 'hero-bedroom',
        desc: 'A dependable double for guest rooms and rentals, with a removable washable cover and edge support that holds its shape.',
        material: 'High-density foam · quilted cover',
        size: '4.5 × 6 ft (Double)', finish: 'Medium-firm · 5-year warranty', made: 'In stock · 1–3 days',
        tags: ['double', 'value']
    },
    {
        slug: 'single-bed-mattress', name: 'Single Bed Mattress', cat: 'mattress',
        price: 16500, img: 'hero-bedroom',
        desc: 'Built for bunk beds, hostels and guest rooms — firm, light enough to flip alone and easy to wipe down.',
        material: 'Compressed foam · woven cover',
        size: '3 × 6 ft (Single)', finish: 'Firm · 3-year warranty', made: 'In stock · 1–3 days',
        tags: ['single', 'kids', 'hostel']
    },

    /* ---------------- WARDROBES & STORAGE ---------------- */
    {
        slug: 'slat-front-oak-wardrobe', name: 'Slat-Front Oak Wardrobe', cat: 'storage',
        price: 76000, img: 'wardrobe-oak', badge: 'Signature',
        desc: 'Slatted doors that let your clothes breathe, full-extension drawers and an internal layout we configure to your wardrobe.',
        material: 'Oak veneer · solid oak slats',
        size: '180 × 60 × 220 cm', finish: 'Natural oak or smoked', made: 'Made to order · 14 days',
        tags: ['wardrobe', 'bedroom']
    },
    {
        slug: 'three-door-fitted-closet', name: 'Three-Door Fitted Closet', cat: 'storage',
        price: 92000, img: 'wardrobe-oak',
        desc: 'Floor-to-ceiling fitted storage with a mirror door, shoe bank and a lockable top box. Measured and installed in your room.',
        material: 'MDF carcass · oak veneer doors',
        size: 'Custom · from 210 cm high', finish: 'Oak, ivory or charcoal', made: 'Made to measure · 18 days',
        tags: ['fitted', 'made to measure']
    },
    {
        slug: 'amani-open-shelving', name: 'Amani Open Shelving Unit', cat: 'storage',
        price: 31000, img: 'shelving',
        desc: 'Five open bays on a slim steel frame — a library, a plant stand and a display unit in one.',
        material: 'Solid pine · matte steel frame',
        size: '120 × 35 × 190 cm', finish: 'Natural pine or walnut', made: 'In stock · 3–5 days',
        tags: ['shelving', 'display']
    },
    {
        slug: 'entry-shoe-rack', name: 'Entry Shoe Rack', cat: 'storage',
        price: 12500, img: 'shelving',
        desc: 'Three tiers of breathable slats, a bench to sit on while you tie your shoes, and a rail for the umbrella.',
        material: 'Bamboo slats · steel frame',
        size: '90 × 32 × 55 cm', finish: 'Natural bamboo', made: 'In stock · 2–4 days',
        tags: ['entryway', 'small']
    },
    {
        slug: 'woven-storage-ottoman', name: 'Woven Storage Ottoman', cat: 'storage',
        price: 14800, img: 'sofa-three-seater',
        desc: 'Doubles as a footrest, a spare seat and a hiding place for blankets. The lid is padded for resting feet.',
        material: 'Woven seagrass · padded lid',
        size: 'Ø 55 × 42 cm', finish: 'Natural seagrass', made: 'In stock · 2–4 days',
        tags: ['multi-use', 'small']
    },

    /* ---------------- OFFICE & STUDY ---------------- */
    {
        slug: 'executive-walnut-desk', name: 'Executive Walnut Desk', cat: 'office',
        price: 68000, img: 'office-desk', badge: 'Signature',
        desc: 'A serious desk: 25mm walnut top, cable channel, file drawer and a leather inlay that keeps pens where you left them.',
        material: 'Walnut veneer · leather inlay',
        size: '180 × 80 × 76 cm', finish: 'Walnut or charcoal oak', made: 'Made to order · 12 days',
        tags: ['desk', 'home office']
    },
    {
        slug: 'compact-study-desk', name: 'Compact Study Desk', cat: 'office',
        price: 34500, img: 'office-desk',
        desc: 'Fits a laptop, a monitor and a mug without eating the room. Two shallow drawers and a shelf for the router.',
        material: 'Oak veneer · steel legs',
        size: '120 × 60 × 75 cm', finish: 'Oak, white or ink', made: 'In stock · 3–5 days',
        tags: ['study', 'small']
    },
    {
        slug: 'ergo-mesh-task-chair', name: 'Ergo Mesh Task Chair', cat: 'office',
        price: 24500, img: 'office-chair', badge: 'Bestseller',
        desc: 'Adjustable lumbar, 4D armrests and a breathable mesh back for the eight-hour days that turn into ten.',
        material: 'Nylon mesh · gas-lift aluminium base',
        size: 'Seat 50 × 48 cm · height adjustable', finish: 'Black or grey', made: 'In stock · 2–4 days',
        tags: ['chair', 'ergonomic']
    },
    {
        slug: 'boardroom-table-8', name: 'Boardroom Table (8 Pax)', cat: 'office',
        price: 118000, img: 'dining-set',
        desc: 'A single-span conference table with in-built cable grommets and a matte top that does not show fingerprints.',
        material: 'Oak veneer · steel underframe',
        size: '280 × 110 × 75 cm', finish: 'Walnut or natural oak', made: 'Made to order · 18 days',
        tags: ['conference', 'commercial']
    },
    {
        slug: 'three-drawer-filing-cabinet', name: 'Three-Drawer Filing Cabinet', cat: 'office',
        price: 18500, img: 'shelving',
        desc: 'Full-extension drawers on steel runners, a lock on the top drawer and castors so it moves when you rearrange.',
        material: 'Steel · powder-coated finish',
        size: '42 × 52 × 62 cm', finish: 'Charcoal, ivory or sage', made: 'In stock · 2–4 days',
        tags: ['filing', 'storage']
    },
    {
        slug: 'ladder-bookshelf', name: 'Ladder Bookshelf', cat: 'office',
        price: 23500, img: 'shelving',
        desc: 'A leaning ladder shelf with five graduated tiers — an instant library that never needs a wall drill.',
        material: 'Solid pine · matte finish',
        size: '60 × 35 × 180 cm', finish: 'Natural pine or espresso', made: 'In stock · 3–5 days',
        tags: ['books', 'study']
    },

    /* ---------------- OUTDOOR & GARDEN ---------------- */
    {
        slug: 'veranda-rattan-lounge-set', name: 'Veranda Rattan Lounge Set', cat: 'outdoor',
        price: 76000, img: 'outdoor-patio', badge: 'Bestseller',
        desc: 'A four-piece all-weather rattan set — two chairs, a sofa and a coffee table with a glass top. Cushions included and showerproof.',
        material: 'UV-treated PE rattan · aluminium frame',
        size: 'Sofa 160 cm · chairs 75 cm', finish: 'Natural weave · sand cushions', made: 'In stock · 4–6 days',
        tags: ['patio', 'set', 'all-weather']
    },
    {
        slug: 'garden-lounger-pair', name: 'Garden Lounger Pair', cat: 'outdoor',
        price: 44000, img: 'outdoor-patio',
        desc: 'Two reclining loungers with five back positions and wipe-clean cushions. Fold them flat and store them under the bed.',
        material: 'Acacia frame · outdoor fabric',
        size: '60 × 190 cm each', finish: 'Teak oil or whitewash', made: 'In stock · 3–5 days',
        tags: ['poolside', 'pair']
    },
    {
        slug: 'teak-garden-bench', name: 'Teak Garden Bench', cat: 'outdoor',
        price: 32000, img: 'outdoor-patio',
        desc: 'A three-seater bench in plantation teak that greys gracefully if you leave it to the weather.',
        material: 'Plantation teak · brass fixings',
        size: '150 × 58 × 88 cm', finish: 'Natural teak', made: 'Made to order · 10 days',
        tags: ['garden', 'bench']
    },
    {
        slug: 'cantilever-parasol', name: 'Cantilever Parasol', cat: 'outdoor',
        price: 21000, img: 'outdoor-patio',
        desc: 'A 3m offset parasol with a crank tilt and a weighted base — shade exactly where you want it, no pole through the table.',
        material: 'Aluminium frame · polyester canopy',
        size: 'Ø 300 cm', finish: 'Cream, charcoal or terracotta', made: 'In stock · 3–5 days',
        tags: ['shade', 'patio']
    },

    /* ---------------- KIDS & BABY ---------------- */
    {
        slug: 'kito-bunk-bed', name: 'Kito Bunk Bed with Storage', cat: 'kids',
        price: 48000, img: 'kids-room', badge: 'New',
        desc: 'A full-height bunk with a proper ladder, guard rails on both sides and three drawers underneath for the toy mountain.',
        material: 'Solid pine · child-safe water-based finish',
        size: '200 × 100 cm per bunk', finish: 'Natural pine, white or sage', made: 'Made to order · 10 days',
        tags: ['bunk', 'storage', 'siblings']
    },
    {
        slug: 'safari-toddler-cot', name: 'Safari Toddler Cot', cat: 'kids',
        price: 26500, img: 'kids-room',
        desc: 'Converts from cot to toddler bed as they grow, with rounded edges throughout and a teething rail on both sides.',
        material: 'Solid beech · water-based finish',
        size: '145 × 75 cm', finish: 'White, natural or sage', made: 'In stock · 4–6 days',
        tags: ['cot', 'baby', 'convertible']
    },
    {
        slug: 'little-artist-study-desk', name: 'Little Artist Study Desk', cat: 'kids',
        price: 19500, img: 'kids-room',
        desc: 'A height-appropriate desk with a tilted drawing top, a pen well and a cork board for the masterpieces.',
        material: 'Pine · child-safe paint',
        size: '90 × 55 × 62 cm', finish: 'White, mint or natural', made: 'In stock · 3–5 days',
        tags: ['study', 'kids']
    },
    {
        slug: 'toy-storage-bench', name: 'Toy Storage Bench', cat: 'kids',
        price: 13800, img: 'shelving',
        desc: 'Three deep bins under a padded bench — tidying up becomes a two-minute game instead of a Saturday job.',
        material: 'MDF · fabric bins',
        size: '100 × 40 × 50 cm', finish: 'White, grey or sage', made: 'In stock · 2–4 days',
        tags: ['storage', 'playroom']
    },

    /* ---------------- HOTEL & COMMERCIAL ---------------- */
    {
        slug: 'hotel-suite-package', name: 'Hotel Suite Furniture Package', cat: 'commercial',
        price: 245000, img: 'hero-bedroom', badge: 'Signature',
        desc: 'A complete room set: bed and headboard, two bedside tables, desk, luggage bench, wardrobe and lounge chair. Contract-grade fabrics throughout.',
        material: 'Contract-grade foam & fabrics · hardwood',
        size: 'Configured per room plan', finish: 'Rates available for 10+ rooms', made: 'Made to order · 4–6 weeks',
        tags: ['hospitality', 'bulk', 'turnkey']
    },
    {
        slug: 'restaurant-table-seating', name: 'Restaurant Table & Seating Set', cat: 'commercial',
        price: 62000, img: 'dining-set',
        desc: 'A four-cover restaurant set built for volume: wipe-clean top, stackable chairs and a base that survives a thousand services.',
        material: 'Solid wood top · powder-coated steel base',
        size: '120 × 70 cm table · 4 chairs', finish: 'Walnut, oak or charcoal', made: 'Made to order · 3 weeks',
        tags: ['restaurant', 'commercial']
    },
    {
        slug: 'bespoke-reception-desk', name: 'Bespoke Reception Desk', cat: 'commercial',
        price: 118000, img: 'showroom',
        desc: 'A statement reception with a curved front, integrated cable management and a lockable cash drawer. Built to your floor plan.',
        material: 'Oak veneer · solid surface counter',
        size: 'Made to measure', finish: 'Brand-matched finishes', made: 'Made to measure · 4 weeks',
        tags: ['reception', 'office', 'made to measure']
    },
    {
        slug: 'solid-mahogany-pew', name: 'Solid Mahogany Pew', cat: 'commercial',
        price: 28500, img: 'showroom',
        desc: 'A three-metre pew with a padded seat and book rail, finished for daily use. Supplied in runs for churches and chapels.',
        material: 'Solid mahogany · padded seat',
        size: '300 cm · 6–8 seats', finish: 'Honey oak, mahogany or white', made: 'Made to order · 3 weeks',
        tags: ['church', 'institutional', 'bulk']
    },

    /* ---------------- DÉCOR & ACCENTS ---------------- */
    {
        slug: 'brass-oak-console', name: 'Brass & Oak Console', cat: 'decor',
        price: 27500, img: 'decor-console',
        desc: 'A slim console for the hallway or behind the sofa — brass frame, oak top, one drawer and a lower shelf for baskets.',
        material: 'Oak top · brushed brass frame',
        size: '110 × 35 × 78 cm', finish: 'Brass with oak or black', made: 'In stock · 3–5 days',
        tags: ['hallway', 'console']
    },
    {
        slug: 'handwoven-jute-rug', name: 'Handwoven Jute Rug', cat: 'decor',
        price: 24500, img: 'showroom',
        desc: 'A dense handwoven jute rug that grounds a room and hides the wear of a busy household. Made to size on request.',
        material: '100% natural jute',
        size: '200 × 300 cm or made to size', finish: 'Natural, sand or charcoal', made: 'In stock · 3–7 days',
        tags: ['rug', 'natural']
    },
    {
        slug: 'ceramic-table-lamp', name: 'Ceramic Table Lamp', cat: 'decor',
        price: 8900, img: 'decor-console',
        desc: 'A hand-thrown ceramic base with a linen shade and a warm dimmable bulb — instant atmosphere on a bedside or console.',
        material: 'Glazed ceramic · linen shade',
        size: 'H 52 cm', finish: 'Clay, cream or olive', made: 'In stock · 2–4 days',
        tags: ['lighting', 'accent']
    },
    {
        slug: 'gallery-wall-set', name: 'Gallery Wall Set (6 Frames)', cat: 'decor',
        price: 15600, img: 'craftsman',
        desc: 'Six solid-wood frames with a hanging template, so the gallery wall goes up straight the first time.',
        material: 'Solid wood · acrylic glazing',
        size: 'Mix of A4 & A3', finish: 'Oak, black or white', made: 'In stock · 2–4 days',
        tags: ['wall art', 'gift']
    }
];

/* ---------------- REVIEWS ---------------- */
const REVIEWS = [
    { name: 'Wanjiku M.', city: 'Kiambu', rating: 5, date: 'Oct 2026', product: 'Serene Upholstered Bed', text: 'They measured my room, sent fabric samples on WhatsApp and delivered in twelve days. The bed is genuinely better made than what I saw in the city showrooms at twice the price.' },
    { name: 'Brian K.', city: 'Nairobi', rating: 5, date: 'Oct 2026', product: 'Kigali Leather Sofa', text: 'The leather smells like a proper leather chair should. Two months in and it is already softening beautifully. Delivery team carried it up four floors without a scratch.' },
    { name: 'Amina H.', city: 'Ruiru', rating: 5, date: 'Sep 2026', product: 'Kaya 8-Seater Dining Set', text: 'We host family every Sunday and this table has become the centre of the house. The woven chairs are surprisingly comfortable for long meals.' },
    { name: 'Peter N.', city: 'Thika', rating: 4, date: 'Sep 2026', product: 'Executive Walnut Desk', text: 'Beautiful desk, very solid. Delivery took a few days longer than promised but they kept me updated the whole time. Would buy again.' },
    { name: 'Grace & Tom', city: 'Kikuyu', rating: 5, date: 'Sep 2026', product: 'Hotel Suite Package', text: 'Smart Art furnished all eight rooms of our guesthouse. One point of contact, one invoice, done in five weeks. Guests keep commenting on the furniture.' },
    { name: 'Faith W.', city: 'Juja', rating: 5, date: 'Aug 2026', product: 'Kito Bunk Bed', text: 'My boys fight over who gets the top bunk, so I would call that a success. The drawers underneath swallowed all the toys.' },
    { name: 'Joseph O.', city: 'Nakuru', rating: 5, date: 'Aug 2026', product: 'Veranda Rattan Lounge Set', text: 'Shipped to Nakuru safely and the cushions survived the rain because they dry fast. Very happy with the whole process.' },
    { name: 'Sarah A.', city: 'Kiambu', rating: 5, date: 'Aug 2026', product: 'Slat-Front Oak Wardrobe', text: 'The fitted wardrobe transformed my bedroom. They came for a site visit, built it in a week and cleaned up afterwards.' },
    { name: 'Dennis M.', city: 'Nairobi', rating: 5, date: 'Jul 2026', product: 'Ergo Mesh Task Chair', text: 'My back has stopped complaining. Best 24k I have spent on a work-from-home setup and the support over WhatsApp was instant.' },
    { name: 'Lucy K.', city: 'Limuru', rating: 4, date: 'Jul 2026', product: 'Amara 3-Seater Sofa', text: 'Lovely sofa, exactly the cream from the samples. Only note is that it is firm for the first couple of weeks — perfect after that.' },
    { name: 'Hassan A.', city: 'Mombasa', rating: 5, date: 'Jul 2026', product: 'Pocket-Spring King Mattress', text: 'Delivered to Mombasa on the bus in three days, wrapped properly, no damage. Sleeping like a baby.' },
    { name: 'Mercy G.', city: 'Machakos', rating: 5, date: 'Jun 2026', product: 'Soho Kitchen Island', text: 'Quoted, built and installed in three weeks. It has become the most useful thing in my kitchen — the stools slide right under.' },
    { name: 'Kiptoo R.', city: 'Eldoret', rating: 5, date: 'Jun 2026', product: 'Solid Mahogany Pew', text: 'Ordered fourteen pews for our church. The finish is even across all of them and they delivered on the agreed date.' },
    { name: 'Njeri & Co.', city: 'Nyeri', rating: 5, date: 'Jun 2026', product: 'Three-Door Fitted Closet', text: 'They drove to Nyeri for the measuring, then returned to install. Storage we simply did not have before.' },
    { name: 'Alex T.', city: 'Kiserian', rating: 4, date: 'May 2026', product: 'Cedar Live-Edge Coffee Table', text: 'A genuinely one-of-a-kind table. I was shown the exact slab before they built it, which I appreciated.' },
    { name: 'Rose N.', city: 'Kiambu', rating: 5, date: 'May 2026', product: 'Vania Dressing Table', text: 'The mirror lighting is practical, not just pretty. Delivery was on a Sunday because that is when I was home. Excellent service.' },
    { name: 'Samuel K.', city: 'Nairobi', rating: 5, date: 'Apr 2026', product: 'Boardroom Table', text: 'We fitted out a boardroom with them. Clean lines, no wobble, cables hidden. They understood the brief immediately.' },
    { name: 'Esther M.', city: 'Ruiru', rating: 5, date: 'Apr 2026', product: 'Compact Study Desk', text: 'Small desk, big difference. Ordering on WhatsApp took ten minutes and they answered every photo I sent of my space.' }
];

/* ---------------- GALLERY ---------------- */
const GALLERY = [
    { img: 'hero-living',      title: 'Kigali leather lounge',  tag: 'Residential', cat: 'Kiambu · 2026' },
    { img: 'dining-set',       title: 'Kaya dining room',       tag: 'Residential', cat: 'Nairobi · 2026' },
    { img: 'hero-bedroom',     title: 'Serene master suite',    tag: 'Residential', cat: 'Ruiru · 2025' },
    { img: 'sofa-sectional',   title: 'Luna sectional build',   tag: 'Bespoke',     cat: 'Workshop · 2026' },
    { img: 'kitchen-island',   title: 'Soho open kitchen',      tag: 'Residential', cat: 'Thika · 2026' },
    { img: 'office-desk',      title: 'Home office fit-out',    tag: 'Residential', cat: 'Nairobi · 2025' },
    { img: 'showroom',         title: 'Hospitality reception',  tag: 'Commercial',  cat: 'Westlands · 2026' },
    { img: 'outdoor-patio',    title: 'Veranda lounge',         tag: 'Residential', cat: 'Karen · 2025' },
    { img: 'wardrobe-oak',     title: 'Fitted wardrobe run',    tag: 'Bespoke',     cat: 'Kiambu · 2026' },
    { img: 'kids-room',        title: 'Shared kids room',       tag: 'Residential', cat: 'Juja · 2026' },
    { img: 'craftsman',        title: 'Hand-finishing shop',    tag: 'Bespoke',     cat: 'Workshop · 2026' },
    { img: 'decor-console',    title: 'Hallway console styling',tag: 'Residential', cat: 'Kikuyu · 2025' }
];

/* ---------------- FAQ ---------------- */
const FAQS = [
    {
        q: 'Do you really make every kind of furniture?',
        a: 'Yes — living room, dining and kitchen, bedroom and mattresses, wardrobes and storage, office and study, outdoor and garden, kids and baby, décor, plus hotel, restaurant, church and institutional pieces. If it is furniture, we either build it in our Kiambu workshop or source it and finish it to the same standard.'
    },
    {
        q: 'How does delivery work and how much does it cost?',
        a: 'Delivery is countrywide. Within Kiambu and Nairobi we deliver in 1–3 days; upcountry takes 2–5 days by courier or bus parcel. Fees depend on distance and size — small items are usually KSh 500–1,500, and large sets are quoted per trip. The exact cost is confirmed on WhatsApp before you pay anything.'
    },
    {
        q: 'Can I order a custom size, fabric or finish?',
        a: 'That is most of what we do. Send us a photo, a Pinterest link or a rough sketch with your measurements. We will send fabric swatches, a fixed quote and a production timeline, usually within 24 hours.'
    },
    {
        q: 'What is the payment arrangement?',
        a: 'For in-stock items, payment is on delivery or on confirmation. For made-to-order pieces we take 50% to start production and the balance on delivery. M-Pesa, bank transfer and cash are all accepted, and every order gets a written receipt.'
    },
    {
        q: 'Is there a warranty?',
        a: 'Every piece carries a 1-year workmanship warranty; mattresses run 3–10 years depending on the model, and frames are built for a decade of daily use. If something fails because of how we built it, we repair or replace it.'
    },
    {
        q: 'Do you furnish hotels, offices, churches and rentals in bulk?',
        a: 'We do. We regularly supply hospitality and institutional furniture, and we can handle one room or forty. Bulk orders get staged delivery, consolidated invoicing and contract-grade fabrics that meet fire and wear standards.'
    },
    {
        q: 'Can I see the furniture before buying?',
        a: 'Yes. Visit our showroom in Kiambu Town by appointment, or ask us to send a short video of the exact piece in the workshop. For local orders we can also bring fabric samples to your home.'
    },
    {
        q: 'How long does a made-to-order piece take?',
        a: 'Simple pieces take 7–10 days, upholstery and fitted wardrobes 12–18 days, and full commercial fit-outs 3–6 weeks. You get a production date in writing when you confirm the order.'
    }
];
