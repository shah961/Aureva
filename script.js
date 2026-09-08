/**
 * AUREVAN HORLOGERIE S.A. — ARCHITECTURE ENGINE
 * Single Source Configuration & Dynamic State Control
 */

// ==================== STORE CONFIGURATION ====================
const STORE_CONFIG = {
  // Configurable WhatsApp Concierge Number (Country Code without + or spaces)
  whatsappNumber: "923095563165",
  currencySymbol: "$",
  deliveryCharge: 0, // Free courier delivery for luxury timepieces
};

// ==================== WATCH REPERTOIRE CATALOG ====================
const WATCHES = [
  {
    id: "aurevan-arc",
    name: "AUREVAN ARC",
    category: "classic",
    price: 3450,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Timeless minimalist dress watch featuring a sunray silver dial and blued steel hands.",
    fullDesc: "The ARC represents pure horological essentialism. Clean geometric proportions, razor-thin bezel architecture, and an in-house automatic caliber visible through a sapphire case back.",
    specs: {
      movement: "Caliber AV-101 Automatic (28,800 vph)",
      case: "316L Surgical Grade Stainless Steel",
      crystal: "Scratch-resistant Sapphire with Anti-Reflective coating",
      strap: "Hand-stitched Italian Calfskin Leather",
      diameter: "40 mm",
      waterResistance: "5 ATM (50 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-vantage",
    name: "AUREVAN VANTAGE",
    category: "chronograph",
    price: 4200,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "High-precision column-wheel chronograph with tachymeter ceramic bezel.",
    fullDesc: "Engineered for speed and accurate mechanical timing. The VANTAGE integrates dual sub-dials, tactile piston pushers, and a ceramic tachymeter ring for racing purists.",
    specs: {
      movement: "Caliber AV-805 Column-Wheel Chronograph",
      case: "Brushed & Polished 316L Stainless Steel",
      crystal: "Double-Domed Sapphire Crystal",
      strap: "Perforated Racing Leather Strap",
      diameter: "42 mm",
      waterResistance: "10 ATM (100 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-elite",
    name: "AUREVAN ÉLITE",
    category: "limited",
    price: 7800,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "DLC obsidian black titanium limited edition skeletonized masterpiece.",
    fullDesc: "Limited to 100 numbered pieces worldwide. The ÉLITE showcases a hand-beveled skeleton movement housed in lightweight, ultra-durable Grade 5 titanium with Diamond-Like Carbon coating.",
    specs: {
      movement: "Caliber AV-900 Skeletonized Manufacture",
      case: "Grade 5 DLC-Coated Titanium",
      crystal: "Anti-Reflective Sapphire (Front & Case back)",
      strap: "Integrated Alligator & Rubber Hybrid",
      diameter: "41 mm",
      waterResistance: "10 ATM (100 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-chronos",
    name: "AUREVAN CHRONOS",
    category: "automatic",
    price: 5100,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Dual-time GMT automatic timepiece built for modern transcontinental travel.",
    fullDesc: "Command time across time zones. Features a bi-directional 24-hour rotating ceramic bezel and a high-visibility GMT hand for seamless global reference.",
    specs: {
      movement: "Caliber AV- GMT Automatic Movement",
      case: "316L Stainless Steel with Satin Finish",
      crystal: "Sapphire with Cyclops Date Lens",
      strap: "Solid 3-Link Steel Bracelet with Micro-Adjustment",
      diameter: "41.5 mm",
      waterResistance: "20 ATM (200 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-noir",
    name: "AUREVAN NOIR",
    category: "sport",
    price: 3900,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Monochrome tactical sport watch crafted for water resistance and legibility.",
    fullDesc: "Unforgiving durability meets nocturnal refinement. High-potency Super-LumiNova indices guarantee instant readability under deep water or ambient twilight.",
    specs: {
      movement: "Caliber AV-300 Heavy Duty Automatic",
      case: "Matte Black PVD Stainless Steel",
      crystal: "Flat Sapphire with Inner AR Coating",
      strap: "High-Density FKM Tactical Rubber",
      diameter: "43 mm",
      waterResistance: "30 ATM (300 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-regent",
    name: "AUREVAN REGENT",
    category: "classic",
    price: 4600,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Rose gold accented executive watch with small-seconds subdial and exhibition back.",
    fullDesc: "Designed for distinguished presence. Warm rose gold hands and applied Roman numerals float above an intricate guilloché dial pattern.",
    specs: {
      movement: "Caliber AV-202 Hand-Wound Precision",
      case: "Rose Gold PVD & Stainless Steel Dual Tone",
      crystal: "Box-Shaped Sapphire Crystal",
      strap: "Genuine Croco-Patterned Leather",
      diameter: "39.5 mm",
      waterResistance: "5 ATM (50 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-monarch",
    name: "AUREVAN MONARCH",
    category: "automatic",
    price: 6200,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Complete annual calendar watch displaying day, date, month, and moonphase.",
    fullDesc: "A horological poetry in motion. Tracks lunar cycles with a lapis lazuli moonphase disc alongside complete calendar complications.",
    specs: {
      movement: "Caliber AV-700 Complication Automatic",
      case: "Polished 316L Stainless Steel",
      crystal: "Curved Sapphire Crystal",
      strap: "Hand-finished Cognac Leather",
      diameter: "41 mm",
      waterResistance: "5 ATM (50 Meters)",
      warranty: "2 Years International Warranty"
    }
  },
  {
    id: "aurevan-apex",
    name: "AUREVAN APEX",
    category: "chronograph",
    price: 5900,
    image: "https://images.unsplash.com/photo-1517463048247-39a7c6dc5811?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Forged carbon case chronograph with high-contrast luminescent sub-dials.",
    fullDesc: "Ultra-lightweight high-tech materials derived from aerospace research. Each forged carbon case pattern is entirely unique to its wearer.",
    specs: {
      movement: "Caliber AV-850 High-Frequency Automatic",
      case: "Forged Carbon Fiber & Titanium Core",
      crystal: "Smoked Sapphire Crystal",
      strap: "Balistic Nylon & Leather Composite",
      diameter: "42.5 mm",
      waterResistance: "10 ATM (100 Meters)",
      warranty: "2 Years International Warranty"
    }
  }
];

// ==================== STATE MANAGEMENT ====================
let cart = [];
let currentFilter = "all";

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initSwiper();
  initGSAP();
  initNavigation();
  initFilters();
  initAccordions();
  initCartAndCheckout();
  updateContactLinks();
});

// Render Product Catalog
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const filtered = currentFilter === "all" 
    ? WATCHES 
    : WATCHES.filter(w => w.category === currentFilter);

  grid.innerHTML = filtered.map(watch => `
    <article class="product-card">
      <div class="product-image-container">
        <span class="product-category-tag">${watch.category}</span>
        <img src="${watch.image}" alt="${watch.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-title">${watch.name}</h3>
        <p class="product-short-desc">${watch.shortDesc}</p>
        <div class="product-meta">
          <span class="product-price">${STORE_CONFIG.currencySymbol}${watch.price.toLocaleString()}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline btn-sm" onclick="openProductModal('${watch.id}')">View Watch</button>
          <button class="btn btn-primary btn-sm" onclick="directOrder('${watch.id}')">Order Now</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Filter Controller
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });
}

// Swiper Hero Slider
function initSwiper() {
  new Swiper('#heroSwiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1600,
  });
}

// GSAP Animations
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Text Entrance
  gsap.from(".hero-content > *", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.3
  });

  // Section Headers Reveal
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Craftsmanship Cards Reveal
  gsap.from(".craft-card", {
    scrollTrigger: {
      trigger: ".craft-grid",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });
}

// Sticky Navbar & Mobile Drawer
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }
}

// FAQ Accordions
function initAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

// ==================== MODALS & SHOPPING BAG ====================
function initCartAndCheckout() {
  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');

  cartBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
  
  const closeCart = () => cartDrawer.classList.remove('active');
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your shopping bag is empty.");
      return;
    }
    closeCart();
    openCheckoutModal();
  });

  // Modal Generic Close Buttons
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.target.getAttribute('data-close');
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    });
  });

  const checkoutForm = document.getElementById('checkoutForm');
  checkoutForm.addEventListener('submit', handleCheckoutSubmit);
}

// Open Technical Details Modal
function openProductModal(watchId) {
  const watch = WATCHES.find(w => w.id === watchId);
  if (!watch) return;

  const modalBody = document.getElementById('productModalBody');
  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem; align-items: center;">
      <div>
        <img src="${watch.image}" alt="${watch.name}" style="width: 100%; height: 380px; object-fit: cover; border: 1px solid var(--border-subtle);">
      </div>
      <div>
        <span class="section-tag">${watch.category}</span>
        <h2 style="font-size: 2.2rem; margin-bottom: 0.4rem;">${watch.name}</h2>
        <p style="font-size: 1.4rem; color: var(--accent-champagne); font-family: var(--font-serif); margin-bottom: 1rem;">
          ${STORE_CONFIG.currencySymbol}${watch.price.toLocaleString()} USD
        </p>
        <p class="body-text">${watch.fullDesc}</p>

        <h4 style="font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent-champagne); margin-top: 1.5rem;">Technical Specifications</h4>
        <table class="specs-table">
          <tr><td>Movement</td><td>${watch.specs.movement}</td></tr>
          <tr><td>Case</td><td>${watch.specs.case}</td></tr>
          <tr><td>Crystal</td><td>${watch.specs.crystal}</td></tr>
          <tr><td>Strap</td><td>${watch.specs.strap}</td></tr>
          <tr><td>Diameter</td><td>${watch.specs.diameter}</td></tr>
          <tr><td>Water Resistance</td><td>${watch.specs.waterResistance}</td></tr>
          <tr><td>Warranty</td><td>${watch.specs.warranty}</td></tr>
        </table>

        <div style="display: flex; gap: 10px; margin-top: 1.5rem;">
          <button class="btn btn-outline" style="flex: 1;" onclick="addToCart('${watch.id}')">Add To Bag</button>
          <button class="btn btn-primary" style="flex: 1;" onclick="directOrder('${watch.id}')">Order Now (COD)</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('productDetailModal').classList.add('active');
}

// Trigger Direct Order for Single Watch
function directOrder(watchId) {
  const watch = WATCHES.find(w => w.id === watchId);
  if (!watch) return;

  cart = [{ watch, quantity: 1 }];
  updateCartUI();

  document.getElementById('productDetailModal').classList.remove('active');
  openCheckoutModal();
}

// Add Item To Cart Drawer
function addToCart(watchId) {
  const watch = WATCHES.find(w => w.id === watchId);
  if (!watch) return;

  const existing = cart.find(item => item.watch.id === watchId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ watch, quantity: 1 });
  }

  updateCartUI();
  document.getElementById('productDetailModal').classList.remove('active');
  document.getElementById('cartDrawer').classList.add('active');
}

// Update Cart UI State
function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const itemsList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalQty;

  if (cart.length === 0) {
    itemsList.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Your shopping bag is empty.</p>`;
    subtotalEl.textContent = `${STORE_CONFIG.currencySymbol}0.00`;
    totalEl.textContent = `${STORE_CONFIG.currencySymbol}0.00`;
    return;
  }

  itemsList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.watch.image}" alt="${item.watch.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.watch.name}</h4>
        <div class="cart-item-price">${STORE_CONFIG.currencySymbol}${item.watch.price.toLocaleString()} x ${item.quantity}</div>
      </div>
      <button onclick="removeFromCart('${item.watch.id}')" style="color: var(--text-muted); font-size: 1.2rem;">&times;</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + (item.watch.price * item.quantity), 0);
  subtotalEl.textContent = `${STORE_CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  totalEl.textContent = `${STORE_CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
}

// Remove Item from Cart
function removeFromCart(watchId) {
  cart = cart.filter(item => item.watch.id !== watchId);
  updateCartUI();
}

// Open Checkout Modal
function openCheckoutModal() {
  const preview = document.getElementById('checkoutItemsPreview');
  const grandTotalEl = document.getElementById('checkoutGrandTotal');

  const subtotal = cart.reduce((sum, item) => sum + (item.watch.price * item.quantity), 0);

  preview.innerHTML = cart.map(item => `
    <div class="summary-line">
      <span>${item.quantity}x ${item.watch.name}</span>
      <span>${STORE_CONFIG.currencySymbol}${(item.watch.price * item.quantity).toLocaleString()}</span>
    </div>
  `).join('');

  grandTotalEl.textContent = `${STORE_CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  document.getElementById('checkoutModal').classList.add('active');
}

// ==================== WHATSAPP CHECKOUT GENERATOR ====================
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const cityName = document.getElementById('cityName').value.trim();
  const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
  const mapsLink = document.getElementById('mapsLink').value.trim();
  const orderNotes = document.getElementById('orderNotes').value.trim();

  const subtotal = cart.reduce((sum, item) => sum + (item.watch.price * item.quantity), 0);

  let itemsFormatted = "";
  cart.forEach(item => {
    itemsFormatted += `• ${item.quantity}x ${item.watch.name} — ${STORE_CONFIG.currencySymbol}${(item.watch.price * item.quantity).toLocaleString()}\n`;
  });

  // URL-Encoded WhatsApp Message Structure
  let message = `👑 *AUREVAN SWITZERLAND — NEW DISPATCH ORDER*\n`;
  message += `----------------------------------\n`;
  message += `👤 *Customer Name:* ${fullName}\n`;
  message += `📞 *Phone Number:* ${phoneNumber}\n`;
  message += `🏙️ *City:* ${cityName}\n`;
  message += `📍 *Delivery Address:* ${deliveryAddress}\n`;
  if (mapsLink) message += `🗺️ *Google Maps:* ${mapsLink}\n`;
  message += `----------------------------------\n`;
  message += `⌚ *TIMEPIECES ORDERED:*\n${itemsFormatted}\n`;
  message += `----------------------------------\n`;
  message += `🚚 *Courier Delivery:* FREE\n`;
  message += `💰 *TOTAL PAYABLE (COD):* ${STORE_CONFIG.currencySymbol}${subtotal.toLocaleString()}\n`;
  message += `💳 *Payment Method:* Cash on Delivery (COD)\n`;
  if (orderNotes) message += `📝 *Notes:* ${orderNotes}\n`;
  message += `----------------------------------\n`;
  message += `_Please process this order for immediate atelier dispatch._`;

  const encodedText = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedText}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, '_blank');

  // Close Checkout Modal & Open Confirmation Modal
  document.getElementById('checkoutModal').classList.remove('active');
  document.getElementById('whatsappPromptModal').classList.add('active');

  // Reset Cart State
  cart = [];
  updateCartUI();
  document.getElementById('checkoutForm').reset();
}

// Open General Contact Consultation
function openGeneralWhatsapp() {
  const text = encodeURIComponent("Hello AUREVAN Concierge, I would like to inquire regarding your watch repertoire.");
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
}

// Dynamically Inject Configured Phone Links
function updateContactLinks() {
  const link = document.getElementById('contactWhatsappLink');
  if (link) {
    link.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}`;
    link.textContent = `+${STORE_CONFIG.whatsappNumber}`;
  }
}
