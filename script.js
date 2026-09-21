// ===== PREMIUM FURNITURES - MAIN JAVASCRIPT =====

// WhatsApp number
const WHATSAPP_NUMBER = '254718574880';

// Product Data
const products = [
    { id: 1, name: 'Modern Leather Sofa', category: 'Living Room', price: 45000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', badge: 'Bestseller' },
    { id: 2, name: 'Oak Dining Table Set', category: 'Dining', price: 65000, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500', badge: 'New' },
    { id: 3, name: 'King Size Bed Frame', category: 'Bedroom', price: 55000, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', badge: '' },
    { id: 4, name: 'Ergonomic Office Chair', category: 'Office', price: 18000, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500', badge: 'Popular' },
    { id: 5, name: 'Velvet Armchair', category: 'Living Room', price: 28000, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', badge: '' },
    { id: 6, name: '6-Seater Dining Table', category: 'Dining', price: 85000, image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=500', badge: 'Sale' },
    { id: 7, name: 'Wardrobe Closet', category: 'Bedroom', price: 42000, image: 'https://images.unsplash.com/photo-1558997519-0d4de7cd2486?w=500', badge: '' },
    { id: 8, name: 'Executive Office Desk', category: 'Office', price: 35000, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500', badge: 'Hot' },
    { id: 9, name: 'Coffee Table', category: 'Living Room', price: 15000, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26f?w=500', badge: '' },
    { id: 10, name: 'Bookshelf Unit', category: 'Living Room', price: 22000, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', badge: '' },
    { id: 11, name: 'Queen Size Bed', category: 'Bedroom', price: 45000, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500', badge: '' },
    { id: 12, name: 'Dining Chairs (Set of 4)', category: 'Dining', price: 24000, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500', badge: '' },
    { id: 13, name: 'L-Shape Sectional Sofa', category: 'Living Room', price: 78000, image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=500', badge: 'Premium' },
    { id: 14, name: 'Filing Cabinet', category: 'Office', price: 16000, image: 'https://images.unsplash.com/photo-1542983028-9178d52fe67a?w=500', badge: '' },
    { id: 15, name: 'Bedside Table Pair', category: 'Bedroom', price: 12000, image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', badge: '' },
    { id: 16, name: 'TV Stand Unit', category: 'Living Room', price: 28000, image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500', badge: '' },
    { id: 17, name: 'Bar Stools (Set of 3)', category: 'Dining', price: 18000, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop', badge: 'New' },
    { id: 18, name: 'Office Desk Organizer', category: 'Office', price: 5000, image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500', badge: '' },
    { id: 19, name: 'Recliner Chair', category: 'Living Room', price: 38000, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500', badge: 'Luxury' },
    { id: 20, name: 'Dressing Table', category: 'Bedroom', price: 25000, image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500', badge: '' }
];

// Review Data - 50 Reviews
const reviewFirstNames = ['Alice', 'Brian', 'Carol', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'James',
    'Karen', 'Leo', 'Mary', 'Nathan', 'Olivia', 'Peter', 'Quinn', 'Rachel', 'Sam', 'Tina',
    'Umar', 'Victoria', 'William', 'Xenia', 'Yusuf', 'Zara', 'Aaron', 'Betty', 'Charles', 'Diana',
    'Eddy', 'Fiona', 'George', 'Hannah', 'Ian', 'Joyce', 'Kevin', 'Linda', 'Mark', 'Nancy',
    'Oscar', 'Patricia', 'Queenie', 'Ronald', 'Sarah', 'Tom', 'Ursula', 'Vincent', 'Wendy', 'Xavier'];

const reviewTexts = [
    'Absolutely love my new sofa! The quality is outstanding and it was delivered right on time. Highly recommend Premium Furnitures.',
    'The dining set is a perfect centerpiece for our home. Sturdy build and elegant design. Worth every penny.',
    'Great customer service and the bed frame is exactly what we wanted. Assembly was straightforward.',
    'I was skeptical about ordering furniture online but these guys exceeded my expectations. The office chair is super comfortable.',
    'Fast delivery and the product matches the pictures perfectly. The coffee table is beautiful.',
    'Bought an entire bedroom set here. Quality is top-notch and the prices are reasonable. Will shop again.',
    'The bookshelf fits perfectly in my study. Great craftsmanship and the wood finish is gorgeous.',
    'The L-shaped sofa is massive and so comfortable! Perfect for our family movie nights.',
    'Excellent quality furniture. The dining chairs are solid and look expensive. Delivery was prompt.',
    'My new office desk has transformed my work-from-home setup. Highly professional service from start to finish.',
    'The wardrobe is spacious and well-built. The delivery team was careful and helpful.',
    'Been shopping here for years. Never disappointed. The recliner chair is my favorite purchase so far.',
    'Beautiful TV stand, matches our living room perfectly. Great prices compared to other stores.',
    'The bed is extremely comfortable and looks stunning. Assembly instructions were clear.',
    'Customer support was very helpful when I had questions about delivery. The armchair is lovely.',
    'Quality exceeded my expectations for the price. The bar stools are stylish and comfortable.',
    'Got the filing cabinet for my home office. Perfect size and very sturdy. Great buy.',
    'The bedside tables are elegant and well-made. They arrived quickly and in perfect condition.',
    'Premium Furnitures lives up to its name. The executive desk looks amazing in my office.',
    'Bought the dressing table for my wife and she loves it. Beautiful finish and great storage.',
    'Delivery was smooth and the team helped set everything up. Sectional sofa is incredible quality.',
    'The velvet armchair is so plush and comfortable. Perfect addition to my reading nook.',
    'Pricing is fair for the quality you get. The 6-seater dining table is absolutely beautiful.',
    'Shopping experience was easy from browsing to delivery. The bookshelf is exactly as described.',
    'Great variety of furniture styles. Found something that fit my modern aesthetic perfectly.',
    'The leather sofa is premium quality. Feels like it will last for many years. Great investment.',
    'I appreciate the honest pricing. Delivery charges were reasonable and service was professional.',
    'The ergonomic chair has helped my back pain significantly. Worth every shilling.',
    'Friendly staff and quality products. The oak dining table is simply stunning.',
    'Very happy with my purchase. The wardrobe has more than enough storage space.',
    'The coffee table is a statement piece in our living room. Everyone asks where we got it.',
    'Repeat customer here. Quality is consistent and service keeps getting better.',
    'The dining chairs set is elegant and comfortable for long dinners. Great purchase.',
    'Assembly service was offered which made things so much easier. Bed looks fantastic.',
    'The TV stand has great cable management and fits our large TV perfectly. Excellent.',
    'Got the desk organizer as a gift and it\'s very well made. Beautiful woodwork.',
    'The queen bed was a great deal. Comfortable and stylish. Delivery was on schedule.',
    'Premium quality at mid-range prices. I\'ve furnished my entire apartment from here.',
    'The recliner is like sitting on a cloud. Best purchase for my relaxation corner.',
    'Appreciate the attention to detail in packaging. Nothing arrived damaged or scratched.',
    'The bar stools are perfect height for our kitchen island. Very modern design.',
    'Customer service responded quickly on WhatsApp. Order was processed efficiently.',
    'The bedroom set is beautiful and cohesive. Very satisfied with the overall experience.',
    'Quality furniture that doesn\'t break the bank. The sofa is holding up beautifully.',
    'Delivery team was professional and placed everything where we wanted. Great service.',
    'The dressing table mirror is perfect lighting and the drawers are spacious.',
    'From browsing to checkout to delivery, everything was seamless. Highly recommended.',
    'The office chair adjusts perfectly and the lumbar support is great. No more back pain.',
    'Love the natural wood finish on the dining table. Real craftsmanship shows.',
    'Five stars all around! Quality, price, service - Premium Furnitures nails it.'
];

const productNames = products.map(p => p.name);

// Cart State
let cart = JSON.parse(localStorage.getItem('pf_cart')) || [];

// ===== DOM ELEMENTS =====
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

// ===== NAVIGATION MOBILE TOGGLE =====
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// ===== CART FUNCTIONS =====
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    renderCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('pf_cart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
    if (!cartItemsContainer) return;
    
    const count = getCartCount();
    cartCountEl.textContent = count;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i>🛒</i>
                <h3>Your cart is empty</h3>
                <p>Browse our products and add items to your cart</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">KSh ${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `).join('');
    }
    
    if (cartTotalEl) {
        cartTotalEl.textContent = `KSh ${getCartTotal().toLocaleString()}`;
    }
}

// ===== WHATSAPP ORDER =====
function orderOnWhatsApp(productName, productPrice) {
    const message = `Hello Premium Furnitures! I'd like to order:%0A%0A📦 *${productName}*%0A💰 Price: KSh ${productPrice.toLocaleString()}%0A%0APlease provide more details on delivery and availability. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    let message = 'Hello Premium Furnitures! I\'d like to order:%0A%0A';
    cart.forEach(item => {
        message += `📦 *${item.name}* x${item.quantity} - KSh ${(item.price * item.quantity).toLocaleString()}%0A`;
    });
    message += `%0A💰 *Total: KSh ${getCartTotal().toLocaleString()}*%0A%0APlease confirm availability and delivery details. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle" style="color:#25D366"></i> ${message}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== RENDER PRODUCTS =====
function renderProducts(containerId, productList, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const items = limit ? productList.slice(0, limit) : productList;
    container.innerHTML = items.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-price">KSh ${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                    <button class="btn-order" onclick="orderOnWhatsApp('${product.name.replace(/'/g, "\\'")}', ${product.price})">
                        <i class="fab fa-whatsapp"></i> Order
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== FILTER PRODUCTS =====
function filterProducts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (category === 'All' || card.dataset.category === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== RENDER REVIEWS =====
function renderReviews(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const reviews = [];
    for (let i = 0; i < 50; i++) {
        const name = reviewFirstNames[i];
        const rating = Math.random() > 0.15 ? 5 : (Math.random() > 0.3 ? 4 : (Math.random() > 0.5 ? 3 : 4));
        const text = reviewTexts[i % reviewTexts.length];
        const product = productNames[Math.floor(Math.random() * productNames.length)];
        const month = months[Math.floor(Math.random() * 12)];
        const day = Math.floor(Math.random() * 28) + 1;
        const year = 2024 + Math.floor(Math.random() * 2);
        const initial = name[0];
        
        // Generate consistent avatar color based on name
        const colors = ['#8B4513', '#D4A574', '#5C2E0A', '#A0522D', '#CD853F', '#DEB887'];
        const color = colors[i % colors.length];
        
        const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        
        reviews.push(`
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar" style="background:${color}">${initial}</div>
                    <div>
                        <div class="review-name">${name} ${reviewFirstNames[(i+13) % reviewFirstNames.length][0]}.</div>
                        <div class="review-date">${month} ${day}, ${year}</div>
                    </div>
                </div>
                <div class="review-stars">${stars}</div>
                <div class="review-text">${text}</div>
                <span class="review-product">Purchased: ${product}</span>
            </div>
        `);
    }
    
    container.innerHTML = reviews.join('');
}

// ===== FORM SUBMISSION =====
function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    const whatsappMsg = `Hello! I have an inquiry from your website:%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📱 Phone: ${phone}%0A%0A💬 Message:%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`, '_blank');
    showToast('Redirecting you to WhatsApp...');
    e.target.reset();
}

// ===== CLOSE LINKS WHEN CLICKED ON MOBILE =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('open');
    });
});

// ===== CART EVENT LISTENERS =====
document.addEventListener('click', (e) => {
    if (e.target.closest('.cart-icon') || e.target.closest('[data-cart-toggle]')) {
        openCart();
    }
});

if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}

document.querySelectorAll('.cart-close').forEach(btn => {
    btn.addEventListener('click', closeCart);
});

// ===== SLIDESHOW (2 second interval, RH side) =====
const slideshowItems = [
    { name: 'Modern Leather Sofa', price: 45000, oldPrice: 55000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', id: 1 },
    { name: 'Oak Dining Table Set', price: 65000, oldPrice: 78000, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', id: 2 },
    { name: 'King Size Bed Frame', price: 55000, oldPrice: 65000, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600', id: 3 },
    { name: 'L-Shape Sectional Sofa', price: 78000, oldPrice: 95000, image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600', id: 13 },
    { name: 'Velvet Armchair', price: 28000, oldPrice: 35000, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600', id: 5 },
    { name: 'Executive Office Desk', price: 35000, oldPrice: 42000, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600', id: 8 },
    { name: 'Recliner Chair', price: 38000, oldPrice: 45000, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600', id: 19 },
    { name: '6-Seater Dining Table', price: 85000, oldPrice: 100000, image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600', id: 6 }
];

let currentSlide = 0;
let slideInterval;
let progressInterval;
const SLIDE_DURATION = 2000; // 2 seconds per requirement

function renderSlideshow() {
    const container = document.getElementById('slideshowContainer');
    const dotsContainer = document.getElementById('slideDots');
    const actionsContainer = document.getElementById('slideshowActions');
    if (!container) return;

    // Remove existing slides (but keep dots)
    container.querySelectorAll('.slide').forEach(el => el.remove());

    slideshowItems.forEach((item, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (idx === 0 ? ' active' : '');
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="slide-img">
            <div class="slide-info">
                <div class="slide-name">${item.name}</div>
                <div class="slide-price">
                    KSh ${item.price.toLocaleString()}
                    <span class="slide-old-price">KSh ${item.oldPrice.toLocaleString()}</span>
                </div>
                <div style="font-size:0.75rem; color:#e74c3c; font-weight:600; margin-top:4px;">
                    🔥 Save KSh ${(item.oldPrice - item.price).toLocaleString()}
                </div>
            </div>
        `;
        container.insertBefore(slide, dotsContainer);
    });

    dotsContainer.innerHTML = slideshowItems.map((_, idx) =>
        `<span class="slide-dot${idx === 0 ? ' active' : ''}" data-idx="${idx}"></span>`
    ).join('');

    actionsContainer.innerHTML = `
        <button class="btn-cart" onclick="addToCart(${slideshowItems[currentSlide].id})">
            <i class="fas fa-cart-plus"></i> Add
        </button>
        <button class="btn-order" onclick="orderOnWhatsApp('${slideshowItems[currentSlide].name.replace(/'/g, "\\'")}', ${slideshowItems[currentSlide].price})">
            <i class="fab fa-whatsapp"></i> Order
        </button>
    `;

    dotsContainer.querySelectorAll('.slide-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.idx));
            restartSlideshow();
        });
    });
}

function goToSlide(idx) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentSlide = idx % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Update actions buttons for current slide
    const actionsContainer = document.getElementById('slideshowActions');
    if (actionsContainer) {
        const item = slideshowItems[currentSlide];
        actionsContainer.innerHTML = `
            <button class="btn-cart" onclick="addToCart(${item.id})">
                <i class="fas fa-cart-plus"></i> Add
            </button>
            <button class="btn-order" onclick="orderOnWhatsApp('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                <i class="fab fa-whatsapp"></i> Order
            </button>
        `;
    }

    resetProgress();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startSlideshow() {
    resetProgress();
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

function resetProgress() {
    const bar = document.getElementById('slideProgress');
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.transition = `width ${SLIDE_DURATION}ms linear`;
        bar.style.width = '100%';
    }, 50);
}

function restartSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
}

// ===== COUNTDOWN TIMER =====
function startCountdown() {
    // Set countdown to 2 days, 14 hours, 35 minutes from now
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 2);
    endTime.setHours(endTime.getHours() + 14);
    endTime.setMinutes(endTime.getMinutes() + 35);

    function update() {
        const now = new Date();
        let diff = endTime - now;
        if (diff < 0) {
            // Reset to 3 days if expired
            endTime.setDate(endTime.getDate() + 3);
            diff = endTime - now;
        }
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff / (1000*60*60)) % 24);
        const mins = Math.floor((diff / (1000*60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        const dEl = document.getElementById('cdDays');
        const hEl = document.getElementById('cdHours');
        const mEl = document.getElementById('cdMins');
        const sEl = document.getElementById('cdSecs');
        if (dEl) dEl.textContent = String(days).padStart(2,'0');
        if (hEl) hEl.textContent = String(hours).padStart(2,'0');
        if (mEl) mEl.textContent = String(mins).padStart(2,'0');
        if (sEl) sEl.textContent = String(secs).padStart(2,'0');
    }
    update();
    setInterval(update, 1000);
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Render featured products on home page (6 to leave room for slideshow)
    renderProducts('featuredProducts', products, 6);
    renderProducts('allProducts', products);
    renderReviews('reviewsContainer');

    // Render cart
    renderCart();

    // Slideshow
    renderSlideshow();
    startSlideshow();

    // Countdown
    startCountdown();

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('open') && 
            !e.target.closest('.nav-links') && !e.target.closest('.mobile-toggle')) {
            navLinks.classList.remove('open');
        }
    });
});

// Make functions globally available
window.openCart = openCart;
window.closeCart = closeCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.orderOnWhatsApp = orderOnWhatsApp;
window.checkoutWhatsApp = checkoutWhatsApp;
window.filterProducts = filterProducts;
