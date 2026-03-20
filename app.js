const PAGE_FILE_MAP = {
    "landing": "landing.html",
    "home": "home.html",
    "sign-in": "sign-in.html",
    "cart": "cart.html",
    "customize": "customize.html",
    "checkout": "checkout.html",
    "order-confirm": "order-confirm.html",
    "order-status": "order-status.html",
    "restaurant-home": "restaurant-home.html",
    "restaurant-home-logo": "restaurant-home-logo.html",
    "restaurant-landing": "restaurant-landing.html",
    "restaurant-sign-in": "restaurant-sign-in.html",
    "order-details": "order-details.html",
    "qr-code-guide": "qr-code-guide.html",
    "menu": "menu.html",
    "location-pick": "location-pick.html",
    "location-favorites": "location-favorites.html",
    "login": "login.html",
    "sign-up": "sign-up.html",
    "account": "account.html",
    "privacy": "privacy.html",
    "dashboard": "dashboard.html",
    "index": "index.html",
    "manage-favorites": "manage-favorites.html"
};
const PAGE_LABELS = {
    "landing": "FareBites Landing Page",
    "home": "FareBites Homepage (Logged In)",
    "sign-in": "Sign In / Sign Up",
    "cart": "Cart / Review",
    "customize": "Customize Item",
    "checkout": "Checkout",
    "order-confirm": "Order Confirmation",
    "order-status": "Order Status",
    "restaurant-home": "i-Tea Homepage",
    "restaurant-home-logo": "i-Tea Homepage (Logo)",
    "restaurant-landing": "i-Tea Landing Page",
    "restaurant-sign-in": "i-Tea Sign In",
    "order-details": "Order Details",
    "qr-code-guide": "QR Code Guide",
    "menu": "Menu",
    "location-pick": "Pick a Location",
    "location-favorites": "Saved Locations",
    "login": "Login (Phone)",
    "sign-up": "Sign Up",
    "account": "My Account",
    "privacy": "Privacy Policy",
    "dashboard": "Merchant Dashboard",
    "manage-favorites": "Manage Favorites"
};
const STORAGE_KEYS = {
    state: 'farebitesMockupState',
    viewport: 'farebitesViewport'
};
const assets = {
    featured: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    steak: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    bobaHero: "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
    boba1: "https://olodev.azurewebsites.net/imagesmenu/M7-Cr%C3%A8me-Br%C3%BBl%C3%A9e-Boba-Milk-Tea.jpg",
    boba2: "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
    boba3: "https://olodev.azurewebsites.net/imagesmenu/M8_Fresh-Taro-Puree-Boba-Latte.jpg",
    boba4: "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg",
    menuHero: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    cobbSalad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    shrimpTacos: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    burritoBowl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&getSet=80",
    icedMatcha: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106518.42371900132!2d-112.4414169904297!3d33.4571167448373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b394142f9b23b%3A0xc3f92d47101783e4!2sGoodyear%2C%20AZ!5e0!3m2!1sen!2sus!4v1709854800000!5m2!1sen!2sus"
};

const DEFAULT_STATE = {
    fulfillmentMode: 'In-store',
    orderTime: 'ASAP',
    locationFilter: 'Nearby',
    selectedDay: 'Today',
    selectedTimeSlot: '12:30 PM',
    sugarLevel: '50%',
    itemQuantity: 1,
    bagQuantity: 0,
    noBagsSelected: false,
    toppings: ['BOBA'],
    modalOpen: null,
    paymentMethod: 'card',
    selectedItem: null,
    tipPercentage: 15,
    customTipAmount: 0,
    orderDetailsExpanded: true,
    favorites: [
        { id: 1, name: "M7 Crème Brûlée Boba Milk Tea", price: 5.75, image: assets.boba1, category: "New Item" },
        { id: 2, name: "P4 Brown Sugar Boba Latte", price: 5.75, image: assets.boba2, category: "Popular" },
        { id: 3, name: "M8 Taro Boba Purée Latte", price: 5.75, image: assets.boba3, category: "Specialty" },
        { id: 4, name: "P1 Super Fruit Tea", price: 5.95, image: assets.boba4, category: "Fruit Tea" }
    ]
};

let currentViewport = sessionStorage.getItem(STORAGE_KEYS.viewport) || 'mobile';
let currentPage = document.body.dataset.page || 'restaurant-landing';
let mockupState = loadMockupState();

function loadMockupState() {
    try {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.state) || 'null');
        return saved ? { ...DEFAULT_STATE, ...saved } : { ...DEFAULT_STATE };
    } catch (error) {
        return { ...DEFAULT_STATE };
    }
}

function persistAllState() {
    sessionStorage.setItem(STORAGE_KEYS.state, JSON.stringify(mockupState));
    sessionStorage.setItem(STORAGE_KEYS.viewport, currentViewport);
}

const LOCATIONS = [
    { name: "i-Tea - TEMPE", address: "825 W UNIVERSITY, Tempe, AZ", dist: "0.8 mi", fav: true, hours: "11:30 AM to 9:30 PM" },
    { name: "i-Tea - ALAMEDA", address: "1860 PARK ST, Alameda, CA", dist: "1.2 mi", fav: false, hours: "12:00 PM to 9:30 PM" },
    { name: "i-Tea - CASTRO VALLEY", address: "20666 REDWOOD RD, Castro Valley, CA", dist: "15.1 mi", fav: false, hours: "10:30 AM to 10:00 PM" },
    { name: "i-Tea - UC DAVIS", address: "236 A ST, Davis, CA", dist: "45.0 mi", fav: false, hours: "11:00 AM to 8:00 PM" },
    { name: "i-Tea - FREMONT #1", address: "43421 CHRISTY ST, Fremont, CA", dist: "18.2 mi", fav: false, hours: "11:30 AM to 9:00 PM" },
    { name: "i-Tea - FRESNO", address: "345 E SHAW AVE, Fresno, CA", dist: "120.5 mi", fav: false, hours: "1:00 PM to 6:45 PM" },
    { name: "i-Tea - MILPITAS", address: "766 E CALAVERAS BLVD, Milpitas, CA", dist: "25.3 mi", fav: false, hours: "11:30 AM to 9:20 PM" },
    { name: "i-Tea - MORAGA", address: "1460 MORAGA RD, Moraga, CA", dist: "15.8 mi", fav: false, hours: "12:30 PM to 8:00 PM" },
    { name: "i-Tea - NEWARK", address: "34925 NEWARK BLVD, Newark, CA", dist: "20.1 mi", fav: false, hours: "11:30 AM to 9:20 PM" },
    { name: "i-Tea - OAKLAND", address: "388 9TH ST, 126A, Oakland, CA", dist: "8.5 mi", fav: true, hours: "11:00 AM to 6:00 PM" },
    { name: "i-Tea - PITTSBURG", address: "212A LOVERIDGE RD, Pittsburg, CA", dist: "32.4 mi", fav: false, hours: "11:00 AM to 7:00 PM" },
    { name: "i-Tea - PLEASANTON", address: "915 MAIN ST, STE C, Pleasanton, CA", dist: "28.0 mi", fav: false, hours: "11:30 AM to 7:30 PM" },
    { name: "i-Tea - STOCKTON", address: "6846 STOCKTON BLVD, Sacramento, CA", dist: "85.2 mi", fav: false, hours: "10:20 AM to 8:00 PM" },
    { name: "i-Tea - TEARAY", address: "253 KEARNY ST, San Francisco, CA", dist: "2.1 mi", fav: true, hours: "12:00 PM to 6:00 PM" },
    { name: "i-Tea - SAN JOSE", address: "2936 ABORN SQUARE RD, San Jose, CA", dist: "35.6 mi", fav: false, hours: "11:30 AM to 9:30 PM" },
    { name: "i-Tea - SAN LEANDRO", address: "177 PELTON CENTER WAY, San Leandro, CA", dist: "10.2 mi", fav: false, hours: "Open 24 Hours" }
];

const MENU_ITEMS = [
    {
        name: "M7 Crème Brûlée Boba Milk Tea",
        description: "377 calories to 594 calories",
        price: 5.75,
        image: "https://olodev.azurewebsites.net/imagesmenu/M7-Cr%C3%A8me-Br%C3%BBl%C3%A9e-Boba-Milk-Tea.jpg"
    },
    {
        name: "M8 Taro Boba Purée Latte",
        description: "Come With Fresh Taro Puree, Freshly Made Taro Boba",
        price: 5.75,
        image: "https://olodev.azurewebsites.net/imagesmenu/M8_Fresh-Taro-Puree-Boba-Latte.jpg"
    },
    {
        name: "M9 3G Fresh Taro Boba Latte",
        description: "Come With Mashed Taro, Grass Jelly, Red Bean, and Fresh Taro Boba",
        price: 5.75,
        image: "https://olodev.azurewebsites.net/imagesmenu/M9_3G-Fresh-Taro-Boba-Latte.jpg"
    },
    {
        name: "P1 Super Fruit Tea",
        description: "Comes with Pineapple, Passion Fruit, Apple, Lime, and Orange",
        price: 5.95,
        image: "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg"
    },
    {
        name: "P2 Super Lime Slushium",
        description: "276 calories",
        price: 5.25,
        image: "https://olodev.azurewebsites.net/imagesmenu/P2-Super-Lime-Sijichun.jpg"
    },
    {
        name: "P3 Super Grapefruit",
        description: "239 calories to 339 calories",
        price: 5.25,
        image: "https://olodev.azurewebsites.net/imagesmenu/P3-Super-Grapefruit.jpg"
    },
    {
        name: "P4 Brown Sugar Boba Latte",
        description: "356 calories to 478 calories",
        price: 5.75,
        image: "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg"
    },
    {
        name: "P5 Sun Moon Lake Black Tea Cheema",
        description: "168 calories to 354 calories",
        price: 6.50,
        image: "https://olodev.azurewebsites.net/imagesmenu/P5-Sun-Moon-Lake-Cheesma.jpg"
    },
    {
        name: "P7 Fresh Mango Cheema",
        description: "301 calories to 348 calories",
        price: 6.50,
        image: "https://olodev.azurewebsites.net/imagesmenu/P7-Mango-Fruity-Tea-Cheezma.jpg"
    },
    {
        name: "P8 Fresh Dragon Fruit Cheema",
        description: "355 calories to 396 calories",
        price: 6.50,
        image: "https://olodev.azurewebsites.net/imagesmenu/P8-Dragon-Fruity-Cheezma.jpg"
    },
    {
        name: "P9 Fresh Strawberry Cheema",
        description: "301 calories to 345 calories",
        price: 6.50,
        image: "https://olodev.azurewebsites.net/imagesmenu/P9-Strawberry-Fruity-Cheezma.jpg"
    }
];

function toggleMenu(e, menuId) {
    e.stopPropagation();
    const allMenus = ['dropdown-menu-fb', 'dropdown-menu-rb'];
    allMenus.forEach(id => {
        const menu = document.getElementById(id);
        if (id === menuId) {
            menu.classList.toggle('show');
        } else if (menu) {
            menu.classList.remove('show');
        }
    });
}

document.addEventListener('click', () => {
    ['dropdown-menu-fb', 'dropdown-menu-rb'].forEach(id => {
        const menu = document.getElementById(id);
        if (menu) menu.classList.remove('show');
    });
});


