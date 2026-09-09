/* =============================================================
   AUREVAN — Store configuration
   The WhatsApp number lives here ONLY. Change it in one place.
============================================================= */
const STORE_CONFIG = {
  whatsappNumber: "923095563165", // country code + number, digits only
  deliveryCharge: 15,
  currency: "$"
};

/* =============================================================
   Product data — single source of truth
============================================================= */
const WATCHES = [
  {
    id: "arc",
    name: "AUREVAN ARC",
    collection: "The Signature Line",
    category: "Automatic",
    price: 1450,
    shortDesc: "A curved sapphire crystal and a dial that catches light like water.",
    longDesc: "The ARC softens every hard edge of a traditional dress watch. Its double-domed sapphire crystal bends light across a sunburst dial, while a 39mm case keeps it wearable under any cuff.",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "316L Stainless Steel", diameter: "39mm", crystal: "Sapphire", strap: "Italian Leather", water: "5 ATM", warranty: "2 Years" }
  },
  {
    id: "vantage",
    name: "AUREVAN VANTAGE",
    collection: "The Field Line",
    category: "Sport",
    price: 1690,
    shortDesc: "Built for altitude, engineered for the everyday.",
    longDesc: "VANTAGE takes its cues from vintage field instruments — high-contrast markers, a screw-down crown, and a case tough enough to forget you're wearing it.",
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "Brushed Titanium", diameter: "41mm", crystal: "Sapphire", strap: "Rubber", water: "20 ATM", warranty: "2 Years" }
  },
  {
    id: "elite",
    name: "AUREVAN ÉLITE",
    collection: "The Signature Line",
    category: "Classic",
    price: 2150,
    shortDesc: "The quiet confidence of a watch that doesn't need to prove anything.",
    longDesc: "ÉLITE is our purest dress watch — a slim case, a hand-finished dial, and a movement chosen for how quietly it runs, not how loudly it's marketed.",
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "316L Stainless Steel", diameter: "38mm", crystal: "Sapphire", strap: "Italian Leather", water: "3 ATM", warranty: "2 Years" }
  },
  {
    id: "chronos",
    name: "AUREVAN CHRONOS",
    collection: "The Racing Line",
    category: "Chronograph",
    price: 2480,
    shortDesc: "Three registers, one purpose — measuring what matters.",
    longDesc: "CHRONOS pairs a tri-compax layout with a tachymeter bezel, built for anyone who has ever wanted to time something properly.",
    images: [
      "https://images.unsplash.com/photo-1519674584336-6d5a4ba9c9a4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic Chronograph", case: "316L Stainless Steel", diameter: "42mm", crystal: "Sapphire", strap: "Steel Bracelet", water: "10 ATM", warranty: "2 Years" }
  },
  {
    id: "noir",
    name: "AUREVAN NOIR",
    collection: "The Shadow Line",
    category: "Limited Edition",
    price: 3200,
    shortDesc: "One of three hundred. A case finished entirely in black DLC.",
    longDesc: "NOIR is produced in a run of 300, each individually numbered on the caseback. A black DLC coating over titanium gives it a depth no photograph quite captures.",
    images: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "DLC-Coated Titanium", diameter: "40mm", crystal: "Sapphire", strap: "Black Rubber", water: "10 ATM", warranty: "2 Years" }
  },
  {
    id: "regent",
    name: "AUREVAN REGENT",
    collection: "The Signature Line",
    category: "Classic",
    price: 1980,
    shortDesc: "A guilloché dial, hand-engraved the old way.",
    longDesc: "REGENT revives a hand-guilloché technique on its dial, catching light differently with every turn of the wrist. Understated, until you look closely.",
    images: [
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "18k Gold-Plated Steel", diameter: "39mm", crystal: "Sapphire", strap: "Alligator-Embossed Leather", water: "3 ATM", warranty: "2 Years" }
  },
  {
    id: "monarch",
    name: "AUREVAN MONARCH",
    collection: "The Heritage Line",
    category: "Classic",
    price: 2760,
    shortDesc: "A full steel bracelet and a weight that says it's built to last.",
    longDesc: "MONARCH is our heaviest hitter — an integrated steel bracelet, a fluted bezel, and proportions borrowed from the golden era of the sports-luxury watch.",
    images: [
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "316L Stainless Steel", diameter: "40mm", crystal: "Sapphire", strap: "Steel Bracelet", water: "10 ATM", warranty: "2 Years" }
  },
  {
    id: "apex",
    name: "AUREVAN APEX",
    collection: "The Racing Line",
    category: "Sport",
    price: 2050,
    shortDesc: "A sport watch with a dress watch's manners.",
    longDesc: "APEX bridges two worlds — a robust case built for daily wear, finished with the kind of polish you'd expect from something twice the price.",
    images: [
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: { movement: "Automatic", case: "Brushed Stainless Steel", diameter: "40mm", crystal: "Sapphire", strap: "Steel Bracelet", water: "15 ATM", warranty: "2 Years" }
  }
];

