const PAGE_FILE_MAP = {
  landing: "landing.html",
  home: "index.html",
  "sign-in": "sign-in.html",
  "forgot-password": "forgot-password.html",
  rewards: "rewards.html",
  cart: "cart.html",
  customize: "order-customize.html",
  "customize-alt": "order-customize-alt.html",
  checkout: "checkout.html",
  "order-confirm": "order-confirm.html",
  "order-status": "order-status.html",
  "restaurant-home": "index.html",
  "restaurant-sign-in": "sign-in.html",
  "order-details": "order-details.html",
  "order-details-alt": "order-details-alt.html",
  "menu-scan": "menu-scan.html",
  menu: "menu.html",
  "menu-alt": "menu-alt.html",
  locations: "locations.html",
  "locations-alt": "locations-alt.html",
  "location-favorites": "location-favorites.html",
  login: "login.html",
  "sign-up": "sign-up.html",
  account: "profile.html",
  privacy: "privacy.html",
  dashboard: "dashboard.html",
  index: "index.html",
  "menu-favorites": "menu-favorites.html",
  directions: "directions.html",
  registration: "registration.html",
  sections: "sections.html",
  accessibility: "accessibility.html",
};
const PAGE_LABELS = {
  landing: "FareBites Landing Page",
  home: "FareBites Homepage (Logged In)",
  "sign-in": "Sign In / Sign Up",
  "forgot-password": "Forgot Password",
  rewards: "Rewards Program",
  cart: "Cart / Review",
  customize: "Customize Item",
  "customize-alt": "Customize Item (Alternative)",
  checkout: "Checkout",
  "order-confirm": "Order Confirmation",
  "order-status": "Order Status",
  "restaurant-home": "i-Tea Homepage",
  "restaurant-sign-in": "i-Tea Sign In",
  "order-details": "Order Details",
  "order-details-alt": "Order Details (Alternative)",
  "menu-scan": "Scan",
  menu: "Menu",
  "menu-alt": "Menu (Alternative)",
  locations: "Pick a Location",
  "locations-alt": "Pick a Location (Alternative)",
  "location-favorites": "Saved Locations",
  login: "Login (Phone)",
  "sign-up": "Sign Up",
  account: "My Account",
  privacy: "Privacy Policy",
  dashboard: "Merchant Dashboard",
  "menu-favorites": "Menu Favorites",
  directions: "Directions",
  registration: "Registration Form",
  sections: "Retired Sections",
  accessibility: "Web Accessibility",
};
const STORAGE_KEYS = {
  state: "farebitesMockupState",
  viewport: "farebitesViewport",
};
const assets = {
  featured:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  steak:
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
  bobaHero:
    "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
  boba1:
    "https://olodev.azurewebsites.net/imagesmenu/M7-Cr%C3%A8me-Br%C3%BBl%C3%A9e-Boba-Milk-Tea.jpg",
  boba2:
    "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
  boba3:
    "https://olodev.azurewebsites.net/imagesmenu/M8_Fresh-Taro-Puree-Boba-Latte.jpg",
  boba4: "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg",
  menuHero:
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
  cobbSalad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  shrimpTacos:
    "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
  burritoBowl:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&getSet=80",
  icedMatcha:
    "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80",
  restaurantHero:
    "https://order-iteausa.com/imagesmenu/N9-Fresh-Strawberry-Mango-Fruit-Tea.jpg",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8329606830704!2d-111.9525413!3d33.4211153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08de64c1bf87%3A0x7d022b7a9de3e878!2si-Tea%20Tempe!5e0!3m2!1sen!2sus!4v1716768000000!5m2!1sen!2sus",
};

const isLocalApp =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";
const API_BASE_URL = isLocalApp
  ? "https://olowebapidev2.azurewebsites.net"
  : "";

const LOCATIONS = [
  {
    name: "i-Tea - Tempe",
    address: "825 W UNIVERSITY, TEMPE, AZ",
    dist: "0.8 mi",
    fav: true,
    hours: "11:30 AM to 9:30 PM",
    locationId: 7,
    lat: 33.4223,
    lng: -111.9514,
  },
  {
    name: "i-Tea - ALAMEDA",
    address: "1860 PARK ST, Alameda, CA",
    dist: "1.2 mi",
    fav: false,
    hours: "12:00 PM to 9:30 PM",
    locationId: 9,
    lat: 37.7624,
    lng: -122.2435,
  },
  {
    name: "i-Tea - CASTRO VALLEY",
    address: "20666 REDWOOD RD, Castro Valley, CA",
    dist: "15.1 mi",
    fav: false,
    hours: "10:30 AM to 10:00 PM",
    locationId: 7,
    lat: 37.6974,
    lng: -122.0722,
  },
  {
    name: "i-Tea - UC DAVIS",
    address: "236 A ST, Davis, CA",
    dist: "45.0 mi",
    fav: false,
    hours: "11:00 AM to 8:00 PM",
    locationId: 10,
    lat: 38.5414,
    lng: -121.7482,
  },
  {
    name: "i-Tea - FREMONT #1",
    address: "43421 CHRISTY ST, Fremont, CA",
    dist: "18.2 mi",
    fav: false,
    hours: "11:30 AM to 9:00 PM",
    locationId: 7,
    lat: 37.5186,
    lng: -121.9702,
  },
  {
    name: "i-Tea - FRESNO",
    address: "345 E SHAW AVE, Fresno, CA",
    dist: "120.5 mi",
    fav: false,
    hours: "1:00 PM to 6:45 PM",
    locationId: 9,
    lat: 36.8087,
    lng: -119.7801,
  },
  {
    name: "i-Tea - MILPITAS",
    address: "766 E CALAVERAS BLVD, Milpitas, CA",
    dist: "25.3 mi",
    fav: false,
    hours: "11:30 AM to 9:20 PM",
    locationId: 10,
    lat: 37.4332,
    lng: -121.8795,
  },
  {
    name: "i-Tea - MORAGA",
    address: "1460 MORAGA RD, Moraga, CA",
    dist: "15.8 mi",
    fav: false,
    hours: "12:30 PM to 8:00 PM",
    locationId: 7,
    lat: 37.8351,
    lng: -122.1297,
  },
  {
    name: "i-Tea - NEWARK",
    address: "34925 NEWARK BLVD, Newark, CA",
    dist: "20.1 mi",
    fav: false,
    hours: "11:30 AM to 9:20 PM",
    locationId: 9,
    lat: 37.5255,
    lng: -122.0463,
  },
  {
    name: "i-Tea - OAKLAND",
    address: "388 9TH ST, 126A, Oakland, CA",
    dist: "8.5 mi",
    fav: true,
    hours: "11:00 AM to 6:00 PM",
    locationId: 9,
    lat: 37.8009,
    lng: -122.2709,
  },
  {
    name: "i-Tea - PITTSBURG",
    address: "212A LOVERIDGE RD, Pittsburg, CA",
    dist: "32.4 mi",
    fav: false,
    hours: "11:00 AM to 7:00 PM",
    locationId: 10,
    lat: 38.0135,
    lng: -121.8767,
  },
  {
    name: "i-Tea - PLEASANTON",
    address: "915 MAIN ST, STE C, Pleasanton, CA",
    dist: "28.0 mi",
    fav: false,
    hours: "11:30 AM to 7:30 PM",
    locationId: 7,
    lat: 37.6627,
    lng: -121.8744,
  },
  {
    name: "i-Tea - STOCKTON",
    address: "6846 STOCKTON BLVD, Sacramento, CA",
    dist: "85.2 mi",
    fav: false,
    hours: "10:20 AM to 8:00 PM",
    locationId: 9,
    lat: 38.487,
    lng: -121.432,
  },
  {
    name: "i-Tea - TEARAY",
    address: "253 KEARNY ST, San Francisco, CA",
    dist: "2.1 mi",
    fav: true,
    hours: "12:00 PM to 6:00 PM",
    locationId: 10,
    lat: 37.7905,
    lng: -122.4042,
  },
  {
    name: "i-Tea - SAN JOSE",
    address: "2936 ABORN SQUARE RD, San Jose, CA",
    dist: "35.6 mi",
    fav: false,
    hours: "11:30 AM to 9:30 PM",
    locationId: 7,
    lat: 37.3195,
    lng: -121.8157,
  },
  {
    name: "i-Tea - SAN LEANDRO",
    address: "177 PELTON CENTER WAY, San Leandro, CA",
    dist: "10.2 mi",
    fav: false,
    hours: "Open 24 Hours",
    locationId: 10,
    lat: 37.7247,
    lng: -122.1558,
  },
];

const DEFAULT_STATE = {
  fulfillmentMode: "In-store",
  orderTime: "ASAP",
  locationFilter: "Near Me",
  locationLabels: {
    "i-Tea - Tempe": "Home",
    "i-Tea - ALAMEDA": "Office",
  },
  selectedDay: "Today",
  selectedTimeSlot: "12:30 PM",
  sugarLevel: "50%",
  itemQuantity: 1,
  cartItemCount: 0,
  bagQuantity: 0,
  noBagsSelected: false,
  toppings: ["BOBA"],
  modalOpen: null,
  menuTab: "menu",
  paymentMethod: "card",
  selectedItem: null,
  tipPercentage: 15,
  customTipAmount: 0,
  orderDetailsExpanded: true,
  hamburgerOpen: false,
  menuSearchOpen: false,
  menuSearchQuery: "",
  favorites: [
    {
      id: 1,
      name: "M7 Crème Brûlée Boba Milk Tea",
      price: 5.75,
      image: assets.boba1,
      category: "Tea Spresso Series",
    },
    {
      id: 2,
      name: "P4 Brown Sugar Boba Latte",
      price: 5.75,
      image: assets.boba2,
      category: "Tea Spresso Series",
    },
    {
      id: 3,
      name: "M8 Taro Boba Purée Latte",
      price: 5.75,
      image: assets.boba3,
      category: "Tea Spresso Series",
    },
    {
      id: 4,
      name: "P1 Super Fruit Tea",
      price: 5.95,
      image: assets.boba4,
      category: "Tea Spresso Series",
    },
  ],
  featuredSlideIndex: 0,
  apiLocations: [],
  apiCategories: [],
  apiMenuItems: [],
  selectedLocationId: null,
  isScanning: false,
  // Phase 4: Cart & Order state
  cart: [], // Array of cart items with real menuItemId & selectedSubItems
  selectedRestaurantId: null, // Extracted from API sub-item data (e.g., 7 for i-Tea)
  selectedItemDetail: null, // Full MenuItemDetailDto from API for customize page
  lastOrder: null, // Stores last successful order API response
  locationTaxRate: 0.0925, // Tax rate from location menu response
  locationConvenienceFee: 0, // Convenience fee from location menu response
  _customizeModifyTypes: {}, // { [menuSubItemId]: { modifyType: 'add'|'extra'|'less'|'no', addPrice, extraPrice, lessPrice, noPrice } }
};

function getCurrentViewport() {
  if (window.innerWidth >= 1024) return "desktop";
  if (window.innerWidth >= 640) return "tablet";
  return "mobile";
}
let currentViewport = getCurrentViewport();

window.addEventListener("resize", () => {
  const newViewport = getCurrentViewport();
  if (newViewport !== currentViewport) {
    currentViewport = newViewport;
    renderPage();
  }
});
const _v = new Date();
const VERSION_STR = `V${_v.getMonth() + 1}.${_v.getDate()}.${String(_v.getHours()).padStart(2, "0")}.${String(_v.getMinutes()).padStart(2, "0")}`;
let currentPage = document.body.dataset.page || "restaurant-home";
let mockupState = loadMockupState();
mockupState.isLoading = false;
let isUpdatingMockupState = false;

function loadMockupState() {
  try {
    const saved = JSON.parse(
      sessionStorage.getItem(STORAGE_KEYS.state) || "null",
    );
    const state = saved ? { ...DEFAULT_STATE, ...saved } : { ...DEFAULT_STATE };

    // Load favorites map and labels from localStorage
    const favsMap = JSON.parse(
      localStorage.getItem("farebites_location_favorites") || "{}",
    );
    const isFirstLoad =
      localStorage.getItem("farebites_location_favorites") === null;

    if (isFirstLoad) {
      // Populate localStorage with initial favorites from LOCATIONS
      const initialFavs = {};
      LOCATIONS.forEach((l) => {
        if (l.fav) initialFavs[l.name] = true;
      });
      localStorage.setItem(
        "farebites_location_favorites",
        JSON.stringify(initialFavs),
      );
    } else {
      // Apply favorites from localStorage to LOCATIONS
      LOCATIONS.forEach((l) => {
        l.fav = !!favsMap[l.name];
      });
    }

    // Apply to state.apiLocations if it was loaded from sessionStorage
    if (state.apiLocations && state.apiLocations.length > 0) {
      const currentFavs = JSON.parse(
        localStorage.getItem("farebites_location_favorites") || "{}",
      );
      state.apiLocations.forEach((l) => {
        l.fav = !!currentFavs[l.name];
      });
    }

    // Load labels
    const savedLabels = JSON.parse(
      localStorage.getItem("farebites_location_labels") || "{}",
    );
    state.locationLabels = { ...state.locationLabels, ...savedLabels };

    return state;
  } catch (error) {
    return { ...DEFAULT_STATE };
  }
}

function syncCartToStorage() {
  const email = mockupState.userEmail || mockupState.userProfile?.email;
  if (mockupState.isLoggedIn && email) {
    const cartKey = `farebites_cart_${email.toLowerCase()}`;
    const cartData = {
      cart: mockupState.cart || [],
      cartItemCount: mockupState.cartItemCount || 0,
      bagQuantity: mockupState.bagQuantity || 0,
      noBagsSelected: mockupState.noBagsSelected || false,
    };
    localStorage.setItem(cartKey, JSON.stringify(cartData));
  }
}

function loadCartFromStorage() {
  const email = mockupState.userEmail || mockupState.userProfile?.email;
  if (mockupState.isLoggedIn && email) {
    const cartKey = `farebites_cart_${email.toLowerCase()}`;
    const saved = localStorage.getItem(cartKey);
    if (saved) {
      try {
        const cartData = JSON.parse(saved);
        mockupState.cart = cartData.cart || [];
        mockupState.cartItemCount = cartData.cartItemCount || 0;
        mockupState.bagQuantity = cartData.bagQuantity || 0;
        mockupState.noBagsSelected = cartData.noBagsSelected || false;
      } catch (e) {
        console.error("Failed to parse saved cart", e);
      }
    }
  }
}

function persistAllState() {
  sessionStorage.setItem(STORAGE_KEYS.state, JSON.stringify(mockupState));
  syncCartToStorage();

  // Also persist location favorites and labels to localStorage
  const favsMap = {};
  LOCATIONS.forEach((l) => {
    if (l.fav) favsMap[l.name] = true;
  });
  if (mockupState.apiLocations && mockupState.apiLocations.length > 0) {
    mockupState.apiLocations.forEach((l) => {
      if (l.fav) favsMap[l.name] = true;
    });
  }
  localStorage.setItem("farebites_location_favorites", JSON.stringify(favsMap));
  localStorage.setItem(
    "farebites_location_labels",
    JSON.stringify(mockupState.locationLabels || {}),
  );
}

function resolveImageUrl(url, defaultUrl) {
  if (!url) return defaultUrl || "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("images/")) return url; // local images

  // Check if it's a bare filename (no slashes)
  if (!url.includes("/")) {
    return `https://olodev.azurewebsites.net/imagesmenu/${url}`;
  }

  // Check if it's an old site asset path
  const isOldSiteAsset =
    url.startsWith("/imagescategories/") ||
    url.startsWith("/imagesmenu/") ||
    url.startsWith("/ImagesLogos/") ||
    url.startsWith("/ImagesMenu/") ||
    url.startsWith("imagescategories/") ||
    url.startsWith("imagesmenu/") ||
    url.startsWith("ImagesLogos/") ||
    url.startsWith("ImagesMenu/");

  if (isOldSiteAsset) {
    const cleanPath = url.startsWith("/") ? url.slice(1) : url;
    return `https://olodev.azurewebsites.net/${cleanPath}`;
  }

  // Otherwise return as is
  return url;
}

function getFallbackCategoryImg() {
  return "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg";
}

function getFallbackItemImg() {
  return "images/no-product-pic.png";
}

async function fetchLocations() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/Locations`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    if (data && data.length > 0) {
      // Filter to include only i-Tea locations
      const iteaLocations = data.filter(
        (loc) =>
          loc.locationName &&
          (loc.locationName.toLowerCase().includes("i-tea") ||
            loc.locationName.toLowerCase().includes("itea")),
      );
      if (iteaLocations.length > 0) {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const todayDay = days[new Date().getDay()];

        const mappedLocs = await Promise.all(
          iteaLocations.map(async (loc) => {
            const fallback = LOCATIONS.find(
              (l) =>
                l.name.toLowerCase() === (loc.locationName || "").toLowerCase(),
            );
            let hoursStr = "Hours unavailable";

            try {
              const [hRes, holRes] = await Promise.all([
                fetch(
                  `${API_BASE_URL}/api/RestaurantMenu/location/${loc.locationId}/hours`,
                ),
                fetch(
                  `${API_BASE_URL}/api/RestaurantMenu/location/${loc.locationId}/hours-with-holidays`,
                ),
              ]);

              let hData = null;
              let holData = null;

              if (hRes.ok) hData = await hRes.json();
              if (holRes.ok) holData = await holRes.json();

              const todayObj = new Date();
              const todayStr =
                todayObj.getFullYear() +
                "-" +
                String(todayObj.getMonth() + 1).padStart(2, "0") +
                "-" +
                String(todayObj.getDate()).padStart(2, "0");

              let isHoliday = false;
              if (
                holData &&
                holData.holidayHours &&
                Array.isArray(holData.holidayHours)
              ) {
                const holiday = holData.holidayHours.find(
                  (h) => h.date && h.date.startsWith(todayStr),
                );
                if (holiday) {
                  isHoliday = true;
                  if (holiday.isClosed) {
                    hoursStr = "Closed today";
                  } else if (
                    holiday.schedules &&
                    holiday.schedules.length > 0
                  ) {
                    const s = holiday.schedules[0];
                    if (s.startTime && s.endTime) {
                      hoursStr = `${s.startTime} to ${s.endTime}`;
                    }
                  } else {
                    hoursStr = "Closed today";
                  }
                }
              }

              if (
                !isHoliday &&
                hData &&
                hData.businessHours &&
                hData.businessHours[todayDay]
              ) {
                const todayH = hData.businessHours[todayDay];
                if (todayH.isClosed) {
                  hoursStr = "Closed today";
                } else if (todayH.startTime && todayH.endTime) {
                  hoursStr = `${todayH.startTime} to ${todayH.endTime}`;
                }
              }
            } catch (e) {
              console.warn(`Could not fetch hours for loc ${loc.locationId}`);
            }

            return {
              locationId: loc.locationId,
              name: loc.locationName || "Unnamed Location",
              address:
                `${loc.address || ""}, ${loc.city || ""}, ${loc.state || ""} ${loc.zipCode || ""}`
                  .trim()
                  .replace(/^,|,$/g, "")
                  .trim(),
              dist: "Nearby",
              fav: false,
              hours: hoursStr,
              lat: loc.latitude || (fallback ? fallback.lat : 37.7749),
              lng: loc.longitude || (fallback ? fallback.lng : -122.4194),
            };
          }),
        );

        mockupState.apiLocations = mappedLocs;
        persistAllState();
        if (currentPage === "locations") renderPage();
      }
    }
  } catch (error) {
    console.error("Failed to fetch locations from API, using fallback:", error);
  }
}

async function fetchMenuAndItems(locationId) {
  if (!locationId) return;
  mockupState.isLoading = true;
  renderPage();
  try {
    const menuResponse = await fetch(
      `${API_BASE_URL}/api/RestaurantMenu/location/${locationId}/menu`,
    );
    if (!menuResponse.ok) throw new Error("Menu response was not ok");
    const menuData = await menuResponse.json();

    if (menuData && menuData.categories) {
      // Store location-specific pricing info
      if (menuData.taxRate != null)
        mockupState.locationTaxRate = menuData.taxRate;
      if (menuData.convenienceFee != null)
        mockupState.locationConvenienceFee = menuData.convenienceFee;

      const filteredCategories = menuData.categories.filter((cat) => {
        const name = (cat.name || "").toLowerCase().trim();
        return name !== "bag" && name !== "bags";
      });
      mockupState.apiCategories = filteredCategories.map((cat) => ({
        categoryId: cat.categoryId,
        name: cat.name,
        imgUrl: resolveImageUrl(cat.imgUrl, getFallbackCategoryImg()),
      }));

      let allItems = [];
      for (const cat of filteredCategories) {
        try {
          const itemsResponse = await fetch(
            `${API_BASE_URL}/api/RestaurantMenu/location/${locationId}/category/${cat.categoryId}/items`,
          );
          if (itemsResponse.ok) {
            const itemsData = await itemsResponse.json();
            if (itemsData) {
              allItems = allItems.concat(
                itemsData.map((item) => ({
                  id: item.menuItemId,
                  name: item.name,
                  description: item.description || "",
                  price: item.price,
                  image: resolveImageUrl(
                    item.productImage || item.image,
                    getFallbackItemImg(),
                  ),
                  category: cat.name,
                  categoryId: cat.categoryId,
                })),
              );
            }
          }
        } catch (catError) {
          console.error(
            `Failed to fetch items for category ${cat.name}:`,
            catError,
          );
        }
      }
      mockupState.apiMenuItems = allItems;
      persistAllState();
    }
  } catch (error) {
    console.error("Failed to fetch menu and items from API:", error);
  } finally {
    mockupState.isLoading = false;
    renderPage();
  }
}

function getActiveCategories() {
  if (mockupState.apiCategories && mockupState.apiCategories.length > 0) {
    return mockupState.apiCategories
      .filter((cat) => {
        const name = (cat.name || "").toLowerCase().trim();
        return name !== "bag" && name !== "bags";
      })
      .map((cat) => ({
        name: cat.name,
        id: `category-section-${cat.categoryId}`,
        img:
          cat.imgUrl ||
          "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg",
        categoryId: cat.categoryId,
        categoryKey: cat.name,
      }));
  }
  return [
    {
      name: "New Items",
      id: "new-items-section",
      img: "https://olodev.azurewebsites.net/imagescategories/New%20Items.jpg",
      categoryKey: "New Items",
    },
    {
      name: "Teaspresso Series",
      id: "teaspresso-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Teaspresso.jpg",
      categoryKey: "Teaspresso Series",
    },
    {
      name: "Milk Tea Specialty",
      id: "milk-tea-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Milk%20Tea.jpg",
      categoryKey: "Milk Tea Specialty",
    },
    {
      name: "i-Tea Fruit Tea",
      id: "fruit-tea-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Fruit%20Tea.jpg",
      categoryKey: "i-Tea Fruit Tea",
    },
    {
      name: "Sea Salt Kreama",
      id: "sea-salt-kreama-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Kreama.jpg",
      categoryKey: "Sea Salt Kreama",
    },
    {
      name: "Summer Frosty",
      id: "summer-frosty-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Frosty.jpg",
      categoryKey: "Summer Frosty",
    },
    {
      name: "Signature Iced Milk",
      id: "signature-iced-milk-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Signature%20Ice%20Milk.jpg",
      categoryKey: "Signature Iced Milk",
    },
    {
      name: "Dessert Drinks",
      id: "dessert-drinks-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Dessert%20Drink%20Series.jpg",
      categoryKey: "Dessert Drinks",
    },
    {
      name: "Hot Drink",
      id: "hot-drink-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Hot%20Drink.jpg",
      categoryKey: "Hot Drink",
    },
    {
      name: "Premium Tea Taiwan",
      id: "premium-tea-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Premium%20Tea.jpg",
      categoryKey: "Premium Tea Taiwan",
    },
    {
      name: "Cold Brew",
      id: "cold-brew-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Cold%20Brew%201.jpg",
      categoryKey: "Cold Brew ",
    },
    {
      name: "Snack Menu",
      id: "snack-menu-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Snack.jpg",
      categoryKey: "Snack Menu",
    },
    {
      name: "Okinawa Onigiri Series",
      id: "onigiri-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Okinawa%20Onigiri.jpg",
      categoryKey: "Okinawa Onigiri Series",
    },
    {
      name: "Food Menu",
      id: "food-menu-section",
      img: "https://olodev.azurewebsites.net/imagescategories/Food.jpg",
      categoryKey: "Food Menu",
    },
  ];
}

function getActiveMenuItems() {
  if (mockupState.apiMenuItems && mockupState.apiMenuItems.length > 0) {
    return mockupState.apiMenuItems.filter((item) => {
      const cat = (item.category || "").toLowerCase().trim();
      const name = (item.name || "").toLowerCase().trim();
      return (
        cat !== "bag" && cat !== "bags" && name !== "bag" && name !== "bags"
      );
    });
  }
  return MENU_ITEMS;
}

const MENU_ITEMS = [
  // Tea Spresso Series (11 items)
  {
    name: "M7 Crème Brûlée Boba Milk Tea",
    description: "377 calories to 594 calories",
    price: 5.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/M7-Cr%C3%A8me-Br%C3%BBl%C3%A9e-Boba-Milk-Tea.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "M8 Taro Boba Purée Latte",
    description: "Come With Fresh Taro Puree, Freshly Made Taro Boba",
    price: 5.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/M8_Fresh-Taro-Puree-Boba-Latte.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "M9 3G Fresh Taro Boba Latte",
    description:
      "Come With Mashed Taro, Grass Jelly, Red Bean, and Fresh Taro Boba",
    price: 5.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/M9_3G-Fresh-Taro-Boba-Latte.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P1 Super Fruit Tea",
    description: "Comes with Pineapple, Passion Fruit, Apple, Lime, and Orange",
    price: 5.95,
    image: "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P2 Super Lime Slushium",
    description: "276 calories",
    price: 5.25,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P2-Super-Lime-Sijichun.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P3 Super Grapefruit",
    description: "239 calories to 339 calories",
    price: 5.25,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P3-Super-Grapefruit.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P4 Brown Sugar Boba Latte",
    description: "356 calories to 478 calories",
    price: 5.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P5 Sun Moon Lake Black Tea Cheema",
    description: "168 calories to 354 calories",
    price: 6.5,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P5-Sun-Moon-Lake-Cheesma.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P7 Fresh Mango Cheema",
    description: "301 calories to 348 calories",
    price: 6.5,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P7-Mango-Fruity-Tea-Cheezma.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P8 Fresh Dragon Fruit Cheema",
    description: "355 calories to 396 calories",
    price: 6.5,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P8-Dragon-Fruity-Cheezma.jpg",
    category: "Tea Spresso Series",
  },
  {
    name: "P9 Fresh Strawberry Cheema",
    description: "301 calories to 345 calories",
    price: 6.5,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/P9-Strawberry-Fruity-Cheezma.jpg",
    category: "Tea Spresso Series",
  },
  // Fruit Tea (4 items)
  {
    name: "D1 Jade Lemon Tea",
    description: "238 calories",
    price: 4.95,
    image: "https://olodev.azurewebsites.net/imagesmenu/D1-Jade-Lemon-Tea.jpg",
    category: "Fruit Tea",
  },
  {
    name: "D2 Peach Fruit Tea",
    description: "Comes with Peach Popping Boba (190 calories to 250 calories)",
    price: 4.75,
    image: "https://olodev.azurewebsites.net/imagesmenu/D2-Peach-Fruit-Tea.jpg",
    category: "Fruit Tea",
  },
  {
    name: "D3 Pineapple Fruit Tea",
    description:
      "Comes with Boba and Pineapple Jelly (170 calories to 229 calories)",
    price: 4.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/M9_3G-Fresh-Taro-Boba-Latte.jpg",
    category: "Fruit Tea",
  },
  {
    name: "D4 Guava Fruit Tea",
    description:
      "Comes with Boba and Litchi Jelly (167 calories to 226 calories)",
    price: 4.75,
    image: "https://olodev.azurewebsites.net/imagesmenu/D4-Guava-Fruit-Tea.jpg",
    category: "Fruit Tea",
  },
  {
    name: "J1 White Peach Oolong",
    description: "Refreshing white peach flavor with premium oolong tea.",
    price: 4.95,
    image: "https://olodev.azurewebsites.net/imagesmenu/D2-Peach-Fruit-Tea.jpg",
    category: "Fruit Tea",
  },
  // Milk Tea (4 items)
  {
    name: "B1 Signature Boba Milk Tea",
    description: "223 calories to 357 calories",
    price: 4.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/B1-Signature-Boba-Milk-Tea.jpg",
    category: "Milk Tea",
  },
  {
    name: "B2 Milk Tea with Pudding",
    description: "255 calories to 378 calories",
    price: 4.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/B2-Signature-Milk-Tea-with-Pudding.jpg",
    category: "Milk Tea",
  },
  {
    name: "B3 Milk Tea with Grass Jelly",
    description: "208 calories to 331 calories",
    price: 4.75,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/B3-Signature-Milk-Tea-with-Grass-Jelly.jpg",
    category: "Milk Tea",
  },
  {
    name: "B4 Milk Tea Tofuhua & Red Bean",
    description: "223 calories to 314 calories",
    price: 4.95,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/B4-Tofuhua-Red-Bean-Milk-Tea.jpg",
    category: "Milk Tea",
  },
  // Dessert Drink (3 items)
  {
    name: "K4 Fresh Mango Sago Dessert",
    description: "513 calories",
    price: 5.95,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/K4-Fresh-Mango-Sago.jpg",
    category: "Dessert Drink",
  },
  {
    name: "K8 Taro Sago Dessert",
    description: "513 calories",
    price: 5.95,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/K8-Taro-Sago-Dessert.jpg",
    category: "Dessert Drink",
  },
  {
    name: "M6 Durian Sago Dessert",
    description: "632 calories",
    price: 6.5,
    image:
      "https://olodev.azurewebsites.net/imagesmenu/M6-Durian-Sago-Dessert.jpg",
    category: "Dessert Drink",
  },
];

function toggleMenu(e, menuId) {
  e.stopPropagation();
  const allMenus = [
    "dropdown-menu-fb",
    "dropdown-menu-rb",
    "all-pages-dropdown",
    "user-profile-dropdown",
    "location-dropdown-order-details",
    "location-dropdown-order-details-alt",
    "location-dropdown-menu",
    "location-dropdown-menu-alt",
  ];
  allMenus.forEach((id) => {
    const menu = document.getElementById(id);
    if (!menu) return;
    if (id === menuId) {
      const isShowing = menu.classList.contains("show");
      if (isShowing) {
        menu.classList.remove("show");
        menu.classList.add("hidden");
      } else {
        menu.classList.add("show");
        menu.classList.remove("hidden");
      }
    } else {
      menu.classList.remove("show");
      menu.classList.add("hidden");
    }
  });
}

document.addEventListener("click", () => {
  [
    "dropdown-menu-fb",
    "dropdown-menu-rb",
    "all-pages-dropdown",
    "user-profile-dropdown",
    "location-dropdown-order-details",
    "location-dropdown-order-details-alt",
    "location-dropdown-menu",
    "location-dropdown-menu-alt",
  ].forEach((id) => {
    const menu = document.getElementById(id);
    if (menu) {
      menu.classList.remove("show");
      menu.classList.add("hidden");
    }
  });
});

function openHamburger() {
  mockupState.hamburgerOpen = true;
  persistAllState();
  renderPage();
}

function closeHamburger() {
  mockupState.hamburgerOpen = false;
  persistAllState();
  renderPage();
}

function hamburgerDrawerHTML() {
  const isLoggedIn = mockupState.isLoggedIn;
  const userName = mockupState.userName || "Guest";

  const navItems = [
    { label: "Rewards", icon: "fa-award", page: "rewards" },
    { label: "Home", icon: "fa-house", page: "restaurant-home" },
    { label: "Menu", icon: "fa-utensils", page: "menu" },
    { label: "Locations", icon: "fa-location-dot", page: "locations" },
    { label: "Cart", icon: "fa-bag-shopping", page: "cart" },
    {
      label: "Order Status",
      icon: "fa-clock-rotate-left",
      page: "order-status",
    },
    { label: "Scan QR code for menu", icon: "fa-qrcode", page: "menu-scan" },
  ];

  if (isLoggedIn) {
    navItems.push({
      label: "Log Out",
      icon: "fa-arrow-right-from-bracket",
      page: "logout",
    });
  } else {
    navItems.push({
      label: "Log In",
      icon: "fa-arrow-right-to-bracket",
      page: "sign-in",
    });
  }

  return `
        <div class="absolute inset-0 z-[500] flex">
            <!-- Drawer Panel -->
            <div class="w-[78%] max-w-[310px] bg-white h-full flex flex-col shadow-2xl relative z-10">
                <!-- Header -->
                <div class="px-6 pt-10 pb-3 border-b border-gray-100 flex items-start justify-between">
                    <div>
                        ${
                          isLoggedIn
                            ? `
                            <p class="font-black text-[22px] text-gray-900 leading-tight">Hi, ${userName}</p>
                            <button onclick="closeHamburger(); navigateTo('account');" class="text-[17px] font-black text-violet-600 mt-2 hover:underline">My Account</button>
                        `
                            : `
                            <p class="font-black text-[22px] text-gray-900 leading-tight">Hi, Guest</p>
                            <button onclick="closeHamburger(); navigateTo('sign-in');" class="text-[17px] font-black text-violet-600 mt-2 hover:underline">Sign In</button>
                        `
                        }
                    </div>
                    <button onclick="closeHamburger()" class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 shrink-0 mt-1">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>
                <!-- Nav Links -->
                <nav class="flex-1 overflow-y-auto py-3">
                    ${navItems
                      .map((item) => {
                        const clickAction =
                          item.page === "logout"
                            ? "closeHamburger(); signOutUser();"
                            : `closeHamburger(); navigateTo('${item.page}');`;
                            
                        if (item.label === "Rewards") {
                          return `
                            <div class="border-b border-gray-100 px-4 py-1.5">
                                <button onclick="${clickAction}" 
                                    class="w-full text-left bg-violet-50 rounded-xl px-4 py-2 border border-violet-200 shadow-sm relative overflow-hidden flex items-center gap-4 transition-colors hover:bg-violet-100 group">
                                    <!-- Ribbon -->
                                    <div class="absolute -right-6 -top-6 w-16 h-16 bg-violet-200 rotate-45 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                                    
                                    <div class="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-md relative z-10 shrink-0">
                                        <i class="fa-solid fa-award text-lg"></i>
                                    </div>
                                    <div class="flex flex-col relative z-10">
                                        <span class="text-[17px] font-black tracking-tight text-violet-900">
                                            ${item.label}
                                        </span>
                                        <span class="text-[11px] font-bold text-violet-600 uppercase tracking-widest mt-0.5">View your points</span>
                                    </div>
                                </button>
                            </div>`;
                        }

                        return `
                        <div class="border-b border-gray-100">
                            <button onclick="${clickAction}" 
                                class="w-full flex items-center gap-4 text-left px-6 py-4 text-[17px] font-black tracking-tight transition-colors hover:bg-violet-50 ${
                                  currentPage === item.page
                                    ? "text-violet-600"
                                    : "text-gray-900"
                                }">
                                <i class="fa-solid ${item.icon} text-violet-400 w-5 text-center"></i>
                                ${item.label}
                            </button>
                        </div>`;
                      })
                      .join("")}
                    
                    <div class="px-6 py-4 mt-2">
                        <div class="font-black text-[22px] text-gray-900 leading-tight mb-3">Pages</div>
                        <div class="flex flex-col gap-3">
                            <a href="index.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">index.html</a>
                            <a href="menu.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">menu.html</a>
                            <a href="menu-alt.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">menu-alt.html</a>
                            <a href="locations.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">locations.html</a>
                            <a href="location-favorites.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">location-favorites.html</a>
                            <a href="cart.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">cart.html</a>
                            <a href="checkout.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">checkout.html</a>
                            <a href="order-customize.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">order-customize.html</a>
                            <a href="order-confirm.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">order-confirm.html</a>
                            <a href="order-status.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">order-status.html</a>
                            <a href="order-details.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">order-details.html</a>
                            <a href="order-details-alt.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">order-details-alt.html</a>
                            <a href="track-order.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">track-order.html</a>
                            <a href="profile.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">profile.html</a>
                            <a href="registration.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">registration.html</a>
                            <a href="sign-in.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">sign-in.html</a>
                            <a href="menu-favorites.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">menu-favorites.html</a>
                            <a href="menu-scan.html" class="text-[19px] font-bold text-gray-700 hover:text-violet-600 transition-colors">menu-scan.html</a>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- Backdrop -->
            <div class="flex-1 bg-black/50 backdrop-blur-[2px]" onclick="closeHamburger()"></div>
        </div>
    `;
}

function renderMenuPage(isAlternative) {
  const isDesktop = currentViewport === "desktop";
  const categoryModalClass =
    mockupState.modalOpen === "categories" ? "flex" : "hidden";

  const categories = getActiveCategories();
  
  const allItems = getActiveMenuItems();
  let featuredItems = [];
  if (mockupState.apiMenuItems && mockupState.apiMenuItems.length > 0) {
      featuredItems = allItems.filter(item => item.category === "New Items" || item.categoryKey === "New Items" || item.categoryId === "new-items-section");
  }

  const mode = mockupState.fulfillmentMode || "In-store";
  let modeText = "IN-STORE PICKUP";
  if (mode === "In-store" || mode === "In-Store") modeText = "IN-STORE PICKUP";
  else if (mode === "Drive Through" || mode === "Drive-thru")
    modeText = "DRIVE-THRU";
  else if (mode === "Curbside") modeText = "CURBSIDE PICKUP";
  else if (mode === "Dine In" || mode === "Dine-In") modeText = "DINE-IN";
  else if (mode === "Delivery") modeText = "DELIVERY";
  else modeText = mode.toUpperCase() + " PICKUP";

  const timeText =
    mockupState.orderTime === "Later"
      ? `at ${mockupState.selectedTimeSlot}`
      : "ASAP";

  const selectedLoc =
    mockupState.apiLocations.find(
      (loc) => loc.locationId === mockupState.selectedLocationId,
    ) ||
    LOCATIONS.find(
      (loc) => loc.locationId === mockupState.selectedLocationId,
    ) ||
    LOCATIONS[0];
  const addressText =
    mockupState.selectedAddress ||
    (selectedLoc ? selectedLoc.address : "825 W UNIVERSITY, TEMPE, AZ");

  const locationTitle = selectedLoc ? selectedLoc.name : "i-Tea - Tempe";
  const locationAddress = addressText;
  const locationObj = selectedLoc || {};
  const hours = locationObj.hours || "11:30 AM to 9:30 PM";
  const closeTimeStr = hours.split(" to ")[1] || "9:30 PM";
  const closeTime = closeTimeStr;
  const getOrderCutoffTime = (timeStr, offsetMinutes) => {
    const t = timeStr.trim().toUpperCase();
    let match = t.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/);
    if (!match) return timeStr;
    let h = parseInt(match[1]);
    let m = parseInt(match[2] || "0");
    let p = match[3] || "PM";
    let totalMins = (h % 12) * 60 + m + (p === "PM" ? 12 * 60 : 0);
    totalMins -= offsetMinutes;
    if (totalMins < 0) totalMins += 24 * 60;
    let nh = Math.floor(totalMins / 60);
    let nm = totalMins % 60;
    let np = nh >= 12 ? "PM" : "AM";
    let dh = nh % 12 || 12;
    return `${dh}:${nm.toString().padStart(2, "0")} ${np}`;
  };
  const orderCutoffTime = getOrderCutoffTime(closeTime, 20);
  return `
        <div class="flex flex-col h-full bg-[#f9fafb] relative ${!isDesktop && mockupState.modalOpen ? "overflow-hidden" : "overflow-y-auto"} scrollbar-hide">
            <!-- Compact Sticky Header: ≡ | 🔍 | i-Tea logo | ⭐ | 🛍 -->
            <header class="bg-white border-b border-gray-100 sticky top-0 z-50 shrink-0">
                <div class="px-3 py-2 flex items-center gap-2 w-full max-w-[1080px] mx-auto">
                    <!-- Left: Hamburger -->
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors shrink-0">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                    <!-- Search icon -->
                    ${
                      !isAlternative
                        ? `
                    <button onclick="updateMockupState('menuSearchOpen', ${!mockupState.menuSearchOpen}); updateMockupState('menuSearchQuery', '');" class="w-10 h-10 flex items-center justify-center shrink-0 transition-colors ${mockupState.menuSearchOpen ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}">
                        <i class="fa-solid ${mockupState.menuSearchOpen ? "fa-xmark" : "fa-magnifying-glass"} text-xl"></i>
                    </button>
                    `
                        : ""
                    }
                    <!-- Center: i-Tea logo -->
                    <div class="flex-1 flex items-center justify-center">
                        <img src="images/i-tea-logo-new.png" class="h-9 w-auto object-contain" alt="i-Tea">
                    </div>
                    <!-- Right: Cart -->
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </button>
                </div>

                <!-- Inline Search Bar (expands below header when open) -->
                ${
                  mockupState.menuSearchOpen && !isAlternative
                    ? `
                <div class="px-3 pb-2 w-full max-w-[1080px] mx-auto">
                    <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-3">
                        <i class="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
                        <input
                            type="text"
                            id="menu-search-input"
                            placeholder="Search menu..."
                            value="${mockupState.menuSearchQuery || ""}"
                            oninput="mockupState.menuSearchQuery = this.value; persistAllState(); renderPage();"
                            class="flex-1 bg-transparent text-gray-900 text-sm font-bold outline-none placeholder:text-gray-400 placeholder:font-normal"
                            autofocus
                        >
                        ${mockupState.menuSearchQuery ? `<button onclick="updateMockupState('menuSearchQuery', '');" class="text-gray-400 hover:text-gray-600"><i class="fa-solid fa-circle-xmark"></i></button>` : ""}
                    </div>
                </div>
                `
                    : ""
                }


            </header>

            ${
              !isDesktop
                ? `
            <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2 flex items-center justify-between relative z-50">
                <button onclick="navigateTo('restaurant-home')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                    <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                    <span>Back</span>
                </button>
                <div>
                    <button onclick="toggleMenu(event, 'location-dropdown-menu')" class="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-bold hover:text-violet-600 hover:bg-violet-100 px-2 py-1.5 rounded-lg transition-colors text-right cursor-pointer">
                        <i class="fa-solid fa-location-dot text-violet-600"></i>
                        <span class="truncate max-w-[140px] sm:max-w-[200px] tracking-wider font-medium">${locationAddress.replace(/, [A-Z]{2}(\s\\d{5})?$/, "")}</span>
                    </button>
                    <!-- Dropdown Menu -->
                    <div id="location-dropdown-menu" class="hidden absolute left-4 right-4 sm:left-auto sm:right-4 sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                        <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                            <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationTitle}</h4>
                            <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                            <div class="space-y-3 text-sm">
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                        <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "11:30 AM to 9:30 PM"}</span>
                                        <span class="text-gray-800 font-bold block text-sm mt-1">Closes at ${closeTime}</span>
                                        <span class="text-red-500 font-medium block text-xs leading-tight mt-1">All orders must be placed by ${orderCutoffTime} and picked up before close at ${closeTime}.</span>
                                    </div>
                                </div>
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-solid fa-phone text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Phone</span>
                                        <span class="text-gray-600 font-medium text-sm">${locationObj.phone || "(480) 968-3568"}</span>
                                    </div>
                                </div>
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-solid fa-car text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Drive-Thru / Curbside</span>
                                        <span class="text-gray-600 font-medium text-xs leading-relaxed block">Available during regular business hours. Pull up to the front for curbside.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 pt-4 border-t border-gray-100">
                                <button onclick="navigateTo('locations')" class="w-full text-center text-sm font-black text-violet-600 uppercase tracking-widest hover:text-violet-700 transition-colors py-2">Change Location</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
                : ""
            }

            <!-- Alternative Mode Header (states Menu, fulfillment method, time & address + search/tabs) -->
            ${
              isAlternative
                ? `
            <div class="bg-white border-b border-gray-100 flex flex-col items-center justify-center text-center w-full shrink-0 animate-[fadeIn_0.3s_ease-out]">
                <!-- Location details block -->
                <div class="py-3.5 px-4 w-full relative">
                    <h1 class="font-branding font-black text-[#1f0b35] text-[32px] tracking-tight leading-none uppercase mb-2">Menu</h1>
                    <div onclick="toggleMenu(event, 'location-dropdown-menu-alt')" class="flex flex-col items-center cursor-pointer group hover:opacity-85 transition-opacity">
                        <span class="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">
                            ${modeText}
                        </span>
                        <span class="text-[10px] font-bold text-violet-600 uppercase tracking-wide leading-none mb-2">
                            ${timeText}
                        </span>
                        <div class="flex items-center justify-center gap-1.5 text-sm text-[#1f0b35] font-black tracking-tight uppercase">
                            <span>${addressText}</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-violet-600 transition-transform group-hover:translate-y-0.5"></i>
                        </div>
                    </div>
                    <!-- Dropdown Menu -->
                    <div id="location-dropdown-menu-alt" class="hidden absolute left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                        <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                            <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationTitle}</h4>
                            <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                            <div class="space-y-3 text-sm">
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                        <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "11:30 AM to 9:30 PM"}</span>
                                        <span class="text-gray-800 font-bold block text-sm mt-1">Closes at ${closeTime}</span>
                                        <span class="text-red-500 font-medium block text-xs leading-tight mt-1">All orders must be placed by ${orderCutoffTime} and picked up before close at ${closeTime}.</span>
                                    </div>
                                </div>
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-solid fa-phone text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Phone</span>
                                        <span class="text-gray-600 font-medium text-sm">${locationObj.phone || "(480) 968-3568"}</span>
                                    </div>
                                </div>
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-solid fa-car text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Drive-Thru / Curbside</span>
                                        <span class="text-gray-600 font-medium text-xs leading-relaxed block">Available during regular business hours. Pull up to the front for curbside.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 pt-4 border-t border-gray-100">
                                <button onclick="navigateTo('locations')" class="w-full text-center text-sm font-black text-violet-600 uppercase tracking-widest hover:text-violet-700 transition-colors py-2">Change Location</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tabs & Search Row -->
                <div class="border-t border-gray-100 px-4 py-2 w-full max-w-[1080px] mx-auto min-h-[48px] flex items-center justify-center">
                    ${
                      mockupState.menuSearchOpen
                        ? `
                        <!-- Expandable Search Input -->
                        <div class="flex items-center w-full gap-3 animate-[fadeIn_0.2s_ease-out]">
                            <div class="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
                                <i class="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
                                <input
                                    type="text"
                                    id="menu-search-input"
                                    placeholder="Search menu..."
                                    value="${mockupState.menuSearchQuery || ""}"
                                    oninput="mockupState.menuSearchQuery = this.value; persistAllState(); renderPage();"
                                    class="flex-1 bg-transparent text-gray-900 text-sm font-bold outline-none placeholder:text-gray-400 placeholder:font-normal"
                                    autofocus
                                >
                                ${
                                  mockupState.menuSearchQuery
                                    ? `
                                    <button onclick="updateMockupState('menuSearchQuery', '');" class="text-gray-400 hover:text-gray-600">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </button>
                                `
                                    : ""
                                }
                            </div>
                            <button onclick="updateMockupState('menuSearchOpen', false); updateMockupState('menuSearchQuery', '');" class="text-sm font-black text-violet-600 uppercase tracking-wide hover:opacity-85 transition-opacity">
                                Cancel
                            </button>
                        </div>
                    `
                        : `
                        <!-- Search Icon (Right Aligned) -->
                        <div class="flex items-center justify-end w-full">
                            <button onclick="updateMockupState('menuSearchOpen', true); updateMockupState('menuSearchQuery', '');" class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-violet-600 transition-colors shrink-0">
                                <i class="fa-solid fa-magnifying-glass text-lg"></i>
                            </button>
                        </div>
                    `
                    }
                </div>
            </div>
            `
                : ""
            }

            <!-- Rewards Modal -->
            ${
              mockupState.modalOpen === "rewards"
                ? `
            <div class="modal-overlay z-[200]" onclick="if(event.target===this){mockupState.modalOpen=null;navigateTo(currentPage);}">
                <div class="bg-white w-[92%] max-w-[380px] rounded-[32px] p-6 relative shadow-2xl animate-[slideUp_0.3s_ease-out]">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight">Your Rewards</h2>
                        <button onclick="mockupState.modalOpen=null;navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    
                    <div class="bg-violet-50 rounded-2xl p-6 border border-violet-100 relative overflow-hidden mb-6">
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

                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-ticket text-violet-600"></i>
                                <span class="text-sm font-bold text-gray-700 uppercase tracking-tight">Free Topping Coupon</span>
                            </div>
                            <span class="text-xs font-black text-violet-600">REDEEM</span>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-percent text-violet-600"></i>
                                <span class="text-sm font-bold text-gray-700 uppercase tracking-tight">10% Off Next Order</span>
                            </div>
                            <span class="text-xs font-black text-gray-400 font-bold">LOCKED</span>
                        </div>
                    </div>

                    <button onclick="mockupState.modalOpen=null;navigateTo('account');" class="w-full mt-8 py-4 bg-gray-900 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-gray-800 transition-colors active:scale-95">
                        View Points History
                    </button>
                </div>
            </div>
            `
                : ""
            }

            <div class="${isDesktop ? "p-8" : "p-3"} max-w-[1080px] mx-auto w-full">
            <div class="${isDesktop ? "p-8" : "p-3"} max-w-[1080px] mx-auto w-full overflow-hidden">
                ${(() => {
                  if (featuredItems.length === 0) return "";
                  return isDesktop
                    ? `
                        <div class="flex gap-[14px] overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 mb-2 pt-2 -mt-2 -mx-2 px-2">
                            ${featuredItems.map((fItem, index) => {
                                const gradients = [
                                    "from-violet-600/65 via-violet-600/30",
                                    "from-orange-600/70 via-orange-600/35",
                                    "from-[#f97316]/70 via-[#f97316]/35"
                                ];
                                const badgeColors = ["bg-violet-600", "bg-orange-600", "bg-[#f97316]"];
                                const textColors = ["text-violet-600", "text-orange-600", "text-amber-600"];
                                const styleIdx = index % 3;
                                const fIndex = allItems.indexOf(fItem);
                                return `
                                <div class="relative shrink-0 w-[calc(50%-7px)] snap-start rounded-3xl overflow-hidden shadow-lg h-[220px] flex flex-col justify-end p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group">
                                    <img src="${fItem.image}" class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.15] transition-transform duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                    <span class="absolute top-4 left-6 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>
                                    <div class="relative z-10 w-full pr-36">
                                        <h2 class="text-3xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-2 font-branding line-clamp-2">${fItem.name}</h2>
                                        <p class="text-gray-200 font-medium text-sm leading-snug max-w-[220px] line-clamp-2">${fItem.description || "A delicious new addition to our menu."}</p>
                                    </div>
                                    <button onclick="selectItemAndNavigate(${fIndex})" class="absolute right-6 bottom-6 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 bg-white hover:bg-violet-50 ${textColors[styleIdx]} px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg active:scale-95 tracking-wide z-20">Add to Order</button>
                                </div>
                                `;
                            }).join("")}
                        </div>
                    `
                    : `
                        <div class="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 mb-4 -mx-1 px-1">
                            ${featuredItems.map((fItem, index) => {
                                const gradients = [
                                    "from-violet-600/65 via-violet-600/30",
                                    "from-orange-600/70 via-orange-600/35",
                                    "from-[#f97316]/70 via-[#f97316]/35",
                                    "from-[#E61874]/70 via-[#E61874]/35",
                                    "from-blue-600/70 via-blue-600/35"
                                ];
                                const badgeColors = ["bg-violet-600", "bg-orange-600", "bg-[#f97316]", "bg-[#E61874]", "bg-blue-600"];
                                const styleIdx = index % 5;
                                const fIndex = allItems.indexOf(fItem);
                                return `
                                <div class="relative shrink-0 w-[82vw] max-w-[320px] snap-center rounded-3xl overflow-hidden shadow-lg h-[186px] flex flex-col justify-end p-5 group cursor-pointer" onclick="selectItemAndNavigate(${fIndex})">
                                    <img src="${fItem.image}" class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.15] transition-transform duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                    <span class="absolute top-4 left-5 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>
                                    <div class="relative z-10">
                                        <h2 class="text-2xl font-black text-white uppercase tracking-tighter leading-tight font-branding line-clamp-2">${fItem.name}</h2>
                                    </div>
                                </div>
                                `;
                            }).join("")}
                        </div>
                    `;
                })()}

                <!-- Unified Tab Selector -->
                <div class="flex overflow-x-auto scrollbar-hide border-b border-gray-100 w-full gap-6 lg:gap-8 justify-start lg:mr-auto mb-6 mt-2 pb-2 pl-2 lg:pl-0">
                    ${[
                      { id: "menu", name: "All" },
                      ...(featuredItems.length > 0 ? [{ id: "featured", name: "Featured" }] : []),
                      { id: "favorites", name: "Favorites" },
                      { id: "history", name: "History" },
                    ]
                      .map((tab) => {
                        const isActive = mockupState.menuTab === tab.id;
                        const activeClass = isActive
                          ? "border-violet-600 text-violet-600 border-b-2 font-black"
                          : "text-gray-400 font-bold hover:text-gray-600";
                        return `<button onclick="updateMockupState('menuTab', '${tab.id}'); navigateTo(currentPage);" class="whitespace-nowrap shrink-0 pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}">${tab.name}</button>`;
                      })
                      .join("")}
                </div>

                <!-- Render Tab Content Subview -->
                ${(() => {
                  if (mockupState.menuTab === "menu") {
                    // Search filter: when a query is active, show flat filtered results
                    if (
                      mockupState.menuSearchQuery &&
                      mockupState.menuSearchQuery.trim().length > 0
                    ) {
                      const query = mockupState.menuSearchQuery.toLowerCase();
                      const filtered = getActiveMenuItems().filter(
                        (item) =>
                          item.name.toLowerCase().includes(query) ||
                          (item.description &&
                            item.description.toLowerCase().includes(query)) ||
                          item.category.toLowerCase().includes(query),
                      );
                      if (filtered.length === 0) {
                        return `<div class="flex flex-col items-center justify-center py-24 text-center px-8">
                                    <i class="fa-solid fa-magnifying-glass text-gray-200 text-5xl mb-6"></i>
                                    <p class="font-black text-gray-400 text-lg uppercase tracking-tight">No results for</p>
                                    <p class="font-black text-gray-600 text-xl mt-1">"${mockupState.menuSearchQuery}"</p>
                                    <button onclick="updateMockupState('menuSearchQuery', '');" class="mt-8 px-6 py-3 rounded-full border border-violet-200 text-violet-600 text-sm font-black uppercase tracking-wide hover:bg-violet-50 transition-colors">Clear Search</button>
                                </div>`;
                      }
                      return `
                                <div class="space-y-0">
                                    <p class="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1 mb-4">${filtered.length} result${filtered.length !== 1 ? "s" : ""}</p>
                                    <div class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : "grid grid-cols-1 gap-[10px]"}">
                                        ${filtered
                                          .map((item) => {
                                            const actualIndex =
                                              getActiveMenuItems().indexOf(
                                                item,
                                              );
                                            return `
                                                <div class="bg-white rounded-2xl ${isDesktop ? "pt-2.5 px-2.5 pb-5" : "pt-1.5 px-1.5 pb-3"} shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                                    <div class="w-full ${isDesktop ? "h-44" : "h-48"} rounded-xl overflow-hidden ${isDesktop ? "mb-5" : "mb-3"} relative cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top hover:scale-125 transition-transform duration-500">
                                                    </div>
                                                    <div class="cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <h4 class="font-black text-gray-900 ${isDesktop ? "text-lg" : "text-[15px]"} leading-tight tracking-tight uppercase mb-1">${item.name}</h4>
                                                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">${item.category}</p>
                                                        <div class="font-black text-violet-600 ${isDesktop ? "text-base mb-2" : "text-sm mb-3"}">$${item.price.toFixed(2)}</div>
                                                    </div>
                                                    <button onclick='selectItemAndNavigate(${actualIndex})' class="w-full ${isDesktop ? "py-3 text-sm" : "py-2.5 text-[11px]"} rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide shadow-sm shrink-0 mt-auto">+ Add to Order</button>
                                                </div>
                                            `;
                                          })
                                          .join("")}
                                    </div>
                                </div>
                            `;
                    }

                    return `
                            <!-- Menu Feed (Categories) -->
                            <div class="space-y-12">
                                
                                ${
                                  isAlternative
                                    ? `
                                <!-- Category Navigation Pills -->
                                <div class="flex overflow-x-auto lg:flex-wrap gap-2.5 py-0.5 px-1 scrollbar-hide whitespace-nowrap lg:whitespace-normal select-none !mt-3 !-mb-8">
                                    ${getActiveCategories()
                                      .map((section) => {
                                        return `
                                            <a href="#${section.id}" 
                                               onclick="event.preventDefault(); document.getElementById('${section.id}')?.scrollIntoView({ behavior: 'smooth', block: 'start' });"
                                               class="inline-flex items-center bg-[#D6D6D6] hover:bg-[#A8A8A8] text-[#1f0b35] px-4 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0 cursor-pointer">
                                                ${section.name}
                                            </a>
                                        `;
                                      })
                                      .join("")}
                                </div>
                                `
                                    : ""
                                }

                                ${getActiveCategories()
                                  .map((section) => {
                                    const items = getActiveMenuItems();
                                    const sectionItems = section.isFeatured
                                      ? items.slice(0, 6)
                                      : items.filter(
                                          (item) =>
                                            item.categoryId ===
                                              section.categoryId ||
                                            item.category ===
                                              section.categoryKey,
                                        );
                                    if (sectionItems.length === 0) return "";
                                    return `
                                        <div id="${section.id}" class="scroll-mt-24 lg:scroll-mt-36">
                                            <div class="flex justify-between items-end mb-6 px-1">
                                                <h3 class="text-2xl font-black text-gray-900 tracking-tight uppercase">${section.name}</h3>
                                                <span class="text-gray-400 text-xs font-bold">${sectionItems.length} Items</span>
                                            </div>
                                            <div class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : "grid grid-cols-1 md:grid-cols-2 gap-[10px]"}">
                                                ${sectionItems
                                                  .map((item) => {
                                                    const actualIndex =
                                                      items.indexOf(item);
                                                    return `
                                                        <div class="bg-white rounded-2xl ${isDesktop ? "pt-2.5 px-2.5 pb-5" : "pt-1.5 px-1.5 pb-3"} shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                                            <div class="w-full ${isDesktop ? "h-44" : "h-48"} rounded-xl overflow-hidden ${isDesktop ? "mb-5" : "mb-3"} relative cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                                <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top hover:scale-125 transition-transform duration-500">
                                                            </div>
                                                            <div class="cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                                <h4 class="font-black text-gray-900 ${isDesktop ? "text-lg" : "text-[15px]"} leading-tight tracking-tight uppercase mb-1">${item.name}</h4>
                                                                <div class="font-black text-violet-600 ${isDesktop ? "text-base mb-2" : "text-sm mb-3"}">$${item.price.toFixed(2)}</div>
                                                            </div>
                                                            ${isDesktop ? `<p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed line-clamp-2">${item.description}</p>` : ""}
                                                            <button onclick='selectItemAndNavigate(${actualIndex})' class="w-full ${isDesktop ? "py-3 text-sm" : "py-2.5 text-[11px]"} rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide shadow-sm shrink-0 mt-auto">+ Add to Order</button>
                                                        </div>
                                                    `;
                                                  })
                                                  .join("")}
                                            </div>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        `;
                  } else if (mockupState.menuTab === "featured") {
                    if (featuredItems.length === 0) {
                        return `<div class="py-12 text-center text-gray-500 font-bold uppercase tracking-widest text-sm">No featured items currently available.</div>`;
                    }

                    return `
                            <!-- Featured View -->
                            <div class="space-y-12">
                                <!-- Featured Items Grid (Large Premium Cards) -->
                                <div>
                                    <div class="flex justify-between items-end mb-6 px-1">
                                        <h3 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Featured Specials</h3>
                                    </div>
                                    ${
                                      isDesktop
                                        ? `
                                    <div class="grid grid-cols-4 gap-x-3 gap-y-5">
                                        ${featuredItems
                                          .map((item, index) => {
                                            const actualIndex = allItems.indexOf(item);
                                            const isP1 = index === 0;
                                            const badgeStyle = isP1
                                              ? 'style="background:linear-gradient(135deg,#f97316,#f59e0b);"'
                                              : "";
                                            const badgeClass = isP1
                                              ? "absolute top-3 left-3 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm"
                                              : "absolute top-3 left-3 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm";
                                            return `
                                                <div class="bg-white rounded-2xl pt-2.5 px-2.5 pb-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                                    <div class="w-full h-44 rounded-xl overflow-hidden mb-5 relative cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top hover:scale-125 transition-transform duration-500">
                                                        <div class="${badgeClass}" ${badgeStyle}>Featured</div>
                                                    </div>
                                                    <div class="cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <h4 class="font-black text-gray-900 text-lg leading-tight tracking-tight uppercase mb-1 line-clamp-2">${item.name}</h4>
                                                        <div class="font-black text-violet-600 text-base mb-2">$${item.price.toFixed(2)}</div>
                                                    </div>
                                                    <p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed line-clamp-2">${item.description || "A delicious addition to our menu."}</p>
                                                    <button onclick='selectItemAndNavigate(${actualIndex})' class="w-full py-3 text-sm rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide shadow-sm shrink-0 mt-auto">+ Add to Order</button>
                                                </div>
                                            `;
                                          })
                                          .join("")}
                                    </div>
                                    `
                                        : `
                                    <!-- Mobile/Tablet: horizontal scrollable row -->
                                    <div class="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-3 -mx-1 px-1">
                                        ${featuredItems
                                          .map((item, index) => {
                                            const actualIndex = allItems.indexOf(item);
                                            const isP1 = index === 0;
                                            const badgeStyle = isP1
                                              ? 'style="background:linear-gradient(135deg,#f97316,#f59e0b);"'
                                              : "";
                                            const badgeClass = isP1
                                              ? "absolute top-3 left-3 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm"
                                              : "absolute top-3 left-3 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm";
                                            return `
                                                <div class="bg-white rounded-2xl pt-1.5 px-1.5 pb-3 shadow-sm border border-gray-100 flex flex-col w-[72vw] max-w-[260px] shrink-0 snap-center hover:shadow-md transition-shadow">
                                                    <div class="w-full h-40 rounded-xl overflow-hidden mb-3 relative cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top hover:scale-125 transition-transform duration-500">
                                                        <div class="${badgeClass}" ${badgeStyle}>Featured</div>
                                                    </div>
                                                    <div class="cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <h4 class="font-black text-gray-900 text-[15px] leading-tight tracking-tight uppercase mb-1 line-clamp-2">${item.name}</h4>
                                                        <div class="font-black text-violet-600 text-sm mb-3">$${item.price.toFixed(2)}</div>
                                                    </div>
                                                    <button onclick='selectItemAndNavigate(${actualIndex})' class="w-full py-2 text-[11px] rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide shadow-sm shrink-0 mt-auto">+ Add to Order</button>
                                                </div>
                                            `;
                                          })
                                          .join("")}
                                    </div>
                                    `
                                    }
                                </div>
                            </div>
                        `;
                  } else if (mockupState.menuTab === "favorites") {
                    const hasFavorites =
                      mockupState.favorites && mockupState.favorites.length > 0;
                    return `
                            <div class="space-y-6">
                                <div class="flex justify-between items-end mb-4 px-1">
                                    <h3 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Your Saved Favorites</h3>
                                </div>
                                ${
                                  hasFavorites
                                    ? `
                                    <div class="${isDesktop ? "grid grid-cols-4 gap-5" : "grid grid-cols-1 md:grid-cols-2 gap-[10px]"}">
                                        ${mockupState.favorites
                                          .map((fav) => {
                                            const originalIndex =
                                              getActiveMenuItems().findIndex(
                                                (item) =>
                                                  item.name === fav.name,
                                              );
                                            const actualIndex =
                                              originalIndex >= 0
                                                ? originalIndex
                                                : 0;
                                            return `
                                                <div class="bg-white rounded-2xl ${isDesktop ? "pt-2.5 px-2.5 pb-5" : "pt-1.5 px-1.5 pb-3"} shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow group/card">
                                                    <div class="w-full ${isDesktop ? "h-44" : "h-48"} rounded-xl overflow-hidden ${isDesktop ? "mb-5" : "mb-3"} relative cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <img src="${fav.image}" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500">
                                                        <button onclick="event.stopPropagation(); toggleFavorite(${fav.id})" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-red-500 shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-transform">
                                                            <i class="fa-solid fa-heart"></i>
                                                        </button>
                                                    </div>
                                                    <div class="cursor-pointer" onclick='selectItemAndNavigate(${actualIndex})'>
                                                        <h4 class="font-black text-gray-900 ${isDesktop ? "text-lg" : "text-[15px]"} leading-tight tracking-tight uppercase mb-1">${fav.name}</h4>
                                                        <div class="font-black text-violet-600 ${isDesktop ? "text-base mb-2" : "text-sm mb-3"}">$${fav.price.toFixed(2)}</div>
                                                    </div>
                                                    <button onclick='selectItemAndNavigate(${actualIndex})' class="w-full ${isDesktop ? "py-3 text-sm" : "py-2.5 text-[11px]"} rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors tracking-wide mt-auto">+ Reorder</button>
                                                </div>
                                            `;
                                          })
                                          .join("")}
                                    </div>
                                `
                                    : `
                                    <div class="flex flex-col items-center justify-center py-16 text-center">
                                        <div class="w-20 h-20 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-6 shadow-sm"><i class="fa-regular fa-heart text-3xl"></i></div>
                                        <h4 class="font-black text-gray-900 uppercase tracking-tight text-lg mb-2">No Favorites Saved Yet</h4>
                                        <p class="text-sm text-gray-500 max-w-xs leading-relaxed">Items you heart on the menu will appear here for fast reordering!</p>
                                    </div>
                                `
                                }
                            </div>
                        `;
                  } else if (mockupState.menuTab === "history") {
                    const ordersList = mockupState.apiOrders
                      ? Array.isArray(mockupState.apiOrders)
                        ? mockupState.apiOrders
                        : mockupState.apiOrders.items ||
                          mockupState.apiOrders.data ||
                          []
                      : [];

                    let allOrders = [...ordersList];
                    if (mockupState.lastOrder) {
                      const lastOrderId = mockupState.lastOrder.orderId;
                      const exists = allOrders.some(
                        (o) => o.orderId === lastOrderId,
                      );
                      if (!exists) {
                        allOrders.unshift(mockupState.lastOrder);
                      }
                    }

                    const getOrderTime = (order) => {
                      const dateStr =
                        order.orderDate ||
                        order.placedAt ||
                        order.placedDateTime;
                      return dateStr ? new Date(dateStr).getTime() : 0;
                    };
                    allOrders.sort((a, b) => getOrderTime(b) - getOrderTime(a));

                    if (allOrders.length === 0) {
                      return `
                                <div class="space-y-6">
                                    <div class="flex justify-between items-end mb-4 px-1">
                                        <h3 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Order History</h3>
                                    </div>
                                    <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
                                        <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                            <i class="fa-solid fa-receipt text-2xl text-gray-300"></i>
                                        </div>
                                        <p class="text-gray-500 font-black uppercase tracking-wider text-sm">No past orders found.</p>
                                    </div>
                                </div>
                            `;
                    }

                    const orderCardsHTML = allOrders
                      .map((order) => {
                        const orderDate = new Date(
                          order.orderDate || order.placedAt || Date.now(),
                        ).toLocaleDateString();
                        const orderTotal = (
                          order.total ||
                          order.subTotal ||
                          0
                        ).toFixed(2);
                        const orderItems =
                          order.orderMenuItems ||
                          order.items ||
                          order.orderItems ||
                          [];
                        const orderNum =
                          order.orderId ||
                          order.orderNumber ||
                          "FB-" + Math.floor(1000 + Math.random() * 9000);

                        const foundLoc = LOCATIONS.find(
                          (l) => l.locationId === order.locationId,
                        );
                        const locationName = foundLoc
                          ? foundLoc.name
                          : mockupState.selectedLocation || "i-Tea";

                        return `
                                <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">${orderDate} • #${orderNum}</p>
                                            <p class="font-black text-violet-600 text-sm mt-0.5">${locationName}</p>
                                        </div>
                                        <span class="font-black text-gray-900 text-base">$${orderTotal}</span>
                                    </div>
                                    <div class="flex flex-col gap-1 flex-1">
                                        ${orderItems
                                          .map(
                                            (item) =>
                                              `<p class="text-xs text-gray-500 font-medium">${item.quantity} × ${item.name}</p>`,
                                          )
                                          .join("")}
                                    </div>
                                    <div class="flex gap-2 mt-2 pt-4 border-t border-gray-50">
                                        <button onclick="viewPastOrder(${order.orderId || `'${orderNum}'`})" class="flex-1 py-2.5 rounded-full border-2 border-violet-600 text-violet-600 font-black text-[10px] uppercase tracking-widest hover:bg-violet-50 transition-colors">View</button>
                                        <button onclick="reorderPastOrder(${order.orderId || `'${orderNum}'`})" class="flex-1 py-2.5 rounded-full bg-violet-600 text-white font-black text-[10px] uppercase tracking-widest shadow-sm hover:bg-violet-700 transition-colors">Reorder</button>
                                    </div>
                                </div>
                            `;
                      })
                      .join("");

                    return `
                            <div class="space-y-6">
                                <div class="flex justify-between items-end mb-4 px-1">
                                    <h3 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Order History</h3>
                                </div>
                                <div class="${isDesktop ? "grid grid-cols-2 lg:grid-cols-3 gap-5" : "flex flex-col gap-4"}">
                                    ${orderCardsHTML}
                                </div>
                            </div>
                        `;
                  }
                })()}
            </div>
        </div>

        <!-- Favorites See All Modal -->
        ${
          mockupState.modalOpen === "favorites-see-all"
            ? `
        <div class="absolute inset-0 bg-black/60 z-[110] flex flex-col justify-end backdrop-blur-sm transition-all duration-300">
            <div class="absolute inset-0" onclick="updateMockupState('modalOpen', null); navigateTo(currentPage)"></div>
            <div class="bg-white w-full rounded-t-[40px] shadow-2xl animate-[slideUp_0.4s_ease-out] flex flex-col max-h-[85vh] z-10 relative">
                <!-- Handle -->
                <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-6" onclick="updateMockupState('modalOpen', null); navigateTo(currentPage)"></div>
                
                <div class="px-6 pb-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 class="text-xl font-black text-gray-900 uppercase tracking-tight">Reorder Favorites</h3>
                    <button onclick="updateMockupState('modalOpen', null); navigateTo(currentPage)" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>

                <div class="flex-1 overflow-y-auto px-6 py-6 space-y-5 scrollbar-hide">
                    ${(mockupState.favorites || [])
                      .slice(0, 6)
                      .map(
                        (fav, index) => `
                        <div class="flex items-center justify-between group">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden shrink-0 border border-gray-50">
                                    <img src="${fav.image}" class="w-full h-full object-cover object-top">
                                </div>
                                <div>
                                    <div class="font-black text-sm text-gray-900 leading-tight uppercase line-clamp-2">${fav.name}</div>
                                    <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">
                                        ${index === 0 ? "Ordered 5+ times" : index === 1 ? "Ordered 10+ times" : index === 2 ? "Ordered 3 times" : index === 3 ? "Ordered 8+ times" : index === 4 ? "Ordered 12+ times" : "Ordered 2 times"}
                                    </div>
                                </div>
                            </div>
                            <button onclick="navigateTo('customize')" class="w-10 h-10 rounded-full border-[1.5px] border-violet-200 bg-white text-violet-600 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 shadow-sm transition-all active:scale-95 shrink-0 ml-4">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                    `,
                      )
                      .join("")}
                </div>

                <div class="p-6 border-t border-gray-100">
                    <button onclick="updateMockupState('modalOpen', null); navigateTo('menu-favorites')" class="w-full py-4 bg-gray-900 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-gray-800 transition-colors active:scale-95">Manage All Favorites</button>
                </div>
            </div>
        </div>
        `
            : ""
        }

        <!-- Category Bottom Sheet Modal -->
        <div id="category-modal" class="absolute inset-0 bg-black/60 z-[100] ${categoryModalClass} flex-col justify-end backdrop-blur-sm transition-all duration-300">
            <div class="absolute inset-0" onclick="updateMockupState('modalOpen', null); navigateTo(currentPage)"></div>
            <div class="bg-white w-full rounded-t-[40px] shadow-2xl animate-[slideUp_0.4s_ease-out] flex flex-col max-h-[85vh] z-10 relative">
                <!-- Handle -->
                <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-6" onclick="updateMockupState('modalOpen', null); navigateTo(currentPage)"></div>
                
                <!-- Modal Heading & Search -->
                <div class="px-6 pb-6 border-b border-gray-100">
                    <div class="relative group">
                        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-violet-600 transition-colors"></i>
                        <input type="text" placeholder="Search menu categories..." class="w-full pl-11 pr-12 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none font-black text-sm uppercase tracking-wide transition-all">
                        <button onclick="updateMockupState('modalOpen', null); navigateTo(currentPage)" class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-400 hover:text-gray-900 transition-colors">
                            <i class="fa-solid fa-xmark text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Category List -->
                <div class="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-hide">
                    ${categories
                      .map(
                        (cat) => `
                        <div onclick="updateMockupState('modalOpen', null); navigateTo(currentPage); setTimeout(() => document.getElementById('${cat.id}').scrollIntoView({behavior: 'smooth'}), 100)" class="flex items-start gap-4 p-3 rounded-2xl border-2 border-gray-50 bg-white hover:border-violet-200 hover:bg-violet-50/30 transition-all cursor-pointer group active:scale-[0.98]">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                    <img src="${cat.img}" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <span class="font-black text-sm text-gray-900 uppercase tracking-tight">${cat.name}</span>
                            </div>
                            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                
                <div class="p-6 bg-gray-50/50 border-t border-gray-100 font-black text-center text-[10px] text-gray-400 uppercase tracking-widest leading-loose">
                    Quickly jump to your favorite section
                </div>
            </div>
        </div>

    </div>`;
}

const routes = {
  landing: () => `
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
  dashboard: () => `
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
  home: () => {
    if (currentViewport === "desktop") {
      return `
                <div class="flex flex-col w-full min-h-full">
                    <nav class="flex justify-between items-center px-16 py-6 bg-white sticky top-0 z-50 shadow-sm">
                        <div class="flex items-center gap-8"><span class="text-3xl font-black text-red-600 tracking-tighter cursor-pointer" onclick="navigateTo('home')">FAREBITES</span></div>
                        <div class="flex items-center gap-6 cursor-pointer" onclick="navigateTo(mockupState.isLoggedIn ? 'account' : 'sign-in')"><span class="font-black text-gray-800">Hi ${mockupState.userName || "User"}!</span><div class="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-red-600 transition"><i class="fa-solid fa-user text-gray-600"></i></div></div>
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
  "restaurant-landing": () => `
            <div class="flex flex-col h-full relative overflow-hidden bg-white">
                <div class="absolute inset-0 z-0">
                    <img src="${assets.restaurantHero}" class="w-full h-full object-cover">
                    <!-- White overlay/gradient for i-Tea branding -->
                    <div class="absolute inset-0 bg-white/60"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-white/60"></div>
                </div>
                
                <div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center mt-12">
                    <div class="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 border-4 border-violet-100 overflow-hidden text-white">
                        <img src="images/itea_logo.png" class="w-full h-full object-contain p-4">
                    </div>
                    <h1 class="text-6xl font-black text-violet-600 tracking-tighter drop-shadow-sm">i-Tea</h1>
                    <p class="text-gray-800 font-bold tracking-widest uppercase mt-4 text-xs">Premium Boba Tea & more.</p>
                </div>

                <div class="relative z-10 px-6 pb-12 w-full shrink-0">
                    <button onclick="navigateTo('sign-in')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-transform uppercase tracking-wider">Log In</button>
                </div>
            </div>`,
  "sign-in": () => {
    const isDesktop = currentViewport === "desktop";
    const savedEmail = localStorage.getItem("farebites_remembered_email") || "";
    const rememberMeChecked = !!localStorage.getItem(
      "farebites_remembered_email",
    );
    return `
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${assets.restaurantHero}')"></div>
            <div class="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div class="modal-overlay" onclick="navigateTo('restaurant-home')">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="absolute ${isDesktop ? "top-4 left-4" : "top-6 left-6"} text-gray-500" onclick="navigateTo('restaurant-home')"><i class="fa-solid fa-xmark text-2xl"></i></button>
                    <div class="w-full ${isDesktop ? "max-h-[36px] mb-2 mt-2" : "max-h-[52px] mb-1 mt-4"} flex items-center justify-center">
                         <img src="images/i-tea-logo-new.png" class="h-full ${isDesktop ? "max-h-[36px]" : "max-h-[52px]"} w-auto object-contain">
                    </div>
                    <h2 class="text-xl lg:text-2xl font-black text-center ${isDesktop ? "mb-2" : "mb-4"} uppercase tracking-tight text-gray-900 leading-tight">Sign In</h2>
                    <div class="space-y-3">
                        <div class="relative group">
                            <input type="email" id="auth-email-input" placeholder="Email Address" value="${savedEmail}" class="w-full bg-white px-8 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300">
                            <div class="absolute inset-0 rounded-full bg-violet-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                        </div>
                        <div class="relative group">
                            <input type="password" id="auth-password-input" placeholder="Password" class="w-full bg-white pl-8 pr-12 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300">
                            <div class="absolute inset-0 rounded-full bg-violet-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                            <button type="button" onclick="const p = document.getElementById('auth-password-input'); const i = this.querySelector('i'); if(p.type==='password'){p.type='text'; i.className='fa-solid fa-eye-slash text-gray-400';}else{p.type='password'; i.className='fa-solid fa-eye text-gray-400';}" class="absolute right-6 top-1/2 -translate-y-1/2 focus:outline-none">
                                <i class="fa-solid fa-eye text-gray-400"></i>
                            </button>
                        </div>
                        <div class="flex justify-between items-center px-4">
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" id="auth-remember-me" ${rememberMeChecked ? "checked" : ""} class="w-4 h-4 text-violet-600 border-2 border-violet-100 rounded focus:ring-violet-500 focus:ring-2 transition-colors cursor-pointer accent-violet-600">
                                <span class="text-xs font-bold text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
                            </label>
                            <button type="button" onclick="navigateTo('forgot-password')" class="text-xs font-bold text-violet-600 hover:underline hover:text-violet-700 transition-colors">Forgot Password?</button>
                        </div>
                        <div id="auth-error" class="text-xs font-bold text-red-500 px-6 h-4 mb-2 transition-all opacity-0"></div>
                        <div class="space-y-2">
                            <button onclick="handleLogin()" class="w-full bg-violet-600 text-white ${isDesktop ? "py-3" : "py-4"} rounded-full font-black text-lg hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all uppercase">Sign In</button>
                            <button onclick="navigateTo('registration')" class="w-full bg-white border-2 border-violet-600 text-violet-600 ${isDesktop ? "py-3" : "py-4"} rounded-full font-black text-lg hover:scale-[1.02] hover:-translate-y-1 hover:bg-violet-50/50 active:scale-95 transition-all uppercase">Create an Account</button>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 py-1">
                        <div class="flex-1 h-px bg-gray-100"></div>
                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">or</span>
                        <div class="flex-1 h-px bg-gray-100"></div>
                    </div>

                    <div class="flex justify-center gap-4 pt-1">
                        <button class="w-12 h-12 rounded-full bg-white border-2 border-violet-50 flex items-center justify-center hover:bg-violet-50/30 active:scale-95 transition-all shadow-sm" title="Continue with Google">
                            <i class="fa-brands fa-google text-lg text-red-500"></i>
                        </button>
                        <button class="w-12 h-12 rounded-full bg-white border-2 border-violet-50 flex items-center justify-center hover:bg-violet-50/30 active:scale-95 transition-all shadow-sm" title="Continue with Apple">
                            <i class="fa-brands fa-apple text-lg text-black"></i>
                        </button>
                        <button class="w-12 h-12 rounded-full bg-white border-2 border-violet-50 flex items-center justify-center hover:bg-violet-50/30 active:scale-95 transition-all shadow-sm" title="Continue with Facebook">
                            <i class="fa-brands fa-facebook text-lg text-[#1877F2]"></i>
                        </button>
                    </div>
                    <div class="mt-2 text-center px-4">
                        <p class="text-[10px] text-gray-400 font-bold tracking-widest">By continuing, you agree to i-Tea Terms & Privacy Policy</p>
                    </div>
                </div>
            </div>
        `;
  },
  "forgot-password": () => {
    const isDesktop = currentViewport === "desktop";
    return `
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${assets.restaurantHero}')"></div>
            <div class="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div class="modal-overlay" onclick="navigateTo('sign-in')">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="absolute ${isDesktop ? "top-4 left-4" : "top-6 left-6"} text-gray-500 hover:text-violet-600 transition-colors" onclick="navigateTo('sign-in')">
                        <i class="fa-solid fa-chevron-left text-2xl"></i>
                    </button>
                    <div class="w-full ${isDesktop ? "max-h-[36px] mb-2 mt-2" : "max-h-[52px] mb-1 mt-4"} flex items-center justify-center">
                         <img src="images/i-tea-logo-new.png" class="h-full ${isDesktop ? "max-h-[36px]" : "max-h-[52px]"} w-auto object-contain">
                    </div>
                    <h2 class="text-xl lg:text-2xl font-black text-center ${isDesktop ? "mb-2" : "mb-4"} uppercase tracking-tight text-gray-900 leading-tight">Reset Password</h2>
                    <p class="text-xs text-gray-500 font-bold text-center mb-6 uppercase tracking-wider px-2 leading-relaxed">Enter your email address below, and we'll send you a link to reset your password.</p>
                    
                    <div class="space-y-4">
                        <div class="relative group">
                            <input type="email" id="forgot-email-input" placeholder="Email Address" class="w-full bg-white px-8 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300">
                            <div class="absolute inset-0 rounded-full bg-violet-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                        </div>
                        
                        <div id="forgot-error" class="text-xs font-bold text-red-500 px-6 h-4 transition-all opacity-0"></div>
                        <div id="forgot-success" class="text-sm font-bold text-green-600 px-6 text-center leading-relaxed transition-all hidden"></div>
                        
                        <div class="space-y-2">
                            <button id="forgot-submit-btn" onclick="handleForgotPassword()" class="w-full bg-violet-600 text-white ${isDesktop ? "py-3" : "py-4"} rounded-full font-black text-lg hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all uppercase">Send Reset Link</button>
                            <button id="forgot-back-btn" onclick="navigateTo('sign-in')" class="w-full bg-white border-2 border-violet-600 text-violet-600 ${isDesktop ? "py-3" : "py-4"} rounded-full font-black text-lg hover:scale-[1.02] hover:-translate-y-1 hover:bg-violet-50/50 active:scale-95 transition-all uppercase">Back to Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
  rewards: () => {
    const isDesktop = currentViewport === "desktop";
    return `
            <div class="flex flex-col min-h-screen bg-slate-50 relative overflow-x-hidden animate-[fadeIn_0.3s_ease-out]">
                <!-- Compact Header -->
                <header class="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4 flex justify-between items-center shrink-0 shadow-sm">
                    <button onclick="navigateTo(mockupState.lastMenuPage || 'restaurant-home')" class="w-10 h-10 flex items-center justify-start text-[#1f0b35] hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-xl"></i>
                    </button>
                    <h1 class="font-branding font-black text-[#1f0b35] text-lg uppercase tracking-wider">i-Tea Rewards</h1>
                    <div class="w-10 h-10"></div> <!-- Spacer -->
                </header>

                <div class="flex-1 max-w-[640px] mx-auto w-full px-6 py-8 space-y-6">
                    <!-- Hero Banner -->
                    <div class="bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                        <!-- Decorative background details -->
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        
                        <div class="relative z-10">
                            <span class="bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">Gold Tier Member</span>
                            <h2 class="text-4xl font-branding font-black mt-4 mb-1">850 Points</h2>
                            <p class="text-xs text-violet-100 font-bold uppercase tracking-wide">150 points until your next free drink!</p>
                            
                            <!-- Progress Bar -->
                            <div class="w-full bg-white/20 h-2.5 rounded-full overflow-hidden mt-6 mb-2">
                                <div class="bg-white h-full w-[85%] rounded-full animate-[slideRight_1.5s_ease-out]"></div>
                            </div>
                            <div class="flex justify-between text-[10px] font-black uppercase tracking-wider text-violet-200">
                                <span>0 Points</span>
                                <span>1000 Points (Free Drink)</span>
                            </div>
                        </div>
                    </div>

                    <!-- Available Rewards list -->
                    <div>
                        <h3 class="font-branding font-black text-xl text-gray-900 uppercase tracking-tight mb-4">Your Active Rewards</h3>
                        <div class="space-y-4">
                            <!-- Coupon Card 1 -->
                            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm flex items-center justify-between p-5 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                                        <i class="fa-solid fa-cookie text-xl"></i>
                                    </div>
                                    <div class="text-left">
                                        <h4 class="font-black text-gray-900 uppercase text-sm tracking-tight">Free Extra Topping</h4>
                                        <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">Expires in 14 days</p>
                                    </div>
                                </div>
                                <button class="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-wider shadow-sm transition-all active:scale-95">Redeem</button>
                            </div>

                            <!-- Coupon Card 2 -->
                            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm flex items-center justify-between p-5 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                        <i class="fa-solid fa-mug-hot text-xl"></i>
                                    </div>
                                    <div class="text-left">
                                        <h4 class="font-black text-gray-900 uppercase text-sm tracking-tight">Buy 1 Get 1 Free</h4>
                                        <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">Unlock at 1,000 points</p>
                                    </div>
                                </div>
                                <button class="bg-gray-100 text-gray-400 px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-wider cursor-not-allowed" disabled>Locked</button>
                            </div>
                        </div>
                    </div>

                    <!-- How to Earn Info Section -->
                    <div class="bg-white rounded-3xl border border-gray-100 p-6 space-y-6 shadow-sm">
                        <h3 class="font-branding font-black text-lg text-gray-900 uppercase tracking-tight text-center">How to Earn Rewards</h3>
                        
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
                                    <i class="fa-solid fa-qrcode text-lg"></i>
                                </div>
                                <h4 class="font-black text-[11px] text-gray-900 uppercase tracking-tight leading-tight">1. Scan or Order</h4>
                                <p class="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-wider">10 points per dollar</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
                                    <i class="fa-solid fa-gift text-lg"></i>
                                </div>
                                <h4 class="font-black text-[11px] text-gray-900 uppercase tracking-tight leading-tight">2. Earn Points</h4>
                                <p class="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-wider">Watch your points stack up</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
                                    <i class="fa-solid fa-glass-water text-lg"></i>
                                </div>
                                <h4 class="font-black text-[11px] text-gray-900 uppercase tracking-tight leading-tight">3. Get Free Tea</h4>
                                <p class="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-wider">Redeem for Boba & more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
  "restaurant-home": () => {
    const isDesktop = currentViewport === "desktop";

    let cardWidthClass = "";
    let carouselAlign = "";
    if (currentViewport === "desktop") {
      cardWidthClass = "w-[23%] min-w-[200px] max-w-[260px] snap-align-none";
      carouselAlign = "lg:justify-center lg:overflow-x-visible";
    } else if (currentViewport === "tablet") {
      cardWidthClass = "w-[47%] shrink-0 snap-center";
      carouselAlign = "justify-start";
    } else {
      cardWidthClass = "w-full shrink-0 snap-center";
      carouselAlign = "justify-start";
    }

    const items = getActiveMenuItems();
    let featuredItems = [];
    if (mockupState.apiMenuItems && mockupState.apiMenuItems.length > 0) {
        featuredItems = items.filter(item => item.category === "New Items" || item.categoryKey === "New Items" || item.categoryId === "new-items-section");
    }
    if (!featuredItems || featuredItems.length === 0) {
        featuredItems = items.slice(0, 3);
    }

    return `
            <div class="flex flex-col min-h-screen relative overflow-hidden bg-slate-50">
                <!-- Hero Banner / Background Section -->
                <div class="${isDesktop ? "relative h-[480px] mx-1.5 mt-1.5 rounded-2xl shrink-0 overflow-hidden flex items-center bg-gradient-to-r from-violet-600 to-[#1f0b35] shadow-md" : "absolute inset-0 z-0"}">
                    ${
                      isDesktop
                        ? `
                    <img src="images/iTea-hero3.png" class="w-full h-full absolute inset-0 object-cover z-0 object-center">
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-600/50 to-transparent via-[30%] to-[70%] z-0"></div>
                    <div class="relative z-10 w-full max-w-[1080px] mx-auto px-12 text-left flex flex-col justify-center h-full">
                        <div class="max-w-[480px] pt-2">
                            <h2 class="font-branding font-black text-5xl tracking-tight text-white uppercase leading-none">SIP THE</h2>
                            <h1 class="font-branding font-extrabold text-7xl text-white tracking-tight mt-1 mb-4 flex items-center gap-3 leading-none">
                                <span class="italic font-serif" style="font-family: 'Outfit', sans-serif;">Goodness</span>
                                <i class="fa-regular fa-heart text-4xl text-violet-200"></i>
                            </h1>
                            <p class="text-base font-semibold text-white/90 mb-6 leading-relaxed">Refreshing flavors. Chewy boba. Made for every moment.</p>
                            <button onclick="navigateTo('locations')" class="inline-flex items-center gap-3 bg-white text-violet-700 hover:bg-violet-50 px-8 py-3.5 rounded-full font-black text-sm shadow-lg active:scale-95 transition-transform uppercase tracking-wider">
                                <span>Order Now</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    `
                        : `
                    <img src="images/iTea-hero3.png" class="w-full h-full absolute inset-0 object-cover z-0 object-center">
                    <!-- Subtle gradient to ensure text readability -->
                    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90 z-10"></div>
                    `
                    }
                </div>

                <header class="absolute top-0 inset-x-0 bg-transparent px-6 pt-6 pb-2 flex justify-between items-center z-50 shrink-0">
                    <div class="flex items-center gap-3">
                        <button onclick="navigateTo(mockupState.isLoggedIn ? 'account' : 'sign-in')" class="w-10 h-10 flex items-center justify-center text-[#1A1A1A]"><i class="fa-regular fa-user text-2xl"></i></button>
                        <button onclick="navigateTo('menu-scan')" class="w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:opacity-80 transition-opacity"><i class="fa-solid fa-qrcode text-2xl"></i></button>
                    </div>
                    <div class="flex flex-col items-center cursor-pointer mr-6" onclick="navigateTo('locations')">
                        <div class="flex items-center gap-1"><span class="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">PICKUP</span><i class="fa-solid fa-chevron-down text-[9px] text-[#1A1A1A]"></i></div>
                        <span class="text-[13px] font-medium text-[#1A1A1A] mt-0.5">Home</span>
                        ${
                          mockupState.isLoggedIn
                            ? `
                        <div onclick="event.stopPropagation(); navigateTo('account')" class="mt-1 px-2.5 py-0.5 bg-white text-violet-600 border border-violet-100 rounded-full shadow-sm text-[10px] font-black uppercase tracking-wider whitespace-nowrap active:scale-95 transition-transform">
                            Hi ${mockupState.userName || "User"}!
                        </div>
                        `
                            : ""
                        }
                    </div>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </button>
                </header>
                
                <div class="flex-1 overflow-y-auto relative scrollbar-hide z-10 flex flex-col">
                    <!-- Titles & CTA for Mobile/Tablet -->
                    ${
                      !isDesktop
                        ? `
                    <div class="text-center pt-24 relative z-10 shrink-0">
                        <div class="text-violet-600 text-[11px] font-black tracking-[0.2em] uppercase mb-1">Open 24 Hours</div>
                        <h1 class="text-5xl font-black text-violet-600 tracking-tighter leading-[0.9] font-sans scale-y-110 mt-2 mb-2 drop-shadow-md">i-Tea</h1>
                    </div>
                    `
                        : ""
                    }
                    
                    <!-- Spacer so background image can be seen before the carousel (Desktop uses negative margin wrapper instead) -->
                    ${!isDesktop && featuredItems.length > 0 ? '<div class="w-full flex-1 min-h-[140px]"></div>' : ""}
                    
                    <!-- Carousel Container -->
                    ${
                      !isDesktop && featuredItems.length > 0
                        ? `
                    <div class="relative z-20 w-full mt-auto shrink-0 pb-2">
                        <div id="home-carousel" class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 ${carouselAlign}">
                            ${featuredItems.map((fItem, index) => {
                                const gradients = [
                                    "from-violet-600/65 via-violet-600/30",
                                    "from-orange-600/70 via-orange-600/35",
                                    "from-[#32CD32]/70 via-[#32CD32]/35",
                                    "from-[#E61874]/70 via-[#E61874]/35",
                                    "from-blue-600/70 via-blue-600/35"
                                ];
                                const badgeColors = ["bg-violet-600", "bg-orange-600", "bg-[#32CD32]", "bg-[#E61874]", "bg-blue-600"];
                                const textColors = ["text-violet-600", "text-orange-600", "text-[#32CD32]", "text-[#E61874]", "text-blue-600"];
                                const styleIdx = index % 5;
                                const fIndex = items.indexOf(fItem);
                                return `
                                <div class="${cardWidthClass} relative shrink-0 snap-center rounded-3xl overflow-hidden border-4 border-white h-[250px] flex flex-col justify-end p-5 group cursor-pointer" onclick="selectItemAndNavigate(${fIndex})">
                                    <img src="${fItem.image}" class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.15] transition-transform duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                    <span class="absolute top-4 left-5 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>
                                    <div class="relative z-10 text-left w-full pr-12">
                                        <h2 class="text-xl font-black text-white uppercase tracking-tighter leading-tight font-branding mb-1 line-clamp-2">${fItem.name}</h2>
                                        <p class="text-white font-medium text-xs leading-tight mb-3 line-clamp-2">${fItem.description || "A delicious new addition to our menu."}</p>
                                        <button onclick="event.stopPropagation(); selectItemAndNavigate(${fIndex})" class="bg-white ${textColors[styleIdx]} px-5 py-2 rounded-full font-black uppercase text-[10px] shadow-md hover:scale-105 active:scale-95 tracking-wider z-20 transition-transform">Add to Order</button>
                                    </div>
                                </div>
                                `;
                            }).join("")}
                        </div>
                        
                        <!-- Pagination Dots -->
                        <div class="flex justify-center items-center gap-2 mt-2 mb-4 lg:hidden" style="padding-right: 0;">
                            <div id="carousel-dot-0" class="w-2 h-2 rounded-full bg-violet-600 transition-colors duration-300"></div>
                            <div id="carousel-dot-1" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                            <div id="carousel-dot-2" class="w-2 h-2 rounded-full bg-violet-200 transition-colors duration-300"></div>
                        </div>
                    </div>
                    `
                        : ""
                    }
                    <!-- Desktop Categories Section -->
                    ${
                      isDesktop
                        ? `
                    <div class="bg-white pt-24 pb-12 px-12 rounded-t-[40px] -mt-16 w-full shrink-0 relative z-30 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.05)]">
                        <div class="max-w-[1080px] mx-auto text-center">
                            <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Explore Our Menu</h2>
                            <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Select a category to start ordering</p>
                            
                            <div class="grid grid-cols-3 gap-6 justify-items-center mb-8">
                                ${getActiveCategories()
                                  .map(
                                    (cat) => `
                                    <div onclick="navigateTo('locations');" class="flex flex-col items-center cursor-pointer group w-full max-w-[312px]">
                                        <div class="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 mb-4 bg-white">
                                            <img src="${cat.img}" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500">
                                        </div>
                                        <h3 class="font-branding font-black text-2xl text-violet-600 uppercase tracking-tight text-center leading-tight group-hover:text-violet-600 transition-colors">${cat.name}</h3>
                                        <div class="text-lg font-black text-violet-600 uppercase tracking-widest mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Order Now</span><i class="fa-solid fa-arrow-right text-[9px]"></i>
                                        </div>
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
 
                            <!-- Divider -->
                            <div class="h-px bg-gray-100 w-full mb-8"></div>

                            <!-- Favorites Section (Desktop Only) -->
                            ${(() => {
                              const favs = mockupState.favorites || [];
                              if (favs.length === 0) {
                                return `
                                        <div class="mb-12">
                                            <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Your Favorites</h2>
                                            <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Order your usuals in one click</p>
                                            <div class="bg-[#E61874]/5 border border-dashed border-[#E61874]/20 rounded-3xl p-8 max-w-[700px] mx-auto flex flex-col items-center">
                                                <div class="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-[#E61874] mb-4">
                                                    <i class="fa-solid fa-heart text-xl animate-pulse"></i>
                                                </div>
                                                <h3 class="font-black text-gray-900 text-lg uppercase tracking-tight mb-1">Your Favorites is Empty</h3>
                                                <p class="text-gray-500 text-sm font-medium mb-4 max-w-[400px]">Tap the heart icon next to any drink on the menu to save it here for fast reordering!</p>
                                                <button onclick="navigateTo('menu')" class="px-6 py-2.5 bg-[#E61874] text-white rounded-full font-black uppercase text-xs tracking-widest shadow-md hover:bg-[#E61874]/90 transition-colors active:scale-95">Explore Menu</button>
                                            </div>
                                        </div>
                                    `;
                              }
                              return `
                                    <div class="mb-12 text-center">
                                        <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Your Favorites</h2>
                                        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Reorder your usual items in one click</p>

                                        <!-- 4-column grid matching the categories layout boundaries -->
                                        <div class="grid grid-cols-4 gap-6 justify-items-center max-w-[1080px] mx-auto w-full">
                                            ${favs
                                              .slice(0, 4)
                                              .map(
                                                (item) => `
                                                <div class="relative w-full h-[240px] rounded-2xl overflow-hidden shadow-md flex flex-col justify-end p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] group cursor-pointer text-left" onclick="selectFavoriteAndNavigate('${item.name}')">
                                                    <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.15] transition-transform duration-500">
                                                    <div class="absolute inset-0 bg-gradient-to-t from-violet-950/95 to-transparent to-65%"></div>
                                                    <span class="absolute top-3 left-4 bg-[#E61874] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20 flex items-center gap-1"><i class="fa-solid fa-heart text-[7px]"></i> Favorites</span>
                                                    <div class="relative z-10 w-full">
                                                        <div class="text-white/80 text-[8px] font-black tracking-widest uppercase mb-0.5 truncate">${item.category || "Drink"}</div>
                                                        <h2 class="text-sm font-black text-white uppercase tracking-tight leading-tight font-branding mb-0.5 truncate" title="${item.name}">${item.name}</h2>
                                                        <div class="font-black text-white text-xs mb-2">$${item.price.toFixed(2)}</div>
                                                        <button class="bg-white text-[#E61874] px-4 py-1.5 rounded-full font-black uppercase text-[8px] shadow-md hover:scale-105 active:scale-95 tracking-wider transition-transform">Add to Order</button>
                                                    </div>
                                                </div>
                                            `,
                                              )
                                              .join("")}
                                        </div>

                                        <!-- Manage Favorites Link below cards -->
                                        <div class="mt-8 flex justify-center">
                                            <button onclick="navigateTo('menu-favorites')" class="text-[#E61874] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2">
                                                Manage Favorites <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                `;
                            })()}

                            ${featuredItems.length > 0 ? `
                            <!-- Divider -->
                            <div class="h-px bg-gray-100 w-full mb-8"></div>

                            <!-- Featured Items Section -->
                            <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Featured Items</h2>
                            <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Our handcrafted favorites</p>
 
                            <div class="grid grid-cols-2 gap-8 justify-items-center max-w-[1080px] mx-auto w-full">
                                ${featuredItems.slice(0, 2).map((fItem, index) => {
                                    const gradients = [
                                        "from-violet-600/65 via-violet-600/30",
                                        "from-orange-600/70 via-orange-600/35"
                                    ];
                                    const badgeColors = ["bg-violet-600", "bg-orange-600"];
                                    const textColors = ["text-violet-600", "text-orange-600"];
                                    const styleIdx = index % 2;
                                    const fIndex = items.indexOf(fItem);
                                    return `
                                    <div class="relative shrink-0 w-full rounded-3xl overflow-hidden shadow-lg h-[300px] flex flex-col justify-end p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group cursor-pointer text-left" onclick="selectItemAndNavigate(${fIndex})">
                                        <img src="${fItem.image}" class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.15] transition-transform duration-500">
                                        <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                        <span class="absolute top-4 left-6 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>
                                        <div class="relative z-10 w-full pr-36">
                                            <h2 class="text-3xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-2 font-branding line-clamp-2">${fItem.name}</h2>
                                            <p class="text-gray-200 font-medium text-sm leading-snug max-w-[220px] line-clamp-2">${fItem.description || "A delicious new addition to our menu."}</p>
                                        </div>
                                        <button class="absolute right-6 bottom-6 bg-white ${textColors[styleIdx]} px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg hover:scale-105 active:scale-95 tracking-wide z-20 transition-transform">Add to Order</button>
                                    </div>
                                    `;
                                }).join("")}
                            </div>
                            ` : ""}

                            <!-- Rewards Banner Section -->
                            <div class="mt-12 w-full">
                                <div class="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-[#E61874]/10 shadow-sm flex items-center justify-between px-10 py-8 gap-8">
                                    <!-- Decorative background blobs -->
                                    <div class="absolute -top-10 -left-10 w-48 h-48 bg-violet-200/30 rounded-full blur-3xl pointer-events-none"></div>
                                    <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-[#E61874]/20 rounded-full blur-3xl pointer-events-none"></div>

                                    <!-- Left: Text Content -->
                                    <div class="relative z-10 text-left flex-1 min-w-0">
                                        <p class="text-violet-600 text-xs font-black uppercase tracking-[0.25em] mb-1">Join Rewards</p>
                                        <h2 class="font-branding font-black text-4xl text-gray-900 uppercase tracking-tight leading-none mb-2">Get Rewarded</h2>
                                        <p class="text-sm font-semibold text-gray-500">The easiest way to free i-Tea</p>
                                    </div>

                                    <!-- Right: Buttons -->
                                    <div class="relative z-10 flex flex-col items-center gap-3 shrink-0">
                                        <button onclick="navigateTo('registration')" class="px-10 py-3 rounded-xl border-2 border-gray-900 text-gray-900 font-black text-sm uppercase tracking-widest hover:bg-violet-600 hover:border-violet-600 hover:!text-white transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap">
                                            Join Now
                                        </button>
                                        <button onclick="navigateTo('rewards')" class="text-violet-600 font-black text-xs uppercase tracking-widest hover:text-violet-800 transition-colors active:scale-95 whitespace-nowrap">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                        : ""
                    }
                </div>

                ${
                  !isDesktop
                    ? `
                <!-- Order Now Button (Fixed above bottom nav on mobile/tablet) -->
                <div class="px-6 pb-6 pt-2 relative z-20 shrink-0">
                    <button onclick="navigateTo('locations')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-transform uppercase tracking-wider">Order Now</button>
                </div>`
                    : ""
                }
            </div>`;
  },

  locations: () => {
    const getSet = () => {
      const list =
        mockupState.apiLocations && mockupState.apiLocations.length > 0
          ? mockupState.apiLocations
          : LOCATIONS;
      if (
        mockupState.locationFilter === "Near Me" ||
        mockupState.locationFilter === "Nearby"
      )
        return list;
      if (mockupState.locationFilter === "My Locations") {
        const favorites = list.filter((loc) => loc.fav);
        const previous =
          list.length >= 3
            ? [list[2 % list.length], list[0], list[1 % list.length]]
            : list;
        const combined = [...favorites];
        previous.forEach((loc) => {
          if (!combined.some((c) => c.name === loc.name)) {
            combined.push(loc);
          }
        });
        return combined;
      }

      return list;
    };

    if (currentViewport === "desktop") {
      return `
                <div class="flex flex-row bg-white" style="height: calc(100vh - 70px);">
                    <div class="w-[450px] flex flex-col shrink-0 border-r border-gray-200 z-10 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.05)]">
                        <header class="p-4 border-b border-gray-100 flex items-center bg-white">
                            <button onclick="navigateTo('restaurant-home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                            <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Choose Location</h1>
                            <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                        </header>
                        <!-- Default Location Quick-Select -->
                        <div class="px-[36px] py-5 border-b border-[#1f0b35] bg-gradient-to-r from-violet-600 to-[#1f0b35] flex items-center justify-between gap-3 text-white">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-house text-violet-600 text-[10px]"></i>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-[11px] font-black text-violet-200 uppercase tracking-widest" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Previous Order</p>
                                    <p class="text-base font-black text-white truncate">i-Tea - Tempe <span class="text-xs font-normal text-violet-200">&nbsp;·&nbsp; 0.3 mi</span></p>
                                    <p class="text-xs text-violet-200 mt-0.5 truncate">825 W UNIVERSITY, TEMPE, AZ</p>
                                </div>
                            </div>
                            <button onclick="selectLocation(7, 'i-Tea - Tempe', '825 W UNIVERSITY, TEMPE, AZ', '0.8 mi')" class="shrink-0 px-4 py-2 bg-white text-violet-600 hover:bg-violet-50 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors active:scale-95">Order Here</button>
                        </div>
                        <div class="p-5 border-b border-gray-100 bg-white">
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-5 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex border-b border-gray-100 w-full justify-start gap-8 mb-5 pb-2">
                                ${[
                                  { id: "Near Me", name: "Near Me" },
                                  { id: "My Locations", name: "My Locations" },
                                ]
                                  .map((tab) => {
                                    const isActive =
                                      mockupState.locationFilter === tab.id ||
                                      (tab.id === "Near Me" &&
                                        mockupState.locationFilter ===
                                          "Nearby");
                                    const activeClass = isActive
                                      ? "border-violet-600 text-violet-600 border-b-2 font-black"
                                      : "text-gray-400 font-bold hover:text-gray-600";
                                    return `
                                        <button onclick="updateMockupState('locationFilter', '${tab.id}');" class="pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}" style="font-family: 'Roboto', sans-serif;">
                                            ${tab.name}
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/30">
                            ${getSet()
                              .map(
                                (s, idx) => `
                                <div data-location-card="${s.name}" class="p-5 border-2 ${s.name === (mockupState.selectedLocation || "i-Tea - Tempe") ? "border-violet-600 shadow-md" : idx === 0 || idx === 1 ? "border-violet-200" : s.fav ? "border-violet-200" : "border-gray-200"} rounded-2xl flex justify-between items-start cursor-pointer transition hover:border-violet-400 hover:shadow-md" style="${idx === 0 || idx === 1 ? "background: linear-gradient(to right, rgba(124, 58, 237, 0.07), white);" : s.name === (mockupState.selectedLocation || "i-Tea - Tempe") ? "background: rgba(124,58,237,0.05);" : ""}" onclick="focusLocation('${s.name}')">
                                    <div>
                                        ${(() => {
                                          const label =
                                            mockupState.locationLabels &&
                                            mockupState.locationLabels[s.name];
                                          return label
                                            ? `<span class="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1.5 block" style="font-family: Roboto, sans-serif;">${label}</span>`
                                            : "";
                                        })()}
                                        <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">
                                            <span>${s.name}</span>
                                            <button onclick="toggleLocationFavorite('${s.name}', event)" class="heart-btn relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-colors duration-200 active:scale-90" title="Toggle Favorite">
                                                ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-[19px]"></i>' : '<i class="fa-regular fa-heart text-gray-300 hover:text-violet-600 text-[19px]"></i>'}
                                                <div class="burst-lines absolute inset-0 pointer-events-none opacity-0">
                                                    <span class="line line-1"></span>
                                                    <span class="line line-2"></span>
                                                    <span class="line line-3"></span>
                                                    <span class="line line-4"></span>
                                                    <span class="line line-5"></span>
                                                    <span class="line line-6"></span>
                                                    <span class="line line-7"></span>
                                                    <span class="line line-8"></span>
                                                </div>
                                            </button>
                                        </h3>
                                        <p class="text-xs font-bold text-gray-400 mt-1.5 uppercase tracking-widest" style="font-family: Roboto, sans-serif;"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-4">
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-shop"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-car"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-square-parking"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-2">
                                        <div class="text-xs font-black text-gray-400 uppercase" style="font-family: Roboto, sans-serif;">${s.dist}</div>
                                        <button onclick="event.stopPropagation(); selectLocation(${s.locationId || "null"}, '${s.name}', '${s.address}', '${s.dist}')" class="bg-violet-600 text-white text-[10px] px-4 py-2 rounded-full uppercase font-black tracking-widest shadow-sm hover:bg-violet-700 transition active:scale-95">Order Here</button>
                                        <span class="text-[10px] text-gray-400 underline uppercase font-bold hover:text-violet-600" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`,
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="flex-1 relative bg-[#e5e3df]">
                        <div id="locations-map" class="absolute inset-0 w-full h-full"></div>
                    </div>
                </div>`;
    } else {
      return `
                <div class="flex flex-col h-full bg-[#f4f4f2] relative">
                    <header class="p-4 flex items-center bg-white z-20 shrink-0 shadow-sm relative">
                        <button onclick="navigateTo('restaurant-home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                        <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Choose Location</h1>
                        <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                    </header>
                    
                    <!-- Previous Order Location Quick-Select -->
                    <div class="p-5 bg-gradient-to-r from-violet-600 to-[#1f0b35] border-b border-[#1f0b35] flex items-center justify-between gap-3 shrink-0 z-10 text-white">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-house text-violet-600 text-[10px]"></i>
                            </div>
                            <div class="min-w-0">
                                <p class="text-[11px] font-black text-violet-200 uppercase tracking-widest" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Previous Order</p>
                                <p class="text-base font-black text-white truncate">i-Tea - Tempe <span class="text-xs font-normal text-violet-200">&nbsp;·&nbsp; 0.3 mi</span></p>
                            </div>
                        </div>
                        <button onclick="selectLocation(7, 'i-Tea - Tempe', '825 W UNIVERSITY, TEMPE, AZ', '0.8 mi')" class="shrink-0 px-4 py-2 bg-white text-violet-600 hover:bg-violet-50 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm transition-colors active:scale-95">Order Here</button>
                    </div>

                    <div class="w-full h-[35%] min-h-[220px] shrink-0 relative z-0">
                        <div id="locations-map" class="absolute inset-0 w-full h-full"></div>
                    </div>

                    <div class="flex-1 overflow-y-auto bg-white z-10 -mt-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.12)] flex flex-col relative pb-6">
                        <div class="p-5 border-b border-gray-100 shrink-0 sticky top-0 bg-white/95 backdrop-blur-md z-20 rounded-t-3xl">
                            <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"></div>
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-4 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex border-b border-gray-100 w-full justify-around pb-1">
                                ${[
                                  { id: "Near Me", name: "Near Me" },
                                  { id: "My Locations", name: "My Locations" },
                                ]
                                  .map((tab) => {
                                    const isActive =
                                      mockupState.locationFilter === tab.id ||
                                      (tab.id === "Near Me" &&
                                        mockupState.locationFilter ===
                                          "Nearby");
                                    const activeClass = isActive
                                      ? "border-violet-600 text-violet-600 border-b-2 font-black"
                                      : "text-gray-400 font-bold hover:text-gray-600";
                                    return `
                                        <button onclick="updateMockupState('locationFilter', '${tab.id}');" class="pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}" style="font-family: 'Roboto', sans-serif;">
                                            ${tab.name}
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>

                        <div class="p-4 space-y-3 flex-1 bg-gray-50/30">
                            ${getSet()
                              .map(
                                (s, idx) => `
                                <div data-location-card="${s.name}" class="p-5 border-2 ${s.name === (mockupState.selectedLocation || "i-Tea - Tempe") ? "border-violet-600 shadow-md" : idx === 0 || idx === 1 ? "border-violet-200" : s.fav ? "border-violet-200" : "border-gray-200"} rounded-2xl flex justify-between items-start cursor-pointer active:scale-[0.98] transition-all hover:shadow-md" style="${idx === 0 || idx === 1 ? "background: linear-gradient(to right, rgba(124, 58, 237, 0.07), white);" : s.name === (mockupState.selectedLocation || "i-Tea - Tempe") ? "background: rgba(124,58,237,0.05);" : ""}" onclick="focusLocation('${s.name}')">
                                    <div class="min-w-0 flex-1">
                                        ${(() => {
                                          const label =
                                            mockupState.locationLabels &&
                                            mockupState.locationLabels[s.name];
                                          return label
                                            ? `<span class="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1.5 block" style="font-family: Roboto, sans-serif;">${label}</span>`
                                            : "";
                                        })()}
                                        <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">
                                            <span>${s.name}</span>
                                            <button onclick="toggleLocationFavorite('${s.name}', event)" class="heart-btn relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-colors duration-200 active:scale-90" title="Toggle Favorite">
                                                ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-[19px]"></i>' : '<i class="fa-regular fa-heart text-gray-300 hover:text-violet-600 text-[19px]"></i>'}
                                                <div class="burst-lines absolute inset-0 pointer-events-none opacity-0">
                                                    <span class="line line-1"></span>
                                                    <span class="line line-2"></span>
                                                    <span class="line line-3"></span>
                                                    <span class="line line-4"></span>
                                                    <span class="line line-5"></span>
                                                    <span class="line line-6"></span>
                                                    <span class="line line-7"></span>
                                                    <span class="line line-8"></span>
                                                </div>
                                            </button>
                                        </h3>
                                        <p class="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest" style="font-family: Roboto, sans-serif;"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-3">
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-shop text-[13px]"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-car text-[13px]"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-square-parking text-[13px]"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-2 shrink-0 ml-3">
                                        <div class="text-[11px] font-black text-gray-400 uppercase" style="font-family: Roboto, sans-serif;">${s.dist}</div>
                                        <button onclick="event.stopPropagation(); selectLocation(${s.locationId || "null"}, '${s.name}', '${s.address}', '${s.dist}')" class="bg-violet-600 text-white text-[9px] px-3.5 py-1.5 rounded-full uppercase font-black tracking-widest whitespace-nowrap shadow-sm active:scale-95">Order Here</button>
                                        <span class="text-[10px] text-gray-400 underline uppercase font-bold" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>`;
    }
  },
  "locations-alt": () => {
    const getSet = () => {
      const list =
        mockupState.apiLocations && mockupState.apiLocations.length > 0
          ? mockupState.apiLocations
          : LOCATIONS;
      if (
        mockupState.locationFilter === "Near Me" ||
        mockupState.locationFilter === "Nearby"
      )
        return list;
      if (mockupState.locationFilter === "My Locations") {
        const favorites = list.filter((loc) => loc.fav);
        const previous =
          list.length >= 3
            ? [list[2 % list.length], list[0], list[1 % list.length]]
            : list;
        const combined = [...favorites];
        previous.forEach((loc) => {
          if (!combined.some((c) => c.name === loc.name)) {
            combined.push(loc);
          }
        });
        return combined;
      }

      return list;
    };

    if (currentViewport === "desktop") {
      return `
                <div class="flex flex-row bg-white" style="height: calc(100vh - 70px);">
                    <div class="w-[450px] flex flex-col shrink-0 border-r border-gray-200 z-10 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.05)]">
                        <header class="p-4 border-b border-gray-100 flex items-center bg-white">
                            <button onclick="navigateTo('restaurant-home')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-chevron-left text-gray-600"></i></button>
                            <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Choose Location</h1>
                            <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                        </header>
                        <!-- Default Location Quick-Select -->
                        <div class="px-[36px] py-5 border-b border-[#1f0b35] bg-gradient-to-r from-violet-600 to-[#1f0b35] flex items-center justify-between gap-3 text-white">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-house text-violet-600 text-[10px]"></i>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-[11px] font-black text-violet-200 uppercase tracking-widest" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Previous Order</p>
                                    <p class="text-base font-black text-white truncate">i-Tea - Tempe <span class="text-xs font-normal text-violet-200">&nbsp;·&nbsp; 0.3 mi</span></p>
                                    <p class="text-xs text-violet-200 mt-0.5 truncate">825 W UNIVERSITY, TEMPE, AZ</p>
                                </div>
                            </div>
                            <button onclick="selectLocation(7, 'i-Tea - Tempe', '825 W UNIVERSITY, TEMPE, AZ', '0.8 mi')" class="shrink-0 px-4 py-2 bg-white text-violet-600 hover:bg-violet-50 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors active:scale-95">Order Here</button>
                        </div>
                        <div class="p-5 border-b border-gray-100 bg-white">
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-5 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex border-b border-gray-100 w-full justify-start gap-8 mb-5 pb-2">
                                ${[
                                  { id: "Near Me", name: "Near Me" },
                                  { id: "My Locations", name: "My Locations" },
                                ]
                                  .map((tab) => {
                                    const isActive =
                                      mockupState.locationFilter === tab.id ||
                                      (tab.id === "Near Me" &&
                                        mockupState.locationFilter ===
                                          "Nearby");
                                    const activeClass = isActive
                                      ? "border-violet-600 text-violet-600 border-b-2 font-black"
                                      : "text-gray-400 font-bold hover:text-gray-600";
                                    return `
                                        <button onclick="updateMockupState('locationFilter', '${tab.id}');" class="pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}" style="font-family: 'Roboto', sans-serif;">
                                            ${tab.name}
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/30">
                            ${getSet()
                              .map(
                                (s, idx) => `
                                <div data-location-card="${s.name}" class="p-5 border-2 ${s.name === (mockupState.selectedLocation || "i-Tea - Tempe") ? "border-violet-600 shadow-md" : idx === 0 || idx === 1 ? "border-violet-200" : s.fav ? "border-violet-200" : "border-gray-200"} rounded-2xl flex justify-between items-start cursor-pointer transition hover:border-violet-400 hover:shadow-md" style="${idx === 0 || idx === 1 ? "background: linear-gradient(to right, rgba(124, 58, 237, 0.07), white);" : s.name === (mockupState.selectedLocation || "i-Tea - Tempe") ? "background: rgba(124,58,237,0.05);" : ""}" onclick="focusLocation('${s.name}')">
                                    <div>
                                        ${(() => {
                                          const label =
                                            mockupState.locationLabels &&
                                            mockupState.locationLabels[s.name];
                                          return label
                                            ? `<span class="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1.5 block" style="font-family: Roboto, sans-serif;">${label}</span>`
                                            : "";
                                        })()}
                                        <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">
                                            <span>${s.name}</span>
                                            <button onclick="toggleLocationFavorite('${s.name}', event)" class="heart-btn relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-colors duration-200 active:scale-90" title="Toggle Favorite">
                                                ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-[19px]"></i>' : '<i class="fa-regular fa-heart text-gray-300 hover:text-violet-600 text-[19px]"></i>'}
                                                <div class="burst-lines absolute inset-0 pointer-events-none opacity-0">
                                                    <span class="line line-1"></span>
                                                    <span class="line line-2"></span>
                                                    <span class="line line-3"></span>
                                                    <span class="line line-4"></span>
                                                    <span class="line line-5"></span>
                                                    <span class="line line-6"></span>
                                                    <span class="line line-7"></span>
                                                    <span class="line line-8"></span>
                                                </div>
                                            </button>
                                        </h3>
                                        <p class="text-xs font-bold text-gray-400 mt-1.5 uppercase tracking-widest" style="font-family: Roboto, sans-serif;"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-4">
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-shop"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-car"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-square-parking"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-2">
                                        <div class="text-xs font-black text-gray-400 uppercase" style="font-family: Roboto, sans-serif;">${s.dist}</div>
                                        <button onclick="event.stopPropagation(); selectLocation(${s.locationId || "null"}, '${s.name}', '${s.address}', '${s.dist}')" class="bg-violet-600 text-white text-[10px] px-4 py-2 rounded-full uppercase font-black tracking-widest shadow-sm hover:bg-violet-700 transition active:scale-95">Order Here</button>
                                        <span class="text-[10px] text-gray-400 underline uppercase font-bold" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`,
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="flex-1 relative bg-[#e5e3df]">
                        <div id="locations-map" class="absolute inset-0 w-full h-full"></div>
                    </div>
                </div>`;
    } else {
      const list = getSet();
      let featuredStore = list.find((s) => s.name === "i-Tea - Tempe");
      if (!featuredStore && list.length > 0) {
        featuredStore = list[0];
      }

      return `
                <div class="flex flex-col min-h-screen bg-[#f8f9fa] relative animate-[fadeIn_0.2s_ease-out] pb-12 w-full">
                    <header class="bg-white px-3 py-2 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center shrink-0 border-b border-gray-100">
                        <div class="w-full max-w-[1080px] flex items-center px-1">
                            <!-- Left: Hamburger -->
                            <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors shrink-0">
                                <i class="fa-solid fa-bars text-xl"></i>
                            </button>
                            <!-- Center: i-Tea logo -->
                            <div class="flex-1 flex items-center justify-center">
                                <img src="images/i-tea-logo-new.png" class="h-9 w-auto object-contain" alt="i-Tea">
                            </div>
                            <!-- Right: Cart icon -->
                            <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                                ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                            </button>
                        </div>
                    </header>

                    <div class="w-full max-w-[640px] mx-auto px-4 py-4 space-y-4">
                        <!-- Details subheader block -->
                        <div class="bg-transparent flex flex-col w-full py-1">
                            <button onclick="navigateTo('restaurant-home')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors self-start mb-2">
                                <i class="fa-solid fa-chevron-left text-[10px] text-violet-600"></i>
                                <span>Back</span>
                            </button>
                            <h1 class="font-branding font-black text-[#1f0b35] text-[32px] tracking-tight leading-none uppercase text-center w-full">Choose Location</h1>
                        </div>

                        ${
                          featuredStore
                            ? `
                        <!-- Previous Order Quick-Select -->
                        <div class="bg-gradient-to-br from-violet-600 to-[#1f0b35] rounded-3xl p-5 flex flex-col gap-4 text-white shadow-md border border-[#1f0b35]">
                            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div class="flex items-start gap-3 w-full sm:w-auto min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-inner mt-1">
                                        <i class="fa-solid fa-house text-violet-600 text-sm"></i>
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <p class="text-[11px] font-black text-violet-200 uppercase tracking-widest" style="font-family: 'Roboto', sans-serif; font-weight: 700;">
                                            ${(mockupState.locationLabels && mockupState.locationLabels[featuredStore.name]) || (featuredStore.name === "i-Tea - Tempe" ? "Previous Order" : featuredStore.fav ? "Favorite Location" : "Closest Location")}
                                        </p>
                                        <p class="text-base font-black text-white truncate leading-tight mt-0.5">${featuredStore.name} <span class="text-xs font-normal text-violet-200">&nbsp;·&nbsp; ${featuredStore.dist}</span></p>
                                        <p class="text-xs text-violet-200 mt-1 truncate">${featuredStore.address}</p>
                                        <p class="text-[10px] font-bold text-violet-300 mt-1.5 uppercase tracking-widest" style="font-family: Roboto, sans-serif;"><i class="fa-regular fa-clock mr-1 text-violet-200"></i> ${featuredStore.hours}</p>
                                        
                                        <div class="flex gap-3 mt-3 overflow-x-auto no-scrollbar">
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-violet-100 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-shop text-[11px] text-white"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-violet-100 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-car text-[11px] text-white"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-violet-100 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-square-parking text-[11px] text-white"></i> Curbside</span>
                                        </div>
                                    </div>
                                </div>
                                <button onclick="selectLocation(${featuredStore.locationId || "null"}, '${featuredStore.name}', '${featuredStore.address}', '${featuredStore.dist}')" class="w-full sm:w-auto shrink-0 px-6 py-3 bg-white text-violet-600 hover:bg-violet-50 rounded-full text-xs font-black uppercase tracking-widest shadow-sm transition-colors active:scale-95 text-center">Order Here</button>
                            </div>
                            
                            <!-- Embedded Map Container -->
                            <div class="w-full h-[180px] rounded-2xl overflow-hidden relative border border-violet-500/50 shadow-inner z-0 mt-1">
                                <div id="locations-map" class="absolute inset-0 w-full h-full bg-[#e5e3df]"></div>
                            </div>
                        </div>
                        `
                            : ""
                        }

                        <!-- Search City & Filters -->
                        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-4">
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex border-b border-gray-100 w-full justify-around pb-1">
                                ${[
                                  { id: "Near Me", name: "Near Me" },
                                  { id: "My Locations", name: "My Locations" },
                                ]
                                  .map((tab) => {
                                    const isActive =
                                      mockupState.locationFilter === tab.id ||
                                      (tab.id === "Near Me" &&
                                        mockupState.locationFilter ===
                                          "Nearby");
                                    const activeClass = isActive
                                      ? "border-violet-600 text-violet-600 border-b-2 font-black"
                                      : "text-gray-400 font-bold hover:text-gray-600";
                                    return `
                                        <button onclick="updateMockupState('locationFilter', '${tab.id}');" class="pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}" style="font-family: 'Roboto', sans-serif;">
                                            ${tab.name}
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>

                        <!-- Other Locations List -->
                        <div class="space-y-3">
                            <h4 class="text-xs font-black uppercase tracking-wider text-gray-400 px-2" style="font-family: Roboto, sans-serif;">Other Locations</h4>
                            ${list
                              .filter(
                                (s) =>
                                  !featuredStore ||
                                  s.name !== featuredStore.name,
                              )
                              .map(
                                (s, idx) => `
                                <div data-location-card="${s.name}" class="bg-white p-5 border border-gray-100 rounded-3xl flex justify-between items-start cursor-pointer active:scale-[0.98] transition-all hover:shadow-md" onclick="focusLocation('${s.name}')">
                                    <div class="min-w-0 flex-1">
                                        ${(() => {
                                          const label =
                                            mockupState.locationLabels &&
                                            mockupState.locationLabels[s.name];
                                          return label
                                            ? `<span class="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1.5 block" style="font-family: Roboto, sans-serif;">${label}</span>`
                                            : "";
                                        })()}
                                        <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">
                                            <span>${s.name}</span>
                                            <button onclick="toggleLocationFavorite('${s.name}', event)" class="heart-btn relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-colors duration-200 active:scale-90" title="Toggle Favorite">
                                                ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-[19px]"></i>' : '<i class="fa-regular fa-heart text-gray-300 hover:text-violet-600 text-[19px]"></i>'}
                                                <div class="burst-lines absolute inset-0 pointer-events-none opacity-0">
                                                    <span class="line line-1"></span>
                                                    <span class="line line-2"></span>
                                                    <span class="line line-3"></span>
                                                    <span class="line line-4"></span>
                                                    <span class="line line-5"></span>
                                                    <span class="line line-6"></span>
                                                    <span class="line line-7"></span>
                                                    <span class="line line-8"></span>
                                                </div>
                                            </button>
                                        </h3>
                                        <p class="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest" style="font-family: Roboto, sans-serif;"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-3 mt-3">
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-shop text-[11px]"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-car text-[11px]"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-square-parking text-[11px]"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-2 shrink-0 ml-3">
                                        <div class="text-[11px] font-black text-gray-400 uppercase" style="font-family: Roboto, sans-serif;">${s.dist}</div>
                                        <button onclick="event.stopPropagation(); selectLocation(${s.locationId || "null"}, '${s.name}', '${s.address}', '${s.dist}')" class="bg-violet-600 text-white text-[9px] px-3.5 py-1.5 rounded-full uppercase font-black tracking-widest whitespace-nowrap shadow-sm active:scale-95 hover:bg-violet-700">Order Here</button>
                                        <span class="text-[10px] text-gray-400 underline uppercase font-bold cursor-pointer" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>`;
    }
  },
  // Duplicate location-favorites route handler removed (actual implementation below)
  "order-details": () => {
    const isDesktop = currentViewport === "desktop";
    const btn = (icon, label) => {
      const isActive = mockupState.fulfillmentMode === label;
      const clickHandler =
        label === "Dine In"
          ? `navigateTo('menu-scan')`
          : `updateMockupState('fulfillmentMode', '${label}')`;
      return `
                    <button onclick="${clickHandler}" class="flex flex-col items-center justify-center gap-1 py-3 border-2 rounded-xl font-bold transition-all shadow-sm ${isActive ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]" : "bg-white text-gray-800 border-gray-100"}">
                        <i class="fa-solid ${icon} text-xl ${isActive ? "text-white" : "text-violet-600"}"></i>
                        <span class="text-[11px] font-black uppercase">${label}</span>
                    </button>`;
    };

    const monthOffset = mockupState.monthOffset || 0;
    const months = [
      { name: "March 2026", days: 31, startDay: 0 },
      { name: "April 2026", days: 30, startDay: 3 },
      { name: "May 2026", days: 31, startDay: 5 },
    ];
    const currentMonth = months[monthOffset];

    let calendarCells = "";
    for (let i = 0; i < currentMonth.startDay; i++) {
      calendarCells += `<div></div>`;
    }
    for (let i = 1; i <= currentMonth.days; i++) {
      let isPast = monthOffset === 0 && i < 8; // Assuming the 8th is "Today" based on previous mockup
      if (isPast) {
        calendarCells += `<div class="py-2 text-gray-300 font-bold text-sm text-center">${i}</div>`;
      } else {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = dayNames[(currentMonth.startDay + i - 1) % 7];
        const monthNameShort = currentMonth.name.split(" ")[0].substring(0, 3);
        let label =
          i === 8 && monthOffset === 0
            ? "Today"
            : i === 9 && monthOffset === 0
              ? "Tomorrow"
              : `${dayName}, ${monthNameShort} ${i}`;
        let isSelected = mockupState.selectedDay === label;
        calendarCells += `<button onclick="updateMockupState('selectedDay', '${label}'); mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="py-2 rounded-full font-bold text-sm text-center ${isSelected ? "bg-violet-600 text-white shadow-md flex items-center justify-center shrink-0 w-8 h-8 mx-auto" : "text-gray-800 hover:bg-violet-100 transition-colors flex items-center justify-center shrink-0 w-8 h-8 mx-auto"}">${i}</button>`;
      }
    }

    const dateModalClass = mockupState.modalOpen === "date" ? "flex" : "hidden";
    const timeModalClass = mockupState.modalOpen === "time" ? "flex" : "hidden";
    const warningModalClass =
      mockupState.modalOpen === "warning" ? "flex" : "hidden";

    const times15 = [
      "11:30 AM",
      "11:45 AM",
      "12:00 PM",
      "12:15 PM",
      "12:30 PM",
      "12:45 PM",
      "1:00 PM",
      "1:15 PM",
      "1:30 PM",
      "1:45 PM",
      "2:00 PM",
      "2:15 PM",
      "2:30 PM",
      "2:45 PM",
      "3:00 PM",
      "3:15 PM",
      "3:30 PM",
      "3:45 PM",
      "4:00 PM",
      "4:15 PM",
      "4:30 PM",
      "4:45 PM",
      "5:00 PM",
      "5:15 PM",
      "5:30 PM",
      "5:45 PM",
      "6:00 PM",
      "6:15 PM",
      "6:30 PM",
      "6:45 PM",
      "7:00 PM",
      "7:15 PM",
      "7:30 PM",
      "7:45 PM",
      "8:00 PM",
      "8:15 PM",
      "8:30 PM",
      "8:45 PM",
      "9:00 PM",
    ];

    // Proximity to close check
    const isNearClose =
      mockupState.selectedTimeSlot.includes("8:") ||
      mockupState.selectedTimeSlot.includes("9:");

    const locationTitle = mockupState.selectedLocation || "i-Tea - Tempe";
    const locList =
      mockupState.apiLocations && mockupState.apiLocations.length > 0
        ? mockupState.apiLocations
        : LOCATIONS;
    const locationObj =
      locList.find((l) => l.name === locationTitle) ||
      locList.find((l) => l.name === "i-Tea - Tempe") ||
      locList[0];
    const rawLocationAddress =
      locationObj?.address || "825 W UNIVERSITY, TEMPE, AZ";
    const locationAddress = rawLocationAddress
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/,\s*[A-Z]{2}\b/i, (match) => match.toUpperCase());
    const closeTime =
      (locationObj?.hours || "11:30 AM to 9:30 PM").split("to")[1]?.trim() ||
      "9:30 PM";
    const getOrderCutoffTime = (timeStr, minutes) => {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return timeStr;
      let h = parseInt(match[1]),
        m = parseInt(match[2]),
        p = match[3].toUpperCase();
      if (p === "PM" && h !== 12) h += 12;
      if (p === "AM" && h === 12) h = 0;
      let total = h * 60 + m - minutes;
      if (total < 0) total += 24 * 60;
      let nh = Math.floor(total / 60),
        nm = total % 60;
      let np = nh >= 12 ? "PM" : "AM";
      let dh = nh % 12 || 12;
      return `${dh}:${nm.toString().padStart(2, "0")} ${np}`;
    };
    const orderCutoffTime = getOrderCutoffTime(closeTime, 20);

    return `
                <div class="flex flex-col h-full bg-[#FAF9F6] relative overflow-hidden">
                    <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black"><button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4"><i class="fa-solid fa-bars text-xl"></i></button><span class="text-lg font-black text-violet-600 flex-1 text-center">Order Details</span><button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button></header>
                    ${
                      !isDesktop
                        ? `
                    <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2 flex items-center justify-between relative z-50">
                        <button onclick="navigateTo('locations')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                            <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                            <span>Back</span>
                        </button>
                        <div>
                            <button onclick="toggleMenu(event, 'location-dropdown-order-details')" class="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-bold hover:text-violet-600 hover:bg-violet-100 px-2 py-1.5 rounded-lg transition-colors text-right cursor-pointer">
                                <i class="fa-solid fa-location-dot text-violet-600"></i>
                                <span class="truncate max-w-[140px] sm:max-w-[200px] tracking-wider font-medium">${locationAddress.replace(/, [A-Z]{2}(\s\d{5})?$/, "")}</span>
                            </button>
                            <!-- Dropdown Menu -->
                            <div id="location-dropdown-order-details" class="hidden absolute left-4 right-4 sm:left-auto sm:right-4 sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                                <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                                    <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationTitle}</h4>
                                    <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                                    <div class="space-y-3 text-sm">
                                        <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                            <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                                <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                            </div>
                                            <div>
                                                <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                                <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "11:30 AM to 9:30 PM"}</span>
                                                <span class="text-gray-800 font-bold block text-sm mt-1">Closes at ${closeTime}</span>
                                                <span class="text-red-500 font-medium block text-xs leading-tight mt-1">All orders must be placed by ${orderCutoffTime} and picked up before close at ${closeTime}.</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                            <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                                <i class="fa-solid fa-phone text-violet-600 text-sm"></i>
                                            </div>
                                            <div>
                                                <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Phone</span>
                                                <span class="text-gray-600 font-medium text-sm">(480) 555-0123</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                            <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                                <i class="fa-solid fa-car text-violet-600 text-sm"></i>
                                            </div>
                                            <div>
                                                <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Drive-Thru / Curbside</span>
                                                <span class="text-gray-600 font-medium text-xs leading-relaxed block">Available during regular business hours. Pull up to the front for curbside.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 pt-4 border-t border-gray-100">
                                        <button onclick="navigateTo('locations')" class="w-full text-center text-sm font-black text-violet-600 uppercase tracking-widest hover:text-violet-700 transition-colors py-2">Change Location</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                        : ""
                    }
                    <div class="flex-1 overflow-y-auto p-6 md:p-8 max-w-3xl mx-auto w-full ${currentViewport === "desktop" ? "pb-12" : "pb-32"}">
                        <!-- Location Info Card -->
                        <div class="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 mb-5 cursor-pointer active:scale-[0.98] transition-all hover:bg-gray-50" onclick="navigateTo('locations')">
                            <div class="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-location-dot text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-black text-[#33424A] uppercase tracking-tight text-sm leading-tight">${locationTitle}</h3>
                                <p class="text-xs text-gray-500 font-semibold mt-0.5">${locationAddress}</p>
                                <p class="text-[10px] font-bold text-violet-600 mt-1 uppercase tracking-widest">Change Location</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <h1 class="text-2xl font-black text-gray-900 leading-tight mb-4 tracking-tighter uppercase font-black">Order Details</h1>
                        <div class="grid grid-cols-2 gap-3">
                            ${btn("fa-shop", "In-store")}
                            ${btn("fa-car", "Drive Through")}
                            ${btn("fa-square-parking", "Curbside")}
                            ${btn("fa-mobile-screen-button", "Dine In")}
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-100">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 font-black">Ordering For</p>
                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="updateMockupState('orderTime', 'ASAP')" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === "ASAP" ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]" : "bg-white text-gray-400 border-gray-100"} font-black uppercase"><i class="fa-solid fa-bolt text-lg mb-0.5"></i>ASAP</button>
                                <button onclick="updateMockupState('orderTime', 'Later'); navigateTo(currentPage);" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === "Later" ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]" : "bg-white text-gray-400 border-gray-100"} font-black uppercase"><i class="fa-solid fa-calendar-day text-lg mb-0.5"></i>Later</button>
                            </div>
                            
                            <div class="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all">
                                <div class="flex justify-between items-center mb-3">
                                    <p class="text-[10px] font-black text-violet-600 uppercase tracking-widest">
                                        ${mockupState.orderTime === "ASAP" ? "Estimated Pickup Time" : "Scheduled Pickup"}
                                    </p>
                                </div>
                                <div class="flex gap-3">
                                    <button onclick="updateMockupState('orderTime', 'Later'); mockupState.modalOpen = 'date'; navigateTo(currentPage);" class="flex-1 py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-full font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full">
                                            <i class="fa-regular fa-calendar text-violet-600 shrink-0"></i> 
                                            <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.selectedDay === "Today" ? "Today" : mockupState.selectedDay}</span>
                                        </span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-full shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                    <button onclick="updateMockupState('orderTime', 'Later'); mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="flex-1 py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-full font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full">
                                            <i class="fa-regular fa-clock text-violet-600 shrink-0"></i> 
                                            <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.orderTime === "ASAP" ? times15[0] : mockupState.selectedTimeSlot}</span>
                                        </span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-full shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                </div>
                            </div>

                            ${
                              currentViewport === "desktop"
                                ? `
                            <div class="mt-8">
                                <button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-widest font-black">Start Order</button>
                            </div>
                            `
                                : ""
                            }
                        </div>
                    </div>
                    ${
                      currentViewport !== "desktop"
                        ? `
                    <div class="p-6 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0 z-50 shadow-lg"><button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-widest font-black">Start Order</button></div>
                    `
                        : ""
                    }

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
                                    <button onclick="mockupState.monthOffset = Math.max(0, (mockupState.monthOffset||0) - 1); navigateTo(currentPage);" class="${monthOffset === 0 ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-violet-600 transition-colors"} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-left text-sm"></i></button>
                                    <span class="font-black text-sm uppercase tracking-widest text-gray-800">${currentMonth.name}</span>
                                    <button onclick="mockupState.monthOffset = Math.min(2, (mockupState.monthOffset||0) + 1); navigateTo(currentPage);" class="${monthOffset === 2 ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-violet-600 transition-colors"} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-right text-sm"></i></button>
                                </div>
                                <div class="grid grid-cols-7 gap-1 text-center mb-2">
                                    ${["S", "M", "T", "W", "T", "F", "S"].map((d) => `<div class="text-[10px] font-black text-gray-400">${d}</div>`).join("")}
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
                                        ${times15
                                          .map((time, idx) => {
                                            const isThisTimeNearClose =
                                              time.includes("8:") ||
                                              time.includes("9:");
                                            const clickAction =
                                              isThisTimeNearClose &&
                                              !mockupState.acknowledgedClose
                                                ? `updateMockupState('selectedTimeSlot', '${time}'); mockupState.modalOpen = 'warning'; navigateTo(currentPage);`
                                                : `updateMockupState('selectedTimeSlot', '${time}'); navigateTo(currentPage);`;

                                            return `
                                            <button id="time-slot-${idx}" onclick="${clickAction}" class="py-3 rounded-full border-2 ${mockupState.selectedTimeSlot === time ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200" : "border-gray-100 text-gray-700 hover:border-violet-300 bg-white"} font-black text-[11px] transition-all tracking-tight whitespace-nowrap">${time}</button>
                                            `;
                                          })
                                          .join("")}
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
  "order-details-alt": () => {
    const isDesktop = currentViewport === "desktop";

    const options = [
      {
        id: "In-store",
        label: "In-Store",
        icon: "fa-shop",
        desc: "Carry-out, walk-in, or pickup inside the restaurant",
      },
      {
        id: "Drive Through",
        label: "Drive-Thru",
        icon: "fa-car",
        desc: "Stay in your car and get your order from the window",
      },
      {
        id: "Curbside",
        label: "Curbside",
        icon: "fa-square-parking",
        desc: "Park in a designated spot and we'll bring it to you",
      },
      {
        id: "Dine In",
        label: "Dine In",
        icon: "fa-mobile-screen-button",
        desc: "Order at your table and dine inside the restaurant",
      },
    ];

    const monthOffset = mockupState.monthOffset || 0;
    const months = [
      { name: "March 2026", days: 31, startDay: 0 },
      { name: "April 2026", days: 30, startDay: 3 },
      { name: "May 2026", days: 31, startDay: 5 },
    ];
    const currentMonth = months[monthOffset];

    let calendarCells = "";
    for (let i = 0; i < currentMonth.startDay; i++) {
      calendarCells += `<div></div>`;
    }
    for (let i = 1; i <= currentMonth.days; i++) {
      let isPast = monthOffset === 0 && i < 8;
      if (isPast) {
        calendarCells += `<div class="py-2 text-gray-300 font-bold text-sm text-center">${i}</div>`;
      } else {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = dayNames[(currentMonth.startDay + i - 1) % 7];
        const monthNameShort = currentMonth.name.split(" ")[0].substring(0, 3);
        let label =
          i === 8 && monthOffset === 0
            ? "Today"
            : i === 9 && monthOffset === 0
              ? "Tomorrow"
              : `${dayName}, ${monthNameShort} ${i}`;
        let isSelected = mockupState.selectedDay === label;
        calendarCells += `<button onclick="updateMockupState('selectedDay', '${label}'); mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="py-2 rounded-full font-bold text-sm text-center ${isSelected ? "bg-violet-600 text-white shadow-md flex items-center justify-center shrink-0 w-8 h-8 mx-auto" : "text-gray-800 hover:bg-violet-100 transition-colors flex items-center justify-center shrink-0 w-8 h-8 mx-auto"}">${i}</button>`;
      }
    }

    const dateModalClass = mockupState.modalOpen === "date" ? "flex" : "hidden";
    const timeModalClass = mockupState.modalOpen === "time" ? "flex" : "hidden";
    const warningModalClass =
      mockupState.modalOpen === "warning" ? "flex" : "hidden";
    const scheduleModalClass =
      mockupState.modalOpen === "schedule-pickup" ? "flex" : "hidden";

    const times15 = [
      "11:30 AM",
      "11:45 AM",
      "12:00 PM",
      "12:15 PM",
      "12:30 PM",
      "12:45 PM",
      "1:00 PM",
      "1:15 PM",
      "1:30 PM",
      "1:45 PM",
      "2:00 PM",
      "2:15 PM",
      "2:30 PM",
      "2:45 PM",
      "3:00 PM",
      "3:15 PM",
      "3:30 PM",
      "3:45 PM",
      "4:00 PM",
      "4:15 PM",
      "4:30 PM",
      "4:45 PM",
      "5:00 PM",
      "5:15 PM",
      "5:30 PM",
      "5:45 PM",
      "6:00 PM",
      "6:15 PM",
      "6:30 PM",
      "6:45 PM",
      "7:00 PM",
      "7:15 PM",
      "7:30 PM",
      "7:45 PM",
      "8:00 PM",
      "8:15 PM",
      "8:30 PM",
      "8:45 PM",
      "9:00 PM",
    ];
    const isNearClose =
      mockupState.selectedTimeSlot.includes("8:") ||
      mockupState.selectedTimeSlot.includes("9:");
    const locationTitle = mockupState.selectedLocation || "i-Tea";
    const locList =
      mockupState.apiLocations && mockupState.apiLocations.length > 0
        ? mockupState.apiLocations
        : LOCATIONS;
    const locationObj =
      locList.find((l) => l.name === locationTitle) ||
      locList.find((l) => l.name === "i-Tea - Tempe") ||
      locList[0];
    const rawLocationAddress =
      locationObj?.address || "825 W UNIVERSITY, TEMPE, AZ";
    const locationAddress = rawLocationAddress
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/,\s*[A-Z]{2}\b/i, (match) => match.toUpperCase());
    const closeTime =
      (locationObj?.hours || "11:30 AM to 9:30 PM").split("to")[1]?.trim() ||
      "9:30 PM";
    const getOrderCutoffTime = (timeStr, minutes) => {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return timeStr;
      let h = parseInt(match[1]),
        m = parseInt(match[2]),
        p = match[3].toUpperCase();
      if (p === "PM" && h !== 12) h += 12;
      if (p === "AM" && h === 12) h = 0;
      let total = h * 60 + m - minutes;
      if (total < 0) total += 24 * 60;
      let nh = Math.floor(total / 60),
        nm = total % 60;
      let np = nh >= 12 ? "PM" : "AM";
      let dh = nh % 12 || 12;
      return `${dh}:${nm.toString().padStart(2, "0")} ${np}`;
    };
    const orderCutoffTime = getOrderCutoffTime(closeTime, 20);

    const renderOptionCard = (opt) => {
      const isActive = mockupState.fulfillmentMode === opt.id;
      const clickHandler =
        opt.id === "Dine In"
          ? `navigateTo('menu-scan')`
          : `updateMockupState('fulfillmentMode', '${opt.id}'); updateMockupState('modalOpen', 'schedule-pickup'); navigateTo(currentPage);`;

      return `
                <div onclick="${clickHandler}" class="flex flex-col p-6 bg-white rounded-2xl shadow-sm border-2 cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md ${isActive ? "border-violet-600 ring-2 ring-violet-100 bg-violet-50/10" : "border-gray-100 hover:border-violet-300"}">
                    <div class="flex items-center gap-5 w-full">
                        <div class="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                            <i class="fa-solid ${opt.icon} text-2xl text-violet-600"></i>
                        </div>
                        <div class="flex-1 text-left">
                            <h3 class="font-black text-violet-600 text-lg uppercase tracking-tight leading-tight">${opt.label}</h3>
                            <p class="text-xs text-gray-500 font-medium mt-1 leading-normal">${opt.desc}</p>
                        </div>
                    </div>
                </div>
            `;
    };

    const mainContent = `
            <div class="flex-1 flex flex-col py-6 px-6 md:px-12 max-w-2xl mx-auto w-full">
                <div class="text-center mb-5 shrink-0">
                    <h2 class="text-3xl md:text-4xl font-branding font-black text-[#1A1A1A] uppercase tracking-tight leading-tight mb-3">What type of order can we get started for you?</h2>
                    <p class="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Order ahead for pickup or dine in</p>
                </div>

                <div class="${isDesktop ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"} mb-6">
                    ${options.map(renderOptionCard).join("")}
                </div>

                ${
                  mockupState.fulfillmentMode &&
                  mockupState.fulfillmentMode !== "Dine In"
                    ? `
                <div onclick="updateMockupState('modalOpen', 'schedule-pickup'); navigateTo(currentPage);" class="mb-8 p-6 bg-white rounded-3xl border border-gray-100 shadow-md text-center cursor-pointer hover:border-violet-300 transition-all active:scale-[0.99] flex flex-col items-center justify-center gap-1">
                    <span class="text-[11px] font-black text-violet-600 uppercase tracking-widest">
                        ${mockupState.fulfillmentMode.toUpperCase()} PICKUP TIME
                    </span>
                    <div class="font-branding font-black text-gray-900 text-[40px] md:text-[44px] tracking-tight uppercase leading-none mt-1.5 mb-1">
                        ${mockupState.orderTime === "ASAP" ? `ASAP ~ ${times15[0]}` : `${mockupState.selectedDay === "Today" ? "Today" : mockupState.selectedDay.split(",")[0]} at ${mockupState.selectedTimeSlot}`}
                    </div>
                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider underline">Tap to Change Time</span>
                </div>
                `
                    : ""
                }

                <div>
                    <button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-widest font-black">Start Order</button>
                </div>
            </div>
        `;

    return `
            <div class="flex flex-col bg-[#FAF9F6] relative overflow-hidden" style="${isDesktop ? "height: calc(100vh - 70px);" : "height: 100vh;"}">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4"><i class="fa-solid fa-bars text-xl"></i></button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Order Details</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2 flex items-center justify-between relative z-50">
                    <button onclick="navigateTo('locations-alt')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                    <div>
                        <button onclick="toggleMenu(event, 'location-dropdown-order-details-alt')" class="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-bold hover:text-violet-600 hover:bg-violet-100 px-2 py-1.5 rounded-lg transition-colors text-right cursor-pointer">
                            <i class="fa-solid fa-location-dot text-violet-600"></i>
                            <span class="truncate max-w-[140px] sm:max-w-[200px] tracking-wider font-medium">${locationAddress.replace(/, [A-Z]{2}(\s\d{5})?$/, "")}</span>
                        </button>
                        <!-- Dropdown Menu -->
                        <div id="location-dropdown-order-details-alt" class="hidden absolute left-4 right-4 sm:left-auto sm:right-4 sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                            <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                                <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationTitle}</h4>
                                <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                                <div class="space-y-3 text-sm">
                                    <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                        <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                        </div>
                                        <div>
                                            <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                            <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "11:30 AM to 9:30 PM"}</span>
                                            <span class="text-gray-800 font-bold block text-sm mt-1">Closes at ${closeTime}</span>
                                            <span class="text-red-500 font-medium block text-xs leading-tight mt-1">All orders must be placed by ${orderCutoffTime} and picked up before close at ${closeTime}.</span>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                        <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <i class="fa-solid fa-phone text-violet-600 text-sm"></i>
                                        </div>
                                        <div>
                                            <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Phone</span>
                                            <span class="text-gray-600 font-medium text-sm">(480) 555-0123</span>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                        <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <i class="fa-solid fa-car text-violet-600 text-sm"></i>
                                        </div>
                                        <div>
                                            <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Drive-Thru / Curbside</span>
                                            <span class="text-gray-600 font-medium text-xs leading-relaxed block">Available during regular business hours. Pull up to the front for curbside.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-5 pt-4 border-t border-gray-100">
                                    <button onclick="navigateTo('locations-alt')" class="w-full text-center text-sm font-black text-violet-600 uppercase tracking-widest hover:text-violet-700 transition-colors py-2">Change Location</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
                    : ""
                }

                <div class="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden h-full">
                    ${
                      isDesktop
                        ? `
                    <div class="w-[38%] relative h-full shrink-0 overflow-hidden">
                        <img src="images/iTea-hero3.png" class="w-full h-full object-cover object-right" style="height: 100% !important; object-fit: cover !important;">
                    </div>
                    `
                        : ""
                    }

                    <div class="flex-1 overflow-y-auto pb-12 w-full">
                        ${mainContent}
                    </div>
                </div>

                <!-- Schedule Pickup Modal -->
                <div id="schedule-pickup-modal" class="absolute inset-0 bg-black/60 z-[90] ${scheduleModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                    <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[85vh]">
                        <div class="flex justify-between items-center mb-4 shrink-0">
                            <h3 class="font-black text-xl uppercase text-gray-900">Schedule Pickup</h3>
                            <button onclick="mockupState.modalOpen = null; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        
                        <div class="flex-1 overflow-y-auto scrollbar-hide space-y-4 pr-1">
                            <!-- Estimated pickup time card above selection -->
                            <div class="p-4 bg-violet-50/40 rounded-2xl border border-violet-100 text-left">
                                <p class="text-[10px] font-black text-violet-600 uppercase tracking-widest">Selected Pickup Time</p>
                                <div class="flex items-center gap-2 mt-2">
                                    <i class="fa-regular fa-clock text-violet-600 border border-violet-100 rounded p-1 bg-white"></i>
                                    <p class="font-black text-gray-800 text-sm tracking-tight">
                                        ${mockupState.orderTime === "ASAP" ? `Today ASAP (approx. at ${times15[0]})` : `${mockupState.selectedDay} at ${mockupState.selectedTimeSlot}`}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 font-black text-left">Ordering For</p>
                                <div class="grid grid-cols-2 gap-3 mb-4">
                                    <button onclick="updateMockupState('orderTime', 'ASAP'); navigateTo(currentPage);" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === "ASAP" ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]" : "bg-white text-gray-400 border-gray-100"} font-black uppercase"><i class="fa-solid fa-bolt text-lg mb-0.5"></i>ASAP</button>
                                    <button onclick="updateMockupState('orderTime', 'Later'); navigateTo(currentPage);" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === "Later" ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.3)]" : "bg-white text-gray-400 border-gray-100"} font-black uppercase"><i class="fa-solid fa-calendar-day text-lg mb-0.5"></i>Later</button>
                                </div>

                                <div class="space-y-3">
                                    <button onclick="updateMockupState('orderTime', 'Later'); mockupState.modalOpen = 'date'; navigateTo(currentPage);" class="w-full py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-full font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full"><i class="fa-regular fa-calendar text-violet-600 shrink-0"></i> <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.selectedDay === "Today" ? "Today" : mockupState.selectedDay}</span></span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-full shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                    <button onclick="updateMockupState('orderTime', 'Later'); mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="w-full py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-full font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full"><i class="fa-regular fa-clock text-violet-600 shrink-0"></i> <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.orderTime === "ASAP" ? times15[0] : mockupState.selectedTimeSlot}</span></span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-full shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="shrink-0 pt-4 border-t border-gray-100">
                            <button onclick="mockupState.modalOpen = null; navigateTo(currentPage);" class="w-full py-4 rounded-full bg-violet-600 text-white font-black uppercase text-sm tracking-widest shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] transition-all active:scale-95">Confirm Time</button>
                        </div>
                    </div>
                </div>

                <!-- Date Modal -->
                <div id="date-modal" class="absolute inset-0 bg-black/60 z-[100] ${dateModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                    <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[85vh]">
                        <div class="flex justify-between items-center mb-5 shrink-0">
                            <h3 class="font-black text-xl uppercase text-gray-900">Choose Day</h3>
                            <button onclick="mockupState.modalOpen = 'schedule-pickup'; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm overflow-y-auto scrollbar-hide">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <button onclick="mockupState.monthOffset = Math.max(0, (mockupState.monthOffset||0) - 1); navigateTo(currentPage);" class="${monthOffset === 0 ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-violet-600 transition-colors"} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-left text-sm"></i></button>
                                <span class="font-black text-sm uppercase tracking-widest text-gray-800">${currentMonth.name}</span>
                                <button onclick="mockupState.monthOffset = Math.min(2, (mockupState.monthOffset||0) + 1); navigateTo(currentPage);" class="${monthOffset === 2 ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-violet-600 transition-colors"} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-right text-sm"></i></button>
                            </div>
                            <div class="grid grid-cols-7 gap-1 text-center mb-2">
                                ${["S", "M", "T", "W", "T", "F", "S"].map((d) => `<div class="text-[10px] font-black text-gray-400">${d}</div>`).join("")}
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
                            <button onclick="mockupState.modalOpen = 'schedule-pickup'; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        
                        <div class="flex-1 flex flex-col min-h-0 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mb-5">
                            <div class="overflow-y-auto scrollbar-hide h-[230px] pr-1">
                                <div class="grid grid-cols-3 gap-2">
                                    ${times15
                                      .map((time, idx) => {
                                        const isThisTimeNearClose =
                                          time.includes("8:") ||
                                          time.includes("9:");
                                        const clickAction =
                                          isThisTimeNearClose &&
                                          !mockupState.acknowledgedClose
                                            ? `updateMockupState('selectedTimeSlot', '${time}'); mockupState.modalOpen = 'warning'; navigateTo(currentPage);`
                                            : `updateMockupState('selectedTimeSlot', '${time}'); navigateTo(currentPage);`;

                                        return `
                                        <button id="time-slot-${idx}" onclick="${clickAction}" class="py-3 rounded-full border-2 ${mockupState.selectedTimeSlot === time ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200" : "border-gray-100 text-gray-700 hover:border-violet-300 bg-white"} font-black text-[11px] transition-all tracking-tight whitespace-nowrap">${time}</button>
                                        `;
                                      })
                                      .join("")}
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
                                    mockupState.modalOpen = 'schedule-pickup';
                                    navigateTo(currentPage);
                                }
                            " class="w-full py-4 rounded-full bg-violet-600 text-white font-black uppercase text-sm tracking-widest shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] transition-all active:scale-95">Confirm Time</button>
                        </div>
                    </div>
                </div>

                <div id="warning-modal" class="absolute inset-0 bg-black/60 z-[110] ${warningModalClass} flex-col justify-center items-center backdrop-blur-sm p-4">
                    <div class="bg-red-600 w-full sm:w-[380px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <i class="fa-solid fa-clock text-red-600 text-3xl"></i>
                        </div>
                        
                        <h3 class="font-black text-2xl uppercase text-white mb-2 leading-tight">Store Closes<br>at 9:00 PM</h3>
                        
                        <p class="text-red-100 font-bold mb-8 px-2">
                            ${isNearClose ? "You have selected a pickup time within an hour of close. Please ensure you pick up your order before our doors close." : "Please ensure you pick up your order before our doors close."}
                        </p>
                        
                        <button onclick="updateMockupState('acknowledgedClose', true); mockupState.modalOpen = 'schedule-pickup'; navigateTo(currentPage);" class="w-full py-4 rounded-full bg-white text-red-600 font-black uppercase text-sm tracking-widest shadow-xl hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-check text-lg"></i> I Understand
                        </button>
                        
                        <button onclick="mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="mt-4 text-red-200 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Go Back</button>
                    </div>
                </div>
            </div>
        `;
  },
  "menu-scan": () => {
    const isDesktop = currentViewport === "desktop";
    const isDesktopOrTablet =
      currentViewport === "desktop" || currentViewport === "tablet";

    const imageHtml = `
            <div class="${isDesktop ? "w-[38%] relative h-full shrink-0 overflow-hidden" : "w-full max-w-md aspect-square rounded-[32px] overflow-hidden shadow-2xl mt-8 mx-auto"}">
                <img src="images/qr-scan-table-sm.jpg" class="w-full h-full object-cover object-center" ${isDesktop ? 'style="height: 100% !important; object-fit: cover !important;"' : ""}>
            </div>
        `;

    let scanOverlayHtml = "";
    if (mockupState.isScanning) {
      scanOverlayHtml = `
                <div class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/80 backdrop-blur-md transition-all animate-[fadeIn_0.3s_ease-out]">
                    <!-- Target box -->
                    <div class="relative w-64 h-64 border-4 border-violet-500 rounded-3xl overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.3)]">
                        <!-- Corners indicators -->
                        <div class="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-violet-400 -mt-1 -ml-1"></div>
                        <div class="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-violet-400 -mt-1 -mr-1"></div>
                        <div class="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-violet-400 -mb-1 -ml-1"></div>
                        <div class="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-violet-400 -mb-1 -mr-1"></div>
                        
                        <!-- Moving Laser Line -->
                        <div class="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_15px_#7c3aed] scan-laser-line"></div>
                        
                        <i class="fa-solid fa-qrcode text-6xl text-violet-400/30"></i>
                    </div>
                    
                    <span class="mt-8 text-sm font-black text-violet-400 uppercase tracking-widest animate-pulse">DECODING QR CODE...</span>
                    <span class="mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">DO NOT CLOSE CAMERA</span>
                </div>
            `;
    }

    const formContentHtml = `
            <div class="flex-1 flex flex-col justify-center py-6 px-6 md:px-12 max-w-2xl mx-auto w-full text-center">
                <h2 class="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight font-black text-gray-900 leading-tight">Ready to Dine In?</h2>
                <div class="space-y-4 text-left uppercase font-black text-gray-600 mb-8 max-w-sm mx-auto w-full">
                    <p class="text-sm flex gap-3"><span class="text-violet-600 font-black">1.</span><span>Find the QR code on your table.</span></p>
                    <p class="text-sm flex gap-3"><span class="text-violet-600 font-black">2.</span><span>Tap the button below to open camera.</span></p>
                    <p class="text-sm flex gap-3"><span class="text-violet-600 font-black">3.</span><span>Scan to start your order.</span></p>
                </div>
                <div class="w-full max-w-xs mx-auto mb-4">
                    <input type="file" id="qr-camera-input" accept="image/*" capture="environment" class="hidden" onchange="window.handleQRCameraCapture(event)">
                    <button onclick="document.getElementById('qr-camera-input').click();" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] flex items-center justify-center gap-3 active:scale-95 transition-all uppercase shadow-violet-100 font-black">
                        <i class="fa-solid fa-camera"></i>
                        <span>SCAN QR CODE</span>
                    </button>
                </div>

                ${!isDesktop ? imageHtml : ""}
            </div>
        `;

    return `
            <div class="flex flex-col bg-white relative overflow-hidden" style="${isDesktop ? "height: calc(100vh - 70px);" : "height: 100vh;"}">
                ${scanOverlayHtml}
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 font-black shrink-0">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Scan to Dine In</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('restaurant-home')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }

                <div class="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden h-full">
                    ${isDesktop ? imageHtml : ""}

                    <div class="flex-1 overflow-y-auto pb-12 w-full flex items-center justify-center">
                        ${formContentHtml}
                    </div>
                </div>
            </div>`;
  },
  menu: () => renderMenuPage(false),
  "menu-alt": () => renderMenuPage(true),
  customize: () => {
    const isDesktop = currentViewport === "desktop";
    const item = mockupState.selectedItem || MENU_ITEMS[1]; // Fallback to Taro Latte
    const basePrice = item.price;
    const detail = mockupState.selectedItemDetail;
    const sels = mockupState._customizeSubItems || {};
    const modSels = mockupState._customizeModifyTypes || {};

    // --- Dynamic total calculation from selected sub-items ---
    let extrasTotal = 0;
    for (const gid in sels) {
      const groupItems = sels[gid]?.items || {};
      for (const sid in groupItems) {
        extrasTotal +=
          (groupItems[sid].price || 0) * (groupItems[sid].quantity || 1);
      }
    }
    const totalPrice = (
      (basePrice + extrasTotal) *
      mockupState.itemQuantity
    ).toFixed(2);

    // --- Section header helper ---
    const sectionHeader = (label, required) => `
            <div class="flex justify-between items-center pb-2 border-b border-gray-100 mb-3">
                <span class="text-xs font-black text-violet-600 uppercase tracking-widest">${label}</span>
                ${required ? '<span class="text-[9px] font-bold text-red-400 uppercase tracking-widest">Required</span>' : ""}
            </div>`;

    // --- Render a single-select group (radio pills) ---
    const renderRadioGroup = (group) => {
      const gid = group.menuSubItemGroupId;
      const prices = group.groupPrices || [];
      const selectedId = Object.keys(sels[gid]?.items || {})[0];
      return prices
        .map((p) => {
          const sub = p.menuSubItem || {};
          const name = (sub.name || "").toUpperCase();
          const isSelected = String(p.menuSubItemId) === String(selectedId);
          return `
                <button onclick="window._selectSubItem(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${name.replace(/'/g, "\\'")}', ${p.price || 0}, true)" class="w-full flex justify-between items-center py-2 group">
                    <span class="text-sm font-black text-gray-700 uppercase tracking-tight">${name}</span>
                    <div class="w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${isSelected ? "border-violet-600 bg-violet-600" : "border-gray-200 group-hover:border-violet-300"}">
                        ${isSelected ? '<i class="fa-solid fa-check text-white text-[9px]"></i>' : ""}
                    </div>
                </button>`;
        })
        .join("");
    };

    // --- Render a multi-select group (stepper rows) ---
    const renderStepperGroup = (group) => {
      const gid = group.menuSubItemGroupId;
      const prices = group.groupPrices || [];
      return prices
        .map((p) => {
          const sub = p.menuSubItem || {};
          const name = (sub.name || "").toUpperCase();
          const price = p.price || 0;
          const fmtPrice = price === 0 ? "FREE" : `+$${price.toFixed(2)}`;
          const qty = sels[gid]?.items?.[p.menuSubItemId]?.quantity || 0;
          const safeName = name.replace(/'/g, "\\'");
          return `
                <div class="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <div class="flex flex-col">
                        <span class="text-sm font-black text-gray-800 uppercase tracking-tight">${name}</span>
                        <span class="text-[11px] font-bold text-gray-400">${fmtPrice}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <button onclick="window._adjustSubItemQty(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, -1)" class="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-300 transition-all active:scale-90 text-xs">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="font-black text-gray-900 w-4 text-center text-sm">${qty}</span>
                        <button onclick="window._adjustSubItemQty(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, 1)" class="w-7 h-7 rounded-full border border-violet-200 bg-violet-50 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all active:scale-90 text-xs">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>`;
        })
        .join("");
    };

    // --- Render modifier groups dynamically ---
    const renderGroups = (colLayout) => {
      if (!groups.length) {
        return `<div class="text-center py-8 text-gray-400 text-sm font-bold uppercase tracking-widest">
                    ${mockupState.isLoading ? '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Loading customizations...' : "No customization options available"}
                </div>`;
      }
      // Separate single-select (radio) and multi-select (stepper) groups
      const radioGroups = groups.filter((g) => (g.maxSelect || 1) === 1);
      const stepperGroups = groups.filter((g) => (g.maxSelect || 1) > 1);

      let html = "";
      // Radio groups
      for (const g of radioGroups) {
        const isRequired = (g.minSelect || 0) >= 1;
        html += `<div>
                    ${sectionHeader(g.displayName || g.groupName || "Options", isRequired)}
                    <div class="${colLayout === "grid" ? "grid grid-cols-3 gap-x-8 gap-y-1" : "space-y-1"}">
                        ${renderRadioGroup(g)}
                    </div>
                </div>`;
      }
      // Stepper groups
      if (stepperGroups.length > 0) {
        if (colLayout === "grid") {
          // Desktop: side-by-side columns
          html += `<div class="grid grid-cols-2 gap-8">`;
          for (const g of stepperGroups) {
            html += `<div>
                            ${sectionHeader(g.displayName || g.groupName || "Options", false)}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">${renderStepperGroup(g)}</div>
                        </div>`;
          }
          html += `</div>`;
        } else {
          // Mobile: stacked
          for (const g of stepperGroups) {
            html += `<div>
                            ${sectionHeader(g.displayName || g.groupName || "Options", false)}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">${renderStepperGroup(g)}</div>
                        </div>`;
          }
        }
      }
      return html;
    };

    // ---- DESKTOP LAYOUT ----
    if (isDesktop) {
      return `
                <div class="flex flex-col h-full bg-[#f6f6f6] relative overflow-y-auto">
                    <div class="w-full max-w-3xl mx-auto p-6 md:p-8 flex flex-col gap-6">

                        <!-- Page Title -->
                        <div>
                            <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Customize Order</h1>
                            <p class="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">${item.category || ""}</p>
                        </div>

                        <!-- Item Image + Info Card -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex gap-0">
                            <div class="w-64 shrink-0 p-3">
                                <div class="w-full aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                                    <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                </div>
                            </div>
                            <div class="flex-1 px-8 py-6 flex flex-col justify-center gap-4">
                                <div>
                                    <div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>
                                    <h3 class="text-xl font-black text-violet-600 uppercase tracking-tighter leading-tight mb-2">${item.name}</h3>
                                    <p class="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">${item.description || detail?.description || ""}</p>
                                </div>
                                <!-- Quantity inline -->
                                <div class="flex items-center gap-4">
                                    <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Quantity</span>
                                    <div class="flex items-center bg-gray-50 rounded-full border border-gray-100 px-4 py-2 gap-6 shadow-sm">
                                        <button onclick="updateMockupState('itemQuantity', Math.max(1, mockupState.itemQuantity - 1))" class="text-gray-400 hover:text-gray-900 transition-colors"><i class="fa-solid fa-minus"></i></button>
                                        <span class="font-black text-gray-900 min-w-[20px] text-center">${mockupState.itemQuantity}</span>
                                        <button onclick="updateMockupState('itemQuantity', mockupState.itemQuantity + 1)" class="text-gray-400 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Customization Options Card -->
                        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-7">
                            ${renderAllModifierSections(detail, sels, modSels, "grid")}

                            <!-- Special Instructions -->
                            ${
                              detail && !detail.disableSpecialInstruction
                                ? `
                            <div>
                                <div class="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Special Order Instructions <span class="text-gray-300">(Max 250 Characters)</span></div>
                                <textarea id="special-instruction-input" maxlength="250" placeholder="Ex. Less ice, no boba, extra sweet..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20 transition-colors">${mockupState._specialInstruction || ""}</textarea>
                            </div>`
                                : ""
                            }
                        </div>

                        <!-- Add to Cart Card (bottom) -->
                        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6">
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Options Total</span>
                                <span class="text-lg font-black text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                            </div>
                            <button onclick="window._addToCart()" class="flex-1 bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg hover:bg-violet-700 active:scale-95 transition-all uppercase tracking-wider text-center">Add to Cart — $${totalPrice}</button>
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu')" class="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-gray-900 transition-colors whitespace-nowrap">← Back to Menu</button>
                        </div>

                    </div>
                </div>
            `;
    }

    // ---- MOBILE LAYOUT ----
    return `
                <div class="flex flex-col h-full bg-white">
                    <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center">
                    <div class="w-full max-w-[1080px] flex items-center px-2">
                        <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                        <span class="text-lg font-black text-violet-600 flex-1 text-center">Customize</span>
                        <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                    </div>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo(mockupState.lastMenuPage || 'menu')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }

                    <div id="order-details-scroller" class="flex-1 overflow-y-auto scrollbar-hide">
                        <!-- Item Banner Image -->
                        <div class="px-3 pt-3">
                            <div class="w-full aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
                                <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                            </div>
                        </div>

                        <!-- Info & Price -->
                        <div class="px-6 pt-5 pb-4 text-center border-b border-gray-100">
                            <div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>
                            <h3 class="text-xl font-black text-violet-600 uppercase tracking-tighter leading-tight mb-1">${item.name}</h3>
                            <p class="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">${item.description || detail?.description || ""}</p>
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

                            ${renderAllModifierSections(detail, sels, modSels, "stacked")}

                            <!-- Special Instructions -->
                            ${
                              detail && !detail.disableSpecialInstruction
                                ? `
                            <div>
                                <div class="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Special Order Instructions <span class="text-gray-300">(Max 250 Characters)</span></div>
                                <textarea id="special-instruction-input" maxlength="250" placeholder="Ex. Less ice, no boba, extra sweet..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20 transition-colors">${mockupState._specialInstruction || ""}</textarea>
                            </div>`
                                : ""
                            }

                        </div>
                    </div>

                    <!-- Sticky Bottom Actions -->
                    <div class="p-6 pb-bottom-safe bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <div class="flex justify-between items-center text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">
                            <span>Options Total</span>
                            <span class="text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                        </div>
                        <button onclick="window._addToCart()" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">Add to Cart - $${totalPrice}</button>
                    </div>
                </div>
            `;
  },
  "customize-alt": () => {
    const isDesktop = currentViewport === "desktop";
    const mode = mockupState.fulfillmentMode || "In-store";
    let modeText = "IN-STORE PICKUP";
    if (mode === "In-store" || mode === "In-Store")
      modeText = "IN-STORE PICKUP";
    else if (mode === "Drive Through" || mode === "Drive-thru")
      modeText = "DRIVE-THRU";
    else if (mode === "Curbside") modeText = "CURBSIDE PICKUP";
    else if (mode === "Dine In" || mode === "Dine-In") modeText = "DINE-IN";
    else if (mode === "Delivery") modeText = "DELIVERY";
    else modeText = mode.toUpperCase() + " PICKUP";

    const timeText =
      mockupState.orderTime === "Later"
        ? `at ${mockupState.selectedTimeSlot}`
        : "ASAP";

    const selectedLoc =
      mockupState.apiLocations.find(
        (loc) => loc.locationId === mockupState.selectedLocationId,
      ) ||
      LOCATIONS.find(
        (loc) => loc.locationId === mockupState.selectedLocationId,
      ) ||
      LOCATIONS[0];
    const addressText =
      mockupState.selectedAddress ||
      (selectedLoc ? selectedLoc.address : "825 W UNIVERSITY, TEMPE, AZ");

    const item = mockupState.selectedItem || MENU_ITEMS[1];
    const basePrice = item.price;
    const detail = mockupState.selectedItemDetail;
    const sels = mockupState._customizeSubItems || {};
    const modSels = mockupState._customizeModifyTypes || {};

    let extrasTotal = 0;
    for (const gid in sels) {
      const groupItems = sels[gid]?.items || {};
      for (const sid in groupItems) {
        extrasTotal +=
          (groupItems[sid].price || 0) * (groupItems[sid].quantity || 1);
      }
    }
    for (const sid in modSels) {
      extrasTotal += modSels[sid]?.price || 0;
    }
    const totalPrice = (
      (basePrice + extrasTotal) *
      mockupState.itemQuantity
    ).toFixed(2);

    // ---- DESKTOP LAYOUT ----
    if (isDesktop) {
      return `
                <div class="flex flex-col h-full bg-[#f6f6f6] relative overflow-y-auto">
                    <div class="w-full max-w-3xl mx-auto p-6 md:p-8 flex flex-col gap-6">

                        <!-- Page Title -->
                        <div>
                            <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Customize Order</h1>
                            <p class="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">${item.category || ""}</p>
                        </div>

                        <!-- Item Image + Info Card -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex gap-0">
                            <div class="w-64 shrink-0 p-3">
                                <div class="w-full aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                                    <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                </div>
                            </div>
                            <div class="flex-1 px-8 py-6 flex flex-col justify-center gap-4">
                                <div>
                                    <div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>
                                    <h3 class="text-xl font-black text-violet-600 uppercase tracking-tighter leading-tight mb-2">${item.name}</h3>
                                    <p class="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">${item.description || detail?.description || ""}</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Quantity</span>
                                    <div class="flex items-center bg-gray-50 rounded-full border border-gray-100 px-4 py-2 gap-6 shadow-sm">
                                        <button onclick="updateMockupState('itemQuantity', Math.max(1, mockupState.itemQuantity - 1))" class="text-gray-400 hover:text-gray-900 transition-colors"><i class="fa-solid fa-minus"></i></button>
                                        <span class="font-black text-gray-900 min-w-[20px] text-center">${mockupState.itemQuantity}</span>
                                        <button onclick="updateMockupState('itemQuantity', mockupState.itemQuantity + 1)" class="text-gray-400 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-7">
                            ${renderAllModifierSections(detail, sels, modSels, "grid")}

                            <!-- Special Instructions -->
                            ${
                              detail && !detail.disableSpecialInstruction
                                ? `
                            <div>
                                <div class="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Special Order Instructions <span class="text-gray-300">(Max 250 Characters)</span></div>
                                <textarea id="special-instruction-input" maxlength="250" placeholder="Ex. Less ice, no boba, extra sweet..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20 transition-colors">${mockupState._specialInstruction || ""}</textarea>
                            </div>`
                                : ""
                            }
                        </div>

                        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6">
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Options Total</span>
                                <span class="text-lg font-black text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                            </div>
                            <button onclick="window._addToCart()" class="flex-1 bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg hover:bg-violet-700 active:scale-95 transition-all uppercase tracking-wider text-center">Add to Cart — $${totalPrice}</button>
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu-alt')" class="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-gray-900 transition-colors whitespace-nowrap">← Back to Menu</button>
                        </div>

                    </div>
                </div>
            `;
    }

    // ---- MOBILE LAYOUT ----
    return `
                <div class="flex flex-col h-full bg-white animate-[fadeIn_0.2s_ease-out]">
                    <header class="bg-white px-3 py-2 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center shrink-0 border-b border-gray-100">
                        <div class="w-full max-w-[1080px] flex items-center px-1">
                            <!-- Left: Hamburger -->
                            <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors shrink-0">
                                <i class="fa-solid fa-bars text-xl"></i>
                            </button>
                            <!-- Center: i-Tea logo -->
                            <div class="flex-1 flex items-center justify-center">
                                <img src="images/i-tea-logo-new.png" class="h-9 w-auto object-contain" alt="i-Tea">
                            </div>
                            <!-- Right: Cart icon -->
                            <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                                ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                            </button>
                        </div>
                    </header>

                    <!-- Details subheader block mimicking menu-alt.html -->
                    <div class="bg-white border-b border-gray-100 flex flex-col items-center justify-center text-center w-full shrink-0 animate-[fadeIn_0.3s_ease-out]">
                        <div class="py-3.5 px-4 w-full relative">
                            <!-- Back Button at the left -->
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu-alt')" class="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                                <span>Back</span>
                            </button>
                            
                            <h1 class="font-branding font-black text-[#1f0b35] text-[32px] tracking-tight leading-none uppercase mb-2">Customize</h1>
                            
                            <div onclick="navigateTo('order-details-alt')" class="flex flex-col items-center cursor-pointer group hover:opacity-85 transition-opacity">
                                <span class="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">
                                    ${modeText}
                                </span>
                                <span class="text-[10px] font-bold text-violet-600 uppercase tracking-wide leading-none mb-2">
                                    ${timeText}
                                </span>
                                <div class="flex items-center justify-center gap-1.5 text-sm text-[#1f0b35] font-black tracking-tight uppercase">
                                    <span>${addressText}</span>
                                    <i class="fa-solid fa-chevron-right text-[10px] text-violet-600 transition-transform group-hover:translate-x-0.5"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="order-details-scroller" class="flex-1 overflow-y-auto scrollbar-hide">
                        <!-- Item Banner Image -->
                        <div class="px-3 pt-3">
                            <div class="w-full aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
                                <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                            </div>
                        </div>

                        <!-- Info & Price -->
                        <div class="px-6 pt-5 pb-4 text-center border-b border-gray-100">
                            <div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>
                            <h3 class="text-xl font-black text-violet-600 uppercase tracking-tighter leading-tight mb-1">${item.name}</h3>
                            <p class="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">${item.description || detail?.description || ""}</p>
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

                            ${renderAllModifierSections(detail, sels, modSels, "stacked")}

                            <!-- Special Instructions -->
                            ${
                              detail && !detail.disableSpecialInstruction
                                ? `
                            <div>
                                <div class="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Special Order Instructions <span class="text-gray-300">(Max 250 Characters)</span></div>
                                <textarea id="special-instruction-input" maxlength="250" placeholder="Ex. Less ice, no boba, extra sweet..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20 transition-colors">${mockupState._specialInstruction || ""}</textarea>
                            </div>`
                                : ""
                            }

                        </div>
                    </div>

                    <!-- Sticky Bottom Actions -->
                    <div class="p-6 pb-bottom-safe bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <div class="flex justify-between items-center text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">
                            <span>Options Total</span>
                            <span class="text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                        </div>
                        <button onclick="window._addToCart()" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">Add to Cart - $${totalPrice}</button>
                    </div>
                </div>
            `;
  },
  cart: () => {
    const isDesktop = currentViewport === "desktop";
    const selectedLoc =
      mockupState.apiLocations.find(
        (loc) => loc.locationId === mockupState.selectedLocationId,
      ) ||
      LOCATIONS.find(
        (loc) => loc.locationId === mockupState.selectedLocationId,
      ) ||
      LOCATIONS[0];
    const addressText =
      mockupState.selectedAddress ||
      (selectedLoc ? selectedLoc.address : "825 W UNIVERSITY, TEMPE, AZ");
    const bagFee = mockupState.bagQuantity * 0.1;
    // Dynamic pricing from cart
    const cart = mockupState.cart || [];
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );
    const taxRate = mockupState.locationTaxRate || 0.0925;
    const taxes = subtotal * taxRate;
    const convenienceFee = mockupState.locationConvenienceFee || 0;
    const finalTotal = (subtotal + taxes + bagFee + convenienceFee).toFixed(2);

    const selectionNotMade =
      mockupState.bagQuantity === 0 && !mockupState.noBagsSelected;
    const paymentAction = selectionNotMade
      ? `updateMockupState('modalOpen', 'bag-alert')`
      : `navigateTo('checkout')`;

    // Render cart items dynamically
    const renderCartItems = () => {
      if (cart.length === 0) {
        return `
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                    <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa-solid fa-bag-shopping text-2xl text-gray-300"></i>
                    </div>
                    <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-2">Your cart is empty</h3>
                    <p class="text-xs text-gray-400 font-medium mb-4">Add items from the menu to get started</p>
                    <button onclick="navigateTo('menu')" class="bg-violet-600 text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider hover:bg-violet-700 active:scale-95 transition-all">
                        Browse Menu
                    </button>
                </div>`;
      }
      return `
            <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 divide-y divide-gray-100">
                ${cart
                  .map((item, idx) => {
                    // Build customization summary text
                    const customSummary =
                      (item.selectedSubItems || [])
                        .map((s) =>
                          s.quantity > 1 ? `${s.name} x${s.quantity}` : s.name,
                        )
                        .join(", ") || "No customizations";
                    const itemTotal = (item.unitPrice * item.quantity).toFixed(
                      2,
                    );

                    return `
                    <div class="flex justify-between items-start ${idx > 0 ? "pt-5" : ""} ${idx < cart.length - 1 ? "pb-5" : ""}">
                        <div class="flex gap-4 items-start">
                            <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight">${item.name}</h3>
                                <div class="flex items-start gap-2 mb-3">
                                    <p class="text-[11px] text-gray-500 font-medium line-clamp-2 hover:text-gray-700 transition-colors leading-relaxed flex-1" id="desc-${idx}" onclick="this.classList.toggle('line-clamp-2')">${customSummary}${item.specialInstruction ? " • " + item.specialInstruction : ""}</p>
                                </div>
                                <!-- Quantity Controls -->
                                <div class="flex items-center bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 px-3 py-1.5 gap-5 w-fit">
                                    <button onclick="window._updateCartQty(${idx}, ${item.quantity === 1 ? 0 : item.quantity - 1})" class="text-gray-900 hover:text-red-500 transition-colors active:scale-90">
                                        <i class="fa-${item.quantity === 1 ? "regular fa-trash-can" : "solid fa-minus"} text-[13px]"></i>
                                    </button>
                                    <span class="font-black text-[13px] text-gray-900 min-w-[8px] text-center">${item.quantity}</span>
                                    <button onclick="window._updateCartQty(${idx}, ${item.quantity + 1})" class="text-gray-900 hover:text-violet-600 transition-colors active:scale-90">
                                        <i class="fa-solid fa-plus text-[13px]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="font-black text-gray-900">$${itemTotal}</span>
                        </div>
                    </div>`;
                  })
                  .join("")}
            </div>`;
    };

    return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center">
                    <div class="w-full max-w-[1080px] flex items-center px-2">
                        <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                        <span class="text-lg font-black text-violet-600 flex-1 text-center">Review order</span>
                        ${
                          !isDesktop
                            ? `
                        <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                            ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                        </button>
                        `
                            : '<div class="w-10"></div>'
                        }
                    </div>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('menu')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                <div id="cart-scroller" class="flex-1 overflow-y-auto p-6 flex ${isDesktop ? "flex-row items-start pb-6 gap-8" : "flex-col gap-6 pb-32"} scrollbar-hide w-full max-w-[1080px] mx-auto">
                    
                    <!-- Left Column (2/3 width on desktop) -->
                    <div class="${isDesktop ? "flex flex-col gap-6 w-2/3 shrink" : "contents"}">
                        <!-- Consolidated Order Details Card -->
                    <div class="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4 shrink-0 transition-all">
                        <!-- Store Info (Compact) -->
                        <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                            <div class="flex gap-3 items-center">
                                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-violet-50 overflow-hidden shrink-0">
                                    <img src="images/i-tea-logo-new.png" class="w-full h-full object-contain scale-75">
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">${(mockupState.selectedLocation || "i-Tea - Tempe").replace(/\b\d{5}\b/g, "").trim()}</h3>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 tracking-wide uppercase">${addressText}</p>
                                </div>
                            </div>
                            <button onclick="navigateTo('locations')" class="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-100 transition-all">
                                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </button>
                        </div>

                        <!-- Pickup Details (Compact Grid) -->
                        <div class="grid grid-cols-2 gap-4">
                            <div onclick="navigateTo('order-details')" class="flex gap-3 items-center cursor-pointer group">
                                <div class="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:scale-105">
                                    <i class="fa-solid ${mockupState.fulfillmentMode === "Delivery" ? "fa-truck" : mockupState.fulfillmentMode === "Curbside" ? "fa-car" : mockupState.fulfillmentMode === "DriveUp" ? "fa-car-side" : "fa-shop"} text-white text-sm"></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Pickup method</span>
                                    <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight">${mockupState.fulfillmentMode || "Pickup"}</span>
                                </div>
                            </div>
                            <div onclick="navigateTo('order-details')" class="flex gap-3 items-center cursor-pointer group border-l border-gray-50 pl-2">
                                <div class="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:scale-105">
                                    <i class="fa-regular fa-clock text-white text-sm"></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Pickup time</span>
                                    <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight">${mockupState.orderTime === "Later" ? mockupState.selectedTimeSlot : "ASAP"} (4-7m)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cart Items -->
                    ${renderCartItems()}
                    
                    <button onclick="updateMockupState('menuTab', 'menu'); navigateTo('menu')" class="w-full bg-transparent border-2 border-violet-600 text-violet-600 py-3.5 rounded-full font-black text-sm shadow-[0_8px_25px_-5px_rgba(124,58,237,0.2)] hover:bg-violet-50 active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center gap-2 shrink-0">
                        <i class="fa-solid fa-plus"></i> Add another menu item
                    </button>

                    <!-- You May Also Like Carousel -->
                    <div class="shrink-0">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-3 px-1">You May Also Like</h3>
                        <div class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
                            ${(() => {
                              let crossSellItems = [];
                              const ordersList = mockupState.apiOrders
                                ? Array.isArray(mockupState.apiOrders)
                                  ? mockupState.apiOrders
                                  : mockupState.apiOrders.items ||
                                    mockupState.apiOrders.data ||
                                    []
                                : [];
                              if (ordersList.length > 0) {
                                const itemCounts = {};
                                ordersList.forEach((order) => {
                                  const itemsList =
                                    order.orderMenuItems ||
                                    order.items ||
                                    order.orderItems ||
                                    [];
                                  itemsList.forEach((orderItem) => {
                                    const name = (orderItem.name || "").trim();
                                    if (!name) return;
                                    if (!itemCounts[name]) itemCounts[name] = 0;
                                    itemCounts[name] += orderItem.quantity || 1;
                                  });
                                });

                                const sortedHistoryNames = Object.keys(
                                  itemCounts,
                                ).sort((a, b) => itemCounts[b] - itemCounts[a]);
                                crossSellItems = sortedHistoryNames
                                  .map((name) =>
                                    MENU_ITEMS.find(
                                      (mi) =>
                                        mi.name.toLowerCase() ===
                                        name.toLowerCase(),
                                    ),
                                  )
                                  .filter(Boolean);
                              }

                              const cartItemNames = mockupState.cart.map((c) =>
                                c.name.toLowerCase(),
                              );
                              let finalCrossSells = crossSellItems.filter(
                                (item) =>
                                  !cartItemNames.includes(
                                    item.name.toLowerCase(),
                                  ),
                              );

                              const numSells = isDesktop ? 4 : 5;
                              if (finalCrossSells.length < numSells) {
                                const fallbackItems =
                                  getActiveMenuItems().filter(
                                    (item) =>
                                      !cartItemNames.includes(
                                        item.name.toLowerCase(),
                                      ) &&
                                      !finalCrossSells.find(
                                        (s) => s.name === item.name,
                                      ),
                                  );
                                finalCrossSells = [
                                  ...finalCrossSells,
                                  ...fallbackItems,
                                ].slice(0, numSells);
                              } else {
                                finalCrossSells = finalCrossSells.slice(
                                  0,
                                  numSells,
                                );
                              }

                              return finalCrossSells
                                .map((item) => {
                                  return `
                                        <div class="snap-center shrink-0 ${isDesktop ? "w-auto flex-1" : "w-[140px]"} bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all hover:shadow-md group cursor-pointer" onclick="mockupState.menuTab = 'menu'; selectItemAndNavigate(${getActiveMenuItems().findIndex((m) => m.name === item.name)})">
                                            <div class="${isDesktop ? "h-36" : "h-24"} relative overflow-hidden">
                                                <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500">
                                            </div>
                                            <div class="p-3 md:p-4 text-left flex flex-col flex-1">
                                                <h4 class="text-xs md:text-sm font-black text-gray-900 uppercase tracking-tight h-8 md:h-10 overflow-hidden line-clamp-2">${item.name}</h4>
                                                <div class="flex justify-between items-center mt-auto pt-2">
                                                    <span class="text-sm md:text-base font-black text-violet-600">$${item.price.toFixed(2)}</span>
                                                    <button class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors active:scale-95"><i class="fa-solid fa-plus text-[10px] md:text-xs"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                })
                                .join("");
                            })()}
                        </div>
                    </div>
                    
                    </div> <!-- End Left Column -->

                    <!-- Right Column (1/3 width on desktop) -->
                    <div class="${isDesktop ? "flex flex-col gap-6 w-1/3 shrink sticky top-0" : "contents"}">

                    <!-- Bag Selection (California Compliance) -->
                    <div class="shrink-0 bg-violet-50 rounded-2xl p-4 border border-violet-100 flex flex-col gap-4">
                        <div class="flex justify-between items-start">
                            <div class="flex-1 pr-4">
                                <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight leading-tight">
                                    Do you need plastic bag(s)?
                                </h3>
                                <div class="${mockupState.bagQuantity > 0 || mockupState.noBagsSelected ? "text-green-600" : "text-violet-600"} text-[10px] font-bold flex items-center gap-1 normal-case tracking-normal mt-1">
                                    <i class="fa-solid ${mockupState.bagQuantity > 0 || mockupState.noBagsSelected ? "fa-circle-check" : "fa-triangle-exclamation"}"></i>
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
                                    class="flex-1 py-2 px-3 rounded-lg border-2 text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${mockupState.noBagsSelected ? "bg-violet-600 text-white border-violet-600 shadow-md" : "bg-white text-gray-400 border-gray-100 hover:border-violet-200"}">
                                <i class="fa-solid ${mockupState.noBagsSelected ? "fa-circle-check" : "fa-circle-dot"}"></i>
                                No plastic bags needed
                            </button>
                        </div>
                    </div>
                    
                    <!-- Pricing Summary -->
                    <div class="mt-auto bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-3 shrink-0">
                        <div class="flex justify-between text-sm font-bold text-gray-600"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-sm font-bold text-gray-600"><span>Taxes & Fees</span><span>$${taxes.toFixed(2)}</span></div>
                        ${convenienceFee > 0 ? `<div class="flex justify-between text-sm font-bold text-gray-600"><span>Convenience Fee</span><span>$${convenienceFee.toFixed(2)}</span></div>` : ""}
                        ${mockupState.bagQuantity > 0 ? `<div class="flex justify-between text-sm font-bold text-gray-600"><span>Plastic Bag(s)</span><span>$${bagFee.toFixed(2)}</span></div>` : ""}
                        <div class="h-px bg-gray-200 w-full my-2"></div>
                        <div class="flex justify-between text-lg font-black text-gray-900 uppercase"><span>Total</span><span>$${finalTotal}</span></div>
                        
                        <!-- Inline Checkout Button (Desktop Only) -->
                        <button onclick="${paymentAction}" class="${isDesktop ? "block" : "hidden"} w-full mt-4 bg-violet-600 text-white px-6 py-4 rounded-full font-black text-[15px] shadow-[0_8px_20px_-5px_rgba(124,58,237,0.3)] hover:bg-violet-700 active:scale-95 transition-all uppercase tracking-wider text-center">
                            Checkout $${finalTotal}
                        </button>
                    </div>
                    
                    </div> <!-- End Right Column -->
                </div>

                <!-- Floating Checkout Button -->
                <div class="absolute bottom-8 left-0 right-0 w-full z-[60] pointer-events-none px-6 flex justify-center ${isDesktop ? "hidden" : ""}">
                    <div class="w-full max-w-[1080px] flex justify-end">
                        <button onclick="${paymentAction}" class="pointer-events-auto bg-violet-600 text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-wider">
                            Checkout $${finalTotal}
                        </button>
                    </div>
                </div>

                <!-- Bag Alert Modal -->
                ${
                  mockupState.modalOpen === "bag-alert"
                    ? `
                <div class="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center p-4">
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
                </div>`
                    : ""
                }

            </div>`;
  },

  account: () => {
    const isDesktop = currentViewport === "desktop";
    const menuFavsCount = (mockupState.favorites || []).length;
    const locList =
      mockupState.apiLocations && mockupState.apiLocations.length > 0
        ? mockupState.apiLocations
        : LOCATIONS;
    const savedLocsCount = locList.filter((l) => l.fav).length;

    return `
            <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Subtle top-aligned brand gradient overlay fading down -->
                <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>

                <!-- Header -->
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">My Account</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('restaurant-home')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }

                <div class="p-6 md:p-8 max-w-3xl mx-auto w-full flex flex-col gap-6 pb-16 relative z-10">

                    <!-- Greeting -->
                    <div class="mb-2">
                        <h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-1">Hi ${mockupState.userName}!</h1>
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
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.firstName || "Not set"}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Last Name</p>
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.lastName || "Not set"}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                                <p class="font-bold text-violet-600 text-sm truncate">${mockupState.userProfile?.email || "Not set"}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Phone</p>
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.phoneNumber || "Not set"}</p>
                            </div>
                            <div class="col-span-2">
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Street Address</p>
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.address || "Not set"}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">City</p>
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.city || "Not set"}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">State</p>
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.state || "Not set"}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Zip Code</p>
                                <p class="font-bold text-gray-800 text-sm">${mockupState.userProfile?.zipCode || "Not set"}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Edit Profile Modal -->
                    ${
                      mockupState.modalOpen === "edit-profile"
                        ? `
                    <div class="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onclick="if(event.target===this){mockupState.modalOpen=null;navigateTo(currentPage);}">
                        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-5 relative shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide animate-[slideUp_0.3s_ease-out]">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">Edit Profile</h2>
                                <button onclick="mockupState.modalOpen=null;navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <div id="prof-error" class="text-xs font-bold text-red-500 text-center h-4 opacity-0 transition-all"></div>
                                <div class="grid grid-cols-2 gap-3">
                                    <div>
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">First Name</label>
                                        <input type="text" id="prof-first-name" value="${mockupState.userProfile?.firstName || ""}" class="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                    <div>
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Last Name</label>
                                        <input type="text" id="prof-last-name" value="${mockupState.userProfile?.lastName || ""}" class="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Email (Read-only)</label>
                                    <input type="email" id="prof-email" value="${mockupState.userProfile?.email || ""}" class="w-full border-2 border-gray-100 bg-gray-50 text-violet-400 rounded-xl px-4 py-2.5 font-bold text-sm focus:outline-none cursor-not-allowed" readonly>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Phone</label>
                                    <input type="tel" id="prof-phone" value="${mockupState.userProfile?.phoneNumber || ""}" class="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Street Address</label>
                                    <input type="text" id="prof-address" value="${mockupState.userProfile?.address || ""}" class="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                </div>
                                <div class="grid grid-cols-3 gap-2">
                                    <div class="col-span-1">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1 truncate">City</label>
                                        <input type="text" id="prof-city" value="${mockupState.userProfile?.city || ""}" class="w-full border-2 border-gray-100 rounded-xl px-3 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                    <div class="col-span-1">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1 truncate">State</label>
                                        <input type="text" id="prof-state" value="${mockupState.userProfile?.state || ""}" class="w-full border-2 border-gray-100 rounded-xl px-3 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                    <div class="col-span-1">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1 truncate">Zip Code</label>
                                        <input type="text" id="prof-zip" value="${mockupState.userProfile?.zipCode || ""}" class="w-full border-2 border-gray-100 rounded-xl px-3 py-2.5 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                    </div>
                                </div>
                                <button onclick="handleUpdateProfile()" class="w-full mt-2 py-3 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-lg hover:bg-violet-700 transition-colors active:scale-95">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>`
                        : ""
                    }

                    <!-- Change Password Modal -->
                    ${
                      mockupState.modalOpen === "change-password"
                        ? `
                    <div class="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onclick="if(event.target===this){mockupState.modalOpen=null;navigateTo(currentPage);}">
                        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-6 relative shadow-2xl animate-[slideUp_0.3s_ease-out]">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight">Change Password</h2>
                                <button onclick="mockupState.modalOpen=null;navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div id="pwd-error" class="text-xs font-bold text-red-500 text-center h-4 opacity-0 transition-all"></div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Current Password</label>
                                    <div class="relative">
                                        <input type="password" id="pwd-current" class="w-full border-2 border-gray-100 rounded-xl pl-4 pr-12 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                        <button type="button" onclick="togglePasswordVisibility('pwd-current', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 focus:outline-none">
                                            <i class="fa-regular fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">New Password</label>
                                    <div class="relative">
                                        <input type="password" id="pwd-new" class="w-full border-2 border-gray-100 rounded-xl pl-4 pr-12 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                        <button type="button" onclick="togglePasswordVisibility('pwd-new', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 focus:outline-none">
                                            <i class="fa-regular fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Confirm New Password</label>
                                    <div class="relative">
                                        <input type="password" id="pwd-confirm" class="w-full border-2 border-gray-100 rounded-xl pl-4 pr-12 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                        <button type="button" onclick="togglePasswordVisibility('pwd-confirm', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 focus:outline-none">
                                            <i class="fa-regular fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <button onclick="handleChangePassword()" class="w-full mt-2 py-4 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-violet-700 transition-colors active:scale-95">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>`
                        : ""
                    }

                    <!-- Account Settings Card -->
                    <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div class="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                            <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-gear text-lg"></i>
                            </div>
                            <span class="font-black uppercase tracking-tight text-gray-900 text-sm">Account Settings</span>
                        </div>
                        <button onclick="mockupState.modalOpen = 'change-password'; navigateTo(currentPage);" class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors active:scale-[0.99] border-b border-gray-50">
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

                    <!-- My Favorites Card -->
                    <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div class="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                            <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-heart text-lg"></i>
                            </div>
                            <span class="font-black uppercase tracking-tight text-gray-900 text-sm">My Favorites</span>
                        </div>
                        <button onclick="navigateTo('menu-favorites')" class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors active:scale-[0.99] border-b border-gray-50">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-utensils text-gray-400 w-5 text-center"></i>
                                <span class="font-bold text-gray-800 text-sm">Menu Favorites</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="bg-violet-100 text-violet-600 text-xs font-black px-2.5 py-0.5 rounded-full">${menuFavsCount} ${menuFavsCount === 1 ? "item" : "items"}</span>
                                <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
                            </div>
                        </button>
                        <button onclick="navigateTo('location-favorites')" class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors active:scale-[0.99]">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-location-dot text-gray-400 w-5 text-center"></i>
                                <span class="font-bold text-gray-800 text-sm">Saved Locations</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="bg-violet-100 text-violet-600 text-xs font-black px-2.5 py-0.5 rounded-full">${savedLocsCount} ${savedLocsCount === 1 ? "store" : "stores"}</span>
                                <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
                            </div>
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

                        <div id="order-history-container" class="divide-y divide-gray-100">
                            ${(() => {
                              const ordersList = mockupState.apiOrders
                                ? Array.isArray(mockupState.apiOrders)
                                  ? mockupState.apiOrders
                                  : mockupState.apiOrders.items ||
                                    mockupState.apiOrders.data ||
                                    []
                                : [];

                              // Combine local lastOrder and API orders, removing duplicate order IDs
                              let allOrders = [...ordersList];
                              if (mockupState.lastOrder) {
                                const lastOrderId =
                                  mockupState.lastOrder.orderId;
                                const exists = allOrders.some(
                                  (o) => o.orderId === lastOrderId,
                                );
                                if (!exists) {
                                  allOrders.unshift(mockupState.lastOrder);
                                }
                              }

                              // Sort by date descending
                              const getOrderTime = (order) => {
                                const dateStr =
                                  order.orderDate ||
                                  order.placedAt ||
                                  order.placedDateTime;
                                return dateStr
                                  ? new Date(dateStr).getTime()
                                  : 0;
                              };
                              allOrders.sort(
                                (a, b) => getOrderTime(b) - getOrderTime(a),
                              );

                              if (allOrders.length === 0) {
                                return `
                                         <div class="px-5 py-8 text-center">
                                             <p class="text-sm text-gray-400 font-medium">No orders yet — place your first order!</p>
                                             <button onclick="navigateTo('menu')" class="mt-3 text-violet-600 font-black text-xs uppercase tracking-widest hover:underline">Browse Menu →</button>
                                         </div>
                                     `;
                              }

                              const showLimit = mockupState.showAllHistory
                                ? 20
                                : 5;
                              const displayedOrders = allOrders.slice(
                                0,
                                showLimit,
                              );

                              let html = displayedOrders
                                .map((order) => {
                                  const orderDate = new Date(
                                    order.orderDate ||
                                      order.placedAt ||
                                      Date.now(),
                                  ).toLocaleDateString();
                                  const orderTotal = (
                                    order.total ||
                                    order.subTotal ||
                                    0
                                  ).toFixed(2);
                                  const orderItems =
                                    order.orderMenuItems ||
                                    order.items ||
                                    order.orderItems ||
                                    [];
                                  const orderNum =
                                    order.orderId ||
                                    order.orderNumber ||
                                    "FB-" +
                                      Math.floor(1000 + Math.random() * 9000);

                                  // Look up location name
                                  const foundLoc = LOCATIONS.find(
                                    (l) => l.locationId === order.locationId,
                                  );
                                  const locationName = foundLoc
                                    ? foundLoc.name
                                    : mockupState.selectedLocation || "i-Tea";

                                  return `
                                         <div class="px-5 py-4 flex flex-col gap-3">
                                             <div class="flex justify-between items-start">
                                                 <div>
                                                     <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">${orderDate} • #${orderNum}</p>
                                                     <p class="font-black text-violet-600 text-sm mt-0.5">${locationName}</p>
                                                 </div>
                                                 <span class="font-black text-gray-900 text-base">$${orderTotal}</span>
                                             </div>
                                             <div class="flex flex-col gap-0.5">
                                                 ${orderItems
                                                   .map(
                                                     (item) =>
                                                       `<p class="text-xs text-gray-500 font-medium">${item.quantity} × ${item.name}</p>`,
                                                   )
                                                   .join("")}
                                             </div>
                                             <div class="flex gap-2 mt-1">
                                                 <button onclick="viewPastOrder(${order.orderId || `'${orderNum}'`})" class="flex-1 py-2 rounded-full border-2 border-violet-600 text-violet-600 font-black text-[10px] uppercase tracking-widest hover:bg-violet-50 transition-colors">View</button>
                                                 <button onclick="reorderPastOrder(${order.orderId || `'${orderNum}'`})" class="flex-1 py-2 rounded-full bg-violet-600 text-white font-black text-[10px] uppercase tracking-widest shadow-sm hover:bg-violet-700 transition-colors">Reorder</button>
                                             </div>
                                         </div>
                                     `;
                                })
                                .join("");

                              if (allOrders.length > 5) {
                                if (!mockupState.showAllHistory) {
                                  html += `
                                             <div class="px-5 py-4 text-center">
                                                 <button onclick="updateMockupState('showAllHistory', true)" class="w-full py-2.5 rounded-full border-2 border-dashed border-violet-300 text-violet-600 font-black text-xs uppercase tracking-widest hover:border-violet-400 hover:bg-violet-50/50 transition-all flex items-center justify-center gap-2">
                                                     <i class="fa-solid fa-chevron-down text-[10px]"></i> View More Orders (${allOrders.length - 5} more)
                                                 </button>
                                             </div>
                                         `;
                                } else {
                                  html += `
                                             <div class="px-5 py-4 text-center">
                                                 <button onclick="updateMockupState('showAllHistory', false)" class="w-full py-2.5 rounded-full border-2 border-dashed border-gray-200 text-gray-500 font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                                     <i class="fa-solid fa-chevron-up text-[10px]"></i> Show Less
                                                 </button>
                                             </div>
                                         `;
                                }
                              }

                              return html;
                            })()}
                        </div>
                    </div>

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


                    <!-- Logout -->
                    <button onclick="signOutUser()" class="w-full py-4 rounded-full border-2 border-gray-200 text-gray-700 font-black uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
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
                        <button onclick="mockupState.modalOpen = 'delete-account'; navigateTo(currentPage);" class="w-full flex items-center justify-between px-5 py-4 hover:bg-red-50 transition-all active:scale-[0.99]">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-trash-can text-red-500 w-5 text-center"></i>
                                <span class="font-bold text-red-600 text-sm">Delete Account</span>
                            </div>
                            <i class="fa-solid fa-chevron-right text-red-200 text-xs"></i>
                        </button>
                    </div>

                    <!-- Delete Account Modal -->
                    ${
                      mockupState.modalOpen === "delete-account"
                        ? `
                    <div class="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onclick="if(event.target===this){mockupState.modalOpen=null;navigateTo(currentPage);}">
                        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-8 relative shadow-2xl animate-[fadeIn_0.3s_ease-out]">
                            <div class="text-center mb-8">
                                <div class="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
                                    <i class="fa-solid fa-heart-crack text-3xl"></i>
                                </div>
                                <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">Wait, don't go!</h2>
                                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed px-4">Are you sure you want to delete your account? We'd hate to see you go and lose all your reward history.</p>
                            </div>

                            <div class="space-y-6">
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center">To confirm, please type <span class="text-red-600">delete account</span> below</label>
                                    <input type="text" id="delete-confirm-input" placeholder="Type here" class="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 font-black text-gray-900 text-center focus:outline-none focus:border-red-400 focus:bg-white transition-all text-sm uppercase tracking-widest">
                                </div>

                                <div class="flex flex-col gap-3">
                                    <button onclick="const val = document.getElementById('delete-confirm-input').value.toLowerCase(); if(val === 'delete account'){ alert('Account successfully deleted.'); navigateTo('home'); } else { document.getElementById('delete-confirm-input').classList.add('border-red-500'); setTimeout(() => document.getElementById('delete-confirm-input').classList.remove('border-red-500'), 1000); }" class="w-full py-5 bg-red-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95">
                                        DELETE PERMANENTLY
                                    </button>
                                    <button onclick="mockupState.modalOpen=null;navigateTo(currentPage);" class="w-full py-3 text-gray-400 font-extrabold uppercase tracking-widest text-[10px] hover:text-gray-900 transition-colors">
                                        I changed my mind
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`
                        : ""
                    }

                </div>
            </div>`;
  },
  "order-status": () => {
    const isDesktop = currentViewport === "desktop";
    return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4"><i class="fa-solid fa-bars text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center">Order Status</h1>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('account')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                
                <div class="${isDesktop ? "flex-1 overflow-y-auto p-6 md:p-8 max-w-3xl mx-auto w-full space-y-6 scrollbar-hide" : "flex-1 overflow-y-auto space-y-6 scrollbar-hide"}">
                    <div class="flex gap-2 overflow-x-auto scrollbar-hide shrink-0 pb-2">
                        <button onclick="updateMockupState('orderDetailsExpanded', !mockupState.orderDetailsExpanded); navigateTo(currentPage);" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                            <i class="fa-solid ${mockupState.orderDetailsExpanded ? "fa-chevron-up" : "fa-chevron-down"} text-[10px] text-gray-500"></i>
                            <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Order details</span>
                        </button>
                        <button onclick="navigateTo('cart')" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 text-white shadow-md whitespace-nowrap active:scale-95 transition-all hover:bg-violet-700">
                            <i class="fa-solid fa-rotate-left text-[10px]"></i>
                            <span class="text-sm font-black uppercase tracking-tight">Reorder</span>
                        </button>
                    </div>

                    ${
                      mockupState.orderDetailsExpanded
                        ? `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-[fadeIn_0.3s_ease-out] space-y-8">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-violet-50 overflow-hidden">
                                <img src="images/i-tea-logo-new.png" class="w-full h-full object-contain scale-75">
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">${mockupState.selectedLocation || "i-Tea - Tempe"}</h3>
                                <p class="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">3 items</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba3}" class="w-full h-full object-cover object-top">
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
                                    <img src="${assets.boba4}" class="w-full h-full object-cover object-top">
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
                                    <img src="${assets.boba1}" class="w-full h-full object-cover object-top">
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
                    `
                        : `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1">Preparing</h2>
                        <p class="text-sm font-bold text-gray-500">Estimated pickup at 12:45 PM</p>
                    </div>
                    `
                    }

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
                    ${
                      isDesktop
                        ? `
                    <div class="pt-4">
                        <button onclick="navigateTo('cart')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-violet-700">
                            <i class="fa-solid fa-rotate-left"></i> Reorder
                        </button>
                    </div>
                    `
                        : ""
                    }
                </div>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-t border-gray-100 shrink-0 sticky bottom-0">
                    <div class="p-6 w-full">
                        <button onclick="navigateTo('cart')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-violet-700">
                            <i class="fa-solid fa-rotate-left"></i> Reorder
                        </button>
                    </div>
                </div>
                `
                    : ""
                }
            </div>`;
  },
  "track-order": () => {
    const isDesktop = currentViewport === "desktop";
    return `
            <div class="flex flex-col h-full ${isDesktop ? "bg-[#f6f6f6]" : "bg-white"} relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0 justify-center">
                    <div class="w-full max-w-[1080px] flex items-center">
                        <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4"><i class="fa-solid fa-bars text-xl"></i></button>
                        <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center">Track Order</h1>
                        <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                    </div>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('order-status')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                
                <div class="${isDesktop ? "flex-1 overflow-y-auto p-6 md:p-8 max-w-3xl mx-auto w-full space-y-6 scrollbar-hide" : "px-6 py-4 space-y-4 w-full max-w-[1080px] mx-auto"}">

                    <div class="flex justify-end shrink-0 pb-2">
                        <button onclick="updateMockupState('orderDetailsExpanded', !mockupState.orderDetailsExpanded); navigateTo(currentPage);" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                            <i class="fa-solid ${mockupState.orderDetailsExpanded ? "fa-chevron-up" : "fa-chevron-down"} text-[10px] text-gray-500"></i>
                            <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Order details</span>
                        </button>
                    </div>

                    ${
                      mockupState.orderDetailsExpanded
                        ? `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-[fadeIn_0.3s_ease-out] space-y-8">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-violet-50 overflow-hidden">
                                <img src="images/i-tea-logo-new.png" class="w-full h-full object-contain scale-75">
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">${mockupState.selectedLocation || "i-Tea - Tempe"}</h3>
                                <p class="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">3 items</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                    <img src="${assets.boba3}" class="w-full h-full object-cover object-top">
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
                                    <img src="${assets.boba4}" class="w-full h-full object-cover object-top">
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
                                    <img src="${assets.boba1}" class="w-full h-full object-cover object-top">
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
                    `
                        : `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1">Preparing</h2>
                        <p class="text-sm font-bold text-gray-500">Estimated pickup at 12:45 PM</p>
                    </div>
                    `
                    }

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
                                <div class="flex-1">
                                    <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Ready for Pickup</h3>
                                    <p class="text-xs text-gray-500 font-medium">Waiting for completion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ${
                      isDesktop
                        ? `
                    <div class="pt-4 space-y-3">
                        <button onclick="alert('Calling store at (602) 555-0123...')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-violet-700">
                            <i class="fa-solid fa-phone"></i> Contact Store
                        </button>
                        <button onclick="navigateTo('home')" class="w-full py-2 text-gray-400 font-extrabold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">Back to Home</button>
                    </div>
                    `
                        : ""
                    }
                </div>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-t border-gray-100 shrink-0 sticky bottom-0">
                    <div class="p-6 w-full space-y-3">
                        <button onclick="alert('Calling store at (602) 555-0123...')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-violet-700">
                            <i class="fa-solid fa-phone"></i> Contact Store
                        </button>
                        <button onclick="navigateTo('home')" class="w-full py-2 text-gray-400 font-extrabold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">Back to Home</button>
                    </div>
                </div>
                `
                    : ""
                }
            </div>`;
  },
  registration: () => {
    const isDesktop = currentViewport === "desktop";
    return `
            <div class="flex flex-col h-full ${isDesktop ? "bg-[#f6f6f6]" : "bg-white"} relative overflow-y-auto">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Create Account</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('sign-in')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                
                <div class="w-full max-w-3xl mx-auto p-6 md:p-8 flex flex-col gap-8 font-sans">
                    <div class="text-center mb-2">
                        <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Register</h1>
                        <p class="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2">Create a new account</p>
                    </div>

                    <div class="${isDesktop ? "bg-white rounded-2xl p-8 shadow-sm border border-gray-100" : ""} flex flex-col gap-8">
                        <div class="space-y-6">
                            <!-- Account Info Section -->
                            <div class="space-y-4">
                                <h3 class="text-sm font-black text-violet-600 uppercase tracking-widest border-b border-violet-50 pb-2">Account Info</h3>
                                
                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Email</label>
                                    <div class="relative">
                                        <i class="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="email" id="reg-email" placeholder="email@example.com" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                    </div>
                                </div>

                                <div class="space-y-4">
                                    <div class="space-y-1.5">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Password</label>
                                        <div class="relative">
                                            <i class="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="password" id="reg-password" placeholder="Password" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                        </div>
                                    </div>
                                    <div class="space-y-1.5">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Confirm Password</label>
                                        <div class="relative">
                                            <i class="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="password" id="reg-confirm-password" placeholder="Confirm Password" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer Info Section -->
                            <div class="space-y-4">
                                <h3 class="text-sm font-black text-violet-600 uppercase tracking-widest border-b border-violet-50 pb-2">Customer Info</h3>
                                
                                <div class="space-y-4">
                                    <div class="space-y-1.5">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">First Name</label>
                                        <input type="text" id="reg-first-name" placeholder="First Name" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                    </div>
                                    <div class="space-y-1.5">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Last Name</label>
                                        <input type="text" id="reg-last-name" placeholder="Last Name" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                    </div>
                                </div>

                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                                    <div class="relative">
                                        <i class="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="tel" id="reg-phone" placeholder="(555) 000-0000" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                    </div>
                                </div>

                                <!-- Disclosure Checkbox -->
                                <div class="flex items-start gap-4 px-1 py-1">
                                    <div class="relative flex items-center shrink-0 mt-1">
                                        <input type="checkbox" id="sms-disclosure" class="w-6 h-6 border-2 border-gray-200 rounded-md checked:bg-violet-600 checked:border-violet-600 appearance-none cursor-pointer transition-all">
                                        <i class="fa-solid fa-check absolute text-white text-[12px] left-1.5 opacity-0 pointer-events-none"></i>
                                    </div>
                                    <label for="sms-disclosure" class="text-xs text-gray-400 font-bold leading-relaxed tracking-wider uppercase">
                                        I understand that by providing this cell number, I will receive verification, status, and/or service-related text message(s) and/or phone call(s) notifying me of the status of my account and order(s). All other uses are not authorized. Data rates may apply; frequency varies. Reply STOP to opt out at any time.
                                    </label>
                                </div>

                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Street</label>
                                    <input type="text" placeholder="Address" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                </div>

                                <div class="grid grid-cols-2 gap-3">
                                    <div class="space-y-1.5 text-sm">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">City</label>
                                        <input type="text" placeholder="City" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all">
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 text-sm">
                                        <div class="space-y-1.5">
                                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">State</label>
                                            <input type="text" placeholder="AZ" class="w-full px-2 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-center">
                                        </div>
                                        <div class="space-y-1.5">
                                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Zip</label>
                                            <input type="text" placeholder="85281" class="w-full px-2 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div id="reg-error" class="text-xs font-bold text-red-500 mb-2 text-center h-4 opacity-0 transition-all"></div>
                            <button onclick="handleRegistration()" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-widest font-black">Create Account</button>
                        </div>

                        <div class="text-center">
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Already have an account? <button onclick="navigateTo('sign-in')" class="text-violet-600 ml-1 font-black underline underline-offset-4">Sign In</button></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
  directions: () => {
    const isDesktop = currentViewport === "desktop";
    const mapSrc =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9880816825!2d-111.95254172421831!3d33.42224097339947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08da35c246f9%3A0xe21289658ec91e!2si-Tea%20Tempe!5e0!3m2!1sen!2sus!4v1714088000000!5m2!1sen!2sus";

    if (isDesktop) {
      return `
            <div class="flex h-full bg-white overflow-hidden" style="height: calc(100vh - 70px);">

                <!-- ===== LEFT SIDEBAR PANEL ===== -->
                <div class="w-[400px] shrink-0 flex flex-col bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.06)] z-10 overflow-y-auto scrollbar-hide">

                    <!-- Header -->
                    <div class="px-7 pt-7 pb-5 border-b border-gray-100">
                        <div class="flex items-center gap-3 mb-5">
                            <button onclick="window.history.back()" class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors shrink-0">
                                <i class="fa-solid fa-chevron-left text-gray-600 text-sm"></i>
                            </button>
                            <span class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Directions</span>
                        </div>

                        <!-- Location identity -->
                        <div class="flex items-center gap-4 mb-5">
                            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border-2 border-violet-100 overflow-hidden shadow-sm shrink-0">
                                <img src="images/itea_logo.png" class="w-10 h-10 object-contain">
                            </div>
                            <div class="min-w-0">
                                <h1 class="text-xl font-black text-gray-900 uppercase tracking-tight leading-tight">i-Tea Tempe</h1>
                                <p class="text-[11px] font-bold text-gray-500 mt-0.5 uppercase tracking-wider leading-relaxed truncate">825 W University Dr, Tempe, AZ 85281</p>
                            </div>
                        </div>

                        <!-- Transport mode tabs -->
                        <div class="flex gap-2">
                            <button id="dir-mode-drive" onclick="document.querySelectorAll('[id^=dir-mode-]').forEach(b=>b.classList.remove('bg-violet-600','text-white','shadow-md')); document.querySelectorAll('[id^=dir-mode-]').forEach(b=>b.classList.add('bg-gray-100','text-gray-600')); this.classList.remove('bg-gray-100','text-gray-600'); this.classList.add('bg-violet-600','text-white','shadow-md');" class="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl bg-violet-600 text-white shadow-md transition-all">
                                <i class="fa-solid fa-car text-base"></i>
                                <span class="text-[10px] font-black uppercase tracking-widest">Drive</span>
                            </button>
                            <button id="dir-mode-walk" onclick="document.querySelectorAll('[id^=dir-mode-]').forEach(b=>b.classList.remove('bg-violet-600','text-white','shadow-md')); document.querySelectorAll('[id^=dir-mode-]').forEach(b=>b.classList.add('bg-gray-100','text-gray-600')); this.classList.remove('bg-gray-100','text-gray-600'); this.classList.add('bg-violet-600','text-white','shadow-md');" class="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl bg-gray-100 text-gray-600 transition-all">
                                <i class="fa-solid fa-person-walking text-base"></i>
                                <span class="text-[10px] font-black uppercase tracking-widest">Walk</span>
                            </button>
                            <button id="dir-mode-transit" onclick="document.querySelectorAll('[id^=dir-mode-]').forEach(b=>b.classList.remove('bg-violet-600','text-white','shadow-md')); document.querySelectorAll('[id^=dir-mode-]').forEach(b=>b.classList.add('bg-gray-100','text-gray-600')); this.classList.remove('bg-gray-100','text-gray-600'); this.classList.add('bg-violet-600','text-white','shadow-md');" class="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl bg-gray-100 text-gray-600 transition-all">
                                <i class="fa-solid fa-bus text-base"></i>
                                <span class="text-[10px] font-black uppercase tracking-widest">Transit</span>
                            </button>
                        </div>
                    </div>

                    <!-- ETA + Distance stats -->
                    <div class="px-7 py-5 border-b border-gray-100">
                        <div class="grid grid-cols-3 gap-3">
                            <div class="bg-violet-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-violet-100">
                                <div class="text-violet-600 text-[10px] font-black uppercase tracking-widest mb-1">ETA</div>
                                <div class="text-2xl font-black text-gray-900">9</div>
                                <div class="text-[10px] font-bold text-gray-500 uppercase">mins</div>
                            </div>
                            <div class="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100">
                                <div class="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Distance</div>
                                <div class="text-2xl font-black text-gray-900">2.4</div>
                                <div class="text-[10px] font-bold text-gray-500 uppercase">miles</div>
                            </div>
                            <div class="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100">
                                <div class="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Traffic</div>
                                <div class="text-lg font-black text-green-600">Low</div>
                                <div class="text-[10px] font-bold text-gray-500 uppercase">Normal</div>
                            </div>
                        </div>
                    </div>

                    <!-- From / To route summary -->
                    <div class="px-7 py-5 border-b border-gray-100">
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-circle-dot text-blue-500 text-sm"></i>
                                </div>
                                <div class="min-w-0">
                                    <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">From</div>
                                    <div class="text-sm font-black text-gray-900 truncate">Your Location</div>
                                </div>
                            </div>
                            <div class="ml-4 w-px h-5 bg-gray-200 self-start ml-[15px]"></div>
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-location-dot text-white text-sm"></i>
                                </div>
                                <div class="min-w-0">
                                    <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">To</div>
                                    <div class="text-sm font-black text-gray-900 truncate">i-Tea Tempe · 825 W University Dr</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Turn-by-turn directions -->
                    <div class="px-7 py-5 flex-1">
                        <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Step-by-Step</div>
                        <div class="space-y-1">
                            ${[
                              {
                                icon: "fa-arrow-right",
                                label: "Head east on E University Dr",
                                dist: "0.3 mi",
                              },
                              {
                                icon: "fa-turn-right",
                                label: "Turn right onto S Mill Ave",
                                dist: "0.1 mi",
                              },
                              {
                                icon: "fa-turn-left",
                                label: "Turn left onto E 7th St",
                                dist: "0.5 mi",
                              },
                              {
                                icon: "fa-turn-right",
                                label: "Turn right onto S Rural Rd",
                                dist: "0.8 mi",
                              },
                              {
                                icon: "fa-turn-left",
                                label: "Turn left onto E University Dr",
                                dist: "0.4 mi",
                              },
                              {
                                icon: "fa-location-dot",
                                label: "Arrive at i-Tea Tempe",
                                dist: "Destination",
                              },
                            ]
                              .map(
                                (step, i) => `
                                <div class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-default">
                                    <div class="w-8 h-8 rounded-full ${i === 5 ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-600 group-hover:bg-violet-100 group-hover:text-violet-600"} flex items-center justify-center shrink-0 transition-colors">
                                        <i class="fa-solid ${step.icon} text-xs"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="text-sm font-bold text-gray-800 leading-snug">${step.label}</div>
                                        <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5">${step.dist}</div>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="px-7 py-6 border-t border-gray-100 space-y-3 shrink-0">
                        <button class="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-violet-200 flex items-center justify-center gap-3 active:scale-95 transition-all">
                            <i class="fa-solid fa-location-arrow"></i> Start Navigation
                        </button>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-white border-2 border-gray-100 text-gray-700 hover:border-violet-200 hover:text-violet-600 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                                <i class="fa-solid fa-share-nodes"></i> Share
                            </button>
                            <button class="flex-1 bg-white border-2 border-gray-100 text-gray-700 hover:border-violet-200 hover:text-violet-600 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                                <i class="fa-solid fa-print"></i> Print
                            </button>
                            <button onclick="window.history.back()" class="flex-1 bg-white border-2 border-gray-100 text-gray-700 hover:border-red-200 hover:text-red-500 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                                <i class="fa-solid fa-xmark"></i> Close
                            </button>
                        </div>
                    </div>
                </div>

                <!-- ===== RIGHT MAP PANEL ===== -->
                <div class="flex-1 relative bg-gray-100 overflow-hidden">
                    <iframe
                        src="${mapSrc}"
                        class="w-full h-full border-0"
                        allowfullscreen=""
                        loading="lazy">
                    </iframe>
                    <!-- Map overlay badge -->
                    <div class="absolute top-5 right-5 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                        <div class="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-location-dot text-white text-sm"></i>
                        </div>
                        <div>
                            <div class="text-xs font-black text-gray-900 uppercase tracking-tight">i-Tea Tempe</div>
                            <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Open Now · 9 min away</div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    // ===== MOBILE / TABLET (original layout preserved) =====
    return `
            <div class="flex flex-col h-full bg-white relative">

                <!-- Map Area -->
                <div class="flex-1 relative bg-gray-100 overflow-hidden">
                    <iframe 
                        src="${mapSrc}" 
                        class="w-full h-full border-0" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>

                    <!-- Search Mockup -->
                    <div class="absolute top-4 left-4 right-4 z-10">
                        <div class="bg-white rounded-full shadow-xl flex items-center px-5 py-4 border border-gray-100">
                            <i class="fa-solid fa-magnifying-glass text-gray-400 mr-4 text-sm"></i>
                            <span class="text-xs font-black text-gray-900 flex-1 truncate uppercase tracking-widest leading-none">825 W University Dr, Tempe, AZ 85281</span>
                            <i class="fa-solid fa-microphone text-violet-600 ml-4 border-l pl-5 border-gray-100"></i>
                        </div>
                    </div>
                </div>

                <!-- Bottom Panel -->
                <div class="bg-white rounded-t-[32px] shadow-[0_-12px_48px_rgba(0,0,0,0.15)] p-8 z-20 -mt-8">
                    <div class="w-16 h-1.5 bg-gray-100 rounded-full mx-auto mb-8"></div>
                    
                    <div class="flex items-start justify-between gap-6 mb-8">
                        <div class="flex-1">
                            <h2 class="text-3xl font-black text-gray-900 leading-none uppercase tracking-tighter">i-Tea Tempe</h2>
                            <p class="text-xs font-black text-gray-500 mt-3 uppercase tracking-widest leading-relaxed">825 W University Dr, Tempe, AZ 85281</p>
                        </div>
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-2 border-violet-100 overflow-hidden shadow-sm shrink-0">
                            <img src="images/itea_logo.png" class="w-12 h-12 object-contain">
                        </div>
                    </div>

                    <div class="flex gap-4 mb-8">
                        <button class="flex-[2.5] bg-violet-600 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-[0.2em] shadow-lg shadow-violet-200 flex items-center justify-center gap-3 active:scale-95 transition-all">
                            <i class="fa-solid fa-location-arrow text-xl"></i> START
                        </button>
                        <button class="flex-1 bg-white border-2 border-gray-200 text-gray-900 py-5 rounded-2xl flex items-center justify-center active:scale-95 transition-all shadow-sm">
                            <i class="fa-solid fa-share-nodes text-2xl text-violet-600"></i>
                        </button>
                    </div>

                    <div class="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm mb-10">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-violet-600">
                            <i class="fa-solid fa-car text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Estimated Arrival</div>
                            <div class="text-lg font-black text-gray-900 uppercase tracking-tight">9 mins <span class="font-bold text-gray-500 lowercase ml-2 text-sm">(2.4 miles)</span></div>
                        </div>
                    </div>
                    
                    <button onclick="window.history.back()" class="w-full py-2 text-gray-400 font-extrabold text-xs uppercase tracking-[0.3em] hover:text-gray-900 transition-colors">
                        <i class="fa-solid fa-xmark mr-1"></i> Close Map
                    </button>
                </div>
            </div>
        `;
  },

  "order-confirm": () => {
    const isDesktop = currentViewport === "desktop";
    const order = mockupState.lastOrder || {};
    const orderItems = order.orderItems || [];
    const orderNum =
      order.orderId ||
      order.orderNumber ||
      "FB-" + Math.floor(1000 + Math.random() * 9000);
    const locationName = mockupState.selectedLocation || "i-Tea";
    const selectedLoc =
      (mockupState.apiLocations || []).find(
        (loc) => loc.locationId === mockupState.selectedLocationId,
      ) ||
      LOCATIONS.find(
        (loc) => loc.locationId === mockupState.selectedLocationId,
      ) ||
      LOCATIONS.find((loc) => loc.name === locationName) ||
      {};
    const locationAddress =
      selectedLoc.address ||
      selectedLoc.streetAddress ||
      "825 W UNIVERSITY, TEMPE, AZ";
    const now = new Date();
    const pickupTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    const orderSubtotal = (order.subtotal || 0).toFixed(2);
    const orderTaxes = (order.taxes || 0).toFixed(2);
    const orderTip = (order.tipAmount || 0).toFixed(2);
    const orderTotal = (order.total || 0).toFixed(2);
    const itemCount = orderItems.reduce((sum, i) => sum + (i.quantity || 1), 0);

    return `
            <div class="flex flex-col h-full bg-white relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center">
                    <div class="w-full max-w-[1080px] flex items-center px-2">
                        <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                        <span class="text-lg font-black text-violet-600 flex-1 text-center">SUCCESS</span>
                        <div class="w-10"></div>
                    </div>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('menu')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back to Menu</span>
                    </button>
                </div>
                `
                    : ""
                }
                <div class="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6 w-full ${isDesktop ? "max-w-2xl" : "max-w-[1080px]"} mx-auto">
                    
                    <div class="contents">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-inner">
                                <i class="fa-solid fa-check text-5xl"></i>
                            </div>
                            <h1 class="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">Order Confirmed!</h1>
                            <p class="text-gray-500 font-medium mb-8">Your order <span class="text-violet-600 font-black">#${orderNum}</span> is being sent to the kitchen.</p>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100 flex flex-col justify-center">
                                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 leading-none">Pick Up Time</div>
                                <div class="text-2xl font-black text-violet-600 uppercase">${pickupTime}</div>
                            </div>
                            <div class="bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100 flex flex-col justify-center">
                                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 leading-none">Location</div>
                                <div class="text-base font-black text-violet-600 uppercase truncate mb-1">${locationName}</div>
                                <div class="text-[10px] font-bold text-gray-500 uppercase leading-snug truncate">${locationAddress}</div>
                            </div>
                        </div>
                    </div>

                    <div class="contents">
                        <div class="flex gap-2 overflow-x-auto scrollbar-hide shrink-0 pb-2">
                            <button onclick="updateMockupState('orderDetailsExpanded', !mockupState.orderDetailsExpanded); navigateTo(currentPage);" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap active:scale-95 transition-all">
                                <i class="fa-solid ${mockupState.orderDetailsExpanded ? "fa-chevron-up" : "fa-chevron-down"} text-[10px] text-gray-500"></i>
                                <span class="text-sm font-black text-gray-900 uppercase tracking-tight">Order details</span>
                            </button>
                        </div>

                        ${
                          mockupState.orderDetailsExpanded
                            ? `
                        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-[fadeIn_0.3s_ease-out] space-y-8">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-violet-50 overflow-hidden">
                                    <img src="images/i-tea-logo-new.png" class="w-full h-full object-contain scale-75">
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">${locationName}</h3>
                                    <p class="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">${itemCount} item${itemCount !== 1 ? "s" : ""}</p>
                                </div>
                            </div>

                            <div class="space-y-4">
                                ${orderItems
                                  .map((item) => {
                                    const customSummary =
                                      (item.selectedSubItems || [])
                                        .map((s) =>
                                          s.quantity > 1
                                            ? `${s.name} x${s.quantity}`
                                            : s.name,
                                        )
                                        .join(" • ") || "Standard";
                                    const itemTotal = (
                                      item.unitPrice * item.quantity
                                    ).toFixed(2);
                                    return `
                                    <div class="flex gap-4">
                                        <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                            <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex justify-between items-start">
                                                <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">${item.quantity} × ${item.name}</h4>
                                                <span class="text-sm font-black text-gray-900">$${itemTotal}</span>
                                            </div>
                                            <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase">${customSummary}</p>
                                        </div>
                                    </div>`;
                                  })
                                  .join("")}
                            </div>

                            <div class="space-y-2 pt-4 border-t border-gray-100">
                                <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                    <span>Subtotal</span>
                                    <span>$${orderSubtotal}</span>
                                </div>
                                <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                    <span>Tax</span>
                                    <span>$${orderTaxes}</span>
                                </div>
                                ${
                                  parseFloat(orderTip) > 0
                                    ? `
                                <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                    <span>Tip</span>
                                    <span>$${orderTip}</span>
                                </div>`
                                    : ""
                                }
                                <div class="flex justify-between text-base font-black text-gray-900 uppercase pt-2">
                                    <span>Total</span>
                                    <span>$${orderTotal}</span>
                                </div>
                            </div>

                            <div class="pt-6 border-t border-gray-100">
                                <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">Payment</h2>
                                <div class="flex items-start justify-between">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-8 bg-gray-50 rounded border border-gray-200 flex items-center justify-center shrink-0">
                                            <i class="fa-solid fa-credit-card text-xl text-gray-400"></i>
                                        </div>
                                        <div>
                                            <p class="text-sm font-black text-gray-900 uppercase tracking-tight">Card Payment</p>
                                            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">${now.toLocaleDateString("en-US")}, ${pickupTime}</p>
                                        </div>
                                    </div>
                                    <span class="text-base font-black text-gray-900">$${orderTotal}</span>
                                </div>
                            </div>
                        </div>
                        `
                            : ""
                        }

                        <div class="w-full space-y-4 pt-4">
                            <button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">Order Again</button>
                            <button onclick="navigateTo('home')" class="w-full py-2 text-gray-400 font-extrabold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">Back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
  checkout: () => {
    const isDesktop = currentViewport === "desktop";
    // Dynamic pricing from cart
    const cart = mockupState.cart || [];
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );
    const taxRate = mockupState.locationTaxRate || 0.0925;
    const taxes = subtotal * taxRate;
    const bagFee = mockupState.bagQuantity * 0.1;
    const convenienceFee = mockupState.locationConvenienceFee || 0;

    let tipAmount = 0;
    if (mockupState.tipPercentage === "other") {
      tipAmount = parseFloat(mockupState.customTipAmount) || 0;
    } else {
      tipAmount = subtotal * (mockupState.tipPercentage / 100);
    }

    const finalTotal = (
      subtotal +
      taxes +
      bagFee +
      convenienceFee +
      tipAmount
    ).toFixed(2);

    const openPaymentModal = (method) => {
      mockupState.paymentMethod = method;
      updateMockupState("modalOpen", `payment-${method}`);
    };

    return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center">
                    <div class="w-full max-w-[1080px] flex items-center px-2">
                        <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                        <span class="text-lg font-black text-violet-600 flex-1 text-center">Payment</span>
                        <div class="w-10"></div>
                    </div>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('cart')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                
                <div id="payment-scroller" class="flex-1 overflow-y-auto ${isDesktop ? "p-6 md:p-8 space-y-8 w-full max-w-3xl mx-auto pb-12" : "p-4 space-y-6 w-full max-w-[1080px] mx-auto pb-32"} scrollbar-hide">

                    
                    <!-- Payment Methods -->
                    <div>
                        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Payment Method</h2>
                        <div class="space-y-3">
                            <!-- Card -->
                            <div onclick="updateMockupState('modalOpen', 'payment-card')" class="bg-white rounded-2xl ${isDesktop ? "p-4" : "p-3"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                        <i class="fa-solid fa-credit-card text-lg"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-900 uppercase text-xs block tracking-tight">Credit or Debit Card</span>
                                        <span class="text-[10px] font-bold text-violet-600 uppercase">Ending in 442</span>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
                            </div>

                            <!-- Gift Card & Loyalty (Two Column) -->
                            <div class="grid grid-cols-2 gap-3">
                                <!-- Gift Card -->
                                <div onclick="updateMockupState('modalOpen', 'payment-gift')" class="bg-white rounded-2xl ${isDesktop ? "p-4" : "p-3"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-400 shrink-0">
                                            <i class="fa-solid fa-gift text-lg"></i>
                                        </div>
                                        <span class="font-black text-gray-900 uppercase text-xs tracking-tight truncate">Redeem Gift Card</span>
                                    </div>
                                    <i class="fa-solid fa-chevron-right text-[10px] text-gray-300 shrink-0"></i>
                                </div>

                                <!-- Loyalty -->
                                <div onclick="updateMockupState('modalOpen', 'payment-rewards')" class="bg-white rounded-2xl ${isDesktop ? "p-4" : "p-3"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-400 shrink-0">
                                            <i class="fa-solid fa-award text-lg"></i>
                                        </div>
                                        <div class="min-w-0">
                                            <span class="font-black text-gray-900 uppercase text-xs block tracking-tight truncate">Loyalty Rewards</span>
                                            <span class="text-[10px] font-bold text-violet-600 uppercase block truncate">Available: $12.50</span>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-chevron-right text-[10px] text-gray-300 shrink-0"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tipping Section -->
                    <div>
                        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Add a Tip</h2>
                        <div class="grid grid-cols-4 gap-3">
                            ${[10, 15, 20, "other"]
                              .map((val) => {
                                const isSelected =
                                  mockupState.tipPercentage === val;
                                const label =
                                  val === "other" ? "Other" : `${val}%`;
                                const action =
                                  val === "other"
                                    ? "updateMockupState('modalOpen', 'tip-other')"
                                    : `updateMockupState('tipPercentage', ${val})`;
                                return `
                                    <button onclick="${action}" class="py-3.5 rounded-2xl border-2 font-black uppercase text-xs tracking-tighter transition-all ${isSelected ? "bg-violet-600 text-white border-violet-600 shadow-md" : "bg-white text-gray-400 border-gray-100 hover:border-violet-100"}">
                                        ${label}
                                    </button>
                                `;
                              })
                              .join("")}
                        </div>
                    </div>

                    <!-- Pricing Summary -->
                    <div class="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 space-y-4">
                        <div class="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest"><span>Tax & Service</span><span>$${taxes.toFixed(2)}</span></div>
                        <div class="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest"><span>Tip</span><span>$${tipAmount.toFixed(2)}</span></div>
                        <div class="h-px bg-gray-50 w-full my-4"></div>
                        <div class="flex justify-between text-xl font-black text-gray-900 uppercase"><span>Total</span><span class="text-violet-600">$${finalTotal}</span></div>
                    </div>
                    ${
                      isDesktop
                        ? `
                    <div class="pt-4 flex justify-between gap-4 w-full">
                        <button onclick="navigateTo('cart')" class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-violet-600 hover:bg-violet-50 shadow-md transition-all active:scale-95 shrink-0"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                        <button onclick="window._handlePlaceOrder()" class="flex-1 bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-wider">Purchase Order</button>
                    </div>
                    `
                        : ""
                    }
                </div>

                <!-- Footer Action Buttons -->
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-50">
                    <div class="p-6 flex justify-between gap-4 w-full max-w-[1080px] mx-auto">
                        <button onclick="navigateTo('cart')" class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-violet-600 hover:bg-violet-50 shadow-md transition-all active:scale-95 shrink-0"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                        <button onclick="window._handlePlaceOrder()" class="flex-1 bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 transition-all uppercase tracking-wider">Purchase Order</button>
                    </div>
                </div>
                `
                    : ""
                }

                <!-- PAYMENT MODALS -->
                
                <!-- Credit Card Modal -->
                ${
                  mockupState.modalOpen === "payment-card"
                    ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[90%] max-w-[420px] rounded-[32px] p-8 shadow-2xl animate-[slideUp_0.4s_ease-out]">
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="font-black text-xl text-gray-900 uppercase">Card Details</h3>
                            <button onclick="updateMockupState('modalOpen', null)" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="space-y-4 mb-8">
                            <div class="space-y-1.5">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Cardholder Name</label>
                                <input type="text" value="Michaelangelo Smith" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
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
                </div>`
                    : ""
                }

                <!-- Gift Card Modal -->
                ${
                  mockupState.modalOpen === "payment-gift"
                    ? `
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
                </div>`
                    : ""
                }

                <!-- Rewards Modal -->
                ${
                  mockupState.modalOpen === "payment-rewards"
                    ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[95%] max-w-[420px] rounded-[32px] p-8 shadow-2xl animate-[slideUp_0.4s_ease-out]">
                        <div class="flex justify-between items-center mb-8">
                            <h3 class="font-black text-xl text-gray-900 uppercase">Your Punch Card</h3>
                            <button onclick="updateMockupState('modalOpen', null)" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        
                        <div class="bg-violet-50 rounded-[24px] p-6 border border-violet-100 mb-8">
                            <div class="grid grid-cols-5 gap-3 mb-6">
                                ${Array.from({ length: 10 })
                                  .map((_, i) => {
                                    let stampClass =
                                      "bg-white border-violet-100 text-violet-100";
                                    if (i < 7)
                                      stampClass =
                                        "bg-violet-600 border-violet-600 text-white shadow-sm";
                                    return `
                                    <div class="aspect-square rounded-full border-2 flex items-center justify-center ${stampClass}">
                                        <i class="fa-solid fa-mug-hot text-lg"></i>
                                    </div>
                                    `;
                                  })
                                  .join("")}
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
                </div>`
                    : ""
                }

                <!-- Custom Tip Modal -->
                ${
                  mockupState.modalOpen === "tip-other"
                    ? `
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
                                <input type="number" id="custom-tip-input" value="${mockupState.customTipAmount || ""}" placeholder="0.00" 
                                       class="w-full bg-gray-50 border-2 border-transparent focus:border-violet-600 px-12 py-6 rounded-[24px] text-4xl font-black text-center text-gray-900 outline-none transition-all placeholder:text-gray-200"
                                       onchange="mockupState.customTipAmount = this.value">
                            </div>

                            <button onclick="updateMockupState('tipPercentage', 'other'); updateMockupState('modalOpen', null);" 
                                    class="w-full bg-violet-600 text-white py-5 rounded-[24px] font-black uppercase text-lg shadow-[0_15px_30px_-10px_rgba(124,58,237,0.5)] active:scale-95 transition-all">
                                Add Tip
                            </button>
                        </div>
                    </div>
                </div>`
                    : ""
                }

            </div>`;
  },

  "location-favorites": () => {
    const isDesktop = currentViewport === "desktop";
    const list =
      mockupState.apiLocations && mockupState.apiLocations.length > 0
        ? mockupState.apiLocations
        : LOCATIONS;
    const favorites = list.filter((loc) => loc.fav);

    return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4"><i class="fa-solid fa-bars text-xl"></i></button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Favorite Locations</span>
                    <div class="w-10"></div>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('locations')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                <div class="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide w-full max-w-3xl mx-auto">
                    ${
                      isDesktop
                        ? `
                    <div class="mb-2">
                        <h1 class="text-3xl font-black text-gray-900 tracking-tighter mb-1 uppercase font-black">Favorite Locations</h1>
                        <p class="text-gray-600 font-medium mb-4">Manage your saved home, work, and custom store labels.</p>
                    </div>
                    `
                        : ""
                    }

                    ${
                      favorites.length === 0
                        ? `
                        <div class="py-20 text-center flex flex-col items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
                                <i class="fa-solid fa-heart-crack text-4xl"></i>
                            </div>
                            <h3 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">No Favorite Stores</h3>
                            <p class="text-gray-500 font-medium mb-8">You haven't saved any locations as favorites yet.</p>
                            <button onclick="navigateTo('locations')" class="bg-violet-600 text-white px-8 py-3.5 rounded-full font-black uppercase text-xs tracking-wider shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] hover:bg-violet-700 transition active:scale-95">Find a Store</button>
                        </div>
                    `
                        : favorites
                            .map((s) => {
                              const activeLabel =
                                mockupState.locationLabels?.[s.name] || "";
                              const isCustom =
                                activeLabel &&
                                activeLabel !== "Home" &&
                                activeLabel !== "Office" &&
                                activeLabel !== "Work";
                              return `
                            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        ${activeLabel ? `<span class="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1 block" style="font-family: Roboto, sans-serif;">${activeLabel}</span>` : ""}
                                        <h3 class="font-black text-gray-900 uppercase tracking-tight">${s.name}</h3>
                                        <p class="text-xs text-gray-500 font-medium">${s.address}</p>
                                    </div>
                                    <button onclick="toggleLocationFavorite('${s.name}')" class="text-red-500 hover:text-red-700 transition-colors active:scale-90" title="Remove Favorite">
                                        <i class="fa-regular fa-trash-can text-lg"></i>
                                    </button>
                                </div>
                                
                                <div class="space-y-3">
                                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                                    <div class="flex gap-2">
                                        <button onclick="setLocationLabel('${s.name}', '${activeLabel === "Home" ? "" : "Home"}')" class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 transition active:scale-95 ${activeLabel === "Home" ? "border-violet-600 bg-violet-600 text-white shadow-sm" : "border-gray-200 text-gray-500 hover:border-violet-400 bg-white"}">Home</button>
                                        <button onclick="setLocationLabel('${s.name}', '${activeLabel === "Office" ? "" : "Office"}')" class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 transition active:scale-95 ${activeLabel === "Office" ? "border-violet-600 bg-violet-600 text-white shadow-sm" : "border-gray-200 text-gray-500 hover:border-violet-400 bg-white"}">Office</button>
                                        <button onclick="setLocationLabel('${s.name}', '${activeLabel === "Work" ? "" : "Work"}')" class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 transition active:scale-95 ${activeLabel === "Work" ? "border-violet-600 bg-violet-600 text-white shadow-sm" : "border-gray-200 text-gray-500 hover:border-violet-400 bg-white"}">Work</button>
                                    </div>
                                    <div class="relative">
                                        <input type="text" placeholder="Custom Label (e.g. Gym)" value="${isCustom ? activeLabel : ""}" onchange="setLocationLabel('${s.name}', this.value)" onkeydown="if(event.key === 'Enter') setLocationLabel('${s.name}', this.value)" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                                    </div>
                                </div>
                            </div>
                        `;
                            })
                            .join("")
                    }

                    ${
                      favorites.length > 0 && isDesktop
                        ? `
                    <div class="flex justify-start pt-2">
                        <button onclick="navigateTo('locations')" class="w-1/3 bg-violet-600 text-white py-4 rounded-full font-black uppercase tracking-wider shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-[0.98] hover:bg-violet-700 transition-all">Done</button>
                    </div>
                    `
                        : ""
                    }
                </div>
                ${
                  favorites.length > 0 && !isDesktop
                    ? `
                <div class="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                    <button onclick="navigateTo('locations')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black uppercase tracking-wider shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-[0.98] transition-all">Done</button>
                </div>
                `
                    : ""
                }
            </div>
        `;
  },
  "menu-favorites": () => {
    const isDesktop = currentViewport === "desktop";
    const favorites = mockupState.favorites || [];

    return `
            <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Header Component -->
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Menu Favorites</span>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                    <button onclick="navigateTo('menu')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }

                <div class="p-6 md:p-8 max-w-3xl mx-auto w-full flex flex-col gap-6 pb-16">
                    <div class="mb-8">
                        <h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-1 uppercase">Your Favorites</h1>
                        <p class="text-gray-600 font-medium mb-4">Keep track of the items you love most.</p>
                        ${!isDesktop ? '<button class="w-full py-3 bg-violet-600 text-white rounded-full font-black uppercase text-sm shadow-lg tracking-widest mb-2">Menu Favorites</button>' : ""}
                    </div>

                    ${
                      favorites.length === 0
                        ? `
                        <div class="py-20 text-center flex flex-col items-center">
                            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
                                <i class="fa-solid fa-heart-crack text-4xl"></i>
                            </div>
                            <h3 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">No favorites yet</h3>
                            <p class="text-gray-500 font-medium mb-8">Start adding items you love to see them here!</p>
                            <button onclick="navigateTo('menu')" class="bg-violet-600 text-white px-8 py-3 rounded-full font-black uppercase text-sm shadow-lg tracking-wide">Explore Menu</button>
                        </div>
                    `
                        : `
                    <div class="grid grid-cols-1 md:grid-cols-2 ${isDesktop ? "gap-6" : "gap-[10px]"}">
                        ${favorites
                          .map(
                            (item) => `
                            <div class="bg-white rounded-2xl ${isDesktop ? "p-5" : "p-4"} shadow-sm border border-gray-100 flex ${isDesktop ? "gap-5" : "flex-col gap-4"} hover:shadow-md transition-shadow relative group">
                                <div class="${isDesktop ? "w-24 h-24" : "w-full h-56"} rounded-xl overflow-hidden shrink-0 border border-gray-50">
                                    <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div class="flex-1 flex flex-col justify-between py-1 min-w-0">
                                    <div class="cursor-pointer">
                                        <div class="text-violet-600 text-[9px] font-black tracking-widest uppercase mb-1">${item.category}</div>
                                        <h4 class="font-black text-gray-900 ${isDesktop ? "text-base" : "text-lg"} leading-tight tracking-tight mb-1 pr-8 truncate">${item.name}</h4>
                                        <div class="font-black text-violet-600 text-sm">$${item.price.toFixed(2)}</div>
                                    </div>
                                    <div class="flex gap-2 mt-4">
                                        <button onclick="navigateTo('customize')" class="text-violet-600 font-black text-[10px] uppercase tracking-widest hover:underline">Customize</button>
                                        <span class="text-gray-300">•</span>
                                        <button onclick="navigateTo('cart')" class="text-violet-600 font-black text-[10px] uppercase tracking-widest hover:underline">Add to Order</button>
                                    </div>
                                </div>
                                <button onclick="removeFavorite(${item.id})" class="absolute ${isDesktop ? "top-4 right-4" : "top-4 right-4"} w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors shadow-sm" title="Remove from favorites">
                                    <i class="fa-solid fa-heart text-sm"></i>
                                </button>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                    `
                    }

                    <div class="mt-12 p-8 bg-violet-600 rounded-3xl text-white text-center relative overflow-hidden shadow-xl">
                        <i class="fa-solid fa-gift absolute -right-6 -bottom-6 text-9xl text-white/10 rotate-12"></i>
                        <h3 class="text-2xl font-black tracking-tight mb-2 relative z-10 uppercase">Want more rewards?</h3>
                        <p class="text-violet-100 font-medium mb-6 relative z-10 max-w-sm mx-auto">Favorite 5 items to earn 500 bonus points on your next visit!</p>
                        <button onclick="navigateTo('menu')" class="bg-white text-violet-600 px-8 py-3 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 relative z-10">Browse Menu</button>
                    </div>
                </div>
            </div>`;
  },
};

routes["privacy"] = () => {
  const isDesktop = currentViewport === "desktop";
  return `
        <div class="flex flex-col ${isDesktop ? "min-h-screen" : "h-full"} bg-[#f9fafb] relative ${isDesktop ? "" : "overflow-y-auto scrollbar-hide"} privacy-override">
            <!-- Subtle top-aligned brand gradient overlay fading down -->
            <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>

            <!-- Header Component -->
            <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
                <span class="text-lg font-black text-violet-600 flex-1 text-center">Privacy Policy & Terms</span>
                <div class="w-10"></div>
            </header>
            ${
              !isDesktop
                ? `
            <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
                <button onclick="navigateTo('restaurant-home')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                    <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                    <span>Back</span>
                </button>
            </div>
            `
                : ""
            }

            <div class="p-6 md:p-8 max-w-3xl mx-auto w-full flex flex-col gap-6 ${isDesktop ? "pb-12" : "pb-24"} relative z-10">
                <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 space-y-6 text-left">
                    <h1 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Web Site Privacy Policy and Terms of Use</h1>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        Please contact us via postal mail with any questions and concerns about the following privacy policy and/or terms of use.
                    </p>

                    <p class="text-sm text-gray-600 font-bold leading-relaxed">
                        Customer Service<br>
                        Farebites, LLC<br>
                        18191 W Banff Lane<br>
                        Surprise, AZ 85388<br>
                        support@farebites.com
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        The term “we,” “us” “our” or “Farebites” as used in this Policy shall mean, unless specifically stated otherwise in the context of such use, Farebites, LLC., and its affiliates.
                    </p>

                    <h2 class="text-base font-black text-gray-900 uppercase mt-8 border-b pb-2 tracking-tight">OUR WEBSITE PRIVACY POLICY</h2>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        This website privacy policy (“Policy”) describes the collection, use, maintenance and disclosure of Personally Identifiable Information collected through this website, i.e. www.farebites.com (this “Site”). Personally Identifiable Information is used amongst Farebites, LLC. and its affiliates, as described above. By using this Site, “you”, the user, agree to be bound to the following:
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        We collect information when you interact with us on-line by your visits to and use of the Site. That information may be Personally Identifiable Information or it may be Aggregate Information. Aggregate information is information about user and browsing behavior that does not contain any Personally Identifiable Information or from which any Personally Identifiable Information has been removed. For example, for each visitor to the Site, our web server automatically recognizes the consumer’s domain name or IP address. We also may use “cookies”. Cookies are record-keeping tracking tools electronically placed on your hard drive through your use of the Site that may automatically track and collect information about your use of the Site, such as, by way of example not limitation, what pages you access or visit and when. Cookies can be used to customize, monitor or regulate the use of the Site and/or to personalize your experience on the Site. Through the use of cookies, we can track the performance of our on-line promotional campaigns and customize the Site for a richer web site experience to individual visitors. We may also use Aggregate Information for historical, statistical or analytical purposes. We may share information about the users of our Site with our advertising sources. You acknowledge and agree that we may collect, compile, store and otherwise disclosure or use any and all Aggregate Information collected on the Site.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">What Personally Identifiable Information is collected through this Site?</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        Personally Identifiable Information collected through this Site may include, without limitation:
                    </p>

                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 font-medium leading-relaxed">
                        <li>first and last name;</li>
                        <li>home or other physical address;</li>
                        <li>e-mail address;</li>
                        <li>telephone number; and/or</li>
                        <li>other identifier collected from you through your use of this Site that allows us to contact you online.</li>
                    </ul>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        For example, if you register for an account, we may collect your name, phone number, email address, and/or address for deliver. Such information is collected from you only if you voluntarily submit such information. You can always choose not to supply Personally Identifiable Information, except that may prevent you from engaging in certain Site related activities.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">How do we use the Personally Identifiable Information that is collected on this Site?</h3>

                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 font-medium leading-relaxed">
                        <li>To respond to your request or inquiry;</li>
                        <li>To send you periodic email from us, including without limitation topics such as new products and services, or upcoming events or promotions;</li>
                        <li>To analyze and improve our products and services and for related business purposes. For example, to understand what our customers are looking for in products and services;</li>
                        <li>To determine, analyze and run our promotions, surveys or other Site features;</li>
                        <li>To support our marketing, sales and other business operations and opportunities;</li>
                        <li>To send you information or communications about transactions between you and us;</li>
                        <li>To comply with legal requirements, such as if we are required to do so by law or to the extent necessary to comply with law, respond to or defend claims or to protect our rights;</li>
                        <li>To direct you to particular information on the Site or otherwise personalize your user experience of the Site; and</li>
                        <li>For any other lawful purpose.</li>
                    </ul>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">How do we respond to “do not track” signals?</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        This Site does not monitor or identify “do not track signals” from your computer, and such signals will not impact the general operation of this Site. We track whatever information gets transmitted to us. You can choose to adjust your web browser to alert you or disable tracking tools like cookies. However, we provide you with no assurances that any such options from your internet provider operate properly to prohibit tracking when you use this Site. Nevertheless, keep in mind that if you do not give us certain information or turn off tracking tools, your experience on the Site may be different. Note: You can also choose whether or not to voluntarily supply us with contact information by not submitting on-line requests on this Site.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">Your Personally Identifiable Information collected through this Site may be used by what third party persons or entities?</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        WE DO NOT SELL YOUR INFORMATION. Your information may be used by restaurants, service providers, vendors, consultants, agents or representatives in connection with the operations of our businesses, including without limitation our financial institutions, financial service providers, marketing and sales consultants, cloud-based information management systems or email marketing technology solutions; With third parties for the purpose of helping us gather, store, use and maintain data (on-line or otherwise) or to operate the Site; In the event of the sale of all or any portion of our business or companies, with such purchaser and its representatives to the extent relevant to such transaction; and Such third parties as is required, permitted or authorized by law.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">How can you review and request changes to YOUR Personally Identifiable Information collected through this Site?</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        You can correct or update your contact information by using the “My Account” link after you log into the Site.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">The right to delete Personal Data.</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        You have the right to request the deletion of Your Personal Data via the address or email provided at the top of the privacy policy, subject to certain exceptions. Once We receive and confirm Your request, We will delete (and direct Our Service Providers to delete) Your personal information from our records, unless an exception applies. We may deny Your deletion request if retaining the information is necessary for Us or Our Service Providers to:
                    </p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 font-medium leading-relaxed">
                        <li>Complete the transaction for which We collected the personal information, provide a good or service that You requested, take actions reasonably anticipated within the context of our ongoing business relationship with You, or otherwise perform our contract with You.</li>
                        <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
                        <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
                        <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
                        <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).</li>
                        <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if You previously provided informed consent.</li>
                        <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on Your relationship with Us.</li>
                        <li>Comply with a legal obligation.</li>
                        <li>Make other internal and lawful uses of that information that are compatible with the context in which You provided it.</li>
                    </ul>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">How do we protect the Personally Identifiable Information collected through this Site?</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        We adopt reasonable and appropriate data collection, storage and processing practices and security measures to seek to protect against unauthorized access, alteration, disclosure or destruction of your Personally Identifiable Information collected through this Site. Those processes, practices and procedures may change from time to time. While protecting consumer privacy is important to us, and efforts are made to secure such Personally Identifiable Information, no website or procedure is 100% secure.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">What is the Effective Date of this Privacy Policy and will it change?</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        This document was last updated on June 17, 2020. We reserve the right to change this policy from time to time. We will notify you of changes to this Policy by updating this Policy on the Site and setting forth the date on which the update was made. The most recent version of this Policy will be posted here. Therefore, we encourage you to check this Policy on the Site from time to time for updates. You acknowledge and agree that it is your responsibility to review this Policy periodically and become aware of any changes.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">ATTENTION CALIFORNIA RESIDENTS-YOUR CALIFORNIA PRIVACY RIGHTS</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        We have a policy of not disclosing personal information of California resident customers to third parties (except to the extent permitted by California Civil Code Section 1798.83) for the third parties’ direct marketing purposes if the customer has exercised an option that prohibits that information from being disclosed to third parties for those purposes, unless such customer first affirmatively agrees to that disclosure. For purposes of this California privacy rights, “personal information” shall have the meaning set forth in California Civil Code Section 1798.83(e)(7).
                    </p>

                    <h2 class="text-base font-black text-gray-900 uppercase mt-8 border-b pb-2 tracking-tight">OUR WEBSITE TERMS OF USE</h2>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        By using this Site, you, the user, agree to be bound to the following “Terms of Use:”
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        Although we use reasonable efforts to make the content of this Site accurate, typographical errors and inaccuracies may occur and the information may not be current. The content and use of this web site, is presented “As is” and without warranty. We do not make any representations and warranties and provide no guarantee of the accuracy and completeness of all information on the Site and disclaim all warranties, express or implied, including without limitation implied warranties or conditions of merchantability or fitness for a particular purpose or non-infringement, with respect to this Site and any content, information, products or services stated on this Site. Without limiting the foregoing, any price published on this Site is subject to change without notice. All products and services referenced on this Site are subject to their terms and conditions as well as applicable law. We reserve the right to remove and/or change any images, information or any other aspect of the Site at any time without notice. We also reserve the right to suspend and/or terminate your access to the Site or any portion thereof, at any time, for any or no reason, without notice.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed font-semibold">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE HAVE ANY LIABILITY WHATSOVER ARISING FROM OR RELATED TO YOUR USE OF OR THE PERFORMANCE OF THE SITE, ANY CONTENT OR INFORMATION OBTAINED THROUGH THIS SITE OR OTHERWISE ARISNG OUT OF THE USE OF THIS SITE OR THE INABILTIY TO USE THIS SITE. WE SHALL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTIAL OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO LOSS OF BUSINESS, LOSS OF PROFITS OR LOSS OF OPPORUNITY), WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING BUT NOT LIMITED TO, NEGLIGENCE) OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBLITY OF SUCH DAMAGES.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        You understand and agree that your use of the Site is at your own risk and that we do not represent or warrant that the Site is completely free from virus, other harmful data or components or that your use of the Site may otherwise cause damage to your computer system or loss of data or other damage to you or your property.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        To the maximum extent permitted by applicable law, the Policy and the Terms of Use shall be interpreted in accordance with the laws of the state of Arizona without regard to the conflict of law provisions and any disputes concerning the Site, including without limitation the use thereof, the contents thereof or the performance thereof, shall be brought solely in a court of competent jurisdiction located in Maricopa County, Arizona. You hereby consent to the exclusive jurisdiction of the above venue.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        We do not knowingly collect information from children under the age of 13. We do not target or direct this Site to children. This Site is intended for users over the age of 18 and no person 18 years of age or under should use or submit information through this Site.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        This Site may contain links to third party websites, by way of example, not limitation, advertising or other content. We do not control any such links or third party websites and we are not responsible for their content, their practices or their privacy policies or any damage caused to you by such other website. In addition, those sites or services, including their content and links, may change from time to time. Any information that you provide to such third party websites are not subject to this privacy policy; rather they are subject to the privacy policy of that website. Similarly, such websites may have their own customer service policies and terms of use. You should review the terms of use and privacy policy of each website you visit or link to. Any such links are provided for your convenience only. Any such link is not intended to and should not be interpreted to endorse, sponsor, create a joint venture or any other affiliation between us and such third party. Browsing and interaction on any other website, including websites which have a link to our site, is subject to that website’s terms.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        This Site and all of its contents are our property and shall not be reproduced, copied, distributed or used, in whole or in part, without our express written permission. Without limiting the foregoing, we are the owners of certain trademarks, tradenames and servicemarks, whether or not they are specifically marked as such and whether or not they are or are not registered with any applicable site or federal governmental agency, used on this Site. A number of these tradenames, trademarks or service marks are registered with the Arizona Corporation Commission and/or the United States Patent and Trademark Office. In addition, the Site may also contain trademarks, tradenames and service marks that belong to third parties. Such other trademarks, tradenames and service marks are the property of their respective third party owners. Any unauthorized use of any trademarks, tradenames, service marks, copyrights or other intellectual property, whether registered or unregistered, on this Site is strictly prohibited.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        This Site may be accessed by users throughout the United States and internationally. It may contain information about products or services that are not available for sale in your state or country as a result of the lack of our registration/licensing or the registration/licensing of such product or otherwise. Such information is not intended as solicitation or offer of such products or services in states or countries in which we are not authorized to conduct business or where the offer and sale of such products or services is otherwise in violation of law.
                    </p>

                    <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight mt-6">Your Acceptance of the Privacy Policy and Terms of Use</h3>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        By using this Site, including without limitation submitting any Personally Identifiable Information through this Site, you agree to the then current terms of this Policy and the Terms of Use. If you do not agree to this Policy or the Terms of Use, do not use the Site. To the fullest extent permitted by law, your continued use of the Site following the posting of any changes to this Policy or the Term of Use will be deemed your acceptance of those changes. You further agree that you are responsible for all information, data, images and files that you (or someone using your account) transmit via this Site. You represent, warranty and agree that (i) you are at least 18 years of age; (ii) your use of the Site is legal in and does not violate the laws of the jurisdiction in which you reside or from which you use or access the Site; (iii) all information, data, images and files that you (or someone using your account) transmit via this Site are correct and virus free; (iv) you (or the person using your account has) have the requisite legal right and authority to transmit such information, data, images and files transmitted via this Site; (v) you are using this Site only for your own personal general reference; and (vi) you have the legal right, capacity and authority to agree to the Policy and Terms of Use and do agree to use the Site in accordance with the Policy and Terms of Use and in accordance with all applicable law. You agree to indemnify, defend and hold us and our owners, officers, directors, employees, agents, contractors and representatives harmless for, from and against any and all liability, damages, loss, claim and expense (including without limitation, reasonable attorneys’ fees and other enforcement costs) related to or arising from any of your representations and warranties set forth in the Policy and Terms of Use and/or your failure to comply with any of the terms of the Policy or Terms of Use.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        If any provision of the Policy or Terms of Use is deemed unlawful, void or unenforceable, that provision shall be deemed severable from and shall not affect the validity or enforceability of the remaining provisions of the Policy and Terms of Use.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        If you feel that this Site is not following this Policy or the Terms of Use, please promptly contact us at the above postal address with your concern.
                    </p>
                </div>
            </div>
        </div>
    `;
};

routes["sections"] = () => {
  const grapefruitImg = MENU_ITEMS[5]
    ? MENU_ITEMS[5].image
    : "https://olodev.azurewebsites.net/imagesmenu/P3-Super-Grapefruit.jpg";
  return `
        <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto">
            <header class="bg-white border-b border-gray-100 sticky top-0 z-50 shrink-0">
                <div class="px-3 py-4 flex items-center justify-between w-full max-w-[1080px] mx-auto">
                    <span class="text-lg font-black text-violet-600 uppercase tracking-tight">Component Sandbox</span>
                    <span class="text-xs bg-gray-100 text-gray-500 font-bold px-2.5 py-1 rounded-full">Retired Cards</span>
                </div>
            </header>

            <div class="p-6 max-w-[1080px] mx-auto w-full space-y-12 pb-24">
                <!-- P3 Super Grapefruit Card -->
                <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">P3 Super Grapefruit Featured Card</h3>
                    <div class="w-full">
                        <div class="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[300px] flex flex-col justify-end p-8">
                            <img src="${grapefruitImg}" class="absolute inset-0 w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-r from-orange-950/95 via-orange-900/60 to-transparent"></div>
                            
                            <div class="relative z-10 w-full max-w-md text-left">
                                <span class="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm">Featured</span>
                                <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 font-branding">P3 Super<br>Grapefruit</h2>
                                <p class="text-gray-200 font-medium mb-6 text-sm leading-relaxed max-w-xs">P3 • Refreshing jasmine green tea infused with fresh grapefruit pulp.</p>
                                <button onclick="selectItemAndNavigate(5)" class="bg-white hover:bg-orange-50 text-orange-600 px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 inline-block tracking-wide">Add to Order</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brown Sugar Boba Latte Card -->
                <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">P4 Brown Sugar Boba Latte Featured Card</h3>
                    <div class="w-full">
                        <div class="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[300px] flex flex-col justify-end p-8">
                            <img src="${assets.bobaHero}" class="absolute inset-0 w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                            
                            <div class="relative z-10 w-full max-w-md text-left">
                                <span class="bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm">Featured</span>
                                <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 font-branding">Brown Sugar<br>Boba Latte</h2>
                                <p class="text-gray-200 font-medium mb-6 text-sm leading-relaxed max-w-xs">P4 • Creamy, caramelized milk tea perfection.</p>
                                <button onclick="selectItemAndNavigate(6)" class="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 inline-block tracking-wide">Add to Order</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Interactive Combined Carousel Card -->
                <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Interactive Toggle Carousel Card (Combined)</h3>
                    <div class="w-full">
                        <div class="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[300px] flex flex-col justify-end p-8 transition-all duration-500">
                            ${(() => {
                              const activeSlide =
                                mockupState.sectionsCarouselIndex || 0;
                              if (activeSlide === 0) {
                                return `
                                        <!-- Grapefruit Slide -->
                                        <img src="${grapefruitImg}" class="absolute inset-0 w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]">
                                        <div class="absolute inset-0 bg-gradient-to-r from-orange-950/95 via-orange-900/60 to-transparent"></div>
                                        
                                        <div class="relative z-10 w-full max-w-md text-left pr-12 pb-6 animate-[fadeIn_0.5s_ease-out]">
                                            <span class="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm">Featured</span>
                                            <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 font-branding">P3 Super<br>Grapefruit</h2>
                                            <p class="text-gray-200 font-medium mb-6 text-sm leading-relaxed max-w-xs">P3 • Refreshing jasmine green tea infused with fresh grapefruit pulp.</p>
                                            <button onclick="selectItemAndNavigate(5)" class="bg-white hover:bg-orange-50 text-orange-600 px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 inline-block tracking-wide">Add to Order</button>
                                        </div>
                                    `;
                              } else {
                                return `
                                        <!-- Boba Latte Slide -->
                                        <img src="${assets.bobaHero}" class="absolute inset-0 w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]">
                                        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                                        
                                        <div class="relative z-10 w-full max-w-md text-left pr-12 pb-6 animate-[fadeIn_0.5s_ease-out]">
                                            <span class="bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm">Featured</span>
                                            <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 font-branding">Brown Sugar<br>Boba Latte</h2>
                                            <p class="text-gray-200 font-medium mb-6 text-sm leading-relaxed max-w-xs">P4 • Creamy, caramelized milk tea perfection.</p>
                                            <button onclick="selectItemAndNavigate(6)" class="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 inline-block tracking-wide">Add to Order</button>
                                        </div>
                                    `;
                              }
                            })()}
                            
                            <!-- Pagination Dots -->
                            <div class="absolute bottom-4 left-8 flex items-center gap-1.5 z-20">
                                <span onclick="updateMockupState('sectionsCarouselIndex', 0); navigateTo('sections');" class="cursor-pointer h-1.5 rounded-full transition-all duration-300 ${(mockupState.sectionsCarouselIndex || 0) === 0 ? "bg-orange-500 w-6" : "bg-white/40 w-3"}"></span>
                                <span onclick="updateMockupState('sectionsCarouselIndex', 1); navigateTo('sections');" class="cursor-pointer h-1.5 rounded-full transition-all duration-300 ${(mockupState.sectionsCarouselIndex || 0) === 1 ? "bg-violet-500 w-6" : "bg-white/40 w-3"}"></span>
                            </div>
                            
                            <!-- White Caret Toggle Bracket -->
                            <button onclick="updateMockupState('sectionsCarouselIndex', ${(mockupState.sectionsCarouselIndex || 0) === 0 ? 1 : 0}); navigateTo('sections');" class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/45 active:scale-90 border border-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all shadow-md z-30 cursor-pointer">
                                <i class="fa-solid fa-chevron-right text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Free Dessert Card with Background Depth & Cupcake Outline Overlay -->
                <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Free Dessert Promo Card (With Depth & Cupcake Overlay)</h3>
                    <div class="w-full">
                        <div class="bg-[#0b132b] bg-gradient-to-br from-indigo-950 via-[#0b132b] to-[#121c3b] rounded-2xl p-6 relative overflow-hidden text-white shadow-xl mt-2 group border border-white/5">
                            <!-- Cupcake SVG Overlay -->
                            <svg class="absolute -right-12 -bottom-16 w-72 h-72 text-white/5 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-700 pointer-events-none z-0" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24">
                                <!-- Cup wrapper -->
                                <path d="M7 14 L8.5 21 L15.5 21 L17 14 Z" />
                                <path d="M9.5 21 L8.5 14" />
                                <path d="M11 21 L10.5 14" />
                                <path d="M13 21 L13.5 14" />
                                <path d="M14.5 21 L15.5 14" />
                                <!-- Frosting bottom wave -->
                                <path d="M5.5 14 C 5.5 12.5, 7.5 11.5, 9.5 12.5 C 10.5 11.5, 13.5 11.5, 14.5 12.5 C 16.5 11.5, 18.5 12.5, 18.5 14 Z" />
                                <!-- Frosting middle layer -->
                                <path d="M7 12 C 7 9.5, 17 9.5, 17 12" />
                                <!-- Frosting top layer -->
                                <path d="M9.5 9.5 C 9.5 7.5, 14.5 7.5, 14.5 9.5" />
                                <!-- Cherry -->
                                <circle cx="12" cy="6" r="1.25" fill="currentColor" />
                                <path d="M12 4.75 Q 13.5 2.5 15.5 3.5" />
                            </svg>
                            
                            <!-- Font Awesome Tag Icon as a layered backdrop -->
                            <i class="fa-solid fa-tag absolute -right-3 -top-3 text-7xl text-white/[0.03] rotate-12 pointer-events-none"></i>
                            
                            <h3 class="font-black text-xl tracking-tight mb-2 relative z-10">Free Desert</h3>
                            <p class="text-xs text-blue-100/80 font-medium mb-5 relative z-10 leading-relaxed pr-6">On orders over $35. Valid for your next 3 orders.</p>
                            <div class="text-[11px] font-black text-violet-500 uppercase tracking-widest relative z-10">CODE: BITESFREE35</div>
                        </div>
                    </div>
                </div>
                
                <!-- Added retired Featured Items section -->
                <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-[fadeIn_0.5s_ease-out]">
                    <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 text-center">Original Featured Items Section</h3>
                    
                    <div class="max-w-[1080px] mx-auto text-center pt-4">
                        <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Featured Items</h2>
                        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Our handcrafted favorites</p>

                        <div class="grid grid-cols-4 gap-6 justify-items-center w-full">
                            <!-- Card 1 -->
                            <div class="w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba1}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">New Item</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M7 Crème Brûlée Boba Milk Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 2 -->
                            <div class="w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba2}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Popular</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P4 Brown Sugar Boba Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 3 -->
                            <div class="w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba3}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Specialty</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M8 Taro Boba Purée Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 4 -->
                            <div class="w-full bg-white rounded-3xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg active:scale-95" onclick="navigateTo('customize')">
                                <div class="p-3 pb-0 rounded-t-3xl overflow-hidden w-full"><img src="${assets.boba4}" class="w-full aspect-video object-cover object-top rounded-2xl shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Fruit Tea</div>
                                    <div class="text-base font-black text-[#1A1A1A] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P1 Super Fruit Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.95</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

routes["accessibility"] = () => {
  const isDesktop = currentViewport === "desktop";
  return `
        <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto pb-24">
            <!-- Subtle top-aligned brand gradient overlay fading down -->
            <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>

            <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black justify-center">
                <div class="w-full max-w-[1080px] flex items-center relative z-10">
                    <button onclick="window.history.back()" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors">
                        <i class="fa-solid fa-chevron-left text-gray-600"></i>
                    </button>
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Web Accessibility</span>
                    <div class="w-10"></div>
                </div>
            </header>

            <div class="p-6 max-w-[800px] mx-auto w-full space-y-6 mt-6 relative z-10">
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Accessibility Statement</h1>
                    <p class="text-sm text-gray-500 font-bold uppercase tracking-widest border-b border-gray-100 pb-2">Commitment to Accessibility</p>
                    
                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        We are committed to facilitating the accessibility and usability of our website for all customers, including individuals with disabilities. We strive to provide a clean and seamless web experience that conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                    </p>

                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        Please check back soon for our full, detailed accessibility policy and documentation. If you require assistance or wish to report an issue, please contact us.
                    </p>

                    <p class="text-sm text-gray-500 font-bold uppercase tracking-widest border-b border-gray-100 pb-2 mt-6">Disclaimer</p>
                    <p class="text-sm text-gray-600 font-medium leading-relaxed">
                        Please be aware that our efforts to maintain accessibility and usability are ongoing. While we strive to make the website as accessible as possible some issues can be encountered by different assistive technology as the range of assistive technology is wide and varied.
                    </p>
                </div>
            </div>
        </div>
    `;
};

function renderPage() {
  const viewport = document.getElementById("app-viewport");
  if (!viewport) return;

  let loadingOverlayHtml = "";
  if (mockupState.isLoading) {
    loadingOverlayHtml = `
            <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 backdrop-blur-[1px] transition-all">
                <div class="flex flex-col items-center gap-3">
                    <div class="w-10 h-10 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
                    <span class="text-xs font-black text-violet-600 uppercase tracking-widest animate-pulse">Loading Menu...</span>
                </div>
            </div>
        `;
  }

  let contentHtml = "";
  try {
    contentHtml = routes[currentPage]
      ? routes[currentPage]()
      : `<div class="p-10 text-center uppercase font-black">404 - Page Not Found</div>`;
  } catch (err) {
    console.error("Page Render Error:", err);
    contentHtml = `<div class="p-10 text-left w-full h-full bg-white text-red-600 font-mono text-xs break-words whitespace-pre-wrap overflow-auto z-[99999] relative"><b>Render Error:</b> ${err.message}\n\n${err.stack}</div>`;
  }

  const isRestaurantPage = ![
    "landing",
    "home",
    "sign-in",
    "dashboard",
    "privacy",
    "forgot-password",
    "rewards",
  ].includes(currentPage);
  const showDesktopNav =
    isRestaurantPage || currentPage === "privacy" || currentPage === "rewards";
  if (currentViewport === "desktop" && showDesktopNav) {
    // Strip the mobile header before injecting the desktop nav
    contentHtml = contentHtml.replace(
      /<header\b[^>]*>([\s\S]*?)<\/header>/i,
      "",
    );

    const desktopNavHtml = `
            <nav class="hidden lg:flex md:flex justify-between items-center px-4 lg:px-8 h-[70px] bg-white sticky top-0 z-[9999] border-b border-gray-100 shadow-sm w-full shrink-0">
                <div class="flex items-center gap-4 lg:gap-8">
                    <div class="w-16 h-12 lg:w-20 lg:h-14 flex items-center justify-center cursor-pointer shrink-0" onclick="navigateTo('restaurant-home')">
                        <img src="images/nav-logo.png" class="w-full h-full object-contain">
                    </div>
                    <div class="flex items-center gap-3 lg:gap-6 text-[16px] lg:text-[1.3rem] font-black uppercase tracking-tight text-[#1f0b35] ml-2">
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap" onclick="navigateTo('restaurant-home')">Home</span>
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap" onclick="navigateTo('menu')">Menu</span>
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap" onclick="navigateTo('locations')">Order</span>
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap" onclick="navigateTo('account')">Rewards</span>
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap flex items-center gap-1" onclick="toggleMenu(event, 'all-pages-dropdown')">
                            Pages <i class="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                        </span>
                    </div>
                </div>
                <div class="flex items-center gap-4 lg:gap-8 text-[14px] lg:text-[16px] font-black uppercase tracking-tight text-[#1f0b35]">
                    <div class="flex items-center gap-2 cursor-pointer hover:text-violet-600 transition-colors whitespace-nowrap font-black uppercase tracking-tight text-[14px] lg:text-[16px] text-[#1f0b35]" onclick="navigateTo('locations')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 lg:w-7 lg:h-7"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        <span class="nav-link-animated">Locations</span>
                    </div>
                    ${
                      mockupState.isLoggedIn
                        ? `
                        <div class="relative">
                            <button class="flex items-center gap-2 cursor-pointer hover:text-violet-600 transition-colors whitespace-nowrap font-black uppercase tracking-tight text-[14px] lg:text-[16px] text-[#1f0b35]" onclick="toggleMenu(event, 'user-profile-dropdown')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 lg:w-7 lg:h-7"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                <span class="nav-link-animated">${mockupState.userName}</span>
                                <i class="fa-solid fa-chevron-down text-[10px] ml-1 text-gray-400"></i>
                            </button>
                            <div id="user-profile-dropdown" class="dropdown-menu">
                                <div class="dropdown-column-title">My Profile</div>
                                <div class="dropdown-item" onclick="navigateTo('account')">Account Details</div>
                                <div class="dropdown-item" onclick="navigateTo('account')">Rewards</div>
                                <div class="h-px bg-violet-100/50 my-2"></div>
                                <div class="dropdown-item text-red-500 hover:text-red-600" onclick="signOutUser()">Sign Out</div>
                            </div>
                        </div>
                    `
                        : `
                        <div class="flex items-center gap-2 cursor-pointer hover:text-violet-600 transition-colors whitespace-nowrap" onclick="navigateTo('sign-in')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 lg:w-7 lg:h-7"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            <span class="nav-link-animated">Sign In / Join</span>
                        </div>
                    `
                    }
                    <div class="cursor-pointer relative hover:text-violet-600 transition-colors shrink-0 w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center -mr-2" onclick="navigateTo('cart')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 lg:w-7 lg:h-7"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </div>
                </div>
                
                <!-- Centered pages dropdown -->
                <div id="all-pages-dropdown" class="dropdown-menu hidden normal-case">
                    <div class="flex flex-col gap-2">
                        <div class="dropdown-column-title">Core Pages</div>
                        <a href="index.html" class="dropdown-item lowercase">index.html</a>
                        <a href="menu.html" class="dropdown-item lowercase">menu.html</a>
                        <a href="menu-alt.html" class="dropdown-item lowercase">menu-alt.html</a>
                        <a href="locations.html" class="dropdown-item lowercase">locations.html</a>
                        <a href="location-favorites.html" class="dropdown-item lowercase">location-favorites.html</a>
                        <a href="cart.html" class="dropdown-item lowercase">cart.html</a>
                        <a href="checkout.html" class="dropdown-item lowercase">checkout.html</a>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="dropdown-column-title">Ordering & Account</div>
                        <a href="order-customize.html" class="dropdown-item lowercase">order-customize.html</a>
                        <a href="order-confirm.html" class="dropdown-item lowercase">order-confirm.html</a>
                        <a href="order-status.html" class="dropdown-item lowercase">order-status.html</a>
                        <a href="order-details.html" class="dropdown-item lowercase">order-details.html</a>
                        <a href="order-details-alt.html" class="dropdown-item lowercase">order-details-alt.html</a>
                        <a href="track-order.html" class="dropdown-item lowercase">track-order.html</a>
                        <a href="profile.html" class="dropdown-item lowercase">profile.html</a>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="dropdown-column-title">Other Pages</div>
                        <a href="registration.html" class="dropdown-item lowercase">registration.html</a>
                        <a href="sign-in.html" class="dropdown-item lowercase">sign-in.html</a>
                        <a href="menu-favorites.html" class="dropdown-item lowercase">menu-favorites.html</a>
                        <a href="menu-scan.html" class="dropdown-item lowercase">menu-scan.html</a>
                        <a href="directions.html" class="dropdown-item lowercase">directions.html</a>
                        <a href="privacy.html" class="dropdown-item lowercase">privacy.html</a>
                        <a href="accessibility.html" class="dropdown-item lowercase">accessibility.html</a>
                        <a href="sections.html" class="dropdown-item lowercase">sections.html* (demos)</a>
                    </div>
                </div>
            </nav>
        `;
    contentHtml = desktopNavHtml + contentHtml;
  }

  const noFooterPages = [];
  if (!noFooterPages.includes(currentPage) && currentViewport === "desktop") {
    const showLinks = currentPage === "sections";
    const globalFooter = `
            <div class="hidden lg:block w-full bg-white shrink-0">
                <div class="max-w-[1080px] mx-auto px-6 border-t border-gray-200 ${showLinks ? "mt-16 pt-10" : "mt-6 pt-6"}">
                    ${
                      showLinks
                        ? `
                    <!-- Logo Section -->
                    <div class="mb-6 flex flex-col items-center justify-center">
                        <img src="images/nav-logo.png" alt="i-Tea" class="h-14 w-auto object-contain">
                    </div>
                    
                    <!-- Links Section -->
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
                    `
                        : `
                    <!-- Logo Section (Moved Down) -->
                    <div class="mb-4 flex flex-col items-center justify-center">
                        <img src="images/nav-logo.png" alt="i-Tea" class="h-10 w-auto object-contain">
                    </div>
                    `
                    }
                    <div class="flex flex-col-reverse md:flex-row justify-between items-center py-6 border-t border-gray-100 text-[11px] text-gray-400 font-medium gap-4">
                        <p>© 2026 iTea Online Ordering. All rights reserved. | <a href="privacy.html" class="hover:text-violet-600 transition-colors">Privacy Policy</a> | <a href="accessibility.html" class="hover:text-violet-600 transition-colors">Web Accessibility</a> <span class="ml-2 opacity-50">${VERSION_STR}</span></p>
                        <div class="flex gap-5 text-gray-400 items-center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="hover:text-violet-600 transition-colors">
                                <i class="fa-brands fa-facebook text-lg"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-violet-600 transition-colors">
                                <i class="fa-brands fa-instagram text-lg"></i>
                            </a>
                            <a href="mailto:support@farebites.com" class="hover:text-violet-600 transition-colors">
                                <i class="fa-regular fa-envelope text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
    contentHtml += globalFooter;
  }

  // Inject hamburger drawer for all restaurant pages
  const nonRestaurantPages = [
    "landing",
    "home",
    "sign-in",
    "dashboard",
    "privacy",
    "forgot-password",
    "rewards",
  ];
  if (!nonRestaurantPages.includes(currentPage) && mockupState.hamburgerOpen) {
    contentHtml += hamburgerDrawerHTML();
  }

  const scrollToTopBtnHtml = `
      <!-- Global Scroll to Top Button -->
      <div class="fixed bottom-8 right-8 z-[90] pb-bottom-safe pointer-events-none">
          <button id="scroll-to-top-btn" 
                  onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
                  class="w-14 h-14 bg-violet-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-violet-700 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 opacity-0 pointer-events-none">
              <i class="fa-solid fa-arrow-up text-xl pointer-events-none"></i>
          </button>
      </div>
  `;
  contentHtml += scrollToTopBtnHtml;

  viewport.innerHTML = contentHtml + loadingOverlayHtml;
  let scrolledToHash = false;
  if (window.location.hash) {
    const hashId = window.location.hash.slice(1);
    const element = document.getElementById(hashId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
      scrolledToHash = true;
    }
  }
  if (!scrolledToHash && !isUpdatingMockupState) {
    window.scrollTo(0, 0);
  }
  persistAllState();
  document.title = `FareBites – ${PAGE_LABELS[currentPage] || currentPage}`;

  if (currentPage === "locations" || currentPage === "locations-alt") {
    initLocationsMap();
  }

  // Re-focus menu search input after render (keeps cursor active while typing)
  if (
    (currentPage === "menu" || currentPage === "menu-alt") &&
    mockupState.menuSearchOpen
  ) {
    const searchInput = document.getElementById("menu-search-input");
    if (searchInput) {
      searchInput.focus();
      const len = searchInput.value.length;
      searchInput.setSelectionRange(len, len);
    }
  }

  // Attach carousel scroll listener if on home page
  if (currentPage === "restaurant-home") {
    const carousel = document.getElementById("home-carousel");
    if (carousel) {
      carousel.addEventListener("scroll", () => {
        const index = Math.round(
          carousel.scrollLeft / (carousel.offsetWidth + 16),
        );
        for (let i = 0; i < 2; i++) {
          const dot = document.getElementById(`carousel-dot-${i}`);
          if (dot) {
            if (i === index) {
              dot.classList.remove("bg-violet-200");
              dot.classList.add("bg-violet-600");
            } else {
              dot.classList.remove("bg-violet-600");
              dot.classList.add("bg-violet-200");
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
  const display = document.getElementById("bag-count-display");
  if (display) display.innerText = mockupState.bagQuantity;

  const contBtn = document.getElementById("bag-continue-btn");
  if (contBtn) {
    if (mockupState.bagQuantity > 0) {
      contBtn.innerText = `Continue with ${mockupState.bagQuantity} bag(s)`;
      contBtn.setAttribute(
        "onclick",
        "mockupState.modalOpen = null; navigateTo('checkout');",
      );
    } else {
      contBtn.innerText = "I don't need bags";
      contBtn.setAttribute(
        "onclick",
        "mockupState.modalOpen = null; mockupState.noBagsSelected = true; navigateTo('checkout');",
      );
    }
  }
}

// =============================================================================
// SHARED MODIFIER RENDERING FUNCTIONS (used by both 'customize' and 'customize-alt')
// =============================================================================

/**
 * Section header with optional required badge and icon.
 */
function _modSectionHeader(label, required, icon, isFallback = false) {
  const textColor = isFallback ? "text-pink-500" : "text-violet-600";
  return `
        <div class="flex justify-between items-center pb-2 border-b border-gray-100 mb-3">
            <span class="text-base font-black ${textColor} uppercase tracking-widest flex items-center gap-1.5">
                ${label}
            </span>
            ${required ? '<span class="text-[9px] font-bold text-red-400 uppercase tracking-widest">Required</span>' : ""}
        </div>`;
}

/**
 * Horizontal scrollable pill row for single-select groups (sugar, ice, size, temp).
 * Selected pill = solid violet; unselected = outlined.
 */
function _renderPillGroup(group, sels) {
  const gid = group.menuSubItemGroupId;
  const prices = (group.groupPrices || [])
    .slice()
    .sort((a, b) => (a.position || 0) - (b.position || 0));
  const selectedId = Object.keys(sels[gid]?.items || {})[0];
  const pills = prices
    .map((p) => {
      const sub = p.menuSubItem || {};
      const name = sub.name || "";
      const isSelected = String(p.menuSubItemId) === String(selectedId);
      const safeName = name.replace(/'/g, "\\'");
      const priceTag = p.price > 0 ? ` +$${p.price.toFixed(2)}` : "";
      return `<button
            onclick="window._selectSubItem(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${p.price || 0}, true)"
            class="shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide transition-all active:scale-95 whitespace-nowrap
                   ${
                     isSelected
                       ? "bg-violet-600 text-white shadow-[0_4px_12px_rgba(124,58,237,0.35)]"
                       : "bg-white border border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600"
                   }">
            ${name}${priceTag}
        </button>`;
    })
    .join("");
  return `<div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">${pills}</div>`;
}

/**
 * Checkbox + optional stepper rows for multi-select groups (toppings, extras).
 */
function _renderStepperGroup(group, sels) {
  const gid = group.menuSubItemGroupId;
  const prices = (group.groupPrices || [])
    .slice()
    .sort((a, b) => (a.position || 0) - (b.position || 0));
  const maxSel = group.maxSelect || 99;
  return prices
    .map((p) => {
      const sub = p.menuSubItem || {};
      const name = sub.name || "";
      const price = p.price || 0;
      const fmtPrice = price === 0 ? "Free" : `+$${price.toFixed(2)}`;
      const qty = sels[gid]?.items?.[p.menuSubItemId]?.quantity || 0;
      const safeName = name.replace(/'/g, "\\'");
      const canAdd = qty < maxSel;
      return `
        <div class="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
            <div class="flex flex-col min-w-0 pr-3">
                <span class="text-sm font-black text-gray-800 uppercase tracking-tight leading-tight">${name}</span>
                <span class="text-[11px] font-bold ${price === 0 ? "text-emerald-500" : "text-gray-400"}">${fmtPrice}</span>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button onclick="window._adjustSubItemQty(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, -1)"
                    class="w-7 h-7 rounded-full border transition-all active:scale-90 flex items-center justify-center text-xs
                           ${qty > 0 ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-red-50 hover:border-red-300 hover:text-red-500" : "border-gray-100 bg-gray-50 text-gray-300 cursor-default"}">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class="font-black text-gray-900 w-5 text-center text-sm">${qty}</span>
                <button onclick="window._adjustSubItemQty(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, 1)"
                    class="w-7 h-7 rounded-full border transition-all active:scale-90 flex items-center justify-center text-xs
                           ${canAdd ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600" : "border-gray-100 bg-gray-50 text-gray-300 cursor-default"}">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>`;
    })
    .join("");
}

/**
 * Four-button modify-type row: None | Less | Regular | Extra.
 * Used for included ingredients that can be adjusted (milk, syrup, etc.).
 * NOTE: modifyType string values ('add','extra','less','no') — confirm with API developer if order fails.
 */
function _renderModifyTypeSection(modifyPrices, modSels) {
  if (!modifyPrices || modifyPrices.length === 0) return "";
  const rows = modifyPrices
    .map((mp) => {
      const sub = mp.menuSubItem || {};
      const name = sub.name || `Item ${mp.menuSubItemId}`;
      const currentType = modSels[mp.menuSubItemId]?.modifyType || "add"; // Default = Regular (add)
      const options = [
        { key: "no", label: "None", price: mp.noPrice || 0 },
        { key: "less", label: "Less", price: mp.lessPrice || 0 },
        { key: "add", label: "Regular", price: mp.addPrice || 0 },
        { key: "extra", label: "Extra", price: mp.extraPrice || 0 },
      ];
      const btns = options
        .map((opt) => {
          const isActive = currentType === opt.key;
          const priceTag =
            opt.price > 0
              ? ` +$${opt.price.toFixed(2)}`
              : opt.price < 0
                ? ` -$${Math.abs(opt.price).toFixed(2)}`
                : "";
          return `<button
                onclick="window._selectModifyType(${mp.menuSubItemId}, '${opt.key}', ${opt.price})"
                class="flex-1 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wide transition-all active:scale-95
                       ${
                         isActive
                           ? "bg-white text-violet-600 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                           : "text-gray-500 hover:text-gray-900"
                       }">
                ${opt.label}${priceTag}
            </button>`;
        })
        .join("");
      return `
        <div class="flex flex-col gap-2">
            <div class="flex justify-between items-baseline">
                <span class="text-sm font-black text-gray-800 uppercase tracking-tight">${name}</span>
                <span class="text-[10px] font-bold text-gray-400 uppercase">Included</span>
            </div>
            <div class="flex bg-gray-100 p-1 rounded-full w-full">${btns}</div>
        </div>`;
    })
    .join('<div class="border-b border-gray-50 my-3"></div>');
  return rows;
}

/**
 * Stepper rows for flat ungrouped sub-items (menuSubItems).
 */
function _renderFlatSubItemSection(subItems, sels) {
  if (!subItems || subItems.length === 0) return "";
  // Use a synthetic group id based on a fixed key so steppers work
  const gid = "flat";
  if (!sels[gid]) sels[gid] = { items: {} };
  return subItems
    .map((sub) => {
      const name = sub.name || "";
      const price = sub.price || 0;
      const fmtPrice = price === 0 ? "Free" : `+$${price.toFixed(2)}`;
      const qty = sels[gid]?.items?.[sub.menuSubItemId]?.quantity || 0;
      const safeName = name.replace(/'/g, "\\'");
      return `
        <div class="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
            <div class="flex flex-col min-w-0 pr-3">
                <span class="text-sm font-black text-gray-800 uppercase tracking-tight leading-tight">${name}</span>
                <span class="text-[11px] font-bold ${price === 0 ? "text-emerald-500" : "text-gray-400"}">${fmtPrice}</span>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button onclick="window._adjustSubItemQty('${gid}', ${sub.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, -1)"
                    class="w-7 h-7 rounded-full border transition-all active:scale-90 flex items-center justify-center text-xs
                           ${qty > 0 ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-red-50 hover:border-red-300 hover:text-red-500" : "border-gray-100 bg-gray-50 text-gray-300 cursor-default"}">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class="font-black text-gray-900 w-5 text-center text-sm">${qty}</span>
                <button onclick="window._adjustSubItemQty('${gid}', ${sub.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, 1)"
                    class="w-7 h-7 rounded-full border transition-all active:scale-90 flex items-center justify-center text-xs
                           border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>`;
    })
    .join("");
}

/**
 * SubMenuChoices: size/base pickers — renders as pill groups.
 * Each choice has its own sub-item list, displayed as a pill selector.
 */
function _renderSubMenuChoiceSection(choices, sels) {
  if (!choices || choices.length === 0) return "";
  return choices
    .map((choice) => {
      // Treat subMenuChoiceId as a group id so pills work with existing _selectSubItem
      const gid = `choice_${choice.subMenuChoiceId}`;
      if (!sels[gid]) sels[gid] = { items: {} };
      const selectedId = Object.keys(sels[gid]?.items || {})[0];
      const pills = (choice.subItems || [])
        .map((sub) => {
          const isSelected = String(sub.menuSubItemId) === String(selectedId);
          const name = sub.name || "";
          const price = sub.price || 0;
          const safeName = name.replace(/'/g, "\\'");
          const priceTag = price > 0 ? ` +$${price.toFixed(2)}` : "";
          return `<button
                onclick="window._selectSubItem('${gid}', ${sub.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, true)"
                class="shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide transition-all active:scale-95 whitespace-nowrap
                       ${
                         isSelected
                           ? "bg-violet-600 text-white shadow-[0_4px_12px_rgba(124,58,237,0.35)]"
                           : "bg-white border border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600"
                       }">
                ${name}${priceTag}
            </button>`;
        })
        .join("");
      const isRequired = (choice.minSelect || 0) >= 1;
      return `
        <div>
            ${_modSectionHeader(choice.displayName || choice.name || "Choose", isRequired, "📋")}
            <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">${pills}</div>
        </div>`;
    })
    .join("");
}

/**
 * Master orchestrator: renders all modifier sections in the correct order.
 * Order: SubMenuChoices (size/base) → Radio groups (sugar/ice) → Stepper groups (toppings) → ModifyPrice → FlatSubItems
 */
function renderAllModifierSections(detail, sels, modSels, colLayout) {
  const hasAny =
    detail &&
    ((detail.subMenuChoices && detail.subMenuChoices.length > 0) ||
      (detail.menuSubItemGroups && detail.menuSubItemGroups.length > 0) ||
      (detail.menuSubItemModifyPrices &&
        detail.menuSubItemModifyPrices.length > 0) ||
      (detail.menuSubItems && detail.menuSubItems.length > 0));

  if (!hasAny) {
    return `<div class="text-center py-8 text-gray-400 text-sm font-bold uppercase tracking-widest flex flex-col items-center gap-3">
            ${
              mockupState.isLoading
                ? '<i class="fa-solid fa-spinner fa-spin text-violet-400 text-2xl mb-2"></i><span>Loading customizations…</span>'
                : '<i class="fa-solid fa-sliders text-gray-300 text-2xl mb-2"></i><span>No customization options available</span>'
            }
        </div>`;
  }

  let html = "";

  if (detail._isFallback) {
    html += `<div class="bg-pink-50 border border-pink-200 text-pink-500 text-[11px] font-black uppercase tracking-widest p-3 rounded-xl mb-4 text-center shadow-sm">
            ⚠️ Generic Options Displayed
        </div>`;
  }

  // 1. SubMenuChoices (size / base drink) — always first
  const choiceHtml = _renderSubMenuChoiceSection(
    detail?.subMenuChoices || [],
    sels,
  );
  if (choiceHtml) html += choiceHtml;

  // 2. MenuSubItemGroups — split into radio (single-select) and stepper (multi-select)
  const groups = (detail?.menuSubItemGroups || []).filter(
    (g) => g.isActive !== false,
  );
  const radioGroups = groups.filter((g) => (g.maxSelect || 1) === 1);
  const stepperGroups = groups.filter((g) => (g.maxSelect || 1) > 1);

  // Radio groups (sugar level, ice level, temperature, etc.)
  for (const g of radioGroups) {
    const isRequired = (g.minSelect || 0) >= 1;
    const icon = _groupIcon(g.displayName || g.groupName || "");
    const hasValidation =
      isRequired &&
      Object.keys(sels[g.menuSubItemGroupId]?.items || {}).length === 0;
    html += `<div id="mod-group-${g.menuSubItemGroupId}" class="${hasValidation ? "validation-error" : ""}">
            ${_modSectionHeader(g.displayName || g.groupName || "Options", isRequired, icon, detail._isFallback)}
            ${hasValidation ? '<p class="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">Please select one</p>' : ""}
            ${_renderPillGroup(g, sels)}
        </div>`;
  }

  // Stepper groups (toppings, extras) — desktop shows 2 columns if there are multiple groups
  if (stepperGroups.length > 0) {
    const isMultiCol = colLayout === "grid" && stepperGroups.length > 1;
    html += isMultiCol ? '<div class="grid grid-cols-2 gap-8">' : "";
    for (const g of stepperGroups) {
      const icon = _groupIcon(g.displayName || g.groupName || "");
      html += `<div id="mod-group-${g.menuSubItemGroupId}">
                ${_modSectionHeader(g.displayName || g.groupName || "Options", false, icon, detail._isFallback)}
                <div>${_renderStepperGroup(g, sels)}</div>
            </div>`;
    }
    html += isMultiCol ? "</div>" : "";
  }

  // 3. ModifyPrice items (None/Less/Regular/Extra for included ingredients)
  const modifyPrices = (detail?.menuSubItemModifyPrices || []).filter(
    (m) => m.isActive !== false,
  );
  if (modifyPrices.length > 0) {
    html += `<div>
            ${_modSectionHeader("Included Options", false, "⚙️")}
            <div class="space-y-4">${_renderModifyTypeSection(modifyPrices, modSels)}</div>
        </div>`;
  }

  // 4. Flat sub-items (ungrouped add-ons) — last
  const activeSubItems = (detail?.menuSubItems || []).filter(
    (s) => s.isActive !== false,
  );
  if (activeSubItems.length > 0) {
    html += `<div>
            ${_modSectionHeader("Add-Ons", false, "✨")}
            <div>${_renderFlatSubItemSection(activeSubItems, sels)}</div>
        </div>`;
  }

  return html;
}

/**
 * Returns a decorative icon for common modifier group names.
 */
function _groupIcon(name) {
  const n = name.toLowerCase();
  const svgBase = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">`;

  // Included / Options
  if (n.includes("include") || n.includes("option"))
    return (
      svgBase +
      `<path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="M3 6l1 1 2-2"/><path d="M3 12l1 1 2-2"/><path d="M3 18l1 1 2-2"/></svg>`
    );

  // Sugar / Sweet (Spoon)
  if (n.includes("sugar") || n.includes("sweet"))
    return (
      svgBase +
      `<path d="m16 13 5.223 5.222a2.25 2.25 0 0 1-3.182 3.182l-6.89-6.892"/><path d="M11 12A6 6 0 1 0 2.5 3.5 6 6 0 0 0 11 12Z"/></svg>`
    );

  // Ice (3D Cube)
  if (n.includes("ice"))
    return (
      svgBase +
      `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7l8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`
    );

  // Cup / Size (To-go Cup)
  if (n.includes("size") || n.includes("cup"))
    return (
      svgBase +
      `<path d="m6 7 1.5 14h9L18 7"/><path d="M4 7h16"/><path d="M14 3 13 7"/></svg>`
    );

  // Temp (Thermometer)
  if (n.includes("temp") || n.includes("hot") || n.includes("cold"))
    return (
      svgBase +
      `<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M11.5 7v6"/></svg>`
    );

  // Topping / Boba / Extra (Plus Circle)
  if (
    n.includes("topping") ||
    n.includes("boba") ||
    n.includes("extra") ||
    n.includes("add")
  )
    return (
      svgBase +
      `<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`
    );

  // Milk / Cream (Milk Bottle)
  if (n.includes("milk") || n.includes("cream"))
    return (
      svgBase +
      `<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/><path d="M6 10l-2 10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l-2-10"/></svg>`
    );

  // Flavor (Leaf)
  if (n.includes("flavor"))
    return (
      svgBase +
      `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`
    );

  // Default fallback icon: Sliders
  return (
    svgBase +
    `<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>`
  );
}

function getDefaultCustomizeGroups() {
  return [
    {
      menuSubItemGroupId: 9001,
      groupName: "Sweetness Level",
      displayName: "Sweetness Level",
      minSelect: 1,
      maxSelect: 1,
      groupPrices: [
        {
          menuSubItemId: 8001,
          price: 0,
          isDefault: true,
          menuSubItem: { name: "Regular Sweet (100%)", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8002,
          price: 0,
          isDefault: false,
          menuSubItem: { name: "Less Sweet (70%)", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8003,
          price: 0,
          isDefault: false,
          menuSubItem: { name: "Half Sweet (50%)", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8004,
          price: 0,
          isDefault: false,
          menuSubItem: { name: "Light Sweet (30%)", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8005,
          price: 0,
          isDefault: false,
          menuSubItem: { name: "Unsweetened (0%)", itemTypeId: 2 },
        },
      ],
    },
    {
      menuSubItemGroupId: 9002,
      groupName: "Ice Level",
      displayName: "Ice Level",
      minSelect: 1,
      maxSelect: 1,
      groupPrices: [
        {
          menuSubItemId: 8101,
          price: 0,
          isDefault: true,
          menuSubItem: { name: "Regular Ice", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8102,
          price: 0,
          isDefault: false,
          menuSubItem: { name: "Less Ice", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8103,
          price: 0,
          isDefault: false,
          menuSubItem: { name: "No Ice", itemTypeId: 2 },
        },
      ],
    },
    {
      menuSubItemGroupId: 9003,
      groupName: "Add Toppings",
      displayName: "Add Toppings",
      minSelect: 0,
      maxSelect: 5,
      groupPrices: [
        {
          menuSubItemId: 8201,
          price: 0.75,
          isDefault: false,
          menuSubItem: { name: "Boba", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8202,
          price: 0.75,
          isDefault: false,
          menuSubItem: { name: "Pudding", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8203,
          price: 0.75,
          isDefault: false,
          menuSubItem: { name: "Grass Jelly", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8204,
          price: 0.75,
          isDefault: false,
          menuSubItem: { name: "Red Bean", itemTypeId: 2 },
        },
        {
          menuSubItemId: 8205,
          price: 0.75,
          isDefault: false,
          menuSubItem: { name: "Aloe Vera", itemTypeId: 2 },
        },
      ],
    },
  ];
}

function isDrinkCategory(categoryName) {
  if (!categoryName) return true; // Assume drink if category is unknown
  const cat = categoryName.toLowerCase();
  if (
    cat.includes("food") ||
    cat.includes("snack") ||
    cat.includes("bento") ||
    cat.includes("onigiri") ||
    cat.includes("ramen")
  ) {
    return false;
  }
  return true;
}

function selectItemAndNavigate(index) {
  const item = getActiveMenuItems()[index];
  mockupState.selectedItem = item;
  // Reset quantity and customization defaults for new item
  mockupState.itemQuantity = 1;
  mockupState.sugarLevel = "50%";
  mockupState.toppingQty = {};
  mockupState.cupQty = {};
  mockupState.freeToppings = [];
  mockupState.iceLevel = "ICE";
  // Reset selected sub-items and modify-types for new customization
  mockupState._customizeSubItems = {};
  mockupState._customizeModifyTypes = {};
  mockupState.selectedItemDetail = null;
  mockupState.lastMenuPage = currentPage;
  persistAllState();

  const applyDefaultSelections = (detail) => {
    if (detail.menuSubItemGroups) {
      const selections = {};
      for (const g of detail.menuSubItemGroups) {
        const groupId = g.menuSubItemGroupId;
        const maxSel = g.maxSelect || 1;
        selections[groupId] = {
          groupName: g.displayName || g.groupName || "",
          maxSelect: maxSel,
          minSelect: g.minSelect || 0,
          items: {},
        };
        for (const p of g.groupPrices || []) {
          if (p.isDefault) {
            selections[groupId].items[p.menuSubItemId] = {
              menuSubItemId: p.menuSubItemId,
              itemTypeId: (p.menuSubItem || {}).itemTypeId || 2,
              itemGroupPriceId: parseInt(groupId),
              quantity: 1,
              name: (p.menuSubItem || {}).name || "",
              price: p.price || 0,
            };
          }
        }
      }
      mockupState._customizeSubItems = selections;
    }
  };

  // Fetch full item detail (with sub-item groups) from API
  if (item.id && mockupState.selectedLocationId && window.ApiService) {
    mockupState.isLoading = true;
    renderPage();
    window.ApiService.getMenuItemDetail(mockupState.selectedLocationId, item.id)
      .then((detail) => {
        // If the detail is empty or has no customization groups, use default mock groups
        if (
          !detail ||
          !detail.menuSubItemGroups ||
          detail.menuSubItemGroups.length === 0
        ) {
          const isDrink = isDrinkCategory(item.category);
          detail = {
            menuItemId: item.id,
            name: item.name,
            price: item.price,
            menuSubItemGroups: isDrink ? getDefaultCustomizeGroups() : [],
            _isFallback: isDrink,
          };
        } else {
          // Remove inactive modifiers so they aren't displayed or ordered
          detail.menuSubItemGroups.forEach((g) => {
            if (g.groupPrices) {
              g.groupPrices = g.groupPrices.filter(
                (p) => !p.menuSubItem || p.menuSubItem.isActive !== false,
              );
            }
          });
        }
        mockupState.selectedItemDetail = detail;

        // Extract restaurantId from sub-item data
        if (!mockupState.selectedRestaurantId && detail.menuSubItemGroups) {
          for (const g of detail.menuSubItemGroups) {
            for (const p of g.groupPrices || []) {
              const sub = p.menuSubItem || {};
              if (sub.restaurantId) {
                mockupState.selectedRestaurantId = sub.restaurantId;
                break;
              }
            }
            if (mockupState.selectedRestaurantId) break;
          }
        }

        applyDefaultSelections(detail);
        persistAllState();
      })
      .catch((err) => {
        console.error("Failed to fetch item detail, using fallback:", err);
        const isDrink = isDrinkCategory(item.category);
        const fallbackDetail = {
          menuItemId: item.id,
          name: item.name,
          price: item.price,
          menuSubItemGroups: isDrink ? getDefaultCustomizeGroups() : [],
          _isFallback: isDrink,
        };
        mockupState.selectedItemDetail = fallbackDetail;
        applyDefaultSelections(fallbackDetail);
        persistAllState();
      })
      .finally(() => {
        mockupState.isLoading = false;
        renderPage();
        navigateTo("customize");
      });
  } else {
    const isDrink = isDrinkCategory(item.category);
    const fallbackDetail = {
      menuItemId: item.id || 0,
      name: item.name,
      price: item.price,
      menuSubItemGroups: isDrink ? getDefaultCustomizeGroups() : [],
      _isFallback: isDrink,
    };
    mockupState.selectedItemDetail = fallbackDetail;
    applyDefaultSelections(fallbackDetail);
    mockupState.isLoading = false;
    navigateTo("customize");
  }
}

function selectFavoriteAndNavigate(name) {
  const list = getActiveMenuItems();
  const idx = list.findIndex((item) => item.name === name);
  if (idx !== -1) {
    selectItemAndNavigate(idx);
  } else {
    navigateTo("menu");
  }
}

// --- Customize page helpers (global, called from inline onclick) ---

// Single-select: replaces entire group selection with one item
window._selectSubItem = function (
  groupId,
  subItemId,
  itemTypeId,
  name,
  price,
  isSingleSelect,
) {
  if (!mockupState._customizeSubItems) mockupState._customizeSubItems = {};
  if (!mockupState._customizeSubItems[groupId]) {
    mockupState._customizeSubItems[groupId] = { items: {} };
  }
  if (isSingleSelect) {
    // Clear group and set only this item
    mockupState._customizeSubItems[groupId].items = {};
  }
  mockupState._customizeSubItems[groupId].items[subItemId] = {
    menuSubItemId: subItemId,
    itemTypeId: itemTypeId,
    itemGroupPriceId: parseInt(groupId),
    quantity: 1,
    name: name,
    price: price,
  };
  updateMockupState("_lastUpdated", Date.now());
};

// Multi-select stepper: increment/decrement quantity for a sub-item
window._adjustSubItemQty = function (
  groupId,
  subItemId,
  itemTypeId,
  name,
  price,
  delta,
) {
  if (!mockupState._customizeSubItems) mockupState._customizeSubItems = {};
  if (!mockupState._customizeSubItems[groupId]) {
    mockupState._customizeSubItems[groupId] = { items: {} };
  }
  const current = mockupState._customizeSubItems[groupId].items[subItemId];
  const newQty = Math.max(0, (current ? current.quantity : 0) + delta);
  if (newQty === 0) {
    delete mockupState._customizeSubItems[groupId].items[subItemId];
  } else {
    mockupState._customizeSubItems[groupId].items[subItemId] = {
      menuSubItemId: subItemId,
      itemTypeId: itemTypeId,
      itemGroupPriceId: parseInt(groupId),
      quantity: newQty,
      name: name,
      price: price,
    };
  }
  updateMockupState("_lastUpdated", Date.now());
};

// Modify-type selector: sets None/Less/Regular/Extra for an included ingredient.
// NOTE: modifyType values ('add','extra','less','no') — verify with API developer if order results are unexpected.
window._selectModifyType = function (menuSubItemId, modifyType, price) {
  if (!mockupState._customizeModifyTypes)
    mockupState._customizeModifyTypes = {};
  mockupState._customizeModifyTypes[menuSubItemId] = { modifyType, price };
  updateMockupState("_lastUpdated", Date.now());
};

// Add to Cart: builds cart item from current selections, validates required groups, then navigates.
window._addToCart = function () {
  const item = mockupState.selectedItem;
  if (!item) return;

  // --- Required-group validation ---
  const detail = mockupState.selectedItemDetail;
  const sels = mockupState._customizeSubItems || {};
  const modSels = mockupState._customizeModifyTypes || {};
  const groups = (detail?.menuSubItemGroups || []).filter(
    (g) => g.isActive !== false,
  );
  let firstFailId = null;
  for (const g of groups) {
    const isRequired = (g.minSelect || 0) >= 1;
    if (
      isRequired &&
      Object.keys(sels[g.menuSubItemGroupId]?.items || {}).length === 0
    ) {
      firstFailId = g.menuSubItemGroupId;
      break;
    }
  }
  if (firstFailId !== null) {
    // Scroll the failing group into view and flash it
    const el = document.getElementById(`mod-group-${firstFailId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("validation-error");
      el.style.animation = "none";
      requestAnimationFrame(() => {
        el.style.animation = "";
        el.classList.add("shake");
      });
      setTimeout(() => el.classList.remove("shake"), 600);
    }
    // Re-render so the validation badge shows
    updateMockupState("_lastUpdated", Date.now());
    return;
  }

  // --- Collect all selected sub-items across groups ---
  const selectedSubItems = [];
  for (const gid in sels) {
    const groupItems = sels[gid]?.items || {};
    for (const sid in groupItems) {
      const s = groupItems[sid];
      selectedSubItems.push({
        menuSubItemId: s.menuSubItemId,
        itemTypeId: s.itemTypeId,
        itemGroupPriceId: s.itemGroupPriceId,
        quantity: s.quantity,
        name: s.name,
        price: s.price,
        groupName: sels[gid]?.groupName || "",
        modifyType: null, // standard group items have no modify type
      });
    }
  }

  // --- Collect modify-type items (None/Less/Regular/Extra) ---
  for (const sid in modSels) {
    const m = modSels[sid];
    if (m.modifyType && m.modifyType !== "add") {
      // Only send non-default modify types to keep payload clean
      // 'add' (Regular) is the default — omitting it reduces noise
      selectedSubItems.push({
        menuSubItemId: parseInt(sid),
        itemTypeId: 2,
        itemGroupPriceId: 0,
        quantity: 1,
        name: "",
        price: m.price || 0,
        groupName: "Included Options",
        modifyType: m.modifyType,
      });
    }
  }

  // Get special instruction from textarea
  const instructionEl = document.getElementById("special-instruction-input");
  const specialInstruction = instructionEl ? instructionEl.value.trim() : "";

  // Calculate unit price (base + extras)
  let extrasTotal = 0;
  selectedSubItems.forEach((s) => {
    extrasTotal += (s.price || 0) * (s.quantity || 1);
  });
  for (const sid in modSels) {
    if (modSels[sid]?.modifyType !== "add")
      extrasTotal += modSels[sid]?.price || 0;
  }

  // Build cart item
  const cartItem = {
    cartId: Date.now(),
    menuItemId: item.id,
    name: item.name,
    basePrice: item.price,
    unitPrice: item.price + extrasTotal,
    quantity: mockupState.itemQuantity,
    image: item.image,
    selectedSubItems: selectedSubItems,
    specialInstruction: specialInstruction,
  };

  // Add to cart
  mockupState.cart.push(cartItem);
  mockupState.cartItemCount = mockupState.cart.reduce(
    (sum, i) => sum + i.quantity,
    0,
  );

  // Reset customize state
  mockupState._customizeSubItems = {};
  mockupState._customizeModifyTypes = {};
  mockupState._specialInstruction = "";
  mockupState.itemQuantity = 1;

  persistAllState();
  navigateTo("cart");
};

// Update cart item quantity (0 = remove)
window._updateCartQty = function (index, newQty) {
  if (!mockupState.cart) return;
  if (newQty <= 0) {
    mockupState.cart.splice(index, 1);
  } else {
    mockupState.cart[index].quantity = newQty;
  }
  mockupState.cartItemCount = mockupState.cart.reduce(
    (sum, i) => sum + i.quantity,
    0,
  );
  persistAllState();
  renderPage();
};

// Place Order: login gate + API call
window._handlePlaceOrder = async function () {
  // Login gate — require authenticated user
  const token = window.ApiService?.getToken();
  if (!token) {
    // Show sign-in modal
    alert("Please sign in to place your order.");
    navigateTo("sign-in");
    return;
  }

  const cart = mockupState.cart || [];
  if (cart.length === 0) {
    alert("Your cart is empty. Add items before placing an order.");
    return;
  }

  // Calculate pricing
  const subtotal = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const taxRate = mockupState.locationTaxRate || 0.0925;
  const taxes = subtotal * taxRate;
  const bagFee = (mockupState.bagQuantity || 0) * 0.1;
  const convenienceFee = mockupState.locationConvenienceFee || 0;
  let tipAmount = 0;
  if (mockupState.tipPercentage === "other") {
    tipAmount = parseFloat(mockupState.customTipAmount) || 0;
  } else {
    tipAmount = subtotal * ((mockupState.tipPercentage || 0) / 100);
  }
  const finalTotal = subtotal + taxes + bagFee + convenienceFee + tipAmount;

  // Build PlaceOrderRequest
  const orderData = {
    orderType: mockupState.fulfillmentMode || "In-store",
    locationId: mockupState.selectedLocationId || 7,
    restaurantId: mockupState.selectedRestaurantId || 7,
    tipAmount: parseFloat(tipAmount.toFixed(2)),
    pickUpTime:
      mockupState.orderTime === "Later" ? new Date().toISOString() : null,
    isCustomTime: mockupState.orderTime === "Later",
    tableNum: null,
    isGuestUser: false,
    guestFirstName: mockupState.userProfile?.firstName || "Guest",
    guestLastName: mockupState.userProfile?.lastName || "User",
    guestPhoneNumber: mockupState.userProfile?.phoneNumber || "0000000000",
    guestEmailAddress: mockupState.userProfile?.email || "guest@farebites.com",
    items: cart.map((item) => ({
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      specialInstruction: item.specialInstruction || null,
      subItems: (item.selectedSubItems || [])
        .filter((sub) => sub.menuSubItemId < 8000 || sub.menuSubItemId > 8300)
        .map((sub) => ({
          menuSubItemId: sub.menuSubItemId,
          itemTypeId: sub.itemTypeId || 2,
          itemGroupPriceId: sub.itemGroupPriceId || 0,
          quantity: sub.quantity || 1,
        })),
      subMenuChoices: [],
    })),
  };

  console.log("Placing order:", JSON.stringify(orderData, null, 2));

  // Show loading state
  const btns = document.querySelectorAll("button");
  btns.forEach((b) => {
    if (b.textContent.includes("Purchase Order")) {
      b.textContent = "Placing Order...";
      b.disabled = true;
    }
  });

  try {
    const response = await window.ApiService.placeOrder(orderData);
    console.log("Order placed successfully:", response);

    // Store order response
    mockupState.lastOrder = {
      ...response,
      orderId: response.data?.orderId || response.orderId,
      orderItems: cart.map((i) => ({ ...i })),
      subtotal,
      taxes,
      tipAmount,
      bagFee,
      convenienceFee,
      total: finalTotal,
      placedAt: new Date().toISOString(),
    };

    // Clear cart
    mockupState.cart = [];
    mockupState.cartItemCount = 0;

    persistAllState();
    navigateTo("order-confirm");
  } catch (error) {
    console.error("Failed to place order:", error);
    const errorMsg =
      error?.data?.message ||
      error?.data?.title ||
      "Failed to place order. Please try again.";

    // Auto-retry if there is a payment total mismatch
    // Example error: "Payment total $10.73 does not match order total $8.44"
    const match = errorMsg.match(
      /Payment total \$[\d\.]+ does not match order total \$([\d\.]+)/i,
    );
    if (match && match[1]) {
      const correctTotal = parseFloat(match[1]);
      console.log(
        `Payment mismatch detected. Retrying with correct total: ${correctTotal}`,
      );
      orderData.payments[0].amount = correctTotal;
      try {
        const retryResponse = await window.ApiService.placeOrder(orderData);
        console.log("Order placed successfully on retry:", retryResponse);

        mockupState.lastOrder = {
          ...retryResponse,
          orderItems: cart.map((i) => ({ ...i })),
          subtotal,
          taxes,
          tipAmount,
          bagFee,
          convenienceFee,
          total: finalTotal,
          placedAt: new Date().toISOString(),
        };

        mockupState.cart = [];
        mockupState.cartItemCount = 0;
        persistAllState();
        navigateTo("order-confirm");
        return;
      } catch (retryError) {
        console.error("Retry failed:", retryError);
        const retryErrorMsg =
          retryError?.data?.message ||
          retryError?.data?.title ||
          "Failed to place order. Please try again.";
        alert(retryErrorMsg);
      }
    } else {
      alert(errorMsg);
    }

    // Reset buttons
    btns.forEach((b) => {
      if (b.textContent.includes("Placing")) {
        b.textContent = "Purchase Order";
        b.disabled = false;
      }
    });
  }
};

function updateMockupState(key, value) {
  mockupState[key] = value;
  persistAllState();

  const scroller =
    document.getElementById("order-details-scroller") ||
    document.getElementById("cart-scroller") ||
    document.getElementById("payment-scroller") ||
    document.querySelector(".overflow-y-auto") ||
    document.getElementById("app-viewport");

  const scrollPos = scroller ? scroller.scrollTop : 0;
  const windowScrollPos =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  isUpdatingMockupState = true;
  renderPage();
  isUpdatingMockupState = false;

  // Restore window scroll position (critical for desktop layout where body/window scrolls)
  window.scrollTo(0, windowScrollPos);

  // Restore element scroll position (synchronously and asynchronously to handle browser rendering delay)
  const restoreContainerScroll = () => {
    const newScroller =
      document.getElementById("order-details-scroller") ||
      document.getElementById("cart-scroller") ||
      document.getElementById("payment-scroller") ||
      document.querySelector(".overflow-y-auto") ||
      document.getElementById("app-viewport");
    if (newScroller) {
      newScroller.scrollTop = scrollPos;
    }
  };

  restoreContainerScroll();
  requestAnimationFrame(() => {
    restoreContainerScroll();
    setTimeout(restoreContainerScroll, 0);
  });
}

async function handleRegistration() {
  const email = document.getElementById("reg-email")?.value;
  const password = document.getElementById("reg-password")?.value;
  const confirmPassword = document.getElementById(
    "reg-confirm-password",
  )?.value;
  const firstName = document.getElementById("reg-first-name")?.value;
  const lastName = document.getElementById("reg-last-name")?.value;
  const phoneNumber = document.getElementById("reg-phone")?.value;
  const errorEl = document.getElementById("reg-error");

  if (errorEl) {
    errorEl.style.opacity = "0";
    errorEl.textContent = "";
  }

  if (!email || !password || !firstName || !lastName || !phoneNumber) {
    if (errorEl) {
      errorEl.textContent = "Please fill out all required fields.";
      errorEl.style.opacity = "1";
    }
    return;
  }

  if (password !== confirmPassword) {
    if (errorEl) {
      errorEl.textContent = "Passwords do not match.";
      errorEl.style.opacity = "1";
    }
    return;
  }

  try {
    if (!window.ApiService) {
      throw new Error("API Service not loaded");
    }
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    await window.ApiService.register(data);

    // On success, redirect to login page
    navigateTo("sign-in");
  } catch (err) {
    if (errorEl) {
      errorEl.textContent =
        err.data && err.data.message
          ? err.data.message
          : err.message || "Registration failed. Please try again.";
      errorEl.style.opacity = "1";
    }
  }
}

async function handleLogin() {
  const email = document.getElementById("auth-email-input")?.value;
  const password = document.getElementById("auth-password-input")?.value;
  const errorEl = document.getElementById("auth-error");

  if (errorEl) {
    errorEl.style.opacity = "0";
    errorEl.textContent = "";
  }

  if (!email || !password) {
    if (errorEl) {
      errorEl.textContent = "Please enter both email and password.";
      errorEl.style.opacity = "1";
    }
    return;
  }

  try {
    if (!window.ApiService) {
      throw new Error("API Service not loaded");
    }
    const rememberMe =
      document.getElementById("auth-remember-me")?.checked || false;
    if (rememberMe) {
      localStorage.setItem("farebites_remembered_email", email);
    } else {
      localStorage.removeItem("farebites_remembered_email");
    }
    const data = await window.ApiService.login(email, password, rememberMe);

    mockupState.isLoggedIn = true;
    mockupState.userEmail = email;
    // Try to get user name from profile
    try {
      const profile = await window.ApiService.getProfile();
      console.log("Successfully fetched profile on login:", profile);

      // Merge local address details if they exist in localStorage (since API drops them in GET schema)
      const emailKey =
        profile.email || profile.emailAddress || email || mockupState.userEmail;
      let mergedProfile = { ...profile };
      if (emailKey) {
        const localAddressKey = `farebites_profile_address_${emailKey.toLowerCase()}`;
        const savedAddress = localStorage.getItem(localAddressKey);
        if (savedAddress) {
          try {
            const parsedAddress = JSON.parse(savedAddress);
            mergedProfile = { ...mergedProfile, ...parsedAddress };
          } catch (e) {
            console.error("Error parsing local profile address:", e);
          }
        }
      }

      mockupState.userName =
        mergedProfile.firstName || mergedProfile.email?.split("@")[0] || "User";
      mockupState.userProfile = mergedProfile;
    } catch (e) {
      console.error("Failed to fetch profile on login:", e);
      mockupState.userName = "User";
      mockupState.userProfile = {};
    }

    loadCartFromStorage();
    persistAllState();
    if (typeof resetInactivityTimer === "function") resetInactivityTimer();
    navigateTo("restaurant-home");
  } catch (err) {
    if (errorEl) {
      errorEl.textContent =
        err.data && err.data.message
          ? err.data.message
          : err.message || "Invalid email or password.";
      errorEl.style.opacity = "1";
    }
  }
}

async function handleForgotPassword() {
  const emailEl = document.getElementById("forgot-email-input");
  const errorEl = document.getElementById("forgot-error");
  const successEl = document.getElementById("forgot-success");
  const submitBtn = document.getElementById("forgot-submit-btn");

  if (!emailEl || !errorEl || !successEl || !submitBtn) return;

  const email = emailEl.value.trim();

  // Reset messages
  errorEl.style.opacity = "0";
  errorEl.textContent = "";
  successEl.classList.add("hidden");
  successEl.textContent = "";

  if (!email) {
    errorEl.textContent = "Please enter your email address.";
    errorEl.style.opacity = "1";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEl.textContent = "Please enter a valid email address.";
    errorEl.style.opacity = "1";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    if (!window.ApiService) {
      throw new Error("API Service not loaded");
    }
    const result = await window.ApiService.forgotPassword(email);
    successEl.textContent = result.message || "Reset link sent successfully!";
    successEl.classList.remove("hidden");
    emailEl.value = "";
  } catch (err) {
    console.error("Forgot password error:", err);
    errorEl.textContent =
      err.data && err.data.message
        ? err.data.message
        : err.message || "Failed to send reset link.";
    errorEl.style.opacity = "1";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Reset Link";
  }
}

async function handleUpdateProfile() {
  const firstName = document.getElementById("prof-first-name")?.value;
  const lastName = document.getElementById("prof-last-name")?.value;
  const email = document.getElementById("prof-email")?.value;
  const phoneNumber = document.getElementById("prof-phone")?.value;
  const address = document.getElementById("prof-address")?.value || "";
  const city = document.getElementById("prof-city")?.value || "";
  const state = document.getElementById("prof-state")?.value || "";
  const zipCode = document.getElementById("prof-zip")?.value || "";
  const errorEl = document.getElementById("prof-error");

  if (errorEl) {
    errorEl.style.opacity = "0";
    errorEl.textContent = "";
  }

  if (!firstName || !lastName || !email || !phoneNumber) {
    if (errorEl) {
      errorEl.textContent = "Please fill out all fields.";
      errorEl.style.opacity = "1";
    }
    return;
  }

  try {
    if (!window.ApiService) throw new Error("API Service not loaded");

    const payload = {
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
    };
    await window.ApiService.updateProfile(payload);

    // Save address fields to localStorage so they persist across page refreshes
    const emailKey =
      email || mockupState.userEmail || mockupState.userProfile?.email;
    if (emailKey) {
      const localAddressKey = `farebites_profile_address_${emailKey.toLowerCase()}`;
      localStorage.setItem(
        localAddressKey,
        JSON.stringify({ address, city, state, zipCode }),
      );
    }

    // Update local state by merging to preserve email
    mockupState.userProfile = {
      ...mockupState.userProfile,
      ...payload,
    };
    mockupState.userName = firstName;
    mockupState.modalOpen = null;
    persistAllState();
    navigateTo(currentPage); // reload page
  } catch (err) {
    if (errorEl) {
      errorEl.textContent =
        err.data && err.data.message
          ? err.data.message
          : err.message || "Update failed. Please try again.";
      errorEl.style.opacity = "1";
    }
  }
}

async function handleChangePassword() {
  const currentPwd = document.getElementById("pwd-current")?.value;
  const newPwd = document.getElementById("pwd-new")?.value;
  const confirmPwd = document.getElementById("pwd-confirm")?.value;
  const errorEl = document.getElementById("pwd-error");

  if (errorEl) {
    errorEl.style.opacity = "0";
    errorEl.textContent = "";
  }

  if (!currentPwd || !newPwd || !confirmPwd) {
    if (errorEl) {
      errorEl.textContent = "Please fill out all fields.";
      errorEl.style.opacity = "1";
    }
    return;
  }

  if (newPwd !== confirmPwd) {
    if (errorEl) {
      errorEl.textContent = "New passwords do not match.";
      errorEl.style.opacity = "1";
    }
    return;
  }

  try {
    if (!window.ApiService) throw new Error("API Service not loaded");

    await window.ApiService.changePassword(currentPwd, newPwd);

    mockupState.modalOpen = null;
    persistAllState();
    navigateTo(currentPage);
    setTimeout(() => alert("Password updated successfully!"), 100);
  } catch (err) {
    if (errorEl) {
      errorEl.textContent =
        err.data && err.data.message
          ? err.data.message
          : err.message || "Password update failed.";
      errorEl.style.opacity = "1";
    }
  }
}

async function signOutUser() {
  // Save current cart before logging out
  if (mockupState.isLoggedIn) {
    syncCartToStorage();
  }

  if (window.ApiService) {
    await window.ApiService.logout();
  }

  // Clear user state and screen cart
  mockupState.isLoggedIn = false;
  mockupState.userName = "Guest";
  mockupState.userEmail = "";
  mockupState.userProfile = {};

  mockupState.cart = [];
  mockupState.cartItemCount = 0;
  mockupState.bagQuantity = 0;
  mockupState.noBagsSelected = false;

  // Persist to session storage manually to avoid syncCartToStorage overwriting with empty
  sessionStorage.setItem(STORAGE_KEYS.state, JSON.stringify(mockupState));

  navigateTo("sign-in");
}

window.toggleLocationFavorite = function (name, event) {
  if (event) {
    event.stopPropagation();
  }

  // Find in LOCATIONS and toggle
  const loc = LOCATIONS.find((l) => l.name === name);
  let isFavNow = false;
  if (loc) {
    loc.fav = !loc.fav;
    isFavNow = loc.fav;
  }

  // Find in apiLocations and toggle
  if (mockupState.apiLocations && mockupState.apiLocations.length > 0) {
    const apiLoc = mockupState.apiLocations.find((l) => l.name === name);
    if (apiLoc) {
      apiLoc.fav = !apiLoc.fav;
      isFavNow = apiLoc.fav;
    }
  }

  // Animate the heart
  const heartBtn = event ? event.currentTarget : null;
  if (heartBtn) {
    const iconEl = heartBtn.querySelector("i");
    if (iconEl) {
      const sizeClass = iconEl.className.includes("text-[22px]")
        ? "text-[22px]"
        : "text-[19px]";
      if (isFavNow) {
        iconEl.className = `fa-solid fa-heart text-violet-600 ${sizeClass}`;
      } else {
        iconEl.className = `fa-regular fa-heart text-gray-300 hover:text-violet-600 ${sizeClass}`;
      }
    }
    heartBtn.classList.add("animate-heart-burst");
    setTimeout(() => {
      heartBtn.classList.remove("animate-heart-burst");
      updateMockupState("lastAction", "favorite_" + name);
    }, 600);
  } else {
    updateMockupState("lastAction", "favorite_" + name);
  }
};

window.setLocationLabel = function (name, label) {
  if (!mockupState.locationLabels) {
    mockupState.locationLabels = {};
  }
  mockupState.locationLabels[name] = label;
  updateMockupState("lastAction", "label_" + name);
};

window.togglePasswordVisibility = function (inputId, buttonEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const icon = buttonEl.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    if (icon) {
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  } else {
    input.type = "password";
    if (icon) {
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }
};

window.viewPastOrder = function (orderId) {
  const apiOrdersList = mockupState.apiOrders
    ? Array.isArray(mockupState.apiOrders)
      ? mockupState.apiOrders
      : mockupState.apiOrders.items || mockupState.apiOrders.data || []
    : [];
  let allOrders = [...apiOrdersList];
  if (mockupState.lastOrder) {
    const lastOrderId = mockupState.lastOrder.orderId;
    const exists = allOrders.some((o) => o.orderId === lastOrderId);
    if (!exists) {
      allOrders.push(mockupState.lastOrder);
    }
  }

  const order = allOrders.find(
    (o) => o.orderId === orderId || String(o.orderId) === String(orderId),
  );
  if (order) {
    mockupState.lastOrder = {
      ...order,
      orderId: order.orderId,
      subtotal: order.subTotal || order.subtotal || 0,
      taxes: order.salesTax || order.taxes || 0,
      tipAmount: order.tipApplied || order.tipAmount || 0,
      bagFee: order.bagFeeCharged || order.bagFee || 0,
      convenienceFee: order.convenienceFeeCharged || order.convenienceFee || 0,
      total: order.total || 0,
      orderItems: (
        order.orderMenuItems ||
        order.items ||
        order.orderItems ||
        []
      ).map((i) => ({
        name: i.name,
        quantity: i.quantity,
        price: i.paidPrice || i.unitPrice || i.price || 0,
      })),
      placedAt: order.orderDate || order.placedAt || new Date().toISOString(),
    };
    if (order.locationId) {
      mockupState.selectedLocationId = order.locationId;
      const foundLoc = LOCATIONS.find((l) => l.locationId === order.locationId);
      if (foundLoc) {
        mockupState.selectedLocation = foundLoc.name;
      }
    }
    persistAllState();
    navigateTo("order-confirm");
  }
};

window.reorderPastOrder = function (orderId) {
  const apiOrdersList = mockupState.apiOrders
    ? Array.isArray(mockupState.apiOrders)
      ? mockupState.apiOrders
      : mockupState.apiOrders.items || mockupState.apiOrders.data || []
    : [];
  let allOrders = [...apiOrdersList];
  if (mockupState.lastOrder) {
    const lastOrderId = mockupState.lastOrder.orderId;
    const exists = allOrders.some((o) => o.orderId === lastOrderId);
    if (!exists) {
      allOrders.push(mockupState.lastOrder);
    }
  }

  const order = allOrders.find(
    (o) => o.orderId === orderId || String(o.orderId) === String(orderId),
  );
  if (order) {
    const orderItems =
      order.orderMenuItems || order.items || order.orderItems || [];
    orderItems.forEach((item) => {
      const menuItem =
        MENU_ITEMS.find(
          (mi) => mi.name.toLowerCase() === item.name.toLowerCase(),
        ) ||
        (item.menuItemId
          ? MENU_ITEMS.find((mi) => mi.id === item.menuItemId)
          : null);

      const basePrice = menuItem
        ? menuItem.price
        : item.unitPrice || item.price || 0;
      const image = menuItem ? menuItem.image : "";

      const cartItem = {
        cartId: Date.now() + Math.random(),
        menuItemId: item.menuItemId || (menuItem ? menuItem.id : 0),
        name: item.name,
        basePrice: basePrice,
        unitPrice: item.unitPrice || item.price || basePrice,
        quantity: item.quantity || 1,
        image: image,
        selectedSubItems: [],
        specialInstruction: item.specialInstruction || "",
      };
      mockupState.cart.push(cartItem);
    });
    mockupState.cartItemCount = mockupState.cart.reduce(
      (sum, i) => sum + i.quantity,
      0,
    );
    persistAllState();
    navigateTo("cart");
  }
};

function removeFavorite(id) {
  mockupState.favorites = mockupState.favorites.filter(
    (item) => item.id !== id,
  );
  persistAllState();
  renderPage();
}

function selectLocation(
  locationId,
  locationName,
  locationAddress,
  locationDistance,
) {
  mockupState.selectedLocation = locationName;
  mockupState.selectedLocationId = locationId || null;
  if (locationAddress) mockupState.selectedAddress = locationAddress;
  if (locationDistance) mockupState.selectedDistance = locationDistance;
  mockupState.orderTime = "ASAP";

  mockupState.apiCategories = [];
  mockupState.apiMenuItems = [];
  persistAllState();

  if (locationId) {
    fetchMenuAndItems(locationId);
  }

  navigateTo("order-details");
}

let leafletMap = null;
let mapMarkers = {};

function getNearbyLocationsCount(targetLat, targetLng, radiusMiles = 15) {
  let count = 0;
  LOCATIONS.forEach((loc) => {
    const dLat = ((loc.lat - targetLat) * Math.PI) / 180;
    const dLng = ((loc.lng - targetLng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((targetLat * Math.PI) / 180) *
        Math.cos((loc.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceMiles = 3959 * c;
    if (distanceMiles > 0.1 && distanceMiles <= radiusMiles) {
      count++;
    }
  });
  return count;
}

function initLocationsMap() {
  const mapElement = document.getElementById("locations-map");
  if (!mapElement) return;

  // Default center at Tempe, AZ or first location
  const centerLat = 37.7749; // Bay Area general center
  const centerLng = -122.4194;

  let startLat = centerLat;
  let startLng = centerLng;
  let startZoom = 9;

  const currentLoc = LOCATIONS.find(
    (l) => l.name === mockupState.selectedLocation,
  );
  if (currentLoc) {
    startLat = currentLoc.lat;
    startLng = currentLoc.lng;
    // Auto zoom based on density on initial load
    const nearbyCount = getNearbyLocationsCount(startLat, startLng, 15);
    startZoom = nearbyCount > 0 ? 12 : 15;
  } else if (LOCATIONS.length > 0) {
    startLat = LOCATIONS[0].lat;
    startLng = LOCATIONS[0].lng;
  }

  try {
    if (leafletMap) {
      leafletMap.remove();
    }

    leafletMap = L.map("locations-map", {
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView([startLat, startLng], startZoom);

    L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "© Google Maps",
    }).addTo(leafletMap);

    mapMarkers = {};
    LOCATIONS.forEach((s) => {
      const customIcon = L.divIcon({
        html: `
                    <div class="relative flex flex-col items-center group">
                        <div class="relative w-12 h-16 flex justify-center filter drop-shadow-md transform transition-transform group-hover:scale-110 duration-200">
                            <svg viewBox="0 0 384 512" class="absolute inset-0 w-full h-full fill-[#e61874] z-0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; fill: #e61874; z-index: 0;">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"/>
                            </svg>
                            <div style="position: absolute; z-index: 10; top: 8px; left: 8px; width: 32px; height: 32px; background-color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
                                <img src="images/i-tea-logo-new.png" alt="IT" style="width: 24px; height: 24px; object-fit: contain;">
                            </div>
                        </div>
                        <div class="bg-violet-950/90 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm whitespace-nowrap -mt-1 leading-none border border-violet-800/30">
                            i-Tea
                        </div>
                    </div>
                `,
        className: "custom-div-icon",
        iconSize: [60, 60],
        iconAnchor: [30, 45],
      });

      const marker = L.marker([s.lat, s.lng], { icon: customIcon }).addTo(
        leafletMap,
      );

      if (
        currentViewport === "desktop" &&
        currentLoc &&
        s.name === currentLoc.name
      ) {
        const popupContent = `
                    <div class="p-3 font-sans min-w-[200px]">
                        ${s.name === "i-Tea - Tempe" ? '<div class="text-[9px] font-black text-gray-900 uppercase tracking-widest mb-1.5">Previous Order</div>' : ""}
                        <h4 class="font-black text-sm uppercase tracking-tight text-violet-700 mb-1">${s.name}</h4>
                        <p class="text-xs text-gray-500 font-semibold mb-2">${s.address}</p>
                        <p class="text-[10px] font-black text-gray-400 uppercase mb-3"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                        <button onclick="selectLocation(${s.locationId || "null"}, '${s.name}', '${s.address}', '${s.dist}')" class="w-full bg-violet-600 text-white text-[10px] font-black uppercase tracking-wider py-2 rounded-full shadow-sm hover:bg-violet-700 transition active:scale-95">Order Here</button>
                    </div>
                `;
        marker.bindPopup(popupContent);
      }

      marker.on("click", () => {
        focusLocation(s.name, false);
      });

      mapMarkers[s.name.toLowerCase()] = marker;
    });

    if (currentLoc && mapMarkers[currentLoc.name.toLowerCase()]) {
      setTimeout(() => {
        if (leafletMap) {
          leafletMap.invalidateSize();
        }
        if (
          mapMarkers[currentLoc.name.toLowerCase()] &&
          currentViewport === "desktop"
        ) {
          mapMarkers[currentLoc.name.toLowerCase()].openPopup();
        }
      }, 300);
    } else {
      setTimeout(() => {
        if (leafletMap) {
          leafletMap.invalidateSize();
        }
      }, 300);
    }
  } catch (e) {
    console.error("Map initialization failed", e);
  }
}

function focusLocation(name, openPopup = true) {
  const list =
    mockupState.apiLocations && mockupState.apiLocations.length > 0
      ? mockupState.apiLocations
      : LOCATIONS;
  const store =
    list.find((l) => l.name.toLowerCase() === name.toLowerCase()) ||
    LOCATIONS.find((l) => l.name.toLowerCase() === name.toLowerCase());

  if (!store) {
    console.error("Store not found:", name);
    return;
  }

  const parsedLat = parseFloat(store.lat);
  const parsedLng = parseFloat(store.lng);

  if (isNaN(parsedLat) || isNaN(parsedLng)) {
    console.error("Store coordinates invalid:", store);
    return;
  }

  if (leafletMap) {
    leafletMap.invalidateSize();
    // Dynamically calculate zoom: zoom out if there are nearby alternative locations
    const nearbyCount = getNearbyLocationsCount(parsedLat, parsedLng, 15);
    const zoomLevel = nearbyCount > 0 ? 12 : 15;

    leafletMap.setView([parsedLat, parsedLng], zoomLevel, {
      animate: true,
      duration: 0.8,
    });
  }

  const key = name.toLowerCase();
  if (openPopup && mapMarkers[key]) {
    mapMarkers[key].openPopup();
  }

  const cards = document.querySelectorAll("[data-location-card]");
  cards.forEach((card) => {
    const cardName = card.getAttribute("data-location-card");
    if (cardName.toLowerCase() === name.toLowerCase()) {
      card.classList.remove("border-gray-200", "bg-white");
      card.classList.add("border-violet-600", "bg-violet-50/10", "shadow-md");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      card.classList.remove(
        "border-violet-600",
        "bg-violet-50/10",
        "shadow-md",
      );
      card.classList.add("border-gray-200", "bg-white");
    }
  });
}

function navigateTo(pageId) {
  persistAllState();
  let [basePageId, hash] = pageId.split("#");

  // Redirect to location selector if accessing menu or customization without a selected store
  if (
    (basePageId === "menu" ||
      basePageId === "menu-alt" ||
      basePageId === "customize" ||
      basePageId === "customize-alt") &&
    !mockupState.selectedLocationId
  ) {
    basePageId =
      basePageId === "menu-alt" || basePageId === "customize-alt"
        ? "locations-alt"
        : "locations";
    hash = "";
  }

  if (basePageId === currentPage) {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.location.hash = hash;
      }
    } else {
      renderPage();
    }
    return;
  }
  const nextFile = PAGE_FILE_MAP[basePageId] || `${basePageId}.html`;
  window.location.href = hash ? `${nextFile}#${hash}` : nextFile;
}

window.addEventListener("DOMContentLoaded", () => {
  // Redirect to location selector if landing directly on menu or customization without a selected store
  if (
    (currentPage === "menu" ||
      currentPage === "menu-alt" ||
      currentPage === "customize" ||
      currentPage === "customize-alt") &&
    !mockupState.selectedLocationId
  ) {
    const targetLocationsPage =
      currentPage === "menu-alt" || currentPage === "customize-alt"
        ? "locations-alt.html"
        : "locations.html";
    window.location.href = targetLocationsPage;
    return;
  }

  if (window.ApiService && window.ApiService.getToken()) {
    mockupState.isLoggedIn = true;

    // Fetch profile
    window.ApiService.getProfile()
      .then((profile) => {
        console.log("Successfully fetched profile on page load:", profile);

        // Merge local address details if they exist in localStorage (since API drops them in GET schema)
        const emailKey =
          profile.email || profile.emailAddress || mockupState.userEmail;
        let mergedProfile = { ...profile };
        if (emailKey) {
          const localAddressKey = `farebites_profile_address_${emailKey.toLowerCase()}`;
          const savedAddress = localStorage.getItem(localAddressKey);
          if (savedAddress) {
            try {
              const parsedAddress = JSON.parse(savedAddress);
              mergedProfile = { ...mergedProfile, ...parsedAddress };
            } catch (e) {
              console.error("Error parsing local profile address:", e);
            }
          }
        }

        mockupState.userName =
          mergedProfile.firstName ||
          mergedProfile.email?.split("@")[0] ||
          "User";
        mockupState.userProfile = mergedProfile;
        loadCartFromStorage();
        persistAllState();
        if (typeof resetInactivityTimer === "function") resetInactivityTimer();
        renderPage();
      })
      .catch((err) => {
        console.error("Failed to auto-fetch profile on start:", err);
        if (err.status === 401) {
          signOutUser();
        }
      });

    // Fetch orders
    window.ApiService.getOrders(1, 20)
      .then((orders) => {
        console.log("Successfully fetched orders on page load:", orders);
        mockupState.apiOrders = orders;
        persistAllState();
        renderPage();
      })
      .catch((err) => console.error("Failed to auto-fetch orders:", err));
  }

  fetchLocations().then(() => {
    if (currentPage === "locations" || currentPage === "locations-alt") {
      renderPage();
    }
  });

  if (mockupState.selectedLocationId && mockupState.apiMenuItems.length === 0) {
    fetchMenuAndItems(mockupState.selectedLocationId);
  }

  renderPage();
});

// --- Session Timeout Manager ---
const SESSION_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes
const WARNING_TIME_MS = 13 * 60 * 1000; // 13 minutes (2 minute warning)

let inactivityTimer = null;
let warningTimer = null;

function resetInactivityTimer() {
  // If warning modal is open, don't reset automatically on user action
  // unless they explicitly click "Stay Logged In"
  if (mockupState.modalOpen === "timeout-warning") return;

  clearTimeout(inactivityTimer);
  clearTimeout(warningTimer);

  // Only track if logged in
  if (!mockupState.isLoggedIn) return;

  warningTimer = setTimeout(showTimeoutWarning, WARNING_TIME_MS);
  inactivityTimer = setTimeout(executeAutoLogout, SESSION_TIMEOUT_MS);
}

function showTimeoutWarning() {
  if (!mockupState.isLoggedIn) return;
  mockupState.modalOpen = "timeout-warning";
  persistAllState();
  renderTimeoutWarningModal();
}

function executeAutoLogout() {
  mockupState.modalOpen = null;
  persistAllState();
  removeTimeoutWarningModal();
  if (mockupState.isLoggedIn) {
    signOutUser(); // This handles logout and redirect

    // Optional: show a quick alert or toast that they were logged out
    setTimeout(() => {
      alert("You have been automatically logged out due to inactivity.");
    }, 500);
  }
}

function handleStayLoggedIn() {
  mockupState.modalOpen = null;
  persistAllState();
  removeTimeoutWarningModal();
  resetInactivityTimer();
}

function renderTimeoutWarningModal() {
  if (!document.getElementById("timeout-warning-modal")) {
    const modalHtml = `
            <div id="timeout-warning-modal" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
                <div class="bg-white w-[92%] max-w-[380px] rounded-[32px] p-6 relative shadow-2xl animate-[slideUp_0.3s_ease-out]">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight">Are you still there?</h2>
                        <button onclick="executeAutoLogout()" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="mb-6">
                        <p class="text-gray-600 text-sm font-medium">
                            For your security, you will be automatically logged out soon due to inactivity. Do you need more time?
                        </p>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="executeAutoLogout()" class="flex-1 py-3 px-4 rounded-full border-2 border-gray-200 text-gray-700 font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors">
                            Log Out
                        </button>
                        <button onclick="handleStayLoggedIn()" class="flex-1 py-3 px-4 rounded-full bg-violet-600 text-white font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
                            Stay Logged In
                        </button>
                    </div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }
}

function removeTimeoutWarningModal() {
  const modal = document.getElementById("timeout-warning-modal");
  if (modal) {
    modal.remove();
  }
}

// Global Event Listeners for Activity
const activityEvents = [
  "mousemove",
  "keydown",
  "click",
  "scroll",
  "touchstart",
];
activityEvents.forEach((event) => {
  window.addEventListener(event, resetInactivityTimer, { passive: true });
});

// Initialize on load
window.addEventListener("DOMContentLoaded", () => {
  resetInactivityTimer();
});

// Native camera QR code capture callback
window.handleQRCameraCapture = function (event) {
  const file = event.target.files[0];
  if (file) {
    // Set scanning state to true, causing the page to render the premium overlay
    updateMockupState("isScanning", true);

    // Simulate decoding progress for 1.5 seconds, then transition to menu
    setTimeout(() => {
      updateMockupState("isScanning", false);
      navigateTo("menu");
    }, 1500);
  }
};

// Handle back/forward cache (bfcache) restoration to clear loading state
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    mockupState.isLoading = false;
    persistAllState();
    renderPage();
  }
});

// Global scroll-to-top button handler
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scroll-to-top-btn");
  if (btn) {
    if (window.scrollY > 400) {
      btn.classList.remove("opacity-0", "pointer-events-none");
      btn.classList.add("opacity-100", "pointer-events-auto");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none");
      btn.classList.remove("opacity-100", "pointer-events-auto");
    }
  }
}, { passive: true });
