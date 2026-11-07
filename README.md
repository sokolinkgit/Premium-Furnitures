# Smart Art Furniture and Designs

A fast, static marketing and catalogue site for **Smart Art Furniture and Designs** — a furniture
design-build workshop in Kiambu, Kenya, that makes and delivers every furniture variety.

- **Phone / WhatsApp:** 0722 824 703 (`+254722824703`)
- **Location:** Kiambu Town, Kiambu County · showroom visits by appointment
- **Delivery:** countrywide, all 47 counties

## What is in the box

| Path | Purpose |
| --- | --- |
| `index.html` | Home — hero, categories, featured pieces, bespoke service, process, stats, gallery, reviews, FAQ |
| `products.html` | Full catalogue (52 pieces across 10 varieties) with live search, category filters, sorting, quick view, cart |
| `gallery.html` | Project gallery with filters and a keyboard-accessible lightbox |
| `about.html` | Story, values, timeline, delivery, payment and warranty |
| `reviews.html` | Rating summary, filterable reviews, review form (sends to WhatsApp) |
| `contact.html` | Contact cards, enquiry form, showroom, delivery zones, FAQs |
| `assets/css/styles.css` | Design system, components, dark theme, responsive rules |
| `assets/js/data.js` | **All content data** — categories, 52 products, reviews, gallery, FAQs, contact details |
| `assets/js/app.js` | Cart, wishlist, search, quick view, filters, lightbox, forms, animations |
| `assets/img/` | Site photography (optimised JPEGs) |
| `src/pages/*.html` | Page bodies used by the builder |
| `build.py` | Assembles `src/pages` + shared header/footer/overlays into the six HTML files |

No frameworks, no build step required to *view* the site — it is plain HTML, CSS and JS.

## Editing content

**Contact details** live in two places (keep them in sync):

1. `assets/js/data.js` → the `SITE` object (used by all JavaScript-generated links).
2. `build.py` → `PHONE_DISPLAY`, `PHONE_TEL`, `PHONE_INTL`, `LOCATION` (used in the header, footer and floating buttons).

**Products, reviews, gallery and FAQs** are all in `assets/js/data.js`. Add a product to the
`PRODUCTS` array and it automatically appears in the catalogue, search, filters, cart and quick view:

```js
{
    slug: 'my-new-sofa',            // unique, used in URLs (?product=my-new-sofa)
    name: 'My New Sofa',
    cat: 'living',                  // must match an id in CATEGORIES
    price: 65000, was: 75000,       // KSh; `was` is optional
    img: 'sofa-three-seater',       // file name in assets/img (no extension)
    badge: 'New',                   // optional: New | Sale | Bestseller | Signature
    desc: '…',
    material: '…', size: '…', finish: '…', made: '…',
    tags: ['family', 'apartment']
}
```

## Rebuilding the pages

After editing `src/pages/*.html` or the shared shell in `build.py`:

```bash
python3 build.py
```

That writes `index.html`, `products.html`, `gallery.html`, `about.html`, `reviews.html` and
`contact.html` at the repository root.

## Previewing locally

```bash
python3 -m http.server 8000 --bind 0.0.0.0
# then open http://localhost:8000
```

## Features

- Every furniture variety in one catalogue: living room, dining & kitchen, bedroom, beds &
  mattresses, wardrobes & storage, office & study, outdoor & garden, kids & baby,
  hotel & commercial, décor & accents.
- WhatsApp-first ordering: per-product enquiries and a full cart checkout that pre-writes the message.
- Persistent cart and wishlist (localStorage), quick-view product modals, live search (⌘/Ctrl + K).
- Light/dark theme with system preference detection and a manual toggle.
- Scroll-reveal animations, animated counters, marquee, gallery lightbox — all respecting
  `prefers-reduced-motion`.
- Responsive from 320px phones to wide desktops; accessible focus states, ARIA states and skip link.
- No tracking scripts and no external dependencies beyond Google Fonts.