const REVIEWS = [
  { name: "Daniel R.", location: "Verified Buyer", stars: 5, quote: "The ÉLITE is thinner than I expected in the best way. It disappears under a shirt cuff, which is exactly what I wanted." },
  { name: "Priya M.", location: "Verified Buyer", stars: 5, quote: "Ordered the VANTAGE for hiking trips. Two months in, no scratches on the crystal despite my best efforts to test that." },
  { name: "Thomas K.", location: "Verified Buyer", stars: 4, quote: "CHRONOS looks sharper in person than in photos. The bracelet needed a link removed but that was a five-minute fix." },
  { name: "Aisha B.", location: "Verified Buyer", stars: 5, quote: "The NOIR arrived numbered as promised, in a box that felt as considered as the watch itself. Worth the wait." },
  { name: "Marco V.", location: "Verified Buyer", stars: 5, quote: "COD made it an easy decision to finally buy from a brand I hadn't held in person. Delivery was faster than quoted." }
];

const FAQS = [
  { q: "Do you offer Cash on Delivery?", a: "Yes. Every order ships with Cash on Delivery — you pay only once your watch has arrived and you're ready to accept it." },
  { q: "How do I order?", a: "Choose a watch, select your quantity, and use the Order Now button to open the checkout form. Submitting the form prepares your order in WhatsApp for you to send to us." },
  { q: "How long is delivery?", a: "Most orders arrive within 3–7 business days domestically, depending on your city. We'll confirm an estimate over WhatsApp once your order is received." },
  { q: "What warranty comes with the watch?", a: "Every AUREVAN watch includes a 2-year warranty covering the movement and case against manufacturing defects." },
  { q: "Can I order multiple watches?", a: "Yes — adjust the quantity field in the checkout form before sending your order to WhatsApp." },
  { q: "Can I modify my order?", a: "Since orders are confirmed over WhatsApp, you can message us directly to adjust details any time before dispatch." },
  { q: "How can I contact support?", a: "Reach us on WhatsApp or by email at concierge@aurevan.example — we typically reply within the same day." }
];

/* =============================================================
   State
============================================================= */
let currentFilter = "all";
let activeProduct = null;
let checkoutProduct = null;

const money = (n) => `${STORE_CONFIG.currency}${n.toLocaleString("en-US")}`;

/* =============================================================
   Render: Hero slides
============================================================= */
function renderHero() {
  const wrap = document.getElementById("heroSlides");
  const heroSet = [WATCHES[0], WATCHES[1], WATCHES[3], WATCHES[4], WATCHES[6]];
  wrap.innerHTML = heroSet.map(w => `
    <div class="swiper-slide">
      <img src="${w.images[0]}" alt="${w.name} — ${w.collection}" loading="eager">
    </div>
  `).join("");
}

/* =============================================================
   Render: Collection grid
============================================================= */
function renderCollection() {
  const grid = document.getElementById("collectionGrid");
  const list = currentFilter === "all" ? WATCHES : WATCHES.filter(w => w.category === currentFilter);

  if (!list.length) {
    grid.innerHTML = `<p class="empty-state">No watches match this filter yet.</p>`;
    return;
  }

  grid.innerHTML = list.map(w => `
    <article class="watch-card reveal" data-id="${w.id}">
      <div class="watch-card__media">
        <img src="${w.images[0]}" alt="${w.name}, ${w.category} watch" loading="lazy">
      </div>
      <div class="watch-card__body">
        <p class="watch-card__collection">${w.collection}</p>
        <h3 class="watch-card__name">${w.name}</h3>
        <p class="watch-card__desc">${w.shortDesc}</p>
        <p class="watch-card__price">${money(w.price)}</p>
        <div class="watch-card__actions">
          <button class="btn btn--ghost" data-view="${w.id}">View Watch</button>
          <button class="btn btn--primary" data-order="${w.id}">Order Now</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => openProductModal(btn.dataset.view));
  });
  grid.querySelectorAll("[data-order]").forEach(btn => {
    btn.addEventListener("click", () => openCheckout(btn.dataset.order, 1));
  });

  requestAnimationFrame(observeReveals);
}

/* =============================================================
   Render: Featured watch
============================================================= */
function renderFeatured() {
  const w = WATCHES[3]; // CHRONOS
  document.getElementById("featuredImg").src = w.images[0];
  document.getElementById("featuredImg").alt = `${w.name} — featured watch`;
  document.getElementById("featuredCollection").textContent = w.collection;
  document.getElementById("featuredName").textContent = w.name;
  document.getElementById("featuredDesc").textContent = w.longDesc;
  document.getElementById("featuredPrice").textContent = money(w.price);
  document.getElementById("featuredCta").addEventListener("click", () => openProductModal(w.id));
}

/* =============================================================
   Render: Reviews
============================================================= */
function renderReviews() {
  document.getElementById("reviewsTrack").innerHTML = REVIEWS.slice(0, 5).map(r => `
    <div class="review-card reveal">
      <div class="review-card__stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <p class="review-card__quote">"${r.quote}"</p>
      <p class="review-card__author"><strong>${r.name}</strong>${r.location}</p>
    </div>
  `).join("");
  requestAnimationFrame(observeReveals);
}

/* =============================================================
   Render: FAQ
============================================================= */
function renderFAQ() {
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-item__q" aria-expanded="false">
        <span>${f.q}</span>
        <span class="plus" aria-hidden="true"></span>
      </button>
      <div class="faq-item__a"><p>${f.a}</p></div>
    </div>
  `).join("");

  list.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-item__q");
    const a = item.querySelector(".faq-item__a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      list.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("is-open");
        other.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-item__a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        q.setAttribute("aria-expanded", "true");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
}

/* =============================================================
   Filters
============================================================= */
function initFilters() {
  const filters = document.getElementById("filters");
  filters.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      filters.querySelectorAll(".filter").forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      currentFilter = btn.dataset.filter;
      renderCollection();
    });
  });
}

