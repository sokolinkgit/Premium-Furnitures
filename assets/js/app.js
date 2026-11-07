/* ==========================================================================
   SMART ART FURNITURE & DESIGNS — app.js
   ========================================================================== */
(function () {
    'use strict';

    /* ---------- helpers ---------- */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const money = n => 'KSh ' + Number(n).toLocaleString('en-KE');
    const img = name => `assets/img/${name}.jpg`;
    const icon = (name, cls = '') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
    const productBySlug = slug => PRODUCTS.find(p => p.slug === slug);
    const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || id;

    const store = {
        get(key, fallback) {
            try {
                const raw = localStorage.getItem(key);
                return raw === null ? fallback : JSON.parse(raw);
            } catch (e) { return fallback; }
        },
        set(key, value) {
            try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
        }
    };

    const wa = message => `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;

    const state = {
        cart: store.get('safd_cart', []),
        wishlist: store.get('safd_wishlist', [])
    };

    /* ---------- header ---------- */
    const header = $('#header');
    const onScroll = () => {
        if (header) header.classList.toggle('is-stuck', window.scrollY > 12);
        const top = $('#backToTop');
        if (top) top.classList.toggle('is-visible', window.scrollY > 640);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const top = $('#backToTop');
    if (top) top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ---------- theme ---------- */
    const themeToggle = $('#themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            store.set('safd_theme', next);
            themeToggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        });
    }

    /* ---------- mega menu ---------- */
    const megaItem = $('.has-mega');
    if (megaItem) {
        const trigger = $('.nav__link--btn', megaItem);
        const closeMega = () => {
            megaItem.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
        };
        trigger.addEventListener('click', e => {
            e.preventDefault();
            const open = megaItem.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', String(open));
        });
        megaItem.addEventListener('mouseenter', () => {
            megaItem.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
        });
        megaItem.addEventListener('mouseleave', closeMega);
        document.addEventListener('click', e => { if (!e.target.closest('.has-mega')) closeMega(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMega(); });
    }

    /* ---------- mobile nav ---------- */
    const mnav = $('#mobileNav');
    const openMnav = () => { if (mnav) { mnav.classList.add('is-open'); document.body.classList.add('no-scroll'); } };
    const closeMnav = () => { if (mnav) { mnav.classList.remove('is-open'); document.body.classList.remove('no-scroll'); } };
    $$('[data-open-menu]').forEach(b => b.addEventListener('click', openMnav));
    $$('[data-close-menu]').forEach(b => b.addEventListener('click', closeMnav));

    /* ---------- toasts ---------- */
    function toast(message, opts = {}) {
        const stack = $('#toastStack');
        if (!stack) return;
        const el = document.createElement('div');
        el.className = 'toast';
        el.innerHTML = `${icon(opts.icon || 'check')}<span>${message}</span>`;
        stack.appendChild(el);
        setTimeout(() => {
            el.classList.add('is-out');
            setTimeout(() => el.remove(), 400);
        }, opts.duration || 2800);
    }

    /* ---------- overlay / cart ---------- */
    const overlay = $('#overlay');
    const cartDrawer = $('#cartDrawer');

    function openCart() {
        if (!cartDrawer) return;
        renderCart();
        cartDrawer.classList.add('is-open');
        cartDrawer.setAttribute('aria-hidden', 'false');
        if (overlay) overlay.classList.add('is-open');
        document.body.classList.add('no-scroll');
    }
    function closeCart() {
        if (!cartDrawer) return;
        cartDrawer.classList.remove('is-open');
        cartDrawer.setAttribute('aria-hidden', 'true');
        if (overlay) overlay.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
    }

    $$('[data-open-cart]').forEach(b => b.addEventListener('click', openCart));
    $$('[data-close-cart]').forEach(b => b.addEventListener('click', closeCart));
    if (overlay) overlay.addEventListener('click', closeCart);

    /* ---------- cart logic ---------- */
    function saveCart() { store.set('safd_cart', state.cart); }

    function cartCount() { return state.cart.reduce((sum, i) => sum + i.qty, 0); }
    function cartTotal() {
        return state.cart.reduce((sum, i) => {
            const p = productBySlug(i.slug);
            return p ? sum + p.price * i.qty : sum;
        }, 0);
    }

    function addToCart(slug, qty = 1, silent = false) {
        const product = productBySlug(slug);
        if (!product) return;
        const line = state.cart.find(i => i.slug === slug);
        if (line) line.qty += qty;
        else state.cart.push({ slug, qty });
        saveCart();
        renderCart();
        if (!silent) toast(`${product.name} added to cart`, { icon: 'cart' });
    }

    function setQty(slug, qty) {
        const line = state.cart.find(i => i.slug === slug);
        if (!line) return;
        line.qty = qty;
        if (line.qty <= 0) state.cart = state.cart.filter(i => i.slug !== slug);
        saveCart();
        renderCart();
    }

    function removeLine(slug) {
        state.cart = state.cart.filter(i => i.slug !== slug);
        saveCart();
        renderCart();
    }

    function renderCart() {
        const count = cartCount();
        $$('#cartCount, [data-cart-count]').forEach(el => {
            el.textContent = count;
            if (el.hasAttribute('data-cart-count')) el.hidden = count === 0;
        });

        const body = $('#cartBody');
        if (!body) return;

        if (!state.cart.length) {
            body.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty__icon">${icon('cart')}</div>
                    <h4>Your cart is empty</h4>
                    <p>Browse the collection and add the pieces you love.</p>
                    <a class="btn btn--primary btn--sm" href="products.html">Explore the collection ${icon('arrow')}</a>
                </div>`;
        } else {
            body.innerHTML = state.cart.map(line => {
                const p = productBySlug(line.slug);
                if (!p) return '';
                return `
                <div class="cart-line">
                    <img src="${img(p.img)}" alt="${p.name}" loading="lazy">
                    <div>
                        <div class="cart-line__name">${p.name}</div>
                        <div class="cart-line__cat">${catName(p.cat)}</div>
                        <div class="cart-line__row">
                            <div class="qty">
                                <button type="button" data-qty="${p.slug}" data-delta="-1" aria-label="Decrease quantity">${icon('minus')}</button>
                                <span>${line.qty}</span>
                                <button type="button" data-qty="${p.slug}" data-delta="1" aria-label="Increase quantity">${icon('plus')}</button>
                            </div>
                            <div class="cart-line__price">${money(p.price * line.qty)}</div>
                        </div>
                        <div class="cart-line__row">
                            <button type="button" class="cart-line__remove" data-remove="${p.slug}">${icon('trash')} Remove</button>
                        </div>
                    </div>
                </div>`;
            }).join('');
        }

        const subtotal = $('#cartSubtotal');
        const total = $('#cartTotal');
        if (subtotal) subtotal.textContent = money(cartTotal());
        if (total) total.textContent = money(cartTotal());
        const drawerCount = $('#cartDrawerCount');
        if (drawerCount) drawerCount.textContent = count ? `(${count} item${count > 1 ? 's' : ''})` : '';

        const checkout = $('#checkoutBtn');
        if (checkout) checkout.disabled = !state.cart.length;
        if (checkout) checkout.style.opacity = state.cart.length ? '1' : '.5';
    }

    document.addEventListener('click', e => {
        const qtyBtn = e.target.closest('[data-qty]');
        if (qtyBtn) {
            const slug = qtyBtn.dataset.qty;
            const delta = Number(qtyBtn.dataset.delta);
            const line = state.cart.find(i => i.slug === slug);
            if (line) setQty(slug, line.qty + delta);
            return;
        }
        const removeBtn = e.target.closest('[data-remove]');
        if (removeBtn) { removeLine(removeBtn.dataset.remove); return; }

        const addBtn = e.target.closest('[data-add]');
        if (addBtn) { addToCart(addBtn.dataset.add, 1); return; }

        const favBtn = e.target.closest('[data-fav]');
        if (favBtn) { toggleWishlist(favBtn.dataset.fav); return; }

        const quickBtn = e.target.closest('[data-quick]');
        if (quickBtn) { openQuickView(quickBtn.dataset.quick); return; }

        const orderBtn = e.target.closest('[data-order]');
        if (orderBtn) { orderOnWhatsApp(orderBtn.dataset.order); return; }
    });

    const checkoutBtn = $('#checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (!state.cart.length) { toast('Add something to your cart first'); return; }
            const lines = state.cart.map(line => {
                const p = productBySlug(line.slug);
                return p ? `• ${p.name} × ${line.qty} — ${money(p.price * line.qty)}` : '';
            }).join('\n');
            const message =
                `Hello Smart Art Furniture & Designs 👋\n\nI would like to order:\n${lines}\n\n` +
                `Subtotal: ${money(cartTotal())}\n\n` +
                `Please confirm availability, delivery cost and the next steps. Thank you!`;
            window.open(wa(message), '_blank');
        });
    }

    function orderOnWhatsApp(slug) {
        const p = productBySlug(slug);
        if (!p) return;
        const message =
            `Hello Smart Art Furniture & Designs 👋\n\nI am interested in:\n` +
            `• ${p.name} (${catName(p.cat)})\n• Price: ${money(p.price)}\n` +
            (p.size ? `• Size: ${p.size}\n` : '') +
            (p.finish ? `• Preferred finish: ${p.finish}\n` : '') +
            `\nIs it available, and what would delivery to my location cost?`;
        window.open(wa(message), '_blank');
    }

    /* ---------- wishlist ---------- */
    function saveWishlist() { store.set('safd_wishlist', state.wishlist); }

    function toggleWishlist(slug) {
        const p = productBySlug(slug);
        const idx = state.wishlist.indexOf(slug);
        if (idx > -1) {
            state.wishlist.splice(idx, 1);
            toast(`${p ? p.name : 'Item'} removed from saved items`, { icon: 'heart' });
        } else {
            state.wishlist.push(slug);
            toast(`${p ? p.name : 'Item'} saved`, { icon: 'heart' });
        }
        saveWishlist();
        renderWishlistState();
        // keep an open quick-view button in sync
        if (qv && qv.classList.contains('is-open')) {
            const btn = qvPanel.querySelector(`[data-fav="${slug}"]`);
            if (btn) {
                const active = state.wishlist.includes(slug);
                btn.classList.toggle('is-active', active);
                btn.setAttribute('aria-pressed', String(active));
                btn.innerHTML = `${icon('heart')} ${active ? 'Saved' : 'Save'}`;
            }
        }
        if (window.SAFD_PRODUCTS_PAGE) renderProductPage();
    }

    function renderWishlistState() {
        const count = state.wishlist.length;
        $$('[data-wish-count]').forEach(el => {
            el.textContent = count;
            el.hidden = count === 0;
        });
        $$('[data-fav]').forEach(btn => {
            btn.classList.toggle('is-active', state.wishlist.includes(btn.dataset.fav));
            btn.setAttribute('aria-pressed', String(state.wishlist.includes(btn.dataset.fav)));
        });
    }

    /* ---------- product cards ---------- */
    function badgesFor(p) {
        let html = '';
        if (p.badge) {
            const cls = p.badge === 'Sale' ? 'badge--sale' : p.badge === 'New' ? 'badge--new' : p.badge === 'Signature' ? 'badge--signature' : '';
            html += `<span class="badge ${cls}">${p.badge}</span>`;
        }
        if (p.was) {
            const off = Math.round((1 - p.price / p.was) * 100);
            if (off >= 5) html += `<span class="badge badge--sale">−${off}%</span>`;
        }
        return html;
    }

    function productCard(p) {
        const saved = state.wishlist.includes(p.slug);
        return `
        <article class="product-card" data-card="${p.slug}">
            <div class="product-card__media">
                <img src="${img(p.img)}" alt="${p.name}" loading="lazy" width="1200" height="805">
                <div class="product-card__badges">${badgesFor(p)}</div>
                <button class="product-card__fav ${saved ? 'is-active' : ''}" type="button" data-fav="${p.slug}"
                        aria-label="Save ${p.name}" aria-pressed="${saved}">${icon('heart')}</button>
                <button class="product-card__quick" type="button" data-quick="${p.slug}">
                    ${icon('zoom')} Quick view
                </button>
            </div>
            <div class="product-card__body">
                <span class="product-card__cat">${catName(p.cat)}</span>
                <h3 class="product-card__name">${p.name}</h3>
                <div class="product-card__price">${money(p.price)} ${p.was ? `<s>${money(p.was)}</s>` : ''}</div>
                <div class="product-card__foot">
                    <button class="add-btn" type="button" data-add="${p.slug}">${icon('plus')} Add to cart</button>
                    <button class="wa-btn" type="button" data-order="${p.slug}" aria-label="Order ${p.name} on WhatsApp">${icon('whatsapp')}</button>
                </div>
            </div>
        </article>`;
    }

    /* ---------- quick view ---------- */
    const qv = $('#quickView');
    const qvPanel = $('#quickViewPanel');

    function openQuickView(slug) {
        const p = productBySlug(slug);
        if (!p || !qv || !qvPanel) return;
        const saved = state.wishlist.includes(p.slug);
        qvPanel.innerHTML = `
            <button class="modal__close" type="button" data-close-quick aria-label="Close">${icon('close')}</button>
            <div class="quickview">
                <div class="quickview__media">
                    <img src="${img(p.img)}" alt="${p.name}">
                </div>
                <div class="quickview__body">
                    <span class="quickview__cat">${catName(p.cat)}</span>
                    <h2 class="quickview__name">${p.name}</h2>
                    <p class="quickview__desc">${p.desc}</p>
                    <div class="quickview__price">
                        <strong>${money(p.price)}</strong>
                        ${p.was ? `<s>${money(p.was)}</s>` : ''}
                        ${p.was ? `<span class="quickview__save">Save ${money(p.was - p.price)}</span>` : ''}
                    </div>
                    <dl class="spec-list">
                        <div><dt>Material</dt><dd>${p.material}</dd></div>
                        <div><dt>Size</dt><dd>${p.size}</dd></div>
                        <div><dt>Options</dt><dd>${p.finish}</dd></div>
                        <div><dt>Lead time</dt><dd>${p.made}</dd></div>
                    </dl>
                    <div class="quickview__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
                    <div class="quickview__actions">
                        <button class="btn btn--primary" type="button" data-add="${p.slug}">${icon('cart')} Add to cart</button>
                        <button class="btn btn--wa" type="button" data-order="${p.slug}">${icon('whatsapp')} Ask about this</button>
                        <button class="btn btn--ghost" type="button" data-fav="${p.slug}" aria-pressed="${saved}">
                            ${icon('heart')} ${saved ? 'Saved' : 'Save'}
                        </button>
                    </div>
                </div>
            </div>`;
        qv.classList.add('is-open');
        qv.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        const closeBtn = $('[data-close-quick]', qvPanel);
        if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
    }

    function closeQuickView() {
        if (!qv) return;
        qv.classList.remove('is-open');
        qv.setAttribute('aria-hidden', 'true');
        if (!cartDrawer || !cartDrawer.classList.contains('is-open')) document.body.classList.remove('no-scroll');
    }

    if (qv) {
        qv.addEventListener('click', e => { if (e.target === qv) closeQuickView(); });
    }
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeQuickView(); closeSearch(); closeCart(); closeMnav(); closeLightbox(); }
    });

    /* ---------- search ---------- */
    const searchModal = $('#searchModal');
    const searchInput = $('#searchInput');
    const searchResults = $('#searchResults');

    function openSearch() {
        if (!searchModal) return;
        searchModal.classList.add('is-open');
        searchModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        if (searchInput) {
            searchInput.value = '';
            setTimeout(() => searchInput.focus(), 60);
        }
        renderSearch('');
    }
    function closeSearch() {
        if (!searchModal) return;
        searchModal.classList.remove('is-open');
        searchModal.setAttribute('aria-hidden', 'true');
        if (!qv || !qv.classList.contains('is-open')) document.body.classList.remove('no-scroll');
    }

    function renderSearch(term) {
        if (!searchResults) return;
        const q = term.trim().toLowerCase();
        if (!q) {
            searchResults.innerHTML = `
                <div class="search-results__label">Popular right now</div>
                ${PRODUCTS.slice(0, 5).map(p => `
                    <a class="search-result" href="products.html?product=${p.slug}">
                        <img src="${img(p.img)}" alt="" loading="lazy">
                        <span class="search-result__meta"><strong>${p.name}</strong><span>${catName(p.cat)}</span></span>
                        <span class="search-result__price">${money(p.price)}</span>
                    </a>`).join('')}`;
            return;
        }
        const matches = PRODUCTS.filter(p =>
            (p.name + ' ' + p.cat + ' ' + p.desc + ' ' + p.tags.join(' ')).toLowerCase().includes(q)
        ).slice(0, 7);

        const cats = CATEGORIES.filter(c => c.name.toLowerCase().includes(q)).slice(0, 3);

        if (!matches.length && !cats.length) {
            searchResults.innerHTML = `<div class="search-empty">No matches for “${term}”. Try “sofa”, “bed”, “office” or “dining”.</div>`;
            return;
        }

        searchResults.innerHTML =
            (cats.length ? `<div class="search-results__label">Categories</div>` + cats.map(c => `
                <a class="search-result" href="products.html?cat=${c.id}">
                    <img src="${img(c.img)}" alt="" loading="lazy">
                    <span class="search-result__meta"><strong>${c.name}</strong><span>${PRODUCTS.filter(p => p.cat === c.id).length} pieces</span></span>
                    <span class="search-result__price">${icon('arrow')}</span>
                </a>`).join('') : '') +
            (matches.length ? `<div class="search-results__label">Pieces</div>` + matches.map(p => `
                <a class="search-result" href="products.html?product=${p.slug}">
                    <img src="${img(p.img)}" alt="" loading="lazy">
                    <span class="search-result__meta"><strong>${p.name}</strong><span>${catName(p.cat)}</span></span>
                    <span class="search-result__price">${money(p.price)}</span>
                </a>`).join('') : '');
    }

    $$('[data-open-search]').forEach(b => b.addEventListener('click', openSearch));
    $$('[data-close-search]').forEach(b => b.addEventListener('click', closeSearch));
    if (searchInput) {
        searchInput.addEventListener('input', e => renderSearch(e.target.value));
        searchInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const q = searchInput.value.trim();
                window.location.href = q ? `products.html?q=${encodeURIComponent(q)}` : 'products.html';
            }
        });
    }
    if (searchModal) searchModal.addEventListener('click', e => { if (e.target === searchModal) closeSearch(); });

    document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            openSearch();
        }
    });

    /* ---------- hero rotation ---------- */
    const heroSlides = $$('[data-hero]');
    const heroDots = $$('[data-hero-dot]');
    if (heroSlides.length > 1) {
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % heroSlides.length;
            heroSlides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
            heroDots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
        }, 6500);
    }

    /* ---------- reveal on scroll ---------- */
    const revealEls = $$('[data-reveal]');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
        revealEls.forEach((el, i) => {
            if (!el.style.transitionDelay) {
                const group = Array.from(el.parentElement ? el.parentElement.children : []).indexOf(el);
                el.style.transitionDelay = `${Math.min(group, 5) * 70}ms`;
            }
            io.observe(el);
        });
    } else {
        revealEls.forEach(el => el.classList.add('is-in'));
    }

    /* ---------- counters ---------- */
    const counters = $$('[data-count]');
    if ('IntersectionObserver' in window && counters.length) {
        const co = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = Number(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const dur = 1500;
                const start = performance.now();
                const tick = now => {
                    const p = Math.min((now - start) / dur, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    el.textContent = Math.round(target * eased).toLocaleString() + suffix;
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                co.unobserve(el);
            });
        }, { threshold: 0.4 });
        counters.forEach(el => co.observe(el));
    }

    /* ---------- FAQ ---------- */
    $$('.faq__item').forEach(item => {
        const btn = $('.faq__q', item);
        const panel = $('.faq__a', item);
        if (!btn || !panel) return;
        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            $$('.faq__item').forEach(other => {
                other.classList.remove('is-open');
                const p = $('.faq__a', other);
                if (p) p.style.maxHeight = null;
                const b = $('.faq__q', other);
                if (b) b.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                item.classList.add('is-open');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ---------- testimonial slider ---------- */
    const testiTrack = $('#testiTrack');
    if (testiTrack) {
        const step = () => {
            const card = testiTrack.querySelector('.testi-card');
            return card ? card.getBoundingClientRect().width + 20 : 340;
        };
        $$('[data-testi="prev"]').forEach(b => b.addEventListener('click', () => testiTrack.scrollBy({ left: -step(), behavior: 'smooth' })));
        $$('[data-testi="next"]').forEach(b => b.addEventListener('click', () => testiTrack.scrollBy({ left: step(), behavior: 'smooth' })));
    }

    /* ---------- gallery / lightbox ---------- */
    const lightbox = $('#lightbox');
    const lightboxImg = $('#lightboxImg');
    const lightboxCap = $('#lightboxCap');
    let lightboxIndex = 0;
    let lightboxItems = [];

    function openLightbox(index) {
        if (!lightbox || !lightboxItems.length) return;
        lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
        const item = lightboxItems[lightboxIndex];
        lightboxImg.src = img(item.img);
        lightboxImg.alt = item.title;
        lightboxCap.textContent = `${item.title} · ${item.cat}`;
        lightbox.classList.add('is-open');
        document.body.classList.add('no-scroll');
    }
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
    }
    if (lightbox) {
        $('.lightbox__close', lightbox).addEventListener('click', closeLightbox);
        $('.lightbox__nav--prev', lightbox).addEventListener('click', () => openLightbox(lightboxIndex - 1));
        $('.lightbox__nav--next', lightbox).addEventListener('click', () => openLightbox(lightboxIndex + 1));
        lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
        document.addEventListener('keydown', e => {
            if (!lightbox.classList.contains('is-open')) return;
            if (e.key === 'ArrowRight') openLightbox(lightboxIndex + 1);
            if (e.key === 'ArrowLeft') openLightbox(lightboxIndex - 1);
        });
    }

    /* ---------- forms ---------- */
    function formWhatsApp(form, subject) {
        const data = new FormData(form);
        const lines = [];
        data.forEach((value, key) => {
            if (!String(value).trim()) return;
            const label = form.querySelector(`[name="${key}"]`)?.closest('.field')?.querySelector('label')?.textContent.replace(/\s*\*$/, '') || key;
            lines.push(`${label}: ${value}`);
        });
        const message = `Hello Smart Art Furniture & Designs 👋\n\n${subject}\n\n${lines.join('\n')}\n\nSent from the website.`;
        window.open(wa(message), '_blank');
        toast('Opening WhatsApp with your message…', { icon: 'whatsapp' });
        form.reset();
    }

    const contactForm = $('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            formWhatsApp(contactForm, 'I would like to make an enquiry.');
        });
    }

    const reviewForm = $('#reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', e => {
            e.preventDefault();
            formWhatsApp(reviewForm, 'I would like to leave a review of my order.');
        });
    }

    $$('[data-newsletter]').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && input.value) {
                const list = store.get('safd_newsletter', []);
                if (!list.includes(input.value)) list.push(input.value);
                store.set('safd_newsletter', list);
                toast('You are on the list — new arrivals will land in your inbox.', { icon: 'sparkle' });
                form.reset();
            }
        });
    });

    /* ---------- product listing (products.html) ---------- */
    const productGrid = $('#productGrid');

    if (productGrid) {
        window.SAFD_PRODUCTS_PAGE = true;

        const params = new URLSearchParams(window.location.search);
        const listing = {
            cat: params.get('cat') || 'all',
            q: params.get('q') || '',
            sort: params.get('sort') || 'featured',
            view: params.get('view') || '',
            visible: 12
        };

        const chipsWrap = $('#catChips');
        if (chipsWrap) {
            chipsWrap.innerHTML = [{ id: 'all', name: 'All furniture' }, ...CATEGORIES].map(c => {
                const count = c.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c.id).length;
                return `<button class="filter-chip ${listing.cat === c.id ? 'is-active' : ''}" type="button" data-cat-filter="${c.id}">
                    ${c.name}<span>${count}</span>
                </button>`;
            }).join('');
        }

        const searchField = $('#productSearch');
        if (searchField) searchField.value = listing.q;

        const sortSelect = $('#sortSelect');
        if (sortSelect) sortSelect.value = listing.sort;

        function filtered() {
            let list = PRODUCTS.slice();

            if (listing.view === 'wishlist') {
                list = list.filter(p => state.wishlist.includes(p.slug));
            }
            if (listing.cat !== 'all') {
                list = list.filter(p => p.cat === listing.cat);
            }
            if (listing.q.trim()) {
                const q = listing.q.trim().toLowerCase();
                list = list.filter(p => (p.name + ' ' + catName(p.cat) + ' ' + p.desc + ' ' + p.tags.join(' ')).toLowerCase().includes(q));
            }

            switch (listing.sort) {
                case 'price-asc': list.sort((a, b) => a.price - b.price); break;
                case 'price-desc': list.sort((a, b) => b.price - a.price); break;
                case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
                case 'new': list = list.filter(p => p.badge === 'New' || p.badge === 'Bestseller').concat(list.filter(p => !(p.badge === 'New' || p.badge === 'Bestseller'))); break;
                default: break;
            }
            return list;
        }

        window.renderProductPage = function () {
            const list = filtered();
            const shown = list.slice(0, listing.visible);

            productGrid.innerHTML = shown.length
                ? shown.map(productCard).join('')
                : `<div class="empty-state" style="grid-column:1/-1">
                        <h3>Nothing here yet</h3>
                        <p>${listing.view === 'wishlist' ? 'Tap the heart on any piece to save it for later.' : 'Try another category or search term — or ask us and we will make it.'}</p>
                        <a class="btn btn--primary" href="${wa('Hello Smart Art! I am looking for a specific piece of furniture:')}" target="_blank" rel="noopener">Ask us to make it ${icon('whatsapp')}</a>
                    </div>`;

            const countEl = $('#resultsCount');
            if (countEl) {
                const label = listing.view === 'wishlist'
                    ? `${list.length} saved piece${list.length === 1 ? '' : 's'}`
                    : `${list.length} piece${list.length === 1 ? '' : 's'}`;
                countEl.innerHTML = `<strong>${label}</strong>${listing.cat !== 'all' ? ' in ' + catName(listing.cat) : ''}${listing.q ? ` matching “${listing.q}”` : ''}`;
            }

            const loadWrap = $('#loadMoreWrap');
            if (loadWrap) loadWrap.hidden = shown.length >= list.length;

            const wishToggle = $('#wishlistToggle');
            if (wishToggle) wishToggle.classList.toggle('is-active', listing.view === 'wishlist');

            renderWishlistState();
            syncUrl();
        };

        function syncUrl() {
            const next = new URLSearchParams();
            if (listing.cat !== 'all') next.set('cat', listing.cat);
            if (listing.q) next.set('q', listing.q);
            if (listing.sort !== 'featured') next.set('sort', listing.sort);
            if (listing.view === 'wishlist') next.set('view', 'wishlist');
            const qs = next.toString();
            history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
        }

        document.addEventListener('click', e => {
            const chip = e.target.closest('[data-cat-filter]');
            if (chip) {
                listing.cat = chip.dataset.catFilter;
                listing.visible = 12;
                $$('.filter-chip', chipsWrap).forEach(c => c.classList.toggle('is-active', c === chip));
                renderProductPage();
            }
        });

        if (searchField) {
            let timer;
            searchField.addEventListener('input', e => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    listing.q = e.target.value;
                    listing.visible = 12;
                    renderProductPage();
                }, 180);
            });
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', e => {
                listing.sort = e.target.value;
                renderProductPage();
            });
        }

        const loadMore = $('#loadMoreBtn');
        if (loadMore) {
            loadMore.addEventListener('click', () => {
                listing.visible += 12;
                renderProductPage();
            });
        }

        const wishToggle = $('#wishlistToggle');
        if (wishToggle) {
            wishToggle.addEventListener('click', () => {
                listing.view = listing.view === 'wishlist' ? '' : 'wishlist';
                listing.visible = 12;
                renderProductPage();
            });
        }

        renderProductPage();

        const preset = params.get('product');
        if (preset && productBySlug(preset)) setTimeout(() => openQuickView(preset), 250);
    }

    /* ---------- home featured grid ---------- */
    const featuredGrid = $('#featuredGrid');
    if (featuredGrid) {
        const featuredOrder = [
            'luna-sectional-sofa', 'kaya-8-seater-dining-set', 'serene-upholstered-bed',
            'kigali-leather-sofa', 'executive-walnut-desk', 'slat-front-oak-wardrobe',
            'veranda-rattan-lounge-set', 'tana-leather-lounge-chair'
        ];
        const featured = featuredOrder.map(productBySlug).filter(Boolean);
        featuredGrid.innerHTML = featured.map(productCard).join('');
        renderWishlistState();
    }

    /* ---------- home category tabs ---------- */
    const homeTabs = $$('[data-home-tab]');
    if (homeTabs.length) {
        homeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                homeTabs.forEach(t => t.classList.remove('is-active'));
                tab.classList.add('is-active');
                const cat = tab.dataset.homeTab;
                const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
                const picks = [];
                for (const p of list) {
                    if (picks.length >= 8) break;
                    picks.push(p);
                }
                if (featuredGrid) featuredGrid.innerHTML = picks.map(productCard).join('');
                renderWishlistState();
            });
        });
    }

    /* ---------- reviews page ---------- */
    const reviewsGrid = $('#reviewsGrid');
    if (reviewsGrid) {
        const reviewChips = $$('[data-review-filter]');

        function renderReviews(filterCat) {
            const list = filterCat === 'all'
                ? REVIEWS
                : REVIEWS.filter(r => r.product && PRODUCTS.find(p => p.name === r.product && p.cat === filterCat));

            reviewsGrid.innerHTML = list.map(r => `
                <article class="review-card">
                    <div class="review-card__head">
                        <div class="review-card__avatar">${r.name.charAt(0)}</div>
                        <div>
                            <strong>${r.name}</strong>
                            <span>${r.city} · ${r.date}</span>
                        </div>
                        <span class="review-card__verified">${icon('check')} Verified</span>
                    </div>
                    <div class="review-card__stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                    <p class="review-card__text">${r.text}</p>
                    <span class="review-card__tag">${r.product}</span>
                </article>`).join('');
        }

        reviewChips.forEach(chip => {
            chip.addEventListener('click', () => {
                reviewChips.forEach(c => c.classList.remove('is-active'));
                chip.classList.add('is-active');
                renderReviews(chip.dataset.reviewFilter);
            });
        });

        renderReviews('all');
    }

    /* ---------- gallery page ---------- */
    const galleryGrid = $('#galleryGrid');
    if (galleryGrid) {
        const items = typeof GALLERY !== 'undefined' ? GALLERY : [];
        lightboxItems = items;
        const shapes = ['a', 'b', 'c', 'd', 'e', 'f'];

        function renderGallery(filter) {
            const list = filter === 'all' ? items : items.filter(i => i.tag === filter);
            galleryGrid.innerHTML = list.map((item, i) => `
                <figure class="gallery-item gallery-item--${shapes[i % shapes.length]}" data-lightbox="${items.indexOf(item)}">
                    <img src="${img(item.img)}" alt="${item.title}" loading="lazy">
                    <figcaption class="gallery-item__cap">
                        <span>${item.tag}</span>
                        <strong>${item.title}</strong>
                    </figcaption>
                </figure>`).join('');
        }
        renderGallery('all');

        $$('[data-gallery-filter]').forEach(chip => {
            chip.addEventListener('click', () => {
                $$('[data-gallery-filter]').forEach(c => c.classList.remove('is-active'));
                chip.classList.add('is-active');
                renderGallery(chip.dataset.galleryFilter);
            });
        });

        galleryGrid.addEventListener('click', e => {
            const fig = e.target.closest('[data-lightbox]');
            if (fig) openLightbox(Number(fig.dataset.lightbox));
        });
    }

    /* ---------- home gallery preview ---------- */
    const homeGallery = $('#homeGallery');
    if (homeGallery) {
        const preview = GALLERY.slice(0, 6);
        lightboxItems = GALLERY;
        homeGallery.innerHTML = preview.map((item, i) => `
            <figure class="gallery-item gallery-item--${['a', 'b', 'c', 'd', 'e', 'f'][i % 6]}" data-lightbox="${i}">
                <img src="${img(item.img)}" alt="${item.title}" loading="lazy">
                <figcaption class="gallery-item__cap">
                    <span>${item.tag}</span>
                    <strong>${item.title}</strong>
                </figcaption>
            </figure>`).join('');
        homeGallery.addEventListener('click', e => {
            const fig = e.target.closest('[data-lightbox]');
            if (fig) openLightbox(Number(fig.dataset.lightbox));
        });
    }

    /* ---------- year ---------- */
    $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

    /* ---------- init ---------- */
    renderCart();
    renderWishlistState();
})();
