/**
 * ============================================================================
 * BIBE MARKET — STRETCHED BOLD MONOCHROME POS & INFORMATION SYSTEM
 * Course: IT 101 Introduction to Computing - Final Project
 * Architecture: Zero-Database Static Storage with HTML5 LocalStorage
 * ============================================================================
 */

// --- 1. DEFAULT PRODUCT CATALOG WITH DYNAMIC VARIANT IMAGES ---
const DEFAULT_PRODUCTS = [
  // 🧸 Toys Department
  {
    id: 't1',
    name: 'Yellow Rubber Bibe Toy',
    category: 'Toys',
    price: 6.50,
    stock: 25,
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    variants: [
      { name: 'Classic Yellow', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80' },
      { name: 'Ocean Blue', img: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&q=80' },
      { name: 'Pastel Pink', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80' }
    ],
    options: ['Classic Yellow', 'Ocean Blue', 'Pastel Pink']
  },
  {
    id: 't2',
    name: 'Bibe Plushie Duckling',
    category: 'Toys',
    price: 12.00,
    stock: 18,
    img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&q=80',
    variants: [
      { name: 'Small (20cm)', img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&q=80' },
      { name: 'Medium (35cm)', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80' },
      { name: 'Giant (50cm)', img: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80' }
    ],
    options: ['Small (20cm)', 'Medium (35cm)', 'Giant (50cm)']
  },
  {
    id: 't3',
    name: 'Wooden Express Train',
    category: 'Toys',
    price: 14.50,
    stock: 12,
    img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&q=80',
    variants: [
      { name: 'Natural Pine', img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&q=80' },
      { name: 'Painted Red', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80' },
      { name: 'Deluxe 3-Car', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80' }
    ],
    options: ['Natural Pine', 'Painted Red', 'Deluxe 3-Car']
  },

  // 🍎 Fruits & Produce
  {
    id: 'p1',
    name: 'Fresh Crisp Apple',
    category: 'Fruits',
    price: 5.00,
    stock: 25,
    img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80',
    variants: [
      { name: 'Fuji Apple', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80' },
      { name: 'Granny Smith', img: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=600&q=80' },
      { name: 'Honeycrisp', img: 'https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=600&q=80' }
    ],
    options: ['Fuji Apple', 'Granny Smith', 'Honeycrisp']
  },
  {
    id: 'p2',
    name: 'Golden Cavendish Banana',
    category: 'Fruits',
    price: 2.50,
    stock: 30,
    img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80',
    variants: [
      { name: 'Ripe Yellow', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80' },
      { name: 'Half-Dozen', img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&q=80' }
    ],
    options: ['Ripe Yellow', 'Half-Dozen']
  },
  {
    id: 'p3',
    name: 'Harvest Sweet Corn',
    category: 'Fruits',
    price: 3.50,
    stock: 20,
    img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80',
    variants: [
      { name: 'Normal Corn', img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80' },
      { name: 'Butter Glazed', img: 'https://images.unsplash.com/photo-1568651347092-2df479b1dfeb?w=600&q=80' },
      { name: 'Sweet Kernels', img: 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?w=600&q=80' }
    ],
    options: ['Normal Corn', 'Butter Glazed', 'Sweet Kernels']
  },

  // 🍞 Fresh Bakery
  {
    id: 'p4',
    name: 'Sliced Milk Bread',
    category: 'Bakery',
    price: 3.50,
    stock: 15,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    variants: [
      { name: 'Regular Sliced', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80' },
      { name: 'Thick Brioche', img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80' }
    ],
    options: ['Regular Sliced', 'Thick Brioche']
  },
  {
    id: 'p5',
    name: 'Butter Croissant',
    category: 'Bakery',
    price: 4.00,
    stock: 12,
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    variants: [
      { name: 'Regular Butter', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80' },
      { name: 'Chocolate Filled', img: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&q=80' },
      { name: 'Almond Glazed', img: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600&q=80' }
    ],
    options: ['Regular Butter', 'Chocolate Filled', 'Almond Glazed']
  },

  // 🧃 Beverages & Coffee
  {
    id: 'p6',
    name: 'Cold Brew Iced Coffee',
    category: 'Beverages',
    price: 5.50,
    stock: 18,
    img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80',
    variants: [
      { name: 'Regular Black', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80' },
      { name: 'With Oat Milk', img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80' },
      { name: 'Vanilla Sweet Cream', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' }
    ],
    options: ['Regular Black', 'With Oat Milk', 'Vanilla Sweet Cream']
  },
  {
    id: 'p7',
    name: 'Fresh Orange Juice',
    category: 'Beverages',
    price: 4.50,
    stock: 20,
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80',
    variants: [
      { name: '350ml Bottle', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80' },
      { name: '1 Liter Bottle', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80' }
    ],
    options: ['350ml Bottle', '1 Liter Bottle']
  },

  // 🍿 Snacks & Pantry
  {
    id: 'p8',
    name: 'Butter Popcorn Tub',
    category: 'Snacks',
    price: 3.00,
    stock: 22,
    img: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=600&q=80',
    variants: [
      { name: 'Movie Theater Butter', img: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=600&q=80' },
      { name: 'Caramel Coated', img: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=600&q=80' }
    ],
    options: ['Movie Theater Butter', 'Caramel Coated']
  },
  {
    id: 'p9',
    name: 'Dark Artisan Chocolate Bar',
    category: 'Snacks',
    price: 4.25,
    stock: 16,
    img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80',
    variants: [
      { name: '70% Dark', img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80' },
      { name: 'Sea Salt Almond', img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80' }
    ],
    options: ['70% Dark', 'Sea Salt Almond']
  }
];

const DEFAULT_VOUCHERS = [
  { code: 'BIBE10', title: '10% OFF Storewide Harvest', type: 'percentage', value: 10, timesUsed: 0, active: true },
  { code: 'WELCOME5', title: '$5.00 Flat Off Order', type: 'fixed', value: 5, timesUsed: 0, active: true },
  { code: 'TOYJOY15', title: '15% OFF Toys & Fun Items', type: 'percentage', value: 15, timesUsed: 0, active: true },
  { code: 'FREESHIP', title: '$3.00 Delivery Subsidy', type: 'fixed', value: 3, timesUsed: 0, active: true }
];

const DEFAULT_PROFILE = {
  name: 'Maria Santos',
  email: 'maria.santos@example.com',
  defaultAddress: 'Unit 402, Acacia Grove Residences, Cebu City',
  savedAddresses: [
    'Unit 402, Acacia Grove Residences, Cebu City',
    '123 Mango Avenue, Cebu City',
    'Tech Hub 5th Floor, Cebu IT Park'
  ],
  claimedVouchers: ['BIBE10', 'WELCOME5']
};

// --- 2. LOCAL STORAGE MANAGER ---
const Storage = {
  KEYS: {
    PRODUCTS: 'bibe_mono_products_v2',
    ORDERS: 'bibe_mono_orders_v2',
    VOUCHERS: 'bibe_mono_vouchers_v2',
    PROFILE: 'bibe_mono_profile_v2'
  },

  init() {
    const stored = localStorage.getItem(this.KEYS.PRODUCTS);
    if (!stored || stored.includes('559827291-72ee739d0d9a') || stored.includes('582234372722-50d7ccc30ebd')) {
      this.saveProducts(DEFAULT_PRODUCTS);
    }
    if (!localStorage.getItem(this.KEYS.ORDERS)) {
      this.saveOrders([]);
    }
    if (!localStorage.getItem(this.KEYS.VOUCHERS)) {
      this.saveVouchers(DEFAULT_VOUCHERS);
    }
    if (!localStorage.getItem(this.KEYS.PROFILE)) {
      this.saveProfile(DEFAULT_PROFILE);
    }
  },

  getProducts() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.PRODUCTS)) || DEFAULT_PRODUCTS; } catch { return DEFAULT_PRODUCTS; }
  },
  saveProducts(data) { localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify(data)); },

  getOrders() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.ORDERS)) || []; } catch { return []; }
  },
  saveOrders(data) { localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(data)); },

  getVouchers() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.VOUCHERS)) || DEFAULT_VOUCHERS; } catch { return DEFAULT_VOUCHERS; }
  },
  saveVouchers(data) { localStorage.setItem(this.KEYS.VOUCHERS, JSON.stringify(data)); },

  getProfile() {
    try {
      const p = JSON.parse(localStorage.getItem(this.KEYS.PROFILE));
      if (p && Array.isArray(p.savedAddresses) && p.savedAddresses.length > 0) return p;
      return DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  },
  saveProfile(data) { localStorage.setItem(this.KEYS.PROFILE, JSON.stringify(data)); }
};

// --- 3. APPLICATION STATE ---
const AppState = {
  currentView: 'landing', // 'landing', 'store', 'admin'
  cart: [],               // array of { product, option, img, qty }
  appliedVoucher: null,
  selectedPayment: 'COD',
  
  // Store Catalog filters
  storeCategory: 'All',
  storePrice: 'all',
  storeInStockOnly: false,
  storeSearch: '',
  storeSort: 'featured',

  // Current active product being customized in modal
  activeDetailProduct: null,
  activeDetailOption: null,
  activeDetailImg: '',
  activeDetailQty: 1
};

// --- 4. UTILITIES ---
function formatCurrency(amount) {
  return `$${Number(amount || 0).toFixed(2)}`;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

function showToast(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = msg;
  box.classList.add('show');
  setTimeout(() => box.classList.remove('show'), 3000);
}

// --- 5. NAVIGATION & EASY SWAP SIMULATION ---
const AppNav = {
  init() {
    document.getElementById('brandLogo')?.addEventListener('click', () => this.switchView('landing'));
    document.getElementById('navLinkHome')?.addEventListener('click', () => this.switchView('landing'));
    document.getElementById('navLinkStore')?.addEventListener('click', () => this.switchView('store'));
    document.getElementById('heroBtnExploreStore')?.addEventListener('click', () => this.switchView('store'));
    document.getElementById('navLinkAbout')?.addEventListener('click', () => {
      this.switchView('landing');
      document.getElementById('aboutSection')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Mobile Navigation Bar Listeners (< 860px)
    document.getElementById('mobNavLinkHome')?.addEventListener('click', () => this.switchView('landing'));
    document.getElementById('mobNavLinkStore')?.addEventListener('click', () => this.switchView('store'));
    document.getElementById('mobNavLinkAbout')?.addEventListener('click', () => {
      this.switchView('landing');
      document.getElementById('aboutSection')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Easy Swap Simulation Buttons
    document.getElementById('btnSwapStore')?.addEventListener('click', () => this.switchView('store'));
    document.getElementById('btnSwapAdmin')?.addEventListener('click', () => this.switchView('admin'));
    document.getElementById('btnAdminBackToStore')?.addEventListener('click', () => this.switchView('store'));

    // Modals Triggers (User side only)
    document.getElementById('navLinkVouchers')?.addEventListener('click', () => AppModals.openVouchersModal());
    document.getElementById('heroBtnOpenVouchers')?.addEventListener('click', () => AppModals.openVouchersModal());
    document.getElementById('btnHeaderVoucher')?.addEventListener('click', () => AppModals.openVouchersModal());

    document.getElementById('navLinkTrack')?.addEventListener('click', () => AppModals.openTrackModal());
    document.getElementById('btnHeaderTrack')?.addEventListener('click', () => AppModals.openTrackModal());

    document.getElementById('btnHeaderProfile')?.addEventListener('click', () => AppModals.openProfileModal());
    document.getElementById('btnHeaderBag')?.addEventListener('click', () => AppCart.openDrawer());
  },

  switchView(viewName) {
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.mobile-subnav-btn').forEach(b => b.classList.remove('active'));
    
    const swapStoreBtn = document.getElementById('btnSwapStore');
    const swapAdminBtn = document.getElementById('btnSwapAdmin');
    const brandTagline = document.getElementById('headerBrandTagline');

    if (viewName === 'admin') {
      // ENTER ADMIN MODE: Hide user navbars and user action buttons!
      document.body.classList.add('in-admin-mode');
      document.getElementById('view-admin')?.classList.add('active');
      swapAdminBtn?.classList.add('active');
      swapStoreBtn?.classList.remove('active');
      if (brandTagline) brandTagline.textContent = 'ADMIN CONSOLE';
      AppState.currentView = 'admin';
      AdminController.refreshAll();
    } else {
      // ENTER USER/STORE MODE: Restore customer navbars, icons and bag!
      document.body.classList.remove('in-admin-mode');
      if (brandTagline) brandTagline.textContent = 'POS & Information System';

      if (viewName === 'landing') {
        document.getElementById('view-landing')?.classList.add('active');
        document.getElementById('navLinkHome')?.classList.add('active');
        document.getElementById('mobNavLinkHome')?.classList.add('active');
        swapStoreBtn?.classList.add('active');
        swapAdminBtn?.classList.remove('active');
        AppState.currentView = 'landing';
        LandingController.renderPopular();
      } else if (viewName === 'store') {
        document.getElementById('view-store')?.classList.add('active');
        document.getElementById('navLinkStore')?.classList.add('active');
        document.getElementById('mobNavLinkStore')?.classList.add('active');
        swapStoreBtn?.classList.add('active');
        swapAdminBtn?.classList.remove('active');
        AppState.currentView = 'store';
        StoreController.renderCatalog();
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// --- 6. LANDING PAGE CONTROLLER WITH WORKING SLIDES & 5-ITEM PAGING ---
const HERO_SLIDES = [
  {
    bg: 'bibe-hero.jpg',
    topTag: 'COLLECTION 2026 // HARVEST & TOYS',
    title: 'BIBE MARKET',
    desc: 'Fresh local harvest, bakery goods, pantry staples, and handcrafted wooden toys.',
    btnPrimaryText: 'Explore Store',
    btnPrimaryAction: () => AppNav.switchView('store'),
    btnSecondaryText: 'Claim Vouchers',
    btnSecondaryAction: () => AppModals.openVouchersModal()
  },
  {
    bg: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&q=85',
    topTag: 'WORKSHOP EDITION // ARTISAN TOYS & DUCKS',
    title: 'TOY WORKSHOP',
    desc: 'Hand-painted wooden locomotives, soft duckling plushies, and signature bath toys crafted for curious minds and timeless playtime.',
    btnPrimaryText: 'Shop Toys',
    btnPrimaryAction: () => {
      AppState.storeCategory = 'Toys';
      const toyRadio = document.querySelector('input[name="storeCategoryRadio"][value="Toys"]');
      if (toyRadio) toyRadio.checked = true;
      AppNav.switchView('store');
    },
    btnSecondaryText: 'Claim Vouchers',
    btnSecondaryAction: () => AppModals.openVouchersModal()
  },
  {
    bg: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600&q=85',
    topTag: 'FARM TO TABLE // CRISP ORCHARD HARVEST',
    title: 'CRISP ORCHARDS',
    desc: 'Handpicked crisp apples, sweet bananas, and sun-ripened sweet corn harvested fresh from verified regional sustainable farms.',
    btnPrimaryText: 'Shop Fruits',
    btnPrimaryAction: () => {
      AppState.storeCategory = 'Fruits';
      const fruitRadio = document.querySelector('input[name="storeCategoryRadio"][value="Fruits"]');
      if (fruitRadio) fruitRadio.checked = true;
      AppNav.switchView('store');
    },
    btnSecondaryText: 'Claim Vouchers',
    btnSecondaryAction: () => AppModals.openVouchersModal()
  },
  {
    bg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=85',
    topTag: 'MORNING BAKE // WHOLE GRAIN & PASTRIES',
    title: 'WARM BAKERY',
    desc: 'Golden flaky butter croissants, artisan brioche milk loaves, and rich morning pastries baked at sunrise with farm-fresh butter.',
    btnPrimaryText: 'Shop Bakery',
    btnPrimaryAction: () => {
      AppState.storeCategory = 'Bakery';
      const bakeRadio = document.querySelector('input[name="storeCategoryRadio"][value="Bakery"]');
      if (bakeRadio) bakeRadio.checked = true;
      AppNav.switchView('store');
    },
    btnSecondaryText: 'Track Order',
    btnSecondaryAction: () => AppModals.openTrackModal()
  },
  {
    bg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=85',
    topTag: 'COLD PRESSED // REFRESHING DRINKS & BREWS',
    title: 'ROAST & SIPS',
    desc: 'Smooth bottled cold brew coffee and 100% pure Valencia orange juice squeezed cold without artificial sugars or preservatives.',
    btnPrimaryText: 'Shop Drinks',
    btnPrimaryAction: () => {
      AppState.storeCategory = 'Beverages';
      const bevRadio = document.querySelector('input[name="storeCategoryRadio"][value="Beverages"]');
      if (bevRadio) bevRadio.checked = true;
      AppNav.switchView('store');
    },
    btnSecondaryText: 'Claim Vouchers',
    btnSecondaryAction: () => AppModals.openVouchersModal()
  }
];

const LandingController = {
  currentHeroSlide: 0,
  heroAutoTimer: null,
  popularStartIndex: 0,

  init() {
    this.initHeroSlider();
    this.initPopularPaging();
    this.renderPopular();
  },

  initHeroSlider() {
    this.buildHeroSlides();

    const prevBtn = document.getElementById('heroPrevSlide');
    const nextBtn = document.getElementById('heroNextSlide');
    const heroSec = document.getElementById('heroImmersiveSection');

    prevBtn?.addEventListener('click', () => {
      this.prevSlide();
      this.resetHeroTimer();
    });

    nextBtn?.addEventListener('click', () => {
      this.nextSlide();
      this.resetHeroTimer();
    });

    // Pause auto-rotation when user hovers over hero
    heroSec?.addEventListener('mouseenter', () => this.clearHeroTimer());
    heroSec?.addEventListener('mouseleave', () => this.startHeroTimer());

    this.goToSlide(0);
    this.startHeroTimer();
  },

  buildHeroSlides() {
    const track = document.getElementById('heroFilmstripTrack');
    if (!track) return;

    track.innerHTML = HERO_SLIDES.map((slide, i) => `
      <div class="hero-slide-pane ${i === 0 ? 'active' : ''}" data-index="${i}">
        <div class="hero-slide-bg" style="background-image: url('${slide.bg}');"></div>
        <div class="hero-vignette-overlay"></div>
        <div class="hero-bottom-left-box">
          <div class="hero-mono-tag">${slide.topTag}</div>
          <h1 class="hero-stretched-title">${slide.title}</h1>
          <p class="hero-desc-text">${slide.desc}</p>
          <div class="hero-btn-row">
            <button class="btn-hero-pill" onclick="LandingController.triggerHeroBtn(1, ${i})">
              ${slide.btnPrimaryText}
            </button>
            <button class="btn-hero-pill-outline" onclick="LandingController.triggerHeroBtn(2, ${i})">
              ${slide.btnSecondaryText}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  triggerHeroBtn(type, slideIndex) {
    const slide = HERO_SLIDES[slideIndex];
    if (!slide) return;
    if (type === 1) slide.btnPrimaryAction();
    else if (type === 2) slide.btnSecondaryAction();
  },

  startHeroTimer() {
    this.clearHeroTimer();
    this.heroAutoTimer = setInterval(() => {
      this.nextSlide();
    }, 6000);
  },

  clearHeroTimer() {
    if (this.heroAutoTimer) {
      clearInterval(this.heroAutoTimer);
      this.heroAutoTimer = null;
    }
  },

  resetHeroTimer() {
    this.clearHeroTimer();
    this.startHeroTimer();
  },

  nextSlide() {
    this.currentHeroSlide = (this.currentHeroSlide + 1) % HERO_SLIDES.length;
    this.goToSlide(this.currentHeroSlide);
  },

  prevSlide() {
    this.currentHeroSlide = (this.currentHeroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    this.goToSlide(this.currentHeroSlide);
  },

  setSlide(index) {
    this.goToSlide(index);
    this.resetHeroTimer();
  },

  goToSlide(index) {
    this.currentHeroSlide = index;
    const track = document.getElementById('heroFilmstripTrack');
    if (track) {
      // Film-strip horizontal translation: slides right-to-left or left-to-right!
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelectorAll('.hero-slide-pane').forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });

    const dotsRow = document.getElementById('heroSliderDotsRow');
    if (dotsRow) {
      dotsRow.innerHTML = HERO_SLIDES.map((_, i) => `
        <span class="hero-slider-dot ${i === index ? 'active' : ''}" 
              onclick="LandingController.setSlide(${i})" 
              title="Slide ${i + 1}"></span>
      `).join('');
    }
  },

  initPopularPaging() {
    const prevBtn = document.getElementById('popularPrevBtn');
    const nextBtn = document.getElementById('popularNextBtn');

    prevBtn?.addEventListener('click', () => {
      this.prevPopularWindow();
    });

    nextBtn?.addEventListener('click', () => {
      this.nextPopularWindow();
    });
  },

  // Fixed 5 items window shift: 1-5 -> 2-6 -> 3-7 -> 4-8...
  nextPopularWindow() {
    const products = Storage.getProducts();
    if (!products || products.length <= 5) return;
    this.popularStartIndex = (this.popularStartIndex + 1) % products.length;
    this.renderPopular('next');
  },

  prevPopularWindow() {
    const products = Storage.getProducts();
    if (!products || products.length <= 5) return;
    this.popularStartIndex = (this.popularStartIndex - 1 + products.length) % products.length;
    this.renderPopular('prev');
  },

  jumpPopular(newStartIndex) {
    const direction = newStartIndex > this.popularStartIndex ? 'next' : 'prev';
    this.popularStartIndex = newStartIndex;
    this.renderPopular(direction);
  },

  renderPopular(direction = null) {
    const grid = document.getElementById('popularItemsGrid');
    const badge = document.getElementById('popularRangeBadge');
    const dotsBox = document.getElementById('popularDotsBox');
    if (!grid) return;

    if (direction) {
      grid.classList.remove('slide-next', 'slide-prev');
      void grid.offsetWidth; // trigger reflow for smooth film-slide animation
      if (direction === 'next') grid.classList.add('slide-next');
      else if (direction === 'prev') grid.classList.add('slide-prev');
    }

    const products = Storage.getProducts();
    const total = products.length;
    if (total === 0) return;

    // Build window of exactly 5 items
    const windowSize = 5;
    const windowItems = [];
    for (let i = 0; i < windowSize; i++) {
      const idx = (this.popularStartIndex + i) % total;
      windowItems.push(products[idx]);
    }

    const startNum = this.popularStartIndex + 1;
    let endNum = this.popularStartIndex + windowSize;
    if (endNum > total) {
      if (badge) badge.textContent = `Items ${startNum}–${total} & 1–${endNum - total} of ${total}`;
    } else {
      if (badge) badge.textContent = `Items ${startNum}–${endNum} of ${total}`;
    }

    if (dotsBox) {
      // Exactly ONE dot can ever be active at a time (never two parts)
      const dotCount = 5;
      const activeDotIndex = Math.min(dotCount - 1, Math.max(0, Math.floor((this.popularStartIndex / total) * dotCount)));
      dotsBox.innerHTML = Array.from({ length: dotCount }).map((_, i) => {
        const stepIndex = Math.floor((i / dotCount) * total);
        const isActive = (i === activeDotIndex);
        return `<span class="popular-dot ${isActive ? 'active' : ''}" 
                      onclick="LandingController.jumpPopular(${stepIndex})" 
                      title="Jump to item ${stepIndex + 1}"></span>`;
      }).join('');
    }

    // Render 5 balanced cards with uniform height and horizontally level prices
    grid.innerHTML = windowItems.map(p => `
      <div class="product-card-nobtn" data-id="${p.id}" onclick="AppModals.openProductDetail('${p.id}')">
        <div class="product-thumb-wrap">
          <img src="${p.img}" alt="${p.name}" class="product-thumb-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80'">
          <span class="product-tag-badge">${p.category}</span>
          <span class="product-stock-pill">${p.stock > 0 ? `${p.stock} In Stock` : 'Out of Stock'}</span>
        </div>
        <div class="product-card-body">
          <h3 class="product-card-title">${p.name}</h3>
          <div class="product-options-piped">${p.options?.join(' | ') || 'Standard'}</div>
          <div class="product-card-price">${formatCurrency(p.price)}</div>
        </div>
      </div>
    `).join('');
  }
};

// --- 7. STORE CATALOG (NO BUTTONS ON CARDS, OPTIONS SPLIT BY | ) ---
const StoreController = {
  init() {
    this.bindFilters();
    this.renderCatalog();
  },

  bindFilters() {
    document.getElementById('storeSearchInput')?.addEventListener('input', (e) => {
      AppState.storeSearch = e.target.value.toLowerCase().trim();
      this.renderCatalog();
    });

    document.querySelectorAll('input[name="storeCategoryRadio"]').forEach(r => {
      r.addEventListener('change', (e) => {
        AppState.storeCategory = e.target.value;
        this.renderCatalog();
      });
    });

    document.querySelectorAll('input[name="storePriceRadio"]').forEach(r => {
      r.addEventListener('change', (e) => {
        AppState.storePrice = e.target.value;
        this.renderCatalog();
      });
    });

    document.getElementById('chkStoreInStockOnly')?.addEventListener('change', (e) => {
      AppState.storeInStockOnly = e.target.checked;
      this.renderCatalog();
    });

    document.getElementById('storeSortSelect')?.addEventListener('change', (e) => {
      AppState.storeSort = e.target.value;
      this.renderCatalog();
    });

    document.getElementById('btnResetStoreFilters')?.addEventListener('click', () => {
      AppState.storeCategory = 'All';
      AppState.storePrice = 'all';
      AppState.storeInStockOnly = false;
      AppState.storeSearch = '';
      AppState.storeSort = 'featured';

      const s = document.getElementById('storeSearchInput');
      if (s) s.value = '';
      const rCat = document.querySelector('input[name="storeCategoryRadio"][value="All"]');
      if (rCat) rCat.checked = true;
      const rPrice = document.querySelector('input[name="storePriceRadio"][value="all"]');
      if (rPrice) rPrice.checked = true;
      const chk = document.getElementById('chkStoreInStockOnly');
      if (chk) chk.checked = false;

      this.renderCatalog();
      showToast('Filters reset');
    });
  },

  renderCatalog() {
    const grid = document.getElementById('storeCatalogGrid');
    const countLbl = document.getElementById('storeResultsCount');
    if (!grid) return;

    let list = Storage.getProducts();

    if (AppState.storeCategory !== 'All') {
      list = list.filter(p => p.category === AppState.storeCategory);
    }
    if (AppState.storeSearch) {
      list = list.filter(p => p.name.toLowerCase().includes(AppState.storeSearch));
    }
    if (AppState.storePrice === 'under-5') {
      list = list.filter(p => p.price < 5);
    } else if (AppState.storePrice === '5-10') {
      list = list.filter(p => p.price >= 5 && p.price <= 10);
    } else if (AppState.storePrice === 'over-10') {
      list = list.filter(p => p.price > 10);
    }
    if (AppState.storeInStockOnly) {
      list = list.filter(p => p.stock > 0);
    }

    if (AppState.storeSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (AppState.storeSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (AppState.storeSort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (countLbl) countLbl.textContent = `Showing ${list.length} products`;

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; border: 2px solid var(--black);">
          <h3 style="font-family: var(--font-title); font-size: 1.5rem; font-weight: 900; text-transform: uppercase;">No Items Found</h3>
          <p style="color: var(--gray-500); margin-top: 4px;">Try loosening the filters or search keywords.</p>
        </div>
      `;
      return;
    }

    // Product cards without buttons! Options split with | not comma
    grid.innerHTML = list.map(p => `
      <div class="product-card-nobtn" data-id="${p.id}" onclick="AppModals.openProductDetail('${p.id}')">
        <div class="product-thumb-wrap">
          <img src="${p.img}" alt="${p.name}" class="product-thumb-img" loading="lazy">
          <span class="product-tag-badge">${p.category}</span>
          <span class="product-stock-pill">${p.stock > 0 ? `${p.stock} In Stock` : 'Out of Stock'}</span>
        </div>
        <div class="product-card-body">
          <h3 class="product-card-title">${p.name}</h3>
          <div class="product-options-piped">${p.options?.join(' | ') || 'Standard'}</div>
          <div class="product-card-price">${formatCurrency(p.price)}</div>
        </div>
      </div>
    `).join('');
  }
};

// --- 8. CART DRAWER (GROUPED BY CATEGORY, ZERO TAX, PROFILE ADDRESS) ---
const AppCart = {
  init() {
    this.populateVouchersSelect();
    this.bindEvents();
    this.renderDrawer();
  },

  bindEvents() {
    document.getElementById('btnCloseCartDrawer')?.addEventListener('click', () => this.closeDrawer());
    document.getElementById('cartOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'cartOverlay') this.closeDrawer();
    });

    document.getElementById('btnApplyCartVoucher')?.addEventListener('click', () => this.applySelectedVoucher());

    document.getElementById('btnProceedToCheckout')?.addEventListener('click', () => {
      this.closeDrawer();
      AppCheckout.openCheckoutModal();
    });
  },

  openDrawer() {
    document.getElementById('cartOverlay')?.classList.add('open');
    this.populateVouchersSelect();
    this.renderDrawer();
  },

  closeDrawer() {
    document.getElementById('cartOverlay')?.classList.remove('open');
  },

  populateVouchersSelect() {
    const sel = document.getElementById('cartVoucherSelectBox');
    if (!sel) return;

    const profile = Storage.getProfile();
    const vouchers = Storage.getVouchers();
    const claimed = profile.claimedVouchers || [];

    sel.innerHTML = `
      <option value="">-- Select Claimed Voucher --</option>
      ${claimed.map(code => {
        const v = vouchers.find(item => item.code === code);
        if (!v) return '';
        const disc = v.type === 'percentage' ? `${v.value}% OFF` : `$${v.value}.00 OFF`;
        return `<option value="${v.code}" ${AppState.appliedVoucher?.code === v.code ? 'selected' : ''}>${v.code} (${disc})</option>`;
      }).join('')}
    `;
  },

  addItem(product, option, img, qty) {
    if (product.stock <= 0) {
      showToast('Item is out of stock!');
      return;
    }

    const existingIndex = AppState.cart.findIndex(i => i.product.id === product.id && i.option === option);
    if (existingIndex > -1) {
      AppState.cart[existingIndex].qty += qty;
    } else {
      AppState.cart.push({ product, option, img, qty });
    }

    this.renderDrawer();
    showToast(`Added ${qty}x ${product.name} (${option}) to bag!`);
  },

  updateItemQty(productId, option, change) {
    const index = AppState.cart.findIndex(i => i.product.id === productId && i.option === option);
    if (index === -1) return;

    const newQty = AppState.cart[index].qty + change;
    if (newQty <= 0) {
      AppState.cart.splice(index, 1);
    } else {
      AppState.cart[index].qty = newQty;
    }

    this.renderDrawer();
  },

  applySelectedVoucher() {
    const code = document.getElementById('cartVoucherSelectBox')?.value;
    if (!code) {
      AppState.appliedVoucher = null;
      this.renderDrawer();
      showToast('No voucher selected');
      return;
    }

    const vouchers = Storage.getVouchers();
    const v = vouchers.find(item => item.code === code && item.active);
    if (v) {
      AppState.appliedVoucher = v;
      showToast(`Voucher ${v.code} applied!`);
    }
    this.renderDrawer();
  },

  // Calculate totals: NO TAX! (Subtotal - Voucher Discount = Total)
  calculateTotals() {
    let subtotal = 0;
    let totalItems = 0;

    AppState.cart.forEach(item => {
      subtotal += item.product.price * item.qty;
      totalItems += item.qty;
    });

    let discount = 0;
    if (AppState.appliedVoucher && subtotal > 0) {
      if (AppState.appliedVoucher.type === 'percentage') {
        discount = (subtotal * AppState.appliedVoucher.value) / 100;
      } else {
        discount = Math.min(AppState.appliedVoucher.value, subtotal);
      }
    }

    const grandTotal = Math.max(0, subtotal - discount);

    return { subtotal, discount, grandTotal, totalItems };
  },

  renderDrawer() {
    const body = document.getElementById('cartDrawerItemsBody');
    const badge = document.getElementById('headerBagCount');
    const subtotalText = document.getElementById('cartSubtotalText');
    const discRow = document.getElementById('cartDiscountRow');
    const discText = document.getElementById('cartDiscountText');
    const grandTotalText = document.getElementById('cartGrandTotalText');
    const btnCheckout = document.getElementById('btnProceedToCheckout');
    const deliverToDisplay = document.getElementById('cartDeliverToDisplay');

    const profile = Storage.getProfile();
    if (deliverToDisplay) {
      deliverToDisplay.textContent = profile.defaultAddress || profile.savedAddresses[0] || 'Cebu';
    }

    const { subtotal, discount, grandTotal, totalItems } = this.calculateTotals();

    if (badge) badge.textContent = totalItems;

    if (AppState.cart.length === 0) {
      if (body) {
        body.innerHTML = `
          <div style="text-align: center; padding: 60px 10px; color: var(--gray-500);">
            <div style="font-size: 2.5rem; margin-bottom: 8px;">🛍️</div>
            <h4 style="font-family: var(--font-title); font-weight: 900; text-transform: uppercase;">Bag is Empty</h4>
            <p style="font-size: 0.85rem; margin-top: 4px;">Click any item card to customize and add to bag.</p>
          </div>
        `;
      }
      if (btnCheckout) btnCheckout.disabled = true;
    } else {
      if (btnCheckout) btnCheckout.disabled = false;

      // Group items by category header
      const groups = {};
      AppState.cart.forEach(item => {
        const cat = item.product.category || 'General';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
      });

      if (body) {
        body.innerHTML = Object.keys(groups).map(catKey => {
          const itemsInCat = groups[catKey];

          return `
            <div class="cart-category-group">
              <div class="cart-category-banner">
                <span>CATEGORY: ${catKey}</span>
                <span>${itemsInCat.length} ${itemsInCat.length === 1 ? 'item' : 'items'}</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${itemsInCat.map(i => {
                  const lineTotal = i.product.price * i.qty;
                  const itemImg = i.img || i.product.img;

                  return `
                    <div class="cart-item-row" style="background: var(--white); border: 1px solid var(--gray-200); padding: 10px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                      <img src="${itemImg}" alt="${i.product.name}" class="cart-item-thumb">
                      <div class="cart-item-desc">
                        <div class="cart-item-title">${i.product.name}</div>
                        <div class="cart-item-variant-label">Variant: <strong>${i.option}</strong></div>
                        <div style="font-size: 0.75rem; color: var(--gray-500);">${formatCurrency(i.product.price)} each</div>
                      </div>
                      <div class="cart-qty-counter">
                        <button class="cart-qty-btn" onclick="AppCart.updateItemQty('${i.product.id}', '${i.option}', -1)">-</button>
                        <span class="cart-qty-val">${i.qty}</span>
                        <button class="cart-qty-btn" onclick="AppCart.updateItemQty('${i.product.id}', '${i.option}', 1)">+</button>
                      </div>
                      <div class="cart-row-price">${formatCurrency(lineTotal)}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('');
      }
    }

    if (subtotalText) subtotalText.textContent = formatCurrency(subtotal);
    if (grandTotalText) grandTotalText.textContent = formatCurrency(grandTotal);

    if (discount > 0) {
      if (discRow) discRow.style.display = 'flex';
      if (discText) discText.textContent = `-${formatCurrency(discount)}`;
    } else {
      if (discRow) discRow.style.display = 'none';
    }
  }
};

// --- 9. MODALS ENGINE (IMAGE SWAPPING, VOUCHERS, TRACKING, ADDRESSES) ---
const AppModals = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    // Product Detail modal
    document.getElementById('btnCloseProductDetail')?.addEventListener('click', () => this.closeProductDetail());
    
    document.getElementById('modalQtyMinus')?.addEventListener('click', () => {
      if (AppState.activeDetailQty > 1) {
        AppState.activeDetailQty--;
        document.getElementById('modalQtyVal').textContent = AppState.activeDetailQty;
      }
    });
    
    document.getElementById('modalQtyPlus')?.addEventListener('click', () => {
      if (AppState.activeDetailProduct && AppState.activeDetailQty < AppState.activeDetailProduct.stock) {
        AppState.activeDetailQty++;
        document.getElementById('modalQtyVal').textContent = AppState.activeDetailQty;
      }
    });

    // Add to Bag Button inside the popup modal
    document.getElementById('btnConfirmAddToBag')?.addEventListener('click', () => {
      if (AppState.activeDetailProduct && AppState.activeDetailOption) {
        AppCart.addItem(
          AppState.activeDetailProduct,
          AppState.activeDetailOption,
          AppState.activeDetailImg,
          AppState.activeDetailQty
        );
        this.closeProductDetail();
      }
    });

    // Vouchers modal
    document.getElementById('btnCloseVouchersModal')?.addEventListener('click', () => {
      document.getElementById('vouchersModal')?.classList.remove('open');
    });
    document.getElementById('btnDoneVouchersModal')?.addEventListener('click', () => {
      document.getElementById('vouchersModal')?.classList.remove('open');
    });

    // Tracking modal
    document.getElementById('btnCloseTrackModal')?.addEventListener('click', () => {
      document.getElementById('trackOrderModal')?.classList.remove('open');
    });
    document.getElementById('btnCloseTrackModalDone')?.addEventListener('click', () => {
      document.getElementById('trackOrderModal')?.classList.remove('open');
    });
    document.getElementById('trackActiveOrderSelect')?.addEventListener('change', (e) => {
      this.renderTrackingForOrder(e.target.value);
    });

    // Profile modal
    document.getElementById('btnCloseProfileModal')?.addEventListener('click', () => {
      document.getElementById('profileModal')?.classList.remove('open');
    });
    document.getElementById('btnCancelProfileModal')?.addEventListener('click', () => {
      document.getElementById('profileModal')?.classList.remove('open');
    });

    // Add Address Button in Profile
    document.getElementById('profBtnAddAddress')?.addEventListener('click', () => {
      const inp = document.getElementById('profNewAddressInput');
      const val = inp?.value.trim();
      if (!val) {
        showToast('Please type an address');
        return;
      }
      this.addProfileAddress(val);
      if (inp) inp.value = '';
    });

    // Save Profile Preferences
    document.getElementById('btnSaveProfileModal')?.addEventListener('click', () => {
      const name = document.getElementById('profNameInput')?.value.trim();
      const email = document.getElementById('profEmailInput')?.value.trim();

      const profile = Storage.getProfile();
      if (name) profile.name = name;
      if (email) profile.email = email;
      Storage.saveProfile(profile);

      AppCart.renderDrawer();
      document.getElementById('profileModal')?.classList.remove('open');
      showToast('Profile preferences saved!');
    });
  },

  // OPEN PRODUCT DETAIL MODAL & INITIALIZE DYNAMIC VARIANT IMAGE
  openProductDetail(productId) {
    const products = Storage.getProducts();
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    AppState.activeDetailProduct = p;
    AppState.activeDetailQty = 1;

    // Pick first variant or option
    const firstVariant = (p.variants && p.variants[0]) || { name: (p.options && p.options[0]) || 'Standard', img: p.img };
    AppState.activeDetailOption = firstVariant.name;
    AppState.activeDetailImg = firstVariant.img || p.img;

    document.getElementById('modalDetailTitle').textContent = `DETAILS: ${p.name.toUpperCase()}`;
    document.getElementById('modalDetailName').textContent = p.name;
    document.getElementById('modalDetailPrice').textContent = formatCurrency(p.price);
    document.getElementById('modalDetailCategory').textContent = p.category;
    document.getElementById('modalDetailImg').src = AppState.activeDetailImg;
    document.getElementById('modalQtyVal').textContent = '1';

    // Render variant pills with image swapping!
    const pillContainer = document.getElementById('modalVariantPillsContainer');
    if (pillContainer) {
      const variantsList = p.variants || p.options.map(o => ({ name: o, img: p.img }));
      
      pillContainer.innerHTML = variantsList.map((v, idx) => `
        <button type="button" class="variant-pill-btn ${idx === 0 ? 'active' : ''}" onclick="AppModals.selectOptionVariant('${p.id}', '${v.name}', '${v.img}', this)">
          ${v.name}
        </button>
      `).join('');
    }

    document.getElementById('productDetailModal')?.classList.add('open');
  },

  // DYNAMIC IMAGE SWAP WHEN USER PICKS AN OPTION PILL
  selectOptionVariant(productId, optionName, variantImg, btnElement) {
    AppState.activeDetailOption = optionName;
    AppState.activeDetailImg = variantImg;

    // Smoothly swap modal product image!
    const imgEl = document.getElementById('modalDetailImg');
    if (imgEl && variantImg) {
      imgEl.style.opacity = '0.4';
      setTimeout(() => {
        imgEl.src = variantImg;
        imgEl.style.opacity = '1';
      }, 100);
    }

    // Toggle active pill styling
    document.querySelectorAll('#modalVariantPillsContainer .variant-pill-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
  },

  closeProductDetail() {
    document.getElementById('productDetailModal')?.classList.remove('open');
  },

  // VOUCHERS LIST MODAL
  openVouchersModal() {
    const container = document.getElementById('vouchersListContainer');
    if (!container) return;

    const vouchers = Storage.getVouchers();
    const profile = Storage.getProfile();

    container.innerHTML = vouchers.map(v => {
      const isClaimed = profile.claimedVouchers?.includes(v.code);
      const discountLabel = v.type === 'percentage' ? `${v.value}% OFF` : `$${v.value}.00 OFF`;

      return `
        <div style="border: 2px solid var(--black); padding: 14px; background: var(--gray-50); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-family: var(--font-title); font-size: 1.1rem; font-weight: 900; background: var(--black); color: var(--white); padding: 2px 6px;">${v.code}</span>
              <strong style="font-size: 1rem;">${discountLabel}</strong>
            </div>
            <p style="font-size: 0.8rem; color: var(--gray-500); margin-top: 4px;">${v.title}</p>
          </div>
          <div>
            <button class="btn-lifecycle" onclick="AppModals.claimVoucherFromModal('${v.code}')" ${isClaimed ? 'disabled' : ''}>
              ${isClaimed ? '✔ Claimed' : 'Claim to Bag'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('vouchersModal')?.classList.add('open');
  },

  claimVoucherFromModal(code) {
    const profile = Storage.getProfile();
    if (!profile.claimedVouchers) profile.claimedVouchers = [];
    if (!profile.claimedVouchers.includes(code)) {
      profile.claimedVouchers.push(code);
      Storage.saveProfile(profile);
      this.openVouchersModal();
      AppCart.populateVouchersSelect();
      showToast(`Voucher ${code} claimed!`);
    }
  },

  // ORDER TRACKING: AUTOMATIC DETAILS (NO TYPING NEEDED)
  openTrackModal(targetOrderId = null) {
    const orders = Storage.getOrders();
    const modal = document.getElementById('trackOrderModal');
    const selectRow = document.getElementById('trackOrderSelectRow');
    const selectBox = document.getElementById('trackActiveOrderSelect');
    const noOrdersMsg = document.getElementById('trackNoOrdersMsg');
    const detailsBody = document.getElementById('trackOrderDetailsBody');

    modal?.classList.add('open');

    if (orders.length === 0) {
      if (selectRow) selectRow.style.display = 'none';
      if (detailsBody) detailsBody.style.display = 'none';
      if (noOrdersMsg) noOrdersMsg.style.display = 'block';
      return;
    }

    if (noOrdersMsg) noOrdersMsg.style.display = 'none';
    if (detailsBody) detailsBody.style.display = 'block';

    // Populate order dropdown if multiple orders exist
    if (selectRow && selectBox) {
      selectRow.style.display = orders.length > 1 ? 'block' : 'none';
      selectBox.innerHTML = orders.map(o => `
        <option value="${o.id}" ${(targetOrderId ? o.id === targetOrderId : false) ? 'selected' : ''}>
          ${o.id} (${formatCurrency(o.total)} — ${o.status})
        </option>
      `).join('');
    }

    const orderToDisplay = targetOrderId || orders[0].id;
    this.renderTrackingForOrder(orderToDisplay);
  },

  renderTrackingForOrder(orderId) {
    const orders = Storage.getOrders();
    const order = orders.find(o => o.id === orderId) || orders[0];
    if (!order) return;

    document.getElementById('trackDisplayId').textContent = order.id;
    document.getElementById('trackDisplayBadge').textContent = order.status;
    document.getElementById('trackDisplayMeta').textContent = `Placed on ${formatDate(order.timestamp)} • Payment: ${order.paymentMethod}`;
    document.getElementById('trackDisplayAddress').textContent = `Deliver To: ${order.address}`;

    // Itemized Parcel Summary
    const itemsCont = document.getElementById('trackItemsContainer');
    if (itemsCont) {
      itemsCont.innerHTML = order.items.map(i => `
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--gray-200); padding-bottom: 4px;">
          <span>${i.name} (<strong>${i.option || 'Standard'}</strong>) x${i.qty}</span>
          <span style="font-weight: 700;">${formatCurrency(i.total)}</span>
        </div>
      `).join('');
    }

    // Lifecycle Stepper: 4 clear stages
    const c1 = document.getElementById('stageCard1');
    const c2 = document.getElementById('stageCard2');
    const c3 = document.getElementById('stageCard3');
    const c4 = document.getElementById('stageCard4');

    [c1, c2, c3, c4].forEach(c => c?.classList.remove('active', 'completed'));

    if (order.status === 'Payment Processing') {
      c1?.classList.add('active');
    } else if (order.status === 'Payment Accepted') {
      c1?.classList.add('completed');
      c2?.classList.add('active');
    } else if (order.status === 'Passed to Shipper') {
      c1?.classList.add('completed');
      c2?.classList.add('completed');
      c3?.classList.add('active');
    } else if (order.status === 'Delivered') {
      c1?.classList.add('completed');
      c2?.classList.add('completed');
      c3?.classList.add('completed');
      c4?.classList.add('active');
    }
  },

  // PROFILE & SAVED ADDRESSES MANAGEMENT
  openProfileModal() {
    const profile = Storage.getProfile();
    const nameInput = document.getElementById('profNameInput');
    const emailInput = document.getElementById('profEmailInput');

    if (nameInput) nameInput.value = profile.name || '';
    if (emailInput) emailInput.value = profile.email || '';

    this.renderProfileAddresses();
    document.getElementById('profileModal')?.classList.add('open');
  },

  renderProfileAddresses() {
    const container = document.getElementById('profileAddressListContainer');
    if (!container) return;

    const profile = Storage.getProfile();
    const list = profile.savedAddresses || [];

    if (list.length === 0) {
      container.innerHTML = `<div style="font-size: 0.8rem; color: var(--gray-500); padding: 8px;">No saved addresses. Add one below.</div>`;
      return;
    }

    container.innerHTML = list.map((addr, idx) => {
      const isDefault = (profile.defaultAddress === addr) || (idx === 0 && !profile.defaultAddress);

      return `
        <div class="profile-address-item ${isDefault ? 'is-default' : ''}">
          <div class="address-item-text">
            ${addr}
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            ${isDefault ? `<span class="address-badge-default">DEFAULT</span>` : `
              <button type="button" class="btn-address-make-default" onclick="AppModals.setDefaultAddress('${encodeURIComponent(addr)}')">Set Default</button>
            `}
            ${list.length > 1 ? `
              <button type="button" class="btn-address-remove" onclick="AppModals.deleteProfileAddress('${encodeURIComponent(addr)}')">&times;</button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  },

  addProfileAddress(newAddr) {
    const profile = Storage.getProfile();
    if (!profile.savedAddresses) profile.savedAddresses = [];

    if (!profile.savedAddresses.includes(newAddr)) {
      profile.savedAddresses.push(newAddr);
      if (!profile.defaultAddress) profile.defaultAddress = newAddr;
      Storage.saveProfile(profile);
      this.renderProfileAddresses();
      AppCheckout.populateAddressSelect();
      AppCart.renderDrawer();
      showToast('Address added to profile!');
    } else {
      showToast('Address already saved');
    }
  },

  deleteProfileAddress(encodedAddr) {
    const addr = decodeURIComponent(encodedAddr);
    const profile = Storage.getProfile();
    profile.savedAddresses = (profile.savedAddresses || []).filter(a => a !== addr);

    if (profile.defaultAddress === addr) {
      profile.defaultAddress = profile.savedAddresses[0] || '';
    }

    Storage.saveProfile(profile);
    this.renderProfileAddresses();
    AppCheckout.populateAddressSelect();
    AppCart.renderDrawer();
    showToast('Address removed');
  },

  setDefaultAddress(encodedAddr) {
    const addr = decodeURIComponent(encodedAddr);
    const profile = Storage.getProfile();
    profile.defaultAddress = addr;
    Storage.saveProfile(profile);
    this.renderProfileAddresses();
    AppCheckout.populateAddressSelect();
    AppCart.renderDrawer();
    showToast('Default delivery address updated');
  }
};

// --- 10. CHECKOUT & PRINTABLE RECEIPT ENGINE (NO TAX, LOCKED DROPDOWN) ---
const AppCheckout = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    document.getElementById('btnCloseCheckoutModal')?.addEventListener('click', () => {
      document.getElementById('checkoutModal')?.classList.remove('open');
    });
    document.getElementById('btnCancelCheckout')?.addEventListener('click', () => {
      document.getElementById('checkoutModal')?.classList.remove('open');
    });

    // Payment method buttons
    ['COD', 'GCash', 'Card'].forEach(method => {
      document.getElementById(`btnPay${method}`)?.addEventListener('click', (e) => {
        document.querySelectorAll('#checkoutModal .variant-pill-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        AppState.selectedPayment = method;
      });
    });

    // Manage Addresses shortcut in checkout
    document.getElementById('btnCheckoutManageAddress')?.addEventListener('click', () => {
      document.getElementById('checkoutModal')?.classList.remove('open');
      AppModals.openProfileModal();
    });

    // Place order
    document.getElementById('btnPlaceOrderConfirm')?.addEventListener('click', () => this.executeOrder());

    // Receipt buttons
    document.getElementById('btnCloseReceiptModal')?.addEventListener('click', () => {
      document.getElementById('receiptModal')?.classList.remove('open');
    });
    document.getElementById('btnPrintReceiptBtn')?.addEventListener('click', () => window.print());
    document.getElementById('btnTrackFromReceipt')?.addEventListener('click', () => {
      const orderId = document.getElementById('rcptNum')?.textContent;
      document.getElementById('receiptModal')?.classList.remove('open');
      AppModals.openTrackModal(orderId);
    });
  },

  populateAddressSelect() {
    const sel = document.getElementById('chkCustAddressSelect');
    if (!sel) return;

    const profile = Storage.getProfile();
    const addresses = profile.savedAddresses || [];

    if (addresses.length === 0) {
      sel.innerHTML = `<option value="Cebu City">Cebu City (Default)</option>`;
      return;
    }

    sel.innerHTML = addresses.map(addr => `
      <option value="${addr}" ${(addr === profile.defaultAddress) ? 'selected' : ''}>
        ${addr} ${(addr === profile.defaultAddress) ? '(Default)' : ''}
      </option>
    `).join('');
  },

  openCheckoutModal() {
    if (AppState.cart.length === 0) {
      showToast('Bag is empty!');
      return;
    }

    const { subtotal, discount, grandTotal } = AppCart.calculateTotals();
    const profile = Storage.getProfile();

    document.getElementById('chkCustName').value = profile.name || 'Maria Santos';
    this.populateAddressSelect();

    document.getElementById('chkSubtotalVal').textContent = formatCurrency(subtotal);

    const discRow = document.getElementById('chkDiscountRow');
    if (discount > 0) {
      if (discRow) discRow.style.display = 'flex';
      document.getElementById('chkDiscountVal').textContent = `-${formatCurrency(discount)}`;
    } else {
      if (discRow) discRow.style.display = 'none';
    }

    document.getElementById('chkGrandTotalVal').textContent = formatCurrency(grandTotal);
    document.getElementById('checkoutModal')?.classList.add('open');
  },

  executeOrder() {
    const { subtotal, discount, grandTotal } = AppCart.calculateTotals();
    const customer = document.getElementById('chkCustName')?.value.trim() || 'Valued Customer';
    const address = document.getElementById('chkCustAddressSelect')?.value || 'Cebu';
    const orderId = 'BM-' + Math.floor(1000 + Math.random() * 9000);

    const newOrder = {
      id: orderId,
      timestamp: new Date().toISOString(),
      customer,
      address,
      items: AppState.cart.map(i => ({
        id: i.product.id,
        name: i.product.name,
        category: i.product.category,
        option: i.option,
        img: i.img || i.product.img,
        price: i.product.price,
        qty: i.qty,
        total: i.product.price * i.qty
      })),
      subtotal,
      discount,
      total: grandTotal, // No tax!
      paymentMethod: AppState.selectedPayment,
      status: 'Payment Processing' // Stage 1 Lifecycle
    };

    // 1. Save order to localStorage
    const orders = Storage.getOrders();
    orders.unshift(newOrder);
    Storage.saveOrders(orders);

    // 2. Deduct inventory stocks
    const products = Storage.getProducts();
    AppState.cart.forEach(ci => {
      const p = products.find(prod => prod.id === ci.product.id);
      if (p) p.stock = Math.max(0, p.stock - ci.qty);
    });
    Storage.saveProducts(products);

    // 3. Increment voucher timesUsed
    if (AppState.appliedVoucher) {
      const vouchers = Storage.getVouchers();
      const v = vouchers.find(item => item.code === AppState.appliedVoucher.code);
      if (v) v.timesUsed = (v.timesUsed || 0) + 1;
      Storage.saveVouchers(vouchers);
    }

    // 4. Reset Cart
    document.getElementById('checkoutModal')?.classList.remove('open');
    AppState.cart = [];
    AppState.appliedVoucher = null;
    AppCart.renderDrawer();
    StoreController.renderCatalog();
    LandingController.renderPopular();

    // 5. Show Thermal Printable Receipt
    this.showReceipt(newOrder);
    showToast(`Order #${orderId} placed successfully!`);

    // 6. Refresh Admin
    AdminController.refreshAll();
  },

  showReceipt(order) {
    document.getElementById('rcptNum').textContent = order.id;
    document.getElementById('rcptDateText').textContent = formatDate(order.timestamp);
    document.getElementById('rcptCustName').textContent = order.customer;
    document.getElementById('rcptLocText').textContent = order.address;

    const tbody = document.getElementById('rcptItemsTableBody');
    if (tbody) {
      tbody.innerHTML = order.items.map(i => `
        <tr>
          <td>${i.name} (${i.option || 'Standard'})</td>
          <td style="text-align: center;">x${i.qty}</td>
          <td style="text-align: right;">${formatCurrency(i.total)}</td>
        </tr>
      `).join('');
    }

    document.getElementById('rcptSubtotalText').textContent = formatCurrency(order.subtotal);
    
    const discRow = document.getElementById('rcptDiscountRow');
    if (order.discount > 0) {
      if (discRow) discRow.style.display = 'flex';
      document.getElementById('rcptDiscountText').textContent = `-${formatCurrency(order.discount)}`;
    } else {
      if (discRow) discRow.style.display = 'none';
    }

    document.getElementById('rcptTotalText').textContent = formatCurrency(order.total);
    document.getElementById('rcptPayMethod').textContent = order.paymentMethod;

    document.getElementById('receiptModal')?.classList.add('open');
  }
};

// --- 11. ADMIN CONTROLLER (ORDERS LIFECYCLE, INVENTORY, PROMOS, DEMO TOOLS) ---
const AdminController = {
  init() {
    this.bindEvents();
    this.refreshAll();
  },

  bindEvents() {
    // Sidebar tabs
    document.querySelectorAll('.admin-sidebar-box .admin-side-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-sidebar-box .admin-side-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tab = btn.dataset.tab;
        document.querySelectorAll('.admin-panel-tab').forEach(p => p.classList.remove('active'));
        document.getElementById(tab)?.classList.add('active');
        this.refreshAll();
      });
    });

    // Demo simulation tools
    document.getElementById('btnDemoLoadOrders')?.addEventListener('click', () => this.loadDemoOrders());
    document.getElementById('btnDemoClearOrders')?.addEventListener('click', () => this.clearOrders());
    document.getElementById('btnDemoResetAll')?.addEventListener('click', () => this.factoryReset());

    // Export CSV & JSON
    document.getElementById('btnAdminExportCsv')?.addEventListener('click', () => this.exportCSV());
    document.getElementById('btnAdminExportJson')?.addEventListener('click', () => this.exportJSON());
  },

  refreshAll() {
    this.renderKPIs();
    this.renderOrdersTable();
    this.renderInventory();
    this.renderVouchers();
  },

  renderKPIs() {
    const orders = Storage.getOrders();
    let rev = 0;
    let units = 0;

    orders.forEach(o => {
      rev += o.total || 0;
      o.items.forEach(i => {
        units += i.qty || 0;
      });
    });

    const count = orders.length;
    const avg = count > 0 ? (rev / count) : 0;

    document.getElementById('kpiGrossRev').textContent = formatCurrency(rev);
    document.getElementById('kpiOrderCount').textContent = count;
    document.getElementById('kpiUnitsSold').textContent = units;
    document.getElementById('kpiAvgSpend').textContent = formatCurrency(avg);

    // Mini recent table in dashboard tab
    const mini = document.getElementById('adminRecentMiniTable');
    if (mini) {
      const recent = orders.slice(0, 5);
      if (recent.length === 0) {
        mini.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--gray-500); padding: 16px;">No orders recorded yet.</td></tr>`;
      } else {
        mini.innerHTML = recent.map(o => `
          <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.customer}</td>
            <td><strong>${formatCurrency(o.total)}</strong></td>
            <td>${o.paymentMethod}</td>
            <td><span style="background: var(--black); color: var(--white); padding: 2px 6px; font-size: 0.75rem; font-weight: 800;">${o.status}</span></td>
          </tr>
        `).join('');
      }
    }
  },

  // 4-STAGE LIFECYCLE ACTIONS IN ADMIN ORDERS TABLE
  renderOrdersTable() {
    const tbody = document.getElementById('adminFullOrdersTableBody');
    if (!tbody) return;

    const orders = Storage.getOrders();
    if (orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 32px; color: var(--gray-500);">No orders placed yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = orders.map(o => {
      const itemsText = o.items.map(i => `${i.name} (<strong>${i.option || 'Standard'}</strong>) x${i.qty}`).join('<br>');
      
      // Dynamic lifecycle progression buttons:
      let actionBtn = '';
      if (o.status === 'Payment Processing') {
        actionBtn = `<button class="btn-lifecycle" onclick="AdminController.advanceOrderStatus('${o.id}', 'Payment Accepted')">✔ Accept Payment (${o.paymentMethod})</button>`;
      } else if (o.status === 'Payment Accepted') {
        actionBtn = `<button class="btn-lifecycle" onclick="AdminController.advanceOrderStatus('${o.id}', 'Passed to Shipper')">🚚 Hand Over to Shipper</button>`;
      } else if (o.status === 'Passed to Shipper') {
        actionBtn = `<button class="btn-lifecycle" onclick="AdminController.advanceOrderStatus('${o.id}', 'Delivered')">✅ Mark as Delivered</button>`;
      } else {
        actionBtn = `<span style="font-size: 0.75rem; font-weight: 800; color: #16a34a;">✔ COMPLETED</span>`;
      }

      return `
        <tr>
          <td><strong>${o.id}</strong></td>
          <td style="font-size: 0.8rem; white-space: nowrap;">${formatDate(o.timestamp)}</td>
          <td>
            <strong>${o.customer}</strong><br>
            <span style="font-size: 0.75rem; color: var(--gray-500);">${o.address}</span>
          </td>
          <td style="font-size: 0.8rem;">${itemsText}</td>
          <td><strong>${formatCurrency(o.total)}</strong></td>
          <td>${o.paymentMethod}</td>
          <td><span style="background: var(--black); color: var(--white); padding: 2px 6px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase;">${o.status}</span></td>
          <td>${actionBtn}</td>
        </tr>
      `;
    }).join('');
  },

  advanceOrderStatus(orderId, nextStatus) {
    const orders = Storage.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = nextStatus;
      Storage.saveOrders(orders);
      this.refreshAll();
      showToast(`Order ${orderId} moved to: ${nextStatus}`);

      // Broadcast storage event so customer's tracking screen immediately updates!
      window.dispatchEvent(new Event('storage'));
    }
  },

  renderInventory() {
    const tbody = document.getElementById('adminInventoryTableBody');
    if (!tbody) return;

    const products = Storage.getProducts();
    tbody.innerHTML = products.map(p => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <img src="${p.img}" alt="${p.name}" style="width: 36px; height: 36px; object-fit: cover; border: 1.5px solid var(--black);">
            <strong>${p.name}</strong>
          </div>
        </td>
        <td>${p.category}</td>
        <td style="font-size: 0.75rem; color: var(--gray-500);">${p.options?.join(' | ') || 'Standard'}</td>
        <td><strong>${formatCurrency(p.price)}</strong></td>
        <td><strong>${p.stock}</strong> units</td>
        <td>
          <button class="btn-lifecycle" onclick="AdminController.quickRestock('${p.id}', 10)">+10 Restock</button>
        </td>
      </tr>
    `).join('');
  },

  quickRestock(id, qty) {
    const products = Storage.getProducts();
    const p = products.find(prod => prod.id === id);
    if (p) {
      p.stock += qty;
      Storage.saveProducts(products);
      this.renderInventory();
      StoreController.renderCatalog();
      LandingController.renderPopular();
      showToast(`Restocked ${p.name} (+${qty})`);
    }
  },

  renderVouchers() {
    const tbody = document.getElementById('adminVouchersTableBody');
    if (!tbody) return;

    const vouchers = Storage.getVouchers();
    tbody.innerHTML = vouchers.map(v => `
      <tr>
        <td><strong>${v.code}</strong></td>
        <td>${v.title}</td>
        <td>${v.type === 'percentage' ? `${v.value}% OFF` : `$${v.value}.00 OFF`}</td>
        <td>${v.timesUsed || 0} times</td>
        <td>${v.active ? 'ACTIVE' : 'DISABLED'}</td>
        <td>
          <button class="btn-lifecycle" onclick="AdminController.toggleVoucher('${v.code}')">${v.active ? 'Disable' : 'Enable'}</button>
        </td>
      </tr>
    `).join('');
  },

  toggleVoucher(code) {
    const vouchers = Storage.getVouchers();
    const v = vouchers.find(item => item.code === code);
    if (v) {
      v.active = !v.active;
      Storage.saveVouchers(vouchers);
      this.renderVouchers();
      AppCart.populateVouchersSelect();
      showToast(`Voucher ${code} toggled`);
    }
  },

  loadDemoOrders() {
    const sample = [
      {
        id: 'BM-2041',
        timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
        customer: 'Maria Santos',
        address: 'Unit 402, Acacia Grove Residences, Cebu City',
        items: [
          { id: 'p1', name: 'Fresh Crisp Apple', category: 'Fruits', option: 'Fuji Apple', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80', price: 5.00, qty: 1, total: 5.00 },
          { id: 't1', name: 'Yellow Rubber Bibe Toy', category: 'Toys', option: 'Ocean Blue', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', price: 6.50, qty: 1, total: 6.50 }
        ],
        subtotal: 11.50,
        discount: 0.00,
        total: 11.50,
        paymentMethod: 'GCash',
        status: 'Payment Processing'
      },
      {
        id: 'BM-2042',
        timestamp: new Date(Date.now() - 3600000 * 1).toISOString(),
        customer: 'Juan Dela Cruz',
        address: '123 Mango Avenue, Cebu City',
        items: [
          { id: 'p5', name: 'Butter Croissant', category: 'Bakery', option: 'Chocolate Filled', img: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&q=80', price: 4.00, qty: 2, total: 8.00 },
          { id: 't2', name: 'Bibe Plushie Duckling', category: 'Toys', option: 'Medium (35cm)', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80', price: 12.00, qty: 1, total: 12.00 }
        ],
        subtotal: 20.00,
        discount: 2.00,
        total: 18.00,
        paymentMethod: 'COD',
        status: 'Passed to Shipper'
      }
    ];

    Storage.saveOrders(sample);
    this.refreshAll();
    showToast('Loaded sample orders for demo!');
  },

  clearOrders() {
    if (!confirm('Clear all orders?')) return;
    Storage.saveOrders([]);
    this.refreshAll();
    showToast('All orders cleared');
  },

  factoryReset() {
    if (!confirm('Factory reset system to initial state?')) return;
    localStorage.clear();
    Storage.init();
    AppState.cart = [];
    AppState.appliedVoucher = null;
    StoreController.renderCatalog();
    LandingController.renderPopular();
    AppCart.renderDrawer();
    this.refreshAll();
    showToast('System reset complete');
  },

  exportCSV() {
    const orders = Storage.getOrders();
    if (orders.length === 0) return showToast('No orders to export');

    let csv = "Order ID,Date,Customer,Delivery Address,Total,Payment,Status,Items\n";
    orders.forEach(o => {
      const items = `"${o.items.map(i => `${i.name} (${i.option}) x${i.qty}`).join('; ')}"`;
      csv += `${o.id},"${o.timestamp}","${o.customer}","${o.address}",${o.total.toFixed(2)},"${o.paymentMethod}","${o.status}",${items}\n`;
    });

    const link = document.createElement("a");
    link.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    link.download = `bibe_market_orders_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('Exported CSV');
  },

  exportJSON() {
    const orders = Storage.getOrders();
    const link = document.createElement("a");
    link.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(orders, null, 2));
    link.download = `bibe_market_orders_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('Exported JSON');
  }
};

// --- 12. REAL-TIME CROSS-TAB SYNC ---
function initCrossTabSync() {
  window.addEventListener('storage', () => {
    AdminController.refreshAll();
    StoreController.renderCatalog();
    LandingController.renderPopular();
    AppCart.renderDrawer();
    
    // If order tracking modal is open, re-render currently viewed order immediately!
    const trackModal = document.getElementById('trackOrderModal');
    if (trackModal?.classList.contains('open')) {
      const activeId = document.getElementById('trackActiveOrderSelect')?.value;
      if (activeId) AppModals.renderTrackingForOrder(activeId);
    }
  });
}

// --- 13. DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  Storage.init();
  AppNav.init();
  LandingController.init();
  StoreController.init();
  AppCart.init();
  AppModals.init();
  AppCheckout.init();
  AdminController.init();
  initCrossTabSync();
  console.log('🦆 Bibe Market Monochrome Engine v2.0 Active!');
});