/* =============================================================
   Product modal
============================================================= */
function openProductModal(id) {
  const w = WATCHES.find(x => x.id === id);
  if (!w) return;
  activeProduct = w;

  document.getElementById("pmCollection").textContent = w.collection;
  document.getElementById("pmName").textContent = w.name;
  document.getElementById("pmPrice").textContent = money(w.price);
  document.getElementById("pmDesc").textContent = w.longDesc;
  document.getElementById("pmMainImg").src = w.images[0];
  document.getElementById("pmMainImg").alt = w.name;
  document.getElementById("pmQtyInput").value = 1;

  document.getElementById("pmThumbs").innerHTML = w.images.map((src, i) => `
    <img src="${src}" alt="${w.name} view ${i + 1}" class="${i === 0 ? "is-active" : ""}" data-src="${src}">
  `).join("");
  document.querySelectorAll("#pmThumbs img").forEach(t => {
    t.addEventListener("click", () => {
      document.getElementById("pmMainImg").src = t.dataset.src;
      document.querySelectorAll("#pmThumbs img").forEach(x => x.classList.remove("is-active"));
      t.classList.add("is-active");
    });
  });

  const specs = w.specs;
  document.getElementById("pmSpecs").innerHTML = `
    <div><dt>Movement</dt><dd>${specs.movement}</dd></div>
    <div><dt>Case</dt><dd>${specs.case}</dd></div>
    <div><dt>Case Diameter</dt><dd>${specs.diameter}</dd></div>
    <div><dt>Crystal</dt><dd>${specs.crystal}</dd></div>
    <div><dt>Strap</dt><dd>${specs.strap}</dd></div>
    <div><dt>Water Resistance</dt><dd>${specs.water}</dd></div>
    <div><dt>Warranty</dt><dd>${specs.warranty}</dd></div>
  `;

  openModal("productModal");
}

function initProductModal() {
  document.getElementById("pmQtyMinus").addEventListener("click", () => stepQty(-1));
  document.getElementById("pmQtyPlus").addEventListener("click", () => stepQty(1));
  document.getElementById("pmViewOnly").addEventListener("click", () => closeModal("productModal"));
  document.getElementById("pmOrderNow").addEventListener("click", () => {
    const qty = parseInt(document.getElementById("pmQtyInput").value, 10) || 1;
    closeModal("productModal");
    openCheckout(activeProduct.id, qty);
  });
}

function stepQty(delta) {
  const input = document.getElementById("pmQtyInput");
  let val = (parseInt(input.value, 10) || 1) + delta;
  val = Math.min(10, Math.max(1, val));
  input.value = val;
}

/* =============================================================
   Checkout modal
============================================================= */
function openCheckout(id, qty) {
  const w = WATCHES.find(x => x.id === id);
  if (!w) return;
  checkoutProduct = w;

  document.getElementById("checkoutProductLine").textContent = `${w.name} — ${w.collection}`;
  document.getElementById("cWatch").value = w.name;
  document.getElementById("cQty").value = qty || 1;
  document.getElementById("checkoutDisclaimer").textContent = "";
  document.getElementById("checkoutForm").reset();
  document.getElementById("cWatch").value = w.name;
  document.getElementById("cQty").value = qty || 1;

  updateOrderSummary();
  openModal("checkoutModal");
}