const routes = {
    'landing': () => `
            <div class="flex flex-col h-full relative overflow-hidden bg-black">
                <div class="absolute inset-0 z-0">
                    <img src="${assets.featured}" class="w-full h-full object-cover opacity-80">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60"></div>
                </div>
                
                <div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center mt-12">
                    <h1 class="text-6xl font-black text-red-600 tracking-tighter uppercase drop-shadow-2xl">FAREBITES</h1>
                    <p class="text-white font-bold tracking-widest uppercase mt-4 text-sm drop-shadow-md">Food you love, delivered.</p>
                </div>

                <div class="relative z-10 px-6 pb-12 w-full shrink-0">
                    <button onclick="navigateTo('sign-in')" class="w-full bg-red-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(220,38,38,0.5)] active:scale-95 transition-transform uppercase tracking-wider">Log In</button>
                </div>
            </div>`,
    'dashboard': () => `
            <div class="flex flex-col h-full bg-[#f0f2f5] relative">
                <header class="bg-[#1a1a1a] px-6 py-4 flex justify-between items-center z-50 shrink-0 shadow-md">
                    <div class="flex flex-col text-left">
                        <span class="text-[10px] font-black text-red-500 tracking-widest uppercase">Merchant Portal</span>
                        <span class="text-[15px] font-black text-white tracking-tight">DASHBOARD</span>
                    </div>
                    <div class="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-full"><i class="fa-solid fa-store text-lg"></i></div>
                </header>
                <div class="flex-1 overflow-y-auto relative scrollbar-hide px-5 py-6 space-y-5 pb-32">
                    <!-- Stats Overview -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                            <span class="text-3xl font-black text-gray-900">12</span>
                            <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Active Orders</span>
                        </div>
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                            <span class="text-3xl font-black text-green-600">$458</span>
                            <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Today's Sales</span>
                        </div>
                    </div>

                    <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight px-1">Manage Store</h2>

                    <div class="space-y-3">
                        <!-- Menu Items -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-utensils text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Menu & Items</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Update prices, edit items, mark out of stock</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <!-- Store Hours -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-clock text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Store Hours</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Regular hours, holidays & temporary closures</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <!-- Promotions & Coupons -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-ticket text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Promos & Coupons</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Create and manage active discounts</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <!-- Featured Dishes -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-star text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Featured Dishes</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Highlight specials and top-selling items</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>
                    </div>
                </div>
                
                <div class="flex-shrink-0 bg-white border-t border-gray-100 p-6 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                    <div class="flex justify-around text-[10px] font-black uppercase">
                        <div class="text-red-600 flex flex-col items-center gap-1 cursor-pointer"><i class="fa-solid fa-chart-line text-xl"></i>DASH</div>
                        <div class="text-gray-400 flex flex-col items-center gap-1 cursor-pointer"><i class="fa-solid fa-list-check text-xl"></i>ORDERS</div>
                        <div class="text-gray-400 flex flex-col items-center gap-1 cursor-pointer"><i class="fa-solid fa-gear text-xl"></i>SETTINGS</div>
                    </div>
                </div>
            </div>`,
    'home': () => {
        if (currentViewport === 'desktop') {
            return `
                <div class="flex flex-col w-full min-h-full">
                    <nav class="flex justify-between items-center px-16 py-6 bg-white sticky top-0 z-50 shadow-sm">
                        <div class="flex items-center gap-8"><span class="text-3xl font-black text-red-600 tracking-tighter cursor-pointer" onclick="navigateTo('home')">FAREBITES</span></div>
                        <div class="flex items-center gap-6"><span class="font-black text-gray-800">Hi Mike!</span><div class="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-red-600 transition"><i class="fa-solid fa-user text-gray-600"></i></div></div>
                    </nav>
                    <div class="desktop-hero" style="background-image: url('${assets.featured}')">
                        <div class="relative z-10 w-full max-w-5xl px-12 text-center text-white py-24">
                            <h1 class="text-7xl font-black mb-10 leading-tight tracking-tight">Food you love,<br>delivered.</h1>
                            <div class="bg-white rounded-full p-2.5 flex shadow-2xl mx-auto max-w-3xl w-full">
                                <div class="flex-1 flex items-center px-8 gap-4 text-gray-800"><i class="fa-solid fa-location-dot text-red-600"></i><input type="text" placeholder="Enter delivery address" class="w-full py-4 text-lg outline-none font-medium placeholder-gray-400"></div>
                                <button class="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-red-700 transition group"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else {
            return `
                <div class="flex flex-col h-full bg-white relative">
                    <div class="flex-shrink-0 bg-white px-6 pt-10 pb-4">
                        <div class="bg-gray-100 flex items-center gap-3 px-5 py-3.5 rounded-full shadow-sm">
                            <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                            <input type="text" placeholder="Search for food" class="bg-transparent border-none outline-none w-full font-semibold text-gray-800 placeholder-gray-400">
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto scrollbar-hide">
                        <!-- Red Category Icons (Lucide stroke-width 2) -->
                        <div class="flex gap-8 overflow-x-auto px-8 pb-10 pt-6 scrollbar-hide">
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">pick up</span>
                            </div>
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c0 5 4 9 9 9s9-4 9-9H3Z"/><path d="m19 2-8 10"/><path d="m22 3-9 10"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">dine in</span>
                            </div>
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600 lucide lucide-car" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">drive up</span>
                            </div>
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600 lucide lucide-store" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter text-center leading-none">in store<br>pickup</span>
                            </div>
                        </div>
                        <div class="px-6">
                            <h3 class="font-black text-2xl tracking-tight text-gray-900 mb-6 uppercase">Recently viewed</h3>
                            <div class="min-w-[280px] group cursor-pointer" onclick="navigateTo('restaurant-home')">
                                <div class="relative overflow-hidden rounded-2xl mb-3 aspect-[16/10] shadow-sm"><img src="${assets.bobaHero}" class="w-full h-full object-cover"></div>
                                <p class="text-base font-black text-gray-900">i-Tea</p>
                                <p class="text-sm font-semibold text-gray-500">4.8 • 0.3 mi • 10 min</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink-0 bg-white border-t border-gray-100 p-6 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <button onclick="navigateTo('restaurant-home')" class="w-full bg-[#d92323] text-white py-4 rounded-full font-black text-lg shadow-xl mb-4 active:scale-95 transition-all uppercase">START ORDER</button>
                        <div class="flex justify-around text-[10px] font-black uppercase">
                            <div class="text-red-600 flex flex-col items-center gap-1" onclick="navigateTo('home')"><i class="fa-solid fa-house text-xl"></i>HOME</div>
                            <div class="text-gray-400 flex flex-col items-center gap-1" onclick="navigateTo('restaurant-home')"><i class="fa-solid fa-utensils text-xl"></i>ORDER</div>
                            <div class="text-gray-400 flex flex-col items-center gap-1"><i class="fa-solid fa-qrcode text-xl"></i>SCAN</div>
                            <div class="text-gray-400 flex flex-col items-center gap-1" onclick="navigateTo('account')"><i class="fa-solid fa-user text-xl"></i>ACCOUNT</div>
                        </div>
                    </div>
                </div>`;
        }
    },
    'sign-in': () => `
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${assets.featured}')"></div>
            <div class="modal-overlay" onclick="navigateTo('home')">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="absolute top-6 left-6 text-gray-500" onclick="navigateTo('home')"><i class="fa-solid fa-xmark text-2xl"></i></button>
                    <div class="text-center mb-6 mt-6 uppercase"><span class="text-2xl font-black text-red-600 tracking-tighter uppercase font-black">FAREBITES</span></div>
                    <h2 class="text-3xl font-black text-center mb-8 uppercase tracking-tight">Sign in / Sign up</h2>
                    <div class="space-y-4">
                        <div class="flex gap-2">
                            <div class="bg-gray-100 px-4 py-4 rounded-xl font-bold text-gray-700 min-w-[100px] flex items-center justify-center">+1 <i class="fa-solid fa-chevron-down text-[10px] ml-2"></i></div>
                            <input type="tel" id="auth-mobile-input" placeholder="Mobile Number" class="flex-1 min-w-0 bg-gray-100 px-4 py-4 rounded-xl border-2 border-transparent focus:border-black outline-none font-bold text-lg">
                        </div>
                        <div id="auth-error" class="text-xs font-bold text-red-500 px-2 h-4 transition-all opacity-0">Invalid passcode. Please try again.</div>
                        <button onclick="checkAuthPasscode()" class="w-full bg-red-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(220,38,38,0.5)] active:scale-95 transition-all uppercase font-black">Continue</button>
                        
                        <div class="flex items-center gap-4 py-2">
                            <div class="flex-1 h-px bg-gray-200"></div>
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">or</span>
                            <div class="flex-1 h-px bg-gray-200"></div>
                        </div>

                        <div class="space-y-3">
                            <button class="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
                                <i class="fa-brands fa-google text-lg text-red-500"></i> Continue with Google
                            </button>
                            <button class="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
                                <i class="fa-brands fa-apple text-lg text-black"></i> Continue with Apple
                            </button>
                            <button class="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
                                <i class="fa-brands fa-facebook text-lg text-[#1877F2]"></i> Continue with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>`,
    'restaurant-landing': () => `
            <div class="flex flex-col h-full relative overflow-hidden bg-white">
                <div class="absolute inset-0 z-0">
                    <img src="${assets.bobaHero}" class="w-full h-full object-cover">
                    <!-- White overlay/gradient for i-Tea branding -->
                    <div class="absolute inset-0 bg-white/60"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-white/60"></div>
                </div>
                
                <div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center mt-12">
                    <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 border-4 border-violet-100 overflow-hidden text-white">
                        <img src="images/itea_logo.png" class="w-full h-full object-cover">
                    </div>
                    <h1 class="text-6xl font-black text-violet-600 tracking-tighter drop-shadow-sm">i-Tea</h1>
                    <p class="text-gray-800 font-bold tracking-widest uppercase mt-4 text-xs">Premium Boba Tea & more.</p>
                </div>

                <div class="relative z-10 px-6 pb-12 w-full shrink-0">
                    <button onclick="navigateTo('restaurant-sign-in')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-transform uppercase tracking-wider">Log In</button>
                </div>
            </div>`,
    'restaurant-sign-in': () => `
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${assets.bobaHero}')"></div>
            <div class="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div class="modal-overlay" onclick="navigateTo('restaurant-landing')">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="absolute top-6 left-6 text-gray-500" onclick="navigateTo('restaurant-landing')"><i class="fa-solid fa-xmark text-2xl"></i></button>
                    <div class="text-center mb-6 mt-6">
                        <div class="flex flex-col items-center justify-center gap-4">
                             <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-violet-100 overflow-hidden">
                                 <img src="images/itea_logo.png" class="w-full h-full object-cover">
                             </div>
                        </div>
                    </div>
                    <h2 class="text-3xl font-black text-center mb-8 uppercase tracking-tight text-gray-900">Sign in / Sign up</h2>
                    <div class="space-y-4">
                        <div class="flex gap-2">
                            <div class="bg-violet-50 px-4 py-4 rounded-xl font-bold text-violet-600 min-w-[100px] flex items-center justify-center border border-violet-100">+1 <i class="fa-solid fa-chevron-down text-[10px] ml-2"></i></div>
                            <input type="tel" id="auth-mobile-input" placeholder="Mobile Number" class="flex-1 min-w-0 bg-gray-50 px-4 py-4 rounded-xl border-2 border-transparent focus:border-violet-600 outline-none font-bold text-lg text-gray-900">
                        </div>
                        <div id="auth-error" class="text-xs font-bold text-red-500 px-2 h-4 transition-all opacity-0">Invalid passcode. Please try again.</div>
                        <button onclick="checkAuthPasscode()" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase font-black">Continue</button>
                        
                        <div class="flex items-center gap-4 py-2">
                            <div class="flex-1 h-px bg-gray-100"></div>
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">or</span>
                            <div class="flex-1 h-px bg-gray-100"></div>
                        </div>

                        <div class="space-y-3">
                            <button class="w-full bg-white border-2 border-violet-50 text-gray-700 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-violet-50/30 active:scale-95 transition-all shadow-sm">
                                <i class="fa-brands fa-google text-lg text-red-500"></i> Continue with Google
                            </button>
                            <button class="w-full bg-white border-2 border-violet-50 text-gray-700 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-violet-50/30 active:scale-95 transition-all shadow-sm">
                                <i class="fa-brands fa-apple text-lg text-black"></i> Continue with Apple
                            </button>
                            <button class="w-full bg-white border-2 border-violet-50 text-gray-700 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-violet-50/30 active:scale-95 transition-all shadow-sm">
                                <i class="fa-brands fa-facebook text-lg text-[#1877F2]"></i> Continue with Facebook
                            </button>
                        </div>
                    </div>
                    <div class="mt-8 text-center px-4">
                        <p class="text-[10px] text-gray-400 font-bold tracking-widest">By continuing, you agree to i-Tea Terms & Privacy Policy</p>
                    </div>
                </div>
            </div>`,
    'restaurant-home': () => {
        const cardWidth = currentViewport === 'desktop' ? 'w-[24%] min-w-[240px] max-w-[300px]' : (currentViewport === 'tablet' ? 'w-[45%]' : 'w-full');
        const isDesktop = currentViewport === 'desktop';
        return `
            <div class="flex flex-col h-full relative overflow-hidden">
                <!-- Full Viewport Background Image -->
                <div class="absolute inset-0 z-0">
                    <img src="https://order-iteausa.com/imagesmenu/N9-Fresh-Strawberry-Mango-Fruit-Tea.jpg" class="w-full h-full object-cover">
                    <!-- Subtle gradient to ensure text readability -->
                    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90"></div>
                </div>

                <header class="bg-transparent px-6 pt-6 pb-2 flex justify-between items-center z-50 shrink-0 relative">
                    <button onclick="navigateTo('account')" class="w-10 h-10 flex items-center justify-center text-[#1A1A1A]"><i class="fa-regular fa-user text-2xl"></i></button>
                    <div class="flex flex-col items-center cursor-pointer" onclick="navigateTo('location-pick')">
                        <div class="flex items-center gap-1"><span class="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">PICKUP</span><i class="fa-solid fa-chevron-down text-[9px] text-[#1A1A1A]"></i></div>
                        <span class="text-[13px] font-medium text-[#1A1A1A] mt-0.5">Home</span>
                    </div>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        <span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span>
                    </button>
                </header>
                
                <div class="flex-1 overflow-y-auto relative scrollbar-hide z-10 flex flex-col">
                    <!-- Titles & CTA -->
                    <div class="text-center pt-2 relative z-10 shrink-0">
                        <div class="text-violet-600 text-[11px] font-black tracking-[0.2em] uppercase mb-1">Open 24 Hours</div>
                        <h1 class="text-5xl font-black text-violet-600 tracking-tighter leading-[0.9] font-sans scale-y-110 mt-2 ${isDesktop ? 'mb-4' : 'mb-2'} drop-shadow-md">i-Tea</h1>
                        ${isDesktop ? `<button onclick="navigateTo('location-pick')" class="bg-violet-600 text-white px-8 py-3.5 rounded-full font-black text-sm shadow-lg active:scale-95 transition-transform uppercase tracking-wider inline-block">Order Now</button>` : ''}
                    </div>
                    
                    <!-- Spacer so background image can be seen before the carousel -->
                    <div class="w-full flex-1 min-h-[140px]"></div>
                    
                    <!-- Carousel Container -->
                    <div class="relative z-20 w-full mt-auto shrink-0 pb-2 px-6">
                        <div id="home-carousel" class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                            <!-- Card 1 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba1}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">New Item</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M7 Crème Brûlée Boba Milk Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 2 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba2}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Popular</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P4 Brown Sugar Boba Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 3 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba3}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Specialty</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M8 Taro Boba Purée Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 4 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba4}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Fruit Tea</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P1 Super Fruit Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.95</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Pagination Dots -->
                        <div class="flex justify-center items-center gap-2 mt-2 mb-4" style="padding-right: 0;">
                            <div id="carousel-dot-0" class="w-2 h-2 rounded-full bg-violet-600 transition-colors duration-300"></div>
                            <div id="carousel-dot-1" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                            <div id="carousel-dot-2" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                            <div id="carousel-dot-3" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>

                ${!isDesktop ? `
                <!-- Order Now Button (Fixed above bottom nav on mobile/tablet) -->
                <div class="px-6 pb-4 pt-2 relative z-20 shrink-0">
                    <button onclick="navigateTo('location-pick')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-transform uppercase tracking-wider">Order Now</button>
                </div>` : ''}

                <!-- Bottom Navigation -->
                <div class="flex-shrink-0 bg-white/90 backdrop-blur-md px-6 py-5 flex justify-between items-center z-50 border-t border-gray-200 relative">
                    <button class="text-violet-600 font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('restaurant-home')">HOME</button>
                    <button class="text-[#1A1A1A] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('menu')">MENU</button>
                    <button class="text-[#1A1A1A] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('cart')">REORDER</button>
                    <button class="text-[#1A1A1A] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('account')">REWARDS</button>
                    <button class="text-[#1A1A1A] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('qr-code-guide')">SCAN</button>
                </div>
            </div>`;
    },
    'restaurant-home-logo': () => {
        const cardWidth = currentViewport === 'desktop' ? 'w-[24%] min-w-[240px] max-w-[300px]' : (currentViewport === 'tablet' ? 'w-[45%]' : 'w-full');
        const isDesktop = currentViewport === 'desktop';
        return `
            <div class="flex flex-col h-full relative overflow-hidden">
                <!-- Full Viewport Background Image -->
                <div class="absolute inset-0 z-0">
                    <img src="https://order-iteausa.com/imagesmenu/N9-Fresh-Strawberry-Mango-Fruit-Tea.jpg" class="w-full h-full object-cover">
                    <!-- Subtle gradient to ensure text readability -->
                    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90"></div>
                </div>

                <header class="bg-transparent px-6 pt-6 pb-2 flex justify-between items-center z-50 shrink-0 relative">
                    <button onclick="navigateTo('account')" class="w-10 h-10 flex items-center justify-center text-[#1A1A1A]"><i class="fa-regular fa-user text-2xl"></i></button>
                    <div class="flex flex-col items-center cursor-pointer" onclick="navigateTo('location-pick')">
                        <div class="flex items-center gap-1"><span class="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">DELIVERY</span><i class="fa-solid fa-chevron-down text-[9px] text-[#1A1A1A]"></i></div>
                        <span class="text-[13px] font-medium text-[#1A1A1A] mt-0.5">Home</span>
                    </div>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        <span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span>
                    </button>
                </header>
                
                <div class="flex-1 overflow-y-auto relative scrollbar-hide z-10 flex flex-col">
                    <!-- Logo + CTA -->
                    <div class="text-center pt-4 relative z-10 shrink-0 flex flex-col items-center">
                        <div class="text-violet-600 text-[11px] font-black tracking-[0.2em] uppercase mb-2">Open 24 Hours</div>
                        <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-violet-600 shadow-[0_8px_32px_-4px_rgba(124,58,237,0.55)] ${isDesktop ? 'mb-4' : 'mb-2'}">
                            <img src="images/itea_logo.png" alt="i-Tea" class="w-full h-full object-cover">
                        </div>
                        ${isDesktop ? `<button onclick="navigateTo('location-pick')" class="bg-violet-600 text-white px-8 py-3.5 rounded-full font-black text-sm shadow-lg active:scale-95 transition-transform uppercase tracking-wider inline-block">Order Now</button>` : ''}
                    </div>
                    
                    <!-- Spacer so background image can be seen before the carousel -->
                    <div class="w-full flex-1 min-h-[140px]"></div>
                    
                    <!-- Carousel Container -->
                    <div class="relative z-20 w-full mt-auto shrink-0 pb-2 px-6">
                        <div id="home-carousel" class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                            <!-- Card 1 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba1}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">New Item</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M7 Crème Brûlée Boba Milk Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 2 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba2}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Popular</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P4 Brown Sugar Boba Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 3 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba3}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Specialty</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M8 Taro Boba Purée Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 4 -->
                            <div class="snap-center shrink-0 w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba4}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Fruit Tea</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P1 Super Fruit Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.95</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Pagination Dots -->
                        <div class="flex justify-center items-center gap-2 mt-2 mb-4" style="padding-right: 0;">
                            <div id="carousel-dot-0" class="w-2 h-2 rounded-full bg-violet-600 transition-colors duration-300"></div>
                            <div id="carousel-dot-1" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                            <div id="carousel-dot-2" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                            <div id="carousel-dot-3" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>

                ${!isDesktop ? `
                <!-- Order Now Button (Fixed above bottom nav on mobile/tablet) -->
                <div class="px-6 pb-4 pt-2 relative z-20 shrink-0">
                    <button onclick="navigateTo('location-pick')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-transform uppercase tracking-wider">Order Now</button>
                </div>` : ''}

                <!-- Bottom Navigation -->
                <div class="flex-shrink-0 bg-white/90 backdrop-blur-md px-6 py-5 flex justify-between items-center z-50 border-t border-gray-200 relative">
                    <button class="text-violet-600 font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('restaurant-home-logo')">HOME</button>
                    <button class="text-[#EAEAEA] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('menu')">MENU</button>
                    <button class="text-[#EAEAEA] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('cart')">REORDER</button>
                    <button class="text-[#EAEAEA] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('account')">REWARDS</button>
                    <button class="text-[#EAEAEA] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('qr-code-guide')">SCAN</button>
                </div>
            </div>`;
    },
    'location-pick': () => {
        const getSet = () => {
            if (mockupState.locationFilter === 'Near Me' || mockupState.locationFilter === 'Nearby') return LOCATIONS;
            if (mockupState.locationFilter === 'Favorites') return LOCATIONS.filter(loc => loc.fav);
            if (mockupState.locationFilter === 'Previous') return [LOCATIONS[13], LOCATIONS[0], LOCATIONS[9]]; // TEARAY, TEMPE, OAKLAND
            
            return LOCATIONS;
        };

        if (currentViewport === 'desktop') {
            return `
                <div class="flex flex-row h-full bg-white">
                    <div class="w-[450px] flex flex-col shrink-0 border-r border-gray-200 z-10 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.05)]">
                        <header class="p-4 border-b border-gray-100 flex items-center bg-white">
                            <button onclick="navigateTo('restaurant-home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                            <h1 class="text-xl font-black tracking-tight uppercase text-gray-900">Choose Location</h1>
                        </header>
                        <div class="p-5 border-b border-gray-100 bg-white">
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-5 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                                <button onclick="updateMockupState('locationFilter', 'Near Me')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Near Me' || mockupState.locationFilter === 'Nearby' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500 hover:bg-gray-50'}">Near Me</button>
                                <button onclick="updateMockupState('locationFilter', 'Previous')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Previous' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500 hover:bg-gray-50'}">Previous</button>
                                <button onclick="updateMockupState('locationFilter', 'Favorites')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Favorites' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500 hover:bg-gray-50'}">Favorites</button>
                            </div>
                        </div>
                        <!-- Default Location Quick-Select -->
                        <div class="px-5 py-3 border-b border-violet-100 bg-violet-50/60 flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-house text-white text-[10px]"></i>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-[9px] font-black text-violet-500 uppercase tracking-widest">Previous Order</p>
                                    <p class="text-xs font-black text-gray-800 truncate">i-Tea – Tempe &nbsp;·&nbsp; 0.3 mi</p>
                                </div>
                            </div>
                            <button onclick="updateMockupState('selectedLocation', 'TEMPE'); updateMockupState('orderTime', 'ASAP'); navigateTo('order-details')" class="shrink-0 px-4 py-1.5 bg-violet-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-violet-700 transition-colors active:scale-95">Order Here</button>
                        </div>
                        <div class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/30">
                            ${getSet().map((s, idx) => `
                                <div class="p-5 border-2 ${s.name === (mockupState.selectedLocation || 'i-Tea - TEMPE') ? 'border-violet-600 bg-violet-50/10 shadow-md' : (s.fav ? 'border-violet-200 bg-violet-50/40' : 'border-gray-200 bg-white')} rounded-2xl flex justify-between items-start cursor-pointer transition hover:border-violet-400 hover:shadow-md" onclick="updateMockupState('selectedLocation', '${s.name}'); updateMockupState('orderTime', 'ASAP'); navigateTo('order-details')">
                                    <div>
                                        ${idx === 0 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Home</span>' : ''}
                                        ${idx === 1 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Office</span>' : ''}
                                        <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">${s.name} ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-xs"></i>' : ''}</h3>
                                        <p class="text-[10px] font-bold text-gray-400 mt-1.5 uppercase tracking-widest"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-4">
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500"><i class="fa-solid fa-shop"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500"><i class="fa-solid fa-car"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500"><i class="fa-solid fa-square-parking"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-4">
                                        <div class="text-[11px] font-black text-gray-400 uppercase font-mono">${s.dist}</div>
                                        <span class="bg-violet-600 text-white text-[9px] px-3.5 py-1.5 rounded-full uppercase font-black tracking-widest shadow-sm hover:bg-violet-700 transition" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`).join('')}
                        </div>
                    </div>
                    <div class="flex-1 relative bg-[#e5e3df]">
                        <iframe src="${assets.googleMapsEmbed}" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>`;
        } else {
            return `
                <div class="flex flex-col h-full bg-[#f4f4f2] relative">
                    <header class="p-4 flex items-center bg-white z-20 shrink-0 shadow-sm relative">
                        <button onclick="navigateTo('restaurant-home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                        <h1 class="text-xl font-black tracking-tight uppercase text-gray-900">Choose Location</h1>
                    </header>
                    
                    <!-- Previous Order Location Quick-Select -->
                    <div class="px-4 py-2.5 bg-violet-50/80 border-b border-violet-100 flex items-center justify-between gap-3 shrink-0 z-10">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <div class="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-house text-white text-[10px]"></i>
                            </div>
                            <div class="min-w-0">
                                <p class="text-[9px] font-black text-violet-500 uppercase tracking-widest">Previous Order</p>
                                <p class="text-xs font-black text-gray-800 truncate">i-Tea – Tempe &nbsp;·&nbsp; 0.3 mi</p>
                            </div>
                        </div>
                        <button onclick="updateMockupState('selectedLocation', 'TEMPE'); updateMockupState('orderTime', 'ASAP'); navigateTo('order-details')" class="shrink-0 px-4 py-1.5 bg-violet-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-violet-700 transition-colors active:scale-95">Order Here</button>
                    </div>

                    <div class="w-full h-[35%] min-h-[220px] shrink-0 relative z-0">
                        <iframe src="${assets.googleMapsEmbed}" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="flex-1 overflow-y-auto bg-white z-10 -mt-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.12)] flex flex-col relative pb-6">
                        <div class="p-5 border-b border-gray-100 shrink-0 sticky top-0 bg-white/95 backdrop-blur-md z-20 rounded-t-3xl">
                            <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"></div>
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-4 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                                <button onclick="updateMockupState('locationFilter', 'Near Me')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Near Me' || mockupState.locationFilter === 'Nearby' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500'}">Near Me</button>
                                <button onclick="updateMockupState('locationFilter', 'Previous')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Previous' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500'}">Previous</button>
                                <button onclick="updateMockupState('locationFilter', 'Favorites')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Favorites' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500'}">Favorites</button>
                            </div>
                        </div>

                        <div class="p-4 space-y-3 flex-1 bg-gray-50/30">
                            ${getSet().map((s, idx) => `
                                <div class="p-5 border-2 ${s.name === (mockupState.selectedLocation || 'i-Tea - TEMPE') ? 'border-violet-600 bg-violet-50/10 shadow-md' : (s.fav ? 'border-violet-200 bg-violet-50/40' : 'border-gray-200 bg-white')} rounded-2xl flex justify-between items-start cursor-pointer active:scale-[0.98] transition-all hover:shadow-md" onclick="updateMockupState('selectedLocation', '${s.name}'); updateMockupState('selectedAddress', '${s.address}'); updateMockupState('selectedDistance', '${s.dist}'); updateMockupState('orderTime', 'ASAP'); navigateTo('order-details')">
                                    <div>
                                        ${idx === 0 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Home</span>' : ''}
                                        ${idx === 1 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Office</span>' : ''}
                                        <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">${s.name} ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-xs"></i>' : ''}</h3>
                                        <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-3">
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500"><i class="fa-solid fa-shop text-[13px]"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500"><i class="fa-solid fa-car text-[13px]"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500"><i class="fa-solid fa-square-parking text-[13px]"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-4">
                                        <div class="text-[11px] font-black text-gray-400 uppercase font-mono">${s.dist}</div>
                                        <span class="bg-violet-600 text-white text-[9px] px-3.5 py-1.5 rounded-full uppercase font-black tracking-widest shadow-sm" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`).join('')}
                        </div>
                    </div>
                </div>`;
        }
    },
    'location-favorites': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0 border-b border-gray-100">
                    <button onclick="navigateTo('location-pick')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center">Favorite Locations</h1>
                    <div class="w-10"></div>
                </header>
                <div class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    <!-- Location 1 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight">McDowell Rd</h3>
                                <p class="text-xs text-gray-500 font-medium">8738 S. Emerald Dr</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-gray-100 text-gray-400 bg-white">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label (e.g. Gym)" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Gate codes, floor number, drop-off spot..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>

                    <!-- Location 2 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight">Camelback & Litchfield</h3>
                                <p class="text-xs text-gray-500 font-medium">13802 W Camelback Rd</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-gray-100 text-gray-400 bg-white">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Delivery instructions for this location..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>
                </div>
                <div class="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                    <button onclick="navigateTo('location-pick')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black uppercase tracking-wider shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-[0.98] transition-all">Save Changes</button>
                </div>
            </div>
        `,
    'order-details': () => {
        const btn = (icon, label) => {
            const isActive = mockupState.fulfillmentMode === label;
            const clickHandler = label === 'Dine In' ? `navigateTo('qr-code-guide')` : `updateMockupState('fulfillmentMode', '${label}')`;
            return `
                    <button onclick="${clickHandler}" class="flex flex-col items-center justify-center gap-1 py-3 border-2 rounded-xl font-bold transition-all shadow-sm ${isActive ? 'bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]' : 'bg-white text-gray-800 border-gray-100'}">
                        <i class="fa-solid ${icon} text-xl ${isActive ? 'text-white' : 'text-violet-600'}"></i>
                        <span class="text-[11px] font-black uppercase">${label}</span>
                    </button>`;
        };

        const monthOffset = mockupState.monthOffset || 0;
        const months = [
            { name: 'March 2026', days: 31, startDay: 0 },
            { name: 'April 2026', days: 30, startDay: 3 },
            { name: 'May 2026', days: 31, startDay: 5 }
        ];
        const currentMonth = months[monthOffset];

        let calendarCells = '';
        for (let i = 0; i < currentMonth.startDay; i++) {
            calendarCells += `<div></div>`;
        }
        for (let i = 1; i <= currentMonth.days; i++) {
            let isPast = monthOffset === 0 && i < 8; // Assuming the 8th is "Today" based on previous mockup
            if (isPast) {
                calendarCells += `<div class="py-2 text-gray-300 font-bold text-sm text-center">${i}</div>`;
            } else {
                const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const dayName = dayNames[(currentMonth.startDay + i - 1) % 7];
                const monthNameShort = currentMonth.name.split(' ')[0].substring(0, 3);
                let label = (i === 8 && monthOffset === 0) ? 'Today' : ((i === 9 && monthOffset === 0) ? 'Tomorrow' : `${dayName}, ${monthNameShort} ${i}`);
                let isSelected = mockupState.selectedDay === label;
                calendarCells += `<button onclick="updateMockupState('selectedDay', '${label}'); mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="py-2 rounded-full font-bold text-sm text-center ${isSelected ? 'bg-violet-600 text-white shadow-md flex items-center justify-center shrink-0 w-8 h-8 mx-auto' : 'text-gray-800 hover:bg-violet-100 transition-colors flex items-center justify-center shrink-0 w-8 h-8 mx-auto'}">${i}</button>`;
            }
        }

        const dateModalClass = mockupState.modalOpen === 'date' ? 'flex' : 'hidden';
        const timeModalClass = mockupState.modalOpen === 'time' ? 'flex' : 'hidden';
        const warningModalClass = mockupState.modalOpen === 'warning' ? 'flex' : 'hidden';

        const times15 = ['11:30 AM', '11:45 AM', '12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM', '1:00 PM', '1:15 PM', '1:30 PM', '1:45 PM', '2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM', '3:00 PM', '3:15 PM', '3:30 PM', '3:45 PM', '4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM', '5:00 PM', '5:15 PM', '5:30 PM', '5:45 PM', '6:00 PM', '6:15 PM', '6:30 PM', '6:45 PM', '7:00 PM', '7:15 PM', '7:30 PM', '7:45 PM', '8:00 PM', '8:15 PM', '8:30 PM', '8:45 PM', '9:00 PM'];
        
        // Proximity to close check
        const isNearClose = mockupState.selectedTimeSlot.includes('8:') || mockupState.selectedTimeSlot.includes('9:');

        const locationTitle = mockupState.selectedLocation || "i-Tea";

        return `
                <div class="flex flex-col h-full bg-[#FAF9F6] relative overflow-hidden">
                    <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black"><button onclick="navigateTo('location-pick')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button><span class="text-lg font-black text-violet-600 flex-1 text-center">Order Details</span><button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg><span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span></button></header>
                    <div class="flex-1 overflow-y-auto px-6 pt-5 pb-32">
                        <!-- Location Info Card -->
                        <div class="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 mb-5 cursor-pointer active:scale-[0.98] transition-all hover:bg-gray-50" onclick="navigateTo('location-pick')">
                            <div class="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-location-dot text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-black text-[#33424A] uppercase tracking-tight text-sm leading-tight">${locationTitle}</h3>
                                <p class="text-[10px] font-bold text-violet-600 mt-1 uppercase tracking-widest">Change Location</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <h1 class="text-2xl font-black text-gray-900 leading-tight mb-4 tracking-tighter uppercase font-black">Order Details</h1>
                        <div class="grid grid-cols-2 gap-3">
                            ${btn('fa-shop', 'In-store')}
                            ${btn('fa-car', 'Drive Through')}
                            ${btn('fa-square-parking', 'Curbside')}
                            ${btn('fa-mobile-screen-button', 'Dine In')}
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-100">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 font-black">Ordering For</p>
                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="updateMockupState('orderTime', 'ASAP')" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === 'ASAP' ? 'bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]' : 'bg-white text-gray-400 border-gray-100'} font-black uppercase"><i class="fa-solid fa-bolt text-lg mb-0.5"></i>ASAP</button>
                                <button onclick="updateMockupState('orderTime', 'Later'); navigateTo(currentPage);" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === 'Later' ? 'bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]' : 'bg-white text-gray-400 border-gray-100'} font-black uppercase"><i class="fa-solid fa-calendar-day text-lg mb-0.5"></i>Later</button>
                            </div>
                            
                            ${mockupState.orderTime === 'Later' ? `
                            <div class="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all animate-[fadeIn_0.3s_ease-out]">
                                <div class="flex justify-between items-center mb-3">
                                    <p class="text-[10px] font-black text-violet-600 uppercase tracking-widest">Scheduled Pickup</p>
                                </div>
                                <div class="flex gap-3">
                                    <button onclick="mockupState.modalOpen = 'date'; navigateTo(currentPage);" class="flex-1 py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-full font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full"><i class="fa-regular fa-calendar text-violet-600 shrink-0"></i> <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.selectedDay}</span></span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-full shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                    <button onclick="mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="flex-1 py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-full font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full"><i class="fa-regular fa-clock text-violet-600 shrink-0"></i> <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.selectedTimeSlot}</span></span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-full shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                </div>
                            </div>
                            ` : `
                            <div class="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all animate-[fadeIn_0.3s_ease-out]">
                                <div class="flex justify-between items-center mb-1">
                                    <p class="text-[10px] font-black text-violet-600 uppercase tracking-widest">Estimated Pickup Time</p>
                                </div>
                                <div class="flex items-center gap-2 mt-1">
                                    <i class="fa-regular fa-clock text-violet-600 border border-violet-100 rounded p-1"></i>
                                    <p class="font-black text-gray-800 text-sm tracking-tight">Today at ${times15[0]}</p>
                                </div>
                            </div>
                            `}
                        </div>
                    </div>
                    <div class="p-6 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0 z-50 shadow-lg"><button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-widest font-black">Start Order</button></div>

                    <!-- Date Modal -->
                    <div id="date-modal" class="absolute inset-0 bg-black/60 z-[100] ${dateModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                        <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[85vh]">
                            <div class="flex justify-between items-center mb-5 shrink-0">
                                <h3 class="font-black text-xl uppercase text-gray-900">Choose Day</h3>
                                <button onclick="mockupState.modalOpen = null; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <!-- Stylized Calendar -->
                            <div class="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm overflow-y-auto scrollbar-hide">
                                <div class="flex justify-between items-center mb-3 px-1">
                                    <button onclick="mockupState.monthOffset = Math.max(0, (mockupState.monthOffset||0) - 1); navigateTo(currentPage);" class="${monthOffset === 0 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:text-violet-600 transition-colors'} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-left text-sm"></i></button>
                                    <span class="font-black text-sm uppercase tracking-widest text-gray-800">${currentMonth.name}</span>
                                    <button onclick="mockupState.monthOffset = Math.min(2, (mockupState.monthOffset||0) + 1); navigateTo(currentPage);" class="${monthOffset === 2 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:text-violet-600 transition-colors'} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-right text-sm"></i></button>
                                </div>
                                <div class="grid grid-cols-7 gap-1 text-center mb-2">
                                    ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => `<div class="text-[10px] font-black text-gray-400">${d}</div>`).join('')}
                                </div>
                                <div class="grid grid-cols-7 gap-1 text-center">
                                    ${calendarCells}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Time Modal -->
                    <div id="time-modal" class="absolute inset-0 bg-black/60 z-[100] ${timeModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                        <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[90vh]">
                            <div class="flex justify-between items-center mb-5 shrink-0">
                                <h3 class="font-black text-xl uppercase text-gray-900">Choose Time</h3>
                                <button onclick="mockupState.modalOpen = null; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            
                            <div class="flex-1 flex flex-col min-h-0 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mb-5">
                                <div class="overflow-y-auto scrollbar-hide h-[230px] pr-1">
                                    <div class="grid grid-cols-3 gap-2">
                                        ${times15.map((time, idx) => {
                                            const isThisTimeNearClose = time.includes('8:') || time.includes('9:');
                                            const clickAction = isThisTimeNearClose && !mockupState.acknowledgedClose 
                                                ? `updateMockupState('selectedTimeSlot', '${time}'); mockupState.modalOpen = 'warning'; navigateTo(currentPage);` 
                                                : `updateMockupState('selectedTimeSlot', '${time}'); navigateTo(currentPage);`;
                                            
                                            return `
                                            <button id="time-slot-${idx}" onclick="${clickAction}" class="py-3 rounded-full border-2 ${mockupState.selectedTimeSlot === time ? 'border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200' : 'border-gray-100 text-gray-700 hover:border-violet-300 bg-white'} font-black text-[11px] transition-all tracking-tight whitespace-nowrap">${time}</button>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>

                                <div class="mt-4 pt-4 border-t border-gray-100 shrink-0">
                                    <label class="block text-[10px] font-black text-violet-600 uppercase tracking-widest mb-3">Or enter a custom pickup time</label>
                                    <div class="flex items-center gap-3">
                                        <div class="relative flex-1">
                                            <i class="fa-regular fa-clock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="time" class="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-600 focus:ring-0 font-bold text-gray-800 outline-none transition-colors" onchange="let val = this.value; let parts = val.split(':'); let h = parseInt(parts[0]); let ampm = h >= 12 ? 'PM' : 'AM'; h = h % 12; h = h || 12; let formatted = h + ':' + parts[1] + ' ' + ampm; updateMockupState('selectedTimeSlot', formatted); if(h >= 8 && ampm === 'PM') { mockupState.modalOpen = 'warning'; mockupState.acknowledgedClose = false; } navigateTo(currentPage);" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            <div class="shrink-0 pb-2">
                                <button onclick="
                                    if(${isNearClose} && !mockupState.acknowledgedClose) {
                                        mockupState.modalOpen = 'warning';
                                        navigateTo(currentPage);
                                    } else {
                                        mockupState.modalOpen = null;
                                        navigateTo('menu');
                                    }
                                " class="w-full py-4 rounded-full bg-violet-600 text-white font-black uppercase text-sm tracking-widest shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] transition-all active:scale-95">Confirm Time</button>
                            </div>
                        </div>
                    </div>

                    <!-- Warning Modal -->
                    <div id="warning-modal" class="absolute inset-0 bg-black/60 z-[110] ${warningModalClass} flex-col justify-center items-center backdrop-blur-sm p-4">
                        <div class="bg-red-600 w-full sm:w-[380px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <i class="fa-solid fa-clock text-red-600 text-3xl"></i>
                            </div>
                            
                            <h3 class="font-black text-2xl uppercase text-white mb-2 leading-tight">Store Closes<br>at 9:00 PM</h3>
                            
                            <p class="text-red-100 font-bold mb-8 px-2">
                                ${isNearClose ? "You have selected a pickup time within an hour of close. Please ensure you pick up your order before our doors close." : "Please ensure you pick up your order before our doors close."}
                            </p>
                            
                            <button onclick="updateMockupState('acknowledgedClose', true); mockupState.modalOpen = null; navigateTo('menu');" class="w-full py-4 rounded-full bg-white text-red-600 font-black uppercase text-sm tracking-widest shadow-xl hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-check text-lg"></i> I Understand
                            </button>
                            
                            <button onclick="mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="mt-4 text-red-200 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Go Back</button>
                        </div>
                    </div>
                        </div>
                    </div>

                </div>`;
    },
    'qr-code-guide': () => `
            <div class="flex flex-col h-full bg-white relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 font-black"><button onclick="navigateTo('order-details')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button><span class="text-lg font-black text-violet-600 flex-1 text-center">i-Tea</span><div class="w-6"></div></header>
                <div class="flex-1 flex flex-col items-center justify-center px-6 text-center">
                    <div class="w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl mb-12">
                        <img src="images/qr-scan-table.jpg" class="w-full h-full object-cover">
                    </div>
                    <h2 class="text-2xl font-black mb-6 uppercase tracking-tight font-black text-gray-900 leading-tight">Ready to Dine In?</h2>
                    <div class="space-y-4 text-left uppercase font-black text-gray-600">
                        <p class="text-sm">1. Find the QR code on your table.</p>
                        <p class="text-sm">2. Tap the button below to open camera.</p>
                        <p class="text-sm">3. Scan to start your order.</p>
                    </div>
                </div>
                <div class="p-6 border-t sticky bottom-0 bg-white"><button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] flex items-center justify-center gap-3 active:scale-95 transition-all uppercase shadow-violet-100 font-black"><i class="fa-solid fa-camera"></i><span>SCAN TABLE QR</span></button></div>
            </div>`,
    'menu': () => {
        const isDesktop = currentViewport === 'desktop';
        const categoryModalClass = mockupState.modalOpen === 'categories' ? 'flex' : 'hidden';

        const categories = [
            { id: 'most-ordered', name: 'MOST ORDERED', img: assets.bobaHero },
            { id: 'new-items', name: 'NEW ITEMS', img: 'https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg' },
            { id: 'teaspresso', name: 'TEASPRESSO SERIES', img: assets.boba1 },
            { id: 'milk-tea', name: 'MILK TEA SPECIALTY', img: assets.boba2 },
            { id: 'fruit-tea', name: 'I-TEA FRUIT TEA', img: 'https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg' },
            { id: 'kreama', name: 'SEA SALT KREAMA', img: 'https://olodev.azurewebsites.net/imagesmenu/P5-Sun-Moon-Lake-Cheesma.jpg' },
            { id: 'frosty', name: 'SUMMER FROSTY', img: 'https://olodev.azurewebsites.net/imagesmenu/P3-Super-Grapefruit.jpg' },
            { id: 'iced-milk', name: 'SIGNATURE ICED MILK', img: assets.boba2 },
            { id: 'dessert', name: 'DESSERT DRINKS', img: 'https://olodev.azurewebsites.net/imagesmenu/M9_3G-Fresh-Taro-Boba-Latte.jpg' },
            { id: 'hot-drink', name: 'HOT DRINK', img: 'https://olodev.azurewebsites.net/imagesmenu/M8_Fresh-Taro-Puree-Boba-Latte.jpg' },
            { id: 'premium-tea', name: 'PREMIUM TEA TAIWAN', img: 'https://olodev.azurewebsites.net/imagesmenu/P8-Dragon-Fruity-Cheezma.jpg' },
            { id: 'cold-brew', name: 'COLD BREW', img: assets.icedMatcha },
            { id: 'snack', name: 'SNACK MENU', img: 'https://olodev.azurewebsites.net/imagesmenu/P7-Mango-Fruity-Tea-Cheezma.jpg' },
            { id: 'onigiri', name: 'OKINAWA ONIGIRI SERIES', img: 'https://olodev.azurewebsites.net/imagesmenu/P9-Strawberry-Fruity-Cheezma.jpg' },
            { id: 'food', name: 'FOOD MENU', img: assets.boba1 }
        ];

        return `
            <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Header Component -->
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('restaurant-home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Menu</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        <span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span>
                    </button>
                </header>

                <!-- Category Navigation -->
                <div class="bg-white border-b border-gray-100 sticky top-[72px] z-40">
                    <div class="flex gap-2 items-center overflow-x-auto scrollbar-hide px-4 py-4">
                        <div class="flex gap-4 items-center pr-4 border-r border-gray-100 shrink-0">
                            <button onclick="updateMockupState('modalOpen', 'categories'); navigateTo('menu')" class="text-gray-900 hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-list text-xl"></i>
                            </button>
                            <button onclick="updateMockupState('modalOpen', 'categories'); navigateTo('menu')" class="text-gray-900 hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-magnifying-glass text-xl"></i>
                            </button>
                        </div>
                        <div class="flex gap-2 overflow-x-auto scrollbar-hide pl-2">
                            ${[
                                'NEW ITEMS', 'TEASPRESSO SERIES', 'MILK TEA SPECIALTY', 'I-TEA FRUIT TEA',
                                'SEA SALT KREAMA', 'SUMMER FROSTY', 'SIGNATURE ICED MILK', 'DESSERT DRINKS',
                                'HOT DRINK', 'PREMIUM TEA TAIWAN', 'COLD BREW', 'SNACK MENU',
                                'OKINAWA ONIGIRI SERIES', 'FOOD MENU'
                            ].map(cat => `
                                <button onclick="document.getElementById('new-items-section').scrollIntoView({behavior: 'smooth'})" class="whitespace-nowrap px-6 py-2 rounded-full bg-violet-600 text-white shadow-sm font-black text-[10px] uppercase hover:bg-violet-700 transition-all shrink-0">
                                    ${cat}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="p-6 md:p-8 max-w-6xl mx-auto w-full">


                    <div class="flex flex-col ${isDesktop ? 'lg:flex-row gap-8' : 'gap-8'}">
                        <!-- MAIN CONTENT COLUMN -->
                        <div class="flex-1 space-y-8">
                            <!-- Hero Special Card -->
                            <div class="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[300px] flex flex-col justify-end p-8">
                                <img src="${assets.bobaHero}" class="absolute inset-0 w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                                
                                <div class="relative z-10 w-full max-w-md">
                                    <span class="bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm">Popular</span>
                                    <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">Brown Sugar<br>Boba Latte</h2>
                                    <p class="text-gray-200 font-medium mb-6 text-sm leading-relaxed max-w-xs">P4 • 356 to 478 calories. A perfectly sweet and creamy favorite.</p>
                                    <button onclick="selectItemAndNavigate(6)" class="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 inline-block tracking-wide">Add to Order</button>
                                </div>
                            </div>

                                ${!isDesktop ? `
                            <!-- Reorder Favorites (Mobile/Tablet) -->
                            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="font-black text-gray-900 tracking-tight text-lg">Reorder Favorites</h3>
                                    <button class="text-violet-600 font-bold text-xs hover:underline tracking-tight">See All</button>
                                </div>
                                <div class="space-y-5 mb-6">
                                    <!-- Fav 1 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba3}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P1 Super Fruit Tea</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: 3 days ago</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('customize')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <!-- Fav 2 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba4}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P2 Super Lime Sijichun</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: 1 week ago</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('customize')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <!-- Fav 3 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba1}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P3 Super Grapefruit</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: Yesterday</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('customize')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                </div>
                                <button onclick="navigateTo('manage-favorites')" class="w-full py-3 rounded-full bg-gray-50 text-gray-800 font-black text-sm hover:bg-gray-100 transition-colors">Manage Favorites</button>
                            </div>
                            ` : ''}

                            <!-- New Items Carousel -->
                            <div id="new-items-section">
                                <div class="flex justify-between items-end mb-4 px-1">
                                    <h3 class="text-2xl font-black text-gray-900 tracking-tight">New Items</h3>
                                    <button class="text-violet-600 font-bold text-sm hover:underline tracking-tight">See All</button>
                                </div>
                                
                                <div class="relative group">
                                    <!-- Horizontal Scroll Container -->
                                    <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-1 px-1">
                                        ${MENU_ITEMS.slice(0, 5).map((item, index) => `
                                            <div class="snap-center shrink-0 w-[280px] md:w-[320px] bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group/card cursor-pointer" onclick='selectItemAndNavigate(${index})'>
                                                <div class="w-full h-40 rounded-2xl overflow-hidden mb-4 relative">
                                                    <img src="${item.image}" class="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700">
                                                    <div class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-[10px] font-black uppercase text-violet-600 tracking-wider">New</div>
                                                </div>
                                                <div class="flex justify-between items-start mb-1">
                                                    <h4 class="font-black text-gray-900 text-base leading-tight w-2/3 tracking-tight group-hover/card:text-violet-600 transition-colors">${item.name}</h4>
                                                    <span class="font-black text-violet-600">$${item.price.toFixed(2)}</span>
                                                </div>
                                                <p class="text-gray-400 text-[11px] font-medium leading-relaxed truncate mb-4">${item.description}</p>
                                                <button onclick='selectItemAndNavigate(${index})' class="w-full py-2.5 rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black text-[11px] uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide shadow-sm">+ Add to Order</button>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>

                            <!-- Seasonal Specials Grid -->
                            <div>
                                <div class="flex justify-between items-end mb-4 px-1" id="explore-menu-section">
                                    <h3 class="text-2xl font-black text-gray-900 tracking-tight">Explore Our Menu</h3>
                                    <button class="text-violet-600 font-bold text-sm hover:underline tracking-tight">View All</button>
                                </div>
                                
                                <div class="grid grid-cols-1 gap-5">
                                    ${MENU_ITEMS.map((item, index) => `
                                        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                            <div class="w-full h-44 rounded-xl overflow-hidden mb-5 relative cursor-pointer" onclick='selectItemAndNavigate(${index})'>
                                                <img src="${item.image}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                                            </div>
                                            <div class="flex justify-between items-start mb-2 cursor-pointer" onclick='selectItemAndNavigate(${index})'>
                                                <h4 class="font-black text-gray-900 text-lg leading-tight w-2/3 tracking-tight">${item.name}</h4>
                                                <span class="font-black text-violet-600">$${item.price.toFixed(2)}</span>
                                            </div>
                                            <p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed">${item.description}</p>
                                            <button onclick='selectItemAndNavigate(${index})' class="w-full py-3 rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black text-sm uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide shadow-sm">+ Add to Order</button>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- SIDEBAR COLUMN -->
                        <div class="${isDesktop ? 'w-[340px] shrink-0' : 'w-full'} space-y-6">
                            <!-- Rewards Card -->
                            <div class="bg-violet-50 rounded-2xl p-6 border border-violet-100 relative overflow-hidden">
                                <div class="flex items-center gap-4 mb-5 relative z-10">
                                    <div class="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md">
                                        <i class="fa-solid fa-award text-xl"></i>
                                    </div>
                                    <div>
                                        <div class="text-violet-600 font-black text-sm tracking-tight uppercase">Gold Member</div>
                                        <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">1,240 pts until next reward</div>
                                    </div>
                                </div>
                                <div class="w-full bg-violet-200/60 h-2 rounded-full overflow-hidden relative z-10">
                                    <div class="bg-violet-600 h-full w-[65%] rounded-full relative overflow-hidden">
                                        <div class="absolute inset-0 bg-white/20 w-full h-full skew-x-12 -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            ${isDesktop ? `
                            <!-- Reorder Favorites (Desktop) -->
                            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="font-black text-gray-900 tracking-tight text-lg">Reorder Favorites</h3>
                                    <button class="text-violet-600 font-bold text-xs hover:underline tracking-tight">See All</button>
                                </div>
                                <div class="space-y-5 mb-6">
                                    <!-- Fav 1 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba3}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P1 Super Fruit Tea</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: 3 days ago</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('customize')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <!-- Fav 2 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba4}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P2 Super Lime Sijichun</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: 1 week ago</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('customize')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <!-- Fav 3 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba1}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P3 Super Grapefruit</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: Yesterday</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('customize')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                </div>
                                <button onclick="navigateTo('manage-favorites')" class="w-full py-3 rounded-full bg-gray-50 text-gray-800 font-black text-sm hover:bg-gray-100 transition-colors">Manage Favorites</button>
                            </div>
                            ` : ''}

                            <!-- Promo Card -->
                            <div class="bg-[#0b132b] rounded-2xl p-6 relative overflow-hidden text-white shadow-xl">
                                <i class="fa-solid fa-tag absolute -right-3 -top-3 text-7xl text-white/5 rotate-12"></i>
                                <h3 class="font-black text-xl tracking-tight mb-2 relative z-10">Free Desert</h3>
                                <p class="text-xs text-blue-100/80 font-medium mb-5 relative z-10 leading-relaxed pr-6">On orders over $35. Valid for your next 3 orders.</p>
                                <div class="text-[11px] font-black text-violet-500 uppercase tracking-widest relative z-10">CODE: BITESFREE35</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Area -->
                    <div class="mt-16 pt-6 border-t border-gray-200">
                        <!-- Logo Section (Full Width Row) -->
                        <div class="mb-6 text-center md:text-left">
                            <div class="font-black text-violet-600 text-xl tracking-tighter flex items-center justify-center md:justify-start whitespace-nowrap leading-none">
                                <i class="fa-solid fa-mug-hot mr-2 text-lg"></i>i-Tea
                            </div>
                        </div>
                        
                        <!-- Links Section (3 Columns) -->
                        <div class="grid grid-cols-3 gap-4 md:gap-8 text-left pb-10">
                            <div>
                                <h4 class="font-black text-gray-900 mb-4 text-xs tracking-tight">Explore</h4>
                                <ul class="space-y-3 text-[10px] text-gray-400 font-bold">
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Menu</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Locations</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Gift Cards</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-black text-gray-900 mb-4 text-xs tracking-tight">Support</h4>
                                <ul class="space-y-3 text-[10px] text-gray-400 font-bold">
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Contact</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Help</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Feedback</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-black text-gray-900 mb-4 text-xs tracking-tight">Legal</h4>
                                <ul class="space-y-3 text-[10px] text-gray-400 font-bold">
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Privacy</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse md:flex-row justify-between items-center pt-6 border-t border-gray-100 text-[11px] text-gray-400 font-medium gap-4">
                            <p>© 2026 i-Tea Inc. All rights reserved.</p>
                            <div class="flex gap-5 text-gray-400">
                                <i class="fa-solid fa-award text-lg hover:text-violet-600 transition-colors cursor-pointer"></i>
                                <i class="fa-regular fa-star text-lg hover:text-violet-600 transition-colors cursor-pointer"></i>
                                <i class="fa-regular fa-envelope text-lg hover:text-violet-600 transition-colors cursor-pointer"></i>
                            </div>
                        </div>
                </div>

                <!-- Category Bottom Sheet Modal -->
                <div id="category-modal" class="absolute inset-0 bg-black/60 z-[100] ${categoryModalClass} flex-col justify-end backdrop-blur-sm transition-all duration-300">
                    <div class="absolute inset-0" onclick="updateMockupState('modalOpen', null); navigateTo('menu')"></div>
                    <div class="bg-white w-full rounded-t-[40px] shadow-2xl animate-[slideUp_0.4s_ease-out] flex flex-col max-h-[85vh] z-10 relative">
                        <!-- Handle -->
                        <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-6" onclick="updateMockupState('modalOpen', null); navigateTo('menu')"></div>
                        
                        <!-- Modal Heading & Search -->
                        <div class="px-6 pb-6 border-b border-gray-100">
                            <div class="relative group">
                                <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-violet-600 transition-colors"></i>
                                <input type="text" placeholder="Search menu categories..." class="w-full pl-11 pr-12 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none font-black text-sm uppercase tracking-wide transition-all">
                                <button onclick="updateMockupState('modalOpen', null); navigateTo('menu')" class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-400 hover:text-gray-900 transition-colors">
                                    <i class="fa-solid fa-xmark text-sm"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Category List -->
                        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-hide">
                            ${categories.map(cat => `
                                <div onclick="updateMockupState('modalOpen', null); navigateTo('menu'); setTimeout(() => document.getElementById('new-items-section').scrollIntoView({behavior: 'smooth'}), 100)" class="flex items-center justify-between p-3 rounded-2xl border-2 border-gray-50 bg-white hover:border-violet-200 hover:bg-violet-50/30 transition-all cursor-pointer group active:scale-[0.98]">
                                    <div class="flex items-center gap-4">
                                        <div class="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                            <img src="${cat.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                        </div>
                                        <span class="font-black text-sm text-gray-900 uppercase tracking-tight">${cat.name}</span>
                                    </div>
                                    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <i class="fa-solid fa-chevron-right text-[10px]"></i>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="p-6 bg-gray-50/50 border-t border-gray-100 font-black text-center text-[10px] text-gray-400 uppercase tracking-widest leading-loose">
                            Quickly jump to your favorite section
                        </div>
                    </div>
                </div>

            </div>`;
    },
    'customize': () => {
        const isDesktop = currentViewport === 'desktop';
        const item = mockupState.selectedItem || MENU_ITEMS[1]; // Fallback to Taro Latte
        const basePrice = item.price;

        // --- Extra Toppings definition (with price per unit) ---
        const EXTRA_TOPPINGS = [
            { id: 'agarBoba',    name: 'AGAR BOBA',   price: 0.75 },
            { id: 'almondMilk',  name: 'ALMOND MILK', price: 0.75 },
            { id: 'aloeVera',    name: 'ALOE VERA',   price: 0.50 },
            { id: 'boba',        name: 'BOBA',        price: 0.00 },
            { id: 'chiaSeed',    name: 'CHIA SEED',   price: 0.00 },
        ];

        // --- Cup Options (add-on, qty-based) ---
        const CUP_OPTIONS = [
            { id: 'afterCup', name: 'AFTER CUP', price: 1.00 },
            { id: 'saltCup',  name: 'SALT CUP',  price: 0.40 },
        ];

        // --- Free toppings checklist (large list from screenshot) ---
        const FREE_TOPPINGS = [
            'FLAN', 'CRYSTAL JELLY', 'EGG PUDDING', 'COCONUT JELLY', 'ANNA',
            'LEMON TEA', 'LYCHEE JELLY', 'PASSION JELLY', 'TARO ANNA', 'RED BEAN',
            'COFFEE JELLY', 'BLUE BOBA (FIL.)', 'PINEAPPLE JELLY', 'PLANTAINS PUDDING',
            'M PUDDING', 'PANDA JELLY', 'PAMELA LOTTE', 'STRAWBERRY POBAL', 'MANGO BOBA',
            'GROUND COCONUT LOTTE', 'CREPE JELLY', 'CINNAMON COCONUT JELLY',
        ];

        // init topping quantities if needed
        if (!mockupState.toppingQty) mockupState.toppingQty = {};
        if (!mockupState.cupQty)     mockupState.cupQty = {};
        if (!mockupState.freeToppings) mockupState.freeToppings = [];
        if (!mockupState.iceLevel)   mockupState.iceLevel = 'ICE';

        // --- Dynamic total calculation ---
        let extrasTotal = 0;
        EXTRA_TOPPINGS.forEach(t => {
            extrasTotal += (mockupState.toppingQty[t.id] || 0) * t.price;
        });
        CUP_OPTIONS.forEach(c => {
            extrasTotal += (mockupState.cupQty[c.id] || 0) * c.price;
        });
        const totalPrice = ((basePrice + extrasTotal) * mockupState.itemQuantity).toFixed(2);

        // --- Helper: stepper button for toppings/cups ---
        const stepperRow = (id, name, price, stateKey, qty) => {
            const fmtPrice = price === 0 ? 'FREE' : `+$${price.toFixed(2)}`;
            return `
                <div class="flex justify-between items-center py-2.5">
                    <div class="flex flex-col">
                        <span class="text-sm font-black text-gray-800 uppercase tracking-tight">${name}</span>
                        <span class="text-[11px] font-bold text-gray-400">${fmtPrice}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <button onclick="(() => { const q = {...(mockupState.${stateKey} || {})}; q['${id}'] = Math.max(0, (q['${id}'] || 0) - 1); updateMockupState('${stateKey}', q); })()" class="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-300 transition-all active:scale-90 text-xs">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="font-black text-gray-900 w-4 text-center text-sm">${qty}</span>
                        <button onclick="(() => { const q = {...(mockupState.${stateKey} || {})}; q['${id}'] = (q['${id}'] || 0) + 1; updateMockupState('${stateKey}', q); })()" class="w-7 h-7 rounded-full border border-violet-200 bg-violet-50 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all active:scale-90 text-xs">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>`;
        };

        // --- Helper: radio row ---
        const radioRow = (label, stateKey, value, activeValue) => `
            <button onclick="updateMockupState('${stateKey}', '${value}')" class="w-full flex justify-between items-center py-2 group">
                <span class="text-sm font-black text-gray-700 uppercase tracking-tight">${label}</span>
                <div class="w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${activeValue === value ? 'border-violet-600 bg-violet-600' : 'border-gray-200 group-hover:border-violet-300'}">
                    ${activeValue === value ? '<i class="fa-solid fa-check text-white text-[9px]"></i>' : ''}
                </div>
            </button>`;

        // --- Section header ---
        const sectionHeader = (label) => `
            <div class="flex justify-between items-center pb-2 border-b border-gray-100 mb-3">
                <span class="text-xs font-black text-violet-600 uppercase tracking-widest">${label}</span>
            </div>`;

        const content = `
                <div class="${isDesktop ? 'modal-content max-w-xl p-0 overflow-hidden' : 'flex flex-col h-full bg-white'}">
                    ${!isDesktop ? `
                    <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Customize</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg><span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span></button>
                </header>` : ''}

                    <div id="order-details-scroller" class="flex-1 overflow-y-auto scrollbar-hide">
                        <!-- Header / Modal Top -->
                        <div class="relative ${isDesktop ? 'bg-violet-600 p-4 text-white flex justify-between items-center' : 'hidden'}">
                            <h2 class="font-black uppercase tracking-tight">Order Details</h2>
                            <button onclick="navigateTo('menu')" class="text-white hover:opacity-70"><i class="fa-solid fa-xmark text-xl"></i></button>
                        </div>

                        <!-- Item Banner Image -->
                        <div class="w-full h-56 overflow-hidden relative">
                            <img src="${item.image}" class="w-full h-full object-cover">
                        </div>

                        <!-- Info & Price -->
                        <div class="px-6 pt-5 pb-4 text-center border-b border-gray-100">
                            <div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>
                            <h3 class="text-xl font-black text-violet-600 uppercase tracking-tighter leading-tight mb-1">${item.name}</h3>
                            <p class="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">${item.description}</p>
                        </div>

                        <!-- Customizations -->
                        <div class="p-6 space-y-7">

                            <!-- Quantity -->
                            <div class="flex justify-between items-center">
                                <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Quantity</span>
                                <div class="flex items-center bg-gray-50 rounded-full border border-gray-100 px-4 py-2 gap-6 shadow-sm">
                                    <button onclick="updateMockupState('itemQuantity', Math.max(1, mockupState.itemQuantity - 1))" class="text-gray-400 hover:text-gray-900 transition-colors"><i class="fa-solid fa-minus"></i></button>
                                    <span class="font-black text-gray-900 min-w-[20px] text-center">${mockupState.itemQuantity}</span>
                                    <button onclick="updateMockupState('itemQuantity', mockupState.itemQuantity + 1)" class="text-gray-400 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>

                            <!-- Sugar Level -->
                            <div>
                                ${sectionHeader('Sugar Level')}
                                <div class="space-y-1">
                                    ${['SUGAR 0%', 'SUGAR 30%', 'SUGAR 50%', 'SUGAR 80%', 'SUGAR 100%'].map(lvl => radioRow(lvl, 'sugarLevel', lvl, mockupState.sugarLevel)).join('')}
                                </div>
                            </div>

                            <!-- Ice Level -->
                            <div>
                                ${sectionHeader('Ice Level')}
                                <div class="space-y-1">
                                    ${['PLAIN', 'LESS ICE', 'ICE', 'MORE ICE', 'HOT', 'HOT CHOICE'].map(lvl => radioRow(lvl, 'iceLevel', lvl, mockupState.iceLevel)).join('')}
                                </div>
                            </div>

                            <!-- Extra Toppings (stepper, priced) -->
                            <div>
                                ${sectionHeader('Extra Toppings')}
                                <div class="divide-y divide-gray-50">
                                    ${EXTRA_TOPPINGS.map(t => stepperRow(t.id, t.name, t.price, 'toppingQty', mockupState.toppingQty[t.id] || 0)).join('')}
                                </div>
                                <p class="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-widest">Note: Not charged for free toppings</p>
                            </div>

                            <!-- Cup Options (stepper, priced) -->
                            <div>
                                ${sectionHeader('Cup Options')}
                                <div class="divide-y divide-gray-50">
                                    ${CUP_OPTIONS.map(c => stepperRow(c.id, c.name, c.price, 'cupQty', mockupState.cupQty[c.id] || 0)).join('')}
                                </div>
                                <p class="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-widest">Note: Not charged for free toppings</p>
                            </div>

                            <!-- Free Topping Checklist (large list) -->
                            <div>
                                ${sectionHeader('Add Toppings')}
                                <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                                    ${FREE_TOPPINGS.map(t => {
                                        const isChecked = (mockupState.freeToppings || []).includes(t);
                                        const safeT = t.replace(/'/g, "\\'");
                                        return `
                                        <label class="flex items-center gap-2 cursor-pointer group">
                                            <button onclick="(() => { let ft = [...(mockupState.freeToppings || [])]; const i = ft.indexOf('${safeT}'); if(i > -1) ft.splice(i,1); else ft.push('${safeT}'); updateMockupState('freeToppings', ft); })()"
                                                class="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${isChecked ? 'border-violet-600 bg-violet-600' : 'border-gray-200 group-hover:border-violet-300'}">
                                                ${isChecked ? '<i class="fa-solid fa-check text-white text-[9px]"></i>' : ''}
                                             </button>
                                            <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight">${t}</span>
                                        </label>`;
                                    }).join('')}
                                </div>
                            </div>

                            <!-- Special Instructions -->
                            <div>
                                <div class="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Special Order Instructions <span class="text-gray-300">(Max 250 Characters)</span></div>
                                <textarea maxlength="250" placeholder="Ex. Less ice, no boba, extra sweet..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20 transition-colors"></textarea>
                            </div>

                        </div>
                    </div>

                    <!-- Sticky Bottom Actions -->
                    <div class="p-6 bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] space-y-3">
                        <div class="flex justify-between items-center text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">
                            <span>Options Total</span>
                            <span class="text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                        </div>
                        <button onclick="navigateTo('cart')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">Add to Cart - $${totalPrice}</button>
                        <button onclick="navigateTo('menu')" class="w-full text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition-colors py-2">Cancel</button>
                    </div>
                </div>
            `;

        return isDesktop ? `<div class="modal-overlay">${content}</div>` : content;
    },

    'cart': () => {
        const bagFee = (mockupState.bagQuantity * 0.10);
        const subtotal = 19.00;
        const taxes = 2.45;
        const finalTotal = (subtotal + taxes + bagFee).toFixed(2);

        const selectionNotMade = mockupState.bagQuantity === 0 && !mockupState.noBagsSelected;
        const paymentAction = selectionNotMade ? `updateMockupState('modalOpen', 'bag-alert')` : `navigateTo('checkout')`;

        return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Review order</span>
                    <div class="w-10"></div>
                </header>
                <div id="cart-scroller" class="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide pb-32">
                    
                    <!-- Consolidated Order Details Card -->
                    <div class="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4 shrink-0 transition-all">
                        <!-- Store Info (Compact) -->
                        <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                            <div class="flex gap-3 items-center">
                                <div class="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-store text-violet-600 text-base"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-[#33424A] text-xs tracking-tight leading-tight">${(mockupState.selectedLocation || "i-Tea").replace(/\b\d{5}\b/g, '').trim()}</h3>
                                    <p class="text-[10px] font-bold text-gray-400 mt-0.5 tracking-wide">${mockupState.selectedDistance || "0.8 mi"}</p>
                                </div>
                            </div>
                            <button onclick="navigateTo('location-pick')" class="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-100 transition-all">
                                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </button>
                        </div>

                        <!-- Pickup Details (Compact Grid) -->
                        <div class="grid grid-cols-2 gap-4">
                            <!-- Pickup Method -->
                            <div onclick="navigateTo('order-details')" class="flex gap-3 items-center cursor-pointer group">
                                <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-violet-50 transition-colors">
                                    <i class="fa-solid ${mockupState.fulfillmentMode === 'Delivery' ? 'fa-truck' : mockupState.fulfillmentMode === 'Curbside' ? 'fa-car' : 'fa-person-walking-luggage'} text-violet-600 text-sm"></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Pickup method</span>
                                    <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight">${mockupState.fulfillmentMode || 'Pickup'}</span>
                                </div>
                            </div>
                            <!-- Pickup Time -->
                            <div onclick="navigateTo('order-details')" class="flex gap-3 items-center cursor-pointer group border-l border-gray-50 pl-2">
                                <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-violet-50 transition-colors">
                                    <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Pickup time</span>
                                    <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight">${mockupState.orderTime === 'Later' ? mockupState.selectedTimeSlot : 'ASAP'} (4-7m)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 divide-y divide-gray-100">
                            <!-- Item 1 -->
                            <div class="flex justify-between items-start pb-5 mb-5">
                                <div class="flex gap-4 items-center">
                                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 cursor-pointer" onclick="navigateTo('customize')"><img src="${assets.boba2}" class="w-full h-full object-cover"></div>
                                    <div>
                                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight cursor-pointer" onclick="navigateTo('customize')">Brown Sugar Pearl</h3>
                                        <p class="text-[11px] text-gray-500 font-medium mb-3 cursor-pointer line-clamp-2 hover:text-gray-700 transition-colors leading-relaxed" onclick="this.classList.toggle('line-clamp-2')" title="Click to expand/collapse customizations">Large, Less Ice, Extra Boba, Oat Milk, 50% Sweetness, No Foam, Double Pearl, Less Sweet, Extra Ice, Cheese Foam, Lychee Jelly</p>
                                        
                                        <!-- Quantity Selector Pill -->
                                        <div class="flex items-center bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 px-3 py-1.5 gap-5 w-fit">
                                            <button class="text-gray-900 hover:text-red-500 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-[13px]"></i></button>
                                            <span class="font-black text-[13px] text-gray-900 min-w-[8px] text-center">1</span>
                                            <button class="text-gray-900 hover:text-violet-600 transition-colors active:scale-90"><i class="fa-solid fa-plus text-[13px]"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="font-black text-gray-900">$6.50</span>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="flex justify-between items-start pt-5">
                                <div class="flex gap-4 items-center">
                                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 cursor-pointer" onclick="navigateTo('customize')"><img src="${assets.boba1}" class="w-full h-full object-cover"></div>
                                    <div>
                                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight cursor-pointer" onclick="navigateTo('customize')">Protein Bowl</h3>
                                        <p class="text-xs text-gray-500 font-medium mb-3">Extra Chicken</p>
                                        
                                        <!-- Quantity Selector Pill -->
                                        <div class="flex items-center bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 px-3 py-1.5 gap-5 w-fit">
                                            <button class="text-gray-900 hover:text-red-500 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-[13px]"></i></button>
                                            <span class="font-black text-[13px] text-gray-900 min-w-[8px] text-center">1</span>
                                            <button class="text-gray-900 hover:text-violet-600 transition-colors active:scale-90"><i class="fa-solid fa-plus text-[13px]"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="font-black text-gray-900">$12.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="navigateTo('menu')" class="w-full bg-transparent border-2 border-violet-600 text-violet-600 py-3.5 rounded-full font-black text-sm shadow-[0_8px_25px_-5px_rgba(124,58,237,0.2)] hover:bg-violet-50 active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center gap-2 shrink-0">
                        <i class="fa-solid fa-plus"></i> Add another menu item
                    </button>

                    <!-- You May Also Like Carousel -->
                    <div class="shrink-0">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-3 px-1">You May Also Like</h3>
                        <div class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
                            ${MENU_ITEMS.slice(4, 9).map((item, index) => {
                                // Find the actual index in MENU_ITEMS for the onclick handler
                                const actualIndex = MENU_ITEMS.indexOf(item);
                                return `
                                    <div class="snap-center shrink-0 w-[140px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                                        <div class="h-24 relative cursor-pointer" onclick="selectItemAndNavigate(${actualIndex})">
                                            <img src="${item.image}" class="w-full h-full object-cover">
                                        </div>
                                        <div class="p-3 text-left">
                                            <h4 class="text-xs font-black text-gray-900 uppercase tracking-tight truncate cursor-pointer" onclick="selectItemAndNavigate(${actualIndex})">${item.name}</h4>
                                            <div class="flex justify-between items-center mt-2">
                                                <span class="text-sm font-black text-violet-600">$${item.price.toFixed(2)}</span>
                                                <button onclick="selectItemAndNavigate(${actualIndex})" class="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 active:scale-95 transition-transform"><i class="fa-solid fa-plus text-[10px]"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>


                    <!-- Bag Selection (California Compliance) -->
                    <div class="shrink-0 bg-violet-50 rounded-2xl p-4 border border-violet-100 flex flex-col gap-4">
                        <div class="flex justify-between items-start">
                            <div class="flex-1 pr-4">
                                <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight leading-tight">
                                    Do you need plastic bag(s)?
                                </h3>
                                <div class="${mockupState.bagQuantity > 0 || mockupState.noBagsSelected ? 'text-green-600' : 'text-violet-600'} text-[10px] font-bold flex items-center gap-1 normal-case tracking-normal mt-1">
                                    <i class="fa-solid ${mockupState.bagQuantity > 0 || mockupState.noBagsSelected ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
                                    Required • Select 1
                                </div>
                                <p class="text-[10px] font-bold text-gray-500 mt-0.5">10 cents for each bag</p>
                            </div>
                            <div class="flex items-center bg-white rounded-full shadow-sm border border-gray-50 px-3 py-1.5 gap-4">
                                <button onclick="mockupState.noBagsSelected = false; updateMockupState('bagQuantity', Math.max(0, mockupState.bagQuantity - 1))" class="text-gray-900 hover:text-red-500 transition-colors"><i class="fa-solid fa-minus text-xs"></i></button>
                                <span class="font-black text-sm text-gray-900 min-w-[12px] text-center">${mockupState.bagQuantity}</span>
                                <button onclick="mockupState.noBagsSelected = false; updateMockupState('bagQuantity', mockupState.bagQuantity + 1)" class="text-gray-900 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus text-xs"></i></button>
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <button onclick="mockupState.bagQuantity = 0; updateMockupState('noBagsSelected', true);" 
                                    class="flex-1 py-2 px-3 rounded-lg border-2 text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${mockupState.noBagsSelected ? 'bg-violet-600 text-white border-violet-600 shadow-md' : 'bg-white text-gray-400 border-gray-100 hover:border-violet-200'}">
                                <i class="fa-solid ${mockupState.noBagsSelected ? 'fa-circle-check' : 'fa-circle-dot'}"></i>
                                No plastic bags needed
                            </button>
                        </div>
                    </div>
                    
                    <!-- Pricing Summary -->
                    <div class="mt-auto bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-3 shrink-0">
                        <div class="flex justify-between text-sm font-bold text-gray-600"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-sm font-bold text-gray-600"><span>Taxes & Fees</span><span>$${taxes.toFixed(2)}</span></div>
                        ${mockupState.bagQuantity > 0 ? `<div class="flex justify-between text-sm font-bold text-gray-600"><span>Plastic Bag(s)</span><span>$${bagFee.toFixed(2)}</span></div>` : ''}
                        <div class="h-px bg-gray-200 w-full my-2"></div>
                        <div class="flex justify-between text-lg font-black text-gray-900 uppercase"><span>Total</span><span>$${finalTotal}</span></div>
                    </div>
                </div>

                <!-- Floating Checkout Button -->
                <button onclick="${paymentAction}" class="absolute bottom-8 right-6 bg-violet-600 text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] z-[60] active:scale-95 transition-all uppercase tracking-wider">
                    Checkout $${finalTotal}
                </button>

                <!-- Bag Alert Modal -->
                ${mockupState.modalOpen === 'bag-alert' ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[90%] max-w-[400px] rounded-3xl text-center p-8 relative shadow-2xl">
                        <div class="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        </div>
                        <h2 class="text-2xl font-black text-gray-900 uppercase mb-3">Wait! One Last Thing</h2>
                        <p class="text-gray-500 font-medium mb-8 leading-relaxed">California law requires us to confirm if you need plastic bags for your order. Please select an option before continuing.</p>
                        
                        <div class="flex flex-col items-center gap-6">
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest -mb-4">10¢ per bag</div>
                            <!-- Integrated Quantity Selector (Static Styling for no flicker) -->
                            <div class="flex items-center bg-gray-50 rounded-full border border-gray-100 px-6 py-3 gap-8 shadow-sm">
                                <button onclick="adjustBagQuantity(-1)" class="text-gray-900 hover:text-red-500 transition-colors"><i class="fa-solid fa-minus text-xs"></i></button>
                                <span id="bag-count-display" class="font-black text-xl text-gray-900 min-w-[24px] text-center">${mockupState.bagQuantity}</span>
                                <button onclick="adjustBagQuantity(1)" class="text-gray-900 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus text-xs"></i></button>
                            </div>
                            
                            <div class="w-full space-y-3">
                                <button id="bag-continue-btn" onclick="${mockupState.bagQuantity > 0 ? "mockupState.modalOpen = null; navigateTo('checkout');" : "mockupState.modalOpen = null; mockupState.noBagsSelected = true; navigateTo('checkout');"}" class="w-full bg-violet-600 text-white py-4 rounded-full font-black uppercase tracking-wide active:scale-95 transition-all shadow-md">
                                    ${mockupState.bagQuantity > 0 ? `Continue with ${mockupState.bagQuantity} bag(s)` : "I don't need bags"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>` : ''}

            </div>`;
    },

    'account': () => {
        const isDesktop = currentViewport === 'desktop';
        return `
            <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Header -->
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">My Account</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        <span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span>
                    </button>
                </header>

                <div class="p-6 md:p-8 max-w-3xl mx-auto w-full flex flex-col gap-6 pb-16">

                    <!-- Greeting -->
                    <div class="mb-2">
                        <h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-1">Hi Mike!</h1>
                        <p class="text-gray-500 font-medium">Manage your account settings and order history.</p>
                    </div>

                    <!-- Personal Info Card -->
                    <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div class="px-5 py-4 flex justify-between items-center border-b border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                    <i class="fa-solid fa-user text-lg"></i>
                                </div>
                                <span class="font-black uppercase tracking-tight text-gray-900 text-sm">Personal Info</span>
                            </div>
                            <button onclick="mockupState.modalOpen = 'edit-profile'; navigateTo(currentPage);" class="bg-violet-600 text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md hover:bg-violet-700 transition-colors active:scale-95">
                                <i class="fa-solid fa-pen text-[9px] mr-1"></i> Edit
                            </button>
                        </div>
                        <div class="px-5 py-4 grid grid-cols-2 gap-x-8 gap-y-4">
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">First Name</p>
                                <p class="font-bold text-gray-800 text-sm">Mike</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Last Name</p>
                                <p class="font-bold text-gray-800 text-sm">Riley</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                                <p class="font-bold text-violet-600 text-sm truncate">michaelriley08@gmail.com</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Phone</p>
                                <p class="font-bold text-gray-800 text-sm">732-539-2167</p>
                            </div>
                        </div>
                        <!-- Address -->
                        <div class="px-5 py-4 border-t border-gray-100">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Address</p>
                            <p class="font-bold text-gray-800 text-sm">1705 W. Ruby Dr #105</p>
                            <p class="font-bold text-gray-500 text-sm">Tempe, AZ 85284</p>
                        </div>
                    </div>

                    <!-- Edit Profile Modal -->
                    ${mockupState.modalOpen === 'edit-profile' ? `
                    <div class="modal-overlay z-[200]" onclick="if(event.target===this){mockupState.modalOpen=null;navigateTo(currentPage);}">
                        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-6 relative shadow-2xl max-h-[85vh] overflow-y-auto scrollbar-hide">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight">Edit Profile</h2>
                                <button onclick="mockupState.modalOpen=null;navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="grid grid-cols-2 gap-3">
                                    <div>
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">First Name</label>
                                        <input type="text" value="Mike" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                    <div>
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Last Name</label>
                                        <input type="text" value="Riley" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Email</label>
                                    <input type="email" value="michaelriley08@gmail.com" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-violet-600 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Phone</label>
                                    <input type="tel" value="732-539-2167" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Street Address</label>
                                    <input type="text" value="1705 W. Ruby Dr #105" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                </div>
                                <div class="grid grid-cols-3 gap-3">
                                    <div class="col-span-2">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">City</label>
                                        <input type="text" value="Tempe" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                    <div>
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">State</label>
                                        <input type="text" value="AZ" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Zip Code</label>
                                    <input type="text" value="85284" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                </div>
                                <button onclick="mockupState.modalOpen=null;navigateTo(currentPage);" class="w-full mt-2 py-4 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-violet-700 transition-colors active:scale-95">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>` : ''}

                    <!-- Account Settings Card -->
                    <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div class="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                            <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-gear text-lg"></i>
                            </div>
                            <span class="font-black uppercase tracking-tight text-gray-900 text-sm">Account Settings</span>
                        </div>
                        <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors active:scale-[0.99] border-b border-gray-50">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-lock text-gray-400 w-5 text-center"></i>
                                <span class="font-bold text-gray-800 text-sm">Change Password</span>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
                        </button>
                        <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors active:scale-[0.99]">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-bell text-gray-400 w-5 text-center"></i>
                                <span class="font-bold text-gray-800 text-sm">Notification Preferences</span>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
                        </button>
                    </div>

                    <!-- Order History Card -->
                    <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div class="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                            <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-clock-rotate-left text-lg"></i>
                            </div>
                            <span class="font-black uppercase tracking-tight text-gray-900 text-sm">Order History</span>
                        </div>

                        <!-- Order Row 1 -->
                        <div class="px-5 py-4 border-b border-gray-100">
                            <div class="flex justify-between items-center mb-2">
                                <div>
                                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">2/14/2026</p>
                                    <p class="font-black text-violet-600 text-sm mt-0.5">i-Tea – Tempe</p>
                                </div>
                                <span class="font-black text-gray-900 text-base">$21.08</span>
                            </div>
                            <div class="flex flex-col gap-0.5 mb-3">
                                <p class="text-xs text-gray-500 font-medium">1 × M7 Crème Brûlée Boba Milk Tea</p>
                                <p class="text-xs text-gray-500 font-medium">2 × P4 Brown Sugar Boba Latte</p>
                                <p class="text-xs text-gray-400 font-medium">2 × Bag</p>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="navigateTo('order-status')" class="flex-1 py-2.5 rounded-full border-2 border-violet-600 text-violet-600 font-black text-xs uppercase tracking-widest hover:bg-violet-50 transition-colors">View</button>
                                <button onclick="navigateTo('cart')" class="flex-1 py-2.5 rounded-full bg-violet-600 text-white font-black text-xs uppercase tracking-widest shadow-md hover:bg-violet-700 transition-colors">Order Again</button>
                            </div>
                        </div>

                        <!-- Order Row 2 -->
                        <div class="px-5 py-4">
                            <div class="flex justify-between items-center mb-2">
                                <div>
                                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">2/12/2026</p>
                                    <p class="font-black text-violet-600 text-sm mt-0.5">i-Tea – Alameda</p>
                                </div>
                                <span class="font-black text-gray-900 text-base">$14.53</span>
                            </div>
                            <div class="flex flex-col gap-0.5 mb-3">
                                <p class="text-xs text-gray-500 font-medium">3 × A1 Premium Green Tea</p>
                                <p class="text-xs text-gray-400 font-medium">1 × Bag</p>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="navigateTo('order-status')" class="flex-1 py-2.5 rounded-full border-2 border-violet-600 text-violet-600 font-black text-xs uppercase tracking-widest hover:bg-violet-50 transition-colors">View</button>
                                <button onclick="navigateTo('cart')" class="flex-1 py-2.5 rounded-full bg-violet-600 text-white font-black text-xs uppercase tracking-widest shadow-md hover:bg-violet-700 transition-colors">Order Again</button>
                            </div>
                        </div>
                    </div>

                    <!-- Logout -->
                    <button onclick="navigateTo('home')" class="w-full py-4 rounded-full border-2 border-gray-200 text-gray-700 font-black uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
                    </button>

                    <!-- Danger Zone — Delete Account -->
                    <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-red-100 overflow-hidden mt-2">
                        <div class="px-5 py-4 border-b border-red-100 flex items-center gap-3">
                            <div class="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                                <i class="fa-solid fa-triangle-exclamation text-lg"></i>
                            </div>
                            <span class="font-black uppercase tracking-tight text-red-500 text-sm">Danger Zone</span>
                        </div>
                        <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-red-50 transition-colors active:scale-[0.99]">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-trash text-red-400 w-5 text-center"></i>
                                <span class="font-bold text-red-500 text-sm">Delete Account</span>
                            </div>
                            <i class="fa-solid fa-chevron-right text-red-300 text-xs"></i>
                        </button>
                    </div>

                </div>
            </div>`;
    },
    'order-status': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0">
                    <button onclick="navigateTo('home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900">Order Status</h1>
                </header>
                
                    <div class="flex gap-2 overflow-x-auto scrollbar-hide shrink-0 pb-2">
                        <button onclick="updateMockupState('orderDetailsExpanded', !mockupState.orderDetailsExpanded); navigateTo(currentPage);" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                            <i class="fa-solid ${mockupState.orderDetailsExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] text-gray-500"></i>
                            <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Order details</span>
                        </button>
                        <button class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                            <i class="fa-solid fa-dollar-sign text-[10px] text-gray-500"></i>
                            <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Add...</span>
                        </button>
                    </div>

                    ${mockupState.orderDetailsExpanded ? `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-[fadeIn_0.3s_ease-out] space-y-8">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-violet-50 overflow-hidden">
                                <img src="images/itea_logo.png" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">i-Tea</h3>
                                <p class="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">3 items</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba3}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">1 × Brown Sugar Pearl</h4>
                                        <span class="text-sm font-black text-gray-900">$6.50</span>
                                    </div>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">Large • Less Ice • 75% Sweet</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba4}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">1 × Protein Bowl</h4>
                                        <span class="text-sm font-black text-gray-900">$12.50</span>
                                    </div>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">Chicken • Quinoa • Avocado</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba1}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">1 × M7 Boba Milk Tea</h4>
                                        <span class="text-sm font-black text-gray-900">$5.50</span>
                                    </div>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">Regular • Classic Tea</p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-2 pt-4 border-t border-gray-100">
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span>$24.50</span>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>Delivery Fee</span>
                                <div class="flex gap-2">
                                    <span class="line-through text-gray-300">$1.99</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <div class="flex items-center gap-1">Service Fee <i class="fa-solid fa-circle-info text-[10px]"></i></div>
                                <div class="flex gap-2">
                                    <span class="line-through text-gray-300">$3.00</span>
                                    <span>$0.99</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <div class="flex items-center gap-1">Estimated Tax <i class="fa-solid fa-circle-info text-[10px]"></i></div>
                                <span>$2.32</span>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>VIP Delivery Fee</span>
                                <div class="flex gap-2">
                                    <span class="line-through text-gray-300">$5.99</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>Dasher Tip</span>
                                <span>$4.00</span>
                            </div>
                            <div class="flex justify-between text-base font-black text-gray-900 uppercase pt-2">
                                <span>Total</span>
                                <span>$31.81</span>
                            </div>
                        </div>

                        <div class="pt-6 border-t border-gray-100">
                            <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">Payment</h2>
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-8 bg-gray-50 rounded border border-gray-200 flex items-center justify-center shrink-0">
                                        <i class="fa-brands fa-apple-pay text-3xl"></i>
                                    </div>
                                    <div>
                                        <p class="text-sm font-black text-gray-900 uppercase tracking-tight">Apple Pay...3580</p>
                                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">3/14/26, 1:14 PM</p>
                                    </div>
                                </div>
                                <span class="text-base font-black text-gray-900">$31.81</span>
                            </div>
                            <p class="text-[10px] font-bold text-gray-400 mt-4 leading-relaxed line-clamp-2">You'll be charged at the end of the day for this and other orders.</p>
                        </div>
                    </div>
                    ` : `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1">Preparing</h2>
                        <p class="text-sm font-bold text-gray-500">Estimated pickup at 12:45 PM</p>
                    </div>

                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                        <!-- Vertical line connecting steps -->
                        <div class="absolute left-[39px] top-10 bottom-10 w-0.5 bg-gray-200 z-0"></div>
                        
                        <div class="space-y-8 relative z-10">
                            <!-- Step 1: Received (Completed) -->
                            <div class="flex gap-4 items-center opacity-50">
                                <div class="w-10 h-10 rounded-full bg-green-50 text-white flex items-center justify-center shrink-0 shadow-md">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Order Received</h3>
                                    <p class="text-xs text-gray-500 font-medium">12:30 PM</p>
                                </div>
                            </div>
                            <!-- Step 2: Preparing (Active) -->
                            <div class="flex gap-4 items-center">
                                <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md ring-4 ring-red-100">
                                    <i class="fa-solid fa-fire-burner"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-red-600 uppercase tracking-tight text-sm">Preparing Food</h3>
                                    <p class="text-xs text-gray-500 font-medium">Currently in the kitchen</p>
                                </div>
                            </div>
                            <!-- Step 3: Ready (Pending) -->
                            <div class="flex gap-4 items-center opacity-40">
                                <div class="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center shrink-0 border-2 border-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Ready for Pickup</h3>
                                    <p class="text-xs text-gray-500 font-medium">Waiting for completion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `}
                
                <div class="p-6 bg-white border-t border-gray-100 shrink-0 sticky bottom-0">
                    <button class="w-full bg-gray-100 text-gray-700 py-4 rounded-full font-black text-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2">
                        <i class="fa-solid fa-phone"></i> Contact Store
                    </button>
                </div>
            </div>`,
    'sign-up': () => `<div class="p-10 text-center uppercase font-black">Registration</div>`,
    'login': () => `<div class="p-10 text-center uppercase font-black">Login View</div>`,
    'privacy': () => `<div class="p-10 text-center uppercase font-black">Privacy Policy</div>`,
    'order-confirm': () => `
            <div class="flex flex-col h-full bg-white relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">SUCCESS</span>
                    <div class="w-10"></div>
                </header>
                <div class="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                    <div class="text-center">
                        <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-inner">
                            <i class="fa-solid fa-check text-5xl"></i>
                        </div>
                        <h1 class="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">Order Confirmed!</h1>
                        <p class="text-gray-500 font-medium mb-8">Your order #FB-9824 is being sent to the kitchen.</p>
                    </div>

                    <div class="flex gap-2 overflow-x-auto scrollbar-hide shrink-0 pb-2">
                        <button onclick="updateMockupState('orderDetailsExpanded', !mockupState.orderDetailsExpanded); navigateTo(currentPage);" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                            <i class="fa-solid ${mockupState.orderDetailsExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] text-gray-500"></i>
                            <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Order details</span>
                        </button>
                        <button class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                            <i class="fa-solid fa-dollar-sign text-[10px] text-gray-500"></i>
                            <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Add...</span>
                        </button>
                    </div>

                    ${mockupState.orderDetailsExpanded ? `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-[fadeIn_0.3s_ease-out] space-y-8">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-violet-50 overflow-hidden">
                                <img src="images/itea_logo.png" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">i-Tea</h3>
                                <p class="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">3 items</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba3}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">1 × Brown Sugar Pearl</h4>
                                        <span class="text-sm font-black text-gray-900">$6.50</span>
                                    </div>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">Large • Less Ice • 75% Sweet</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba4}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">1 × Protein Bowl</h4>
                                        <span class="text-sm font-black text-gray-900">$12.50</span>
                                    </div>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">Chicken • Quinoa • Avocado</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba1}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">1 × M7 Boba Milk Tea</h4>
                                        <span class="text-sm font-black text-gray-900">$5.50</span>
                                    </div>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">Regular • Classic Tea</p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-2 pt-4 border-t border-gray-100">
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span>$24.50</span>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>Delivery Fee</span>
                                <div class="flex gap-2">
                                    <span class="line-through text-gray-300">$1.99</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <div class="flex items-center gap-1">Service Fee <i class="fa-solid fa-circle-info text-[10px]"></i></div>
                                <div class="flex gap-2">
                                    <span class="line-through text-gray-300">$3.00</span>
                                    <span>$0.99</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <div class="flex items-center gap-1">Estimated Tax <i class="fa-solid fa-circle-info text-[10px]"></i></div>
                                <span>$2.32</span>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>VIP Delivery Fee</span>
                                <div class="flex gap-2">
                                    <span class="line-through text-gray-300">$5.99</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span>Dasher Tip</span>
                                <span>$4.00</span>
                            </div>
                            <div class="flex justify-between text-base font-black text-gray-900 uppercase pt-2">
                                <span>Total</span>
                                <span>$31.81</span>
                            </div>
                        </div>

                        <div class="pt-6 border-t border-gray-100">
                            <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">Payment</h2>
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-8 bg-gray-50 rounded border border-gray-200 flex items-center justify-center shrink-0">
                                        <i class="fa-brands fa-apple-pay text-3xl"></i>
                                    </div>
                                    <div>
                                        <p class="text-sm font-black text-gray-900 uppercase tracking-tight">Apple Pay...3580</p>
                                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">3/14/26, 1:14 PM</p>
                                    </div>
                                </div>
                                <span class="text-base font-black text-gray-900">$31.81</span>
                            </div>
                            <p class="text-[10px] font-bold text-gray-400 mt-4 leading-relaxed line-clamp-2">You'll be charged at the end of the day for this and other orders.</p>
                        </div>
                    </div>
                    ` : `
                    <div class="bg-gray-50 w-full rounded-lg p-6 border border-gray-100">
                        <div class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Pick Up Time</div>
                        <div class="text-3xl font-black text-gray-900 uppercase">8:02 PM</div>
                    </div>

                    <div class="w-full space-y-4">
                        <button onclick="navigateTo('order-status')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">Track Order</button>
                        <button onclick="navigateTo('home')" class="w-full bg-white border-2 border-gray-100 text-gray-700 py-4 rounded-full font-black text-lg active:scale-95 transition-all uppercase tracking-wider hover:bg-gray-50">Back to Home</button>
                    </div>
                    `}
                </div>`,
    'checkout': () => {
        const subtotal = 12.50;
        const taxes = 1.25;
        const bagFee = mockupState.bagQuantity * 0.10;
        
        let tipAmount = 0;
        if (mockupState.tipPercentage === 'other') {
            tipAmount = parseFloat(mockupState.customTipAmount) || 0;
        } else {
            tipAmount = subtotal * (mockupState.tipPercentage / 100);
        }

        const finalTotal = (subtotal + taxes + bagFee + tipAmount).toFixed(2);

        const openPaymentModal = (method) => {
            mockupState.paymentMethod = method;
            updateMockupState('modalOpen', `payment-${method}`);
        };

        return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('cart')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Payment</span>
                    <div class="w-10"></div>
                </header>
                
                <div id="payment-scroller" class="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide pb-32">
                    
                    <!-- Payment Methods -->
                    <div>
                        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Payment Method</h2>
                        <div class="space-y-3">
                            <!-- Card -->
                            <div onclick="updateMockupState('modalOpen', 'payment-card')" class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                        <i class="fa-solid fa-credit-card text-lg"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-900 uppercase text-xs block tracking-tight">Credit or Debit Card</span>
                                        <span class="text-[10px] font-bold text-gray-400">Ending in 4242</span>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
                            </div>

                            <!-- Gift Card -->
                            <div onclick="updateMockupState('modalOpen', 'payment-gift')" class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-400">
                                        <i class="fa-solid fa-gift text-lg"></i>
                                    </div>
                                    <span class="font-black text-gray-900 uppercase text-xs tracking-tight">Redeem Gift Card</span>
                                </div>
                                <i class="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
                            </div>

                            <!-- Loyalty -->
                            <div onclick="updateMockupState('modalOpen', 'payment-rewards')" class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-400">
                                        <i class="fa-solid fa-award text-lg"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-900 uppercase text-xs block tracking-tight">Loyalty Rewards</span>
                                        <span class="text-[10px] font-bold text-violet-600 uppercase">Available: $12.50</span>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Tipping Section -->
                    <div>
                        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Add a Tip</h2>
                        <div class="grid grid-cols-4 gap-3">
                            ${[10, 15, 20, 'other'].map(val => {
                                const isSelected = mockupState.tipPercentage === val;
                                const label = val === 'other' ? 'Other' : `${val}%`;
                                const action = val === 'other' ? "updateMockupState('modalOpen', 'tip-other')" : `updateMockupState('tipPercentage', ${val})`;
                                return `
                                    <button onclick="${action}" class="py-3.5 rounded-2xl border-2 font-black uppercase text-xs tracking-tighter transition-all ${isSelected ? 'bg-violet-600 text-white border-violet-600 shadow-md' : 'bg-white text-gray-400 border-gray-100 hover:border-violet-100'}">
                                        ${label}
                                    </button>
                                `;
                            }).join('')}
                        </div>
                        <p class="text-[10px] font-bold text-gray-400 mt-3 px-1 uppercase tracking-wide text-center">Your generosity supports our hard-working baristas! ✨</p>
                    </div>

                    <!-- Pricing Summary -->
                    <div class="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 space-y-4">
                        <div class="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest"><span>Tax & Service</span><span>$${taxes.toFixed(2)}</span></div>
                        <div class="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest"><span>Tip</span><span>$${tipAmount.toFixed(2)}</span></div>
                        <div class="h-px bg-gray-50 w-full my-4"></div>
                        <div class="flex justify-between text-xl font-black text-gray-900 uppercase"><span>Total</span><span class="text-violet-600">$${finalTotal}</span></div>
                    </div>
                </div>

                <!-- Footer Action Buttons -->
                <div class="p-6 bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-50 flex justify-between gap-4">
                    <button onclick="navigateTo('cart')" class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-violet-600 hover:bg-violet-50 shadow-md transition-all active:scale-95 shrink-0"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <button onclick="navigateTo('order-confirm')" class="flex-1 bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-wider">Purchase Order</button>
                </div>

                <!-- PAYMENT MODALS -->
                
                <!-- Credit Card Modal -->
                ${mockupState.modalOpen === 'payment-card' ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[90%] max-w-[420px] rounded-[32px] p-8 shadow-2xl animate-[slideUp_0.4s_ease-out]">
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="font-black text-xl text-gray-900 uppercase">Card Details</h3>
                            <button onclick="updateMockupState('modalOpen', null)" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="space-y-4 mb-8">
                            <div class="space-y-1.5">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Cardholder Name</label>
                                <input type="text" value="Mike Smith" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
                            </div>
                            <div class="space-y-1.5">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Card Number</label>
                                <div class="relative">
                                    <input type="text" value="•••• •••• •••• 4242" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
                                    <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5 opacity-40">
                                        <i class="fa-brands fa-cc-visa text-lg"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Expiry</label>
                                    <input type="text" value="12/26" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">CVC</label>
                                    <input type="text" value="•••" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none">
                                </div>
                            </div>
                        </div>
                        <button onclick="updateMockupState('modalOpen', null)" class="w-full bg-violet-600 text-white py-4 rounded-2xl font-black uppercase tracking-wide shadow-lg active:scale-95 transition-all">Save & Continue</button>
                    </div>
                </div>` : ''}

                <!-- Gift Card Modal -->
                ${mockupState.modalOpen === 'payment-gift' ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[90%] max-w-[400px] rounded-[32px] p-8 shadow-2xl text-center">
                        <div class="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i class="fa-solid fa-gift text-2xl"></i>
                        </div>
                        <h3 class="font-black text-2xl text-gray-900 uppercase mb-2">Redeem Gift Card</h3>
                        <p class="text-xs font-bold text-gray-400 mb-8 uppercase tracking-tight">Enter your 16-digit code below</p>
                        
                        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" class="w-full bg-gray-50 border border-gray-200 px-4 py-4 rounded-2xl font-black text-center text-gray-900 outline-none focus:border-violet-600 mb-6 tracking-widest">
                        
                        <div class="flex gap-4">
                            <button onclick="updateMockupState('modalOpen', null)" class="flex-1 py-4 font-black uppercase text-xs text-gray-400">Cancel</button>
                            <button onclick="updateMockupState('modalOpen', null)" class="flex-[2] bg-violet-600 text-white py-4 rounded-2xl font-black uppercase shadow-md active:scale-95 transition-all">Apply</button>
                        </div>
                    </div>
                </div>` : ''}

                <!-- Rewards Modal -->
                ${mockupState.modalOpen === 'payment-rewards' ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[95%] max-w-[420px] rounded-[32px] p-8 shadow-2xl animate-[slideUp_0.4s_ease-out]">
                        <div class="flex justify-between items-center mb-8">
                            <h3 class="font-black text-xl text-gray-900 uppercase">Your Punch Card</h3>
                            <button onclick="updateMockupState('modalOpen', null)" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        
                        <div class="bg-violet-50 rounded-[24px] p-6 border border-violet-100 mb-8">
                            <div class="grid grid-cols-5 gap-3 mb-6">
                                ${Array.from({ length: 10 }).map((_, i) => {
                                    let stampClass = 'bg-white border-violet-100 text-violet-100';
                                    if (i < 7) stampClass = 'bg-violet-600 border-violet-600 text-white shadow-sm';
                                    return `
                                    <div class="aspect-square rounded-full border-2 flex items-center justify-center ${stampClass}">
                                        <i class="fa-solid fa-mug-hot text-lg"></i>
                                    </div>
                                    `;
                                }).join('')}
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-black text-violet-600 uppercase tracking-widest mb-1">3 More Bobas Left!</p>
                                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-tight leading-tight">You've earned 7 stamps. Collect 10 to receive a free regular drink of your choice.</p>
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <span class="text-xs font-black text-gray-900 uppercase">Available Balance</span>
                                <span class="text-base font-black text-violet-600">$12.50</span>
                            </div>
                            <button class="w-full py-4 rounded-full bg-gray-100 text-gray-400 font-black uppercase text-xs tracking-widest cursor-not-allowed">Claim Free Drink (3 to go)</button>
                        </div>
                    </div>
                </div>` : ''}

                <!-- Custom Tip Modal -->
                ${mockupState.modalOpen === 'tip-other' ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[90%] max-w-[420px] rounded-[40px] overflow-hidden shadow-2xl animate-[slideUp_0.4s_ease-out] flex flex-col items-center pb-8">
                        <div class="w-full h-48 relative">
                            <img src="/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/friendly_barista_smiling_1773372724072.png" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                            <button onclick="updateMockupState('modalOpen', null)" class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-900 shadow-lg transition-transform active:scale-90"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        
                        <div class="px-8 text-center -mt-6 relative z-10 w-full">
                            <h3 class="font-black text-3xl text-gray-900 uppercase tracking-tighter mb-2 leading-none">Custom Tip</h3>
                            <p class="text-sm font-bold text-gray-500 uppercase tracking-tight mb-8">Choose an amount to support the team</p>
                            
                            <div class="relative mb-10 group">
                                <span class="absolute left-6 top-1/2 -translate-y-1/2 text-4xl font-black text-violet-600 opacity-40 group-focus-within:opacity-100 transition-opacity">$</span>
                                <input type="number" id="custom-tip-input" value="${mockupState.customTipAmount || ''}" placeholder="0.00" 
                                       class="w-full bg-gray-50 border-2 border-transparent focus:border-violet-600 px-12 py-6 rounded-[24px] text-4xl font-black text-center text-gray-900 outline-none transition-all placeholder:text-gray-200"
                                       onchange="mockupState.customTipAmount = this.value">
                            </div>

                            <button onclick="updateMockupState('tipPercentage', 'other'); updateMockupState('modalOpen', null);" 
                                    class="w-full bg-violet-600 text-white py-5 rounded-[24px] font-black uppercase text-lg shadow-[0_15px_30px_-10px_rgba(124,58,237,0.5)] active:scale-95 transition-all">
                                Add Tip
                            </button>
                        </div>
                    </div>
                </div>` : ''}

            </div>`;
    },

    'location-favorites': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0 border-b border-gray-100">
                    <button onclick="navigateTo('location-pick')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center">Favorite Locations</h1>
                    <div class="w-10"></div>
                </header>
                <div class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    <!-- Location 1 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight">McDowell Rd</h3>
                                <p class="text-xs text-gray-500 font-medium">8738 S. Emerald Dr</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-gray-100 text-gray-400 bg-white">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label (e.g. Gym)" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Gate codes, floor number, drop-off spot..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>

                    <!-- Location 2 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight">Camelback & Litchfield</h3>
                                <p class="text-xs text-gray-500 font-medium">13802 W Camelback Rd</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Delivery instructions for this location..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>
                </div>
                <div class="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                    <button onclick="navigateTo('location-pick')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black uppercase tracking-wider shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-[0.98] transition-all">Save Changes</button>
                </div>
            </div>
        `,
    'manage-favorites': () => {
        const isDesktop = currentViewport === 'desktop';
        const favorites = mockupState.favorites || [];

        return `
            <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Header Component -->
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Manage Favorites</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg><span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span></button>
                </header>

                <div class="p-6 md:p-8 max-w-4xl mx-auto w-full">
                    <div class="mb-8">
                        <h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-1 uppercase">Your Favorites</h1>
                        <p class="text-gray-600 font-medium">Keep track of the items you love most.</p>
                    </div>

                    ${favorites.length === 0 ? `
                        <div class="py-20 text-center flex flex-col items-center">
                            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
                                <i class="fa-solid fa-heart-crack text-4xl"></i>
                            </div>
                            <h3 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">No favorites yet</h3>
                            <p class="text-gray-500 font-medium mb-8">Start adding items you love to see them here!</p>
                            <button onclick="navigateTo('menu')" class="bg-violet-600 text-white px-8 py-3 rounded-full font-black uppercase text-sm shadow-lg tracking-wide">Explore Menu</button>
                        </div>
                    ` : `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${favorites.map(item => `
                            <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-5 hover:shadow-md transition-shadow relative group">
                                <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-gray-50">
                                    <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div class="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div class="text-violet-600 text-[9px] font-black tracking-widest uppercase mb-1">${item.category}</div>
                                        <h4 class="font-black text-gray-900 text-base leading-tight tracking-tight mb-1 pr-8">${item.name}</h4>
                                        <span class="font-black text-violet-600 text-sm">$${item.price.toFixed(2)}</span>
                                    </div>
                                    <div class="flex gap-2">
                                        <button onclick="navigateTo('customize')" class="text-violet-600 font-black text-[10px] uppercase tracking-widest hover:underline">Customize</button>
                                        <span class="text-gray-300">•</span>
                                        <button onclick="navigateTo('cart')" class="text-violet-600 font-black text-[10px] uppercase tracking-widest hover:underline">Add to Order</button>
                                    </div>
                                </div>
                                <button onclick="removeFavorite(${item.id})" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors shadow-sm" title="Remove from favorites">
                                    <i class="fa-solid fa-heart text-sm"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    `}

                    <div class="mt-12 p-8 bg-violet-600 rounded-3xl text-white text-center relative overflow-hidden shadow-xl">
                        <i class="fa-solid fa-gift absolute -right-6 -bottom-6 text-9xl text-white/10 rotate-12"></i>
                        <h3 class="text-2xl font-black tracking-tight mb-2 relative z-10 uppercase">Want more rewards?</h3>
                        <p class="text-violet-100 font-medium mb-6 relative z-10 max-w-sm mx-auto">Favorite 5 items to earn 500 bonus points on your next visit!</p>
                        <button onclick="navigateTo('menu')" class="bg-white text-violet-600 px-8 py-3 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 relative z-10">Browse Menu</button>
                    </div>
                </div>
            </div>`;
    }
};



routes['bobs-boba-auth'] = routes['restaurant-home'];

function applyViewport() {
    const wrapper = document.getElementById('preview-wrapper');
    const canvas = document.getElementById('canvas');
    if (!wrapper || !canvas) return;

    wrapper.classList.remove('view-mobile', 'view-tablet', 'view-desktop');
    document.querySelectorAll('.btn-toggle').forEach(b => b.classList.remove('active'));
    wrapper.classList.add(`view-${currentViewport}`);

    const btn = document.getElementById(`btn-${currentViewport}`);
    if (btn) btn.classList.add('active');

    if (currentViewport === 'desktop') {
        canvas.classList.remove('justify-center');
        canvas.classList.add('p-0');
    } else {
        canvas.classList.add('justify-center');
        canvas.classList.add('p-10');
    }
}

function renderPage() {
    const fbLabel = document.getElementById('current-fb-label');
    const rbLabel = document.getElementById('current-rb-label');
    
    // Update labels and active states
    const items = document.querySelectorAll('.dropdown-item');
    items.forEach(item => {
        const itemOnClick = item.getAttribute('onclick') || '';
        if (itemOnClick.includes(`'${currentPage}'`)) {
            item.classList.add('active');
            const parentId = item.parentElement.id;
            if (parentId === 'dropdown-menu-fb' && fbLabel) fbLabel.innerText = item.innerText.trim();
            if (parentId === 'dropdown-menu-rb' && rbLabel) rbLabel.innerText = item.innerText.trim();
        } else {
            item.classList.remove('active');
        }
    });

    // Fallback for labels
    if (fbLabel && !fbLabel.innerText.trim()) fbLabel.innerText = 'FareBites';
    if (rbLabel && !rbLabel.innerText.trim()) rbLabel.innerText = "i-Tea";

    // Close all menus
    ['dropdown-menu-fb', 'dropdown-menu-rb'].forEach(id => {
        const m = document.getElementById(id);
        if (m) m.classList.remove('show');
    });
    const viewport = document.getElementById('app-viewport');
    if (!viewport) return;
    viewport.innerHTML = routes[currentPage]
        ? routes[currentPage]()
        : `<div class="p-10 text-center uppercase font-black">404 - Page Not Found</div>`;
    viewport.scrollTop = 0;
    const canvasArea = document.getElementById('canvas');
    if (canvasArea) canvasArea.scrollTop = 0;
    persistAllState();
    document.title = `FareBites – ${PAGE_LABELS[currentPage] || currentPage}`;

    // Attach carousel scroll listener if on home page
    if (currentPage === 'restaurant-home') {
        const carousel = document.getElementById('home-carousel');
        if (carousel) {
            carousel.addEventListener('scroll', () => {
                const index = Math.round(carousel.scrollLeft / (carousel.offsetWidth + 16));
                for (let i = 0; i < 4; i++) {
                    const dot = document.getElementById(`carousel-dot-${i}`);
                    if (dot) {
                        if (i === index) {
                            dot.classList.remove('bg-violet-200');
                            dot.classList.add('bg-violet-600');
                        } else {
                            dot.classList.remove('bg-violet-600');
                            dot.classList.add('bg-violet-200');
                        }
                    }
                }
            });
        }
    }
}

function adjustBagQuantity(delta) {
    mockupState.bagQuantity = Math.max(0, mockupState.bagQuantity + delta);
    mockupState.noBagsSelected = false;
    persistAllState();
    
    // Update DOM directly to avoid flicker
    const display = document.getElementById('bag-count-display');
    if (display) display.innerText = mockupState.bagQuantity;
    
    const contBtn = document.getElementById('bag-continue-btn');
    if (contBtn) {
        if (mockupState.bagQuantity > 0) {
            contBtn.innerText = `Continue with ${mockupState.bagQuantity} bag(s)`;
            contBtn.setAttribute('onclick', "mockupState.modalOpen = null; navigateTo('checkout');");
        } else {
            contBtn.innerText = "I don't need bags";
            contBtn.setAttribute('onclick', "mockupState.modalOpen = null; mockupState.noBagsSelected = true; navigateTo('checkout');");
        }
    }
}

function selectItemAndNavigate(index) {
    const item = MENU_ITEMS[index];
    mockupState.selectedItem = item;
    // Reset quantity and customization defaults for new item
    mockupState.itemQuantity = 1;
    mockupState.sugarLevel = '50%';
    persistAllState();
    navigateTo('customize');
}

function updateMockupState(key, value) {
    mockupState[key] = value;
    persistAllState();

    const scroller = document.getElementById('order-details-scroller') ||
        document.getElementById('cart-scroller') ||
        document.getElementById('payment-scroller') ||
        document.querySelector('.overflow-y-auto') ||
        document.getElementById('app-viewport');

    const scrollPos = scroller ? scroller.scrollTop : 0;
    renderPage();

    const newScroller = document.getElementById('order-details-scroller') ||
        document.getElementById('cart-scroller') ||
        document.getElementById('payment-scroller') ||
        document.querySelector('.overflow-y-auto') ||
        document.getElementById('app-viewport');
    if (newScroller) newScroller.scrollTop = scrollPos;
}

function checkAuthPasscode() {
    const input = document.getElementById('auth-mobile-input');
    const error = document.getElementById('auth-error');
    const isBobs = !!document.querySelector('.text-violet-600'); // Check if we're on i-Tea/branded page

    if (input && input.value === '7413') {
        navigateTo('restaurant-home');
    } else if (error) {
        error.classList.remove('opacity-0');
        input.classList.add(isBobs ? 'border-violet-600' : 'border-red-500');
        input.focus();
    }
}

function removeFavorite(id) {
    mockupState.favorites = mockupState.favorites.filter(item => item.id !== id);
    persistAllState();
    renderPage();
}

function navigateTo(pageId) {
    persistAllState();
    if (pageId === currentPage) {
        renderPage();
        return;
    }
    const nextFile = PAGE_FILE_MAP[pageId] || `${pageId}.html`;
    window.location.href = nextFile;
}

function setViewport(size) {
    currentViewport = size;
    persistAllState();
    applyViewport();
    renderPage();
}

function renderDropdownMenu() {
    const fbPages = [
        { key: 'landing', label: 'Landing' },
        { key: 'home', label: 'Home (Logged In)' },
        { key: 'sign-in', label: 'Sign In' }
    ];

    const rbPages = [
        { key: 'restaurant-landing', label: 'Restaurant Landing' },
        { key: 'restaurant-sign-in', label: 'Restaurant Sign In' },
        { key: 'restaurant-home', label: 'Restaurant Home' },
        { key: 'restaurant-home-logo', label: 'Restaurant Home (Logo)' },
        { key: 'menu', label: 'Menu' },
        { key: 'location-pick', label: 'Location Pick' },
        { key: 'order-details', label: 'Order Details' },
        { key: 'customize', label: 'Customize Item' },
        { key: 'cart', label: 'Cart' },
        { key: 'checkout', label: 'Checkout' },
        { key: 'order-confirm', label: 'Order Confirm' },
        { key: 'order-status', label: 'Order Status' },
        { key: 'qr-code-guide', label: 'QR Code Guide' },
        { key: 'account', label: 'My Account' }
    ];

    const fbMenuHTML = fbPages.map(p => `<div class="dropdown-item ${currentPage === p.key ? 'active' : ''}" onclick="navigateTo('${p.key}')">${p.label}</div>`).join('');
    const rbMenuHTML = rbPages.map(p => `<div class="dropdown-item ${currentPage === p.key ? 'active' : ''}" onclick="navigateTo('${p.key}')">${p.label}</div>`).join('');

    const fbContainer = document.getElementById('dropdown-menu-fb');
    if (fbContainer) fbContainer.innerHTML = fbMenuHTML;

    const rbContainer = document.getElementById('dropdown-menu-rb');
    if (rbContainer) rbContainer.innerHTML = rbMenuHTML;
}

function renderWorkspaceHeader() {
    const header = document.getElementById('workspace-header');
    if (!header) return;

    header.innerHTML = `
            <div class="flex items-center gap-6">
                <span
                    class="font-black text-red-500 tracking-tighter text-xl cursor-pointer hover:opacity-80 transition-opacity"
                    onclick="navigateTo('home')">
                    FAREBITES <span class="text-white font-light text-xs opacity-50 ml-1" id="version-badge"></span>
                </span>
                <div class="h-6 w-[1px] bg-gray-700 mx-2"></div>

                <!-- FareBites Dropdown -->
                <div class="relative">
                    <button class="page-selector-btn" onclick="toggleMenu(event, 'dropdown-menu-fb')">
                        <span id="current-fb-label">FareBites</span>
                        <i class="fa-solid fa-chevron-down text-[10px]"></i>
                    </button>
                    <div id="dropdown-menu-fb" class="dropdown-menu"></div>
                </div>

                <!-- Restaurant Dropdown -->
                <div class="relative">
                    <button class="page-selector-btn" onclick="toggleMenu(event, 'dropdown-menu-rb')">
                        <span id="current-rb-label">i-Tea</span>
                        <i class="fa-solid fa-chevron-down text-[10px]"></i>
                    </button>
                    <div id="dropdown-menu-rb" class="dropdown-menu"></div>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <button class="btn-toggle" id="btn-desktop" onclick="setViewport('desktop')"><i
                        class="fa-solid fa-desktop mr-2"></i>Desktop</button>
                <button class="btn-toggle" id="btn-mobile" onclick="setViewport('mobile')"><i
                        class="fa-solid fa-mobile-screen-button mr-2"></i>Mobile</button>
                <button class="btn-toggle" id="btn-tablet" onclick="setViewport('tablet')"><i
                        class="fa-solid fa-tablet-screen-button mr-2"></i>Tablet</button>
            </div>
    `;
}

window.addEventListener('DOMContentLoaded', () => {
    renderWorkspaceHeader();

    // Dynamic version badge: V{month}.{day}.{24h}.{mm}
    const _v = new Date();
    const _vStr = `V${_v.getMonth() + 1}.${_v.getDate()}.${String(_v.getHours()).padStart(2,'0')}.${String(_v.getMinutes()).padStart(2,'0')}`;
    const badge = document.getElementById('version-badge');
    if (badge) badge.textContent = _vStr;

    applyViewport();
    renderPage();
    renderDropdownMenu();
});