function updateOrderSummary() {
  if (!checkoutProduct) return;
  const qty = Math.max(1, parseInt(document.getElementById("cQty").value, 10) || 1);
  const subtotal = checkoutProduct.price * qty;
  const total = subtotal + STORE_CONFIG.deliveryCharge;

  document.getElementById("sumPrice").textContent = money(checkoutProduct.price);
  document.getElementById("sumQty").textContent = qty;
  document.getElementById("sumDelivery").textContent = money(STORE_CONFIG.deliveryCharge);
  document.getElementById("sumTotal").textContent = money(total);
}

function initCheckout() {
  document.getElementById("cQty").addEventListener("input", updateOrderSummary);

  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = document.getElementById("cName").value.trim();
    const phone = document.getElementById("cPhone").value.trim();
    const address = document.getElementById("cAddress").value.trim();
    const city = document.getElementById("cCity").value.trim();
    const maps = document.getElementById("cMaps").value.trim();
    const qty = Math.max(1, parseInt(document.getElementById("cQty").value, 10) || 1);
    const notes = document.getElementById("cNotes").value.trim();

    const subtotal = checkoutProduct.price * qty;
    const total = subtotal + STORE_CONFIG.deliveryCharge;

    const lines = [
      "AUREVAN — NEW ORDER",
      "",
      `Customer: ${name}`,
      `Phone: ${phone}`,
      `Address: ${address}`,
      `City: ${city}`,
      `Google Maps: ${maps || "Not provided"}`,
      `Product: ${checkoutProduct.name}`,
      `Quantity: ${qty}`,
      `Product Price: ${money(checkoutProduct.price)}`,
      `Delivery: ${money(STORE_CONFIG.deliveryCharge)}`,
      `Total: ${money(total)}`,
      "Payment: Cash on Delivery",
      `Notes: ${notes || "None"}`
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${message}`;

    window.open(url, "_blank", "noopener");

    document.getElementById("checkoutDisclaimer").textContent =
      "Your order details have been prepared in WhatsApp. Send the message to confirm your order.";
    showToast("Order prepared — please send it in WhatsApp to confirm.");
  });
}

/* =============================================================
   Generic modal open/close
============================================================= */
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal.is-open")) {
    document.body.style.overflow = "";
  }
}
function initModalDismiss() {
  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal");
      closeModal(modal.id);
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.is-open").forEach(m => closeModal(m.id));
    }
  });
}

/* =============================================================
   Toast
============================================================= */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

/* =============================================================
   Navbar
============================================================= */
function initNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const bag = document.getElementById("bagBtn");

  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav__mobile a, .nav__links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  bag.addEventListener("click", () => {
    document.getElementById("collection").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll("[data-faq-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".faq").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("contactWhatsapp").addEventListener("click", (e) => {
    e.preventDefault();
    const msg = encodeURIComponent("Hello AUREVAN, I'd like to ask about a watch.");
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${msg}`, "_blank", "noopener");
  });
}

/* =============================================================
   Hero swiper
============================================================= */
function initHeroSwiper() {
  if (typeof Swiper === "undefined") return;
  new Swiper("#heroSwiper", {
    loop: true,
    speed: 1100,
    autoplay: { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true },
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: { el: "#heroPagination", clickable: true },
    a11y: { enabled: true }
  });
}

/* =============================================================
   Scroll reveals + GSAP entrance
============================================================= */
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

function markReveals() {
  document.querySelectorAll(".craft__item, .why__item, .contact__panel").forEach(el => el.classList.add("reveal"));
}

function heroEntrance() {
  if (typeof gsap === "undefined") {
    document.querySelectorAll(".hero__eyebrow, .hero__title, .hero__tagline, .hero__support, .hero__ctas")
      .forEach(el => el.style.opacity = 1);
    return;
  }
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero__eyebrow", { opacity: 1, y: 0, duration: 0.7 }, 0.2)
    .fromTo(".hero__title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.35)
    .fromTo(".hero__tagline", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.7)
    .fromTo(".hero__support", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.85)
    .fromTo(".hero__ctas", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.0);
}

function initParallax() {
  if (typeof gsap === "undefined" || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#featuredImg", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".featured",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
}

/* =============================================================
   Init
============================================================= */
function safe(fn, label) {
  try {
    fn();
  } catch (err) {
    console.error(`AUREVAN init step failed: ${label}`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  safe(renderHero, "renderHero");
  safe(renderCollection, "renderCollection");
  safe(renderFeatured, "renderFeatured");
  safe(renderReviews, "renderReviews");
  safe(renderFAQ, "renderFAQ");
  safe(markReveals, "markReveals");

  safe(initNav, "initNav");
  safe(initFilters, "initFilters");
  safe(initProductModal, "initProductModal");
  safe(initCheckout, "initCheckout");
  safe(initModalDismiss, "initModalDismiss");
  safe(initHeroSwiper, "initHeroSwiper");
  safe(heroEntrance, "heroEntrance");
  safe(initParallax, "initParallax");
  safe(observeReveals, "observeReveals");
});
