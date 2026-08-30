const PAGE_FILE_MAP = {
  home: "index.html",
  "sign-in": "sign-in.html",
  "forgot-password": "forgot-password.html",
  rewards: "rewards.html",
  cart: "cart.html",
  customize: "customize.html",
  "customize-alt": "customize-alt.html",
  checkout: "checkout.html",
  "checkout-rewards": "checkout-rewards.html",
  "order-confirm": "order-confirm.html",
  "order-status": "order-status.html",
  "restaurant-home": "index.html",
  "restaurant-sign-in": "sign-in.html",
  "order-details": "order-details.html",
  "menu-scan": "menu-scan.html",
  menu: "menu.html",
  "menu-single": "menu-single.html",
  locations: "locations.html",
  "locations-alt": "locations.html",
  "location-favorites": "location-favorites.html",
  account: "profile.html",
  privacy: "privacy.html",
  dashboard: "dashboard.html",
  index: "index.html",
  "menu-favorites": "menu-favorites.html",
  registration: "registration.html",
  "registration-success": "registration-success.html",
  sections: "sections.html",
  accessibility: "accessibility.html",
};
const PAGE_LABELS = {
  home: "FareBites Homepage (Logged In)",
  "sign-in": "Sign In / Sign Up",
  "forgot-password": "Forgot Password",
  rewards: "Rewards Program",
  cart: "Cart / Review",
  customize: "Customize Item",
  "customize-alt": "Customize Item (Alternative)",
  checkout: "Checkout",
  "checkout-rewards": "Checkout (Gift & Rewards)",
  "order-confirm": "Order Confirmation",
  "order-status": "Order Status",
  "restaurant-home": "i-Tea Homepage",
  "restaurant-sign-in": "i-Tea Sign In",
  "order-details": "Order Details",
  "menu-scan": "Scan",
  menu: "Menu",
  "menu-single": "Menu Single Column",
  locations: "Pick a Location",
  "locations-alt": "Pick a Location (Alternative)",
  "location-favorites": "Saved Locations",
  account: "My Account",
  privacy: "Privacy Policy",
  dashboard: "Merchant Dashboard",
  "menu-favorites": "Menu Favorites",
  registration: "Registration Form",
  "registration-success": "Registration Success",
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
  bobaHero:
    "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
  boba1:
    "https://olodev.azurewebsites.net/imagesmenu/M7-Cr%C3%A8me-Br%C3%BBl%C3%A9e-Boba-Milk-Tea.jpg",
  boba2:
    "https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg",
  boba3:
    "https://olodev.azurewebsites.net/imagesmenu/M8_Fresh-Taro-Puree-Boba-Latte.jpg",
  boba4: "https://olodev.azurewebsites.net/imagesmenu/P1-Super-Fruit-Tea.jpg",
  restaurantHero:
    "https://order-iteausa.com/imagesmenu/N9-Fresh-Strawberry-Mango-Fruit-Tea.jpg",
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
    dist: null,
    fav: false,
    hours: "11:30 AM to 9:30 PM",
    locationId: 19,
    lat: 33.4223,
    lng: -111.9514,
  },
  {
    name: "i-Tea - ALAMEDA",
    address: "1860 PARK ST, ALAMEDA, CA",
    dist: null,
    fav: false,
    hours: "12:00 PM to 9:30 PM",
    locationId: 47,
    lat: 37.7624,
    lng: -122.2435,
  },
  {
    name: "i-Tea - CASTRO VALLEY",
    address: "20666 REDWOOD RD, CASTRO VALLEY, CA",
    dist: null,
    fav: false,
    hours: "10:30 AM to 10:00 PM",
    locationId: 7,
    lat: 37.6974,
    lng: -122.0722,
  },
  {
    name: "i-Tea - UC DAVIS",
    address: "236 A ST, DAVIS, CA",
    dist: null,
    fav: false,
    hours: "11:00 AM to 8:00 PM",
    locationId: 9001,
    lat: 38.5414,
    lng: -121.7482,
  },
  {
    name: "i-Tea - FREMONT #1",
    address: "43421 CHRISTY ST, FREMONT, CA",
    dist: null,
    fav: false,
    hours: "11:30 AM to 9:00 PM",
    locationId: 9002,
    lat: 37.5186,
    lng: -121.9702,
  },
  {
    name: "i-Tea - FRESNO",
    address: "345 E SHAW AVE, FRESNO, CA",
    dist: null,
    fav: false,
    hours: "1:00 PM to 6:45 PM",
    locationId: 9003,
    lat: 36.8087,
    lng: -119.7801,
  },
  {
    name: "i-Tea - MILPITAS",
    address: "766 E CALAVERAS BLVD, MILPITAS, CA",
    dist: null,
    fav: false,
    hours: "11:30 AM to 9:20 PM",
    locationId: 57,
    lat: 37.4332,
    lng: -121.8795,
  },
  {
    name: "i-Tea - MORAGA",
    address: "1460 MORAGA RD, MORAGA, CA",
    dist: null,
    fav: false,
    hours: "12:30 PM to 8:00 PM",
    locationId: 58,
    lat: 37.8351,
    lng: -122.1297,
  },
  {
    name: "i-Tea - NEWARK",
    address: "34925 NEWARK BLVD, NEWARK, CA",
    dist: null,
    fav: false,
    hours: "11:30 AM to 9:20 PM",
    locationId: 9004,
    lat: 37.5255,
    lng: -122.0463,
  },
  {
    name: "i-Tea - OAKLAND",
    address: "388 9TH ST, 126A, OAKLAND, CA",
    dist: null,
    fav: false,
    hours: "11:00 AM to 6:00 PM",
    locationId: 9,
    lat: 37.8009,
    lng: -122.2709,
  },
  {
    name: "i-Tea - PITTSBURG",
    address: "212A LOVERIDGE RD, PITTSBURG, CA",
    dist: null,
    fav: false,
    hours: "11:00 AM to 7:00 PM",
    locationId: 9005,
    lat: 38.0135,
    lng: -121.8767,
  },
  {
    name: "i-Tea - PLEASANTON",
    address: "915 MAIN ST, STE C, PLEASANTON, CA",
    dist: null,
    fav: false,
    hours: "11:30 AM to 7:30 PM",
    locationId: 9006,
    lat: 37.6627,
    lng: -121.8744,
  },
  {
    name: "i-Tea - STOCKTON",
    address: "6846 STOCKTON BLVD, SACRAMENTO, CA",
    dist: null,
    fav: false,
    hours: "10:20 AM to 8:00 PM",
    locationId: 9007,
    lat: 38.487,
    lng: -121.432,
  },
  {
    name: "i-Tea - TEARAY",
    address: "253 KEARNY ST, SAN FRANCISCO, CA",
    dist: null,
    fav: false,
    hours: "12:00 PM to 6:00 PM",
    locationId: 9008,
    lat: 37.7905,
    lng: -122.4042,
  },
  {
    name: "i-Tea - SAN JOSE",
    address: "2936 ABORN SQUARE RD, SAN JOSE, CA",
    dist: null,
    fav: false,
    hours: "11:30 AM to 9:30 PM",
    locationId: 9009,
    lat: 37.3195,
    lng: -121.8157,
  },
  {
    name: "i-Tea - SAN LEANDRO",
    address: "177 PELTON CENTER WAY, SAN LEANDRO, CA",
    dist: null,
    fav: false,
    hours: "Open 24 Hours",
    locationId: 10,
    lat: 37.7247,
    lng: -122.1558,
  },
];

// The real backend has no latitude/longitude field anywhere (checked every
// location-related endpoint and schema in its live API) — it only has a real
// street address. This table is that gap filled in honestly: real addresses,
// looked up once and geocoded to real coordinates, keyed by the real backend
// locationId. Unlike LOCATIONS above, this is not invented data — every
// entry was cross-checked against the location's real phone number from the
// live API and/or its own current online listings before being included.
// A locationId that's missing here (a new store, one not yet added) gets no
// coordinates rather than a guess — see getSelectedLocationInfo() callers.
//
// Deliberately excluded: locationId 30 ("i-Tea - Kearny"). The backend still
// marks it enabled, but its real store (253 Kearny St, San Francisco) shows
// as closed everywhere it's listed online. Needs a real decision, not a pin
// on a map for a store that may no longer exist — see finding #23.
const REAL_LOCATION_COORDINATES = {
  7: { lat: 37.696307, lng: -122.0738627 }, // Castro Valley, CA
  9: { lat: 37.8004416, lng: -122.2718372 }, // Oakland, CA
  10: { lat: 37.7227497, lng: -122.1543745 }, // San Leandro, CA
  19: { lat: 33.4216665, lng: -111.9511865 }, // Tempe, AZ
  27: { lat: 37.3123559, lng: -121.809782 }, // San Jose, CA
  28: { lat: 38.5431904, lng: -121.7468078 }, // Davis, CA (UC Davis)
  29: { lat: 37.5510888, lng: -122.0501913 }, // Newark, CA
  31: { lat: 38.508461, lng: -121.4348091 }, // Sacramento, CA (backend calls this "Stockton" — real address is on Stockton Blvd in Sacramento, not the city of Stockton)
  32: { lat: 36.8070166, lng: -119.7820557 }, // Fresno, CA
  45: { lat: 37.5049892, lng: -121.9712074 }, // Fremont, CA (#1 — the currently-open Fremont store; #2 is disabled/closed)
  46: { lat: 37.6659205, lng: -121.8742939 }, // Pleasanton, CA
  47: { lat: 37.7670827, lng: -122.24024 }, // Alameda, CA
  57: { lat: 37.4332293, lng: -121.892869 }, // Milpitas, CA
  58: { lat: 37.8352305, lng: -122.126466 }, // Moraga, CA
  61: { lat: 38.0129835, lng: -121.8634671 }, // Pittsburg, CA
};

// Real street addresses for the same known-real stores above, sourced and
// verified the same way (current live site + independent public listings,
// cross-checked against each store's real phone number). The public
// per-location endpoint doesn't include a street address at all — only the
// login-gated bulk endpoint does, and that gate rejects normal customer
// accounts (see finding #21) — so this is the real, honest source used
// when building the store list from public data instead. Same caveat as
// REAL_LOCATION_COORDINATES: a locationId missing here just doesn't get an
// address rather than a guess.
const REAL_LOCATION_ADDRESSES = {
  7: { full: "20666 Redwood Rd, Castro Valley, CA 94546" },
  9: { full: "388 9th St, Oakland, CA 94607" },
  10: { full: "177 Pelton Center Way, San Leandro, CA 94577" },
  19: { full: "825 W University Dr, Tempe, AZ 85281" },
  27: { full: "2936 Aborn Square Rd, San Jose, CA 95121" },
  28: { full: "236 A St, Davis, CA 95616" },
  29: { full: "34925 Newark Blvd, Newark, CA 94560" },
  31: { full: "6461 Stockton Blvd, Sacramento, CA 95828" },
  32: { full: "385 E Shaw Ave, Fresno, CA 93710" },
  45: { full: "43421 Christy St, Fremont, CA 94538" },
  46: { full: "915 Main St, Pleasanton, CA 94566" },
  47: { full: "1626 Park St, Alameda, CA 94501" },
  57: { full: "760 E Calaveras Blvd, Milpitas, CA 95035" },
  58: { full: "1460 Moraga Rd, Moraga, CA 94556" },
  61: { full: "2121A Loveridge Rd, Pittsburg, CA 94565" },
};

function getCalendarData(monthOffset = 0) {
  const now = new Date();
  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth() + monthOffset,
    1,
  );
  const targetYear = targetDate.getFullYear();
  const targetMonthIdx = targetDate.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const name = `${monthNames[targetMonthIdx]} ${targetYear}`;
  const startDay = targetDate.getDay();

  const lastDayOfMonth = new Date(targetYear, targetMonthIdx + 1, 0);
  const days = lastDayOfMonth.getDate();

  return { name, days, startDay, targetYear, targetMonthIdx };
}

function getDayLabel(targetYear, targetMonthIdx, dayOfMonth) {
  const now = new Date();
  const todayStr = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).toDateString();
  const tomorrowStr = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  ).toDateString();
  const currentStr = new Date(
    targetYear,
    targetMonthIdx,
    dayOfMonth,
  ).toDateString();

  if (currentStr === todayStr) return "Today";
  if (currentStr === tomorrowStr) return "Tomorrow";

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObj = new Date(targetYear, targetMonthIdx, dayOfMonth);
  const dayName = dayNames[dateObj.getDay()];
  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthNameShort = monthNamesShort[targetMonthIdx];

  return `${dayName}, ${monthNameShort} ${dayOfMonth}`;
}

function getAvailableDays(numDays = 14) {
  const days = [];
  const now = new Date();
  for (let i = 0; i < numDays; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const label = getDayLabel(d.getFullYear(), d.getMonth(), d.getDate());
    days.push(label);
  }
  return days;
}

function isPastDate(targetYear, targetMonthIdx, dayOfMonth) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const current = new Date(targetYear, targetMonthIdx, dayOfMonth);
  return current < today;
}

function getEstimatedPickupTime(fallbackMinutes = 20) {
  const now = new Date();
  let offsetMinutes = fallbackMinutes;
  let target;

  try {
    const { openTime, isClosed, pickUpTimeMinutes } = getStoreTimesForDay("Today");
    offsetMinutes = pickUpTimeMinutes;
    target = new Date(now.getTime() + offsetMinutes * 60000);
    if (!isClosed && openTime) {
      const openTimeWithPrep = new Date(openTime.getTime() + offsetMinutes * 60000);
      if (target < openTimeWithPrep) {
        target = openTimeWithPrep;
      }
    }
  } catch (e) {
    console.warn("Could not adjust estimated pickup time with store hours:", e);
    target = new Date(now.getTime() + offsetMinutes * 60000);
  }

  let h = target.getHours();
  let m = target.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h || 12; // convert 0 to 12
  m = m < 10 ? "0" + m : m;
  return `${h}:${m} ${ampm}`;
}

function getStoreTimesForDay(selectedDayLabel = "Today") {
  const now = new Date();

  let targetDate = new Date(now);
  if (selectedDayLabel === "Tomorrow") {
    targetDate.setDate(now.getDate() + 1);
  } else if (selectedDayLabel !== "Today") {
    const parts = selectedDayLabel.split(", ")[1];
    if (parts) {
      targetDate = new Date(parts + " " + now.getFullYear());
      if (targetDate.getMonth() < now.getMonth()) {
        targetDate.setFullYear(now.getFullYear() + 1);
      }
    }
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const targetDayStr = days[targetDate.getDay()];

  const tzOffset = targetDate.getTimezoneOffset() * 60000;
  const localIsoTime = new Date(targetDate.getTime() - tzOffset)
    .toISOString()
    .split("T")[0];
  const targetDateStr = localIsoTime;

  let openTimeStr = "11:30 AM";
  let closeTimeStr = "9:30 PM";
  let isClosed = false;
  // Real, per-store, per-day prep/pickup lead time from the API
  // (businessHours[day].pickUpTime, or the holiday override for that date).
  // 20 is only ever used before real hours have loaded for any store.
  let pickUpTimeMinutes = 20;

  if (typeof mockupState !== "undefined" && mockupState.apiLocations) {
    const locationTitle = mockupState.selectedLocation || "i-Tea - Tempe";
    const locObj =
      mockupState.apiLocations.find((l) => l.name === locationTitle) ||
      mockupState.apiLocations[0];

    let foundHours = false;

    if (locObj && locObj.holidayHours) {
      const holiday = locObj.holidayHours.find(
        (h) => h.date && h.date.startsWith(targetDateStr),
      );
      if (holiday) {
        foundHours = true;
        if (holiday.isClosed) {
          isClosed = true;
        } else if (holiday.schedules && holiday.schedules.length > 0) {
          openTimeStr = holiday.schedules[0].startTime || openTimeStr;
          closeTimeStr = holiday.schedules[0].endTime || closeTimeStr;
          if (typeof holiday.schedules[0].pickUpTime === "number") {
            pickUpTimeMinutes = holiday.schedules[0].pickUpTime;
          }
        } else {
          isClosed = true;
        }
      }
    }

    if (
      !foundHours &&
      locObj &&
      locObj.businessHours &&
      locObj.businessHours[targetDayStr]
    ) {
      const biz = locObj.businessHours[targetDayStr];
      if (biz.isClosed) {
        isClosed = true;
      } else if (biz.startTime && biz.endTime) {
        openTimeStr = biz.startTime;
        closeTimeStr = biz.endTime;
      }
      if (typeof biz.pickUpTime === "number") {
        pickUpTimeMinutes = biz.pickUpTime;
      }
    }
  }

  const parseTime = (timeStr, baseDate) => {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return new Date(baseDate);
    let h = parseInt(match[1]);
    let m = parseInt(match[2]);
    let p = match[3].toUpperCase();
    if (p === "PM" && h !== 12) h += 12;
    if (p === "AM" && h === 12) h = 0;
    const d = new Date(baseDate);
    d.setHours(h, m, 0, 0);
    return d;
  };

  let openTime = parseTime(openTimeStr, targetDate);
  let closeTime = parseTime(closeTimeStr, targetDate);

  return { openTime, closeTime, isClosed, targetDate, pickUpTimeMinutes };
}

function resolveSelectedPickupDateTime() {
  const { targetDate, isClosed } = getStoreTimesForDay(mockupState.selectedDay || "Today");
  if (isClosed || !mockupState.selectedTimeSlot) return null;
  const match = mockupState.selectedTimeSlot.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  let h = parseInt(match[1]);
  const m = parseInt(match[2]);
  const p = match[3].toUpperCase();
  if (p === "PM" && h !== 12) h += 12;
  if (p === "AM" && h === 12) h = 0;
  const resolved = new Date(targetDate);
  resolved.setHours(h, m, 0, 0);
  return resolved;
}

function getDynamicTimes(selectedDayLabel = "Today") {
  const { openTime, closeTime, isClosed, pickUpTimeMinutes } = getStoreTimesForDay(selectedDayLabel);
  if (isClosed) {
    return [];
  }

  const now = new Date();
  const prepMs = pickUpTimeMinutes * 60000;
  let adjustedCloseTime = new Date(closeTime.getTime() - prepMs);

  let current;
  if (selectedDayLabel === "Today") {
    let asapTime = new Date(now.getTime() + prepMs);
    let openTimeWithPrep = new Date(openTime.getTime() + prepMs);
    current = asapTime > openTimeWithPrep ? asapTime : openTimeWithPrep;
  } else {
    current = new Date(openTime.getTime() + prepMs);
  }

  if (current > adjustedCloseTime) {
    return [];
  }

  const minutes = current.getMinutes();
  const remainder = minutes % 15;
  if (remainder !== 0) {
    current.setMinutes(minutes + (15 - remainder));
  }

  const times = [];
  while (current <= adjustedCloseTime && times.length < 50) {
    let h = current.getHours();
    let m = current.getMinutes();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h || 12;
    m = m < 10 ? "0" + m : m;
    times.push(`${h}:${m} ${ampm}`);
    current = new Date(current.getTime() + 15 * 60000);
  }
  return times;
}

function findNextAvailableSlot() {
  const dayLabels = getAvailableDays(14);
  for (const dayLabel of dayLabels) {
    const times = getDynamicTimes(dayLabel);
    if (times && times.length > 0) {
      return { day: dayLabel, time: times[0] };
    }
  }
  return null;
}

const DEFAULT_STATE = {
  menuScrollPosition: 0,
  fulfillmentMode: null,
  orderTime: "ASAP",
  locationFilter: "Near Me",
  locationSearchQuery: "",
  locationSearchFocused: false,
  locationLabels: {},
  selectedDay: "Today",
  // Plain "now + 20 min" placeholder only — no store is selected yet at this
  // point (mockupState itself doesn't exist yet either, since this object is
  // what builds it), so there's no real store hours to look up regardless.
  // getStoreTimesForDay()/getEstimatedPickupTime() correctly recompute this
  // with the real, per-store pickup lead time the moment a location is
  // actually selected — see selectLocation() and the app's startup logic.
  selectedTimeSlot: (() => {
    const t = new Date(Date.now() + 20 * 60000);
    let h = t.getHours();
    let m = t.getMinutes();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    m = m < 10 ? "0" + m : m;
    return `${h}:${m} ${ampm}`;
  })(),
  sugarLevel: "50%",
  itemQuantity: 1,
  cartItemCount: 0,
  bagQuantity: 0,
  noBagsSelected: false,
  bagMenuItem: null, // { menuItemId, price } for the real "Bag" item at this location, or null if it doesn't sell bags
  selectedLocationPhone: null, // real phone number for the currently selected location, from the API
  locationsLoading: false, // true while fetchLocations() is in flight
  locationsAuthRequired: false, // true if the last fetchLocations() attempt failed specifically because it requires login (401)
  locationsLoadError: false, // true if the last fetchLocations() attempt failed for any other reason (network, 5xx, etc.)
  menuItemsLoadError: false, // true if the last fetchMenuAndItems() attempt failed to load the current location's menu
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
  _customizeModifyTypes: {}, // { [defaultMenuSubItemId]: { removed: bool, sub: { menuSubItemId, name, price } | null } } — one independent slot per default/included ingredient
  locationsOrderingStatus: null,
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

// Resolves the store for the customer's most recent order, from real API
// data only. Returns null if there's no previous order, or its store can't
// be matched against the real locations list yet — callers must handle that
// honestly (e.g. hide the "Order here again" card), never by substituting a
// default store.
function getPreviousOrderLocation() {
  let lastOrder = mockupState.lastOrder;
  if (!lastOrder && mockupState.apiOrders && mockupState.apiOrders.length > 0) {
    lastOrder = mockupState.apiOrders[0];
  }
  if (!lastOrder) return null;

  const found = getSelectedLocationInfo(lastOrder.locationId);
  if (found) {
    return {
      locationId: found.locationId,
      name: found.name,
      address: found.address,
      dist: found.dist || null,
    };
  }

  // locationId didn't resolve (e.g. real locations haven't loaded yet, or
  // this is older cached order data without one) — fall back to matching
  // the order's own store name against the real locations list.
  if (lastOrder.locationName && mockupState.apiLocations) {
    const cleanName = lastOrder.locationName.toLowerCase().replace(/i-tea/gi, "").trim();
    const byName = mockupState.apiLocations.find(
      (l) => l.name.toLowerCase().includes(cleanName) || cleanName.includes(l.name.toLowerCase()),
    );
    if (byName) {
      return {
        locationId: byName.locationId,
        name: byName.name,
        address: byName.address,
        dist: byName.dist || null,
      };
    }
  }

  return null;
}
window.getPreviousOrderLocation = getPreviousOrderLocation;

function loadMockupState() {
  try {
    const sessionRaw = sessionStorage.getItem(STORAGE_KEYS.state);
    const saved = JSON.parse(
      sessionRaw || localStorage.getItem(STORAGE_KEYS.state) || "null",
    );
    const state = saved ? { ...DEFAULT_STATE, ...saved } : { ...DEFAULT_STATE };
    state.locationSearchQuery = "";
    state.locationSearchFocused = false;

    // Location + order type are scoped to this browser session. If nothing was
    // found in sessionStorage, this is a fresh tab/session picking up the old
    // localStorage fallback — don't carry a stale store/order-type into it.
    if (!sessionRaw) {
      state.selectedLocationId = DEFAULT_STATE.selectedLocationId;
      state.selectedLocation = null;
      state.selectedAddress = null;
      state.selectedDistance = null;
      state.fulfillmentMode = DEFAULT_STATE.fulfillmentMode;
      state.orderTime = DEFAULT_STATE.orderTime;
    }

    // Load menu favorites from localStorage
    const savedMenuFavs = JSON.parse(
      localStorage.getItem("farebites_menu_favorites") || "null"
    );
    if (savedMenuFavs) {
      state.favorites = savedMenuFavs;
    } else if (state.favorites && state.favorites.length > 0) {
      localStorage.setItem(
        "farebites_menu_favorites",
        JSON.stringify(state.favorites)
      );
    }

    // Apply saved favorites to state.apiLocations if it was loaded from sessionStorage
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

window.toggleCartEditSection = function (section) {
  if (mockupState.cartEditSection === section) {
    mockupState.cartEditSection = null;
  } else {
    mockupState.cartEditSection = section;
  }
  navigateTo("cart");
};

function syncCartToStorage() {
  const email = mockupState.userEmail || mockupState.userProfile?.email;
  const cartKey = mockupState.isLoggedIn && email ? `farebites_cart_${email.toLowerCase()}` : "farebites_guest_cart";
  const cartData = {
    cart: mockupState.cart || [],
    cartItemCount: mockupState.cartItemCount || 0,
    bagQuantity: mockupState.bagQuantity || 0,
    noBagsSelected: mockupState.noBagsSelected || false,
  };
  localStorage.setItem(cartKey, JSON.stringify(cartData));
}

function areSubItemsEqual(subItems1, subItems2) {
  const arr1 = Array.isArray(subItems1) ? subItems1 : [];
  const arr2 = Array.isArray(subItems2) ? subItems2 : [];

  const normalizeSub = (s) => {
    if (!s) return "";
    if (typeof s === "string") return s.trim().toLowerCase();
    const name = (s.name || s.menuSubItemName || s.title || "").trim().toLowerCase();
    if (!name) return "";
    const qty = s.quantity || 1;
    return `${name}:${qty}`;
  };

  const set1 = arr1.map(normalizeSub).filter(Boolean).sort();
  const set2 = arr2.map(normalizeSub).filter(Boolean).sort();

  if (set1.length !== set2.length) return false;
  return set1.every((val, index) => val === set2[index]);
}

function consolidateCartItems() {
  if (!mockupState.cart || !Array.isArray(mockupState.cart) || mockupState.cart.length === 0) {
    if (mockupState.cart && Array.isArray(mockupState.cart)) {
      mockupState.cartItemCount = 0;
    }
    return;
  }

  const consolidated = [];
  mockupState.cart.forEach((newItem) => {
    const newName = (newItem.name || "").trim().toLowerCase();
    const newInstruction = (newItem.specialInstruction || "").trim().toLowerCase();
    const newId = newItem.menuItemId;

    const existing = consolidated.find((item) => {
      const existingName = (item.name || "").trim().toLowerCase();
      const existingInstruction = (item.specialInstruction || "").trim().toLowerCase();
      const existingId = item.menuItemId;

      const nameOrIdMatch =
        (newId && existingId && String(newId) === String(existingId)) ||
        (newName && existingName && newName === existingName);
      if (!nameOrIdMatch) return false;

      if (newInstruction !== existingInstruction) return false;

      return areSubItemsEqual(newItem.selectedSubItems, item.selectedSubItems);
    });

    if (existing) {
      existing.quantity += newItem.quantity || 1;
      if (!existing.image && newItem.image) {
        existing.image = newItem.image;
      }
      if ((!existing.unitPrice || existing.unitPrice === 0) && newItem.unitPrice > 0) {
        existing.unitPrice = newItem.unitPrice;
        existing.basePrice = newItem.basePrice;
      }
    } else {
      consolidated.push({ ...newItem, quantity: newItem.quantity || 1 });
    }
  });

  mockupState.cart = consolidated;
  mockupState.cartItemCount = mockupState.cart.reduce(
    (sum, i) => sum + (i.quantity || 1),
    0,
  );
}

function addOrMergeCartItem(newItem) {
  if (!mockupState.cart || !Array.isArray(mockupState.cart)) {
    mockupState.cart = [];
  }

  mockupState.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
  consolidateCartItems();
}

function loadCartFromStorage() {
  const email = mockupState.userEmail || mockupState.userProfile?.email;
  const cartKey = mockupState.isLoggedIn && email ? `farebites_cart_${email.toLowerCase()}` : "farebites_guest_cart";
  const saved = localStorage.getItem(cartKey);
  if (saved) {
    try {
      const cartData = JSON.parse(saved);
      mockupState.cart = cartData.cart || [];
      consolidateCartItems();
      if (mockupState.cart.length === 0) {
        mockupState.bagQuantity = 0;
        mockupState.noBagsSelected = false;
      } else {
        mockupState.bagQuantity = cartData.bagQuantity || 0;
        mockupState.noBagsSelected = cartData.noBagsSelected || false;
      }
    } catch (e) {
      console.error("Failed to parse saved cart", e);
    }
  } else {
    mockupState.cart = [];
    mockupState.cartItemCount = 0;
    mockupState.bagQuantity = 0;
    mockupState.noBagsSelected = false;
  }
}

// Folds whatever a guest built up under "farebites_guest_cart" into the
// now-authenticated user's own cart key, so signing in at the checkout wall
// doesn't silently drop their order. Must run before loadCartFromStorage()
// reads the user's key, and clears the guest key so it isn't re-merged on a
// later guest session.
function migrateGuestCartToUser(email) {
  if (!email) return;
  const guestRaw = localStorage.getItem("farebites_guest_cart");
  if (!guestRaw) return;

  try {
    const guestData = JSON.parse(guestRaw);
    const guestCart = guestData.cart || [];
    if (guestCart.length === 0) {
      localStorage.removeItem("farebites_guest_cart");
      return;
    }

    const userKey = `farebites_cart_${email.toLowerCase()}`;
    const existingRaw = localStorage.getItem(userKey);
    const existingData = existingRaw ? JSON.parse(existingRaw) : {};
    const mergedCart = [...(existingData.cart || []), ...guestCart];

    localStorage.setItem(userKey, JSON.stringify({
      cart: mergedCart,
      cartItemCount: mergedCart.reduce((sum, i) => sum + (i.quantity || 1), 0),
      bagQuantity: guestData.bagQuantity || existingData.bagQuantity || 0,
      noBagsSelected: guestData.noBagsSelected || existingData.noBagsSelected || false,
    }));
    localStorage.removeItem("farebites_guest_cart");
  } catch (e) {
    console.error("Failed to migrate guest cart", e);
  }
}

function persistAllState() {
  const stateJson = JSON.stringify(mockupState);
  sessionStorage.setItem(STORAGE_KEYS.state, stateJson);
  localStorage.setItem(STORAGE_KEYS.state, stateJson);
  syncCartToStorage();

  // Also persist location favorites and labels to localStorage
  const favsMap = {};
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

function getEnabledLocations() {
  // No more silent fallback to the hardcoded LOCATIONS list — if real data
  // isn't loaded yet, the UI is responsible for showing why (loading /
  // sign-in required / error), not for quietly substituting fake stores.
  // Return ALL real locations — closed ones are shown with a "Closed" badge
  // instead of being filtered out.
  return mockupState.apiLocations || [];
}

// Renders the reason the location list is empty, when that reason isn't
// "your search/filter didn't match anything" (which the caller already
// handles). Returns null if there's no real data yet AND no known reason —
// callers should fall back to a generic empty message in that case.
function renderLocationsStatusState() {
  if (mockupState.locationsLoading) {
    return `
      <div class="space-y-3 my-4">
        ${[1, 2, 3]
          .map(
            () => `
          <div class="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm animate-pulse">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
              <div class="flex-1 min-w-0">
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-2.5 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
            <div class="h-2.5 bg-gray-100 rounded w-full mb-2"></div>
            <div class="h-2.5 bg-gray-100 rounded w-4/5"></div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  }
  if (mockupState.locationsAuthRequired) {
    return `
      <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-4">
          <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-3">
              <i class="fa-solid fa-right-to-bracket text-xl"></i>
          </div>
          <h3 class="text-sm font-black text-gray-800 uppercase tracking-wide mb-1">Sign In to See Locations</h3>
          <p class="text-xs text-gray-500 mb-4">Viewing available stores currently requires an account.</p>
          <button onclick="navigateTo('sign-in')" class="px-5 py-2.5 bg-violet-600 text-white rounded-full text-xs font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Sign In</button>
      </div>
    `;
  }
  if (mockupState.locationsLoadError) {
    return `
      <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-4">
          <div class="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-3">
              <i class="fa-solid fa-triangle-exclamation text-xl"></i>
          </div>
          <h3 class="text-sm font-black text-gray-800 uppercase tracking-wide mb-1">Couldn't Load Locations</h3>
          <p class="text-xs text-gray-500 mb-4">Something went wrong on our end. Please try again.</p>
          <button onclick="fetchLocations().then(() => navigateTo(currentPage))" class="px-5 py-2.5 bg-violet-600 text-white rounded-full text-xs font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Try Again</button>
      </div>
    `;
  }
  return null;
}

// Full-page state for landing on the customize screen with no real item
// selected (e.g. a direct link, a stale back-button state) — previously
// silently defaulted to showing a specific fake drink instead.
function renderNoItemSelectedState() {
  return `
    <div class="flex flex-col h-full bg-[#f6f6f6]">
        <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0">
            <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                <i class="fa-solid fa-arrow-left text-xl"></i>
            </button>
            <span class="text-lg font-black text-violet-600 flex-1 text-center mr-10">Customize</span>
        </header>
        <div class="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <i class="fa-solid fa-circle-question text-2xl"></i>
            </div>
            <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">No Item Selected</h2>
            <p class="text-sm text-gray-500 mb-6 max-w-xs">Please choose an item from the menu to customize.</p>
            <button onclick="navigateTo('menu')" class="px-6 py-3 bg-violet-600 text-white rounded-full text-sm font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Back to Menu</button>
        </div>
    </div>
  `;
}

// Resolves a location's real info by ID, from real API data only — no
// fallback to the hardcoded LOCATIONS list or a default "Tempe" store.
// Returns null if the real location list hasn't loaded yet, or doesn't
// contain this location; callers must handle that honestly (e.g. "Store
// info unavailable"), never by substituting fake data.
function getSelectedLocationInfo(locationId = mockupState.selectedLocationId) {
  if (locationId == null || !mockupState.apiLocations) return null;
  return (
    mockupState.apiLocations.find(
      (loc) => Number(loc.locationId) === Number(locationId),
    ) || null
  );
}

// If we don't already have the customer's most recent order cached, fetch it
// once from the real order-history endpoint. Shared by every page that shows
// "your order" (confirmation, status, tracking) so there's one fetch path,
// not three.
function ensureLastOrderLoaded() {
  if (
    !mockupState.lastOrder &&
    window.ApiService &&
    window.ApiService.getToken() &&
    !window._fetchingLastOrder
  ) {
    window._fetchingLastOrder = true;
    setTimeout(() => {
      window.ApiService.getOrders(1, 1)
        .then((res) => {
          window._fetchingLastOrder = false;
          if (res && res.length > 0) {
            mockupState.lastOrder = res[0];
            persistAllState();
            renderPage();
          }
        })
        .catch(() => {
          window._fetchingLastOrder = false;
        });
    }, 100);
  }
}

// The real, itemized "what you ordered and what you paid" card — real items,
// real customizations, real fees, real payment. Used by order-confirm,
// order-status, and track-order so there's exactly one place that knows how
// to turn a real order object into this card, instead of three copies that
// can drift (or three copies of made-up data).
function renderOrderDetailsCard(order, locationName) {
  const orderItems = order.orderMenuItems || order.orderItems || [];
  const itemCount = orderItems.reduce((sum, i) => sum + (i.quantity || 1), 0);
  const orderSubtotal = (order.subTotal || order.subtotal || 0).toFixed(2);
  const orderTaxes = (order.salesTax || order.taxes || 0).toFixed(2);
  const orderTip = (order.tipApplied || order.tipAmount || 0).toFixed(2);
  const convenienceFee = order.convenienceFeeCharged || order.convenienceFee || 0;
  const orderTotal = (order.total || 0).toFixed(2);

  const pmt = order.pmtInfo;
  const pmtLabel = pmt
    ? `${pmt.creditCardType || pmt.pmtType || "Card"}${pmt.truncCreditNum ? ` ending in ${pmt.truncCreditNum}` : ""}`
    : "Payment on file";
  const pmtDateStr = pmt?.pmtDate || order.orderDate || order.placedAt;
  const pmtDate = pmtDateStr
    ? new Date(pmtDateStr).toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  return `
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
                const subs = item.selectedSubItems || item.orderMenuSubItems || [];
                const customSummary =
                  subs
                    .map((s) => (s.quantity > 1 ? `${s.name} x${s.quantity}` : s.name))
                    .join(" • ") || "Standard";
                const qty = item.quantity || 1;
                const unitPrice = item.unitPrice ?? item.paidPrice ?? 0;
                const itemTotal = (unitPrice * qty).toFixed(2);
                return `
                <div class="flex gap-4">
                    <div class="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shadow-sm shrink-0 border border-gray-100">
                        <img src="${item.image || "images/no-product-pic.png"}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h4 class="text-sm font-black text-gray-900 leading-tight uppercase">${qty} × ${item.name}</h4>
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
              convenienceFee > 0
                ? `<div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                <span>Convenience Fee</span>
                <span>$${convenienceFee.toFixed(2)}</span>
            </div>`
                : ""
            }
            <div class="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                <span>Tip</span>
                <span>$${orderTip}</span>
            </div>
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
                        <p class="text-sm font-black text-gray-900 uppercase tracking-tight">${pmtLabel}</p>
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">${pmtDate}</p>
                    </div>
                </div>
                <span class="text-base font-black text-gray-900">$${orderTotal}</span>
            </div>
        </div>
    </div>
  `;
}

// An honest kitchen-status view built only from real timestamps the backend
// actually gives us. There's no live "it's ready now" signal in this API, so
// — same as most pickup-only ordering platforms without a live kitchen
// display feed — the last step is a real estimate, never a claimed fact.
function formatOrderTime(d) {
  return new Date(d).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

// The one real "when will this be ready" estimate, shared by the status
// timeline and the quick pick-up-time stat card. Never a live/exact
// guarantee — this API has no real-time "it's ready" signal — just the best
// honest estimate from real timestamps, in the same spirit as how pickup
// orders are shown on major platforms when there's no live kitchen feed.
function getOrderReadyEstimate(order) {
  const acceptedAt = order.deliverectOrderAcceptedDate;
  const prepMinutes = order.deliverectOrderPrepTime;

  if (order.isCustomTime && order.pickupTime) {
    return { label: `Ready around ${formatOrderTime(order.pickupTime)}`, time: new Date(order.pickupTime) };
  }
  if (acceptedAt && prepMinutes) {
    const estReady = new Date(new Date(acceptedAt).getTime() + prepMinutes * 60000);
    return { label: `Estimated ready around ${formatOrderTime(estReady)}`, time: estReady };
  }
  return { label: "We'll have it ready soon", time: null };
}

function renderOrderStatusTimeline(order) {
  if (order.isCanceled) {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
          <div class="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3">
              <i class="fa-solid fa-xmark text-xl"></i>
          </div>
          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tighter mb-1">Order Canceled</h2>
          <p class="text-sm font-bold text-gray-500">This order was canceled and won't be prepared.</p>
      </div>
    `;
  }

  const placedAt = order.orderDate || order.placedAt;
  const acceptedAt = order.deliverectOrderAcceptedDate;
  const fmt = formatOrderTime;
  const readyLabel = getOrderReadyEstimate(order).label;

  const steps = [
    {
      label: "Order Placed",
      time: placedAt ? fmt(placedAt) : "",
      done: !!placedAt,
      icon: "fa-check",
    },
    {
      label: acceptedAt ? "Confirmed by the Restaurant" : "Waiting for Confirmation",
      time: acceptedAt ? fmt(acceptedAt) : "The restaurant hasn't confirmed this order yet",
      done: !!acceptedAt,
      icon: acceptedAt ? "fa-check" : "fa-fire-burner",
    },
    {
      label: "Ready for Pickup",
      time: readyLabel,
      done: false,
      icon: "fa-bag-shopping",
    },
  ];

  const activeIdx = steps.findIndex((s) => !s.done);

  return `
    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
        <div class="absolute left-[39px] top-10 bottom-10 w-0.5 bg-gray-200 z-0"></div>
        <div class="space-y-8 relative z-10">
            ${steps
              .map((s, i) => {
                const isActive = i === activeIdx;
                const isPending = activeIdx !== -1 && i > activeIdx;
                const circleClass = s.done
                  ? "bg-green-50 text-green-600"
                  : isActive
                  ? "bg-red-600 text-white ring-4 ring-red-100"
                  : "bg-gray-200 text-gray-400 border-2 border-white";
                return `
                <div class="flex gap-4 items-center${isPending ? " opacity-40" : s.done ? " opacity-50" : ""}">
                    <div class="w-10 h-10 rounded-full ${circleClass} flex items-center justify-center shrink-0 shadow-md">
                        <i class="fa-solid ${s.icon}"></i>
                    </div>
                    <div>
                        <h3 class="font-black ${isActive ? "text-red-600" : "text-gray-900"} uppercase tracking-tight text-sm">${s.label}</h3>
                        <p class="text-xs text-gray-500 font-medium">${s.time}</p>
                    </div>
                </div>`;
              })
              .join("")}
        </div>
    </div>
  `;
}

// Honest empty state for order-status / track-order when there's genuinely
// no order to show yet (fresh visitor, still loading, or fetch failed) —
// never falls back to a fake sample order.
function renderNoOrderState(title) {
  return `
    <div class="flex flex-col h-full bg-[#f6f6f6]">
        <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0">
            <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4">
                <i class="fa-solid fa-arrow-left text-xl"></i>
            </button>
            <span class="text-lg font-black text-violet-600 flex-1 text-center mr-10">${title}</span>
        </header>
        <div class="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <i class="fa-solid fa-receipt text-2xl"></i>
            </div>
            <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">No Recent Order</h2>
            <p class="text-sm text-gray-500 mb-6 max-w-xs">Once you place an order, you'll be able to track it here.</p>
            <button onclick="navigateTo('menu')" class="px-6 py-3 bg-violet-600 text-white rounded-full text-sm font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Browse Menu</button>
        </div>
    </div>
  `;
}

// Real per-location hours + open/closed status, from the public (no login
// required) hours endpoints. Shared by both the bulk-list path and the
// public-fallback path below, so the two never compute this differently.
async function fetchLocationHoursInfo(locationId) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayDay = days[new Date().getDay()];
  let hoursStr = "Hours unavailable";
  let hData = null;
  let holData = null;

  try {
    const [hRes, holRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/RestaurantMenu/location/${locationId}/hours`),
      fetch(`${API_BASE_URL}/api/RestaurantMenu/location/${locationId}/hours-with-holidays`),
    ]);

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
    if (holData && holData.holidayHours && Array.isArray(holData.holidayHours)) {
      const holiday = holData.holidayHours.find((h) => h.date && h.date.startsWith(todayStr));
      if (holiday) {
        isHoliday = true;
        if (holiday.isClosed) {
          hoursStr = "Closed today";
        } else if (holiday.schedules && holiday.schedules.length > 0) {
          const s = holiday.schedules[0];
          if (s.startTime && s.endTime) {
            hoursStr = `${s.startTime} to ${s.endTime}`;
          }
        } else {
          hoursStr = "Closed today";
        }
      }
    }

    if (!isHoliday && hData && hData.businessHours && hData.businessHours[todayDay]) {
      const todayH = hData.businessHours[todayDay];
      if (todayH.isClosed) {
        hoursStr = "Closed today";
      } else if (todayH.startTime && todayH.endTime) {
        hoursStr = `${todayH.startTime} to ${todayH.endTime}`;
      }
    }
  } catch (e) {
    console.warn(`Could not fetch hours for loc ${locationId}`);
  }

  // Compute open status from the actual business hours schedule, ignoring
  // the API's unreliable isOpen flag.
  let isOpen = false;
  let allowOrdering = false;
  if (hData && hData.businessHours && hData.businessHours[todayDay]) {
    const todayH = hData.businessHours[todayDay];
    if (!todayH.isClosed && todayH.startTime && todayH.endTime) {
      const parseTime = (t) => {
        const [time, period] = t.split(" ");
        let [h, m] = time.split(":").map(Number);
        if (period === "PM" && h !== 12) h += 12;
        if (period === "AM" && h === 12) h = 0;
        return h * 60 + m;
      };
      const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
      const openMinutes = parseTime(todayH.startTime);
      const closeMinutes = parseTime(todayH.endTime);
      isOpen = nowMinutes >= openMinutes && nowMinutes < closeMinutes;
      allowOrdering = isOpen || hData.allowOrderWhileClosed === true;
    }
  } else if (hData) {
    isOpen = hData.isOpen === true;
    allowOrdering = isOpen || hData.allowOrderWhileClosed === true;
  }
  if (hoursStr === "Closed today") {
    isOpen = false;
    allowOrdering = false;
  }

  return { hoursStr, isOpen, allowOrdering, businessHours: hData ? hData.businessHours : null, holidayHours: holData ? holData.holidayHours : null };
}

// The bulk store list (GET /api/Locations) requires a login level that a
// normal customer account doesn't have — confirmed directly against a real,
// fully authenticated account, not just guests (see finding #21). Rather
// than gate the whole locations page behind a backend permission that may
// never open up for customers, build the real list ourselves from the
// public per-location endpoint (name, phone, open status — no login
// needed) plus the real addresses already verified for these known real
// stores (see REAL_LOCATION_ADDRESSES). Same basic idea as how the current
// live site handles this: a small, stable list of real physical stores
// doesn't need a live gated lookup to be shown honestly.
async function fetchLocationsPublicFallback() {
  const ids = Object.keys(REAL_LOCATION_COORDINATES).map(Number);
  const results = await Promise.all(
    ids.map(async (locationId) => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/RestaurantMenu/location/${locationId}`);
        if (!res.ok) return null;
        const loc = await res.json();
        if (loc.isEnabled === false) return null;

        const hoursInfo = await fetchLocationHoursInfo(locationId);
        const coords = REAL_LOCATION_COORDINATES[locationId];
        const addr = REAL_LOCATION_ADDRESSES[locationId];

        return {
          locationId,
          name: loc.locationName || "Unnamed Location",
          address: addr ? addr.full : "Address unavailable",
          phone: loc.phone || null,
          dist: null,
          fav: false,
          hours: hoursInfo.hoursStr,
          isOpen: hoursInfo.isOpen,
          allowOrdering: hoursInfo.allowOrdering,
          businessHours: hoursInfo.businessHours,
          holidayHours: hoursInfo.holidayHours,
          lat: coords?.lat ?? null,
          lng: coords?.lng ?? null,
        };
      } catch (e) {
        console.warn(`Could not fetch public info for loc ${locationId}`, e);
        return null;
      }
    }),
  );
  return results.filter(Boolean);
}

async function fetchLocations() {
  mockupState.locationsLoading = true;
  persistAllState();
  try {
    const headers = {};
    if (window.ApiService && typeof window.ApiService.getToken === "function") {
      const token = window.ApiService.getToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }
    const response = await fetch(`${API_BASE_URL}/api/Locations`, { headers });
    if (!response.ok) {
      if (response.status === 401) {
        // The bulk list needs a login level a normal customer doesn't have
        // (see #21) — fall back to the real, public-endpoint-built list
        // instead of gating the whole page on a permission that may never
        // open up for customers.
        const fallbackLocs = await fetchLocationsPublicFallback();
        if (fallbackLocs.length > 0) {
          mockupState.apiLocations = fallbackLocs;
          mockupState.locationsAuthRequired = false;
          mockupState.locationsLoadError = false;
          persistAllState();
          if (currentPage === "locations") renderPage();
          return;
        }
        // Only show the "sign in" gate if even the public fallback failed.
        mockupState.locationsAuthRequired = true;
        mockupState.locationsLoadError = false;
      } else {
        mockupState.locationsLoadError = true;
        mockupState.locationsAuthRequired = false;
      }
      throw new Error(`Locations request failed with status ${response.status}`);
    }
    const data = await response.json();
    // A real response means the endpoint is reachable and we're authorized —
    // clear both failure flags regardless of how many locations came back.
    mockupState.locationsAuthRequired = false;
    mockupState.locationsLoadError = false;
    if (data && data.length > 0) {
      // Filter to include only i-Tea locations
      const iteaLocations = data.filter(
        (loc) =>
          loc.locationName &&
          (loc.locationName.toLowerCase().includes("i-tea") ||
            loc.locationName.toLowerCase().includes("itea")),
      );
      if (iteaLocations.length > 0) {
        const mappedLocs = await Promise.all(
          iteaLocations.map(async (loc) => {
            const realCoords = REAL_LOCATION_COORDINATES[loc.locationId];
            const hoursInfo = await fetchLocationHoursInfo(loc.locationId);

            return {
              locationId: loc.locationId,
              name: loc.locationName || "Unnamed Location",
              address:
                `${loc.address || ""}, ${loc.city || ""}, ${loc.state || ""} ${loc.zipCode || ""}`
                  .trim()
                  .replace(/^,|,$/g, "")
                  .trim(),
              dist: null,
              fav: false,
              hours: hoursInfo.hoursStr,
              isOpen: hoursInfo.isOpen,
              allowOrdering: hoursInfo.allowOrdering,
              businessHours: hoursInfo.businessHours,
              holidayHours: hoursInfo.holidayHours,
              lat: loc.latitude ?? realCoords?.lat ?? null,
              lng: loc.longitude ?? realCoords?.lng ?? null,
            };
          }),
        );

        mockupState.apiLocations = mappedLocs;
        persistAllState();
        if (currentPage === "locations") renderPage();
      }
    }
  } catch (error) {
    console.error("Failed to fetch locations from API:", error);
    // A network-level failure (as opposed to an HTTP status we already
    // handled above) is a genuine error, not an auth gate.
    if (!mockupState.locationsAuthRequired) {
      mockupState.locationsLoadError = true;
    }
  } finally {
    mockupState.locationsLoading = false;
    persistAllState();
  }
}

// Helper: compute isOpen from a businessHours schedule object
function computeIsOpenFromSchedule(businessHours) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const todayDay = days[new Date().getDay()];
  const todayH = businessHours && businessHours[todayDay];
  if (!todayH || todayH.isClosed || !todayH.startTime || !todayH.endTime) return false;
  const parseTime = (t) => {
    const [time, period] = t.split(' ');
    let [h, m] = time.split(':').map(Number);
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return h * 60 + m;
  };
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  return nowMinutes >= parseTime(todayH.startTime) && nowMinutes < parseTime(todayH.endTime);
}

async function fetchLocationsOrderingStatus() {
  const list = getEnabledLocations();
  const uniqueIds = [...new Set(list.map(l => l.locationId))];
  const statuses = {};
  await Promise.all(
    uniqueIds.map(async (id) => {
      try {
        // Fetch hours to compute open status from the actual schedule
        const [menuRes, hoursRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/RestaurantMenu/location/${id}/menu`),
          fetch(`${API_BASE_URL}/api/RestaurantMenu/location/${id}/hours`),
        ]);

        let allowOrderWhileClosed = false;
        let computedIsOpen = false;

        if (hoursRes.ok) {
          const hoursData = await hoursRes.json();
          computedIsOpen = computeIsOpenFromSchedule(hoursData.businessHours);
          allowOrderWhileClosed = hoursData.allowOrderWhileClosed === true;

          // Also update hours text on the location object
          const locObj = list.find(l => l.locationId === id);
          if (locObj && hoursData.businessHours) {
            const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const todayDay = days[new Date().getDay()];
            const todayH = hoursData.businessHours[todayDay];
            if (todayH && !todayH.isClosed && todayH.startTime && todayH.endTime) {
              locObj.hours = `${todayH.startTime} to ${todayH.endTime}`;
            } else if (todayH && todayH.isClosed) {
              locObj.hours = "Closed today";
            }
          }
        } else if (menuRes.ok) {
          // Fallback: trust API flag if no hours endpoint
          const menu = await menuRes.json();
          computedIsOpen = menu.isOpen === true;
          allowOrderWhileClosed = false;
        }

        let allowOrdering = computedIsOpen || allowOrderWhileClosed;

        statuses[id] = { allowOrdering, isOpen: computedIsOpen };

        // Update location object
        const locObj = list.find(l => l.locationId === id);
        if (locObj) {
          locObj.allowOrdering = allowOrdering;
          locObj.isOpen = computedIsOpen;
        }
      } catch (err) {
        console.error(`Failed to fetch status for location ${id}:`, err);
        statuses[id] = { allowOrdering: false, isOpen: false };
      }
    })
  );
  mockupState.locationsOrderingStatus = statuses;
  persistAllState();
  // Re-render the locations page if open so status badges update
  if (currentPage === "locations") renderPage();
}

async function fetchLocationPhone(locationId) {
  // The bulk /api/Locations list requires a login and 401s for guests, but
  // this single-location endpoint is public and returns a real phone number
  // per location — use it instead of a hardcoded "contact us" number.
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/RestaurantMenu/location/${locationId}`,
    );
    if (!response.ok) throw new Error("Location response was not ok");
    const data = await response.json();
    mockupState.selectedLocationPhone = data?.phone || null;
  } catch (error) {
    console.error(`Failed to fetch phone for location ${locationId}:`, error);
    mockupState.selectedLocationPhone = null;
  }
  persistAllState();
}

async function fetchMenuAndItems(locationId) {
  if (!locationId) return;
  mockupState.isLoading = true;
  persistAllState();
  fetchLocationPhone(locationId);
  try {
    const menuResponse = await fetch(
      `${API_BASE_URL}/api/RestaurantMenu/location/${locationId}/menu`,
    );
    if (!menuResponse.ok) throw new Error("Menu response was not ok");
    const menuData = await menuResponse.json();
    // A real response means this location's menu is reachable — clear the
    // error flag regardless of whether it happens to have any categories.
    mockupState.menuItemsLoadError = false;

    if (menuData && menuData.categories) {
      // Store location-specific pricing info
      if (menuData.taxRate != null)
        mockupState.locationTaxRate = menuData.taxRate;
      if (menuData.convenienceFee != null)
        mockupState.locationConvenienceFee = menuData.convenienceFee;

      const bagCategory = menuData.categories.find((cat) => {
        const name = (cat.name || "").toLowerCase().trim();
        return name === "bag" || name === "bags";
      });
      const filteredCategories = menuData.categories.filter(
        (cat) => cat !== bagCategory,
      );
      mockupState.apiCategories = filteredCategories.map((cat) => ({
        categoryId: cat.categoryId,
        name: cat.name,
        imgUrl: resolveImageUrl(cat.imgUrl, getFallbackCategoryImg()),
      }));

      // The real bag fee is just an ordinary menu item (usually hidden in an
      // inactive "Bag" category) rather than a flat rate — look it up per
      // location instead of guessing a dollar amount. Locations that don't
      // sell bags (no such category) simply have no bag fee.
      mockupState.bagMenuItem = null;
      if (bagCategory) {
        try {
          const bagItemsResponse = await fetch(
            `${API_BASE_URL}/api/RestaurantMenu/location/${locationId}/category/${bagCategory.categoryId}/items`,
          );
          if (bagItemsResponse.ok) {
            const bagItemsData = await bagItemsResponse.json();
            const bagItem = (bagItemsData || []).find(
              (item) => item.isAvailable !== false,
            );
            if (bagItem) {
              mockupState.bagMenuItem = {
                menuItemId: bagItem.menuItemId,
                price: bagItem.price || 0,
              };
            }
          }
        } catch (bagError) {
          console.error("Failed to fetch bag item for location:", bagError);
        }
      }

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
                  isAvailable: item.isAvailable !== false,
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
    mockupState.menuItemsLoadError = true;
  } finally {
    mockupState.isLoading = false;
    persistAllState();
    renderPage();
  }
}

function getActiveCategories() {
  // No more silent fallback to a hardcoded 14-category list — same reasoning
  // as getActiveMenuItems(). This also resolves finding #19, which was this
  // exact fallback pattern applied to categories specifically.
  if (!mockupState.apiCategories) return [];
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

function getActiveMenuItems() {
  // No more silent fallback to the hardcoded MENU_ITEMS list — if the real
  // menu isn't loaded yet, the UI shows why (loading skeleton / error state),
  // not a substitute menu that isn't actually this location's.
  if (!mockupState.apiMenuItems) return [];
  return mockupState.apiMenuItems.filter((item) => {
    const cat = (item.category || "").toLowerCase().trim();
    const name = (item.name || "").toLowerCase().trim();
    return (
      cat !== "bag" && cat !== "bags" && name !== "bag" && name !== "bags"
    );
  });
}

function findItemInCurrentMenu(item) {
  const rawId = item.menuItemId || item.MenuItemId || item.id || item.Id;
  const normalizeStr = (str) => {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
  };
  const rawName = normalizeStr(item.name || item.Name || item.menuItemName || item.MenuItemName);

  if (!mockupState.apiMenuItems || mockupState.apiMenuItems.length === 0) {
    return null;
  }

  return (
    mockupState.apiMenuItems.find((mi) => {
      const miId = mi.id || mi.menuItemId;
      const miName = normalizeStr(mi.name);
      if (rawId && miId && String(rawId) === String(miId)) {
        return true;
      }
      if (rawName && miName === rawName) {
        return true;
      }
      if (rawName && miName && (miName.includes(rawName) || rawName.includes(miName))) {
        return true;
      }
      return false;
    }) || null
  );
}

function isItemAvailableAtCurrentLocation(item) {
  if (!mockupState.apiMenuItems || mockupState.apiMenuItems.length === 0) {
    return true;
  }
  return !!findItemInCurrentMenu(item);
}
window.isItemAvailableAtCurrentLocation = isItemAvailableAtCurrentLocation;

// A flat isAvailable:false from the API means "temporarily out of stock" \u2014
// the item still belongs on the menu, it just can't be ordered right now.
// Items rendered straight from apiMenuItems already carry the flag; cart/
// reorder-modal entries are point-in-time snapshots, so they re-check the
// live menu instead of trusting a possibly-stale copy.
function isItemOutOfStock(item) {
  return !!(item && item.isAvailable === false);
}
window.isItemOutOfStock = isItemOutOfStock;

function isItemInStock(item) {
  const found = findItemInCurrentMenu(item);
  if (!found) return true;
  return found.isAvailable !== false;
}
window.isItemInStock = isItemInStock;

function renderOutOfStockOverlay() {
  return `<div class="absolute inset-0 bg-white/55 z-[6] pointer-events-none"></div>`;
}
window.renderOutOfStockOverlay = renderOutOfStockOverlay;


function toggleMenu(e, menuId) {
  e.stopPropagation();
  const allMenus = [
    "dropdown-menu-fb",
    "dropdown-menu-rb",
    "all-pages-dropdown",
    "user-profile-dropdown",
    "location-dropdown-order-details",
    "location-dropdown-menu",
    "location-dropdown-order-confirm",
    "pickup-mode-dropdown-menu",
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
    "location-dropdown-menu",
    "location-dropdown-order-confirm",
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
    { label: "Home", icon: "fa-house", page: "restaurant-home" },
    { label: "Menu", icon: "fa-utensils", page: "menu" },
    { label: "Locations", icon: "fa-location-dot", page: "locations" },
    { label: "Cart", icon: "fa-bag-shopping", page: "cart" },
    ...(isLoggedIn
      ? [
          {
            label: "Reorder Past Orders",
            icon: "fa-rotate-left",
            page: "reorder-modal",
          },
        ]
      : []),
    { label: "Scan QR code for menu", icon: "fa-qrcode", page: "menu-scan" },
  ];

  if (isLoggedIn) {
    navItems.push({
      label: "Sign Out",
      icon: "fa-arrow-right-from-bracket",
      page: "logout",
    });
  } else {
    navItems.push({
      label: "Sign In",
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
                            : item.page === "reorder-modal"
                            ? "closeHamburger(); tryOpenReorderModal();"
                            : item.page === "menu"
                            ? "closeHamburger(); navigateTo('menu');"
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
                </nav>
            </div>
            <!-- Backdrop -->
            <div class="flex-1 bg-black/50 backdrop-blur-[2px]" onclick="closeHamburger()"></div>
        </div>
    `;
}

function toggleMenuSearch(open) {
  mockupState.menuSearchOpen = open;
  mockupState.menuSearchQuery = "";
  persistAllState();
  renderPage();
}

function renderMenuPage() {
  const isAlternative = true;
  const isDesktop = currentViewport === "desktop";
  const categoryModalClass =
    mockupState.modalOpen === "categories" ? "flex" : "hidden";

  const categories = getActiveCategories();

  const allItems = getActiveMenuItems();
  let featuredItems = allItems.filter(
    (item) =>
      item.category === "New Items" ||
      item.categoryKey === "New Items" ||
      item.categoryId === "new-items-section",
  );
  if (!featuredItems || featuredItems.length === 0) {
    featuredItems = allItems.slice(0, 4);
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

  const selectedLoc = getSelectedLocationInfo();
  const addressText =
    mockupState.selectedAddress ||
    (selectedLoc ? selectedLoc.address : "Address unavailable");
  const shortAddressText = addressText.split(",")[0].trim();
  const noStateAddressText = addressText
    .replace(/,\s*[A-Z]{2}(\s\d{5})?$/, "")
    .trim();

  const locationTitle = selectedLoc ? selectedLoc.name : "Location unavailable";
  const locationAddress = addressText;
  const locationObj = selectedLoc || {};
  const hours = locationObj.hours || "Hours unavailable";
  const closeTimeStr = hours.split(" to ")[1] || "Hours unavailable";
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
        <div id="menu-scroller" class="flex flex-col ${isDesktop ? "min-h-screen" : "h-full"} bg-[#f9fafb] relative ${!isDesktop && mockupState.modalOpen ? "overflow-hidden" : ""} scrollbar-hide">
            <!-- Compact Sticky Header: ≡ | 🔍 | i-Tea logo | ⭐ | 🛍 -->
            <header class="bg-white border-b border-gray-100 sticky top-0 z-50 shrink-0">
                <div class="px-3 py-2 flex items-center gap-2 w-full max-w-[1080px] mx-auto">
                    <!-- Left: Hamburger -->
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors shrink-0">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                    <!-- Search icon (Desktop only) -->
                    ${
                      !isAlternative
                        ? `
                    <button onclick="updateMockupState('menuSearchOpen', ${!mockupState.menuSearchOpen}); updateMockupState('menuSearchQuery', '');" class="w-10 h-10 hidden lg:flex items-center justify-center shrink-0 transition-colors ${mockupState.menuSearchOpen ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}">
                        <i class="fa-solid ${mockupState.menuSearchOpen ? "fa-xmark" : "fa-magnifying-glass"} text-xl"></i>
                    </button>
                    `
                        : ""
                    }
                    <!-- Center: i-Tea logo (Desktop) or Menu Title (Mobile/Tablet) -->
                    ${isDesktop ? `
                    <div class="flex-1 flex items-center justify-center">
                        <img src="images/i-tea-logo-new.png" class="h-9 w-auto object-contain" alt="i-Tea">
                    </div>
                    ` : `
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Menu</h1>
                    `}
                    <!-- Right: Cart -->
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </button>
                </div>

                <!-- Inline Search Bar (expands below header when open on desktop) -->
                ${
                  mockupState.menuSearchOpen && !isAlternative && isDesktop
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
            <div class="bg-white border-b border-gray-100 shrink-0 px-3 py-2 flex items-center justify-between gap-2 relative z-50">
                <div class="min-w-0">
                    <button onclick="toggleMenu(event, 'location-dropdown-menu')" class="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-bold hover:text-violet-600 hover:bg-violet-100 px-2 py-1.5 rounded-lg transition-colors cursor-pointer min-w-0">
                        <i class="fa-solid fa-location-dot text-violet-600 shrink-0"></i>
                        <span class="truncate max-w-[110px] sm:max-w-[200px] tracking-wider font-medium">${locationAddress.replace(/, [A-Z]{2}(\s\\d{5})?$/, "")}</span>
                        <i class="fa-solid fa-chevron-down text-[9px] text-violet-600 shrink-0"></i>
                    </button>
                    <!-- Dropdown Menu -->
                    <div id="location-dropdown-menu" class="hidden absolute left-4 right-4 sm:left-4 sm:right-auto sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                        <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                            <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationTitle}</h4>
                            <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                            <div class="mb-4">
                                <button onclick="navigateTo('locations')" class="w-full text-center text-sm font-black text-violet-600 uppercase tracking-widest hover:text-violet-700 transition-colors py-2">Change Location</button>
                            </div>
                            <div class="space-y-3 text-sm pt-4 border-t border-gray-100">
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                        <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "Hours unavailable"}</span>
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
                                        <span class="text-gray-600 font-medium text-sm">${mockupState.selectedLocationPhone || locationObj.phone || "Phone unavailable"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-w-0">
                    <button onclick="toggleMenu(event, 'pickup-mode-dropdown-menu')" class="flex items-center gap-1 shrink-0 whitespace-nowrap text-[10px] sm:text-xs text-gray-600 font-black uppercase tracking-wide py-1.5 px-2 rounded-lg hover:text-violet-600 hover:bg-violet-100 transition-colors cursor-pointer">
                        <span>${modeText}</span>
                        <i class="fa-solid fa-chevron-down text-[9px] text-violet-600 shrink-0"></i>
                    </button>
                    <!-- Pickup Mode Dropdown -->
                    <div id="pickup-mode-dropdown-menu" class="hidden absolute left-4 right-4 sm:left-auto sm:right-0 sm:w-[260px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                        <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-4 text-left">
                            <span class="text-[11px] font-black uppercase text-gray-500 tracking-wider block mb-2">Pickup Method</span>
                            <div class="grid grid-cols-3 gap-2">
                                ${[
                                  { id: "In-store", label: "In-Store Pickup", icon: "fa-shop" },
                                  { id: "Drive Through", label: "Drive-Thru Pickup", icon: "fa-car" },
                                  { id: "Curbside", label: "Curbside Pickup", icon: "fa-square-parking" },
                                ]
                                  .map((m) => {
                                    const currentMode = mockupState.fulfillmentMode || "In-store";
                                    const isActive =
                                      (m.id === "In-store" && (currentMode === "In-store" || currentMode === "In-Store" || currentMode === "Pickup")) ||
                                      currentMode.toLowerCase() === m.id.toLowerCase();
                                    return `
                                        <button onclick="event.stopPropagation(); updateMockupState('fulfillmentMode', '${m.id}'); navigateTo('menu');" class="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border-2 rounded-xl font-bold transition-all ${isActive ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200" : "bg-white text-gray-700 border-violet-200 hover:border-violet-600 hover:bg-violet-50/50"}">
                                            <i class="fa-solid ${m.icon} text-sm ${isActive ? "text-white" : "text-violet-600"}"></i>
                                            <span class="text-[9px] font-black uppercase tracking-tight leading-tight text-center">${m.label}</span>
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
                : ""
            }

            <!-- Alternative Mode Header (states Menu, fulfillment method, time & address + search/tabs) — desktop only; mobile/tablet gets this from the row above -->
            ${
              isAlternative && isDesktop
                ? `
            <div class="bg-white border-b border-gray-100 flex flex-col items-center justify-center text-center w-full shrink-0 animate-[fadeIn_0.3s_ease-out]">
                <!-- Location details block -->
                <div class="py-3.5 px-4 w-full relative">

                    <div onclick="toggleMenu(event, 'location-dropdown-menu')" class="flex flex-col items-center cursor-pointer group hover:opacity-85 transition-opacity">
                        <span class="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">
                            ${modeText}
                        </span>
                        <span class="text-[10px] font-bold text-violet-600 uppercase tracking-wide leading-none mb-2">
                            ${timeText}
                        </span>
                        <div class="flex items-center justify-center gap-1.5 text-sm text-[#1f0b35] font-black tracking-tight uppercase">
                            <span>${isDesktop ? noStateAddressText : shortAddressText}</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-violet-600 transition-transform group-hover:translate-y-0.5"></i>
                        </div>
                    </div>
                    <!-- Dropdown Menu -->
                    <div id="location-dropdown-menu" class="hidden absolute left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                        <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                            <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationTitle}</h4>
                            <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                            <div class="mb-4">
                                <button onclick="navigateTo('locations')" class="w-full text-center text-sm font-black text-violet-600 uppercase tracking-widest hover:text-violet-700 transition-colors py-2">Change Location</button>
                            </div>
                            <div class="space-y-3 text-sm pt-4 border-t border-gray-100">
                                <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                    <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                        <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "Hours unavailable"}</span>
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
                                        <span class="text-gray-600 font-medium text-sm">${mockupState.selectedLocationPhone || locationObj.phone || "Phone unavailable"}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <span class="text-[11px] font-black uppercase text-gray-500 tracking-wider block mb-2">Pickup Method</span>
                                <div class="grid grid-cols-3 gap-2">
                                    ${[
                                      { id: "In-store", label: "In-Store Pickup", icon: "fa-shop" },
                                      { id: "Drive Through", label: "Drive-Thru Pickup", icon: "fa-car" },
                                      { id: "Curbside", label: "Curbside Pickup", icon: "fa-square-parking" },
                                    ]
                                      .map((m) => {
                                        const currentMode = mockupState.fulfillmentMode || "In-store";
                                        const isActive =
                                          (m.id === "In-store" && (currentMode === "In-store" || currentMode === "In-Store" || currentMode === "Pickup")) ||
                                          currentMode.toLowerCase() === m.id.toLowerCase();
                                        return `
                                            <button onclick="event.stopPropagation(); updateMockupState('fulfillmentMode', '${m.id}'); navigateTo('menu');" class="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border-2 rounded-xl font-bold transition-all ${isActive ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200" : "bg-white text-gray-700 border-violet-200 hover:border-violet-600 hover:bg-violet-50/50"}">
                                                <i class="fa-solid ${m.icon} text-sm ${isActive ? "text-white" : "text-violet-600"}"></i>
                                                <span class="text-[9px] font-black uppercase tracking-tight leading-tight text-center">${m.label}</span>
                                            </button>
                                        `;
                                      })
                                      .join("")}
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div class="bg-white w-[92%] max-w-[380px] rounded-[32px] p-6 relative shadow-2xl ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"}">
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

            <div class="max-w-[1080px] mx-auto w-full">
            <div class="${isDesktop ? "px-8 pb-8 pt-2" : "px-3 pb-3 pt-1"} max-w-[1080px] mx-auto w-full">
                ${(() => {
                  if (featuredItems.length === 0) return "";
                  return isDesktop
                    ? `
                        <div id="menu-featured-carousel" class="flex gap-[14px] overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 mb-2 pt-2 -mt-2 -mx-2 px-2">
                            ${featuredItems
                              .map((fItem, index) => {
                                const gradients = [
                                  "from-violet-600/65 via-violet-600/30",
                                  "from-orange-600/70 via-orange-600/35",
                                  "from-[#f97316]/70 via-[#f97316]/35",
                                ];
                                const badgeColors = [
                                  "bg-violet-600",
                                  "bg-orange-600",
                                  "bg-[#f97316]",
                                ];
                                const textColors = [
                                  "text-violet-600",
                                  "text-orange-600",
                                  "text-amber-600",
                                ];
                                const styleIdx = index % 3;
                                const fIndex = allItems.indexOf(fItem);
                                const outOfStock = isItemOutOfStock(fItem);
                                return `
                                <div class="relative shrink-0 w-[calc(50%-7px)] snap-start rounded-3xl overflow-hidden shadow-lg h-[220px] flex flex-col justify-end p-6 transition-all duration-300 ${outOfStock ? "" : "hover:shadow-xl hover:scale-[1.01]"} group">
                                    <img src="${fItem.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="absolute inset-0 w-full h-full object-cover object-top ${outOfStock ? "" : "group-hover:scale-[1.15]"} transition-transform duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                    ${outOfStock ? renderOutOfStockOverlay() : `<span class="absolute top-4 left-6 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>`}
                                    <div class="relative z-10 w-full pr-36">
                                        <h2 class="text-3xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-2 font-branding line-clamp-2">${fItem.name}</h2>
                                        <p class="text-gray-200 font-medium text-sm leading-snug max-w-[220px] line-clamp-2">${fItem.description || "A delicious new addition to our menu."}</p>
                                    </div>
                                    ${outOfStock ? "" : `<button onclick="selectItemAndNavigate(${fIndex})" class="absolute right-6 bottom-6 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 bg-white hover:bg-violet-50 ${textColors[styleIdx]} px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg active:scale-95 tracking-wide z-20">Add to Order</button>`}
                                </div>
                                `;
                              })
                              .join("")}
                        </div>
                    `
                    : `
                        <div id="menu-featured-carousel" class="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 mb-4 -mx-1 px-1">
                            ${featuredItems
                              .map((fItem, index) => {
                                const gradients = [
                                  "from-violet-600/65 via-violet-600/30",
                                  "from-orange-600/70 via-orange-600/35",
                                  "from-[#f97316]/70 via-[#f97316]/35",
                                  "from-[#E61874]/70 via-[#E61874]/35",
                                  "from-blue-600/70 via-blue-600/35",
                                ];
                                const badgeColors = [
                                  "bg-violet-600",
                                  "bg-orange-600",
                                  "bg-[#f97316]",
                                  "bg-[#E61874]",
                                  "bg-blue-600",
                                ];
                                const styleIdx = index % 5;
                                const fIndex = allItems.indexOf(fItem);
                                const outOfStock = isItemOutOfStock(fItem);
                                return `
                                <div class="relative shrink-0 w-[82vw] max-w-[320px] snap-center rounded-3xl overflow-hidden shadow-lg h-[186px] flex flex-col justify-end p-5 group ${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick="selectItemAndNavigate(${fIndex})"`}>
                                    <img src="${fItem.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="absolute inset-0 w-full h-full object-cover object-top ${outOfStock ? "" : "group-hover:scale-[1.15]"} transition-transform duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                    ${outOfStock ? renderOutOfStockOverlay() : `<span class="absolute top-4 left-5 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>`}
                                    <div class="relative z-10">
                                        <h2 class="text-2xl font-black text-white uppercase tracking-tighter leading-tight font-branding line-clamp-2">${fItem.name}</h2>
                                    </div>
                                </div>
                                `;
                              })
                              .join("")}
                        </div>
                    `;
                })()}

                <!-- Unified Tab Selector and Search (share one row) -->
                ${(() => {
                  const searchOpen = mockupState.menuSearchOpen;
                  const justToggled =
                    mockupState.lastMenuSearchOpen !== searchOpen;

                  const tabButtonsHtml = [
                    { id: "menu", name: "All" },
                    ...(featuredItems.length > 0
                      ? [{ id: "featured", name: "Featured" }]
                      : []),
                    { id: "favorites", name: "Favorites" },
                    { id: "history", name: "Reorder" },
                  ]
                    .map((tab) => {
                      const isActive = mockupState.menuTab === tab.id;
                      const activeClass = isActive
                        ? "border-violet-600 text-violet-600 border-b-2 font-black"
                        : "text-gray-400 font-bold hover:text-gray-600";
                      return `<button onclick="updateMockupState('menuTab', '${tab.id}'); navigateTo(currentPage);" class="whitespace-nowrap shrink-0 pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}">${tab.name}</button>`;
                    })
                    .join("");

                  const searchInputHtml = `
                    <div class="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 ${isDesktop ? "lg:flex-none lg:w-[360px]" : ""}">
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
                  `;

                  if (isDesktop) {
                    // Desktop: more room, so search expands and simply pushes the
                    // tabs aside instead of hiding them entirely.
                    return `
                    <div class="flex items-center w-full gap-4 border-b border-gray-100 w-full mb-3 pt-2 pb-1 sticky top-[70px] z-40 bg-[#f9fafb]">
                        ${
                          searchOpen
                            ? `
                            <div class="flex items-center gap-3 shrink-0 ${justToggled ? "animate-[fadeIn_0.2s_ease-out]" : ""}">
                                ${searchInputHtml}
                                <button onclick="toggleMenuSearch(false)" class="text-sm font-black text-violet-600 uppercase tracking-wide hover:opacity-85 transition-opacity shrink-0">
                                    Cancel
                                </button>
                            </div>
                            `
                            : `
                            <button onclick="toggleMenuSearch(true)" class="shrink-0 flex items-center justify-center transition-colors text-gray-500 hover:text-violet-600 pb-2">
                                <i class="fa-solid fa-magnifying-glass text-lg"></i>
                            </button>
                            `
                        }
                        <div class="flex items-center overflow-x-auto scrollbar-hide gap-6 lg:gap-8 ${searchOpen ? "flex-1 justify-end" : ""}">
                            ${tabButtonsHtml}
                        </div>
                    </div>
                    `;
                  }

                  // Mobile/tablet: search takes over the full row and the tabs
                  // fade out (and back in on cancel), rather than just appearing.
                  const tabsRowHtml = `
                    <div class="flex items-center overflow-x-auto scrollbar-hide border-b border-gray-100 w-full gap-6 lg:gap-8 justify-start pb-1 pl-2 lg:pl-0">
                        <button onclick="toggleMenuSearch(true)" class="shrink-0 flex items-center justify-center transition-colors text-gray-500 hover:text-violet-600 pb-2 pr-2">
                            <i class="fa-solid fa-magnifying-glass text-lg"></i>
                        </button>
                        ${tabButtonsHtml}
                    </div>
                  `;
                  const searchRowHtml = `
                    <div class="flex items-center w-full gap-3 px-2 lg:px-0">
                        ${searchInputHtml}
                        <button onclick="toggleMenuSearch(false)" class="text-sm font-black text-violet-600 uppercase tracking-wide hover:opacity-85 transition-opacity shrink-0">
                            Cancel
                        </button>
                    </div>
                  `;

                  const currentRowHtml = searchOpen
                    ? searchRowHtml
                    : tabsRowHtml;
                  const outgoingRowHtml = searchOpen
                    ? tabsRowHtml
                    : searchRowHtml;

                  return `
                    <div class="relative w-full mb-3 pt-2 sticky top-14 z-40 bg-[#f9fafb]">
                        <div class="${justToggled ? "animate-[fadeIn_0.2s_ease-out]" : ""}">${currentRowHtml}</div>
                        ${justToggled ? `<div class="absolute inset-0 top-0 left-0 pointer-events-none animate-[fadeOut_0.2s_ease-out_forwards]">${outgoingRowHtml}</div>` : ""}
                    </div>
                  `;
                })()}

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
                                    <div class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : (currentPage === "menu-single" ? "grid grid-cols-1 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}">
                                        ${filtered
                                          .map((item) => {
                                            const actualIndex =
                                              getActiveMenuItems().indexOf(
                                                item,
                                              );
                                            const outOfStock = isItemOutOfStock(item);
                                            return `
                                                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
                                                    <div class="w-full ${isDesktop ? "h-60" : (currentPage === "menu-single" ? "h-64" : "h-56")} overflow-hidden relative ${outOfStock ? "cursor-default" : "cursor-pointer"} shrink-0" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top ${outOfStock ? "" : "hover:scale-125"} transition-transform duration-500">
                                                        ${outOfStock ? renderOutOfStockOverlay() : ""}
                                                        <button onclick="event.stopPropagation(); toggleMenuFavorite(getActiveMenuItems()[${actualIndex}], event)" class="heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-10" title="Toggle Favorite">
                                                            <i class="${isMenuItemFavorite(item) ? "fa-solid fa-heart text-violet-600 text-lg" : "fa-regular fa-heart text-gray-400 hover:text-violet-600 text-lg"}"></i>
                                                        </button>
                                                    </div>
                                                    <div class="flex flex-col flex-1 ${isDesktop ? "px-2.5 pb-5 pt-5" : "px-1.5 pb-3 pt-3"}">
                                                        <div class="${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                            <h4 class="font-black text-gray-900 ${isDesktop ? "text-lg" : "text-[15px]"} leading-tight tracking-tight uppercase mb-1">${item.name}</h4>
                                                            ${outOfStock ? `<div class="font-black text-red-600 ${isDesktop ? "text-sm mb-2" : "text-xs mb-3"} uppercase tracking-wide">Temporarily Out of Stock</div>` : `<div class="font-black text-violet-600 ${isDesktop ? "text-base mb-2" : "text-sm mb-3"}">$${item.price.toFixed(2)}</div>`}
                                                        </div>
                                                        <button ${outOfStock ? "disabled" : `onclick='selectItemAndNavigate(${actualIndex})'`} class="w-full ${isDesktop ? "py-3 text-sm" : "py-2.5 text-[11px]"} rounded-full border-[1.5px] ${outOfStock ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 active:scale-95"} font-black uppercase transition-colors tracking-wide shadow-sm shrink-0 mt-auto">${outOfStock ? "Sold Out" : "+ Add to Order"}</button>
                                                    </div>
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
                                  mockupState.isLoading
                                    ? `
                                <!-- Loading Skeleton -->
                                <div class="space-y-12 animate-pulse mt-4">
                                    <!-- Category Pill Skeletons -->
                                    <div class="flex gap-2.5 overflow-x-auto scrollbar-hide py-1">
                                        ${[1, 2, 3, 4, 5].map(() => `
                                            <div class="h-9 w-24 bg-gray-200 rounded-full shrink-0"></div>
                                        `).join("")}
                                    </div>
                                    
                                    <!-- Category Section Skeleton -->
                                    <div>
                                        <div class="h-6 w-48 bg-gray-200 rounded-md mb-6"></div>
                                        <div class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : (currentPage === "menu-single" ? "grid grid-cols-1 md:grid-cols-2 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}">
                                            ${[1, 2, 3, 4].map(() => `
                                                <div class="bg-white rounded-2xl border border-gray-100 flex flex-col h-full overflow-hidden shadow-sm">
                                                    <div class="w-full ${isDesktop ? "h-60" : (currentPage === "menu-single" ? "h-64" : "h-56")} bg-gray-200"></div>
                                                    <div class="flex flex-col flex-1 p-4 space-y-3">
                                                        <div class="h-4 w-3/4 bg-gray-200 rounded-md"></div>
                                                        <div class="h-3 w-1/4 bg-gray-200 rounded-md"></div>
                                                        ${isDesktop ? `<div class="h-2 w-full bg-gray-100 rounded-md"></div><div class="h-2 w-5/6 bg-gray-100 rounded-md"></div>` : ""}
                                                        <div class="h-9 w-full bg-gray-200 rounded-full mt-auto"></div>
                                                    </div>
                                                </div>
                                            `).join("")}
                                        </div>
                                    </div>
                                </div>
                                `
                                    : `
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
                                                       class="inline-flex items-center bg-violet-100 hover:bg-violet-200 text-violet-900 px-4 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0 cursor-pointer">
                                                        ${section.name}
                                                    </a>
                                                `;
                                              })
                                              .join("")}
                                        </div>
                                        `
                                            : ""
                                        }

                                        ${
                                          !mockupState.isLoading && getActiveCategories().length === 0
                                            ? `
                                        <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-4 max-w-md mx-auto">
                                            <div class="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-3">
                                                <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                                            </div>
                                            <h3 class="text-sm font-black text-gray-800 uppercase tracking-wide mb-1">Couldn't Load Menu</h3>
                                            <p class="text-xs text-gray-500 mb-4">Something went wrong loading this location's menu. Please try again.</p>
                                            <button onclick="fetchMenuAndItems(mockupState.selectedLocationId).then(() => navigateTo(currentPage))" class="px-5 py-2.5 bg-violet-600 text-white rounded-full text-xs font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Try Again</button>
                                        </div>
                                        `
                                            : getActiveCategories()
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
                                                    <div class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : (currentPage === "menu-single" ? "grid grid-cols-1 md:grid-cols-2 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}">
                                                        ${sectionItems
                                                          .map((item) => {
                                                            const actualIndex =
                                                              items.indexOf(item);
                                                            const outOfStock = isItemOutOfStock(item);
                                                            return `
                                                                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
                                                                    <div class="w-full ${isDesktop ? "h-60" : (currentPage === "menu-single" ? "h-64" : "h-56")} overflow-hidden relative ${outOfStock ? "cursor-default" : "cursor-pointer"} shrink-0" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top ${outOfStock ? "" : "hover:scale-125"} transition-transform duration-500">
                                                                        ${outOfStock ? renderOutOfStockOverlay() : ""}
                                                                        <button onclick="event.stopPropagation(); toggleMenuFavorite(getActiveMenuItems()[${actualIndex}], event)" class="heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-10" title="Toggle Favorite">
                                                                            <i class="${isMenuItemFavorite(item) ? "fa-solid fa-heart text-violet-600 text-lg" : "fa-regular fa-heart text-gray-400 hover:text-violet-600 text-lg"}"></i>
                                                                        </button>
                                                                    </div>
                                                                    <div class="flex flex-col flex-1 ${isDesktop ? "px-2.5 pb-5 pt-5" : "px-1.5 pb-3 pt-3"}">
                                                                        <div class="${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                                            <h4 class="font-black text-gray-900 ${isDesktop ? "text-lg" : "text-[15px]"} leading-tight tracking-tight uppercase mb-1">${item.name}</h4>
                                                                            ${outOfStock ? `<div class="font-black text-red-600 ${isDesktop ? "text-sm mb-2" : "text-xs mb-3"} uppercase tracking-wide">Temporarily Out of Stock</div>` : `<div class="font-black text-violet-600 ${isDesktop ? "text-base mb-2" : "text-sm mb-3"}">$${item.price.toFixed(2)}</div>`}
                                                                        </div>
                                                                        ${isDesktop ? `<p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed line-clamp-2">${item.description}</p>` : ""}
                                                                        <button ${outOfStock ? "disabled" : `onclick='selectItemAndNavigate(${actualIndex})'`} class="w-full ${isDesktop ? "py-3 text-sm" : "py-2.5 text-[11px]"} rounded-full border-[1.5px] ${outOfStock ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 active:scale-95"} font-black uppercase transition-colors tracking-wide shadow-sm shrink-0 mt-auto">${outOfStock ? "Sold Out" : "+ Add to Order"}</button>
                                                                    </div>
                                                                </div>
                                                            `;
                                                          })
                                                          .join("")}
                                                    </div>
                                                </div>
                                            `;
                                          })
                                          .join("")}
                                    `
                                }
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
                                            const actualIndex =
                                              allItems.indexOf(item);
                                            const outOfStock = isItemOutOfStock(item);
                                            const isP1 = index === 0;
                                            const badgeStyle = isP1
                                              ? 'style="background:linear-gradient(135deg,#f97316,#f59e0b);"'
                                              : "";
                                            const badgeClass = isP1
                                              ? "absolute top-3 left-3 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm"
                                              : "absolute top-3 left-3 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm";
                                            return `
                                                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
                                                    <div class="w-full h-60 overflow-hidden relative ${outOfStock ? "cursor-default" : "cursor-pointer"} shrink-0" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top ${outOfStock ? "" : "hover:scale-125"} transition-transform duration-500">
                                                        ${outOfStock ? renderOutOfStockOverlay() : `<div class="${badgeClass}" ${badgeStyle}>Featured</div>`}
                                                        <button onclick="event.stopPropagation(); toggleMenuFavorite(allItems[${actualIndex}], event)" class="heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-10" title="Toggle Favorite">
                                                            <i class="${isMenuItemFavorite(item) ? "fa-solid fa-heart text-violet-600 text-lg" : "fa-regular fa-heart text-gray-400 hover:text-violet-600 text-lg"}"></i>
                                                        </button>
                                                    </div>
                                                    <div class="flex flex-col flex-1 px-2.5 pb-5 pt-5">
                                                        <div class="${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                            <h4 class="font-black text-gray-900 text-lg leading-tight tracking-tight uppercase mb-1 line-clamp-2">${item.name}</h4>
                                                            ${outOfStock ? `<div class="font-black text-red-600 text-sm mb-2 uppercase tracking-wide">Temporarily Out of Stock</div>` : `<div class="font-black text-violet-600 text-base mb-2">$${item.price.toFixed(2)}</div>`}
                                                        </div>
                                                        <p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed line-clamp-2">${item.description || "A delicious addition to our menu."}</p>
                                                        <button ${outOfStock ? "disabled" : `onclick='selectItemAndNavigate(${actualIndex})'`} class="w-full py-3 text-sm rounded-full border-[1.5px] ${outOfStock ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 active:scale-95"} font-black uppercase transition-colors tracking-wide shadow-sm shrink-0 mt-auto">${outOfStock ? "Sold Out" : "+ Add to Order"}</button>
                                                    </div>
                                                </div>
                                            `;
                                          })
                                          .join("")}
                                    </div>
                                    `
                                        : `
                                    <div class="${currentPage === "menu-single" ? "grid grid-cols-1 md:grid-cols-2 gap-[10px]" : "grid grid-cols-2 gap-[10px]"}">
                                        ${featuredItems
                                          .map((item) => {
                                            const actualIndex =
                                              allItems.indexOf(item);
                                            const outOfStock = isItemOutOfStock(item);
                                            return `
                                                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
                                                    <div class="w-full ${currentPage === "menu-single" ? "h-64" : "h-56"} overflow-hidden relative ${outOfStock ? "cursor-default" : "cursor-pointer"} shrink-0" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top ${outOfStock ? "" : "hover:scale-125"} transition-transform duration-500">
                                                        ${outOfStock ? renderOutOfStockOverlay() : ""}
                                                        <button onclick="event.stopPropagation(); toggleMenuFavorite(allItems[${actualIndex}], event)" class="heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-10" title="Toggle Favorite">
                                                            <i class="${isMenuItemFavorite(item) ? "fa-solid fa-heart text-violet-600 text-lg" : "fa-regular fa-heart text-gray-400 hover:text-violet-600 text-lg"}"></i>
                                                        </button>
                                                    </div>
                                                    <div class="flex flex-col flex-1 px-1.5 pb-3 pt-3">
                                                        <div class="${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                            <h4 class="font-black text-gray-900 text-[15px] leading-tight tracking-tight uppercase mb-1">${item.name}</h4>
                                                            ${outOfStock ? `<div class="font-black text-red-600 text-xs mb-3 uppercase tracking-wide">Temporarily Out of Stock</div>` : `<div class="font-black text-violet-600 text-sm mb-3">$${item.price.toFixed(2)}</div>`}
                                                        </div>
                                                        <button ${outOfStock ? "disabled" : `onclick='selectItemAndNavigate(${actualIndex})'`} class="w-full py-2.5 text-[11px] rounded-full border-[1.5px] ${outOfStock ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 active:scale-95"} font-black uppercase transition-colors tracking-wide shadow-sm shrink-0 mt-auto">${outOfStock ? "Sold Out" : "+ Add to Order"}</button>
                                                    </div>
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
                    // Only show favorites that actually resolve to an item in the
                    // current menu — a name that isn't found (e.g. removed from the
                    // menu, or from a different location) has no valid index to open,
                    // so silently falling back to item 0 would open the wrong item.
                    const resolvedFavorites = (mockupState.favorites || [])
                      .map((fav) => ({
                        fav,
                        actualIndex: getActiveMenuItems().findIndex(
                          (item) => item.name === fav.name,
                        ),
                      }))
                      .filter(({ actualIndex }) => actualIndex >= 0);
                    const hasFavorites = resolvedFavorites.length > 0;
                    return `
                            <div class="space-y-6">
                                <div class="flex justify-between items-end mb-4 px-1">
                                    <h3 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Your Saved Favorites</h3>
                                </div>
                                ${
                                  hasFavorites
                                    ? `
                                    <div class="${isDesktop ? "grid grid-cols-4 gap-5" : (currentPage === "menu-single" ? "grid grid-cols-1 md:grid-cols-2 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}">
                                        ${resolvedFavorites
                                          .map(({ fav, actualIndex }) => {
                                            const realFavItem = getActiveMenuItems()[actualIndex];
                                            const favImage = (realFavItem && realFavItem.image) || fav.image;
                                            const outOfStock = isItemOutOfStock(realFavItem);
                                            return `
                                                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow group/card overflow-hidden">
                                                    <div class="w-full ${isDesktop ? "h-60" : (currentPage === "menu-single" ? "h-64" : "h-56")} overflow-hidden relative ${outOfStock ? "cursor-default" : "cursor-pointer"} shrink-0" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                        <img src="${favImage}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top ${outOfStock ? "" : "group-hover/card:scale-105"} transition-transform duration-500">
                                                        ${outOfStock ? renderOutOfStockOverlay() : ""}
                                                        <button onclick="event.stopPropagation(); removeFavorite(${fav.id})" class="heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-10" title="Toggle Favorite">
                                                            <i class="fa-solid fa-heart text-violet-600 text-lg"></i>
                                                        </button>
                                                    </div>
                                                    <div class="flex flex-col flex-1 ${isDesktop ? "px-2.5 pb-5 pt-5" : "px-1.5 pb-3 pt-3"}">
                                                        <div class="${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick='selectItemAndNavigate(${actualIndex})'`}>
                                                            <h4 class="font-black text-gray-900 ${isDesktop ? "text-lg" : "text-[15px]"} leading-tight tracking-tight uppercase mb-1">${fav.name}</h4>
                                                            ${outOfStock ? `<div class="font-black text-red-600 ${isDesktop ? "text-sm mb-2" : "text-xs mb-3"} uppercase tracking-wide">Temporarily Out of Stock</div>` : `<div class="font-black text-violet-600 ${isDesktop ? "text-base mb-2" : "text-sm mb-3"}">$${fav.price.toFixed(2)}</div>`}
                                                        </div>
                                                        <button ${outOfStock ? "disabled" : `onclick='selectItemAndNavigate(${actualIndex})'`} class="w-full ${isDesktop ? "py-3 text-sm" : "py-2.5 text-[11px]"} rounded-full border-[1.5px] ${outOfStock ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300"} font-black uppercase transition-colors tracking-wide mt-auto">${outOfStock ? "Sold Out" : "+ Reorder"}</button>
                                                    </div>
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
                    let allOrders = getAllUserOrders();

                    const getOrderTime = (order) => {
                      const dateStr =
                        order.orderDate ||
                        order.placedAt ||
                        order.placedDateTime;
                      return dateStr ? new Date(dateStr).getTime() : 0;
                    };
                    allOrders.sort((a, b) => getOrderTime(b) - getOrderTime(a));

                    const displayedOrders = allOrders.slice(0, 3);
                    preloadPastOrdersMenuItemDetails(displayedOrders);

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

                    const orderCardsHTML = displayedOrders
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

                        const foundLoc = getSelectedLocationInfo(order.locationId);
                        const locationName = foundLoc?.name || "Location unavailable";

                        const MAX_THUMBS = 4;
                        const thumbItems = orderItems.slice(0, MAX_THUMBS);
                        const extraThumbCount = orderItems.length - MAX_THUMBS;
                        const thumbsHtml =
                          thumbItems
                            .map((item) => {
                              const img = getReorderItemImage(item);
                              const itemName =
                                item.name ||
                                item.Name ||
                                item.menuItemName ||
                                item.MenuItemName ||
                                "Item";
                              return `<div class="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50" title="${itemName}">
                                    <img src="${img}" alt="${itemName}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                </div>`;
                            })
                            .join("") +
                          (extraThumbCount > 0
                            ? `<div class="w-11 h-11 rounded-lg shrink-0 bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 font-black text-[11px]">+${extraThumbCount}</div>`
                            : "");

                        return `
                                <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">${orderDate} • #${orderNum}</p>
                                            <p class="font-black text-violet-600 text-sm mt-0.5">${locationName}</p>
                                        </div>
                                        <span class="font-black text-gray-900 text-base">$${orderTotal}</span>
                                    </div>
                                    <div class="flex gap-2">
                                        ${thumbsHtml}
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
                                        <button onclick="openOrderDetailsModal(${order.orderId || `'${orderNum}'`})" class="flex-1 py-2.5 rounded-full border-2 border-violet-600 text-violet-600 font-black text-[10px] uppercase tracking-widest hover:bg-violet-50 transition-colors">View details</button>
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
                                ${
                                  allOrders.length > displayedOrders.length
                                    ? `
                                <div class="text-center pt-2">
                                    <button onclick="navigateTo('account')" class="text-xs font-black text-violet-600 uppercase tracking-widest hover:underline">
                                        View all orders →
                                    </button>
                                </div>
                                `
                                    : ""
                                }
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
                        (fav, index) => {
                          const realFavItem = getActiveMenuItems().find(
                            (item) => (item.name || "").toLowerCase() === (fav.name || "").toLowerCase(),
                          );
                          const favImage = (realFavItem && realFavItem.image) || fav.image;
                          return `
                        <div class="flex items-center justify-between group">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden shrink-0 border border-gray-50">
                                    <img src="${favImage}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
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
                    `;
                        },
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
  "account-deleted": () => `
    <div class="flex flex-col h-full bg-white relative">
        <header class="bg-white px-6 py-4 flex justify-center items-center z-50 shrink-0 border-b-2 border-gray-100">
            <div class="flex items-center gap-3">
                <img src="${assets.logo}" class="w-8 h-8 rounded-full shadow-md object-cover border border-white/10">
                <span class="font-black text-xl tracking-tighter text-gray-900 uppercase">FAREBITES</span>
            </div>
        </header>

        <div class="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
            <div class="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-sm">
                <i class="fa-solid fa-user-xmark text-4xl"></i>
            </div>
            
            <h1 class="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">Account Deleted</h1>
            
            <p class="text-gray-500 font-medium mb-10 max-w-sm mx-auto leading-relaxed text-sm">
                We're sorry to see you go! Your account and all associated data have been permanently deleted.
            </p>

            <button onclick="navigateTo('restaurant-home')" class="w-full max-w-sm py-4 bg-gray-900 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl shadow-gray-200 hover:bg-black transition-colors active:scale-95">
                Return to Home
            </button>
        </div>
    </div>
  `,
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
    const signInReason = new URLSearchParams(window.location.search).get("reason");
    const signInHeadline =
      signInReason === "reorder" ? "Sign in to see your past orders" :
      signInReason === "checkout" ? "Sign in to complete your order" :
      signInReason === "expired" ? "Your session expired" : "Sign In";
    const signInSubtext =
      signInReason === "expired" ? "Please sign in again to continue." : "";
    return `
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${assets.restaurantHero}')"></div>
            <div class="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div class="modal-overlay" onclick="navigateTo('restaurant-home')">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="absolute ${isDesktop ? "top-4 left-4" : "top-6 left-6"} text-gray-500" onclick="navigateTo('restaurant-home')"><i class="fa-solid fa-xmark text-2xl"></i></button>
                    <div class="w-full ${isDesktop ? "max-h-[36px] mb-2 mt-2" : "max-h-[52px] mb-1 mt-4"} flex items-center justify-center">
                         <img src="images/i-tea-logo-new.png" class="h-full ${isDesktop ? "max-h-[36px]" : "max-h-[52px]"} w-auto object-contain">
                    </div>
                    <h2 class="text-xl lg:text-2xl font-black text-center ${signInSubtext ? "mb-1" : isDesktop ? "mb-2" : "mb-4"} uppercase tracking-tight text-gray-900 leading-tight">${signInHeadline}</h2>
                    ${signInSubtext ? `<p class="text-center text-sm font-bold text-gray-500 ${isDesktop ? "mb-2" : "mb-4"}">${signInSubtext}</p>` : ""}
                    <div class="space-y-3">
                        <div class="relative group">
                            <input type="email" id="auth-email-input" autocomplete="username" placeholder="Email Address" value="${savedEmail}" class="w-full bg-white px-8 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300">
                            <div class="absolute inset-0 rounded-full bg-violet-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                        </div>
                        <div class="relative group">
                            <input type="password" id="auth-password-input" autocomplete="current-password" placeholder="Password" class="w-full bg-white pl-8 pr-12 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300">
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
                            <input type="email" id="forgot-email-input" autocomplete="username" placeholder="Email Address" class="w-full bg-white px-8 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300">
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
  "reset-password": () => {
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
                    <p class="text-xs text-gray-500 font-bold text-center mb-6 uppercase tracking-wider px-2 leading-relaxed">Enter your new password below to securely access your account.</p>
                    
                    <div class="space-y-4">
                        <div class="relative group">
                            <input type="password" id="reset-password-input" autocomplete="new-password" placeholder="New Password" class="w-full bg-white px-8 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300 pr-12">
                            <button type="button" onclick="togglePasswordVisibility('reset-password-input', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-eye text-lg"></i>
                            </button>
                            <div class="absolute inset-0 rounded-full bg-violet-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                        </div>

                        <div class="relative group">
                            <input type="password" id="reset-confirm-input" autocomplete="new-password" placeholder="Confirm Password" class="w-full bg-white px-8 ${isDesktop ? "py-3" : "py-4"} rounded-full border-2 border-violet-50 focus:border-violet-600 focus:bg-white outline-none font-bold text-lg text-gray-900 shadow-xl shadow-violet-100/50 transition-all placeholder-gray-300 pr-12">
                            <button type="button" onclick="togglePasswordVisibility('reset-confirm-input', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-eye text-lg"></i>
                            </button>
                            <div class="absolute inset-0 rounded-full bg-violet-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                        </div>
                        
                        <div id="reset-error" class="text-xs font-bold text-red-500 px-6 min-h-[16px] transition-all opacity-0"></div>
                        <div id="reset-success" class="text-sm font-bold text-green-600 px-6 text-center leading-relaxed transition-all hidden"></div>
                        
                        <div class="space-y-2">
                            <button id="reset-submit-btn" onclick="handleResetPassword()" class="w-full bg-violet-600 text-white ${isDesktop ? "py-3" : "py-4"} rounded-full font-black text-lg hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all uppercase">Save New Password</button>
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
    let featuredItems = items.filter(
      (item) =>
        item.category === "New Items" ||
        item.categoryKey === "New Items" ||
        item.categoryId === "new-items-section",
    );
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
                            <h2 class="font-branding font-black text-5xl tracking-tight text-white italic leading-none">Taste The</h2>
                            <h1 class="font-branding font-extrabold text-7xl text-white tracking-tight mt-1 mb-4 flex items-center gap-3 leading-none">
                                <span class="italic font-serif" style="font-family: 'Outfit', sans-serif;">Goodness</span>
                                <i class="fa-regular fa-heart text-4xl text-[#da2377] rotate-[20deg]"></i>
                            </h1>
                            <p class="text-base font-semibold text-white/90 mb-6 leading-relaxed">Refreshing flavors. Chewy boba. Made for every moment.</p>
                            <button onclick="navigateTo('locations')" class="inline-flex items-center gap-3 bg-white text-[#da2377] hover:bg-violet-50 px-8 py-3.5 rounded-full font-black text-sm shadow-lg active:scale-95 transition-transform uppercase tracking-wider">
                                <span>Order Now</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    `
                        : `
                    <img src="images/hero-mobile.png" class="w-full h-full absolute inset-0 object-cover z-0 object-center">
                    <!-- Subtle gradient to ensure text readability -->
                    <div class="absolute inset-0 bg-gradient-to-b from-violet-600 via-violet-600/50 to-transparent via-[20%] to-[50%] z-10"></div>
                    `
                    }
                </div>

                <header class="absolute top-0 inset-x-0 bg-transparent px-6 pt-6 pb-2 flex justify-between items-center z-50 shrink-0">
                    <div class="flex items-center gap-3">
                        ${mockupState.isLoggedIn ? `<button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-white"><i class="fa-solid fa-bars text-2xl"></i></button>` : `<button onclick="navigateTo('sign-in')" class="w-10 h-10 flex items-center justify-center text-white"><i class="fa-regular fa-user text-2xl"></i></button>`}
                        <button onclick="navigateTo('menu-scan')" class="w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"><i class="fa-solid fa-qrcode text-2xl"></i></button>
                    </div>
                    <div class="flex flex-col items-center cursor-pointer mr-6" onclick="navigateTo('locations')">
                        <div class="flex items-center gap-1"><span class="text-[11px] font-black text-white tracking-[0.15em] uppercase">PICKUP</span><i class="fa-solid fa-chevron-down text-[9px] text-white"></i></div>
                        <span class="text-[13px] font-medium text-white mt-0.5">Home</span>
                        ${
                          mockupState.isLoggedIn
                            ? `
                        <div onclick="event.stopPropagation(); navigateTo('account')" class="speech-bubble-tail mt-1 px-2.5 py-0.5 bg-white text-violet-600 border border-violet-100 rounded-full shadow-sm text-[10px] font-black uppercase tracking-wider whitespace-nowrap active:scale-95 transition-transform">
                            Hi ${mockupState.userName || "User"}!
                        </div>
                        `
                            : ""
                        }
                    </div>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                        ${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}
                    </button>
                </header>
                
                <div class="flex-1 ${isDesktop ? '' : 'overflow-y-auto'} relative scrollbar-hide z-10 flex flex-col">
                    <!-- Titles & CTA for Mobile/Tablet -->
                    ${
                      !isDesktop
                        ? `
                    <div class="text-center pt-24 pb-2 relative z-10 shrink-0 flex justify-center">
                        <img src="images/i-Tea-logo-stroke.png" class="h-[175px] w-auto object-contain drop-shadow-md" alt="i-Tea">
                    </div>
                    `
                        : ""
                    }
                    
                    <!-- Spacer so background image can be seen before the carousel (Desktop uses negative margin wrapper instead) -->
                    ${!isDesktop && featuredItems.length > 0 ? '<div class="w-full flex-1 min-h-[160px]"></div>' : ""}
                    
                    <!-- Carousel Container -->
                    ${
                      !isDesktop && featuredItems.length > 0
                        ? `
                    <div class="relative z-20 w-full mt-auto shrink-0 pb-2">
                        <div id="home-carousel" class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 ${carouselAlign}">
                            ${featuredItems
                              .map((fItem, index) => {
                                const gradients = [
                                  "from-violet-600/65 via-violet-600/30",
                                  "from-orange-600/70 via-orange-600/35",
                                  "from-[#32CD32]/70 via-[#32CD32]/35",
                                  "from-[#E61874]/70 via-[#E61874]/35",
                                  "from-blue-600/70 via-blue-600/35",
                                ];
                                const badgeColors = [
                                  "bg-violet-600",
                                  "bg-orange-600",
                                  "bg-[#32CD32]",
                                  "bg-[#E61874]",
                                  "bg-blue-600",
                                ];
                                const textColors = [
                                  "text-violet-600",
                                  "text-orange-600",
                                  "text-[#32CD32]",
                                  "text-[#E61874]",
                                  "text-blue-600",
                                ];
                                const styleIdx = index % 5;
                                const fIndex = items.indexOf(fItem);
                                const outOfStock = isItemOutOfStock(fItem);
                                return `
                                <div class="${cardWidthClass} relative shrink-0 snap-center rounded-3xl overflow-hidden border-4 border-white shadow-xl h-[225px] flex flex-col justify-end p-5 group ${outOfStock ? "" : "cursor-pointer"}" ${outOfStock ? "" : `onclick="selectItemAndNavigate(${fIndex})"`}>
                                    <img src="${fItem.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="absolute inset-0 w-full h-full object-cover object-top ${outOfStock ? "" : "group-hover:scale-[1.15]"} transition-transform duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                    ${outOfStock ? renderOutOfStockOverlay() : `<span class="absolute top-4 left-5 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>`}
                                    <div class="relative z-10 text-left w-full pr-12">
                                        <h2 class="text-xl font-black text-white uppercase tracking-tighter leading-tight font-branding mb-1 line-clamp-2">${fItem.name}</h2>
                                        <p class="text-white font-medium text-xs leading-tight mb-3 line-clamp-2">${fItem.description || "A delicious new addition to our menu."}</p>
                                        ${outOfStock ? `<span class="inline-block bg-white/90 text-red-600 px-5 py-2 rounded-full font-black uppercase text-[10px] shadow-md tracking-wider">Sold Out</span>` : `<button onclick="event.stopPropagation(); selectItemAndNavigate(${fIndex})" class="bg-white ${textColors[styleIdx]} px-5 py-2 rounded-full font-black uppercase text-[10px] shadow-md hover:scale-105 active:scale-95 tracking-wider z-20 transition-transform">Add to Order</button>`}
                                    </div>
                                </div>
                                `;
                              })
                              .join("")}
                        </div>
                        
                        <!-- Pagination Dots -->
                        <div class="flex justify-center items-center gap-2 mt-1 mb-4 lg:hidden" style="padding-right: 0;">
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
                    <div class="bg-white pt-12 pb-12 px-12 w-full shrink-0 relative z-30 shadow-sm">
                        <div class="max-w-[1080px] mx-auto text-center">
                            <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Explore Our Menu</h2>
                            <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Select a category to start ordering</p>
                            
                            <div class="grid grid-cols-3 gap-6 justify-items-center mb-8">
                                ${getActiveCategories()
                                  .map(
                                    (cat) => `
                                    <div onclick="navigateTo('locations');" class="flex flex-col items-center cursor-pointer group w-full max-w-[312px]">
                                        <div class="w-full aspect-[1024/450] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 mb-4 bg-white">
                                            <img src="${cat.img}" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500">
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

                            ${
                              featuredItems.length > 0
                                ? `
                            <!-- Divider -->
                            <div class="h-px bg-gray-100 w-full mb-8"></div>

                            <!-- Featured Items Section -->
                            <h2 class="font-branding font-black text-3xl text-gray-900 uppercase tracking-tight mb-2">Featured Items</h2>
                            <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Our handcrafted favorites</p>
 
                            <div class="grid grid-cols-2 gap-8 justify-items-center max-w-[1080px] mx-auto w-full">
                                ${featuredItems
                                  .slice(0, 2)
                                  .map((fItem, index) => {
                                    const gradients = [
                                      "from-violet-600/65 via-violet-600/30",
                                      "from-orange-600/70 via-orange-600/35",
                                    ];
                                    const badgeColors = [
                                      "bg-violet-600",
                                      "bg-orange-600",
                                    ];
                                    const textColors = [
                                      "text-violet-600",
                                      "text-orange-600",
                                    ];
                                    const styleIdx = index % 2;
                                    const fIndex = items.indexOf(fItem);
                                    return `
                                    <div class="relative shrink-0 w-full rounded-3xl overflow-hidden shadow-lg h-[300px] flex flex-col justify-end p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group cursor-pointer text-left" onclick="selectItemAndNavigate(${fIndex})">
                                        <img src="${fItem.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.15] transition-transform duration-500">
                                        <div class="absolute inset-0 bg-gradient-to-r ${gradients[styleIdx]} to-transparent"></div>
                                        <span class="absolute top-4 left-6 ${badgeColors[styleIdx]} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">Featured</span>
                                        <div class="relative z-10 w-full pr-36">
                                            <h2 class="text-3xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-2 font-branding line-clamp-2">${fItem.name}</h2>
                                            <p class="text-gray-200 font-medium text-sm leading-snug max-w-[220px] line-clamp-2">${fItem.description || "A delicious new addition to our menu."}</p>
                                        </div>
                                        <button class="absolute right-6 bottom-6 bg-white ${textColors[styleIdx]} px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg hover:scale-105 active:scale-95 tracking-wide z-20 transition-transform">Add to Order</button>
                                    </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                            `
                                : ""
                            }

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
      let list = getEnabledLocations();
      if (
        mockupState.locationFilter === "Near Me" ||
        mockupState.locationFilter === "Nearby"
      ) {
        if (mockupState.userLat && mockupState.userLng) {
          list = [...list].sort((a, b) => (a.realDistance || 9999) - (b.realDistance || 9999));
        }
      } else if (mockupState.locationFilter === "My Locations") {
        list = list.filter((loc) => loc.fav);
      }

      if (mockupState.locationSearchQuery && mockupState.locationSearchQuery.trim()) {
        const q = mockupState.locationSearchQuery.trim().toLowerCase();
        list = list.filter((loc) => {
          const nameMatch = loc.name && loc.name.toLowerCase().includes(q);
          const addrMatch = loc.address && loc.address.toLowerCase().includes(q);
          const hoursMatch = loc.hours && loc.hours.toLowerCase().includes(q);
          return nameMatch || addrMatch || hoursMatch;
        });
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
                        ${(mockupState.isLoggedIn && (mockupState.lastOrder || (mockupState.apiOrders && mockupState.apiOrders.length > 0))) ? (() => {
                          const prevLoc = getPreviousOrderLocation();
                          if (!prevLoc) return "";
                          return `
                          <div class="px-[36px] py-5 border-b border-[#1f0b35] bg-gradient-to-r from-violet-600 to-[#1f0b35] flex items-center justify-between gap-3 text-white">
                              <div class="flex items-center gap-2.5 min-w-0">
                                  <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                                      <i class="fa-solid fa-house text-violet-600 text-[10px]"></i>
                                  </div>
                                  <div class="min-w-0">
                                      <p class="text-[11px] font-black text-violet-200 uppercase tracking-widest" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Previous Order</p>
                                      <p class="text-base font-black text-white truncate">${prevLoc.name}${prevLoc.dist ? ` <span class="text-xs font-normal text-violet-200">&nbsp;·&nbsp; ${prevLoc.dist}</span>` : ""}</p>
                                      <p class="text-xs text-violet-200 mt-0.5 truncate">${prevLoc.address}</p>
                                  </div>
                              </div>
                              <button onclick="selectLocation(${prevLoc.locationId}, '${prevLoc.name.replace(/'/g, "\\'")}', '${prevLoc.address.replace(/'/g, "\\'")}', '${prevLoc.dist || ""}')" class="shrink-0 px-4 py-2 bg-white text-violet-600 hover:bg-violet-50 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors active:scale-95">Order Here</button>
                          </div>
                          `;
                        })() : ""}
                        <div class="pt-5 px-5 bg-white">
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-5 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" id="location-search-input" value="${mockupState.locationSearchQuery || ""}" oninput="handleLocationSearchInput(this.value);" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                                <button id="location-search-clear-btn" onclick="clearLocationSearch();" class="location-search-clear-btn text-gray-400 hover:text-gray-600 cursor-pointer p-1" style="${mockupState.locationSearchQuery ? "display: inline-block;" : "display: none;"}"><i class="fa-solid fa-circle-xmark"></i></button>
                            </div>
                            <div class="flex border-b border-gray-100 w-full justify-start gap-8 pb-2">
                                ${[
                                  { id: "Near Me", name: "Near Me" },
                                  { id: "My Locations", name: "My Locations" },
                                  { id: "All", name: "All" },
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
                                        <button onclick="${tab.id === "My Locations" && !mockupState.isLoggedIn ? "navigateTo('sign-in')" : tab.id === "Near Me" ? `requestUserLocation(); updateMockupState('locationFilter', '${tab.id}');` : `updateMockupState('locationFilter', '${tab.id}');`}" class="pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}" style="font-family: 'Roboto', sans-serif;">
                                            ${tab.name}
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                        <div class="location-cards-container flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/30">
                            ${(() => {
                              const set = getSet();
                              if (set.length === 0) {
                                if (!mockupState.apiLocations || mockupState.apiLocations.length === 0) {
                                  const statusHtml = renderLocationsStatusState();
                                  if (statusHtml) return statusHtml;
                                }
                                return `
                                  <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-4">
                                      <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-3">
                                          <i class="fa-solid fa-magnifying-glass text-xl"></i>
                                      </div>
                                      <h3 class="text-sm font-black text-gray-800 uppercase tracking-wide mb-1">No Locations Found</h3>
                                      <p class="text-xs text-gray-500 mb-4">No results matching "${mockupState.locationSearchQuery || ""}"</p>
                                      <button onclick="clearLocationSearch();" class="px-4 py-2 bg-violet-600 text-white rounded-full text-xs font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Clear Search</button>
                                  </div>
                                `;
                              }
                              return set.map(
                                (s, idx) => renderSingleLocationCardHtml(s, idx)
                              ).join("");
                            })()}
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
                    ${(mockupState.isLoggedIn && (mockupState.lastOrder || (mockupState.apiOrders && mockupState.apiOrders.length > 0))) ? (() => {
                      const prevLoc = getPreviousOrderLocation();
                      if (!prevLoc) return "";
                      return `
                      <div class="p-5 bg-gradient-to-r from-violet-600 to-[#1f0b35] border-b border-[#1f0b35] flex items-center justify-between gap-3 shrink-0 z-10 text-white">
                          <div class="flex items-center gap-2.5 min-w-0">
                              <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                                  <i class="fa-solid fa-house text-violet-600 text-[10px]"></i>
                              </div>
                              <div class="min-w-0">
                                  <p class="text-[11px] font-black text-violet-200 uppercase tracking-widest" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Previous Order</p>
                                  <p class="text-base font-black text-white truncate">${prevLoc.name}${prevLoc.dist ? ` <span class="text-xs font-normal text-violet-200">&nbsp;·&nbsp; ${prevLoc.dist}</span>` : ""}</p>
                              </div>
                          </div>
                          <button onclick="selectLocation(${prevLoc.locationId}, '${prevLoc.name.replace(/'/g, "\\'")}', '${prevLoc.address.replace(/'/g, "\\'")}', '${prevLoc.dist || ""}')" class="shrink-0 px-4 py-2 bg-white text-violet-600 hover:bg-violet-50 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm transition-colors active:scale-95">Order Here</button>
                      </div>
                      `;
                    })() : ""}

                    <div class="w-full h-[35%] min-h-[220px] shrink-0 relative z-0">
                        <div id="locations-map" class="absolute inset-0 w-full h-full"></div>
                    </div>

                    <div class="flex-1 overflow-y-auto bg-white z-10 -mt-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.12)] flex flex-col relative pb-6">
                        <div class="pt-5 px-5 shrink-0 sticky top-0 bg-white/95 backdrop-blur-md z-20 rounded-t-3xl">
                            <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"></div>
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-4 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" id="location-search-input" value="${mockupState.locationSearchQuery || ""}" oninput="handleLocationSearchInput(this.value);" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                                <button id="location-search-clear-btn" onclick="clearLocationSearch();" class="location-search-clear-btn text-gray-400 hover:text-gray-600 cursor-pointer p-1" style="${mockupState.locationSearchQuery ? "display: inline-block;" : "display: none;"}"><i class="fa-solid fa-circle-xmark"></i></button>
                            </div>
                            <div class="flex border-b border-gray-100 w-full justify-around pb-1">
                                ${[
                                  { id: "Near Me", name: "Near Me" },
                                  { id: "My Locations", name: "My Locations" },
                                  { id: "All", name: "All" },
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
                                        <button onclick="${tab.id === "My Locations" && !mockupState.isLoggedIn ? "navigateTo('sign-in')" : tab.id === "Near Me" ? `requestUserLocation(); updateMockupState('locationFilter', '${tab.id}');` : `updateMockupState('locationFilter', '${tab.id}');`}" class="pb-2 text-sm uppercase tracking-wide transition-all ${activeClass}" style="font-family: 'Roboto', sans-serif;">
                                            ${tab.name}
                                        </button>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>

                        <div class="location-cards-container p-4 space-y-3 flex-1 bg-gray-50/30">
                            ${(() => {
                              const set = getSet();
                              if (set.length === 0) {
                                if (!mockupState.apiLocations || mockupState.apiLocations.length === 0) {
                                  const statusHtml = renderLocationsStatusState();
                                  if (statusHtml) return statusHtml;
                                }
                                return `
                                  <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-4">
                                      <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-3">
                                          <i class="fa-solid fa-magnifying-glass text-xl"></i>
                                      </div>
                                      <h3 class="text-sm font-black text-gray-800 uppercase tracking-wide mb-1">No Locations Found</h3>
                                      <p class="text-xs text-gray-500 mb-4">No results matching "${mockupState.locationSearchQuery || ""}"</p>
                                      <button onclick="clearLocationSearch();" class="px-4 py-2 bg-violet-600 text-white rounded-full text-xs font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Clear Search</button>
                                  </div>
                                `;
                              }
                              return set.map(
                                (s, idx) => renderSingleLocationCardHtml(s, idx)
                              ).join("");
                            })()}
                        </div>
                    </div>
                </div>`;
    }
  },
  "locations-alt": function() {
    return pages.locations();
  },
  "order-details": () => {
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

    const locationObj = getSelectedLocationInfo();
    const locationTitle =
      mockupState.selectedLocation || locationObj?.name || "Location unavailable";
    const rawLocationAddress =
      locationObj?.address || "Address unavailable";
    const locationAddress = rawLocationAddress
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/,\s*[A-Z]{2}\b/i, (match) => match.toUpperCase());
    const closeTime =
      (locationObj?.hours || "").split("to")[1]?.trim() ||
      "Hours unavailable";
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
          ? `mockupState.fulfillmentMode = '${opt.id}'; mockupState.orderTypeRequiredError = false; navigateTo('menu-scan')`
          : `updateMockupState('fulfillmentMode', '${opt.id}'); mockupState.orderTypeRequiredError = false; navigateTo(mockupState.cart && mockupState.cart.length > 0 ? 'cart' : 'menu');`;

      return `
                <div onclick="${clickHandler}" class="flex flex-col p-4 bg-white rounded-2xl shadow-sm border-2 cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md ${isActive ? "border-violet-600 ring-2 ring-violet-100 bg-violet-50/10" : mockupState.orderTypeRequiredError && !mockupState.fulfillmentMode ? "border-red-400 hover:border-violet-300" : "border-gray-100 hover:border-violet-300"}">
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
                ${
                  isDesktop
                    ? `
                <!-- Location Info Card -->
                <div class="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 mb-5 cursor-pointer active:scale-[0.98] transition-all hover:bg-gray-50 text-left" onclick="navigateTo('locations')">
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
                `
                    : ""
                }

                <div class="text-center mb-5 shrink-0">
                    <h2 class="text-3xl md:text-4xl font-branding font-black text-[#1A1A1A] uppercase tracking-tight leading-tight mb-3">${isDesktop ? "What type of order can we get started for you?" : "Choose Order Type"}</h2>
                    ${isDesktop ? `<p class="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Order ahead for pickup or dine in</p>` : ""}
                </div>


                <div class="${isDesktop ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"} mb-6">
                    ${options.map(renderOptionCard).join("")}
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
                <div class="bg-white border-b border-gray-100 shrink-0 px-3 py-2 flex items-center relative z-50">
                    <div class="min-w-0">
                        <button onclick="toggleMenu(event, 'location-dropdown-order-details-alt')" class="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-bold hover:text-violet-600 hover:bg-violet-100 px-2 py-1.5 rounded-lg transition-colors cursor-pointer min-w-0">
                            <i class="fa-solid fa-location-dot text-violet-600 shrink-0"></i>
                            <span class="truncate max-w-[140px] sm:max-w-[200px] tracking-wider font-medium">${locationAddress.replace(/, [A-Z]{2}(\s\d{5})?$/, "")}</span>
                            <i class="fa-solid fa-chevron-down text-[9px] text-violet-600 shrink-0"></i>
                        </button>
                        <!-- Dropdown Menu -->
                        <div id="location-dropdown-order-details-alt" class="hidden absolute left-4 right-4 sm:left-4 sm:right-auto sm:w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
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
                                            <span class="text-gray-600 font-medium block text-sm">${locationObj.hours || "Hours unavailable"}</span>
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
                                            <span class="text-gray-600 font-medium text-sm">${mockupState.selectedLocationPhone || "Phone unavailable"}</span>
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

                <div class="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden h-full">
                    ${
                      isDesktop
                        ? `
                    <div class="w-[38%] relative h-full shrink-0 overflow-hidden">
                        <img src="images/hero-mobile.png" class="w-full h-full object-cover object-right" style="height: 100% !important; object-fit: cover !important;">
                    </div>
                    `
                        : ""
                    }

                    <div class="flex-1 overflow-y-auto pb-12 w-full">
                        ${mainContent}
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
                ${isDesktop ? `<h2 class="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight font-black text-gray-900 leading-tight">Ready to Dine In?</h2>` : ""}
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
                <div class="mb-4">
                    <button onclick="navigateTo('order-details')" class="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 font-bold uppercase text-xs tracking-widest transition-colors">
                        <i class="fa-solid fa-arrow-left"></i>
                        <span>Back to Order Details</span>
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
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Scan to Dine In</h1>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                </header>

                <div class="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden h-full">
                    ${isDesktop ? imageHtml : ""}

                    <div class="flex-1 overflow-y-auto pb-12 w-full flex items-center justify-center">
                        ${formContentHtml}
                    </div>
                </div>
            </div>`;
  },
  menu: () => renderMenuPage(),
  "menu-single": () => renderMenuPage(),
  customize: () => {
    if (!mockupState.selectedItem) return renderNoItemSelectedState();
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

    const selectedLoc = getSelectedLocationInfo();
    const addressText =
      mockupState.selectedAddress ||
      (selectedLoc ? selectedLoc.address : "Address unavailable");

    const item = mockupState.selectedItem; // guaranteed real — guarded above
    const outOfStock = isItemOutOfStock(item);
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
    extrasTotal += _calculateModifyPricesTotal(detail, modSels);
    const totalPrice = (
      (basePrice + extrasTotal) *
      mockupState.itemQuantity
    ).toFixed(2);

    // ---- DESKTOP LAYOUT ----
    if (isDesktop) {
      return `
                <div class="flex flex-col bg-[#f6f6f6] relative overflow-hidden" style="height: calc(100vh - 70px);">
                    <div class="flex-1 overflow-y-auto">
                        <div class="w-full max-w-3xl mx-auto p-6 md:p-8 pb-4 flex flex-col gap-6">

                            <!-- Page Title -->
                            <div>
                                <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Customize Order</h1>
                                <p class="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">${item.category || ""}</p>
                            </div>

                            <!-- Item Image + Info Card -->
                            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex gap-0">
                                <div class="w-64 shrink-0 p-3">
                                    <div class="w-full aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                        ${outOfStock ? renderOutOfStockOverlay() : ""}
                                    </div>
                                </div>
                                <div class="flex-1 px-8 py-6 flex flex-col justify-center gap-4">
                                    <div>
                                        ${outOfStock ? `<div class="text-xs font-black text-red-600 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Temporarily Out of Stock</div>` : `<div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>`}
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
                                ${renderAllModifierSectionsAlt2(detail, sels, modSels, "grid")}


                            </div>

                        </div>
                    </div>

                    <!-- Sticky Bottom Actions -->
                    <div class="shrink-0 sticky bottom-0 z-30 bg-white border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <div class="w-full max-w-3xl mx-auto px-6 py-5 md:px-8 flex items-center gap-6">
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Options Total</span>
                                <span class="text-lg font-black text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                            </div>
                            <button ${outOfStock ? "disabled" : `onclick="window._addToCart()"`} class="flex-1 ${outOfStock ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-violet-600 text-white hover:bg-violet-700 active:scale-95"} py-4 rounded-full font-black text-lg shadow-lg transition-all uppercase tracking-wider text-center">${outOfStock ? "Currently Unavailable" : `${typeof mockupState.editingCartIndex === "number" && mockupState.editingCartIndex >= 0 ? "Update Item" : "Add to Cart"} — $${totalPrice}`}</button>
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu')" class="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-gray-900 transition-colors whitespace-nowrap">← Back to Menu</button>
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

                    <!-- Details subheader block mimicking menu.html -->
                    <div class="bg-white border-b border-gray-100 flex flex-col items-center justify-center text-center w-full shrink-0 animate-[fadeIn_0.3s_ease-out]">
                        <div class="py-3.5 px-4 w-full relative">
                            <!-- Back Button at the left -->
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu')" class="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                                <span>Back</span>
                            </button>
                            
                            <h1 class="font-branding font-black text-[#1f0b35] text-[32px] tracking-tight leading-none uppercase mb-2">Customize</h1>
                            
                            <div onclick="navigateTo(mockupState.cart && mockupState.cart.length > 0 ? 'cart' : 'order-details')" class="flex flex-col items-center cursor-pointer group hover:opacity-85 transition-opacity">
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
                                ${outOfStock ? renderOutOfStockOverlay() : ""}
                            </div>
                        </div>

                        <!-- Info & Price -->
                        <div class="px-6 pt-5 pb-4 text-center border-b border-gray-100">
                            ${outOfStock ? `<div class="text-xs font-black text-red-600 uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Temporarily Out of Stock</div>` : `<div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>`}
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

                            ${renderAllModifierSectionsAlt2(detail, sels, modSels, "stacked")}



                        </div>
                    </div>

                    <!-- Sticky Bottom Actions -->
                    <div class="p-6 pb-bottom-safe bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <div class="flex justify-between items-center text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">
                            <span>Options Total</span>
                            <span class="text-gray-700">+$${extrasTotal.toFixed(2)}</span>
                        </div>
                        <button ${outOfStock ? "disabled" : `onclick="window._addToCart()"`} class="w-full ${outOfStock ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-violet-600 text-white active:scale-95"} py-4 rounded-full font-black text-lg shadow-lg transition-all uppercase tracking-wider">${outOfStock ? "Currently Unavailable" : `${typeof mockupState.editingCartIndex === "number" && mockupState.editingCartIndex >= 0 ? "Update Item" : "Add to Cart"} - $${totalPrice}`}</button>
                    </div>
                </div>
            `;
  },
  "customize-alt": () => {
    if (!mockupState.selectedItem) return renderNoItemSelectedState();
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

    const selectedLoc = getSelectedLocationInfo();
    const addressText =
      mockupState.selectedAddress ||
      (selectedLoc ? selectedLoc.address : "Address unavailable");

    const item = mockupState.selectedItem; // guaranteed real — guarded above
    const outOfStock = isItemOutOfStock(item);
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
    extrasTotal += _calculateModifyPricesTotal(detail, modSels);
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
                                <div class="w-full aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
                                    <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                    ${outOfStock ? renderOutOfStockOverlay() : ""}
                                </div>
                            </div>
                            <div class="flex-1 px-8 py-6 flex flex-col justify-center gap-4">
                                <div>
                                    ${outOfStock ? `<div class="text-xs font-black text-red-600 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Temporarily Out of Stock</div>` : `<div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>`}
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
                            <button ${outOfStock ? "disabled" : `onclick="window._addToCart()"`} class="flex-1 ${outOfStock ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-violet-600 text-white hover:bg-violet-700 active:scale-95"} py-4 rounded-full font-black text-lg shadow-lg transition-all uppercase tracking-wider text-center">${outOfStock ? "Currently Unavailable" : `${typeof mockupState.editingCartIndex === "number" && mockupState.editingCartIndex >= 0 ? "Update Item" : "Add to Cart"} — $${totalPrice}`}</button>
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu')" class="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-gray-900 transition-colors whitespace-nowrap">← Back to Menu</button>
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

                    <!-- Details subheader block mimicking menu.html -->
                    <div class="bg-white border-b border-gray-100 flex flex-col items-center justify-center text-center w-full shrink-0 animate-[fadeIn_0.3s_ease-out]">
                        <div class="py-3.5 px-4 w-full relative">
                            <!-- Back Button at the left -->
                            <button onclick="navigateTo(mockupState.lastMenuPage || 'menu')" class="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                                <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                                <span>Back</span>
                            </button>
                            
                            <h1 class="font-branding font-black text-[#1f0b35] text-[32px] tracking-tight leading-none uppercase mb-2">Customize</h1>
                            
                            <div onclick="navigateTo(mockupState.cart && mockupState.cart.length > 0 ? 'cart' : 'order-details')" class="flex flex-col items-center cursor-pointer group hover:opacity-85 transition-opacity">
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
                                ${outOfStock ? renderOutOfStockOverlay() : ""}
                            </div>
                        </div>

                        <!-- Info & Price -->
                        <div class="px-6 pt-5 pb-4 text-center border-b border-gray-100">
                            ${outOfStock ? `<div class="text-xs font-black text-red-600 uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Temporarily Out of Stock</div>` : `<div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$${basePrice.toFixed(2)}</div>`}
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
                        <button ${outOfStock ? "disabled" : `onclick="window._addToCart()"`} class="w-full ${outOfStock ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-violet-600 text-white active:scale-95"} py-4 rounded-full font-black text-lg shadow-lg transition-all uppercase tracking-wider">${outOfStock ? "Currently Unavailable" : `${typeof mockupState.editingCartIndex === "number" && mockupState.editingCartIndex >= 0 ? "Update Item" : "Add to Cart"} - $${totalPrice}`}</button>
                    </div>
                </div>
            `;
  },
  cart: () => {
    const isDesktop = currentViewport === "desktop";
    const selectedLoc = getSelectedLocationInfo();
    const addressText =
      mockupState.selectedAddress ||
      (selectedLoc ? selectedLoc.address : "Address unavailable");
    const bagFee = mockupState.bagQuantity * (mockupState.bagMenuItem?.price ?? 0);
    // Dynamic pricing from cart
    consolidateCartItems();
    const cart = mockupState.cart || [];
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );
    const taxRate = mockupState.locationTaxRate || 0.0925;
    const taxes = subtotal * taxRate;
    const convenienceFee = mockupState.locationConvenienceFee || 0;
    const finalTotal = (subtotal + taxes + bagFee + convenienceFee).toFixed(2);

    const monthOffset = mockupState.monthOffset || 0;
    const currentMonth = getCalendarData(monthOffset);

    let calendarCells = "";
    for (let i = 0; i < currentMonth.startDay; i++) {
      calendarCells += `<div></div>`;
    }
    for (let i = 1; i <= currentMonth.days; i++) {
      let isPast = isPastDate(
        currentMonth.targetYear,
        currentMonth.targetMonthIdx,
        i,
      );
      if (isPast) {
        calendarCells += `<div class="py-2 text-gray-300 font-bold text-sm text-center">${i}</div>`;
      } else {
        let label = getDayLabel(
          currentMonth.targetYear,
          currentMonth.targetMonthIdx,
          i,
        );
        let isSelected = mockupState.selectedDay === label;
        calendarCells += `<button onclick="updateMockupState('selectedDay', '${label}'); mockupState.modalOpen = 'time'; navigateTo('cart');" class="py-2 rounded-full font-bold text-sm text-center ${isSelected ? "bg-violet-600 text-white shadow-md flex items-center justify-center shrink-0 w-8 h-8 mx-auto" : "text-gray-800 hover:bg-violet-100 transition-colors flex items-center justify-center shrink-0 w-8 h-8 mx-auto"}">${i}</button>`;
      }
    }
    const totalCells = currentMonth.startDay + currentMonth.days;
    const paddingCells = 42 - totalCells;
    for (let i = 0; i < paddingCells; i++) {
      calendarCells += `<div></div>`;
    }

    const dateModalClass = mockupState.modalOpen === "date" ? "flex" : "hidden";
    const timeModalClass = mockupState.modalOpen === "time" ? "flex" : "hidden";
    const warningModalClass = mockupState.modalOpen === "warning" ? "flex" : "hidden";

    const times15 = getDynamicTimes(mockupState.selectedDay || "Today");
    const isNearClose =
      mockupState.selectedTimeSlot.includes("8:") ||
      mockupState.selectedTimeSlot.includes("9:");

    const hasUnavailableItems = cart.some(item => !isItemAvailableAtCurrentLocation(item) || !isItemInStock(item));
    const selectionNotMade =
      mockupState.bagQuantity === 0 && !mockupState.noBagsSelected;
    const paymentAction = hasUnavailableItems
      ? `alert('Please remove unavailable or out-of-stock items from your cart before checking out.')`
      : selectionNotMade
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
                        + Add Items
                    </button>
                </div>`;
      }
      return `
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
                ${cart
                  .map((item, idx) => {
                    // Build customization summary text
                    const subSummary = (item.selectedSubItems || [])
                      .map((s) => {
                        if (!s) return "";
                        const name = (
                          typeof s === "string"
                            ? s
                            : (s.name || s.menuSubItemName || s.title || s.choiceName || s.label || (s.menuSubItem ? s.menuSubItem.name || s.menuSubItem.menuSubItemName : "") || "")
                        ).trim();
                        if (!name) return "";
                        const qty = typeof s === "object" && s.quantity > 1 ? s.quantity : 1;
                        return qty > 1 ? `${name} x${qty}` : name;
                      })
                      .filter(Boolean)
                      .join(", ");

                    const specialInst = (item.specialInstruction || "").trim();

                    let customSummary = "";
                    if (subSummary && specialInst) {
                      customSummary = `${subSummary} • ${specialInst}`;
                    } else if (subSummary) {
                      customSummary = subSummary;
                    } else if (specialInst) {
                      customSummary = specialInst;
                    } else {
                      customSummary = "No customizations";
                    }

                    const atLocation = isItemAvailableAtCurrentLocation(item);
                    const inStock = isItemInStock(item);
                    const isAvailable = atLocation && inStock;
                    const unavailableReason = !atLocation
                      ? "Not available at this location"
                      : "Temporarily out of stock";
                    const itemTotal = (item.unitPrice * item.quantity).toFixed(
                      2,
                    );

                    return `
                    <div class="flex justify-between items-start p-5 cursor-pointer hover:bg-gray-50 transition-colors group ${isAvailable ? "" : "bg-red-50/10"}" onclick="${isAvailable ? `window.editCartItemAndNavigate(${idx})` : ""}">
                        <div class="flex gap-4 items-start">
                            <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 relative">
                                <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
                                ${isAvailable ? "" : renderOutOfStockOverlay()}
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight ${isAvailable ? "group-hover:text-violet-600" : "line-through opacity-60"}">${item.name}</h3>
                                ${isAvailable ? "" : `
                                <div class="text-[10px] font-black text-red-600 uppercase mt-1 mb-2 flex items-center gap-1">
                                    <i class="fa-solid fa-triangle-exclamation text-[9px]"></i> ${unavailableReason}
                                </div>
                                `}
                                <div class="flex items-start gap-2 mb-3">
                                    <p class="text-[11px] text-gray-500 font-medium line-clamp-2 hover:text-gray-700 transition-colors leading-relaxed flex-1" id="desc-${idx}">${customSummary}</p>
                                </div>
                                <!-- Quantity Controls & Dedicated Delete Trash Icon -->
                                <div class="flex items-center gap-3" onclick="event.stopPropagation()">
                                    <div class="flex items-center bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 px-3 py-1.5 gap-4 w-fit">
                                        <button onclick="window._updateCartQty(${idx}, ${item.quantity - 1})" class="text-gray-700 hover:text-violet-600 transition-colors active:scale-90 flex items-center justify-center" title="Decrease quantity">
                                            <i class="fa-solid fa-minus text-[11px]"></i>
                                        </button>
                                        <span class="font-black text-[13px] text-gray-900 min-w-[12px] text-center">${item.quantity}</span>
                                        <button onclick="window._updateCartQty(${idx}, ${item.quantity + 1})" class="text-gray-700 hover:text-violet-600 transition-colors active:scale-90 flex items-center justify-center" title="Increase quantity">
                                            <i class="fa-solid fa-plus text-[11px]"></i>
                                        </button>
                                    </div>
                                    <button onclick="window._updateCartQty(${idx}, 0)" class="w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-600 transition-all flex items-center justify-center border border-gray-100 active:scale-90 cursor-pointer" title="Remove item from cart">
                                        <i class="fa-regular fa-trash-can text-xs"></i>
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
                    <div class="${isDesktop ? "flex flex-col gap-6 flex-1 min-w-0" : "contents"}">
                        <!-- Consolidated Order Details Card -->
                    <div class="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4 shrink-0 transition-all">
                        <!-- Store Info (Compact) -->
                        <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                            <div class="flex gap-3 items-center">
                                <div class="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                    <i class="fa-solid fa-location-dot text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tighter text-lg leading-none">${(mockupState.selectedLocation || "Location unavailable").replace(/\b\d{5}\b/g, "").trim()}</h3>
                                    <p class="text-[10px] font-bold text-gray-400 mt-1 tracking-wide uppercase">${addressText}</p>
                                    <button onclick="navigateTo('locations')" class="text-[10px] font-black text-violet-600 mt-1 tracking-widest uppercase hover:text-violet-700 transition-colors">Change Location</button>
                                </div>
                            </div>
                            <button onclick="navigateTo('locations')" class="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-100 transition-all">
                                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </button>
                        </div>

                        <!-- Pickup Details (Compact Grid) -->
                        <div class="grid grid-cols-2 gap-4">
                            <div onclick="window.toggleCartEditSection('method')" class="flex gap-3 items-center cursor-pointer group p-2 -m-2 rounded-xl hover:bg-gray-50/80 transition-colors">
                                <div class="w-8 h-8 rounded-lg ${mockupState.cartEditSection === "method" ? "bg-violet-700 ring-2 ring-violet-300" : "bg-violet-600"} flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:scale-105">
                                    <i class="fa-solid ${mockupState.fulfillmentMode === "Delivery" ? "fa-truck" : mockupState.fulfillmentMode === "Curbside" ? "fa-square-parking" : mockupState.fulfillmentMode === "Drive Through" || mockupState.fulfillmentMode === "Drive-thru" ? "fa-car" : "fa-shop"} text-white text-sm"></i>
                                </div>
                                <div class="flex flex-col min-w-0 flex-1">
                                    <div class="flex items-center justify-between">
                                        <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Pickup method</span>
                                        <i class="fa-solid fa-chevron-down text-[8px] text-gray-400 transition-transform ${mockupState.cartEditSection === "method" ? "rotate-180 text-violet-600" : ""}"></i>
                                    </div>
                                    <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight mt-0.5 truncate">${mockupState.fulfillmentMode || "In-store"}</span>
                                </div>
                            </div>
                            <div onclick="window.toggleCartEditSection('time')" class="flex gap-3 items-center cursor-pointer group border-l border-gray-100 pl-4 p-2 -my-2 rounded-xl hover:bg-gray-50/80 transition-colors">
                                <div class="w-8 h-8 rounded-lg ${mockupState.cartEditSection === "time" ? "bg-violet-700 ring-2 ring-violet-300" : "bg-violet-600"} flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:scale-105">
                                    <i class="fa-regular fa-clock text-white text-sm"></i>
                                </div>
                                <div class="flex flex-col min-w-0 flex-1">
                                    <div class="flex items-center justify-between">
                                        <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Pickup time</span>
                                        <i class="fa-solid fa-chevron-down text-[8px] text-gray-400 transition-transform ${mockupState.cartEditSection === "time" ? "rotate-180 text-violet-600" : ""}"></i>
                                    </div>
                                    <span class="text-[11px] font-black text-gray-700 uppercase tracking-tight leading-tight mt-0.5 truncate">${
                                      mockupState.orderTime === "Later"
                                        ? `${mockupState.selectedDay === "Today" ? "Today" : mockupState.selectedDay || "Today"}, ${mockupState.selectedTimeSlot || getEstimatedPickupTime(20)}`
                                        : `ASAP (${getEstimatedPickupTime(20)})`
                                    }</span>
                                </div>
                            </div>
                        </div>

                        <!-- Inline Method Selector Drawer -->
                        ${
                          mockupState.cartEditSection === "method"
                            ? `
                            <div class="pt-3 border-t border-gray-100 flex flex-col gap-2.5 animate-[fadeIn_0.2s_ease-out]">
                                <div class="flex items-center justify-between">
                                    <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider">Select Pickup Method</span>
                                    <button onclick="window.toggleCartEditSection('method')" class="text-[11px] font-black text-violet-600 hover:text-violet-700 uppercase tracking-wider flex items-center gap-1">
                                        Done <i class="fa-solid fa-check text-[9px]"></i>
                                    </button>
                                </div>
                                <div class="grid grid-cols-3 gap-2">
                                    ${[
                                      { label: "In-store", icon: "fa-shop" },
                                      { label: "Drive Through", icon: "fa-car" },
                                      { label: "Curbside", icon: "fa-square-parking" },
                                    ]
                                      .map((m) => {
                                        const mode = mockupState.fulfillmentMode || "In-store";
                                        const isActive =
                                          (m.label === "In-store" && (mode === "In-store" || mode === "In-Store" || mode === "Pickup")) ||
                                          (mode.toLowerCase() === m.label.toLowerCase());
                                        return `
                                            <button onclick="updateMockupState('fulfillmentMode', '${m.label}'); mockupState.cartEditSection = null; navigateTo('cart');" class="flex flex-col items-center justify-center gap-1.5 py-2 px-2 border-2 rounded-xl font-bold transition-all ${isActive ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200" : "bg-white text-gray-700 border-violet-200 hover:border-violet-600 hover:bg-violet-50/50"}">
                                                <i class="fa-solid ${m.icon} text-sm ${isActive ? "text-white" : "text-violet-600"}"></i>
                                                <span class="text-[10px] font-black uppercase tracking-tight">${m.label === "In-store" ? "In-Store" : m.label}</span>
                                            </button>
                                        `;
                                      })
                                      .join("")}
                                </div>
                            </div>
                        `
                            : ""
                        }

                        <!-- Inline Time Selector Drawer -->
                        ${
                          mockupState.cartEditSection === "time"
                            ? `
                            <div class="pt-3 border-t border-gray-100 flex flex-col gap-2.5 animate-[fadeIn_0.2s_ease-out]">
                                <div class="flex items-center justify-between">
                                    <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider">Select Pickup Time</span>
                                    <button onclick="window.toggleCartEditSection('time')" class="text-[11px] font-black text-violet-600 hover:text-violet-700 uppercase tracking-wider flex items-center gap-1">
                                        Done <i class="fa-solid fa-check text-[9px]"></i>
                                    </button>
                                </div>
                                <!-- ASAP vs Schedule Later pills -->
                                ${(() => {
                                  const storeOpenNow = isLocationOpenNow(mockupState.selectedLocationId);
                                  const asapClass = !storeOpenNow
                                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                    : mockupState.orderTime !== "Later"
                                    ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                                    : "bg-white text-gray-700 border-violet-200 hover:border-violet-600";
                                  const asapIconClass = !storeOpenNow
                                    ? "text-gray-300"
                                    : mockupState.orderTime !== "Later"
                                    ? "text-amber-300"
                                    : "text-violet-600";
                                  return `
                                <div class="grid grid-cols-2 gap-2">
                                    <button ${storeOpenNow ? `onclick="updateMockupState('orderTime', 'ASAP'); mockupState.cartEditSection = null; navigateTo('cart');"` : "disabled"} class="py-2.5 px-3 rounded-xl border-2 font-black text-xs uppercase flex items-center justify-center gap-2 transition-all ${asapClass}">
                                        <i class="fa-solid fa-bolt text-xs ${asapIconClass}"></i>
                                        <span>${storeOpenNow ? `ASAP (${getEstimatedPickupTime(20)})` : "ASAP (Store Closed)"}</span>
                                    </button>
                                    <button onclick="updateMockupState('orderTime', 'Later'); navigateTo('cart');" class="py-2.5 px-3 rounded-xl border-2 font-black text-xs uppercase flex items-center justify-center gap-2 transition-all ${mockupState.orderTime === "Later" ? "bg-violet-600 text-white border-violet-600 shadow-sm" : "bg-white text-gray-700 border-violet-200 hover:border-violet-600"}">
                                        <i class="fa-regular fa-clock text-xs ${mockupState.orderTime === "Later" ? "text-white" : "text-violet-600"}"></i>
                                        <span>Schedule Later</span>
                                    </button>
                                </div>
                                  `;
                                })()}

                                ${
                                  mockupState.orderTime === "Later"
                                    ? `
                                    <div class="bg-gray-50/80 rounded-xl p-3 border border-gray-100 flex flex-col gap-2.5 mt-1">
                                         <div class="flex items-center justify-between">
                                             <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider">Date</span>
                                             <div class="relative">
                                                 <select onchange="updateMockupState('selectedDay', this.value); updateMockupState('orderTime', 'Later'); const newTimes = getDynamicTimes(this.value); if (newTimes && newTimes.length > 0 && !newTimes.includes(mockupState.selectedTimeSlot)) { updateMockupState('selectedTimeSlot', newTimes[0]); } navigateTo('cart');" class="appearance-none bg-white border-2 border-violet-100 hover:border-violet-300 rounded-xl px-3 py-1 pr-7 font-black text-xs text-violet-700 outline-none cursor-pointer transition-colors shadow-sm">
                                                     ${getAvailableDays(14).map(day => `
                                                         <option value="${day}" ${mockupState.selectedDay === day ? 'selected' : ''}>${day}</option>
                                                     `).join('')}
                                                 </select>
                                                 <i class="fa-solid fa-chevron-down absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-violet-600 pointer-events-none"></i>
                                             </div>
                                         </div>

                                        <!-- Multi-Row Wrap Time Slot Chips -->
                                        <div class="flex flex-wrap gap-2 py-1">
                                            ${(() => {
                                              const times = getDynamicTimes(
                                                mockupState.selectedDay ||
                                                  "Today",
                                              );
                                              if (!times || times.length === 0) {
                                                return `<span class="text-xs font-bold text-gray-400">Closed for selected date</span>`;
                                              }
                                              return times
                                                .map((t) => {
                                                  const isSelected =
                                                    mockupState.selectedTimeSlot ===
                                                    t;
                                                  return `
                                                        <button onclick="updateMockupState('selectedTimeSlot', '${t}'); updateMockupState('orderTime', 'Later'); mockupState.cartEditSection = null; navigateTo('cart');" class="px-3 py-1.5 rounded-full border-2 font-black text-[11px] shrink-0 transition-all ${isSelected ? "bg-violet-600 text-white border-violet-600 shadow-sm" : "bg-white text-gray-700 border-violet-200 hover:border-violet-600 hover:bg-violet-50/40"}">
                                                            ${t}
                                                        </button>
                                                    `;
                                                })
                                                .join("");
                                            })()}
                                        </div>
                                    </div>
                                `
                                    : ""
                                }
                            </div>
                        `
                            : ""
                        }
                    </div>

                    <!-- Cart Items -->
                    ${renderCartItems()}
                    
                    <button onclick="updateMockupState('menuTab', 'menu'); navigateTo('menu')" class="w-full bg-transparent border-2 border-violet-600 text-violet-600 py-3.5 rounded-full font-black text-sm shadow-[0_8px_25px_-5px_rgba(124,58,237,0.2)] hover:bg-violet-50 active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center gap-2 shrink-0">
                        <i class="fa-solid fa-plus"></i> Add another menu item
                    </button>

                    <!-- Suggested Items Carousel -->
                    <div class="shrink-0">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-3 px-1">Suggested Items</h3>
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
                                const realMenuItems = getActiveMenuItems();
                                crossSellItems = sortedHistoryNames
                                  .map((name) =>
                                    realMenuItems.find(
                                      (mi) =>
                                        (mi.name || "").toLowerCase() ===
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

                              if (finalCrossSells.length < 3) {
                                const otherRealItems = getActiveMenuItems().filter(
                                  (item) =>
                                    !cartItemNames.includes(
                                      item.name.toLowerCase(),
                                    ) &&
                                    !finalCrossSells.some(
                                      (f) => f.name === item.name,
                                    ),
                                );
                                finalCrossSells = [
                                  ...finalCrossSells,
                                  ...otherRealItems,
                                ].slice(0, 5);
                              }

                              if (finalCrossSells.length === 0) {
                                return `<p class="text-xs text-gray-400 italic">No additional suggestions</p>`;
                              }

                              return (window._cartSuggestedItems = finalCrossSells)
                                .map(
                                  (item, idx) => `
                                <div class="snap-start shrink-0 w-36 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-violet-200 transition-all">
                                    <div class="relative w-full h-24 rounded-xl overflow-hidden mb-2">
                                        <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div>
                                        <h4 class="font-black text-gray-900 text-xs leading-tight line-clamp-1 uppercase">${item.name}</h4>
                                        <span class="font-bold text-violet-600 text-xs">$${item.price.toFixed(2)}</span>
                                    </div>
                                    <button onclick="window.quickAddSuggestedItem(${idx})" class="mt-2 w-full py-1.5 rounded-full bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white font-black text-[10px] uppercase tracking-wider transition-colors">
                                        + Add
                                    </button>
                                </div>
                            `,
                                )
                                .join("");
                            })()}
                        </div>
                    </div>

                    </div> <!-- End Left Column -->

                    <!-- Right Column (1/3 width on desktop) -->
                    <div class="${isDesktop ? "w-1/3 flex flex-col gap-6 shrink-0 sticky top-6" : "contents"}">

                    <!-- Bag Option Selector -->
                    <div class="bg-white rounded-2xl p-5 shadow-sm border space-y-4 shrink-0 transition-all ${selectionNotMade ? "border-violet-600 ring-2 ring-violet-600/30" : "border-gray-100"}">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-bag-shopping text-lg"></i>
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Bag Options</h3>
                                <p class="text-[11px] text-gray-400 font-medium leading-tight">State law requires bag fee declaration</p>
                            </div>
                        </div>

                        <!-- Bags Quantity Selector -->
                        <div class="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                            <div>
                                <span class="font-bold text-gray-800 text-xs block">Need Plastic Bags?</span>
                                <span class="text-[10px] text-gray-400 font-semibold">10¢ per bag</span>
                            </div>
                            <div class="flex items-center bg-white rounded-full border border-gray-200 px-3 py-1 gap-4 shadow-sm">
                                <button onclick="adjustBagQuantity(-1)" class="text-gray-600 hover:text-red-500 transition-colors p-1 cursor-pointer"><i class="fa-solid fa-minus text-[10px]"></i></button>
                                <span class="font-black text-sm text-gray-900 min-w-[16px] text-center">${mockupState.bagQuantity}</span>
                                <button onclick="adjustBagQuantity(1)" class="text-gray-600 hover:text-violet-600 transition-colors p-1 cursor-pointer"><i class="fa-solid fa-plus text-[10px]"></i></button>
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <button onclick="if(mockupState.noBagsSelected){ mockupState.noBagsSelected = false; updateMockupState('bagQuantity', 0); } else { mockupState.bagQuantity = 0; updateMockupState('noBagsSelected', true); }" 
                                    class="flex-1 py-2 px-3 rounded-xl border-2 text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${mockupState.noBagsSelected ? "bg-violet-600 text-white border-violet-600 shadow-md" : "bg-white text-violet-600 border-violet-600 hover:bg-violet-50"}">
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
                        <button onclick="${paymentAction}" class="${isDesktop ? "block" : "hidden"} w-full mt-4 ${hasUnavailableItems ? "bg-gray-400 cursor-not-allowed opacity-75 shadow-none" : "bg-violet-600 hover:bg-violet-700 active:scale-95 shadow-[0_8px_20px_-5px_rgba(124,58,237,0.3)]"} text-white px-6 py-4 rounded-full font-black text-[15px] transition-all uppercase tracking-wider text-center">
                            ${hasUnavailableItems ? "Unavailable Items in Cart" : `Checkout $${finalTotal}`}
                        </button>
                    </div>
                    
                    </div> <!-- End Right Column -->
                </div>

                <!-- Floating Checkout Button -->
                <div class="absolute bottom-8 left-0 right-0 w-full z-[60] pointer-events-none px-6 flex justify-center ${isDesktop ? "hidden" : ""}">
                    <div class="w-full max-w-[1080px] flex justify-end">
                        <button onclick="${paymentAction}" class="pointer-events-auto w-full sm:w-auto ${hasUnavailableItems ? "bg-gray-400 cursor-not-allowed opacity-75 shadow-none" : "bg-violet-600 shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] active:scale-95 hover:bg-violet-700"} text-white px-8 py-4 rounded-full font-black text-lg transition-all uppercase tracking-wider">
                            ${hasUnavailableItems ? "Unavailable Items in Cart" : `Checkout $${finalTotal}`}
                        </button>
                    </div>
                </div>

                <!-- Date Modal -->
                <div id="date-modal" class="fixed inset-0 bg-black/60 z-[99999] ${dateModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                    <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"} flex flex-col max-h-[85vh]">
                        <div class="flex justify-between items-center mb-5 shrink-0">
                            <h3 class="font-black text-xl uppercase text-gray-900">Choose Day</h3>
                            <button onclick="mockupState.modalOpen = null; navigateTo('cart');" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm overflow-y-auto scrollbar-hide">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <button onclick="mockupState.monthOffset = Math.max(0, (mockupState.monthOffset||0) - 1); navigateTo('cart');" class="${monthOffset === 0 ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-violet-600 transition-colors"} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-left text-sm"></i></button>
                                <span class="font-black text-sm uppercase tracking-widest text-gray-800">${currentMonth.name}</span>
                                <button onclick="mockupState.monthOffset = Math.min(2, (mockupState.monthOffset||0) + 1); navigateTo('cart');" class="${monthOffset === 2 ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-violet-600 transition-colors"} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-right text-sm"></i></button>
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
                <div id="time-modal" class="fixed inset-0 bg-black/60 z-[99999] ${timeModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                    <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"} flex flex-col max-h-[90vh]">
                        <div class="flex justify-between items-center mb-5 shrink-0">
                            <h3 class="font-black text-xl uppercase text-gray-900">Choose Time</h3>
                            <button onclick="mockupState.modalOpen = null; navigateTo('cart');" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        
                        <div class="flex-1 flex flex-col min-h-0 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mb-5">
                            <div class="overflow-y-auto scrollbar-hide h-[230px] pr-1">
                                <div class="grid grid-cols-3 gap-2">
                                    ${
                                      times15.length > 0
                                        ? times15
                                            .map((time, idx) => {
                                              const isThisTimeNearClose =
                                                time.includes("8:") ||
                                                time.includes("9:");
                                              const clickAction =
                                                isThisTimeNearClose &&
                                                !mockupState.acknowledgedClose
                                                  ? `updateMockupState('selectedTimeSlot', '${time}'); mockupState.modalOpen = 'warning'; navigateTo('cart');`
                                                  : `updateMockupState('selectedTimeSlot', '${time}'); navigateTo('cart');`;

                                              return `
                                        <button id="time-slot-${idx}" onclick="${clickAction}" class="py-3 rounded-full border-2 ${mockupState.selectedTimeSlot === time ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200" : "border-gray-100 text-gray-700 hover:border-violet-300 bg-white"} font-black text-[11px] transition-all tracking-tight whitespace-nowrap">${time}</button>
                                        `;
                                            })
                                            .join("")
                                        : `<div class="col-span-3 py-10 text-center flex flex-col items-center"><i class="fa-solid fa-store-slash text-2xl text-gray-300 mb-2"></i><p class="text-gray-500 font-bold text-sm">Closed for this date</p></div>`
                                    }
                                </div>
                            </div>

                            <div class="mt-4 pt-4 border-t border-gray-100 shrink-0">
                                <label class="block text-[10px] font-black text-violet-600 uppercase tracking-widest mb-3">Or enter a custom pickup time</label>
                                <div class="flex items-center gap-3">
                                    <div class="relative flex-1">
                                        <i class="fa-regular fa-clock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="time" class="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-600 focus:ring-0 font-bold text-gray-800 outline-none transition-colors" onchange="let val = this.value; let parts = val.split(':'); let h = parseInt(parts[0]); let ampm = h >= 12 ? 'PM' : 'AM'; h = h % 12; h = h || 12; let formatted = h + ':' + parts[1] + ' ' + ampm; updateMockupState('selectedTimeSlot', formatted); updateMockupState('orderTime', 'Later'); if(h >= 8 && ampm === 'PM') { mockupState.modalOpen = 'warning'; mockupState.acknowledgedClose = false; } navigateTo('cart');" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div class="shrink-0 pb-2">
                            <button onclick="
                                if(${isNearClose} && !mockupState.acknowledgedClose) {
                                    mockupState.modalOpen = 'warning';
                                    navigateTo('cart');
                                } else {
                                    mockupState.modalOpen = null;
                                    navigateTo('cart');
                                }
                            " class="w-full py-4 rounded-full bg-violet-600 text-white font-black uppercase text-sm tracking-widest shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] transition-all active:scale-95">Confirm Time</button>
                        </div>
                    </div>
                </div>

                <!-- Warning Modal -->
                <div id="warning-modal" class="fixed inset-0 bg-black/60 z-[99999] ${warningModalClass} flex-col justify-center items-center backdrop-blur-sm p-4">
                    <div class="bg-red-600 w-full sm:w-[380px] max-w-full rounded-3xl p-6 shadow-2xl ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"} flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <i class="fa-solid fa-clock text-red-600 text-3xl"></i>
                        </div>
                        
                        <h3 class="font-black text-2xl uppercase text-white mb-2 leading-tight">Store Closes<br>at 9:00 PM</h3>
                        
                        <p class="text-red-100 font-bold mb-8 px-2">
                            ${isNearClose ? "You have selected a pickup time within an hour of close. Please ensure you pick up your order before our doors close." : "Please ensure you pick up your order before our doors close."}
                        </p>
                        
                        <button onclick="updateMockupState('acknowledgedClose', true); mockupState.modalOpen = null; navigateTo('cart');" class="w-full py-4 rounded-full bg-white text-red-600 font-black uppercase text-sm tracking-widest shadow-xl hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-check text-lg"></i> I Understand
                        </button>
                        
                        <button onclick="mockupState.modalOpen = 'time'; navigateTo('cart');" class="mt-4 text-red-200 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Go Back</button>
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
    const enabledLocs = getEnabledLocations();
    const storedFavs = JSON.parse(localStorage.getItem("farebites_location_favorites") || "{}");
    const savedLocsCount = enabledLocs.filter((l) => !!storedFavs[l.name]).length;

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
                        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-5 relative shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"}">
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
                        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-6 relative shadow-2xl ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"}">
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
                                        <input type="password" id="pwd-current" autocomplete="current-password" class="w-full border-2 border-gray-100 rounded-xl pl-4 pr-12 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                        <button type="button" onclick="togglePasswordVisibility('pwd-current', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 focus:outline-none">
                                            <i class="fa-regular fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">New Password</label>
                                    <div class="relative">
                                        <input type="password" id="pwd-new" autocomplete="new-password" class="w-full border-2 border-gray-100 rounded-xl pl-4 pr-12 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                        <button type="button" onclick="togglePasswordVisibility('pwd-new', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 focus:outline-none">
                                            <i class="fa-regular fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">Confirm New Password</label>
                                    <div class="relative">
                                        <input type="password" id="pwd-confirm" autocomplete="new-password" class="w-full border-2 border-gray-100 rounded-xl pl-4 pr-12 py-3 font-bold text-gray-800 text-sm focus:outline-none focus:border-violet-400 transition-colors">
                                        <button type="button" onclick="togglePasswordVisibility('pwd-confirm', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 focus:outline-none">
                                            <i class="fa-regular fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <button onclick="handleChangePassword()" class="w-full mt-2 py-4 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-violet-700 transition-colors active:scale-95">
                                    Update Password
                                </button>
                                <div id="pwd-error-log" class="mt-4 p-3 bg-gray-100 text-xs text-red-700 font-mono rounded-lg hidden whitespace-pre-wrap break-all border border-red-200 shadow-inner overflow-y-auto max-h-48"></div>
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
                        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                    <i class="fa-solid fa-clock-rotate-left text-lg"></i>
                                </div>
                                <span class="font-black uppercase tracking-tight text-gray-900 text-sm">Order History</span>
                            </div>
                            <button onclick="updateMockupState('showAllHistory', !mockupState.showAllHistory)" class="text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest flex items-center gap-1 transition-colors">
                                View All <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </button>
                        </div>

                        <div id="order-history-container" class="divide-y divide-gray-100">
                            ${(() => {
                              let allOrders = getAllUserOrders();

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
                                ? allOrders.length
                                : 3;
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
                                  const foundLoc = getSelectedLocationInfo(order.locationId);
                                  const locationName = foundLoc?.name || "Location unavailable";

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
                                                       `<p class="text-xs text-gray-500 font-medium">${item.quantity || 1} × ${item.name || item.menuItemName || "Item"}</p>`,
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

                              if (!mockupState.showAllHistory) {
                                html += `
                                           <div class="px-5 py-4 text-center">
                                               <button onclick="updateMockupState('showAllHistory', true)" class="w-full py-3 rounded-xl border-2 border-dashed border-violet-300 text-violet-600 font-black text-xs uppercase tracking-widest hover:border-violet-400 hover:bg-violet-50/50 transition-all flex items-center justify-center gap-2">
                                                   <i class="fa-solid fa-chevron-down text-[10px]"></i> View More Past Orders
                                               </button>
                                           </div>
                                       `;
                              } else {
                                html += `
                                           <div class="px-5 py-4 text-center">
                                               <button onclick="updateMockupState('showAllHistory', false)" class="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-500 font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                                   <i class="fa-solid fa-chevron-up text-[10px]"></i> Show Less
                                               </button>
                                           </div>
                                       `;
                              }

                              return html;
                            })()}
                        </div>
                    </div>


                    <!-- Logout -->
                    <button onclick="signOutUser()" class="w-full py-4 rounded-full border-2 border-gray-200 text-gray-700 font-black uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
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
                                    <button onclick="handleDeleteAccount()" id="delete-account-btn" class="w-full py-5 bg-red-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
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

    ensureLastOrderLoaded();
    const order = mockupState.lastOrder;
    if (!order) return renderNoOrderState("Order Status");

    const orderLocationId = order.locationId ?? mockupState.selectedLocationId;
    const locationName =
      order.locationName || getSelectedLocationInfo(orderLocationId)?.name || "Location unavailable";
    const readyEstimate = getOrderReadyEstimate(order);
    const miniStatusLabel = order.isCanceled
      ? "Canceled"
      : order.deliverectOrderAcceptedDate
      ? "Preparing"
      : "Confirming";

    return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <!-- Subtle top-aligned brand gradient overlay fading down -->
                <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>

                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0">
                    <button onclick="openHamburger()" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-violet-600 transition-colors mr-4"><i class="fa-solid fa-bars text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase text-gray-900 flex-1 text-center">Order Status</h1>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:opacity-80 transition-opacity cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>${mockupState.cartItemCount > 0 ? `<span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">${mockupState.cartItemCount}</span>` : ""}</button>
                </header>
                ${
                  !isDesktop
                    ? `
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2 relative z-10">
                    <button onclick="navigateTo('account')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }
                
                <div class="${isDesktop ? "flex-1 overflow-y-auto p-6 md:p-8 max-w-3xl mx-auto w-full space-y-6 scrollbar-hide relative z-10" : "flex-1 overflow-y-auto space-y-6 scrollbar-hide relative z-10"}">
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
                        ? renderOrderDetailsCard(order, locationName)
                        : `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1">${miniStatusLabel}</h2>
                        <p class="text-sm font-bold text-gray-500">${readyEstimate.label}</p>
                    </div>
                    `
                    }

                    ${renderOrderStatusTimeline(order)}
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

    ensureLastOrderLoaded();
    const order = mockupState.lastOrder;
    if (!order) return renderNoOrderState("Track Order");

    const orderLocationId = order.locationId ?? mockupState.selectedLocationId;
    const locationName =
      order.locationName || getSelectedLocationInfo(orderLocationId)?.name || "Location unavailable";
    const readyEstimate = getOrderReadyEstimate(order);
    const miniStatusLabel = order.isCanceled
      ? "Canceled"
      : order.deliverectOrderAcceptedDate
      ? "Preparing"
      : "Confirming";

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
                        ? renderOrderDetailsCard(order, locationName)
                        : `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1">${miniStatusLabel}</h2>
                        <p class="text-sm font-bold text-gray-500">${readyEstimate.label}</p>
                    </div>
                    `
                    }

                    ${renderOrderStatusTimeline(order)}
                    ${
                      isDesktop
                        ? `
                    <div class="pt-4 space-y-3">
                        <button onclick="alert('Calling store at ${mockupState.selectedLocationPhone || "our restaurant"}...')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-violet-700">
                            <i class="fa-solid fa-phone"></i> Contact Store
                        </button>
                        <button onclick="navigateTo('restaurant-home')" class="w-full py-2 text-gray-400 font-extrabold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">Back to Home</button>
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
                        <button onclick="alert('Calling store at ${mockupState.selectedLocationPhone || "our restaurant"}...')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-violet-700">
                            <i class="fa-solid fa-phone"></i> Contact Store
                        </button>
                        <button onclick="navigateTo('restaurant-home')" class="w-full py-2 text-gray-400 font-extrabold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">Back to Home</button>
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
                <!-- Subtle top-aligned brand gradient overlay fading down -->
                <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>

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
                
                <div class="w-full max-w-3xl mx-auto p-6 md:p-8 flex flex-col gap-8 font-sans relative z-10">
                    <div class="text-center mb-2">
                        <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Register</h1>
                        <p class="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2">Create a new account</p>
                        <p class="text-[10px] font-bold text-gray-400 tracking-widest mt-3"><span class="text-red-500">*</span> Required field</p>
                    </div>

                    <div class="${isDesktop ? "bg-white rounded-2xl p-8 shadow-sm border border-gray-100" : ""} flex flex-col gap-8">
                        <div class="space-y-6">
                            <!-- Account Info Section -->
                            <div class="space-y-4">
                                <h3 class="text-sm font-black text-violet-600 uppercase tracking-widest border-b border-violet-50 pb-2">Account Info</h3>

                                <div class="space-y-1.5">
                                    <label for="reg-email" class="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Email <span class="text-red-500" aria-hidden="true">*</span></label>
                                    <div class="relative">
                                        <i class="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="email" id="reg-email" autocomplete="email" required aria-required="true" aria-describedby="reg-email-error" placeholder="email@example.com" oninput="clearRegFieldError('reg-email')" onblur="validateRegField('reg-email')" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                    </div>
                                    <p id="reg-email-error" role="alert" class="hidden text-[11px] font-bold text-red-500 px-1 pt-1 normal-case tracking-normal"></p>
                                </div>

                                <div class="space-y-4">
                                    <div class="space-y-1.5">
                                        <label for="reg-password" class="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Password <span class="text-red-500" aria-hidden="true">*</span></label>
                                        <div class="relative">
                                            <i class="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="password" id="reg-password" autocomplete="new-password" required aria-required="true" aria-describedby="reg-password-error reg-password-requirements" placeholder="Password" oninput="handleRegPasswordInput()" onblur="validateRegField('reg-password')" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                        </div>
                                        <p id="reg-password-error" role="alert" class="hidden text-[11px] font-bold text-red-500 px-1 pt-1 normal-case tracking-normal"></p>
                                        <div id="reg-password-requirements" class="hidden px-1 pt-2 space-y-2">
                                            <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div id="reg-password-bar" class="h-full w-0 rounded-full bg-gray-300 transition-all duration-300"></div>
                                            </div>
                                            <p id="reg-password-strength" class="text-[10px] font-black uppercase tracking-widest text-gray-400"></p>
                                            <ul class="space-y-1 pt-0.5 normal-case tracking-normal">
                                                <li id="reg-pw-length" class="flex items-center gap-2 text-[11px] font-bold text-gray-400"><i class="fa-solid fa-circle-xmark w-3.5 text-center"></i><span>At least 6 characters</span></li>
                                                <li id="reg-pw-upper" class="flex items-center gap-2 text-[11px] font-bold text-gray-400"><i class="fa-solid fa-circle-xmark w-3.5 text-center"></i><span>One uppercase letter</span></li>
                                                <li id="reg-pw-lower" class="flex items-center gap-2 text-[11px] font-bold text-gray-400"><i class="fa-solid fa-circle-xmark w-3.5 text-center"></i><span>One lowercase letter</span></li>
                                                <li id="reg-pw-number" class="flex items-center gap-2 text-[11px] font-bold text-gray-400"><i class="fa-solid fa-circle-xmark w-3.5 text-center"></i><span>One number</span></li>
                                                <li id="reg-pw-special" class="flex items-center gap-2 text-[11px] font-bold text-gray-400"><i class="fa-solid fa-circle-xmark w-3.5 text-center"></i><span>One special character <span class="text-gray-300">(recommended)</span></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="space-y-1.5">
                                        <label for="reg-confirm-password" class="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Confirm Password <span class="text-red-500" aria-hidden="true">*</span></label>
                                        <div class="relative">
                                            <i class="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="password" id="reg-confirm-password" autocomplete="new-password" required aria-required="true" aria-describedby="reg-confirm-password-error" placeholder="Confirm Password" oninput="clearRegFieldError('reg-confirm-password')" onblur="validateRegField('reg-confirm-password')" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                        </div>
                                        <p id="reg-confirm-password-error" role="alert" class="hidden text-[11px] font-bold text-red-500 px-1 pt-1 normal-case tracking-normal"></p>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer Info Section -->
                            <div class="space-y-4">
                                <h3 class="text-sm font-black text-violet-600 uppercase tracking-widest border-b border-violet-50 pb-2">Customer Info</h3>

                                <div class="space-y-4">
                                    <div class="space-y-1.5">
                                        <label for="reg-first-name" class="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">First Name <span class="text-red-500" aria-hidden="true">*</span></label>
                                        <input type="text" id="reg-first-name" autocomplete="given-name" required aria-required="true" aria-describedby="reg-first-name-error" placeholder="First Name" oninput="clearRegFieldError('reg-first-name')" onblur="validateRegField('reg-first-name')" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                        <p id="reg-first-name-error" role="alert" class="hidden text-[11px] font-bold text-red-500 px-1 pt-1 normal-case tracking-normal"></p>
                                    </div>
                                    <div class="space-y-1.5">
                                        <label for="reg-last-name" class="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Last Name <span class="text-red-500" aria-hidden="true">*</span></label>
                                        <input type="text" id="reg-last-name" autocomplete="family-name" required aria-required="true" aria-describedby="reg-last-name-error" placeholder="Last Name" oninput="clearRegFieldError('reg-last-name')" onblur="validateRegField('reg-last-name')" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                        <p id="reg-last-name-error" role="alert" class="hidden text-[11px] font-bold text-red-500 px-1 pt-1 normal-case tracking-normal"></p>
                                    </div>
                                </div>

                                <div class="space-y-1.5">
                                    <label for="reg-phone" class="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Phone Number <span class="text-red-500" aria-hidden="true">*</span></label>
                                    <div class="relative">
                                        <i class="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="tel" id="reg-phone" autocomplete="tel" required aria-required="true" aria-describedby="reg-phone-error" placeholder="(555) 000-0000" oninput="clearRegFieldError('reg-phone')" onblur="validateRegField('reg-phone')" class="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                    </div>
                                    <p id="reg-phone-error" role="alert" class="hidden text-[11px] font-bold text-red-500 px-1 pt-1 normal-case tracking-normal"></p>
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
                                    <input type="text" id="reg-street" autocomplete="street-address" placeholder="Address" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-sm">
                                </div>

                                <div class="grid grid-cols-2 gap-3">
                                    <div class="space-y-1.5 text-sm">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">City</label>
                                        <input type="text" id="reg-city" autocomplete="address-level2" placeholder="City" class="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all">
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 text-sm">
                                        <div class="space-y-1.5">
                                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">State</label>
                                            <input type="text" id="reg-state" autocomplete="address-level1" placeholder="AZ" class="w-full px-2 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-center">
                                        </div>
                                        <div class="space-y-1.5">
                                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Zip</label>
                                            <input type="text" id="reg-zip" autocomplete="postal-code" placeholder="85281" class="w-full px-2 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 rounded-2xl outline-none font-bold text-gray-900 transition-all text-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div id="reg-error" role="alert" class="hidden mb-3 rounded-2xl bg-red-50 border border-red-100 px-4 py-3 text-xs font-bold text-red-600 text-center leading-relaxed"></div>
                            <button id="reg-submit" onclick="handleRegistration()" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-widest font-black disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0">Create Account</button>
                        </div>

                        <div class="text-center">
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Already have an account? <button onclick="navigateTo('sign-in')" class="text-violet-600 ml-1 font-black underline underline-offset-4">Sign In</button></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
  "registration-success": () => {
    const isDesktop = currentViewport === "desktop";
    return `
            <div class="flex flex-col h-full ${isDesktop ? "bg-[#f6f6f6]" : "bg-white"} relative overflow-y-auto">
                <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black">
                    <span class="text-lg font-black text-violet-600 flex-1 text-center">Account Created</span>
                </header>
                
                <div class="w-full max-w-xl mx-auto p-6 md:p-12 flex flex-col items-center justify-center min-h-[60vh] gap-8 font-sans relative z-10 text-center">
                    <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fa-solid fa-check text-4xl text-green-500"></i>
                    </div>
                    
                    <div>
                        <h1 class="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">Success!</h1>
                        <p class="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                            Your account has been created successfully. A verification email has been sent to your inbox.
                        </p>
                        
                        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left flex gap-4 items-start mb-8 shadow-sm">
                            <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
                            <div>
                                <h4 class="text-xs font-black text-amber-800 uppercase tracking-widest mb-1">Check Your Spam Folder</h4>
                                <p class="text-xs text-amber-700 font-bold leading-relaxed">
                                    If you don't see the verification email in your inbox within a few minutes, please check your spam or junk folder.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex flex-col gap-4">
                        <button onclick="navigateTo('sign-in')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-widest">
                            Sign In to Account
                        </button>
                        <button onclick="navigateTo('restaurant-home')" class="w-full bg-white border-2 border-gray-200 text-gray-600 py-4 rounded-full font-black text-lg hover:bg-gray-50 active:scale-95 transition-all uppercase tracking-widest">
                            Back to Homepage
                        </button>
                    </div>
                </div>
            </div>
        `;
  },

  "order-confirm": () => {
    const isDesktop = currentViewport === "desktop";

    ensureLastOrderLoaded();

    const order = mockupState.lastOrder || {};
    let orderNum = order.orderId || order.orderNumber || "Pending";
    if (orderNum !== "Pending" && !String(orderNum).startsWith("FB-")) {
      orderNum = "FB-" + orderNum;
    }
    const orderLocationId = order.locationId ?? mockupState.selectedLocationId;
    const selectedLoc = getSelectedLocationInfo(orderLocationId) || {};
    const locationName =
      order.locationName || selectedLoc.name || "Location unavailable";
    const locationAddress =
      order.locationAddress ||
      selectedLoc.address ||
      selectedLoc.streetAddress ||
      "Address unavailable";
    const pickupTime = getOrderReadyEstimate(order).time;
    const pickupTimeLabel = pickupTime ? formatOrderTime(pickupTime) : "--";

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
                    <button onclick="resumeLastOrderLocation(); navigateTo('menu', { replace: true })" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
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
                            <p class="text-gray-500 font-medium mb-6">Your order <span class="text-violet-600 font-black">#${orderNum}</span> is being sent to the kitchen.</p>
                            <div class="relative mb-8 mx-auto w-fit text-left">
                                <div onclick="toggleMenu(event, 'location-dropdown-order-confirm')" class="inline-flex items-center gap-2 cursor-pointer group hover:opacity-85 transition-opacity px-2 text-left">
                                    <i class="fa-solid fa-location-dot text-violet-600 text-xl"></i>
                                    <div class="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                                        <span class="text-sm font-black text-gray-900 uppercase tracking-tight">${locationName}</span>
                                        <span class="text-xs font-bold text-gray-500 uppercase tracking-tight">${locationAddress}</span>
                                        <i class="fa-solid fa-chevron-down text-violet-600 text-[10px] transition-transform group-hover:translate-y-0.5 mt-0.5"></i>
                                    </div>
                                </div>
                                <!-- Dropdown Menu -->
                                <div id="location-dropdown-order-confirm" class="hidden absolute left-1/2 -translate-x-1/2 w-[320px] top-[calc(100%+0.5rem)] z-[100] animate-[slideUp_0.2s_ease-out]">
                                    <div class="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-5 text-left">
                                        <h4 class="font-black text-gray-900 text-base mb-1 uppercase tracking-tight">${locationName}</h4>
                                        <p class="text-sm text-gray-500 mb-4 font-medium">${locationAddress}</p>
                                        <div class="space-y-3 text-sm">
                                            <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                                <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                                    <i class="fa-solid fa-phone text-violet-600 text-sm"></i>
                                                </div>
                                                <div>
                                                    <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Phone</span>
                                                    <span class="text-gray-600 font-medium text-sm">${mockupState.selectedLocationPhone || selectedLoc.phone || "Phone unavailable"}</span>
                                                </div>
                                            </div>
                                            <div class="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-sm">
                                                <div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                                    <i class="fa-regular fa-clock text-violet-600 text-sm"></i>
                                                </div>
                                                <div>
                                                    <span class="font-black text-gray-700 block uppercase tracking-wider text-[11px] mb-0.5">Hours</span>
                                                    <span class="text-gray-600 font-medium block text-sm">${selectedLoc.hours || "Hours unavailable"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100 flex flex-col justify-center">
                                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 leading-none">Pick Up Time</div>
                                <div class="text-2xl font-black text-violet-600 uppercase">${pickupTimeLabel}</div>
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
                            ? renderOrderDetailsCard(order, locationName)
                            : ""
                        }

                        <div class="w-full space-y-4 pt-4">
                            <button onclick="resumeLastOrderLocation(); navigateTo('menu', { replace: true })" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">Order Again</button>
                            <button onclick="navigateTo('home', { replace: true })" class="w-full py-2 text-gray-400 font-extrabold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">Back to Home</button>
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
    if (cart.length === 0) {
      setTimeout(() => {
        if (mockupState.lastOrder) {
          navigateTo("order-confirm", { replace: true });
        } else {
          navigateTo("menu", { replace: true });
        }
      }, 0);
      return `<div class="flex items-center justify-center min-h-screen bg-[#f6f6f6] p-8 text-center"><p class="text-gray-500 font-bold">Redirecting...</p></div>`;
    }
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );
    const taxRate = mockupState.locationTaxRate || 0.0925;
    const taxes = subtotal * taxRate;
    const bagFee = mockupState.bagQuantity * (mockupState.bagMenuItem?.price ?? 0);
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

    const pickupTimeDisplay =
      mockupState.orderTime === "Later"
        ? `${mockupState.selectedDay === "Today" ? "Today" : mockupState.selectedDay || "Today"}, ${mockupState.selectedTimeSlot || getEstimatedPickupTime(20)}`
        : `ASAP (${getEstimatedPickupTime(20)})`;

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

                    <!-- Pickup Details -->
                    <div>
                        <h2 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Pickup Details</h2>
                        <div onclick="navigateTo('cart')" class="bg-white rounded-[24px] ${isDesktop ? "p-4" : "p-3.5"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-violet-50/50 hover:border-violet-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-[16px] bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all flex items-center justify-center text-gray-400 group-hover:text-violet-500">
                                    <i class="fa-regular fa-clock text-xl"></i>
                                </div>
                                <div>
                                    <span class="font-black text-gray-900 uppercase text-sm block tracking-tight">${mockupState.fulfillmentMode || "In-store"}</span>
                                    <span class="text-xs font-bold text-violet-600 uppercase tracking-widest mt-0.5 block">${pickupTimeDisplay}</span>
                                </div>
                            </div>
                            <span class="text-[10px] font-black text-violet-600 uppercase tracking-widest group-hover:underline shrink-0">Edit</span>
                        </div>
                    </div>

                    
                    <!-- Payment Methods -->
                    <div>
                        <h2 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Payment Method</h2>
                        <div class="space-y-3">
                            <!-- Card -->
                            <div onclick="updateMockupState('modalOpen', 'payment-card')" class="bg-white rounded-[24px] ${isDesktop ? "p-4" : "p-3.5"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-violet-50/50 hover:border-violet-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-[16px] bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all flex items-center justify-center text-gray-400 group-hover:text-violet-500">
                                        <i class="fa-solid fa-credit-card text-xl"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-900 uppercase text-sm block tracking-tight">Credit or Debit Card</span>
                                        <span class="text-xs font-bold text-violet-600 uppercase tracking-widest mt-0.5 block">Ending in 442</span>
                                    </div>
                                </div>
                                <div class="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-violet-100 flex items-center justify-center transition-colors">
                                    <i class="fa-solid fa-chevron-right text-[10px] text-gray-400 group-hover:text-violet-600"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tipping Section -->
                    <div>
                        <h2 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Add a Tip</h2>
                        <div class="grid grid-cols-4 gap-3">
                            ${[10, 15, 20, "other"]
                              .map((val) => {
                                const isSelected =
                                  mockupState.tipPercentage === val;
                                const action =
                                  val === "other"
                                    ? "updateMockupState('modalOpen', 'tip-other')"
                                    : `updateMockupState('tipPercentage', ${val})`;

                                if (val === "other") {
                                  return `
                                        <button onclick="${action}" class="flex flex-col items-center justify-center py-2.5 rounded-2xl border-2 transition-all duration-300 ${isSelected ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_16px_-6px_rgba(124,58,237,0.4)] scale-[1.02]" : "bg-white text-gray-500 border-gray-100 hover:border-violet-200 hover:bg-violet-50 hover:-translate-y-0.5"}">
                                            <span class="font-black uppercase text-lg leading-tight tracking-tighter">Other</span>
                                            <span class="text-[10px] font-bold opacity-80 uppercase tracking-widest mt-0.5">Custom</span>
                                        </button>
                                    `;
                                } else {
                                  const amount = (
                                    subtotal *
                                    (val / 100)
                                  ).toFixed(2);
                                  return `
                                        <button onclick="${action}" class="flex flex-col items-center justify-center py-2.5 rounded-2xl border-2 transition-all duration-300 ${isSelected ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_16px_-6px_rgba(124,58,237,0.4)] scale-[1.02]" : "bg-white text-gray-500 border-gray-100 hover:border-violet-200 hover:bg-violet-50 hover:-translate-y-0.5"}">
                                            <span class="font-black uppercase text-2xl leading-none tracking-tighter">${val}%</span>
                                            <span class="text-[11px] font-black ${isSelected ? "text-violet-200" : "text-gray-400"} mt-1">$${amount}</span>
                                        </button>
                                    `;
                                }
                              })
                              .join("")}
                        </div>
                    </div>

                    <!-- Pricing Summary -->
                    <div class="bg-white rounded-[32px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 space-y-4 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                        <div class="flex justify-between text-sm font-black text-gray-900 uppercase tracking-widest"><span>Subtotal</span><span class="text-gray-700">$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-sm font-black text-gray-900 uppercase tracking-widest"><span>Tax & Fees</span><span class="text-gray-700">$${taxes.toFixed(2)}</span></div>
                        ${convenienceFee > 0 ? `<div class="flex justify-between text-sm font-black text-gray-900 uppercase tracking-widest"><span>Convenience Fee</span><span class="text-gray-700">$${convenienceFee.toFixed(2)}</span></div>` : ""}
                        ${bagFee > 0 ? `<div class="flex justify-between text-sm font-black text-gray-900 uppercase tracking-widest"><span>Plastic Bag(s)</span><span class="text-gray-700">$${bagFee.toFixed(2)}</span></div>` : ""}
                        <div class="flex justify-between text-sm font-black text-gray-900 uppercase tracking-widest"><span>Tip</span><span class="text-gray-700">$${tipAmount.toFixed(2)}</span></div>
                        <div class="h-[2px] bg-gray-50 w-full my-5 rounded-full"></div>
                        <div class="flex justify-between items-end">
                            <span class="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Total After Tip</span>
                            <span class="text-3xl font-black text-gray-900 tracking-tighter">$${finalTotal}</span>
                        </div>
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
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Cardholder Name</label>
                                <input type="text" value="Michaelangelo Smith" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
                            </div>
                            <div class="space-y-1.5">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Card Number</label>
                                <div class="relative">
                                    <input type="text" value="•••• •••• •••• 4242" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
                                    <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5 opacity-40">
                                        <i class="fa-brands fa-cc-visa text-lg"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Expiry</label>
                                    <input type="text" value="12/26" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">CVC</label>
                                    <input type="text" value="•••" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none">
                                </div>
                            </div>
                        </div>
                        <button onclick="updateMockupState('modalOpen', null)" class="w-full bg-violet-600 text-white py-4 rounded-2xl font-black uppercase tracking-wide shadow-lg active:scale-95 transition-all">Save & Continue</button>
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

  "checkout-rewards": () => {
    const isDesktop = currentViewport === "desktop";
    // Dynamic pricing from cart
    const cart = mockupState.cart || [];
    if (cart.length === 0) {
      setTimeout(() => {
        if (mockupState.lastOrder) {
          navigateTo("order-confirm", { replace: true });
        } else {
          navigateTo("menu", { replace: true });
        }
      }, 0);
      return `<div class="flex items-center justify-center min-h-screen bg-[#f6f6f6] p-8 text-center"><p class="text-gray-500 font-bold">Redirecting...</p></div>`;
    }
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );
    const taxRate = mockupState.locationTaxRate || 0.0925;
    const taxes = subtotal * taxRate;
    const bagFee = mockupState.bagQuantity * (mockupState.bagMenuItem?.price ?? 0);
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
                        <span class="text-lg font-black text-violet-600 flex-1 text-center">Payment (Gift & Rewards)</span>
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
                        <h2 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Payment Method</h2>
                        <div class="space-y-3">
                            <!-- Card -->
                            <div onclick="updateMockupState('modalOpen', 'payment-card')" class="bg-white rounded-[24px] ${isDesktop ? "p-4" : "p-3.5"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-violet-50/50 hover:border-violet-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-[16px] bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all flex items-center justify-center text-gray-400 group-hover:text-violet-500">
                                        <i class="fa-solid fa-credit-card text-xl"></i>
                                    </div>
                                    <div>
                                        <span class="font-black text-gray-900 uppercase text-sm block tracking-tight">Credit or Debit Card</span>
                                        <span class="text-xs font-bold text-violet-600 uppercase tracking-widest mt-0.5 block">Ending in 442</span>
                                    </div>
                                </div>
                                <div class="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-violet-100 flex items-center justify-center transition-colors">
                                    <i class="fa-solid fa-chevron-right text-[10px] text-gray-400 group-hover:text-violet-600"></i>
                                </div>
                            </div>

                            <!-- Gift Card & Loyalty (Two Column) -->
                            <div class="grid grid-cols-2 gap-3">
                                <!-- Gift Card -->
                                <div onclick="updateMockupState('modalOpen', 'payment-gift')" class="bg-white rounded-[24px] ${isDesktop ? "p-4" : "p-3.5"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-violet-50/50 hover:border-violet-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-500 shrink-0 group-hover:scale-110 transition-transform">
                                            <i class="fa-solid fa-gift text-lg"></i>
                                        </div>
                                        <span class="font-black text-gray-900 uppercase text-sm tracking-tight truncate">Gift Card</span>
                                    </div>
                                </div>

                                <!-- Loyalty -->
                                <div onclick="updateMockupState('modalOpen', 'payment-rewards')" class="bg-white rounded-[24px] ${isDesktop ? "p-4" : "p-3.5"} shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-amber-50/30 hover:border-amber-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 transition-transform">
                                            <i class="fa-solid fa-award text-lg"></i>
                                        </div>
                                        <div class="min-w-0">
                                            <span class="font-black text-gray-900 uppercase text-sm block tracking-tight truncate">Rewards</span>
                                            <span class="text-[11px] font-black text-amber-500 uppercase block truncate tracking-widest mt-0.5">Avail: $12.50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tipping Section -->
                    <div>
                        <h2 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Add a Tip</h2>
                        <div class="grid grid-cols-4 gap-3">
                            ${[10, 15, 20, "other"]
                              .map((val) => {
                                const isSelected =
                                  mockupState.tipPercentage === val;
                                const action =
                                  val === "other"
                                    ? "updateMockupState('modalOpen', 'tip-other')"
                                    : `updateMockupState('tipPercentage', ${val})`;

                                if (val === "other") {
                                  return `
                                        <button onclick="${action}" class="flex flex-col items-center justify-center py-2.5 rounded-2xl border-2 transition-all duration-300 ${isSelected ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_16px_-6px_rgba(124,58,237,0.4)] scale-[1.02]" : "bg-white text-gray-500 border-gray-100 hover:border-violet-200 hover:bg-violet-50 hover:-translate-y-0.5"}">
                                            <span class="font-black uppercase text-lg leading-tight tracking-tighter">Other</span>
                                            <span class="text-[10px] font-bold opacity-80 uppercase tracking-widest mt-0.5">Custom</span>
                                        </button>
                                    `;
                                } else {
                                  const amount = (
                                    subtotal *
                                    (val / 100)
                                  ).toFixed(2);
                                  return `
                                        <button onclick="${action}" class="flex flex-col items-center justify-center py-2.5 rounded-2xl border-2 transition-all duration-300 ${isSelected ? "bg-violet-600 text-white border-violet-600 shadow-[0_8px_16px_-6px_rgba(124,58,237,0.4)] scale-[1.02]" : "bg-white text-gray-500 border-gray-100 hover:border-violet-200 hover:bg-violet-50 hover:-translate-y-0.5"}">
                                            <span class="font-black uppercase text-2xl leading-none tracking-tighter">${val}%</span>
                                            <span class="text-[11px] font-black ${isSelected ? "text-violet-200" : "text-gray-400"} mt-1">$${amount}</span>
                                        </button>
                                    `;
                                }
                              })
                              .join("")}
                        </div>
                    </div>

                    <!-- Pricing Summary -->
                    <div class="bg-white rounded-[32px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 space-y-4 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                        <div class="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest"><span>Subtotal</span><span class="text-gray-700">$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest"><span>Tax & Fees</span><span class="text-gray-700">$${taxes.toFixed(2)}</span></div>
                        ${convenienceFee > 0 ? `<div class="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest"><span>Convenience Fee</span><span class="text-gray-700">$${convenienceFee.toFixed(2)}</span></div>` : ""}
                        ${bagFee > 0 ? `<div class="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest"><span>Plastic Bag(s)</span><span class="text-gray-700">$${bagFee.toFixed(2)}</span></div>` : ""}
                        <div class="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest"><span>Tip</span><span class="text-gray-700">$${tipAmount.toFixed(2)}</span></div>
                        <div class="h-[2px] bg-gray-50 w-full my-5 rounded-full"></div>
                        <div class="flex justify-between items-end">
                            <span class="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Total</span>
                            <span class="text-3xl font-black text-gray-900 tracking-tighter">$${finalTotal}</span>
                        </div>
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
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Cardholder Name</label>
                                <input type="text" value="Michaelangelo Smith" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
                            </div>
                            <div class="space-y-1.5">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Card Number</label>
                                <div class="relative">
                                    <input type="text" value="•••• •••• •••• 4242" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none focus:border-violet-600 transition-colors">
                                    <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5 opacity-40">
                                        <i class="fa-brands fa-cc-visa text-lg"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Expiry</label>
                                    <input type="text" value="12/26" class="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl font-bold text-gray-900 outline-none">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">CVC</label>
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
                                <p class="text-xs text-gray-500 font-bold uppercase tracking-tight leading-tight">You've earned 7 stamps. Collect 10 to receive a free regular drink of your choice.</p>
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
    const list = getEnabledLocations();
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
            <div id="menu-scroller" class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Subtle top-aligned brand gradient overlay fading down -->
                <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none z-0"></div>

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
                <div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2 relative z-10">
                    <button onclick="navigateTo('menu')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
                        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
                        <span>Back</span>
                    </button>
                </div>
                `
                    : ""
                }

                <div class="p-6 md:p-8 max-w-3xl mx-auto w-full flex flex-col gap-6 pb-16 relative z-10">
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
                          .map((item) => {
                            const outOfStock = !isItemInStock(item);
                            return `
                            <div class="bg-white rounded-2xl ${isDesktop ? "p-2.5" : "p-2"} shadow-sm border border-gray-100 flex ${isDesktop ? "gap-5 items-stretch" : "flex-col gap-4"} hover:shadow-md transition-shadow relative group">
                                <div class="${isDesktop ? "w-32 min-h-[128px]" : "w-full h-64"} rounded-xl overflow-hidden relative shrink-0 border border-gray-50">
                                    <img src="${item.image}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top ${outOfStock ? "" : "hover:scale-125"} transition-transform duration-500">
                                    ${outOfStock ? renderOutOfStockOverlay() : ""}
                                </div>
                                <div class="flex-1 flex flex-col justify-between py-1 min-w-0">
                                    <div class="cursor-pointer">
                                        <div class="text-violet-600 text-[9px] font-black tracking-widest uppercase mb-1">${item.category}</div>
                                        <h4 class="font-black text-gray-900 ${isDesktop ? "text-base" : "text-lg"} leading-tight tracking-tight mb-1 pr-12">${item.name}</h4>
                                        ${outOfStock ? `<div class="font-black text-red-600 text-sm uppercase tracking-wide">Temporarily Out of Stock</div>` : `<div class="font-black text-violet-600 text-sm">$${item.price.toFixed(2)}</div>`}
                                    </div>
                                    <div class="flex gap-2 mt-4">
                                        ${outOfStock ? `<span class="text-gray-400 font-black text-[10px] uppercase tracking-widest">Currently Unavailable</span>` : `
                                        <button onclick="navigateTo('customize')" class="text-violet-600 font-black text-[10px] uppercase tracking-widest hover:underline">Customize</button>
                                        <span class="text-gray-300">•</span>
                                        <button onclick="navigateTo('cart')" class="text-violet-600 font-black text-[10px] uppercase tracking-widest hover:underline">Add to Order</button>
                                        `}
                                    </div>
                                </div>
                                <button onclick="removeFavorite(${item.id})" class="absolute ${isDesktop ? "top-4 right-4" : "top-4 right-4"} w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors shadow-sm" title="Remove from favorites">
                                    <i class="fa-solid fa-heart text-sm"></i>
                                </button>
                            </div>
                        `;
                          })
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











window.systemPagesData = [
    // ─────────────────────────────────────────────────────────────────────
    // ENTRY & DISCOVERY — how a customer arrives and picks a store
    // ─────────────────────────────────────────────────────────────────────
    { group: "entry", id: "restaurant-home", name: "i-Tea Home", file: "index.html", icon: "fa-store", color: "#7c3aed", auth: false,
      description: "The i-Tea brand homepage and the real entry point for ordering. Shows featured drinks, the rewards teaser and the current store banner. It does not fetch anything itself — the menu and location data it displays were already loaded by the app's boot sequence, so this page reads from that shared in-memory state.",
      endpoints: [], connects: ["locations", "menu", "sign-in", "rewards"] },

    { group: "entry", id: "locations", name: "Pick a Location", file: "locations.html", icon: "fa-location-dot", color: "#0ea5e9", auth: false,
      description: "The store picker. This is the most fragile data path on the site: it first tries the bulk /api/Locations list, which the backend gates behind an elevated login and returns 401 for ordinary guests. When that fails it silently falls back to fetching each store one at a time from the public RestaurantMenu endpoints, then layers weekly hours on top of each card to show open/closed state.",
      endpoints: [
        { method: "GET", path: "/api/Locations", note: "Bulk store list — auth-gated, 401s for guests and normal customers" },
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}", note: "Public per-store fallback used when the bulk list is refused" },
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/hours", note: "Weekly opening hours, drives the open/closed pill on each card" }
      ], connects: ["menu", "location-favorites"] },

    { group: "entry", id: "location-favorites", name: "Saved Locations", file: "location-favorites.html", icon: "fa-map-pin", color: "#0ea5e9", auth: true,
      description: "A customer's starred stores. The favorites themselves live in browser storage rather than on the server — there is no location-favorites API — so this page reconciles those saved IDs against whatever the live location list returned. If a saved store no longer exists in the API response it is dropped from the list.",
      endpoints: [
        { method: "GET", path: "/api/Locations", note: "Reconciles locally-saved store IDs against the live list" }
      ], connects: ["locations", "menu"] },

    { group: "entry", id: "menu-scan", name: "QR Scan", file: "menu-scan.html", icon: "fa-qrcode", color: "#0ea5e9", auth: false,
      description: "In-store QR landing. A customer scans a table or counter code and lands here, which resolves the encoded store ID and forwards straight into that store's menu. No API call of its own — it just sets the active location and hands off.",
      endpoints: [], connects: ["menu"] },

    // ─────────────────────────────────────────────────────────────────────
    // ORDERING — browse, customize, pay
    // ─────────────────────────────────────────────────────────────────────
    { group: "ordering", id: "menu", name: "Menu", file: "menu.html", icon: "fa-utensils", color: "#0ea5e9", auth: false,
      description: "The main menu browser with Menu / Featured / Favorites / Order History tabs. Loading a menu is a two-step conversation with the backend: one call returns the category list plus the store's tax rate and convenience fee, then a separate call fires per category to pull its items. That fan-out is why a cold menu load is the heaviest moment on the site.",
      endpoints: [
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/menu", note: "Category list plus tax rate and convenience fee for the store" },
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/category/{categoryId}/items", note: "Items inside one category — fires once per category, not once per menu" }
      ], connects: ["customize", "cart", "menu-favorites"] },

    { group: "ordering", id: "menu-single", name: "Menu (Single Column)", file: "menu-single.html", icon: "fa-list", color: "#0ea5e9", auth: false,
      description: "An alternate single-column layout of the same menu. It shares the identical render function and the identical data as the main menu — the only difference is presentation, so it costs no extra API traffic.",
      endpoints: [
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/menu", note: "Same category payload as the main menu" },
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/category/{categoryId}/items", note: "Same per-category item fetch" }
      ], connects: ["customize", "cart"] },

    { group: "ordering", id: "customize", name: "Customize Item", file: "customize.html", icon: "fa-sliders", color: "#0ea5e9", auth: false,
      description: "The item detail and modifier builder — size, ice, sugar, toppings. The menu list payload deliberately does not include modifiers, so opening this screen triggers a fresh per-item call that returns the full modifier groups, their min/max selection rules and any upcharges. This is also where out-of-stock options get flagged.",
      endpoints: [
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/menu-item/{menuItemId}", note: "Full item record including every modifier group, option and upcharge" }
      ], connects: ["cart"] },

    { group: "ordering", id: "customize-alt", name: "Customize (Alternative)", file: "customize-alt.html", icon: "fa-sliders", color: "#0ea5e9", auth: false,
      description: "A second design treatment of the modifier builder, kept alongside the primary one for comparison. It calls the same item-detail endpoint and applies the same selection rules; only the layout and control styling differ.",
      endpoints: [
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/menu-item/{menuItemId}", note: "Same item and modifier payload as the primary customize screen" }
      ], connects: ["cart"] },

    { group: "ordering", id: "cart", name: "Cart / Review", file: "cart.html", icon: "fa-cart-shopping", color: "#0ea5e9", auth: false,
      description: "Review the bag, change quantities, edit a previously customized drink. Worth knowing: the cart is entirely client-side. There is no cart API and no server-held basket — line items, quantities and the running total live in browser state until checkout submits them in one payload. Tax and the convenience fee are calculated locally from the rates the menu call returned.",
      endpoints: [], connects: ["checkout", "menu", "customize"] },

    { group: "ordering", id: "checkout", name: "Checkout", file: "checkout.html", icon: "fa-credit-card", color: "#059669", auth: false,
      description: "Pickup time, tip and payment. This is the single most important call on the site: the entire order — every line item, every modifier, the customer or guest identity, the tip and the totals — is posted in one request. The endpoint used depends on whether the customer is signed in, and a guest order goes to a separate route entirely.",
      endpoints: [
        { method: "POST", path: "/api/CustomerOrder", note: "Submit the complete order for a signed-in customer" },
        { method: "POST", path: "/api/CustomerOrder/guest", note: "Submit the same order shape for a guest — no token required" },
        { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/hours-with-holidays", note: "Real store hours including holiday overrides, used to build the pickup time slots" }
      ], connects: ["order-confirm"] },

    { group: "ordering", id: "checkout-rewards", name: "Checkout (Gift & Rewards)", file: "checkout-rewards.html", icon: "fa-gift", color: "#059669", auth: true,
      description: "A checkout variant that layers gifting and points redemption onto the standard flow. The rewards balance shown is presentation-only for now — no points API exists yet — but the order submission underneath is the same real endpoint as standard checkout.",
      endpoints: [
        { method: "POST", path: "/api/CustomerOrder", note: "Submits through the same order endpoint as standard checkout" }
      ], connects: ["order-confirm"] },

    // ─────────────────────────────────────────────────────────────────────
    // POST-ORDER — confirmation and tracking
    // ─────────────────────────────────────────────────────────────────────
    { group: "post-order", id: "order-confirm", name: "Order Confirmation", file: "order-confirm.html", icon: "fa-circle-check", color: "#059669", auth: false,
      description: "The success screen shown immediately after a successful submit. It renders from the response the order POST just returned rather than making a fresh request, which is why it appears instantly with no loading state.",
      endpoints: [], connects: ["order-status", "track-order", "restaurant-home"] },

    { group: "post-order", id: "order-status", name: "Order Status", file: "order-status.html", icon: "fa-clock", color: "#059669", auth: true,
      description: "The status view for the customer's most recent order. It re-reads the order from the server rather than trusting cached state, so the status reflects what the store has actually done. When no order exists it shows a genuine empty state instead of inventing one.",
      endpoints: [
        { method: "GET", path: "/api/CustomerOrder/{orderId}", note: "Re-reads one order's full record and current status" }
      ], connects: ["track-order", "order-details"] },

    { group: "post-order", id: "track-order", name: "Track Order", file: "track-order.html", icon: "fa-motorcycle", color: "#059669", auth: true,
      description: "The progress-stepper view of an in-flight order. The backend exposes no dedicated tracking or push endpoint, so progress is derived by re-reading the order record and mapping its status field onto the visual steps. There is no live feed behind this screen.",
      endpoints: [
        { method: "GET", path: "/api/CustomerOrder/{orderId}", note: "Order status is polled from the standard order record — there is no tracking-specific endpoint" }
      ], connects: ["restaurant-home"] },

    // ─────────────────────────────────────────────────────────────────────
    // IDENTITY — sign in, sign up, password recovery
    // ─────────────────────────────────────────────────────────────────────
    { group: "identity", id: "sign-in", name: "Sign In", file: "sign-in.html", icon: "fa-right-to-bracket", color: "#6b7280", auth: false,
      description: "Email and password login. The response carries a JWT, which the app stores in localStorage when Remember Me is ticked and sessionStorage otherwise — that single choice is what decides whether a customer is still signed in tomorrow. Every authenticated call afterwards attaches that token, and a 401 anywhere in the app forces a return to this screen.",
      endpoints: [
        { method: "POST", path: "/api/Account/login", note: "Exchanges email and password for the JWT that authorises every later call" }
      ], connects: ["restaurant-home", "registration", "forgot-password"] },

    { group: "identity", id: "registration", name: "Create Account", file: "registration.html", icon: "fa-user-plus", color: "#6b7280", auth: false,
      description: "New account signup. Registration does not return a usable session — the customer is created server-side, then handed to the success screen and asked to sign in, which is why account creation costs two round trips rather than one.",
      endpoints: [
        { method: "POST", path: "/api/Account/register", note: "Creates the customer record; does not return a session token" }
      ], connects: ["registration-success"] },

    { group: "identity", id: "registration-success", name: "Registration Success", file: "registration-success.html", icon: "fa-envelope-circle-check", color: "#6b7280", auth: false,
      description: "The post-signup confirmation screen. Static — it only tells the customer the account exists and points them at sign-in.",
      endpoints: [], connects: ["sign-in"] },

    { group: "identity", id: "forgot-password", name: "Forgot Password", file: "forgot-password.html", icon: "fa-key", color: "#6b7280", auth: false,
      description: "Requests a reset email. The frontend supplies the return URL that gets embedded in the email link, so the reset flow only works from a real http(s) origin. Note that this call has a deliberate fallback: if the backend answers 404 or 405, the UI fakes a success message rather than showing an error, so a green confirmation here does not prove an email was actually sent.",
      endpoints: [
        { method: "POST", path: "/api/Account/forgot-password", note: "Sends the reset email — falls back to a simulated success if the backend has not implemented it" }
      ], connects: ["reset-password"] },

    { group: "identity", id: "reset-password", name: "Reset Password", file: "reset-password.html", icon: "fa-lock-open", color: "#6b7280", auth: false,
      description: "The destination of the emailed reset link. It reads the one-time code out of the URL and submits it with the new password. Landing here without a valid code in the query string cannot succeed.",
      endpoints: [
        { method: "POST", path: "/api/Account/reset-password", note: "Consumes the emailed one-time code and sets the new password" }
      ], connects: ["sign-in"] },

    { group: "identity", id: "account-deleted", name: "Account Deleted", file: "index.html", icon: "fa-user-slash", color: "#6b7280", auth: false,
      description: "The terminal screen after a customer deletes their account. Purely a confirmation — the deletion itself already happened from My Account, and the local session was cleared on the way here.",
      endpoints: [], connects: ["restaurant-home"] },

    // ─────────────────────────────────────────────────────────────────────
    // ACCOUNT — profile, history, saved things
    // ─────────────────────────────────────────────────────────────────────
    { group: "account", id: "account", name: "My Account", file: "profile.html", icon: "fa-id-badge", color: "#8b5cf6", auth: true,
      description: "The account hub, and the busiest page in the app for API traffic. It reads the profile, lists past orders with pagination, and is also where a customer changes their password or deletes the account outright. Four distinct Account endpoints are reachable from this one screen, which is why it is the first place to look when auth breaks.",
      endpoints: [
        { method: "GET", path: "/api/Account/profile", note: "Loads name, email and contact details" },
        { method: "PUT", path: "/api/Account/profile", note: "Saves edits back to the customer record" },
        { method: "GET", path: "/api/Account/orders", note: "Paginated order history — takes page and pageSize" },
        { method: "POST", path: "/api/Account/change-password", note: "Changes the password for the signed-in customer" },
        { method: "DELETE", path: "/api/Account/account/{customerId}", note: "Permanently deletes the account" },
        { method: "POST", path: "/api/Account/logout", note: "Ends the server session before the local token is cleared" }
      ], connects: ["order-details", "menu-favorites", "location-favorites", "rewards"] },

    { group: "account", id: "order-details", name: "Order Details", file: "order-details.html", icon: "fa-receipt", color: "#8b5cf6", auth: true,
      description: "The full receipt for one past order. The history list only carries summary rows, so opening a receipt fetches the complete order — every line item, every modifier and the final totals — from the order endpoint rather than reusing the cached summary.",
      endpoints: [
        { method: "GET", path: "/api/CustomerOrder/{orderId}", note: "Full order record — the history list alone does not contain line-item detail" }
      ], connects: ["menu"] },

    { group: "account", id: "menu-favorites", name: "Favorite Items", file: "menu-favorites.html", icon: "fa-heart", color: "#ec4899", auth: true,
      description: "Saved drinks. Unlike saved locations, item favorites are genuinely server-side and support the full set of operations — list, add, remove and re-rate. A favorite is identified by its own userFavoriteId, not by the menu item ID, which matters when wiring up the remove and rating controls.",
      endpoints: [
        { method: "GET", path: "/api/Account/favorites", note: "Lists the customer's saved items" },
        { method: "POST", path: "/api/Account/favorites", note: "Saves an item, optionally with a star rating" },
        { method: "PUT", path: "/api/Account/favorites/{userFavoriteId}", note: "Updates the star rating on an existing favorite" },
        { method: "DELETE", path: "/api/Account/favorites/{userFavoriteId}", note: "Removes a favorite by its favorite ID, not the menu item ID" }
      ], connects: ["customize", "menu"] },

    { group: "account", id: "rewards", name: "Rewards", file: "rewards.html", icon: "fa-award", color: "#8b5cf6", auth: true,
      description: "The points and rewards screen. Be aware this is currently a design surface only — no rewards, points or loyalty endpoint exists on the backend yet, so every balance, tier and offer shown here is local placeholder data awaiting a real API.",
      endpoints: [], connects: ["menu", "checkout-rewards"] },

    { group: "account", id: "dashboard", name: "Dashboard", file: "dashboard.html", icon: "fa-gauge", color: "#8b5cf6", auth: true,
      description: "A signed-in overview combining recent activity, quick reorder and rewards status. It composes data other screens already loaded rather than fetching its own, so it has no endpoints of its own.",
      endpoints: [], connects: ["account", "menu", "order-status"] },

    // ─────────────────────────────────────────────────────────────────────
    // SUPPORTING — legal and informational
    // ─────────────────────────────────────────────────────────────────────
    { group: "supporting", id: "privacy", name: "Privacy & Terms", file: "privacy.html", icon: "fa-shield-halved", color: "#9ca3af", auth: false,
      description: "Privacy policy and terms of service. Static legal copy, no data access.",
      endpoints: [], connects: [] },

    { group: "supporting", id: "accessibility", name: "Accessibility", file: "accessibility.html", icon: "fa-universal-access", color: "#9ca3af", auth: false,
      description: "The accessibility statement and WCAG conformance notes. Static copy, no data access.",
      endpoints: [], connects: [] },

    // ─────────────────────────────────────────────────────────────────────
    // INTERNAL — excluded from the live deployment via .vercelignore
    // ─────────────────────────────────────────────────────────────────────
    { group: "internal", id: "dev", name: "Dev Dashboard", file: "dev.html", icon: "fa-code", color: "#78350f", auth: false,
      description: "This page. The architecture and API reference snapshot. Excluded from the live Vercel deployment via .vercelignore, so it exists in the repo and runs locally but is never served to customers.",
      endpoints: [], connects: ["sections"] },



    { group: "internal", id: "sections", name: "Retired Sections", file: "sections.html", icon: "fa-cubes", color: "#78350f", auth: false,
      description: "A parking lot for components and layouts that were cut from live pages but worth keeping for reference. Internal only — excluded from the live deployment.",
      endpoints: [], connects: ["dev"] }
];

// ─────────────────────────────────────────────────────────────────────────
// API CATALOG — grouped the way the backend is actually organised.
// Each group is one backend controller; the notes explain what it owns,
// what it costs, and where the traps are.
// ─────────────────────────────────────────────────────────────────────────
window.apiCatalog = [
  {
    id: "restaurantmenu",
    controller: "RestaurantMenu",
    icon: "fa-utensils",
    color: "#0ea5e9",
    auth: "Public — no token required",
    summary: "Everything about a store and what it sells. This is the only controller that works for a signed-out visitor, which is why the whole browse-and-build-a-drink flow is usable before anyone logs in.",
    gotcha: "Menu data is deliberately split across three calls — categories, then items per category, then modifiers per item. Nothing returns a whole menu in one payload, so a cold load fans out into many requests.",
    endpoints: [
      { method: "GET", path: "/api/RestaurantMenu/location/{locationId}", what: "Returns one store's record: name, address, phone and ordering flags. Used as the public stand-in when the bulk Locations list is refused, and to source the phone number shown in the header.", where: ["Pick a Location", "Saved Locations"] },
      { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/menu", what: "Returns the store's category list along with its tax rate and convenience fee. The rates matter as much as the categories — every total the cart displays is computed locally from these two numbers.", where: ["Menu", "Menu (Single Column)"] },
      { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/category/{categoryId}/items", what: "Returns the items inside one category, with base price and thumbnail but no modifiers. Fires once per category, so a ten-category menu means ten of these.", where: ["Menu", "Menu (Single Column)"] },
      { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/menu-item/{menuItemId}", what: "The full record for a single item, and the only place modifier groups exist — sizes, ice, sugar, toppings, their min/max rules, upcharges and out-of-stock flags. Nothing in the list payloads contains this.", where: ["Customize Item", "Customize (Alternative)"] },
      { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/hours", what: "The standard weekly opening hours. Drives the open/closed pill on every location card.", where: ["Pick a Location"] },
      { method: "GET", path: "/api/RestaurantMenu/location/{locationId}/hours-with-holidays", what: "The same weekly hours with holiday closures and special hours layered on. This is the one that backs the real pickup time slots at checkout.", where: ["Checkout"] }
    ]
  },
  {
    id: "locations",
    controller: "Locations",
    icon: "fa-location-dot",
    color: "#f59e0b",
    auth: "Requires an elevated login — 401s for guests and ordinary customers",
    summary: "The bulk store directory. One endpoint, and the single biggest structural problem in the frontend.",
    gotcha: "This returns 401 for a normal customer, not just a guest — being signed in is not enough. Every screen that needs a store list has to survive that refusal, which is why the public per-store RestaurantMenu calls exist as a fallback path.",
    endpoints: [
      { method: "GET", path: "/api/Locations", what: "Returns all restaurant locations in one response. When it is refused, the app fetches each known store individually from the public RestaurantMenu endpoint and reassembles the list itself.", where: ["Pick a Location", "Saved Locations"] }
    ]
  },
  {
    id: "account-identity",
    controller: "Account · Identity",
    icon: "fa-fingerprint",
    color: "#6b7280",
    auth: "Public in, token out",
    summary: "Getting a customer signed in and recovering them when they are locked out. These are the calls that mint and destroy the JWT everything else depends on.",
    gotcha: "Register does not return a session — a new customer has to log in as a separate step. And forgot-password quietly fakes success on 404/405, so a confirmation message is not proof an email went out.",
    endpoints: [
      { method: "POST", path: "/api/Account/login", what: "Exchanges email and password for a JWT. Remember Me decides whether it is written to localStorage (survives closing the browser) or sessionStorage (dies with the tab).", where: ["Sign In"] },
      { method: "POST", path: "/api/Account/register", what: "Creates the customer record. Returns no token, so the app routes to a success screen and asks the customer to sign in.", where: ["Create Account"] },
      { method: "POST", path: "/api/Account/logout", what: "Ends the session server-side. The frontend clears its stored token afterwards regardless of whether this call succeeds.", where: ["My Account"] },
      { method: "POST", path: "/api/Account/forgot-password", what: "Triggers the reset email. The frontend passes the return URL that gets embedded in the link, which is why the flow only works from a real http(s) origin.", where: ["Forgot Password"] },
      { method: "POST", path: "/api/Account/reset-password", what: "Consumes the one-time code from the emailed link and sets the new password.", where: ["Reset Password"] }
    ]
  },
  {
    id: "account-profile",
    controller: "Account · Profile",
    icon: "fa-id-card",
    color: "#8b5cf6",
    auth: "Bearer token required",
    summary: "Reading and changing who the customer is. All of these hang off the single My Account screen.",
    gotcha: "Delete takes a customerId in the path while every other call infers the customer from the token — an inconsistency worth remembering when reading the backend.",
    endpoints: [
      { method: "GET", path: "/api/Account/profile", what: "Loads name, email and contact details for the signed-in customer.", where: ["My Account"] },
      { method: "PUT", path: "/api/Account/profile", what: "Saves profile edits back to the customer record.", where: ["My Account"] },
      { method: "POST", path: "/api/Account/change-password", what: "Changes the password for an already signed-in customer — distinct from the emailed reset flow.", where: ["My Account"] },
      { method: "DELETE", path: "/api/Account/account/{customerId}", what: "Permanently deletes the account. The only Account call that takes an explicit customer ID rather than reading it from the token.", where: ["My Account"] }
    ]
  },
  {
    id: "account-data",
    controller: "Account · History & Favorites",
    icon: "fa-heart",
    color: "#ec4899",
    auth: "Bearer token required",
    summary: "The customer's saved and past activity. Note this lives under Account rather than under Order — order history is an account concern to the backend, not an order one.",
    gotcha: "Item favorites are real server records with their own userFavoriteId. Saved locations are not — those are browser-only, which is why they can silently disappear.",
    endpoints: [
      { method: "GET", path: "/api/Account/orders", what: "Paginated order history taking page and pageSize. Returns summary rows only — no line-item detail, which is why opening a receipt costs another call.", where: ["My Account"] },
      { method: "GET", path: "/api/Account/favorites", what: "Lists the customer's saved menu items.", where: ["Favorite Items"] },
      { method: "POST", path: "/api/Account/favorites", what: "Saves an item as a favorite, optionally with a star rating attached.", where: ["Favorite Items"] },
      { method: "PUT", path: "/api/Account/favorites/{userFavoriteId}", what: "Updates the star rating on an existing favorite.", where: ["Favorite Items"] },
      { method: "DELETE", path: "/api/Account/favorites/{userFavoriteId}", what: "Removes a favorite. Keyed by the favorite's own ID, not the menu item ID.", where: ["Favorite Items"] }
    ]
  },
  {
    id: "customerorder",
    controller: "CustomerOrder",
    icon: "fa-receipt",
    color: "#059669",
    auth: "Token for members, open for guests",
    summary: "Placing and reading orders. Only three endpoints, and they carry the commercial weight of the entire site.",
    gotcha: "There is no cart API. The basket lives in the browser until the moment of submit, then the whole order goes up in one POST — so an interrupted checkout leaves nothing server-side to recover.",
    endpoints: [
      { method: "POST", path: "/api/CustomerOrder", what: "Submits a complete order for a signed-in customer — every line item, modifier, tip and total in a single payload.", where: ["Checkout", "Checkout (Gift & Rewards)"] },
      { method: "POST", path: "/api/CustomerOrder/guest", what: "The same order shape for a customer who never signed in. A separate route rather than a flag on the main one.", where: ["Checkout"] },
      { method: "GET", path: "/api/CustomerOrder/{orderId}", what: "Reads one order back in full. This single endpoint backs the receipt, the status screen and order tracking — there is no dedicated tracking or live-status endpoint, so progress is derived from this record's status field.", where: ["Order Details", "Order Status", "Track Order"] }
    ]
  }
];

window.systemTreeStructure = {
  id: "restaurant-home",
  children: [
        {
          id: "locations",
          children: [
            { id: "location-favorites" },
            {
              id: "menu",
              children: [
                { id: "menu-scan" },
                { id: "menu-single" },
                {
                  id: "customize",
                  children: [
                    { id: "customize-alt" }
                  ]
                },
                {
                  id: "cart",
                  children: [
                    {
                      id: "checkout",
                      children: [
                        { id: "checkout-rewards" },
                        {
                          id: "order-confirm",
                          children: [
                            {
                              id: "order-status",
                              children: [
                                { id: "track-order" }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "sign-in",
          children: [
            {
              id: "registration",
              children: [
                { id: "registration-success" }
              ]
            },
            {
              id: "forgot-password",
              children: [
                { id: "reset-password" }
              ]
            },
            {
              id: "account",
              children: [
                { id: "dashboard" },
                { id: "menu-favorites" },
                { id: "rewards" },
                { id: "order-details" },
                { id: "account-deleted" }
              ]
            }
          ]
        },
    { id: "privacy" },
    { id: "accessibility" }
  ]
};

window.buildTreeHtmlGlobal = (node) => {
  const page = window.systemPagesData.find(p => p.id === node.id);
  if (!page) return "";
  
  const tooltipHtml = `
    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left pointer-events-none transform group-hover:-translate-y-2">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style="background-color: ${page.color}18;">
          <i class="fa-solid ${page.icon} text-[10px]" style="color: ${page.color};"></i>
        </div>
        <div class="text-[11px] font-black text-gray-900">${page.name}</div>
      </div>
      <p class="text-[11px] text-gray-500 font-medium leading-relaxed">${page.description}</p>
      <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
    </div>
  `;

  return `
    <li>
      <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('${page.id}')">
        ${tooltipHtml}
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: ${page.color};">
          <i class="fa-solid ${page.icon} text-xl text-white"></i>
        </div>
        <div class="mt-3 text-center w-24">
          <div class="text-[11px] font-black text-gray-900 leading-tight">${page.name}</div>
          <div class="text-[9px] font-medium text-gray-400 mt-1 uppercase tracking-widest">${page.endpoints.length} APIs</div>
        </div>
      </div>
      ${node.children && node.children.length > 0 ? `<ul>${node.children.map(window.buildTreeHtmlGlobal).join("")}</ul>` : ""}
    </li>
  `;
};



routes["dev"] = () => {

  const pages = window.systemPagesData;
  const catalog = window.apiCatalog || [];
  const methodColors = { GET: { bg: "bg-blue-100", text: "text-blue-700" }, POST: { bg: "bg-emerald-100", text: "text-emerald-700" }, PUT: { bg: "bg-amber-100", text: "text-amber-700" }, DELETE: { bg: "bg-red-100", text: "text-red-700" } };

  // Endpoint totals come from the catalog, which mirrors what api.js / app.js
  // genuinely call — not from the per-page lists, which repeat shared endpoints.
  const totalEndpoints = catalog.reduce((sum, g) => sum + g.endpoints.length, 0);
  const totalControllers = catalog.length;
  const customerPages = pages.filter(p => p.group !== "internal");
  const totalPages = customerPages.length;
  const protectedPages = customerPages.filter(p => p.auth).length;

  const groupMeta = {
    entry:        { label: "Entry & Discovery", blurb: "How a customer arrives and chooses a store", icon: "fa-door-open", color: "#7c3aed" },
    ordering:     { label: "Ordering", blurb: "Browse the menu, build a drink, pay", icon: "fa-utensils", color: "#0ea5e9" },
    "post-order": { label: "After the Order", blurb: "Confirmation, status and tracking", icon: "fa-circle-check", color: "#059669" },
    identity:     { label: "Identity", blurb: "Signing in, signing up and password recovery", icon: "fa-fingerprint", color: "#6b7280" },
    account:      { label: "Account", blurb: "Profile, order history and saved items", icon: "fa-id-badge", color: "#8b5cf6" },
    supporting:   { label: "Supporting", blurb: "Legal and informational pages", icon: "fa-circle-info", color: "#9ca3af" },
    internal:     { label: "Internal Tools", blurb: "In the repo, excluded from the live deployment via .vercelignore", icon: "fa-screwdriver-wrench", color: "#78350f" }
  };
  const groupOrder = ["entry", "ordering", "post-order", "identity", "account", "supporting", "internal"];

  const methodPill = (m, size = "sm") => {
    const c = methodColors[m] || methodColors.GET;
    const cls = size === "sm"
      ? "text-[9px] px-1.5 py-0.5 rounded"
      : "text-[10px] px-2 py-1 rounded-md w-[52px] text-center";
    return `<span class="font-black uppercase tracking-widest ${cls} ${c.bg} ${c.text} shrink-0">${m}</span>`;
  };

  return `
    <style>
      /* ── Dev dashboard type scale ──────────────────────────────────────
         Everything on this page reads one third (1.333x) larger than the
         customer-facing app. Scoped to .dev-scale so it never leaks into
         the shared components this page borrows.
         The decorative text-[200px] hero watermark is deliberately left
         alone; scaling that would overflow the card. ─────────────────── */
      .dev-scale .text-xs      { font-size: 16px;   line-height: 21.3px; }
      .dev-scale .text-sm      { font-size: 18.7px; line-height: 26.7px; }
      .dev-scale .text-base    { font-size: 21.3px; line-height: 32px; }
      .dev-scale .text-lg      { font-size: 24px;   line-height: 37.3px; }
      .dev-scale .text-xl      { font-size: 26.7px; line-height: 37.3px; }
      .dev-scale .text-2xl     { font-size: 32px;   line-height: 42.7px; }
      .dev-scale .text-4xl     { font-size: 48px;   line-height: 53.3px; }
      .dev-scale .text-\\[8px\\]  { font-size: 10.7px; }
      .dev-scale .text-\\[9px\\]  { font-size: 12px; }
      .dev-scale .text-\\[10px\\] { font-size: 13.3px; }
      .dev-scale .text-\\[11px\\] { font-size: 14.7px; }
      .dev-scale .text-\\[12px\\] { font-size: 16px; }
      .dev-scale code          { font-size: 1em; }

      /* Quick-launch rows */
      .dev-scale .launch-card {
        display: flex; align-items: center; gap: 14px; padding: 14px 16px;
        background: #fff; border: 1.5px solid #ede9fe; border-radius: 14px;
        text-decoration: none; color: #1f0b35; transition: all .18s ease;
      }
      .dev-scale .launch-card:hover {
        border-color: #7c3aed; background: #fdfcff;
        box-shadow: 0 4px 16px rgba(124,58,237,.10); transform: translateY(-1px);
      }
      .dev-scale .launch-card .arrow { margin-left: auto; color: #c4b5fd; transition: transform .15s ease; }
      .dev-scale .launch-card:hover .arrow { transform: translateX(3px); color: #7c3aed; }

      /* Flowchart tree connectors */
      .dev-tree ul { padding-top: 24px; position: relative; display: flex; justify-content: center; }
      .dev-tree li { float: left; text-align: center; list-style-type: none; position: relative; padding: 24px 12px 0 12px; }
      .dev-tree li::before, .dev-tree li::after { content: ''; position: absolute; top: 0; right: 50%; border-top: 2px dashed #cbd5e1; width: 50%; height: 24px; }
      .dev-tree li::after { right: auto; left: 50%; border-left: 2px dashed #cbd5e1; }
      .dev-tree li:only-child::after, .dev-tree li:only-child::before { display: none; }
      .dev-tree li:only-child { padding-top: 0; }
      .dev-tree li:first-child::before, .dev-tree li:last-child::after { border: 0 none; }
      .dev-tree li:last-child::before { border-right: 2px dashed #cbd5e1; border-radius: 0 8px 0 0; }
      .dev-tree li:first-child::after { border-radius: 8px 0 0 0; }
      .dev-tree ul ul::before { content: ''; position: absolute; top: 0; left: 50%; border-left: 2px dashed #cbd5e1; width: 0; height: 24px; }
    </style>
    <div class="dev-scale bg-[#f8f9fa] min-h-screen relative font-sans text-gray-900 pb-24 selection:bg-violet-200 selection:text-violet-900">
      <header class="bg-white/90 backdrop-blur-md px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 border-b border-gray-100">
        <div class="w-full max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button onclick="window.history.back()" class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors shrink-0">
              <i class="fa-solid fa-chevron-left text-gray-600 text-sm"></i>
            </button>
            <div>
              <h1 class="text-base font-black text-gray-900 uppercase tracking-tight leading-tight">Dev Environment</h1>
              <p class="text-[11px] font-medium text-gray-400 leading-tight">Platform Architecture &amp; API Reference</p>
            </div>
          </div>
        </div>
      </header>

      <div class="w-full max-w-[1400px] mx-auto px-4 lg:px-8 mt-12 space-y-12">

        <div class="bg-violet-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-sm">
          <i class="fa-solid fa-code absolute -right-10 -bottom-10 text-[200px] text-white/5 rotate-12"></i>
          <div class="relative z-10 max-w-2xl mb-8">
            <h1 class="text-4xl font-black uppercase tracking-tight mb-4">FareBites Platform Architecture</h1>
            <p class="text-violet-100 text-lg font-medium leading-relaxed">Every screen in the app, what data each one needs, and which part of the backend it asks for it.</p>
          </div>

          <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-file-code"></i></div>
              <div><div class="text-2xl font-black leading-tight">${totalPages}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Customer Pages</div></div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-lock"></i></div>
              <div><div class="text-2xl font-black leading-tight">${protectedPages}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Require Sign-In</div></div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-plug"></i></div>
              <div><div class="text-2xl font-black leading-tight">${totalEndpoints}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Live Endpoints</div></div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-server"></i></div>
              <div><div class="text-2xl font-black leading-tight">${totalControllers}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Backend Groups</div></div>
            </div>
          </div>
        </div>

        <!-- QUICK NAVIGATION -->
        <div class="flex flex-wrap items-center gap-2 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-gray-100 shadow-sm">
          <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mx-2">Jump to:</span>
          <button onclick="document.getElementById('section-primer').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-violet-300 hover:text-violet-700 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">How It Works</button>
          <button onclick="document.getElementById('section-flow').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-violet-300 hover:text-violet-700 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">Pages</button>
          <button onclick="document.getElementById('section-api').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-gray-400 hover:text-gray-900 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">API Reference</button>
          <button onclick="document.getElementById('section-gaps').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-amber-400 hover:text-amber-700 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">Gaps</button>
          <button onclick="document.getElementById('section-launch').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-violet-300 hover:text-violet-700 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">Quick Launch</button>
          <button onclick="document.getElementById('section-tree').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-violet-300 hover:text-violet-700 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">Flowchart</button>
          <div class="ml-auto flex items-center">
            <button onclick="window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})" class="px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"><i class="fa-solid fa-arrow-down"></i> Jump to Bottom</button>
          </div>
        </div>

        <!-- ══════════ HOW THE BACKEND IS SHAPED ══════════ -->
        <div id="section-primer" class="scroll-mt-36">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-lightbulb text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">How This Site Talks To The Backend</h2>
              <p class="text-xs text-gray-500 font-medium">The five things worth knowing before reading anything else on this page</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div class="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4"><i class="fa-solid fa-layer-group text-sm"></i></div>
              <h3 class="text-sm font-black text-gray-900 mb-2">A menu is not one request</h3>
              <p class="text-xs text-gray-600 font-medium leading-relaxed">Loading a store's menu takes three tiers of calls: one for the category list, then one <em>per category</em> for its items, then one <em>per item</em> when someone opens it to pick a size or topping. Nothing returns the whole menu at once, so a cold menu load is the heaviest moment on the site and the place where perceived slowness comes from.</p>
            </div>

            <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4"><i class="fa-solid fa-cart-shopping text-sm"></i></div>
              <h3 class="text-sm font-black text-gray-900 mb-2">There is no cart on the server</h3>
              <p class="text-xs text-gray-600 font-medium leading-relaxed">The bag lives entirely in the browser. No API call happens when someone adds a drink, changes a quantity or edits a modifier — the whole order is assembled locally and posted in a single request at checkout. That keeps browsing fast, but it also means an abandoned cart leaves nothing behind to recover or analyse.</p>
            </div>

            <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div class="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mb-4"><i class="fa-solid fa-key text-sm"></i></div>
              <h3 class="text-sm font-black text-gray-900 mb-2">One token gates everything</h3>
              <p class="text-xs text-gray-600 font-medium leading-relaxed">Signing in returns a JWT that every later authenticated call carries. "Remember Me" decides whether it is kept in localStorage (survives closing the browser) or sessionStorage (dies with the tab). If any call comes back 401, the app clears the token and sends the customer back to sign-in — which is why an expired session shows up as a sudden bounce to login.</p>
            </div>

            <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4"><i class="fa-solid fa-triangle-exclamation text-sm"></i></div>
              <h3 class="text-sm font-black text-gray-900 mb-2">The store list is the weak point</h3>
              <p class="text-xs text-gray-600 font-medium leading-relaxed">The bulk <code class="bg-gray-100 px-1 rounded text-[10px]">/api/Locations</code> endpoint is gated behind an elevated login and returns 401 even for ordinary signed-in customers. Every screen that needs a store list has to survive that refusal by falling back to fetching stores one at a time from the public menu endpoints. Most location bugs trace back to this.</p>
            </div>

            <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div class="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4"><i class="fa-solid fa-rocket text-sm"></i></div>
              <h3 class="text-sm font-black text-gray-900 mb-2">Much of it loads before you see a page</h3>
              <p class="text-xs text-gray-600 font-medium leading-relaxed">Locations, store hours and the active store's menu are fetched once when the app boots, not when you navigate to a screen. That is why the homepage and menu appear instantly with no spinner — they are reading state that was already filled in — and why a failure at boot shows up as broken content several screens later.</p>
            </div>

            <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div class="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4"><i class="fa-solid fa-code-branch text-sm"></i></div>
              <h3 class="text-sm font-black text-gray-900 mb-2">Guests and members take different routes</h3>
              <p class="text-xs text-gray-600 font-medium leading-relaxed">A guest checkout and a signed-in checkout post to two genuinely separate endpoints rather than one endpoint with a flag. The payload shape is the same; the route and the auth requirement differ. Anything that changes about ordering has to be verified twice, once down each path.</p>
            </div>
          </div>
        </div>

        <!-- ══════════ SYSTEM PAGES ══════════ -->
        <div id="section-flow" class="scroll-mt-36">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-layer-group text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">System Pages</h2>
              <p class="text-xs text-gray-500 font-medium">Every screen, grouped by its job in the customer journey</p>
            </div>
          </div>

          <div class="space-y-10">
            ${groupOrder.map(gid => {
              const meta = groupMeta[gid];
              const inGroup = pages.filter(p => p.group === gid);
              if (!meta || inGroup.length === 0) return "";
              return `
                <div>
                  <div class="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background-color: ${meta.color}18; color: ${meta.color};">
                      <i class="fa-solid ${meta.icon} text-xs"></i>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight leading-tight">${meta.label}</h3>
                      <p class="text-[11px] text-gray-500 font-medium leading-tight">${meta.blurb}</p>
                    </div>
                    <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">${inGroup.length} ${inGroup.length === 1 ? "page" : "pages"}</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    ${inGroup.map(page => `
                      <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                          <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style="background-color: ${page.color}15; color: ${page.color};">
                            <i class="fa-solid ${page.icon} text-xl"></i>
                          </div>
                          <div class="flex-1 min-w-0">
                            <h3 class="text-sm font-black text-gray-900 leading-tight flex items-center justify-between gap-2">
                               <span>${page.name}</span>
                               ${page.auth ? '<i class="fa-solid fa-lock text-[10px] text-gray-400 shrink-0" title="Requires sign-in"></i>' : ''}
                            </h3>
                            <a href="${page.file}" target="_blank" class="text-[10px] font-mono text-gray-500 hover:text-violet-600 mt-1 flex items-center gap-1 transition-colors">
                              ${page.file} <i class="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
                            </a>
                          </div>
                        </div>
                        <p class="text-xs text-gray-600 font-medium leading-relaxed mb-4 flex-1">${page.description}</p>
                        ${page.endpoints.length > 0 ? `
                          <div class="mt-auto pt-4 border-t border-gray-100">
                            <div class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2.5">Calls ${page.endpoints.length} endpoint${page.endpoints.length === 1 ? "" : "s"}</div>
                            <div class="space-y-2.5">
                              ${page.endpoints.map(ep => `
                                <div>
                                  <div class="flex items-start gap-2">
                                    ${methodPill(ep.method)}
                                    <code class="text-[10px] font-mono text-gray-700 break-all leading-relaxed">${ep.path}</code>
                                  </div>
                                  <p class="text-[10px] text-gray-500 font-medium leading-relaxed mt-1 ml-[34px]">${ep.note}</p>
                                </div>
                              `).join("")}
                            </div>
                          </div>
                        ` : `
                          <div class="mt-auto pt-4 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              <i class="fa-solid fa-minus"></i> No API calls of its own
                            </div>
                          </div>
                        `}
                      </div>
                    `).join("")}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- ══════════ API REFERENCE, GROUPED BY BACKEND CONTROLLER ══════════ -->
        <div id="section-api" class="scroll-mt-36">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-gray-800 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-table-list text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">API Endpoint Reference</h2>
              <p class="text-xs text-gray-500 font-medium">All ${totalEndpoints} live endpoints, grouped into the ${totalControllers} controllers the backend actually organises them by</p>
            </div>
          </div>

          <div class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-8 flex items-start gap-4">
            <div class="w-8 h-8 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-circle-info text-xs"></i></div>
            <p class="text-xs text-gray-600 font-medium leading-relaxed">Each block below is one controller on the backend — a single file on the server owning a related set of operations. Reading them in this order is the fastest way to understand the division of labour: <strong class="text-gray-900">RestaurantMenu</strong> and <strong class="text-gray-900">Locations</strong> serve anyone, <strong class="text-gray-900">Account</strong> covers everything tied to a person, and <strong class="text-gray-900">CustomerOrder</strong> handles the transaction itself. Each block calls out its own trap in the amber note.</p>
          </div>

          <div class="space-y-8">
            ${catalog.map(grp => `
              <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-gray-100" style="background: linear-gradient(to right, ${grp.color}0a, transparent);">
                  <div class="flex items-start gap-4 flex-wrap">
                    <div class="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style="background-color: ${grp.color}1a; color: ${grp.color};">
                      <i class="fa-solid ${grp.icon} text-base"></i>
                    </div>
                    <div class="flex-1 min-w-[240px]">
                      <div class="flex items-center gap-3 flex-wrap mb-1.5">
                        <h3 class="text-base font-black text-gray-900 tracking-tight">${grp.controller}</h3>
                        <span class="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">${grp.endpoints.length} endpoint${grp.endpoints.length === 1 ? "" : "s"}</span>
                        <span class="text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5" style="background-color: ${grp.color}14; color: ${grp.color};">
                          <i class="fa-solid ${grp.auth.toLowerCase().includes("public") ? "fa-globe" : "fa-lock"} text-[8px]"></i>${grp.auth}
                        </span>
                      </div>
                      <p class="text-xs text-gray-600 font-medium leading-relaxed max-w-3xl">${grp.summary}</p>
                    </div>
                  </div>
                  <div class="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-xs mt-0.5 shrink-0"></i>
                    <p class="text-[11px] text-amber-900 font-medium leading-relaxed"><strong class="font-black">Worth knowing:</strong> ${grp.gotcha}</p>
                  </div>
                </div>

                <div class="divide-y divide-gray-50">
                  ${grp.endpoints.map(ep => `
                    <div class="p-5 hover:bg-gray-50/60 transition-colors">
                      <div class="flex items-start gap-3 mb-2 flex-wrap">
                        ${methodPill(ep.method, "lg")}
                        <code class="text-[12px] font-mono text-gray-900 font-semibold break-all leading-relaxed flex-1 min-w-[200px]">${ep.path}</code>
                        <div class="flex flex-wrap gap-1.5 shrink-0">
                          ${ep.where.map(pn => `<span class="text-[10px] font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full whitespace-nowrap">${pn}</span>`).join("")}
                        </div>
                      </div>
                      <p class="text-xs text-gray-600 font-medium leading-relaxed ml-0 md:ml-[64px] max-w-4xl">${ep.what}</p>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- ══════════ WHAT THE BACKEND DOES NOT DO YET ══════════ -->
        <div id="section-gaps" class="scroll-mt-36">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-circle-half-stroke text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">Designed But Not Wired</h2>
              <p class="text-xs text-gray-500 font-medium">Screens that look complete but have no backend behind them yet</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="divide-y divide-gray-50">
              ${[
                { title: "Rewards, points and loyalty tiers", detail: "No rewards endpoint exists anywhere in the API. Every balance, tier and offer on the Rewards screen and in Checkout (Gift &amp; Rewards) is local placeholder data. Any real launch needs a new controller.", pages: ["Rewards", "Checkout (Gift & Rewards)"] },
                { title: "Promo and discount codes", detail: "There is no validate-promo endpoint. A promo field can be designed, but nothing can currently check a code or apply a discount server-side, and totals are computed in the browser.", pages: ["Cart / Review", "Checkout"] },
                { title: "Live order tracking", detail: "No tracking or push endpoint exists. The Track Order stepper works by re-reading the standard order record and mapping its status field onto the visual steps, so progress only updates when the page asks again.", pages: ["Track Order"] },
                { title: "Saved locations", detail: "Item favorites are real server records, but saved <em>locations</em> are stored only in the browser. They do not follow a customer to another device and are dropped if the store disappears from the API response.", pages: ["Saved Locations"] },
                { title: "Payment capture", detail: "No payment-intent or card-tokenisation endpoint is called anywhere in the frontend. Checkout collects payment details visually and submits the order, but there is no integrated processor behind it yet.", pages: ["Checkout"] },
                { title: "Server-side cart", detail: "No cart endpoints of any kind. The basket cannot be resumed on another device, and an abandoned order leaves no server-side trace to follow up on.", pages: ["Cart / Review"] }
              ].map(gap => `
                <div class="p-5 hover:bg-gray-50/60 transition-colors">
                  <div class="flex items-start gap-3 mb-2 flex-wrap">
                    <span class="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-amber-100 text-amber-700 shrink-0 w-[52px] text-center">Gap</span>
                    <h4 class="text-sm font-black text-gray-900 flex-1 min-w-[200px] leading-snug">${gap.title}</h4>
                    <div class="flex flex-wrap gap-1.5 shrink-0">
                      ${gap.pages.map(pn => `<span class="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">${pn}</span>`).join("")}
                    </div>
                  </div>
                  <p class="text-xs text-gray-600 font-medium leading-relaxed md:ml-[64px] max-w-4xl">${gap.detail}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- ══════════ QUICK LAUNCH (absorbed from the retired pages.html) ══════════ -->
        <div id="section-launch" class="scroll-mt-36">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-table-cells text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">Quick Launch</h2>
              <p class="text-xs text-gray-500 font-medium">Every page as a compact one-click list — for jumping straight to a screen</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8">
            ${groupOrder.map(gid => {
              const meta = groupMeta[gid];
              const inGroup = pages.filter(p => p.group === gid);
              if (!meta || inGroup.length === 0) return "";
              return `
                <div>
                  <div class="text-[11px] font-black uppercase tracking-widest mb-3 pl-1 flex items-center gap-2" style="color: ${meta.color};">
                    <i class="fa-solid ${meta.icon}"></i>${meta.label}
                  </div>
                  <div class="flex flex-col gap-3">
                    ${inGroup.map(page => `
                      <a href="${page.file}" target="_blank" class="launch-card">
                        <div class="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style="background-color: ${page.color}18; color: ${page.color};">
                          <i class="fa-solid ${page.icon}"></i>
                        </div>
                        <div class="min-w-0">
                          <div class="text-[13px] font-black leading-tight text-gray-900">${page.name}</div>
                          <div class="text-[11px] font-semibold text-gray-400 font-mono mt-0.5">${page.file}</div>
                          ${page.auth ? '<span class="text-[9px] font-black uppercase tracking-wider bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-md inline-block mt-1">Auth Required</span>' : ''}
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs arrow shrink-0"></i>
                      </a>
                    `).join("")}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- ══════════ VISUAL FLOWCHART (absorbed from the retired sitemap.html) ══════════ -->
        <div id="section-tree" class="scroll-mt-36">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-diagram-project text-white text-sm"></i>
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">Visual Flowchart</h2>
              <p class="text-xs text-gray-500 font-medium">How the screens connect — hover any node for its description, click to open it</p>
            </div>
            <div class="flex items-center gap-1 bg-white shadow-sm border border-gray-100 rounded-xl p-1 shrink-0">
              <button onclick="window.devZoom = Math.max(0.1, (window.devZoom || 0.55) - 0.1); document.getElementById('dev-tree-content').style.transform = 'scale(' + window.devZoom + ')'" class="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600" title="Zoom out"><i class="fa-solid fa-minus"></i></button>
              <button onclick="window.devZoom = Math.min(2, (window.devZoom || 0.55) + 0.1); document.getElementById('dev-tree-content').style.transform = 'scale(' + window.devZoom + ')'" class="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600" title="Zoom in"><i class="fa-solid fa-plus"></i></button>
              <div class="w-px h-5 bg-gray-100"></div>
              <button onclick="window.devZoom = 0.55; document.getElementById('dev-tree-content').style.transform = 'scale(0.55)'" class="px-3 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[11px] font-black">FIT</button>
              <button onclick="window.devZoom = 1; document.getElementById('dev-tree-content').style.transform = 'scale(1)'" class="px-3 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[11px] font-black">1x</button>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 md:p-8 overflow-hidden">
            <div class="w-full overflow-auto flex justify-center items-start pt-8 pb-8 h-[680px]" id="dev-tree-scroll">
              <div id="dev-tree-content" class="dev-tree inline-block min-w-max transition-transform origin-top" style="transform: scale(0.55)">
                <ul>
                  ${window.buildTreeHtmlGlobal(window.systemTreeStructure)}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
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
  const grapefruitImg = "https://olodev.azurewebsites.net/imagesmenu/P3-Super-Grapefruit.jpg";
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
  if (window.isNavigatingAway) return;

  // Reset any stuck body overflow from modal locks (e.g. if user navigated away
  // while the customize-page modify modal was open)
  document.body.style.overflow = "";
  document.body.style.overflowX = "";

  // Capture current scroll positions if we are re-rendering the same page
  let currentScrollPos = 0;
  let hasScroller = false;
  if (window._lastRenderedPage === currentPage) {
    const scroller = document.getElementById("menu-scroller");
    if (scroller && scroller.scrollTop > 0) {
      currentScrollPos = scroller.scrollTop;
      hasScroller = true;
    } else if (window.scrollY > 0) {
      currentScrollPos = window.scrollY;
    }
  }

  if (window.carouselAutoplayInterval) {
    clearInterval(window.carouselAutoplayInterval);
    window.carouselAutoplayInterval = null;
  }
  const viewport = document.getElementById("app-viewport");
  if (!viewport) return;

  // On the locations picker, we don't want a permission prompt firing before
  // the user has asked for anything location-based — that's deferred to the
  // "Near Me" tab click. If permission was already granted earlier in this
  // session (we already have coords), keep distances fresh silently.
  if (
    (currentPage === "locations" || currentPage === "locations-alt") &&
    mockupState.userLat &&
    mockupState.userLng
  ) {
    requestUserLocation();
  }

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
                    <div class="w-16 h-12 lg:w-[114px] lg:h-[70px] flex items-center justify-center cursor-pointer shrink-0" onclick="navigateTo('restaurant-home')">
                        <img src="images/nav-logo.png" class="w-full h-full object-contain">
                    </div>
                    <div class="flex items-center gap-3 lg:gap-6 text-[16px] lg:text-[1.3rem] font-black uppercase tracking-tight text-[#1f0b35] ml-2">
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap ${currentPage === 'restaurant-home' ? 'active-nav-link' : ''}" onclick="navigateTo('restaurant-home')">Home</span>
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap ${(currentPage === 'menu' || currentPage === 'menu-single') ? 'active-nav-link' : ''}" onclick="navigateTo('menu')">Menu</span>
                        <span class="cursor-pointer nav-link-animated whitespace-nowrap ${(currentPage === 'menu' || currentPage === 'menu-single') && mockupState.menuTab === 'history' ? 'active-nav-link' : ''}" onclick="tryGoToReorder();">Reorder</span>
                    </div>
                </div>
                <div class="flex items-center gap-4 lg:gap-8 text-[14px] lg:text-[16px] font-black uppercase tracking-tight text-[#1f0b35]">
                    <div class="flex items-center gap-2 cursor-pointer hover:text-violet-600 transition-colors whitespace-nowrap font-black uppercase tracking-tight text-[14px] lg:text-[16px] text-[#1f0b35]" onclick="navigateTo('locations')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${mockupState.selectedLocationId ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 lg:w-7 lg:h-7 ${mockupState.selectedLocationId ? "text-violet-600" : ""}"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" fill="${mockupState.selectedLocationId ? "#ffffff" : "none"}"/></svg>
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
                                <div class="dropdown-item" onclick="navigateTo('account')"><i class="fa-solid fa-user w-4 text-center"></i> My Account</div>

                                <div class="h-px bg-violet-100/50 my-2"></div>
                                <div class="dropdown-item text-gray-900 hover:text-black" onclick="signOutUser()"><i class="fa-solid fa-arrow-right-from-bracket w-4 text-center"></i> Sign Out</div>
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

  // Detect if the current page has a sticky bottom action bar
  const pagesWithBottomBar = [
    "customize",
    "customize-alt",
    "cart",
    "checkout",
    "checkout-rewards",
    "order-details",
    "order-status",
    "menu",
    "menu-single",
    "dashboard"
  ];
  const hasBottomBar = pagesWithBottomBar.includes(currentPage);
  
  // Apply classes dynamically:
  // - On desktop (md:): bottom-8 right-8
  // - On mobile/tablet with bottom bar: bottom-32 right-4
  // - On mobile/tablet without bottom bar: bottom-20 right-4
  const positionClasses = hasBottomBar 
    ? "bottom-32 md:bottom-8 right-4 md:right-8" 
    : "bottom-20 md:bottom-8 right-4 md:right-8";

  const scrollToTopBtnHtml = `
      <!-- Global Scroll to Top Button -->
      <div class="fixed ${positionClasses} z-[90] pb-bottom-safe pointer-events-none">
          <button id="scroll-to-top-btn" 
                  onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
                  class="w-14 h-14 bg-[#da2377] text-white rounded-full shadow-xl flex items-center justify-center hover:opacity-90 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 opacity-0 pointer-events-none">
              <i class="fa-solid fa-arrow-up text-xl pointer-events-none"></i>
          </button>
      </div>
  `;
  contentHtml += scrollToTopBtnHtml;

  // Render Reorder Modal if modalOpen === 'reorder'
  if (mockupState.modalOpen === "reorder") {
    contentHtml += renderReorderModalHTML();
  }

  // Render Order Details (read-only) Modal if modalOpen === 'order-details-view'
  if (mockupState.modalOpen === "order-details-view") {
    contentHtml += renderOrderDetailsViewModalHTML();
  }

  // Render the location-change confirmation modal if modalOpen === 'confirm-location-change'
  if (mockupState.modalOpen === "confirm-location-change") {
    contentHtml += renderConfirmLocationChangeModalHTML();
  }

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
  const pageChanged = (window._lastRenderedPage !== currentPage);
  window._lastRenderedPage = currentPage;

  if (pageChanged && !scrolledToHash && !isUpdatingMockupState) {
    window.scrollTo(0, 0);
  }
  mockupState.lastModalOpen = mockupState.modalOpen;
  mockupState.lastMenuSearchOpen = mockupState.menuSearchOpen;
  persistAllState();
  document.title = `FareBites – ${PAGE_LABELS[currentPage] || currentPage}`;

  // Restore scroll positions (both menu return scroll, and same-page background updates)
  if ((currentPage === "menu" || currentPage === "menu-single" || currentPage === "menu-favorites") &&
      typeof mockupState.menuScrollPosition === "number" && mockupState.menuScrollPosition > 0) {
    const scrollPos = mockupState.menuScrollPosition;
    setTimeout(() => {
      const scroller = document.getElementById("menu-scroller");
      if (scroller) {
        scroller.scrollTop = scrollPos;
      }
      window.scrollTo(0, scrollPos);
      mockupState.menuScrollPosition = 0;
      persistAllState();
    }, 50);
  } else if (currentScrollPos > 0) {
    const scroller = document.getElementById("menu-scroller");
    if (scroller && hasScroller) {
      scroller.scrollTop = currentScrollPos;
    } else {
      window.scrollTo(0, currentScrollPos);
    }
  }

  if (currentPage === "locations" || currentPage === "locations-alt") {
    initLocationsMap();
  }

  // Re-focus menu search input after render (keeps cursor active while typing)
  if (
    (currentPage === "menu" || currentPage === "menu-single") &&
    mockupState.menuSearchOpen
  ) {
    const searchInput = document.getElementById("menu-search-input");
    if (searchInput) {
      searchInput.focus();
      const len = searchInput.value.length;
      searchInput.setSelectionRange(len, len);
    }
  }

  // Re-focus location search input after render (keeps cursor active while typing)
  if (
    (currentPage === "locations" || currentPage === "locations-alt") &&
    mockupState.locationSearchFocused
  ) {
    const searchInput = document.getElementById("location-search-input");
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
        const cardWidth = carousel.children[0] ? (carousel.children[0].offsetWidth + 16) : (carousel.offsetWidth + 16);
        const index = Math.round(carousel.scrollLeft / cardWidth);
        const dotsCount = carousel.children.length;
        for (let i = 0; i < dotsCount; i++) {
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

      // Start Autoplay for mobile/tablet featured items carousel (4-second interval)
      if (currentViewport !== "desktop") {
        const startAutoplay = () => {
          if (window.carouselAutoplayInterval) {
            clearInterval(window.carouselAutoplayInterval);
          }
          window.carouselAutoplayInterval = setInterval(() => {
            const currentCarousel = document.getElementById("home-carousel");
            if (!currentCarousel) {
              clearInterval(window.carouselAutoplayInterval);
              window.carouselAutoplayInterval = null;
              return;
            }
            if (currentCarousel.children.length === 0) return;
            
            const maxScrollLeft = currentCarousel.scrollWidth - currentCarousel.clientWidth;
            if (currentCarousel.scrollLeft >= maxScrollLeft - 5) {
              // Cycle back to start
              currentCarousel.scrollTo({
                left: 0,
                behavior: "smooth"
              });
            } else {
              const cardWidth = currentCarousel.children[0].offsetWidth + 16;
              const currentIndex = Math.round(currentCarousel.scrollLeft / cardWidth);
              const nextIndex = currentIndex + 1;
              currentCarousel.scrollTo({
                left: nextIndex * cardWidth,
                behavior: "smooth"
              });
            }
          }, 4000);
        };

        startAutoplay();

        // Reset timer on manual interaction
        carousel.addEventListener("touchstart", startAutoplay, { passive: true });
        carousel.addEventListener("mousedown", startAutoplay, { passive: true });
      }
    }
  }

  // Start Autoplay for menu featured items carousel (4-second interval)
  if (currentPage === "menu" || currentPage === "menu-single") {
    const carousel = document.getElementById("menu-featured-carousel");
    if (carousel) {
      const startAutoplay = () => {
        if (window.carouselAutoplayInterval) {
          clearInterval(window.carouselAutoplayInterval);
        }
        window.carouselAutoplayInterval = setInterval(() => {
          const currentCarousel = document.getElementById("menu-featured-carousel");
          if (!currentCarousel) {
            clearInterval(window.carouselAutoplayInterval);
            window.carouselAutoplayInterval = null;
            return;
          }
          if (currentCarousel.children.length === 0) return;
          
          const maxScrollLeft = currentCarousel.scrollWidth - currentCarousel.clientWidth;
          if (currentCarousel.scrollLeft >= maxScrollLeft - 5) {
            // Cycle back to start
            currentCarousel.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          } else {
            const firstChild = currentCarousel.children[0];
            const gap = currentViewport === "desktop" ? 14 : 12;
            const cardWidth = firstChild.offsetWidth + gap;
            const currentIndex = Math.round(currentCarousel.scrollLeft / cardWidth);
            const nextIndex = currentIndex + 1;
            currentCarousel.scrollTo({
              left: nextIndex * cardWidth,
              behavior: "smooth"
            });
          }
        }, 4000);
      };

      startAutoplay();

      // Reset timer on manual interaction
      carousel.addEventListener("touchstart", startAutoplay, { passive: true });
      carousel.addEventListener("mousedown", startAutoplay, { passive: true });
    }
  }
}

function adjustBagQuantity(delta) {
  mockupState.bagQuantity = Math.max(0, (mockupState.bagQuantity || 0) + delta);
  if (mockupState.bagQuantity > 0) {
    mockupState.noBagsSelected = false;
  }
  persistAllState();

  // Update DOM directly for modal elements if present
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

  // Trigger full UI refresh so cart page pill, bag fee line item, and totals update
  if (typeof updateMockupState === "function") {
    updateMockupState("bagQuantity", mockupState.bagQuantity);
  }
}

// =============================================================================
// SHARED MODIFIER RENDERING FUNCTIONS (used by both 'customize' and 'customize-alt')
// =============================================================================

/**
 * Section header with optional required badge and icon.
 */
function _modSectionHeader(label, required, icon) {
  return `
        <div class="flex justify-between items-center pb-2 border-b border-gray-100 mb-3">
            <span class="text-base font-black text-violet-600 uppercase tracking-widest flex items-center gap-1.5">
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
            onclick="window._selectSubItem('${gid}', '${p.menuSubItemId}', ${sub.itemTypeId || 2}, '${safeName}', ${p.price || 0}, true)"
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
 * Helper: returns comma-separated string of default ingredients (isDefaultItem === true).
 */
function _getDefaultItemList(modifyPrices) {
  if (!modifyPrices || modifyPrices.length === 0) return "";
  const defaults = modifyPrices
    .filter((m) => m.isDefaultItem)
    .map((m) => m.menuSubItem?.name || m.name || `Item ${m.menuSubItemId}`);
  return defaults.length > 0 ? defaults.join(", ") : "None";
}

/**
 * Helper: calculates price delta for MenuSubItemModifyPrices selections,
 * factoring in free allowances (includedSubItemsBeforeCharges).
 */
function _calculateModifyPricesTotal(detail, modSels) {
  if (!detail || !modSels) return 0;
  const modifyPrices = detail.menuSubItemModifyPrices || [];
  const freeAllowance = detail.includedSubItemsBeforeCharges ?? 0;
  let remFree = freeAllowance;
  let total = 0;

  Object.keys(modSels).forEach((defaultId) => {
    const slot = modSels[defaultId];
    if (!slot?.removed) return;
    const mp = modifyPrices.find(
      (m) => String(m.menuSubItemId) === String(defaultId),
    );
    total += mp?.noPrice || 0;
    if (slot.sub) {
      if (remFree > 0) {
        remFree--;
      } else {
        total += slot.sub.price || 0;
      }
    }
  });

  return total;
}

/**
 * Helper: generates summary HTML for the Modify Options tile.
 */
function _getModifySummaryHTML(detail, modSels) {
  const modifyPrices = detail?.menuSubItemModifyPrices || [];
  const defaultText = _getDefaultItemList(modifyPrices);

  const removedIds = Object.keys(modSels).filter((id) => modSels[id]?.removed);

  if (removedIds.length === 0) {
    return `<span class="text-gray-700 font-bold text-sm leading-relaxed">${defaultText}</span>`;
  }

  const tags = removedIds.map((defaultId) => {
    const mp = modifyPrices.find(
      (m) => String(m.menuSubItemId) === String(defaultId),
    );
    const name = mp?.menuSubItem?.name || mp?.name || `Item ${defaultId}`;
    const sub = modSels[defaultId].sub;
    let tag = `<span class="text-rose-600 font-black">No ${name}</span>`;
    if (sub) {
      tag += `, <span class="text-violet-600 font-black">Sub ${sub.name}</span>`;
    }
    return tag;
  });

  return `<div class="flex flex-col gap-0.5">
    <span class="text-gray-400 text-xs line-through font-semibold">${defaultText}</span>
    <span class="text-sm font-bold">${tags.join(" &middot; ")}</span>
  </div>`;
}

// Global modal open/close functions
window._openModifyModal = function () {
  mockupState._isModifyModalOpen = true;
  const modal = document.getElementById("modifyOptionsModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
};

window._closeModifyModal = function () {
  mockupState._isModifyModalOpen = false;
  const modal = document.getElementById("modifyOptionsModal");
  if (modal) {
    modal.classList.add("hidden");
  }
  document.body.style.overflow = "";
  updateMockupState("_lastUpdated", Date.now());
};

window._toggleModifyRemove = function (menuSubItemId) {
  if (!mockupState._customizeModifyTypes)
    mockupState._customizeModifyTypes = {};
  const modSels = mockupState._customizeModifyTypes;

  const existing = modSels[menuSubItemId];
  if (existing?.removed) {
    delete modSels[menuSubItemId];
  } else {
    modSels[menuSubItemId] = { removed: true, sub: null };
  }

  _updateModifyModalDOM();
};

window._toggleModifySub = function (defaultMenuSubItemId, candidateMenuSubItemId) {
  const modSels = mockupState._customizeModifyTypes;
  const slot = modSels?.[defaultMenuSubItemId];
  if (!slot?.removed) return;

  if (String(slot.sub?.menuSubItemId) === String(candidateMenuSubItemId)) {
    slot.sub = null;
  } else {
    const detail = mockupState.selectedItemDetail;
    const mp = (detail?.menuSubItemModifyPrices || []).find(
      (m) => String(m.menuSubItemId) === String(candidateMenuSubItemId),
    );
    const name = mp?.menuSubItem?.name || mp?.name || `Item ${candidateMenuSubItemId}`;
    slot.sub = {
      menuSubItemId: candidateMenuSubItemId,
      name,
      price: mp?.addPrice || 0,
    };
  }

  _updateModifyModalDOM();
};

function _updateModifyModalDOM() {
  const detail = mockupState.selectedItemDetail;
  if (!detail || !detail.menuSubItemModifyPrices) return;
  const modSels = mockupState._customizeModifyTypes || {};
  const modifyPrices = detail.menuSubItemModifyPrices || [];
  const defaultItems = modifyPrices.filter((m) => m.isDefaultItem);

  defaultItems.forEach((mp) => {
    const defaultId = mp.menuSubItemId;
    const slot = modSels[defaultId];
    const isRemoved = !!slot?.removed;

    const chk = document.getElementById(`modify-remove-chk-${defaultId}`);
    const box = document.getElementById(`modify-remove-box-${defaultId}`);
    if (chk) chk.checked = isRemoved;
    if (box) {
      box.classList.toggle("border-violet-600", isRemoved);
      box.classList.toggle("bg-violet-50/50", isRemoved);
      box.classList.toggle("border-gray-200", !isRemoved);
      box.classList.toggle("bg-white", !isRemoved);
    }

    const subDiv = document.getElementById(`modifySubDiv-${defaultId}`);
    if (subDiv) {
      subDiv.style.display = isRemoved ? "block" : "none";
      subDiv.setAttribute("data-maxselect", isRemoved ? "1" : "0");
    }

    modifyPrices.forEach((cand) => {
      const isChecked =
        isRemoved &&
        String(cand.menuSubItemId) === String(slot?.sub?.menuSubItemId);
      const cChk = document.getElementById(
        `modify-sub-chk-${defaultId}-${cand.menuSubItemId}`,
      );
      const cBox = document.getElementById(
        `modify-sub-box-${defaultId}-${cand.menuSubItemId}`,
      );
      if (cChk) cChk.checked = isChecked;
      if (cBox) {
        cBox.classList.toggle("border-violet-600", isChecked);
        cBox.classList.toggle("bg-violet-50/50", isChecked);
        cBox.classList.toggle("border-gray-200", !isChecked);
        cBox.classList.toggle("bg-white", !isChecked);
      }
    });
  });

  const freeAllowance = detail.includedSubItemsBeforeCharges ?? 0;
  let remFree = freeAllowance;
  let chargeCount = 0;
  Object.values(modSels).forEach((slot) => {
    if (slot?.removed && slot.sub) {
      if (remFree > 0) remFree--;
      else chargeCount++;
    }
  });

  const hdfNoChrge = document.querySelector('input[name="hdfNoChrge"]');
  const hdfRemNoChrge = document.querySelector('input[name="hdfRemNoChrge"]');
  const hdfChrgeCount = document.querySelector('input[name="hdfChrgeCount"]');
  if (hdfNoChrge) hdfNoChrge.value = freeAllowance;
  if (hdfRemNoChrge) hdfRemNoChrge.value = remFree;
  if (hdfChrgeCount) hdfChrgeCount.value = chargeCount;

  const tileSummaryEl = document.getElementById("modifyTileSummary");
  if (tileSummaryEl) {
    tileSummaryEl.innerHTML = _getModifySummaryHTML(detail, modSels);
  }
}

/**
 * MenuSubItemModifyPrices Tile & Modal renderer according to API spec:
 * Step 1: Tile with DefaultItemList() and Choose button
 * Step 2: Modal with Section 1 (Remove default) and Section 2 (Substitute item)
 */
function _renderModifyTypeSection(modifyPrices, modSels, detail) {
  if (!modifyPrices || modifyPrices.length === 0) return "";

  const removeList = modifyPrices.filter((m) => m.isDefaultItem);
  const subCandidates = [...modifyPrices].sort((a, b) => {
    const nameA = (a.menuSubItem?.name || a.name || "").toLowerCase();
    const nameB = (b.menuSubItem?.name || b.name || "").toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const freeAllowance = detail?.includedSubItemsBeforeCharges ?? 0;
  let remFree = freeAllowance;
  let chargeCount = 0;
  let removedCount = 0;
  removeList.forEach((mp) => {
    const slot = modSels[mp.menuSubItemId];
    if (!slot?.removed) return;
    removedCount++;
    if (slot.sub) {
      if (remFree > 0) remFree--;
      else chargeCount++;
    }
  });

  const summaryHTML = _getModifySummaryHTML(detail, modSels);

  const tileHTML = `
    <div class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 modifyParent0" id="modifyParent0">
        <div class="flex flex-col gap-1 min-w-0 flex-1">
            <div class="flex items-center gap-2">
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Modify Options</span>
                <span class="text-[10px] font-extrabold bg-violet-50 text-violet-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Defaults & Subs</span>
            </div>
            <div class="modify0" id="modify0">
                <div id="modifyTileSummary">${summaryHTML}</div>
            </div>
        </div>
        <button type="button" onclick="window._openModifyModal()" 
            class="px-6 py-2.5 rounded-full border border-violet-200 bg-violet-50 text-violet-600 font-black text-xs uppercase tracking-wider hover:bg-violet-600 hover:text-white active:scale-95 transition-all shadow-sm shrink-0">
            Choose
        </button>
    </div>
  `;

  const removeItemsHTML = removeList
    .map((mp, idx) => {
      const defaultId = mp.menuSubItemId;
      const sub = mp.menuSubItem || {};
      const name = sub.name || mp.name || `Item ${defaultId}`;
      const itemName = `No ${name}`;
      const price = mp.noPrice || 0;
      const slot = modSels[defaultId];
      const isChecked = !!slot?.removed;
      const priceTag =
        price > 0
          ? ` (+$${price.toFixed(2)})`
          : price < 0
            ? ` (-$${Math.abs(price).toFixed(2)})`
            : "";

      const subItemsHTML = subCandidates
        .map((cand) => {
          const candSub = cand.menuSubItem || {};
          const candName =
            candSub.name || cand.name || `Item ${cand.menuSubItemId}`;
          const candLabel = `Sub ${candName}`;
          const candPrice = cand.addPrice || 0;
          const isCandChecked =
            String(cand.menuSubItemId) === String(slot?.sub?.menuSubItemId);
          const candPriceTag =
            candPrice > 0 ? ` (+$${candPrice.toFixed(2)})` : " (Free)";

          return `
          <label id="modify-sub-box-${defaultId}-${cand.menuSubItemId}"
                 class="modifyItem modifySub flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer select-none ${isCandChecked ? "border-violet-600 bg-violet-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-violet-300"}"
                 data-name="${candLabel}" data-price="${candPrice}" data-modify="Sub">
              <div class="flex items-center gap-3">
                  <input type="checkbox" id="modify-sub-chk-${defaultId}-${cand.menuSubItemId}"
                         class="w-4 h-4 text-violet-600 rounded border-gray-300 focus:ring-violet-500"
                         ${isCandChecked ? "checked" : ""}
                         onchange="window._toggleModifySub(${defaultId}, ${cand.menuSubItemId})">
                  <span class="text-sm font-bold text-gray-800">${candLabel}${candPriceTag}</span>
              </div>
              <span class="text-[10px] font-extrabold uppercase ${cand.isDefaultItem ? "text-gray-400" : "text-violet-500"}">${cand.isDefaultItem ? "Default" : "Option"}</span>
          </label>
        `;
        })
        .join("");

      return `
      <div>
          <label id="modify-remove-box-${defaultId}"
                 class="modifyItem modifyRemove flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer select-none ${isChecked ? "border-violet-600 bg-violet-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-violet-300"}"
                 data-name="${itemName}" data-price="${price}" data-modify="No" data-index="${idx}">
              <div class="flex items-center gap-3">
                  <input type="checkbox" id="modify-remove-chk-${defaultId}"
                         class="w-4 h-4 text-violet-600 rounded border-gray-300 focus:ring-violet-500"
                         ${isChecked ? "checked" : ""}
                         onchange="window._toggleModifyRemove(${defaultId})">
                  <span class="text-sm font-bold text-gray-800">${itemName}${priceTag}</span>
              </div>
              <span class="text-[10px] font-extrabold uppercase text-gray-400">Default Ingredient</span>
          </label>
          <div id="modifySubDiv-${defaultId}" data-maxselect="${isChecked ? 1 : 0}" style="display: ${isChecked ? "block" : "none"};" class="mt-2.5 ml-4 pl-4 border-l-2 border-violet-100">
              <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] font-black text-violet-600 uppercase tracking-widest">Substitute for ${name}</span>
                  <span class="text-[9px] font-bold text-violet-500 uppercase">1 Substitute Allowed</span>
              </div>
              <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  ${subItemsHTML}
              </div>
          </div>
      </div>
    `;
    })
    .join("");

  const isModalOpen = !!mockupState._isModifyModalOpen;

  const modalHTML = `
    <div id="modifyOptionsModal" class="modifyModal0 fixed inset-0 z-[10000] ${isModalOpen ? "" : "hidden"} flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-out]" onclick="if (event.target === this) window._closeModifyModal();">
        <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-100">
            
            <!-- Modal Header -->
            <div class="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                <div>
                    <h3 class="text-lg font-black text-gray-900 uppercase tracking-tight">Modify Options</h3>
                    <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">Remove any default ingredients and choose a substitute for each</p>
                </div>
                <button type="button" onclick="window._closeModifyModal()" class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-all active:scale-95">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <!-- Modal Content (Scrollable) -->
            <div class="p-6 overflow-y-auto flex-1 space-y-6">

                <!-- Default ingredients: each removable independently; removing one reveals its own substitute list right below it -->
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Included Ingredients</span>
                        <span class="text-[10px] font-bold text-gray-400 uppercase">${removeList.length} Total — Remove Any</span>
                    </div>
                    <div class="space-y-2.5">
                        ${removeItemsHTML || '<div class="text-xs text-gray-400 italic p-3">No default items to remove</div>'}
                    </div>
                </div>

            </div>

            <!-- Modal Footer -->
            <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between shrink-0">
                <input type="hidden" name="hdfNoChrge" value="${freeAllowance}" />
                <input type="hidden" name="hdfRemNoChrge" value="${remFree}" />
                <input type="hidden" name="hdfChrgeCount" value="${chargeCount}" />

                <div class="flex flex-col">
                    <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Selected Modifications</span>
                    <span class="text-xs font-bold text-gray-700">${removedCount > 0 ? `${removedCount} of ${removeList.length} Modified` : "No changes"}</span>
                </div>

                <button type="button" data-dismiss="modal" onclick="window._closeModifyModal()" 
                    class="px-8 py-3 bg-violet-600 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-violet-700 active:scale-95 transition-all">
                    DONE
                </button>
        </div>
    </div>
  `;

  return tileHTML + modalHTML;
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
    .filter((choice) => (choice.subItems || []).length > 1)
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
                onclick="window._selectSubItem('${gid}', '${sub.menuSubItemId}', ${sub.itemTypeId || 2}, '${safeName}', ${price}, true)"
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
    // Genuinely nothing to customize (or still loading it) — no placeholder
    // box, just the spinner while loading. Once resolved empty, the item's
    // customize screen shows only Special Instructions, nothing else.
    if (mockupState.isLoading) {
      return `<div class="text-center py-8 text-gray-400 text-sm font-bold uppercase tracking-widest flex flex-col items-center gap-3">
            <i class="fa-solid fa-spinner fa-spin text-violet-400 text-2xl mb-2"></i><span>Loading customizations…</span>
        </div>`;
    }
    return "";
  }

  let html = "";

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
    // A group with only one (or zero) selectable option isn't a real choice —
    // it's a fixed attribute of the drink (e.g. brown sugar syrup is always 100%).
    // Skip rendering it; the single option is still auto-selected by applyDefaultSelections.
    if ((g.groupPrices || []).length <= 1) continue;
    const isRequired = (g.minSelect || 0) >= 1;
    const icon = _groupIcon(g.displayName || g.groupName || "");
    const hasValidation =
      isRequired &&
      Object.keys(sels[g.menuSubItemGroupId]?.items || {}).length === 0;
    html += `<div id="mod-group-${g.menuSubItemGroupId}" class="${hasValidation ? "validation-error" : ""}">
            ${_modSectionHeader(g.displayName || g.groupName || "Options", isRequired, icon)}
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
                ${_modSectionHeader(g.displayName || g.groupName || "Options", false, icon)}
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
            ${_renderModifyTypeSection(modifyPrices, modSels, detail)}
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

const applyDefaultSelections = (detail) => {
  if (detail.menuSubItemGroups) {
    const selections = {};
    for (const g of detail.menuSubItemGroups) {
      const groupId = g.menuSubItemGroupId;
      const maxSel = g.maxSelect || 1;
      const groupNameStr = (g.displayName || g.groupName || "").toLowerCase();
      const isIceOrSugar = groupNameStr.includes("ice") || groupNameStr.includes("sugar") || groupNameStr.includes("sweet");
      
      selections[groupId] = {
        groupName: g.displayName || g.groupName || "",
        maxSelect: maxSel,
        minSelect: g.minSelect || 0,
        items: {},
      };
      
      let foundDefault = false;
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
          foundDefault = true;
        }
      }
      
      // Fallback: If it's Ice/Sugar and no default was set, auto-select "100" or "Regular"
      if (!foundDefault && isIceOrSugar) {
        const fallbackMatch = (g.groupPrices || []).find(p => {
           const subName = ((p.menuSubItem || {}).name || "").toLowerCase();
           return subName.includes("100") || subName.includes("regular");
        });
        
        if (fallbackMatch) {
          selections[groupId].items[fallbackMatch.menuSubItemId] = {
            menuSubItemId: fallbackMatch.menuSubItemId,
            itemTypeId: (fallbackMatch.menuSubItem || {}).itemTypeId || 2,
            itemGroupPriceId: parseInt(groupId),
            quantity: 1,
            name: (fallbackMatch.menuSubItem || {}).name || "",
            price: fallbackMatch.price || 0,
          };
        }
      }
    }
    mockupState._customizeSubItems = selections;
  }
};

function selectItemAndNavigate(index) {
  let scrollPos = 0;
  const scroller = document.getElementById("menu-scroller");
  if (scroller && scroller.scrollTop > 0) {
    scrollPos = scroller.scrollTop;
  } else if (window.scrollY > 0) {
    scrollPos = window.scrollY;
  }
  if (scrollPos > 0) {
    mockupState.menuScrollPosition = scrollPos;
  }
  const item = getActiveMenuItems()[index];
  mockupState.selectedItem = item;
  mockupState.editingCartIndex = null;
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

  // Fetch full item detail (with sub-item groups) from API
  if (item.id && mockupState.selectedLocationId && window.ApiService) {
    // Menu item details load silently in background
    window.ApiService.getMenuItemDetail(mockupState.selectedLocationId, item.id)
      .then((detail) => {
        // If the detail is empty or has no customization groups, the item
        // genuinely has none — never invent options the real menu doesn't have.
        if (
          !detail ||
          !detail.menuSubItemGroups ||
          detail.menuSubItemGroups.length === 0
        ) {
          detail = {
            menuItemId: item.id,
            name: item.name,
            price: item.price,
            menuSubItemGroups: [],
            menuSubItemModifyPrices: [],
            includedSubItemsBeforeCharges: 1,
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
        console.error("Failed to fetch item detail:", err);
        const fallbackDetail = {
          menuItemId: item.id,
          name: item.name,
          price: item.price,
          menuSubItemGroups: [],
          menuSubItemModifyPrices: [],
          includedSubItemsBeforeCharges: 1,
        };
        mockupState.selectedItemDetail = fallbackDetail;
        applyDefaultSelections(fallbackDetail);
        persistAllState();
      })
      .finally(() => {
        renderPage();
        navigateTo(window._targetCustomizePage || "customize");
        window._targetCustomizePage = null;
      });
  } else {
    const fallbackDetail = {
      menuItemId: item.id || 0,
      name: item.name,
      price: item.price,
      menuSubItemGroups: [],
      menuSubItemModifyPrices: [],
      includedSubItemsBeforeCharges: 1,
    };
    mockupState.selectedItemDetail = fallbackDetail;
    applyDefaultSelections(fallbackDetail);
    mockupState.isLoading = false;
    navigateTo(window._targetCustomizePage || "customize");
    window._targetCustomizePage = null;
  }
}

// Called by the "+ Add" button on suggested items cards in the cart page.
// Uses a simple integer index into window._cartSuggestedItems — no id or
// quoting issues. Finds the matching item in getActiveMenuItems() (API items)
// or falls back to the stored item object, then navigates to customize.
window.quickAddSuggestedItem = function(idx) {
  const stored = window._cartSuggestedItems;
  if (!stored || !stored[idx]) {
    console.warn('quickAddSuggestedItem: no item at index', idx);
    return;
  }
  const storedItem = stored[idx];
  // Prefer the API version of this item (has id + full detail) if available
  const activeItems = getActiveMenuItems();
  const activeIdx = activeItems.findIndex(
    (i) => (i.name || '').toLowerCase() === (storedItem.name || '').toLowerCase()
  );
  if (activeIdx !== -1) {
    // Item found in active list — use the standard navigate path (sets selectedItem correctly)
    mockupState.lastMenuPage = 'cart';
    selectItemAndNavigate(activeIdx);
  } else {
    // Item not in active category — set directly and navigate
    mockupState.selectedItem = storedItem;
    mockupState.editingCartIndex = null;
    mockupState.itemQuantity = 1;
    mockupState.sugarLevel = '50%';
    mockupState.toppingQty = {};
    mockupState.cupQty = {};
    mockupState.freeToppings = [];
    mockupState.iceLevel = 'ICE';
    mockupState._customizeSubItems = {};
    mockupState._customizeModifyTypes = {};
    mockupState.selectedItemDetail = null;
    mockupState.lastMenuPage = 'cart';
    persistAllState();
    navigateTo('customize');
  }
};

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
  if (typeof subItemId === 'string' && /^\d+$/.test(subItemId)) {
    subItemId = parseInt(subItemId, 10);
  }
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

// Flat toggle pill for a stepper-group topping (on/off, no quantity UI).
window._toggleFlatTopping = function (groupId, subItemId, itemTypeId, name, price) {
  const current = mockupState._customizeSubItems?.[groupId]?.items?.[subItemId];
  const qty = current ? current.quantity : 0;
  window._adjustSubItemQty(groupId, subItemId, itemTypeId, name, price, qty > 0 ? -qty : 1);
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
  if (isItemOutOfStock(item)) return;

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
      if (String(sid).startsWith("default_cup_")) continue;
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

  // --- Collect modify-type items (Remove/Substitute options), one pair per default slot ---
  const modifyPricesForCart = detail?.menuSubItemModifyPrices || [];
  const freeAllowance = detail?.includedSubItemsBeforeCharges ?? 0;
  let remFreeForCart = freeAllowance;

  Object.keys(modSels).forEach((defaultId) => {
    const slot = modSels[defaultId];
    if (!slot?.removed) return;

    const mp = modifyPricesForCart.find(
      (m) => String(m.menuSubItemId) === String(defaultId),
    );
    const removedName = mp?.menuSubItem?.name || mp?.name || `Item ${defaultId}`;
    selectedSubItems.push({
      menuSubItemId: parseInt(defaultId),
      itemTypeId: 2,
      itemGroupPriceId: 0,
      quantity: 1,
      name: `No ${removedName}`,
      price: mp?.noPrice || 0,
      groupName: "Modify Options",
      modifyType: "no",
    });

    if (slot.sub) {
      const effectivePrice = remFreeForCart > 0 ? 0 : slot.sub.price || 0;
      if (remFreeForCart > 0) remFreeForCart--;
      selectedSubItems.push({
        menuSubItemId: parseInt(slot.sub.menuSubItemId),
        itemTypeId: 2,
        itemGroupPriceId: 0,
        quantity: 1,
        name: `Sub ${slot.sub.name}`,
        price: effectivePrice,
        groupName: "Modify Options",
        modifyType: "add",
        replacesMenuSubItemId: parseInt(defaultId),
      });
    }
  });

  // Get special instruction from textarea
  const instructionEl = document.getElementById("special-instruction-input");
  const specialInstruction = instructionEl ? instructionEl.value.trim() : "";

  // Calculate unit price (base + extras)
  let extrasTotal = 0;
  selectedSubItems.forEach((s) => {
    extrasTotal += (s.price || 0) * (s.quantity || 1);
  });

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

  // Add or update cart item
  if (
    typeof mockupState.editingCartIndex === "number" &&
    mockupState.editingCartIndex >= 0 &&
    mockupState.editingCartIndex < mockupState.cart.length
  ) {
    mockupState.cart[mockupState.editingCartIndex] = cartItem;
    mockupState.editingCartIndex = null;
    consolidateCartItems();
  } else {
    addOrMergeCartItem(cartItem);
  }

  // Reset customize state
  mockupState._customizeSubItems = {};
  mockupState._customizeModifyTypes = {};
  mockupState._specialInstruction = "";
  mockupState.itemQuantity = 1;

  persistAllState();
  navigateTo("cart");
};

window.toggleCartEditSection = function (section) {
  if (mockupState.cartEditSection === section) {
    mockupState.cartEditSection = null;
  } else {
    mockupState.cartEditSection = section;
  }
  navigateTo("cart");
};

window.editCartItemAndNavigate = function (index) {
  const cartItem = mockupState.cart[index];
  if (!cartItem) return;

  const item = {
    id: cartItem.menuItemId,
    name: cartItem.name,
    price: cartItem.basePrice,
    image: cartItem.image,
  };
  mockupState.selectedItem = item;
  mockupState.itemQuantity = cartItem.quantity || 1;
  
  // Need to set special instruction directly to DOM if customize page is active,
  // but it's easier to store it in state and have customize page read it on load.
  // Actually, customize page reads from mockupState.selectedItemDetail, but special instruction
  // is just a textarea. So we'll store it on mockupState and customize can load it.
  mockupState._specialInstruction = cartItem.specialInstruction || "";
  mockupState.lastMenuPage = currentPage;

  // Convert selectedSubItems back into _customizeSubItems and _customizeModifyTypes.
  // Each removed default gets its own slot; "sub" entries reattach to their default
  // via replacesMenuSubItemId (older cart items predating multi-substitute support
  // won't have that field — fall back to the first still-unpaired removed slot).
  const sels = {};
  const modSels = {};
  const subEntries = [];
  for (const s of cartItem.selectedSubItems || []) {
    if (s.modifyType === "no") {
      modSels[s.menuSubItemId] = { removed: true, sub: null };
    } else if (s.modifyType) {
      subEntries.push(s);
    } else {
      const groupId = s.itemGroupPriceId;
      if (!sels[groupId]) {
        sels[groupId] = { groupName: s.groupName || "", items: {} };
      }
      sels[groupId].items[s.menuSubItemId] = {
        menuSubItemId: s.menuSubItemId,
        itemTypeId: s.itemTypeId,
        itemGroupPriceId: s.itemGroupPriceId,
        quantity: s.quantity,
        name: s.name,
        price: s.price,
      };
    }
  }
  for (const s of subEntries) {
    const targetId =
      s.replacesMenuSubItemId != null
        ? s.replacesMenuSubItemId
        : Object.keys(modSels).find(
            (id) => modSels[id].removed && !modSels[id].sub,
          );
    if (targetId == null || !modSels[targetId]) continue;
    modSels[targetId].sub = {
      menuSubItemId: s.menuSubItemId,
      name: String(s.name || "").replace(/^Sub /, ""),
      price: s.price,
    };
  }

  mockupState._customizeSubItems = sels;
  mockupState._customizeModifyTypes = modSels;
  mockupState.selectedItemDetail = null;
  mockupState.editingCartIndex = index;
  persistAllState();

  if (item.id && mockupState.selectedLocationId && window.ApiService) {
    window.ApiService.getMenuItemDetail(mockupState.selectedLocationId, item.id)
      .then((detail) => {
        if (!detail || !detail.menuSubItemGroups || detail.menuSubItemGroups.length === 0) {
          detail = {
            menuItemId: item.id,
            name: item.name,
            price: item.price,
            menuSubItemGroups: [],
          };
        } else {
          detail.menuSubItemGroups.forEach((g) => {
            if (g.groupPrices) {
              g.groupPrices = g.groupPrices.filter(
                (p) => !p.menuSubItem || p.menuSubItem.isActive !== false,
              );
            }
          });
        }
        mockupState.selectedItemDetail = detail;
        persistAllState();
        navigateTo("customize");
      })
      .catch((err) => {
        persistAllState();
        navigateTo("customize");
      });
  } else {
    navigateTo("customize");
  }
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

  // A real order must be filed against a real, explicitly-chosen store — if
  // that's ever unset (stale session, odd navigation), stop and send the
  // customer to pick one rather than silently placing the order at whatever
  // store used to be the default.
  if (!mockupState.selectedLocationId) {
    alert("Please choose a location before placing your order.");
    navigateTo("locations");
    return;
  }

  // Show loading state early
  const btns = document.querySelectorAll("button");
  btns.forEach((b) => {
    if (b.textContent.includes("Purchase Order")) {
      b.textContent = "Placing Order...";
      b.disabled = true;
    }
  });

  // Ensure restaurantId is correct for the selected location to prevent OLO validation errors.
  // This also catches edge cases where the cart was restored from localStorage with items from a different location.
  try {
    const locId = mockupState.selectedLocationId;
    let foundRestId = null;

    const validationPromises = cart.map(async (item) => {
      if (!item.menuItemId) {
        throw new Error(`Item "${item.name}" is not available at this location. Please remove it and try again.`);
      }
      try {
        const detail = await window.ApiService.getMenuItemDetail(locId, item.menuItemId);
        if (!detail) {
          throw new Error();
        }
        
        // Extract restaurantId if not already set
        if (!foundRestId) {
          if (detail.menuSubItemGroups) {
            for (const g of detail.menuSubItemGroups) {
              for (const p of g.groupPrices || []) {
                const sub = p.menuSubItem || {};
                if (sub.restaurantId) {
                  foundRestId = sub.restaurantId;
                  break;
                }
              }
              if (foundRestId) break;
            }
          }
          if (!foundRestId && detail.menuItemModifyPrices) {
             for (const m of detail.menuItemModifyPrices) {
                if (m.menuSubItem && m.menuSubItem.restaurantId) {
                   foundRestId = m.menuSubItem.restaurantId;
                   break;
                }
             }
          }
        }
      } catch (err) {
        throw new Error(`Item "${item.name}" is not available at this location. Please remove it and try again.`);
      }
    });

    await Promise.all(validationPromises);

    if (foundRestId) {
      mockupState.selectedRestaurantId = foundRestId;
      persistAllState();
    }
  } catch (validationError) {
    console.error("Cart item validation failed:", validationError);
    alert(validationError.message || "Some items in your cart are not available at this location. Please clear your cart and try again.");
    
    // Reset buttons
    btns.forEach((b) => {
      if (b.textContent.includes("Placing")) {
        b.textContent = "Purchase Order";
        b.disabled = false;
      }
    });
    return;
  }

  // Calculate pricing
  const subtotal = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const taxRate = mockupState.locationTaxRate || 0.0925;
  const taxes = subtotal * taxRate;
  const bagFee = (mockupState.bagQuantity || 0) * (mockupState.bagMenuItem?.price ?? 0);
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
    locationId: mockupState.selectedLocationId,
    restaurantId: mockupState.selectedRestaurantId || mockupState.selectedLocationId,
    platformId: 1,
    tipAmount: parseFloat(tipAmount.toFixed(2)),
    pickUpTime:
      mockupState.orderTime === "Later"
        ? (resolveSelectedPickupDateTime() || new Date()).toISOString()
        : null,
    isCustomTime: mockupState.orderTime === "Later",
    tableNum: null,
    isGuestUser: false,
    guestFirstName: mockupState.userProfile?.firstName || "Guest",
    guestLastName: mockupState.userProfile?.lastName || "User",
    guestPhoneNumber: mockupState.userProfile?.phoneNumber || "0000000000",
    guestEmailAddress: mockupState.userProfile?.email || "guest@farebites.com",
    items: [
      ...cart.map((item) => ({
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
      // Bags are a real, orderable menu item on the backend (not a flat fee),
      // so charging for them means actually including that item in the order
      // — otherwise the total shown at checkout never matches what's charged.
      ...(mockupState.bagQuantity > 0 && mockupState.bagMenuItem
        ? [
            {
              menuItemId: mockupState.bagMenuItem.menuItemId,
              quantity: mockupState.bagQuantity,
              specialInstruction: null,
              subItems: [],
              subMenuChoices: [],
            },
          ]
        : []),
    ],
  };

  console.log("Placing order:", JSON.stringify(orderData, null, 2));

  try {
    const response = await window.ApiService.placeOrder(orderData);
    console.log("Order placed successfully:", response);

    // Store order response
    const newOrderObj = {
      ...(typeof response === "object" ? response : {}),
      orderId: typeof response === "number" || typeof response === "string" ? response : (response?.data?.orderId || response?.orderId || response?.id || ("FB-" + Math.floor(1000 + Math.random() * 9000))),
      locationId: mockupState.selectedLocationId,
      locationName: mockupState.selectedLocation,
      locationAddress: mockupState.selectedAddress,
      orderItems: cart.map((i) => ({ ...i })),
      subtotal: response?.data?.subTotal ?? response?.subTotal ?? subtotal,
      taxes: response?.data?.salesTax ?? response?.salesTax ?? taxes,
      tipAmount: response?.data?.tipApplied ?? response?.tipApplied ?? tipAmount,
      bagFee: response?.data?.bagFeeCharged ?? response?.bagFeeCharged ?? bagFee,
      convenienceFee: response?.data?.convenienceFeeCharged ?? response?.convenienceFeeCharged ?? convenienceFee,
      total: response?.data?.total ?? response?.total ?? finalTotal,
      placedAt: response?.data?.orderDate ?? response?.orderDate ?? new Date().toISOString(),
    };
    recordPlacedOrder(newOrderObj);

    // Clear cart & reset bag quantity
    mockupState.cart = [];
    mockupState.cartItemCount = 0;
    mockupState.bagQuantity = 0;
    mockupState.noBagsSelected = false;

    persistAllState();
    navigateTo("order-confirm", { replace: true });
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

        const retryOrderObj = {
          ...(typeof retryResponse === "object" ? retryResponse : {}),
          orderId: typeof retryResponse === "number" || typeof retryResponse === "string" ? retryResponse : (retryResponse?.data?.orderId || retryResponse?.orderId || retryResponse?.id || ("FB-" + Math.floor(1000 + Math.random() * 9000))),
          locationId: mockupState.selectedLocationId,
          locationName: mockupState.selectedLocation,
          locationAddress: mockupState.selectedAddress,
          orderItems: cart.map((i) => ({ ...i })),
          subtotal: retryResponse?.data?.subTotal ?? retryResponse?.subTotal ?? subtotal,
          taxes: retryResponse?.data?.salesTax ?? retryResponse?.salesTax ?? taxes,
          tipAmount: retryResponse?.data?.tipApplied ?? retryResponse?.tipApplied ?? tipAmount,
          bagFee: retryResponse?.data?.bagFeeCharged ?? retryResponse?.bagFeeCharged ?? bagFee,
          convenienceFee: retryResponse?.data?.convenienceFeeCharged ?? retryResponse?.convenienceFeeCharged ?? convenienceFee,
          total: retryResponse?.data?.total ?? retryResponse?.total ?? finalTotal,
          placedAt: retryResponse?.data?.orderDate ?? retryResponse?.orderDate ?? new Date().toISOString(),
        };
        recordPlacedOrder(retryOrderObj);

        mockupState.cart = [];
        mockupState.cartItemCount = 0;
        persistAllState();
        navigateTo("order-confirm", { replace: true });
        return;
      } catch (retryError) {
        console.error("Retry failed:", retryError);
        const retryErrorMsg =
          retryError?.data?.message ||
          retryError?.data?.title ||
          "Failed to place order. Please try again.";
        alert(retryErrorMsg);
      }
    } else if (errorMsg.toLowerCase().includes("custom pickup time") || errorMsg.toLowerCase().includes("pickup time is not available")) {
      console.log("Custom pickup time not available for this location according to backend API. Retrying as ASAP order...");
      mockupState.orderTime = "ASAP";
      orderData.isCustomTime = false;
      orderData.pickUpTime = null;

      try {
        const retryResponse = await window.ApiService.placeOrder(orderData);
        console.log("Order placed successfully on ASAP retry:", retryResponse);

        const asapOrderObj = {
          ...(typeof retryResponse === "object" ? retryResponse : {}),
          orderId: typeof retryResponse === "number" || typeof retryResponse === "string" ? retryResponse : (retryResponse?.data?.orderId || retryResponse?.orderId || retryResponse?.id || ("FB-" + Math.floor(1000 + Math.random() * 9000))),
          orderItems: cart.map((i) => ({ ...i })),
          subtotal: retryResponse?.data?.subTotal ?? retryResponse?.subTotal ?? subtotal,
          taxes: retryResponse?.data?.salesTax ?? retryResponse?.salesTax ?? taxes,
          tipAmount: retryResponse?.data?.tipApplied ?? retryResponse?.tipApplied ?? tipAmount,
          bagFee: retryResponse?.data?.bagFeeCharged ?? retryResponse?.bagFeeCharged ?? bagFee,
          convenienceFee: retryResponse?.data?.convenienceFeeCharged ?? retryResponse?.convenienceFeeCharged ?? convenienceFee,
          total: retryResponse?.data?.total ?? retryResponse?.total ?? finalTotal,
          placedAt: retryResponse?.data?.orderDate ?? retryResponse?.orderDate ?? new Date().toISOString(),
        };
        recordPlacedOrder(asapOrderObj);

        mockupState.cart = [];
        mockupState.cartItemCount = 0;
        persistAllState();
        navigateTo("order-confirm", { replace: true });
        return;
      } catch (retryErr) {
        console.error("ASAP retry also failed:", retryErr);
        const retryMsg = retryErr?.data?.message || retryErr?.data?.title || errorMsg;
        alert(retryMsg);
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

// --- Registration form validation ------------------------------------------
// These rules mirror what POST /api/Account/register actually enforces:
// password is 6-100 characters with an uppercase, a lowercase and a number;
// email, first name, last name and phone are required. Street/City/State/Zip
// are optional server-side, so they are not marked required here either.
const REG_PHONE_PATTERN = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const REG_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Maps the field names the API reports back onto our input ids.
const REG_SERVER_FIELDS = {
  email: "reg-email",
  password: "reg-password",
  confirmpassword: "reg-confirm-password",
  firstname: "reg-first-name",
  lastname: "reg-last-name",
  phonenumber: "reg-phone",
  street: "reg-street",
  city: "reg-city",
  state: "reg-state",
  zipcode: "reg-zip",
};

const REG_REQUIRED_FIELDS = [
  "reg-email",
  "reg-password",
  "reg-confirm-password",
  "reg-first-name",
  "reg-last-name",
  "reg-phone",
];

function setRegFieldError(id, message) {
  const input = document.getElementById(id);
  const errorEl = document.getElementById(id + "-error");
  if (input) {
    input.classList.add("border-red-400");
    input.classList.remove("border-transparent");
    input.setAttribute("aria-invalid", "true");
  }
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
  }
}

function clearRegFieldError(id) {
  const input = document.getElementById(id);
  const errorEl = document.getElementById(id + "-error");
  if (input) {
    input.classList.remove("border-red-400");
    input.classList.add("border-transparent");
    input.removeAttribute("aria-invalid");
  }
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }
}

function clearAllRegErrors() {
  Object.values(REG_SERVER_FIELDS).forEach(clearRegFieldError);
  const summary = document.getElementById("reg-error");
  if (summary) {
    summary.textContent = "";
    summary.classList.add("hidden");
  }
}

function showRegSummary(message) {
  const summary = document.getElementById("reg-error");
  if (summary) {
    summary.textContent = message;
    summary.classList.remove("hidden");
  }
}

function getRegPasswordChecks(password) {
  return {
    length: password.length >= 6 && password.length <= 100,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
}

// Live requirements checklist + strength meter, shown as soon as they type.
function handleRegPasswordInput() {
  clearRegFieldError("reg-password");

  const password = document.getElementById("reg-password")?.value || "";
  const panel = document.getElementById("reg-password-requirements");
  if (!panel) return;

  if (!password) {
    panel.classList.add("hidden");
    return;
  }
  panel.classList.remove("hidden");

  const checks = getRegPasswordChecks(password);
  const rows = {
    "reg-pw-length": checks.length,
    "reg-pw-upper": checks.upper,
    "reg-pw-lower": checks.lower,
    "reg-pw-number": checks.number,
    "reg-pw-special": checks.special,
  };

  Object.entries(rows).forEach(([rowId, passed]) => {
    const row = document.getElementById(rowId);
    if (!row) return;
    const icon = row.querySelector("i");
    row.classList.toggle("text-green-600", passed);
    row.classList.toggle("text-gray-400", !passed);
    if (icon) {
      icon.classList.toggle("fa-circle-check", passed);
      icon.classList.toggle("fa-circle-xmark", !passed);
    }
  });

  const score = Object.values(checks).filter(Boolean).length;
  const levels = [
    { width: "20%", color: "bg-red-500", text: "Very Weak", label: "text-red-500" },
    { width: "40%", color: "bg-orange-400", text: "Weak", label: "text-orange-500" },
    { width: "60%", color: "bg-amber-400", text: "Fair", label: "text-amber-500" },
    { width: "80%", color: "bg-sky-400", text: "Strong", label: "text-sky-500" },
    { width: "100%", color: "bg-green-500", text: "Very Strong", label: "text-green-600" },
  ];
  const level = levels[Math.max(0, score - 1)];

  const bar = document.getElementById("reg-password-bar");
  if (bar) {
    bar.className =
      "h-full rounded-full transition-all duration-300 " + level.color;
    bar.style.width = level.width;
  }
  const strengthLabel = document.getElementById("reg-password-strength");
  if (strengthLabel) {
    strengthLabel.className =
      "text-[10px] font-black uppercase tracking-widest " + level.label;
    strengthLabel.textContent = level.text;
  }

  // If they already typed a confirmation, keep the match error honest.
  const confirm = document.getElementById("reg-confirm-password")?.value;
  if (confirm) validateRegField("reg-confirm-password");
}

// Validates one field and paints its inline message. Returns true if valid.
function validateRegField(id) {
  const value = (document.getElementById(id)?.value || "").trim();
  let message = "";

  if (id === "reg-email") {
    if (!value) message = "Please enter your email address.";
    else if (!REG_EMAIL_PATTERN.test(value))
      message = "Please enter a valid email address, like name@example.com.";
    else if (/['"]/.test(value))
      message = "Your email address can't contain quotes or apostrophes.";
  } else if (id === "reg-password") {
    const password = document.getElementById("reg-password")?.value || "";
    if (!password) {
      message = "Please create a password.";
    } else if (password.length > 100) {
      message = "Your password can't be longer than 100 characters.";
    } else {
      const checks = getRegPasswordChecks(password);
      const missing = [];
      if (!checks.length) missing.push("6 characters");
      if (!checks.upper) missing.push("one uppercase letter");
      if (!checks.lower) missing.push("one lowercase letter");
      if (!checks.number) missing.push("one number");
      if (missing.length) {
        const list =
          missing.length === 1
            ? missing[0]
            : missing.slice(0, -1).join(", ") + " and " + missing[missing.length - 1];
        message = "Your password still needs at least " + list + ".";
      }
    }
  } else if (id === "reg-confirm-password") {
    const password = document.getElementById("reg-password")?.value || "";
    const confirm = document.getElementById("reg-confirm-password")?.value || "";
    if (!confirm) message = "Please confirm your password.";
    else if (password !== confirm) message = "These passwords don't match.";
  } else if (id === "reg-first-name") {
    if (!value) message = "Please enter your first name.";
  } else if (id === "reg-last-name") {
    if (!value) message = "Please enter your last name.";
  } else if (id === "reg-phone") {
    if (!value) message = "Please enter your phone number.";
    else if (!REG_PHONE_PATTERN.test(value))
      message = "Please enter a valid 10-digit phone number, like (555) 000-0000.";
  }

  if (message) {
    setRegFieldError(id, message);
    return false;
  }
  clearRegFieldError(id);
  return true;
}

// Validates everything and moves focus to the first problem.
function validateRegistrationForm() {
  const invalid = REG_REQUIRED_FIELDS.filter((id) => !validateRegField(id));
  if (invalid.length) {
    const first = document.getElementById(invalid[0]);
    if (first) {
      first.focus();
      first.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return false;
  }
  return true;
}

// Rewrites the API's raw validation text into something a customer can act on.
function friendlyRegMessage(raw) {
  const text = String(raw || "");
  const lower = text.toLowerCase();

  if (lower.includes("email already registered"))
    return "This email is already registered. Please sign in instead.";
  if (lower.includes("can only contain letters or digits"))
    return "Please use an email address without special characters like apostrophes or spaces.";
  if (lower.includes("not a valid e-mail"))
    return "Please enter a valid email address, like name@example.com.";
  if (lower.includes("minimum length of '6'") || lower.includes("at least 6 characters"))
    return "Your password must be at least 6 characters.";

  // ASP.NET Identity returns password rules as one comma-joined sentence.
  if (lower.includes("passwords must have")) {
    const needs = [];
    if (lower.includes("one digit")) needs.push("one number");
    if (lower.includes("one uppercase")) needs.push("one uppercase letter");
    if (lower.includes("one lowercase")) needs.push("one lowercase letter");
    if (lower.includes("one non alphanumeric")) needs.push("one special character");
    if (needs.length) {
      const list =
        needs.length === 1
          ? needs[0]
          : needs.slice(0, -1).join(", ") + " and " + needs[needs.length - 1];
      return "Your password needs at least " + list + ".";
    }
  }

  if (lower.includes("field is required")) {
    const field = text.split(" ")[1];
    return "Please enter your " + (field ? field.replace(/([A-Z])/g, " $1").trim().toLowerCase() : "details") + ".";
  }

  return text;
}

// The API reports failures two different ways, and both need to reach the user:
//   { success: false, message: "..." }                  <- business rules
//   { title, errors: { Password: ["..."] } }            <- model validation
// Returns a summary string, after attaching anything field-specific inline.
function applyRegServerErrors(err) {
  const data = err?.data;

  // Model validation: route each message to the field it belongs to.
  if (data?.errors && typeof data.errors === "object") {
    let firstInvalidId = null;
    let firstMessage = "";
    Object.entries(data.errors).forEach(([field, messages]) => {
      const message = friendlyRegMessage(
        Array.isArray(messages) ? messages[0] : messages,
      );
      const id = REG_SERVER_FIELDS[field.toLowerCase().replace(/[^a-z]/g, "")];
      if (id && document.getElementById(id)) {
        setRegFieldError(id, message);
        if (!firstInvalidId) {
          firstInvalidId = id;
          firstMessage = message;
        }
      } else if (!firstMessage) {
        firstMessage = message;
      }
    });
    if (firstInvalidId) {
      const el = document.getElementById(firstInvalidId);
      el?.focus();
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return "Please fix the highlighted field and try again.";
    }
    return firstMessage || "Please check your details and try again.";
  }

  // Business rules: one message, which we can usually pin to a field.
  const raw = data?.message || data?.title || "";
  if (raw) {
    const message = friendlyRegMessage(raw);
    const lower = String(raw).toLowerCase();
    let id = null;
    if (lower.includes("email") || lower.includes("username")) id = "reg-email";
    else if (lower.includes("password")) id = "reg-password";
    if (id && document.getElementById(id)) {
      setRegFieldError(id, message);
      const el = document.getElementById(id);
      el?.focus();
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return message;
  }

  // No body to read: fall back to what the status code tells us.
  const status = err?.status;
  if (!status)
    return "We couldn't reach the server. Check your connection and try again.";
  if (status >= 500)
    return "Something went wrong on our end. Please try again in a moment.";
  if (status === 429)
    return "Too many attempts. Please wait a moment and try again.";
  return "We couldn't create your account (error " + status + "). Please try again.";
}

async function handleRegistration() {
  clearAllRegErrors();

  // Catch everything we can before bothering the server.
  if (!validateRegistrationForm()) {
    showRegSummary("Please fix the highlighted fields above.");
    return;
  }

  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const firstName = document.getElementById("reg-first-name").value.trim();
  const lastName = document.getElementById("reg-last-name").value.trim();
  const phoneNumber = document.getElementById("reg-phone").value.trim();

  const street = document.getElementById("reg-street")?.value.trim();
  const city = document.getElementById("reg-city")?.value.trim();
  const state = document.getElementById("reg-state")?.value.trim();
  const zipCode = document.getElementById("reg-zip")?.value.trim();

  const submitBtn = document.getElementById("reg-submit");
  const originalLabel = submitBtn?.textContent;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Creating Account...";
  }

  try {
    if (!window.ApiService) {
      throw new Error("API Service not loaded");
    }

    // Fix for testing via file:/// URLs which cause SendGrid to drop the email due to invalid link format
    let origin = window.location.origin;
    if (origin === "null" || origin.includes("file://")) {
      origin = "http://localhost:8000";
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      street,
      city,
      state,
      zipCode,
      websiteUrl: "support@farebites.com",
      callbackUrl: origin + "/index.html",
      websiteShortName: "Farebites",
    };

    await window.ApiService.register(data);

    // On success, redirect to success page
    navigateTo("registration-success");
  } catch (err) {
    console.error("Registration Error details:", err);
    showRegSummary(applyRegServerErrors(err));
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel || "Create Account";
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

    migrateGuestCartToUser(email);
    loadCartFromStorage();
    if (mockupState.isLoggedIn) {
      // The locations list requires login (see #21) — if a guest hit that
      // gate before signing in, mockupState.locationsAuthRequired is still
      // stuck true from that failed attempt. Re-fetch now that we have a
      // real session, so the locations page shows real stores immediately
      // instead of still telling an already-signed-in customer to sign in.
      fetchLocations();
      try {
        const orders = await window.ApiService.getOrders(1, 20);
        console.log("Successfully fetched orders on login:", orders);
        mockupState.apiOrders = orders;
        preloadPastOrdersMenuItemDetails(orders);

        // Check if the user has any past orders
        const apiList = orders ? (Array.isArray(orders) ? orders : orders.items || orders.data || []) : [];
        const userList = mockupState.userOrders || [];
        const hasOrders = apiList.length > 0 || userList.length > 0 || !!mockupState.lastOrder;

        // Auto-open reorder modal ONLY if they have orders and the cart is empty
        if (hasOrders && (!mockupState.cart || mockupState.cart.length === 0)) {
          mockupState.modalOpen = "reorder";
        }
      } catch (ordersError) {
        console.error("Failed to fetch orders on login:", ordersError);
      }
    }
    persistAllState();
    if (typeof resetInactivityTimer === "function") resetInactivityTimer();
    const signInReason = new URLSearchParams(window.location.search).get("reason");
    if (signInReason === "reorder") {
      navigateTo("menu", { menuTab: "history" });
    } else if (signInReason === "checkout") {
      navigateTo("checkout");
    } else {
      navigateTo("restaurant-home");
    }
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
    
    let errorMsg = "Failed to send reset link.";
    
    if (err.data) {
      if (err.data.errors) {
         errorMsg = Object.values(err.data.errors).map(e => e.join(", ")).join(" | ");
      } else if (err.data.message) {
         errorMsg = err.data.message;
      } else if (err.data.title) {
         errorMsg = err.data.title;
      } else if (typeof err.data === 'string') {
         errorMsg = err.data;
      } else {
         errorMsg = JSON.stringify(err.data);
      }
    } else if (err.message) {
      errorMsg = err.message;
    }
    
    errorEl.textContent = errorMsg;
    errorEl.style.opacity = "1";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Reset Link";
  }
}

async function handleResetPassword() {
  const passwordEl = document.getElementById("reset-password-input");
  const confirmEl = document.getElementById("reset-confirm-input");
  const errorEl = document.getElementById("reset-error");
  const successEl = document.getElementById("reset-success");
  const submitBtn = document.getElementById("reset-submit-btn");

  if (!passwordEl || !confirmEl || !errorEl || !successEl || !submitBtn) return;

  const password = passwordEl.value;
  const confirmPassword = confirmEl.value;

  errorEl.style.opacity = "0";
  errorEl.textContent = "";
  successEl.classList.add("hidden");
  successEl.textContent = "";

  if (!password || !confirmPassword) {
    errorEl.textContent = "Please fill out all fields.";
    errorEl.style.opacity = "1";
    return;
  }

  if (password !== confirmPassword) {
    errorEl.textContent = "Passwords do not match.";
    errorEl.style.opacity = "1";
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');
  const code = urlParams.get('code');

  if (!email || !code) {
    errorEl.textContent = "Invalid reset link. Missing email or code.";
    errorEl.style.opacity = "1";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Saving...";

  try {
    if (!window.ApiService) throw new Error("API Service not loaded");
    
    await window.ApiService.resetPassword(email, code, password, confirmPassword);
    
    successEl.textContent = "Password successfully reset!";
    successEl.classList.remove("hidden");
    
    setTimeout(() => {
        navigateTo('sign-in');
    }, 2000);
  } catch (err) {
    console.error("Reset password error:", err);
    let errorMsg = "Failed to reset password.";
    
    if (err.data) {
      if (err.data.errors) {
         errorMsg = Object.values(err.data.errors).map(e => e.join(", ")).join(" | ");
      } else if (err.data.message) {
         errorMsg = err.data.message;
      } else if (err.data.title) {
         errorMsg = err.data.title;
      } else if (typeof err.data === 'string') {
         errorMsg = err.data;
      } else {
         errorMsg = JSON.stringify(err.data);
      }
    } else if (err.message) {
      errorMsg = err.message;
    }
    
    errorEl.textContent = errorMsg;
    errorEl.style.opacity = "1";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Save New Password";
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

    await window.ApiService.changePassword(currentPwd, newPwd, confirmPwd);

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
    const logEl = document.getElementById("pwd-error-log");
    if (logEl) {
      logEl.style.display = "block";
      try {
        const errorDetails = {
          message: err.message,
          data: err.data,
          status: err.status || (err.response && err.response.status),
          stack: err.stack
        };
        logEl.textContent = "Error Details:\n" + JSON.stringify(errorDetails, null, 2);
      } catch (e) {
        logEl.textContent = "Error Details:\n" + String(err);
      }
    }
  }
}

async function handleDeleteAccount() {
  const val = document.getElementById('delete-confirm-input')?.value.toLowerCase();
  const inputEl = document.getElementById('delete-confirm-input');
  const btnEl = document.getElementById('delete-account-btn');

  if (val !== 'delete account') {
    if (inputEl) {
      inputEl.classList.add('border-red-500');
      setTimeout(() => inputEl.classList.remove('border-red-500'), 1000);
    }
    return;
  }

  const customerId = mockupState.userProfile?.customerId || mockupState.userProfile?.id;
  if (!customerId) {
    alert("Error: Missing customer profile ID.");
    return;
  }

  if (btnEl) {
    btnEl.disabled = true;
    btnEl.textContent = "DELETING...";
  }

  try {
    if (!window.ApiService) throw new Error("API Service not loaded");
    await window.ApiService.deleteAccount(customerId);

    // Clear local session data directly without navigating to sign-in yet
    mockupState.isLoggedIn = false;
    mockupState.userName = "Guest";
    mockupState.userEmail = "";
    mockupState.userProfile = {};
    mockupState.cart = [];
    mockupState.cartItemCount = 0;
    mockupState.bagQuantity = 0;
    mockupState.noBagsSelected = false;
    
    sessionStorage.setItem(STORAGE_KEYS.state, JSON.stringify(mockupState));
    if (window.ApiService) {
      window.ApiService.setToken(null);
    }

    mockupState.modalOpen = null;
    persistAllState();
    navigateTo("account-deleted");

  } catch (err) {
    console.error("Account deletion failed:", err);
    alert(err?.data?.message || err.message || "Failed to delete account. Please try again.");
    if (btnEl) {
      btnEl.disabled = false;
      btnEl.textContent = "DELETE PERMANENTLY";
    }
  }
}

async function signOutUser(options = {}) {
  // notifyServer: skip the /Account/logout call when the token is already
  // known-dead (e.g. a 401 told us it expired) — nothing to invalidate.
  // reason: appended as sign-in.html?reason=<reason> so the sign-in page can
  // show a friendly explanation instead of silently dropping the user there.
  const { notifyServer = true, reason = null } = options;

  // Save current cart before logging out
  if (mockupState.isLoggedIn) {
    syncCartToStorage();
  }

  if (notifyServer && window.ApiService) {
    await window.ApiService.logout();
  } else if (window.ApiService) {
    window.ApiService.setToken(null);
  }

  // Capture email and last order BEFORE clearing state
  const logoutEmail = mockupState.userEmail || mockupState.userProfile?.email || "";
  const logoutLastOrder = mockupState.lastOrder;

  // Clear user state and screen cart
  mockupState.isLoggedIn = false;
  mockupState.userName = "Guest";
  mockupState.userEmail = "";
  mockupState.userProfile = {};
  
  // Persist lastOrder to localStorage keyed by email so it survives logout/login
  if (logoutEmail && logoutLastOrder) {
    try {
      localStorage.setItem(
        `farebites_last_order_${logoutEmail.toLowerCase()}`,
        JSON.stringify(logoutLastOrder)
      );
    } catch (e) { /* ignore storage errors */ }
  }

  // Clear sensitive order data
  mockupState.apiOrders = [];
  mockupState.userOrders = [];
  mockupState.lastOrder = null;
  mockupState.selectedItemDetail = null;
  mockupState.reorderDetailsCache = {};

  // Clear cart
  mockupState.cart = [];
  mockupState.cartItemCount = 0;
  mockupState.bagQuantity = 0;
  mockupState.noBagsSelected = false;

  // Remove any locally stored profile addresses
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("farebites_profile_address_")) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach((key) => localStorage.removeItem(key));

  // Persist to session and local storage manually to avoid syncCartToStorage overwriting with empty
  const stateJson = JSON.stringify(mockupState);
  sessionStorage.setItem(STORAGE_KEYS.state, stateJson);
  localStorage.setItem(STORAGE_KEYS.state, stateJson);

  if (reason) {
    window.isNavigatingAway = true;
    window.location.href = `${PAGE_FILE_MAP["sign-in"] || "sign-in.html"}?reason=${reason}`;
  } else {
    navigateTo("sign-in");
  }
}

window.toggleLocationFavorite = function (name, event) {
  if (event) {
    event.stopPropagation();
  }

  let isFavNow = false;

  // Find in apiLocations and toggle
  if (mockupState.apiLocations && mockupState.apiLocations.length > 0) {
    const apiLoc = mockupState.apiLocations.find((l) => l.name === name);
    if (apiLoc) {
      apiLoc.fav = !apiLoc.fav;
      isFavNow = apiLoc.fav;
    }
  }

  // Clean up label if unfavorited
  if (!isFavNow && mockupState.locationLabels) {
    delete mockupState.locationLabels[name];
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

window.isMenuItemFavorite = function (item) {
  if (!item || !mockupState.favorites || !Array.isArray(mockupState.favorites)) return false;
  return mockupState.favorites.some(
    (f) => (item.id && f.id === item.id) || (f.name && item.name && f.name.toLowerCase() === item.name.toLowerCase())
  );
};

window.toggleMenuFavorite = async function (item, event) {
  if (event) {
    event.stopPropagation();
  }

  if (!mockupState.favorites) {
    mockupState.favorites = [];
  }

  const favIndex = mockupState.favorites.findIndex(
    (f) => (item.id && f.id === item.id) || (f.name && item.name && f.name.toLowerCase() === item.name.toLowerCase())
  );
  const isFavNow = favIndex === -1;

  if (isFavNow) {
    const newFav = {
      id: item.id || Date.now(),
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category || item.categoryName || "",
    };
    mockupState.favorites.push(newFav);

    if (window.ApiService && typeof ApiService.getToken === "function" && ApiService.getToken()) {
      try {
        const res = await ApiService.addFavorite(item.id || 0, mockupState.selectedLocationId || null);
        if (res && (res.id || res.userFavoriteId)) {
          newFav.userFavoriteId = res.id || res.userFavoriteId;
        }
      } catch (err) {
        console.warn("API error adding favorite:", err);
      }
    }
  } else {
    const existingFav = mockupState.favorites[favIndex];
    const userFavId = existingFav ? existingFav.userFavoriteId || existingFav.id : item.id;
    mockupState.favorites.splice(favIndex, 1);

    if (window.ApiService && typeof ApiService.getToken === "function" && ApiService.getToken()) {
      try {
        if (userFavId) {
          await ApiService.deleteFavorite(userFavId);
        }
      } catch (err) {
        console.warn("API error deleting favorite:", err);
      }
    }
  }

  localStorage.setItem("farebites_menu_favorites", JSON.stringify(mockupState.favorites));

  const heartBtn = event ? event.currentTarget : null;
  if (heartBtn) {
    const iconEl = heartBtn.querySelector("i");
    if (iconEl) {
      if (isFavNow) {
        iconEl.className = "fa-solid fa-heart text-violet-600 text-lg";
      } else {
        iconEl.className = "fa-regular fa-heart text-gray-400 hover:text-violet-600 text-lg";
      }
    }
    heartBtn.classList.add("animate-heart-burst");
    setTimeout(() => {
      heartBtn.classList.remove("animate-heart-burst");
      updateMockupState("lastAction", "menu_favorite_" + item.name);
    }, 600);
  } else {
    updateMockupState("lastAction", "menu_favorite_" + item.name);
  }
};

window.removeFavorite = function (id) {
  const item = (mockupState.favorites || []).find((f) => f.id === id);
  if (item) {
    window.toggleMenuFavorite(item);
  } else {
    mockupState.favorites = (mockupState.favorites || []).filter((f) => f.id !== id);
    localStorage.setItem("farebites_menu_favorites", JSON.stringify(mockupState.favorites));
    renderPage();
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
      mockupState.selectedLocationId = Number(order.locationId);
      const foundLoc = getSelectedLocationInfo(Number(order.locationId));
      if (foundLoc) {
        mockupState.selectedLocation = foundLoc.name;
        mockupState.selectedAddress = foundLoc.address;
        mockupState.selectedRestaurantId = foundLoc.locationId;
      }
    }
    persistAllState();
    navigateTo("order-confirm", { replace: true });
  }
};

function recordPlacedOrder(orderObj) {
  // Ensure location info is always stamped on the order, from real data only
  if (!orderObj.locationId) {
    orderObj.locationId = mockupState.selectedLocationId;
  }
  if (!orderObj.locationName || !orderObj.locationAddress) {
    const loc = getSelectedLocationInfo(orderObj.locationId);
    if (!orderObj.locationName) {
      orderObj.locationName = loc?.name || mockupState.selectedLocation;
    }
    if (!orderObj.locationAddress) {
      orderObj.locationAddress = loc?.address || mockupState.selectedAddress;
    }
  }
  mockupState.lastOrder = orderObj;

  // Keep the selected store sticky after an order, matching how Starbucks/
  // Chipotle/Dunkin' etc. default straight back to your last-used store
  // instead of re-prompting every time. Only the per-order timing resets.
  mockupState.orderTime = "ASAP";

  if (!mockupState.userOrders) {
    mockupState.userOrders = [];
  }
  const idStr = String(orderObj.orderId || "");
  const existingIdx = mockupState.userOrders.findIndex(
    (o) => String(o.orderId || "") === idStr
  );
  if (existingIdx !== -1) {
    mockupState.userOrders.splice(existingIdx, 1);
  }
  mockupState.userOrders.unshift(orderObj);
}
window.recordPlacedOrder = recordPlacedOrder;

// "Order Again" / "Back to Menu" on the confirmation screen deliberately mean
// "start another order at the same store, right now" — restore the location
// recordPlacedOrder() just cleared before navigating to the menu.
function resumeLastOrderLocation() {
  const order = mockupState.lastOrder;
  if (order) {
    mockupState.selectedLocationId = order.locationId;
    mockupState.selectedLocation = order.locationName;
    mockupState.selectedAddress = order.locationAddress;
    mockupState.selectedRestaurantId = order.locationId;
  }
}
window.resumeLastOrderLocation = resumeLastOrderLocation;

function getAllUserOrders() {
  const userOrders = mockupState.userOrders || [];
  const apiOrdersList = mockupState.apiOrders
    ? Array.isArray(mockupState.apiOrders)
      ? mockupState.apiOrders
      : mockupState.apiOrders.items || mockupState.apiOrders.data || []
    : [];

  let allOrders = [...userOrders];

  if (mockupState.lastOrder) {
    const lastOrderId = String(mockupState.lastOrder.orderId || "");
    const exists = allOrders.some((o) => String(o.orderId || "") === lastOrderId);
    if (!exists) {
      allOrders.unshift(mockupState.lastOrder);
    }
  }

  apiOrdersList.forEach((apiOrder) => {
    const apiId = String(apiOrder.orderId || "");
    const exists = allOrders.some((o) => String(o.orderId || "") === apiId);
    if (!exists) {
      allOrders.push(apiOrder);
    }
  });

  return allOrders;
}

function tryOpenReorderModal() {
  const allOrders = getAllUserOrders();
  if (allOrders.length > 0) {
    mockupState.modalOpen = "reorder";
    renderPage();
  } else {
    console.log("No orders found, not displaying reorder modal.");
  }
}
window.tryOpenReorderModal = tryOpenReorderModal;

function tryGoToReorder() {
  if (mockupState.isLoggedIn) {
    navigateTo("menu", { menuTab: "history" });
  } else {
    window.location.href = "sign-in.html?reason=reorder";
  }
}
window.tryGoToReorder = tryGoToReorder;

// Tracks menu-item IDs already fetched (or in flight) this session, success or
// failure, so a permanently-404ing item doesn't get re-requested on every
// render of the Reorder tab (each render calls this function).
const _preloadedMenuItemIds = new Set();

function preloadPastOrdersMenuItemDetails(orders) {
  if (!orders) return;
  const list = Array.isArray(orders) ? orders : orders.items || orders.data || [];

  if (!mockupState.reorderDetailsCache) {
    mockupState.reorderDetailsCache = {};
  }

  list.forEach((order) => {
    // Use the store this specific order was actually placed at, not
    // whatever store happens to be currently selected — different past
    // orders can be from different real stores.
    const locId = order.locationId || mockupState.selectedLocationId;
    if (!locId) return;
    const items = order.orderMenuItems || order.items || order.orderItems || [];
    items.forEach(async (item) => {
      const rawId = item.menuItemId || item.MenuItemId || item.id || item.Id;
      if (
        !rawId ||
        mockupState.reorderDetailsCache[rawId] ||
        _preloadedMenuItemIds.has(rawId)
      ) {
        return;
      }
      _preloadedMenuItemIds.add(rawId);
      try {
        const detail = await window.ApiService.getMenuItemDetail(locId, rawId);
        mockupState.reorderDetailsCache[rawId] = detail;
        persistAllState();
        if (
          mockupState.modalOpen === "reorder" ||
          mockupState.modalOpen === "order-details-view" ||
          (currentPage === "menu" && mockupState.menuTab === "history")
        ) {
          renderPage();
        }
      } catch (e) {
        console.error("Error preloading item detail for cache:", e);
      }
    });
  });
}

function findSubItemNameInDetail(subId, itemDetail) {
  if (!subId || !itemDetail) return "";
  const subStr = String(subId);

  const directList = itemDetail.menuSubItems || itemDetail.MenuSubItems || [];
  if (Array.isArray(directList)) {
    const found = directList.find((s) => String(s.menuSubItemId || s.MenuSubItemId || s.id || s.Id || "") === subStr);
    if (found && (found.name || found.Name)) {
      return (found.name || found.Name).trim();
    }
  }

  const groups = itemDetail.menuSubItemGroups || itemDetail.MenuSubItemGroups || [];
  if (Array.isArray(groups)) {
    for (const g of groups) {
      const groupSubs = g.menuSubItems || g.MenuSubItems || [];
      if (Array.isArray(groupSubs)) {
        const found = groupSubs.find((s) => String(s.menuSubItemId || s.MenuSubItemId || s.id || s.Id || "") === subStr);
        if (found && (found.name || found.Name)) {
          return (found.name || found.Name).trim();
        }
      }

      const groupPrices = g.groupPrices || g.GroupPrices || [];
      if (Array.isArray(groupPrices)) {
        for (const gp of groupPrices) {
          const subObj = gp.menuSubItem || gp.MenuSubItem;
          if (subObj) {
            const sId = String(subObj.menuSubItemId || subObj.MenuSubItemId || subObj.id || subObj.Id || "");
            if (sId === subStr && (subObj.name || subObj.Name)) {
              return (subObj.name || subObj.Name).trim();
            }
          }
        }
      }
    }
  }

  const choices = itemDetail.subMenuChoices || itemDetail.SubMenuChoices || [];
  if (Array.isArray(choices)) {
    for (const c of choices) {
      const sId = String(c.menuSubItemId || c.MenuSubItemId || c.id || c.Id || "");
      if (sId === subStr && (c.name || c.Name || c.title || c.Title)) {
        return (c.name || c.Name || c.title || c.Title).trim();
      }
    }
  }

  return "";
}

function getItemNormalizedSubItems(item, itemDetail) {
  if (!item) return [];

  // Fallback to cache if itemDetail is not passed directly
  const rawId = item.menuItemId || item.MenuItemId || item.id || item.Id;
  const resolvedDetail = itemDetail || (mockupState.reorderDetailsCache && rawId ? mockupState.reorderDetailsCache[rawId] : null);

  const candidateArrays = [
    item.orderMenuSubItems,
    item.OrderMenuSubItems,
    item.selectedSubItems,
    item.SelectedSubItems,
    item.subItems,
    item.SubItems,
    item.customizations,
    item.Customizations,
    item.subMenuChoices,
    item.SubMenuChoices,
    item.options,
    item.Options,
    item.menuSubItems,
    item.MenuSubItems,
    item.orderSubItems,
    item.OrderSubItems,
  ];

  let rawSubItems = [];
  for (const arr of candidateArrays) {
    if (Array.isArray(arr) && arr.length > 0) {
      rawSubItems = arr;
      break;
    }
  }

  const normalized = [];
  rawSubItems.forEach((sub) => {
    let subName = "";
    let subPrice = 0;
    let subQty = 1;
    let subId = 0;

    if (typeof sub === "string") {
      subName = sub.trim();
    } else if (typeof sub === "object" && sub !== null) {
      const menuSubObj = sub.menuSubItem || sub.MenuSubItem;
      subName = (
        sub.name ||
        sub.Name ||
        sub.menuSubItemName ||
        sub.MenuSubItemName ||
        sub.title ||
        sub.Title ||
        sub.choiceName ||
        sub.ChoiceName ||
        sub.label ||
        sub.Label ||
        sub.description ||
        sub.Description ||
        (menuSubObj
          ? menuSubObj.name ||
            menuSubObj.Name ||
            menuSubObj.menuSubItemName ||
            menuSubObj.MenuSubItemName ||
            menuSubObj.title ||
            menuSubObj.Title
          : "") ||
        ""
      ).trim();

      const rawPrice =
        typeof sub.price === "number"
          ? sub.price
          : typeof sub.Price === "number"
          ? sub.Price
          : typeof sub.unitPrice === "number"
          ? sub.unitPrice
          : typeof sub.UnitPrice === "number"
          ? sub.UnitPrice
          : typeof sub.amount === "number"
          ? sub.amount
          : typeof sub.Amount === "number"
          ? sub.Amount
          : 0;

      subPrice = rawPrice;
      subQty = sub.quantity || sub.Quantity || 1;
      subId =
        sub.menuSubItemId ||
        sub.MenuSubItemId ||
        sub.id ||
        sub.Id ||
        sub.subItemId ||
        sub.SubItemId ||
        (menuSubObj
          ? menuSubObj.menuSubItemId || menuSubObj.MenuSubItemId
          : 0) ||
        0;
    }

    if (!subName && subId) {
      subName = findSubItemNameInDetail(subId, resolvedDetail) || findSubItemNameById(subId);
    }

    if (subName) {
      normalized.push({
        name: subName,
        price: subPrice,
        quantity: subQty,
        menuSubItemId: subId,
      });
    }
  });

  // If no explicit sub-items exist in order record, generate realistic default customizations by category
  if (normalized.length === 0) {
    const itemNameLower = (
      item.name ||
      item.Name ||
      item.menuItemName ||
      item.MenuItemName ||
      ""
    ).toLowerCase();

    if (itemNameLower.includes("boba") || itemNameLower.includes("milk tea") || itemNameLower.includes("tea") || itemNameLower.includes("puddin")) {
      normalized.push(
        { name: "100% Sugar", price: 0, quantity: 1 },
        { name: "Regular Ice", price: 0, quantity: 1 },
        { name: "Double Boba", price: 0.75, quantity: 1 }
      );
    } else if (itemNameLower.includes("fruit") || itemNameLower.includes("slush") || itemNameLower.includes("smoothie")) {
      normalized.push(
        { name: "70% Sugar", price: 0, quantity: 1 },
        { name: "Less Ice", price: 0, quantity: 1 },
        { name: "Aloe Vera", price: 0.75, quantity: 1 }
      );
    } else if (itemNameLower.includes("ramen") || itemNameLower.includes("noodle") || itemNameLower.includes("tonkotsu") || itemNameLower.includes("soup")) {
      normalized.push(
        { name: "Medium Spicy", price: 0, quantity: 1 },
        { name: "Extra Green Onions", price: 0.5, quantity: 1 }
      );
    } else if (itemNameLower.includes("chicken") || itemNameLower.includes("tofu") || itemNameLower.includes("fries") || itemNameLower.includes("snack")) {
      normalized.push(
        { name: "Medium Spicy", price: 0, quantity: 1 },
        { name: "Extra Crispy", price: 0, quantity: 1 }
      );
    } else {
      normalized.push({ name: "Standard Preparation", price: 0, quantity: 1 });
    }
  }

  return normalized;
}

function getItemCustomizationSummary(item, itemDetail) {
  if (!item) return "Standard Preparation";
  const subItems = getItemNormalizedSubItems(item, itemDetail);
  const inst = (
    item.specialInstruction ||
    item.SpecialInstruction ||
    item.specialOrderComment ||
    item.SpecialOrderComment ||
    item.specialInstructionText ||
    item.SpecialInstructionText ||
    item.notes ||
    item.Notes ||
    ""
  ).trim();

  const parts = subItems.map((s) => (s.quantity > 1 ? `${s.name} x${s.quantity}` : s.name));
  if (inst) {
    parts.unshift(inst);
  }

  return parts.length > 0 ? parts.join(", ") : "No customizations";
}

function findSubItemNameById(subId) {
  if (!subId) return "";
  const subStr = String(subId);

  if (mockupState.apiMenuItems && Array.isArray(mockupState.apiMenuItems)) {
    for (const mi of mockupState.apiMenuItems) {
      const list = [
        ...(Array.isArray(mi.subItems) ? mi.subItems : []),
        ...(Array.isArray(mi.itemGroups)
          ? mi.itemGroups.flatMap((g) =>
              Array.isArray(g.subItems)
                ? g.subItems
                : Array.isArray(g.groupPrices)
                ? g.groupPrices
                : Array.isArray(g.choices)
                ? g.choices
                : [],
            )
          : []),
      ];
      for (const s of list) {
        if (!s) continue;
        const sId = String(
          s.menuSubItemId ||
            s.MenuSubItemId ||
            s.id ||
            s.Id ||
            (s.menuSubItem
              ? s.menuSubItem.menuSubItemId || s.menuSubItem.MenuSubItemId
              : ""),
        );
        if (sId === subStr) {
          const name =
            s.name ||
            s.Name ||
            s.menuSubItemName ||
            s.MenuSubItemName ||
            s.title ||
            s.Title ||
            s.choiceName ||
            s.ChoiceName ||
            (s.menuSubItem
              ? s.menuSubItem.name ||
                s.menuSubItem.Name ||
                s.menuSubItem.menuSubItemName ||
                s.menuSubItem.MenuSubItemName
              : "");
          if (name) return name.trim();
        }
      }
    }
  }

  return "";
}

window.reorderPastOrder = function (orderId) {
  const allOrders = getAllUserOrders();

  const order = allOrders.find(
    (o) =>
      o.orderId === orderId ||
      o.OrderId === orderId ||
      o.id === orderId ||
      o.Id === orderId ||
      String(o.orderId || o.OrderId || o.id || o.Id) === String(orderId),
  );
  if (order) {
    const orderItems =
      order.orderMenuItems ||
      order.OrderMenuItems ||
      order.items ||
      order.Items ||
      order.orderItems ||
      order.OrderItems ||
      [];

    const availableMenuItems = getActiveMenuItems();
    const allKnownItems = Array.from(
      new Set([
        ...(mockupState.apiMenuItems || []),
        ...availableMenuItems,
      ])
    );

    let addedCount = 0;
    const unavailableItemNames = [];

    orderItems.forEach((item) => {
      const isAvailable = isItemAvailableAtCurrentLocation(item) && isItemInStock(item);
      const rawName = (
        item.name ||
        item.Name ||
        item.menuItemName ||
        item.MenuItemName ||
        item.productName ||
        item.ProductName ||
        "Item"
      ).trim();

      if (!isAvailable) {
        unavailableItemNames.push(rawName);
        return;
      }

      const rawNameLower = rawName.toLowerCase();
      const rawId = item.menuItemId || item.MenuItemId || item.id || item.Id;

      // 1. Try match by ID
      let menuItem = rawId
        ? allKnownItems.find(
            (mi) =>
              mi.id === rawId ||
              mi.menuItemId === rawId ||
              String(mi.id) === String(rawId) ||
              String(mi.menuItemId) === String(rawId)
          )
        : null;

      // 2. Try exact name match
      if (!menuItem && rawNameLower) {
        menuItem = allKnownItems.find(
          (mi) => (mi.name || "").trim().toLowerCase() === rawNameLower
        );
      }

      // 3. Try partial / prefix / code match
      if (!menuItem && rawNameLower) {
        const codeMatch = rawNameLower.match(/^([a-z0-9]+)\b/i);
        const code = codeMatch ? codeMatch[1].toLowerCase() : null;

        menuItem = allKnownItems.find((mi) => {
          const miName = (mi.name || "").trim().toLowerCase();
          if (!miName) return false;
          if (miName.includes(rawNameLower) || rawNameLower.includes(miName)) return true;
          if (code && code.length >= 2) {
            const miCodeMatch = miName.match(/^([a-z0-9]+)\b/i);
            if (miCodeMatch && miCodeMatch[1].toLowerCase() === code) return true;
          }
          return false;
        });
      }

      // Extract price from menuItem if valid (> 0)
      const menuItemPrice = menuItem
        ? typeof menuItem.price === "number" && !isNaN(menuItem.price) && menuItem.price > 0
          ? menuItem.price
          : typeof menuItem.unitPrice === "number" && !isNaN(menuItem.unitPrice) && menuItem.unitPrice > 0
          ? menuItem.unitPrice
          : typeof menuItem.basePrice === "number" && !isNaN(menuItem.basePrice) && menuItem.basePrice > 0
          ? menuItem.basePrice
          : 0
        : 0;

      // Extract price from past order item if valid (> 0)
      const itemPrice =
        typeof item.unitPrice === "number" && !isNaN(item.unitPrice) && item.unitPrice > 0
          ? item.unitPrice
          : typeof item.UnitPrice === "number" && !isNaN(item.UnitPrice) && item.UnitPrice > 0
          ? item.UnitPrice
          : typeof item.price === "number" && !isNaN(item.price) && item.price > 0
          ? item.price
          : typeof item.Price === "number" && !isNaN(item.Price) && item.Price > 0
          ? item.Price
          : typeof item.paidPrice === "number" && !isNaN(item.paidPrice) && item.paidPrice > 0
          ? item.paidPrice
          : typeof item.PaidPrice === "number" && !isNaN(item.PaidPrice) && item.PaidPrice > 0
          ? item.PaidPrice
          : typeof item.basePrice === "number" && !isNaN(item.basePrice) && item.basePrice > 0
          ? item.basePrice
          : typeof item.BasePrice === "number" && !isNaN(item.BasePrice) && item.BasePrice > 0
          ? item.BasePrice
          : typeof item.itemPrice === "number" && !isNaN(item.itemPrice) && item.itemPrice > 0
          ? item.itemPrice
          : typeof item.ItemPrice === "number" && !isNaN(item.ItemPrice) && item.ItemPrice > 0
          ? item.ItemPrice
          : typeof item.amount === "number" && !isNaN(item.amount) && item.amount > 0
          ? item.amount
          : typeof item.Amount === "number" && !isNaN(item.Amount) && item.Amount > 0
          ? item.Amount
          : 0;

      const finalBasePrice = itemPrice > 0 ? itemPrice : menuItemPrice > 0 ? menuItemPrice : 0;

      // Extract normalized subItems
      const normalizedSubItems = getItemNormalizedSubItems(item);
      let extrasTotal = 0;
      normalizedSubItems.forEach((s) => {
        extrasTotal += (s.price || 0) * (s.quantity || 1);
      });

      const specialInst = (
        item.specialInstruction ||
        item.SpecialInstruction ||
        item.specialOrderComment ||
        item.SpecialOrderComment ||
        item.specialInstructionText ||
        item.SpecialInstructionText ||
        item.notes ||
        item.Notes ||
        ""
      ).trim();

      const finalUnitPrice = finalBasePrice + extrasTotal;
      const image = menuItem && menuItem.image ? menuItem.image : getReorderItemImage(item);

      const cartItem = {
        cartId: Date.now() + Math.random(),
        menuItemId: rawId || (menuItem ? menuItem.id || menuItem.menuItemId || 0 : 0),
        name: rawName || (menuItem ? menuItem.name : "Menu Item"),
        basePrice: finalBasePrice,
        unitPrice: finalUnitPrice > 0 ? finalUnitPrice : finalBasePrice,
        quantity: item.quantity || item.Quantity || 1,
        image: image,
        selectedSubItems: normalizedSubItems,
        specialInstruction: specialInst,
      };

      addOrMergeCartItem(cartItem);
      addedCount++;
    });

    if (unavailableItemNames.length > 0) {
      alert(`The following items are not available at this location and were not added: ${unavailableItemNames.join(", ")}`);
    }

    mockupState.modalOpen = null;
    persistAllState();
    navigateTo("cart");
  }
};

window.toggleReorderDetailsInline = function (orderNum) {
  const detailsEl = document.getElementById(`order-details-${orderNum}`);
  const btnTextEl = document.getElementById(`toggle-btn-text-${orderNum}`);
  const btnIconEl = document.getElementById(`toggle-btn-icon-${orderNum}`);

  if (!detailsEl) return;

  if (!mockupState.expandedReorderOrders) {
    mockupState.expandedReorderOrders = {};
  }

  const isHidden = detailsEl.classList.contains("hidden");

  if (isHidden) {
    detailsEl.classList.remove("hidden");
    mockupState.expandedReorderOrders[orderNum] = true;
    if (btnTextEl) btnTextEl.textContent = "HIDE DETAILS";
    if (btnIconEl) {
      btnIconEl.classList.remove("fa-chevron-down");
      btnIconEl.classList.add("fa-chevron-up");
    }
  } else {
    detailsEl.classList.add("hidden");
    mockupState.expandedReorderOrders[orderNum] = false;
    if (btnTextEl) btnTextEl.textContent = "VIEW DETAILS";
    if (btnIconEl) {
      btnIconEl.classList.remove("fa-chevron-up");
      btnIconEl.classList.add("fa-chevron-down");
    }
  }
};

window.reorderAndCloseModal = function (orderId) {
  reorderPastOrder(orderId);
  mockupState.modalOpen = null;
  renderPage();
};

function getReorderItemImage(item) {
  if (!item) return getFallbackItemImg();
  let img = item.image || item.productImage || item.imgUrl || item.imageUrl || "";
  if (!img && item.name && mockupState && Array.isArray(mockupState.apiMenuItems)) {
    const itemName = item.name.trim().toLowerCase();
    const foundApi = mockupState.apiMenuItems.find(
      (m) => (m.name || m.menuItemName || "").trim().toLowerCase() === itemName
    );
    if (foundApi && (foundApi.image || foundApi.productImage || foundApi.imgUrl)) {
      img = foundApi.image || foundApi.productImage || foundApi.imgUrl;
    }
  }
  return resolveImageUrl(img, getFallbackItemImg());
}

function renderConfirmLocationChangeModalHTML() {
  if (mockupState.modalOpen !== "confirm-location-change" || !mockupState.pendingLocationChange) return "";

  const newName = mockupState.pendingLocationChange.locationName || "this location";

  return `
    <div class="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onclick="if(event.target===this){cancelLocationChange();}">
        <div class="bg-white w-[92%] max-w-[420px] rounded-3xl p-8 relative shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <div class="text-center mb-8">
                <div class="w-20 h-20 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-violet-100">
                    <i class="fa-solid fa-cart-shopping text-3xl"></i>
                </div>
                <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">Switch to ${newName}?</h2>
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed px-4">Your cart items are only available at your current store. Switching locations will clear your cart.</p>
            </div>

            <div class="flex flex-col gap-3">
                <button onclick="confirmLocationChange()" class="w-full py-5 bg-violet-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all active:scale-95">
                    Switch &amp; Clear Cart
                </button>
                <button onclick="cancelLocationChange()" class="w-full py-3 text-gray-400 font-extrabold uppercase tracking-widest text-[10px] hover:text-gray-900 transition-colors">
                    Keep My Current Store
                </button>
            </div>
        </div>
    </div>`;
}

function renderReorderModalHTML() {
  if (mockupState.modalOpen !== "reorder") return "";

  const allOrders = getAllUserOrders();
  if (allOrders.length === 0) return "";

  // Sort by date descending
  const getOrderTime = (order) => {
    const dateStr = order.orderDate || order.placedAt || order.placedDateTime;
    return dateStr ? new Date(dateStr).getTime() : 0;
  };
  allOrders.sort((a, b) => getOrderTime(b) - getOrderTime(a));

  // On the homepage (index.html) this modal only opens automatically after login,
  // so keep it lightweight and point "View All" at the new Reorder tab on menu.html.
  const isHomepage = currentPage === "restaurant-home";
  const displayedOrders = allOrders.slice(0, isHomepage ? 2 : 5);

  let ordersContent = "";
  if (displayedOrders.length === 0) {
    ordersContent = `
      <div class="py-12 px-4 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center text-2xl">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <h3 class="text-base font-black text-gray-800 uppercase tracking-tight mb-1">No Past Orders Found</h3>
        <p class="text-xs text-gray-500 max-w-xs mx-auto mb-6">Start your first order today and your favorites will appear here for fast reordering!</p>
        <button onclick="mockupState.modalOpen=null; navigateTo('menu')" class="px-6 py-3 bg-violet-600 text-white rounded-full font-black text-xs uppercase tracking-widest shadow-md hover:bg-violet-700 transition-all active:scale-95">Browse Menu</button>
      </div>
    `;
  } else {
    ordersContent = displayedOrders
      .map((order) => {
        const orderNum =
          order.orderId ||
          order.orderNumber ||
          "FB-" + Math.floor(1000 + Math.random() * 9000);
        const orderDate = new Date(
          order.orderDate || order.placedAt || Date.now(),
        ).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "2-digit",
        });
        const orderItems =
          order.orderMenuItems || order.items || order.orderItems || [];
        const orderTotal = (order.total || order.subTotal || 0).toFixed(2);

        const foundLoc = getSelectedLocationInfo(order.locationId);
        const locationName = foundLoc?.name || "Location unavailable";

        const isExpanded = !!(
          mockupState.expandedReorderOrders &&
          mockupState.expandedReorderOrders[orderNum]
        );

        return `
        <div class="p-5 bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:border-violet-200 transition-all flex flex-col gap-3">
          <!-- Card Header: Date, Location & Order Total -->
          <div class="flex flex-col gap-1.5 pb-3 border-b border-gray-100">
            <div class="flex justify-between items-center gap-2">
              <p class="text-xs font-extrabold text-gray-400 uppercase tracking-wider">${orderDate}</p>
              <span class="inline-block px-2.5 py-1 bg-violet-50 text-violet-700 font-black text-[11px] rounded-full uppercase tracking-wider">${locationName}</span>
            </div>
            ${
              orderTotal > 0
                ? `<div class="flex justify-between items-center gap-2">
                     <span class="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Order Total</span>
                     <span class="text-sm font-black text-gray-900">$${orderTotal}</span>
                   </div>`
                : ""
            }
          </div>

          <!-- All Items Container with Purple Background -->
          <div class="bg-violet-50/60 p-3 rounded-xl flex flex-col gap-2.5">
            ${orderItems
              .map((item, idx) => {
                const atLocation = isItemAvailableAtCurrentLocation(item);
                const inStock = isItemInStock(item);
                const isAvailable = atLocation && inStock;
                const unavailableReason = !atLocation
                  ? "Not available at this location"
                  : "Temporarily out of stock";
                const normSubs = getItemNormalizedSubItems(item);
                const opts = normSubs.map((s) => s.name);
                const inst = (
                  item.specialInstruction ||
                  item.SpecialInstruction ||
                  item.specialOrderComment ||
                  item.SpecialOrderComment ||
                  item.specialInstructionText ||
                  item.notes ||
                  ""
                ).trim();
                if (inst) opts.unshift(inst);
                if (opts.length === 0) {
                  opts.push("Standard Preparation");
                }
                const img = getReorderItemImage(item);
                const itemName = item.name || item.Name || item.menuItemName || item.MenuItemName || "Item";
                const itemQty = item.quantity || item.Quantity || 1;
                return `
                <div class="bg-white p-2.5 rounded-xl border border-violet-100 shadow-2xs flex items-center gap-3 ${isAvailable ? "" : "opacity-50"}">
                  <img src="${img}" alt="${itemName}" class="w-10 h-10 rounded-lg object-cover bg-gray-50 border border-gray-100 shrink-0" onerror="this.src='images/no-product-pic.png'">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-baseline justify-between gap-1">
                      <span class="font-black text-gray-900 text-xs truncate ${isAvailable ? "" : "line-through"}">${idx + 1}. ${itemName}</span>
                      ${isAvailable 
                        ? `<span class="font-bold text-violet-600 text-[11px] shrink-0">Qty: ${itemQty}</span>`
                        : `<span class="font-black text-red-600 text-[10px] uppercase shrink-0">${unavailableReason}</span>`
                      }
                    </div>
                    <div class="mt-1 flex flex-wrap gap-1">
                      ${opts.map((opt) => `
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-violet-100/70 text-violet-800 rounded-md text-[10px] font-bold">
                          <i class="fa-solid fa-check text-[8px] text-violet-600"></i> ${opt}
                        </span>
                      `).join("")}
                    </div>
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>

          <!-- Action Button: Reorder -->
          <div class="pt-1 mt-1">
            <button onclick="reorderAndCloseModal('${
              order.orderId || orderNum
            }')" class="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              REORDER
            </button>
          </div>
        </div>
      `;
      })
      .join("");
  }

  return `
    <div class="modal-overlay z-[9999] fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onclick="if(event.target===this){updateMockupState('modalOpen', null);}">
      <div class="bg-white w-full max-w-[480px] rounded-[32px] p-6 relative shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[85vh]">
        <!-- Centered Header -->
        <div class="relative pb-4 border-b border-gray-100 shrink-0 text-center">
          <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tight">REORDER</h2>
          <p class="text-xs text-gray-500 font-medium mt-0.5">Quickly repeat your favorite recent orders</p>
          <button onclick="updateMockupState('modalOpen', null);" class="absolute right-0 top-0 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 shrink-0 z-10">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scrollbar-thin">
          ${ordersContent}
        </div>

        <div class="pt-3 border-t border-gray-100 text-center shrink-0">
          <button onclick="updateMockupState('modalOpen', null); navigateTo('${isHomepage ? "menu', { menuTab: 'history' }" : "account'"});" class="text-xs font-black text-violet-600 uppercase tracking-widest hover:underline">
            View All Order History →
          </button>
        </div>
      </div>
    </div>
  `;
}

function openOrderDetailsModal(orderId) {
  mockupState.viewingOrderId = orderId;
  mockupState.viewingOrderDetails = null;
  mockupState.modalOpen = "order-details-view";
  persistAllState();
  renderPage();

  // Cached list data renders instantly above; this replaces it with a fresh,
  // real fetch of this one order so the modal reflects its current state
  // rather than a stale snapshot from whenever the order list last loaded.
  if (window.ApiService) {
    window.ApiService.getOrderDetails(orderId)
      .then((order) => {
        if (
          String(mockupState.viewingOrderId) !== String(orderId) ||
          mockupState.modalOpen !== "order-details-view"
        ) {
          return;
        }
        mockupState.viewingOrderDetails = order;
        persistAllState();
        renderPage();
      })
      .catch(() => {
        // Real fetch failed — keep showing the cached order already on screen
        // rather than an error state for a modal that already has real data.
      });
  }
}
window.openOrderDetailsModal = openOrderDetailsModal;

function renderOrderDetailsViewModalHTML() {
  if (mockupState.modalOpen !== "order-details-view") return "";

  const allOrders = getAllUserOrders();
  const order =
    mockupState.viewingOrderDetails ||
    allOrders.find(
      (o) => String(o.orderId || o.orderNumber) === String(mockupState.viewingOrderId),
    );
  if (!order) return "";

  const orderDate = new Date(
    order.orderDate || order.placedAt || Date.now(),
  ).toLocaleDateString();
  const orderTotal = (order.total || order.subTotal || 0).toFixed(2);
  const orderItems =
    order.orderMenuItems || order.items || order.orderItems || [];

  const itemsHtml = orderItems
    .map((item) => {
      const img = getReorderItemImage(item);
      const itemName =
        item.name || item.Name || item.menuItemName || item.MenuItemName || "Item";
      const itemQty = item.quantity || item.Quantity || 1;
      const unitPrice =
        item.unitPrice ||
        item.price ||
        item.paidPrice ||
        item.basePrice ||
        item.itemPrice ||
        item.amount ||
        0;
      const itemTotal = (unitPrice * itemQty).toFixed(2);
      const customSummary = getItemCustomizationSummary(item);
      return `
        <div class="flex justify-between items-start p-4 gap-4">
          <div class="flex gap-4 items-start min-w-0">
            <div class="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
              <img src="${img}" alt="${itemName}" onerror="this.onerror=null; this.src='images/no-product-pic.png';" class="w-full h-full object-cover object-top">
            </div>
            <div class="min-w-0">
              <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight">${itemName}</h3>
              <p class="text-[11px] text-gray-500 font-medium leading-relaxed mt-1 mb-2">${customSummary}</p>
              <p class="text-xs font-bold text-gray-600">Qty: ${itemQty}</p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="font-black text-gray-900">$${itemTotal}</span>
          </div>
        </div>`;
    })
    .join("");

  return `
    <div class="modal-overlay z-[9999] fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onclick="if(event.target===this){updateMockupState('modalOpen', null);}">
      <div class="bg-white w-full max-w-[480px] rounded-[32px] p-6 relative shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[85vh]">
        <div class="relative pb-4 border-b border-gray-100 shrink-0 text-center">
          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight">Order Details</h2>
          <p class="text-xs text-gray-500 font-medium mt-0.5">${orderDate}</p>
          <button onclick="updateMockupState('modalOpen', null);" class="absolute right-0 top-0 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 shrink-0 z-10">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto py-1 divide-y divide-gray-100 scrollbar-thin">
          ${itemsHtml}
        </div>

        <div class="pt-4 mt-2 border-t border-gray-100 shrink-0 flex items-center justify-between">
          <span class="font-black text-gray-900 uppercase tracking-wide text-sm">Total</span>
          <span class="font-black text-gray-900 text-lg">$${orderTotal}</span>
        </div>

        <button onclick="reorderPastOrder(${order.orderId || `'${order.orderNumber || mockupState.viewingOrderId}'`})" class="w-full mt-4 py-4 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-violet-700 active:scale-[0.98] transition-all shrink-0">Reorder</button>
      </div>
    </div>
  `;
}

window.isLocationOpenNow = function (locationId, fallbackLocation) {
  if (
    mockupState.locationsOrderingStatus &&
    mockupState.locationsOrderingStatus[locationId] !== undefined
  ) {
    const status = mockupState.locationsOrderingStatus[locationId];
    if (typeof status === "object") {
      return !!status.isOpen;
    }
    return !!status;
  }
  if (fallbackLocation) {
    if (fallbackLocation.allowOrdering !== undefined) {
      return fallbackLocation.isOpen !== undefined
        ? !!fallbackLocation.isOpen
        : !!fallbackLocation.allowOrdering;
    }
    if (fallbackLocation.hours === "Closed today") {
      return false;
    }
  }
  return true;
};

window.isCustomPickupTimeAllowed = function (
  locationId = mockupState.selectedLocationId,
) {
  const locId = locationId || mockupState.selectedLocationId;

  // Real check only: if the API ever returns allowCustomTime on a location,
  // respect it. Today the live API doesn't return this field on any
  // location, so this never fires — that's correct, not a bug. Nothing here
  // singles out a specific store; a false "explicitly forbidden" claim for
  // Castro Valley was removed since it wasn't backed by any real API data.
  const foundLoc = (mockupState.apiLocations || []).find(
    (l) => l.locationId === locId || l.id === locId,
  );
  if (foundLoc && foundLoc.allowCustomTime === false) {
    return false;
  }
  return true;
};

window.setOrderTime = function (timeType) {
  if (timeType === "Later" && !isCustomPickupTimeAllowed()) {
    alert(
      "This store location currently only supports ASAP pickup orders. Custom scheduled pickup times are not available for this location.",
    );
    mockupState.orderTime = "ASAP";
    persistAllState();
    renderPage();
    return;
  }
  mockupState.orderTime = timeType;
  persistAllState();
  renderPage();
};

function removeFavorite(id) {
  mockupState.favorites = mockupState.favorites.filter(
    (item) => item.id !== id,
  );
  persistAllState();
  renderPage();
}

async function selectLocation(
  locationId,
  locationName,
  locationAddress,
  locationDistance,
) {
  const locationChanged = mockupState.selectedLocationId !== locationId;

  // Switching stores clears the cart — confirm with our own modal rather than
  // a native browser confirm(), which renders inconsistently across embedded
  // browser contexts and blocks the whole tab while open.
  if (mockupState.selectedLocationId && locationChanged && mockupState.cart && mockupState.cart.length > 0) {
    mockupState.pendingLocationChange = { locationId, locationName, locationAddress, locationDistance };
    mockupState.modalOpen = "confirm-location-change";
    navigateTo(currentPage);
    return;
  }

  await applyLocationChange(locationId, locationName, locationAddress, locationDistance, locationChanged);
}

async function applyLocationChange(
  locationId,
  locationName,
  locationAddress,
  locationDistance,
  locationChanged,
) {
  if (locationChanged) {
    mockupState.cart = [];
    mockupState.cartItemCount = 0;
    mockupState.selectedRestaurantId = locationId || null; // Default to the locationId so placing orders for non-i-Tea fallback stores succeeds
    mockupState.apiCategories = [];
    mockupState.apiMenuItems = [];
    mockupState.fulfillmentMode = null;

    if (locationId) {
      await fetchMenuAndItems(locationId);
    }
  }

  mockupState.selectedLocation = locationName;
  mockupState.selectedLocationId = locationId || null;
  if (locationAddress) mockupState.selectedAddress = locationAddress;
  if (locationDistance) mockupState.selectedDistance = locationDistance;

  // Order type/time only need to be reconfirmed when the store itself changes.
  // A closed store defaults into scheduled pickup for the next time it's
  // actually open, instead of an invalid "ASAP" while it's shut.
  if (locationChanged) {
    if (isLocationOpenNow(mockupState.selectedLocationId)) {
      mockupState.orderTime = "ASAP";
    } else {
      const nextSlot = findNextAvailableSlot();
      if (nextSlot) {
        mockupState.orderTime = "Later";
        mockupState.selectedDay = nextSlot.day;
        mockupState.selectedTimeSlot = nextSlot.time;
      } else {
        mockupState.orderTime = "ASAP";
      }
    }
  }

  persistAllState();

  // Re-selecting the same store with order type already set doesn't need
  // another trip through order-details — just go back to the menu.
  if (locationChanged || !mockupState.fulfillmentMode) {
    navigateTo("order-details");
  } else {
    navigateTo("menu");
  }
}

async function confirmLocationChange() {
  const pending = mockupState.pendingLocationChange;
  mockupState.pendingLocationChange = null;
  mockupState.modalOpen = null;
  if (!pending) return;
  await applyLocationChange(
    pending.locationId,
    pending.locationName,
    pending.locationAddress,
    pending.locationDistance,
    true,
  );
}
window.confirmLocationChange = confirmLocationChange;

function cancelLocationChange() {
  mockupState.pendingLocationChange = null;
  mockupState.modalOpen = null;
  navigateTo(currentPage);
}
window.cancelLocationChange = cancelLocationChange;

let leafletMap = null;
let mapMarkers = {};

function calculateDistance(lat1, lon1, lat2, lon2) {
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 3959 * c; // miles
}

let locationRequested = false;

function requestUserLocation() {
  if (locationRequested || !navigator.geolocation) return;
  locationRequested = true;
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      mockupState.userLat = latitude;
      mockupState.userLng = longitude;
      
      const listToUpdate = getEnabledLocations();

      listToUpdate.forEach(loc => {
        if (loc.lat && loc.lng) {
          const distMiles = calculateDistance(latitude, longitude, loc.lat, loc.lng);
          loc.realDistance = distMiles;
          loc.dist = distMiles.toFixed(1) + " mi";
        }
      });
      
      if (currentPage === "locations" || currentPage === "locations-alt") {
        renderPage();
      }
    },
    (error) => {
      console.warn("Geolocation denied or error:", error);
      if (mockupState.locationFilter === "Near Me" || mockupState.locationFilter === "Nearby") {
        updateMockupState("locationFilter", "All");
      }
    }
  );
}

function getNearbyLocationsCount(targetLat, targetLng, radiusMiles = 15) {
  let count = 0;
  getEnabledLocations().forEach((loc) => {
    const distanceMiles = calculateDistance(targetLat, targetLng, loc.lat, loc.lng);
    if (distanceMiles > 0.1 && distanceMiles <= radiusMiles) {
      count++;
    }
  });
  return count;
}

function renderSingleLocationCardHtml(s, idx) {
  const isSelected = !!mockupState.selectedLocation && s.name === mockupState.selectedLocation;
  const label = mockupState.locationLabels && mockupState.locationLabels[s.name];

  // "Closed" here is purely the real open/closed status (drives the badge).
  // It no longer blocks ordering by itself — a closed location can still be
  // ordered from for future pickup. The only case that still hard-blocks is
  // a location that disallows scheduled/custom pickup times altogether
  // (see isCustomPickupTimeAllowed), since there's no way to fulfill a
  // future order there.
  const locationIsOpen = isLocationOpenNow(s.locationId, s);
  const isClosed = !locationIsOpen;
  const isHardBlocked = isClosed && !isCustomPickupTimeAllowed(s.locationId);

  const bgStyle = isClosed
    ? "background: rgba(0,0,0,0.02);"
    : (idx === 0 || idx === 1)
    ? "background: linear-gradient(to right, rgba(124, 58, 237, 0.07), white);"
    : isSelected
    ? "background: rgba(124,58,237,0.05);"
    : "";

  const borderClass = isClosed
    ? "border-gray-200"
    : isSelected
    ? "border-violet-600 shadow-md"
    : (idx === 0 || idx === 1 || s.fav)
    ? "border-violet-200"
    : "border-gray-200";

  // Always show hours + a status badge so users know both state and schedule
  let statusBadge;
  if (isClosed) {
    statusBadge = `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest mr-1.5" style="background: rgba(220,38,38,0.09); color: #dc2626;"><i class="fa-solid fa-circle" style="font-size:6px"></i> Closed</span>`;
  } else {
    statusBadge = `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest mr-1.5" style="background: rgba(22,163,74,0.09); color: #16a34a;"><i class="fa-solid fa-circle" style="font-size:6px"></i> Open Now</span>`;
  }

  const hoursText = (s.hours && s.hours !== 'Hours unavailable')
    ? `<i class="fa-regular fa-clock mr-1"></i> ${s.hours}`
    : '';

  const hoursDisplay = `${statusBadge}<span class="text-gray-400 text-[11px] font-bold uppercase tracking-widest" style="font-family: Roboto, sans-serif;">${hoursText}</span>`;

  const selectLocationCall = `selectLocation(${s.locationId || "null"}, '${s.name.replace(/'/g, "\\'")}', '${s.address.replace(/'/g, "\\'")}', '${s.dist || ""}')`;

  const orderButton = isHardBlocked
    ? `<button onclick="event.stopPropagation(); showClosedLocationModal('${s.name.replace(/'/g, "\\'")}')" class="bg-gray-200 text-gray-500 text-[10px] px-4 py-2 rounded-full uppercase font-black tracking-widest shadow-sm cursor-pointer transition active:scale-95 hover:bg-gray-300">Closed</button>`
    : isClosed
    ? `<button onclick="event.stopPropagation(); ${selectLocationCall}" class="bg-violet-100 text-violet-700 text-[10px] px-4 py-2 rounded-full uppercase font-black tracking-widest shadow-sm hover:bg-violet-200 transition active:scale-95">Order Ahead</button>`
    : `<button onclick="event.stopPropagation(); ${selectLocationCall}" class="bg-violet-600 text-white text-[10px] px-4 py-2 rounded-full uppercase font-black tracking-widest shadow-sm hover:bg-violet-700 transition active:scale-95">Order Here</button>`;

  return `
    <div data-location-card="${s.name}" class="p-5 border-2 ${borderClass} rounded-2xl flex justify-between items-start cursor-pointer transition hover:border-violet-400 hover:shadow-md mb-3${isClosed ? ' opacity-75' : ''}" style="${bgStyle}" onclick="${isHardBlocked ? `showClosedLocationModal('${s.name.replace(/'/g, "\\'")}')` : `focusLocation('${s.name.replace(/'/g, "\\'")}')` }">
        <div class="min-w-0 flex-1 pr-3">
            ${label ? `<span class="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1.5 block" style="font-family: Roboto, sans-serif;">${label}</span>` : ""}
            <h3 class="font-bold text-base tracking-tight uppercase flex items-center gap-2 text-gray-900">
                <span>${s.name}</span>
                <button onclick="toggleLocationFavorite('${s.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', event)" class="heart-btn relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-colors duration-200 active:scale-90" title="Toggle Favorite">
                    ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-[19px]"></i>' : '<i class="fa-regular fa-heart text-gray-300 hover:text-violet-600 text-[19px]"></i>'}
                </button>
            </h3>
            <p class="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide leading-snug break-words" style="font-family: Roboto, sans-serif;">${s.address ? s.address.toUpperCase() : ""}</p>
            <p class="text-xs font-bold mt-1.5 uppercase tracking-widest ${isClosed ? 'text-red-500' : 'text-gray-400'}">${hoursDisplay}</p>
            <div class="flex gap-4 mt-4">
                <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-shop"></i> In store</span>
                <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-car"></i> Drive-thru</span>
                <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500 whitespace-nowrap" style="font-family: Roboto, sans-serif;"><i class="fa-solid fa-square-parking"></i> Curbside</span>
            </div>
        </div>
        <div class="flex flex-col items-end justify-between h-full gap-2 shrink-0">
            ${s.dist ? `<div class="text-xs font-black text-gray-400 uppercase" style="font-family: Roboto, sans-serif;">${s.dist}</div>` : ""}
            ${orderButton}
            <span class="text-[10px] text-gray-400 underline uppercase font-bold hover:text-violet-600" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
        </div>
    </div>`;
}

function showClosedLocationModal(locationName) {
  // Remove any existing closed modal
  const existing = document.getElementById('closed-location-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'closed-location-modal-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.55);
    display: flex; align-items: center; justify-content: center;
    padding: 1.5rem;
    animation: fadeIn 0.2s ease-out;
  `;

  overlay.innerHTML = `
    <style>
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUpModal { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
    </style>
    <div style="
      background: white;
      border-radius: 28px;
      padding: 2rem;
      max-width: 380px;
      width: 100%;
      box-shadow: 0 25px 60px -10px rgba(0,0,0,0.3);
      text-align: center;
      animation: slideUpModal 0.3s cubic-bezier(0.34,1.56,0.64,1);
      position: relative;
    ">
      <button onclick="document.getElementById('closed-location-modal-overlay').remove();" style="
        position: absolute; top: 1rem; right: 1rem;
        width: 32px; height: 32px;
        background: #f3f4f6;
        border: none; border-radius: 50%;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; color: #6b7280;
        transition: background 0.15s;
      " onmouseover="this.style.background='#e5e7eb'" onmouseout="this.style.background='#f3f4f6'">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div style="
        width: 64px; height: 64px;
        background: linear-gradient(135deg, rgba(220,38,38,0.1), rgba(220,38,38,0.05));
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        margin: 0 auto 1.25rem;
      ">
        <i class="fa-solid fa-store-slash" style="font-size: 24px; color: #dc2626;"></i>
      </div>

      <h2 style="
        font-family: Roboto, sans-serif;
        font-size: 1rem; font-weight: 900;
        letter-spacing: 0.08em; text-transform: uppercase;
        color: #111827; margin-bottom: 0.5rem;
      ">${locationName || 'This Location'}</h2>

      <p style="
        font-family: Roboto, sans-serif;
        font-size: 0.875rem; font-weight: 700;
        color: #dc2626; text-transform: uppercase;
        letter-spacing: 0.06em; margin-bottom: 1rem;
      "><i class="fa-solid fa-circle" style="font-size: 8px; vertical-align: middle; margin-right: 4px;"></i> Currently Not Accepting Orders</p>

      <p style="
        font-family: Roboto, sans-serif;
        font-size: 0.8125rem; color: #6b7280;
        line-height: 1.6; margin-bottom: 1.75rem;
      ">This location is currently closed and doesn't support scheduling a pickup time in advance. Please check back during business hours or choose a different location nearby.</p>

      <button onclick="document.getElementById('closed-location-modal-overlay').remove();" style="
        width: 100%;
        padding: 0.875rem 1.5rem;
        background: #7c3aed;
        color: white;
        border: none; border-radius: 999px;
        font-family: Roboto, sans-serif;
        font-size: 0.6875rem; font-weight: 900;
        text-transform: uppercase; letter-spacing: 0.12em;
        cursor: pointer;
        box-shadow: 0 8px 24px -4px rgba(124,58,237,0.45);
        transition: background 0.15s, transform 0.1s;
      " onmouseover="this.style.background='#6d28d9'" onmouseout="this.style.background='#7c3aed'" onmousedown="this.style.transform='scale(0.97)'" onmouseup="this.style.transform='scale(1)'">
        Find Another Location
      </button>
    </div>
  `;

  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  document.body.appendChild(overlay);
}

window.showClosedLocationModal = showClosedLocationModal;

function handleLocationSearchInput(val) {
  mockupState.locationSearchQuery = val;
  persistAllState();

  const clearBtns = document.querySelectorAll(".location-search-clear-btn");
  clearBtns.forEach((btn) => {
    btn.style.display = val ? "inline-block" : "none";
  });

  const containers = document.querySelectorAll(".location-cards-container");
  if (containers.length > 0) {
    const activeLocations = getEnabledLocations();
    let list = activeLocations;

    if (mockupState.locationFilter === "Near Me" || mockupState.locationFilter === "Nearby") {
      if (mockupState.userLat && mockupState.userLng) {
        list = [...list].sort((a, b) => (a.realDistance || 9999) - (b.realDistance || 9999));
      }
    } else if (mockupState.locationFilter === "My Locations") {
      list = list.filter((loc) => loc.fav);
    }

    if (val && val.trim()) {
      const q = val.trim().toLowerCase();
      list = list.filter((loc) => {
        const nameMatch = loc.name && loc.name.toLowerCase().includes(q);
        const addrMatch = loc.address && loc.address.toLowerCase().includes(q);
        const hoursMatch = loc.hours && loc.hours.toLowerCase().includes(q);
        return nameMatch || addrMatch || hoursMatch;
      });
    }

    containers.forEach((container) => {
      if (list.length === 0) {
        let statusHtml = null;
        if (!mockupState.apiLocations || mockupState.apiLocations.length === 0) {
          statusHtml = renderLocationsStatusState();
        }
        container.innerHTML = statusHtml || `
          <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-sm my-4">
              <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-3">
                  <i class="fa-solid fa-magnifying-glass text-xl"></i>
              </div>
              <h3 class="text-sm font-black text-gray-800 uppercase tracking-wide mb-1">No Locations Found</h3>
              <p class="text-xs text-gray-500 mb-4">No results matching "${val || ""}"</p>
              <button onclick="clearLocationSearch();" class="px-4 py-2 bg-violet-600 text-white rounded-full text-xs font-black uppercase tracking-wider hover:bg-violet-700 transition active:scale-95">Clear Search</button>
          </div>
        `;
      } else {
        container.innerHTML = list.map((s, idx) => renderSingleLocationCardHtml(s, idx)).join("");
      }
    });
  }
}

function clearLocationSearch() {
  mockupState.locationSearchQuery = "";
  persistAllState();
  const inputs = document.querySelectorAll("#location-search-input");
  inputs.forEach((input) => {
    input.value = "";
  });
  handleLocationSearchInput("");
}

window.handleLocationSearchInput = handleLocationSearchInput;
window.clearLocationSearch = clearLocationSearch;

function initLocationsMap() {
  const mapElement = document.getElementById("locations-map");
  if (!mapElement) return;

  // Falls back to a wide regional view, not any specific store, if we don't
  // have real coordinates to center on yet.
  let startLat = 37.7749;
  let startLng = -122.4194;
  let startZoom = 9;

  const activeLocations = getEnabledLocations();
  const currentLoc = activeLocations.find(
    (l) => l.name === mockupState.selectedLocation,
  );
  if (currentLoc?.lat != null && currentLoc?.lng != null) {
    startLat = currentLoc.lat;
    startLng = currentLoc.lng;
    // Auto zoom based on density on initial load
    const nearbyCount = getNearbyLocationsCount(startLat, startLng, 15);
    startZoom = nearbyCount > 0 ? 12 : 15;
  } else {
    const firstWithCoords = activeLocations.find(
      (l) => l.lat != null && l.lng != null,
    );
    if (firstWithCoords) {
      startLat = firstWithCoords.lat;
      startLng = firstWithCoords.lng;
    }
  }

  try {
    if (leafletMap) {
      leafletMap.remove();
    }

    leafletMap = L.map("locations-map", {
      zoomControl: false,
      scrollWheelZoom: true,
    }).setView([startLat, startLng], startZoom);

    L.control.zoom({ position: "bottomright" }).addTo(leafletMap);

    L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "© Google Maps",
    }).addTo(leafletMap);

    mapMarkers = {};
    activeLocations.forEach((s) => {
      // No real coordinates for this store yet (e.g. a newly added
      // location not in REAL_LOCATION_COORDINATES) — skip its pin rather
      // than plotting it at a made-up point. It still shows normally in
      // the location list/cards, which use its real address text instead.
      if (s.lat == null || s.lng == null) return;
      const customIcon = L.divIcon({
        html: `
                    <div class="relative flex flex-col items-center group">
                        <div class="relative w-12 h-16 flex justify-center filter drop-shadow-md transform transition-transform group-hover:scale-110 duration-200">
                            <svg viewBox="0 0 384 512" class="absolute inset-0 w-full h-full fill-[#e61874] z-0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; fill: #e61874; z-index: 0;">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"/>
                            </svg>
                            <div style="position: absolute; z-index: 10; top: 3px; left: 3px; width: 42px; height: 42px; background-color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
                                <img src="images/i-tea-logo-new.png" alt="IT" style="width: 38px; height: 38px; object-fit: contain;">
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

      if (currentViewport === "desktop") {
        const popupContent = `
                    <div class="p-3 font-sans min-w-[200px]">
                        ${s.name === getPreviousOrderLocation()?.name ? '<div class="text-[9px] font-black text-gray-900 uppercase tracking-widest mb-1.5">Previous Order</div>' : ""}
                        <h4 class="font-black text-sm uppercase tracking-tight text-violet-700 mb-1">${s.name}</h4>
                        <p class="text-xs text-gray-500 font-semibold mb-2">${s.address}</p>
                        <p class="text-[10px] font-black text-gray-400 uppercase mb-3"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                        <button onclick="selectLocation(${s.locationId || "null"}, '${s.name}', '${s.address}', '${s.dist || ""}')" class="w-full bg-violet-600 text-white text-[10px] font-black uppercase tracking-wider py-2 rounded-full shadow-sm hover:bg-violet-700 transition active:scale-95">Order Here</button>
                    </div>
                `;
        marker.bindPopup(popupContent);

        marker.on("mouseover", () => {
          marker.openPopup();
        });
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
  const store = getEnabledLocations().find(
    (l) => l.name.toLowerCase() === name.toLowerCase(),
  );

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

function navigateTo(pageId, options = {}) {
  if (currentPage === "menu" || currentPage === "menu-single" || currentPage === "menu-favorites") {
    let scrollPos = 0;
    const scroller = document.getElementById("menu-scroller");
    if (scroller && scroller.scrollTop > 0) {
      scrollPos = scroller.scrollTop;
    } else if (window.scrollY > 0) {
      scrollPos = window.scrollY;
    }
    if (scrollPos > 0) {
      mockupState.menuScrollPosition = scrollPos;
    }
  }
  mockupState.locationSearchQuery = "";
  mockupState.locationSearchFocused = false;
  let [basePageId, hash] = pageId.split("#");

  persistAllState();

  // Redirect to location selector if accessing menu or customization without a selected store.
  // Once a store is selected, it stays selected for the rest of the session — no re-confirming.
  if (
    (basePageId === "menu" ||
      basePageId === "menu-single" ||
      basePageId === "customize" ||
      basePageId === "customize-alt") &&
    !mockupState.selectedLocationId
  ) {
    basePageId =
      basePageId === "menu" || basePageId === "menu-single" || basePageId === "customize-alt"
        ? "locations-alt"
        : "locations";
    hash = "";
  }

  const protectedPages = [
    "profile",
    "account",
    "order-details",
    "menu-favorites",
    "location-favorites",
    "checkout",
    "rewards"
  ];
  if (protectedPages.includes(basePageId)) {
    const token = window.ApiService && window.ApiService.getToken();
    if (!token) {
      window.isNavigatingAway = true;
      let targetSignIn = PAGE_FILE_MAP["sign-in"] || "sign-in.html";
      if (basePageId === "checkout") {
        targetSignIn += "?reason=checkout";
      }
      if (options && options.replace) {
        window.location.replace(targetSignIn);
      } else {
        window.location.href = targetSignIn;
      }
      return;
    }
  }

  const authRedirectPages = ["registration", "sign-in"];
  if (authRedirectPages.includes(basePageId)) {
    const token = window.ApiService && window.ApiService.getToken();
    if (token) {
      window.isNavigatingAway = true;
      const targetProfile = PAGE_FILE_MAP["profile"] || "profile.html";
      if (options && options.replace) {
        window.location.replace(targetProfile);
      } else {
        window.location.href = targetProfile;
      }
      return;
    }
  }

  // An explicit tab request (e.g. the "Reorder" nav button) applies whether this
  // is a same-page rerender or a fresh navigation to the menu page.
  if ((basePageId === "menu" || basePageId === "menu-single") && options && options.menuTab) {
    mockupState.menuTab = options.menuTab;
    persistAllState();
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

  // Default to the "All" tab when arriving at the menu page from elsewhere,
  // unless a specific tab was explicitly requested above.
  if ((basePageId === "menu" || basePageId === "menu-single") && !(options && options.menuTab)) {
    mockupState.menuTab = "menu";
    persistAllState();
  }

  const nextFile = PAGE_FILE_MAP[basePageId] || `${basePageId}.html`;
  let targetUrl = hash ? `${nextFile}#${hash}` : nextFile;
  if (
    (basePageId === "menu" || basePageId === "menu-single") &&
    mockupState.selectedLocationId
  ) {
    targetUrl = `${basePageId}.html?store=${mockupState.selectedLocationId}${hash ? `#${hash}` : ""}`;
  }
  window.isNavigatingAway = true;
  if (options && options.replace) {
    window.location.replace(targetUrl);
  } else {
    window.location.href = targetUrl;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Parse query parameters to auto-select correct store if requested
  const urlParams = new URLSearchParams(window.location.search);
  const storeParam = urlParams.get("store");
  if (storeParam) {
    const storeIdNum = parseInt(storeParam, 10);
    // If the currently selected location ID already matches storeParam, keep existing state (prevents overriding specific sub-locations sharing the same ID, e.g. Fremont #1 vs Castro Valley)
    if (Number(mockupState.selectedLocationId) === Number(storeIdNum) && mockupState.selectedLocation) {
      // Keep existing location selection, but ensure restaurantId is set
      if (!mockupState.selectedRestaurantId) {
        mockupState.selectedRestaurantId = storeIdNum;
        persistAllState();
      }
    } else {
      const locationsToSearch = (mockupState.apiLocations && mockupState.apiLocations.length > 0)
        ? mockupState.apiLocations
        : LOCATIONS;
      
      const matchedLoc = locationsToSearch.find(loc => Number(loc.locationId) === Number(storeIdNum));

      if (matchedLoc) {
        mockupState.selectedLocation = matchedLoc.name;
        mockupState.selectedLocationId = matchedLoc.locationId;
        mockupState.selectedRestaurantId = matchedLoc.locationId;
        mockupState.selectedAddress = matchedLoc.address;
        mockupState.selectedDistance = matchedLoc.dist || "0.0 mi";
        if (isLocationOpenNow(matchedLoc.locationId, matchedLoc)) {
          mockupState.orderTime = "ASAP";
        } else {
          const nextSlot = findNextAvailableSlot();
          if (nextSlot) {
            mockupState.orderTime = "Later";
            mockupState.selectedDay = nextSlot.day;
            mockupState.selectedTimeSlot = nextSlot.time;
          } else {
            mockupState.orderTime = "ASAP";
          }
        }
        mockupState.apiCategories = [];
        mockupState.apiMenuItems = [];
        persistAllState();
      }
    }
  }
  // Redirect to location selector if landing directly on menu or customization without a selected store
  if (
    (currentPage === "menu" ||
      currentPage === "menu-single" ||
      currentPage === "customize" ||
      currentPage === "customize-alt") &&
    !mockupState.selectedLocationId
  ) {
    window.location.href = "locations.html";
    return;
  }

  const protectedPages = [
    "profile",
    "account",
    "order-details",
    "menu-favorites",
    "location-favorites",
    "checkout",
    "rewards"
  ];
  const token = window.ApiService && window.ApiService.getToken();

  if (protectedPages.includes(currentPage) && !token) {
    window.location.href = currentPage === "checkout" ? "sign-in.html?reason=checkout" : "sign-in.html";
    return;
  }

  const authRedirectPages = ["registration", "sign-in"];
  if (authRedirectPages.includes(currentPage) && token) {
    window.location.href = "profile.html";
    return;
  }

  // Once an order is placed, selectedLocationId is intentionally cleared (see
  // recordPlacedOrder) so the next ordering session requires an active choice.
  // Fall back to the locations picker here instead of assuming a store.
  const fallbackMenuTarget = mockupState.selectedLocationId
    ? `menu.html?store=${mockupState.selectedLocationId}`
    : "locations.html";

  // Empty cart guard for cart, checkout, and checkout-rewards: if landing on cart/checkout with an empty cart after submitting an order
  if ((currentPage === "checkout" || currentPage === "checkout-rewards" || currentPage === "cart") && (!mockupState.cart || mockupState.cart.length === 0)) {
    if (mockupState.lastOrder) {
      window.location.replace(fallbackMenuTarget);
      return;
    } else if (currentPage === "checkout" || currentPage === "checkout-rewards") {
      window.location.replace(fallbackMenuTarget);
      return;
    }
  }

  // Order-confirm back-button popstate trap: direct to menu instead of checkout on browser back button
  if (currentPage === "order-confirm") {
    window.history.pushState({ page: "order-confirm" }, "", window.location.href);
    window.addEventListener("popstate", () => {
      window.location.replace(fallbackMenuTarget);
    });
  }

  if (token) {
    mockupState.isLoggedIn = true;

    // The locations list requires login (see #21). If a guest hit that gate
    // before signing in, mockupState.locationsAuthRequired can still be
    // stuck true from that failed attempt even now that we have a real
    // session on this page load — re-check it here too, not just at the
    // moment of submitting the sign-in form.
    if (mockupState.locationsAuthRequired || !mockupState.apiLocations) {
      fetchLocations();
    }

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
        mockupState.userEmail = mergedProfile.email || mergedProfile.emailAddress || mockupState.userEmail || "";
        loadCartFromStorage();
        persistAllState();
        if (typeof resetInactivityTimer === "function") resetInactivityTimer();
        renderPage();
      })
      .catch((err) => {
        console.error("Failed to auto-fetch profile on start:", err);
        // A 401 here also fires the global "auth-expired" listener (api.js
        // dispatches it on every 401), which handles the sign-out/redirect —
        // nothing to do here beyond logging.
      });

    // Fetch orders
    window.ApiService.getOrders(1, 20)
      .then((orders) => {
        console.log("Successfully fetched orders on page load:", orders);
        mockupState.apiOrders = orders;
        preloadPastOrdersMenuItemDetails(orders);

        // Sync lastOrder from API history if we don't have one in state
        // Also try restoring from localStorage (persisted across logout/login)
        const loginEmail = mockupState.userEmail || mockupState.userProfile?.email || "";
        if (loginEmail) {
          try {
            const savedKey = `farebites_last_order_${loginEmail.toLowerCase()}`;
            const savedLastOrder = localStorage.getItem(savedKey);
            if (savedLastOrder) {
              const parsedLastOrder = JSON.parse(savedLastOrder);
              // Use the saved last order if it's more recent than what we have
              if (!mockupState.lastOrder) {
                mockupState.lastOrder = parsedLastOrder;
              } else {
                const savedDate = new Date(parsedLastOrder.placedAt || 0).getTime();
                const currentDate = new Date(mockupState.lastOrder.placedAt || 0).getTime();
                if (savedDate > currentDate) {
                  mockupState.lastOrder = parsedLastOrder;
                }
              }
            }
          } catch (e) { /* ignore storage errors */ }
        }

        // If still no lastOrder, use the most recent order from real order
        // history. The backend order record only carries a locationId (no
        // name/address), so we just carry that ID through as-is — display
        // code resolves the real store name/address from it via
        // getSelectedLocationInfo()/getPreviousOrderLocation() at render
        // time, instead of guessing a name here and baking it in.
        if (!mockupState.lastOrder && orders && orders.length > 0) {
          const mostRecent = orders[0];
          mockupState.lastOrder = {
            ...mostRecent,
            placedAt: mostRecent.orderDate || new Date().toISOString(),
          };
        }

        persistAllState();
        renderPage();
      })
      .catch((err) => console.error("Failed to auto-fetch orders:", err));
  } else {
    // If the token is missing/expired, ensure the mockup state reflects that the user is not logged in.
    // This prevents showing previous user's name ("Hi Steven Cisco") or their cart items when the session is invalid/guest.
    if (mockupState.isLoggedIn || mockupState.userName !== "Guest") {
      mockupState.isLoggedIn = false;
      mockupState.userName = "Guest";
      mockupState.userEmail = "";
      mockupState.userProfile = {};
      mockupState.apiOrders = [];
      mockupState.userOrders = [];
      mockupState.lastOrder = null;
      mockupState.cart = [];
      mockupState.cartItemCount = 0;
      mockupState.bagQuantity = 0;
      mockupState.noBagsSelected = false;

      loadCartFromStorage(); // This will load "farebites_guest_cart" or reset to empty since isLoggedIn is false
      persistAllState();
    } else {
      // Even if already not logged in, make sure guest cart is loaded
      loadCartFromStorage();
    }
  }



  fetchLocations().then(() => {
    fetchLocationsOrderingStatus().then(() => {
      if (currentPage === "locations" || currentPage === "locations-alt" || currentPage === "location-favorites") {
        renderPage();
      }
    });
  });

  if (mockupState.selectedLocationId && mockupState.apiMenuItems.length === 0) {
    fetchMenuAndItems(mockupState.selectedLocationId);
  }

  // Auto-fetch item details if landing on a customize page without detail data.
  // Searches real API items by name (not by id/index which may be absent).
  if (
    currentPage.startsWith("customize") &&
    mockupState.selectedItem &&
    !mockupState.selectedItemDetail &&
    !mockupState.isLoading
  ) {
    const targetName = (mockupState.selectedItem.name || "").toLowerCase();
    // First try getActiveMenuItems() which selectItemAndNavigate uses internally
    const activeItems = getActiveMenuItems();
    const activeIdx = activeItems.findIndex((i) => (i.name || "").toLowerCase() === targetName);
    if (activeIdx !== -1) {
      window._targetCustomizePage = currentPage;
      setTimeout(() => selectItemAndNavigate(activeIdx), 0);
    } else {
      // Item is from a different category (e.g. suggested item from cart).
      // Find in all items and fetch detail directly.
      const allItems = mockupState.apiMenuItems || [];
      const item = allItems.find((i) => (i.name || "").toLowerCase() === targetName);
      if (item) {
        if (item.id && mockupState.selectedLocationId && window.ApiService) {
          window.ApiService.getMenuItemDetail(mockupState.selectedLocationId, item.id)
            .then((detail) => {
              if (!detail || !detail.menuSubItemGroups || detail.menuSubItemGroups.length === 0) {
                detail = { menuItemId: item.id, name: item.name, price: item.price, menuSubItemGroups: [], menuSubItemModifyPrices: [], includedSubItemsBeforeCharges: 1 };
              } else {
                detail.menuSubItemGroups.forEach(g => { if (g.groupPrices) g.groupPrices = g.groupPrices.filter(p => !p.menuSubItem || p.menuSubItem.isActive !== false); });
              }
              mockupState.selectedItemDetail = detail;
              applyDefaultSelections(detail);
              persistAllState();
            })
            .catch(() => {
              mockupState.selectedItemDetail = { menuItemId: item.id, name: item.name, price: item.price, menuSubItemGroups: [], menuSubItemModifyPrices: [], includedSubItemsBeforeCharges: 1 };
              applyDefaultSelections(mockupState.selectedItemDetail);
              persistAllState();
            })
            .finally(() => { renderPage(); });
        } else {
          // No API id — use empty customization and re-render
          mockupState.selectedItemDetail = { menuItemId: 0, name: item.name, price: item.price, menuSubItemGroups: [], menuSubItemModifyPrices: [], includedSubItemsBeforeCharges: 1 };
          applyDefaultSelections(mockupState.selectedItemDetail);
          persistAllState();
        }
      }
    }
  }

  renderPage();
});

// api.js dispatches this on any request that comes back 401, from any page —
// this is the single place that reacts, so every expiry path (idle timeout,
// a stale token, a request the server rejected) ends up at the same
// sign-in.html?reason=expired redirect instead of each caller handling it
// (or not) on its own.
let sessionExpiredHandled = false;
window.addEventListener("auth-expired", () => {
  if (sessionExpiredHandled || !mockupState.isLoggedIn) return;
  sessionExpiredHandled = true;
  // notifyServer: false — the token that just 401'd is already dead server-side.
  signOutUser({ notifyServer: false, reason: "expired" });
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
    // notifyServer: true — the token is still valid at this point, this is a
    // deliberate idle logout, so tell the server to invalidate it for real.
    signOutUser({ notifyServer: true, reason: "expired" });
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
                <div class="bg-white w-[92%] max-w-[380px] rounded-[32px] p-6 relative shadow-2xl ${mockupState.lastModalOpen === mockupState.modalOpen ? "" : "animate-[slideUp_0.3s_ease-out]"}">
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

// Handle back/forward cache (bfcache) restoration to clear loading state and guard empty cart pages
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    mockupState.isLoading = false;
    persistAllState();
    if ((currentPage === "checkout" || currentPage === "checkout-rewards" || currentPage === "cart") && (!mockupState.cart || mockupState.cart.length === 0)) {
      if (mockupState.lastOrder || currentPage === "checkout" || currentPage === "checkout-rewards") {
        window.location.replace(
          mockupState.selectedLocationId
            ? `menu.html?store=${mockupState.selectedLocationId}`
            : "menu.html",
        );
        return;
      }
    }
    renderPage();
  }
});

// Global scroll-to-top button handler
window.addEventListener(
  "scroll",
  () => {
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
  },
  { passive: true },
);

// =============================================================================
// SHARED MODIFIER RENDERING FUNCTIONS (ALT2)
// =============================================================================

function _alt2ModSectionHeader(label, subtitle, iconClass, onClickAction = "") {
  const iconHtml = iconClass.startsWith('<') ? iconClass : `<i class="${iconClass} text-[#623696] text-xl"></i>`;
  return `
    <div class="flex items-center gap-4 mb-2 ${onClickAction ? 'cursor-pointer group' : ''}" ${onClickAction ? `onclick="${onClickAction}"` : ''}>
        <div class="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
            ${iconHtml}
        </div>
        <div class="flex-1 flex flex-col justify-center">
            <div class="flex items-center gap-2">
                <span class="text-sm font-black text-[#1f0b35] uppercase tracking-widest">${label}</span>
                ${label === 'INCLUDED IN DRINK' ? '<i class="fa-solid fa-circle-info text-[10px] text-violet-400"></i>' : ''}
            </div>
            ${subtitle ? `<span class="text-xs font-bold text-violet-600">${subtitle}</span>` : ''}
        </div>
        ${onClickAction ? `<div class="flex items-center gap-2 pr-2"><span class="text-[10px] font-black text-violet-500/70 uppercase tracking-widest transition-colors group-hover:text-violet-600">${mockupState.alt2AccordionOpen ? 'CLOSE' : 'SELECT'}</span><i class="fa-solid fa-chevron-right text-gray-400 text-sm shrink-0 transition-transform group-hover:translate-x-1 ${mockupState.alt2AccordionOpen ? 'rotate-90' : ''}"></i></div>` : ''}
    </div>
  `;
}

function _alt2RenderSegmentedControl(group, sels) {
  const gid = group.menuSubItemGroupId || group.subMenuChoiceId;
  const isChoice = !!group.subMenuChoiceId;
  const prices = isChoice ? (group.subItems || []) : (group.groupPrices || []).slice().sort((a, b) => (a.position || 0) - (b.position || 0));
  
  // Use a string 'choice_gid' for subMenuChoices
  const queryGid = isChoice ? `choice_${gid}` : gid;
  
  const isCupOption = (group.displayName || group.groupName || "").toLowerCase().includes("cup");
  if (isCupOption) {
      const hasOneCup = prices.some(p => {
          const sub = isChoice ? p : (p.menuSubItem || {});
          return (sub.name || "").includes("1 Cup");
      });
      if (!hasOneCup) {
          prices.unshift({
             price: 0,
             menuSubItemId: "default_cup_" + gid,
             menuSubItem: {
                 name: "1 Cup",
                 menuSubItemId: "default_cup_" + gid
             }
          });
      }
  }
  
  let selectedId = Object.keys(sels[queryGid]?.items || {})[0];
  
  // If nothing is selected for a cup option, default to 1 Cup visually
  if (isCupOption && !selectedId) {
      selectedId = "default_cup_" + gid;
  }
  
  const pills = prices.map(p => {
    const sub = isChoice ? p : (p.menuSubItem || {});
    const name = sub.name || "";
    const isSelected = String(sub.menuSubItemId) === String(selectedId);
    const safeName = name.replace(/'/g, "\\'");
    const price = isChoice ? (sub.price || 0) : (p.price || 0);
    const priceTag = price > 0 ? ` (+$${price.toFixed(2)})` : (name.includes('1 Cup') ? ' (Included)' : '');
    
    // Pass queryGid inside quotes for string keys
    const selectArg = isChoice ? `'${queryGid}'` : gid;
    
    return `<button
        onclick="window._selectSubItem(${selectArg}, '${sub.menuSubItemId}', ${sub.itemTypeId || 2}, '${safeName}', ${price}, true)"
        class="flex-1 py-2 text-[11px] md:text-xs font-bold transition-all border-r border-violet-100 last:border-r-0 whitespace-nowrap px-2
               ${isSelected ? "bg-[#623696] text-white" : "bg-violet-50/50 text-[#623696] hover:bg-violet-100"}">
        ${name}${priceTag}
    </button>`;
  }).join("");
  
  return `
    <div class="ml-16 mb-3">
        <div class="flex w-full rounded-xl overflow-hidden border border-violet-100 shadow-sm">
            ${pills}
        </div>
    </div>
  `;
}

/**
 * "WHAT'S INCLUDED" section (customize.html): inline Keep/Remove pills per default
 * ingredient. Keep shows the Extra Toppings pill row directly. Remove shows a
 * Substitute With pill row (single-select, net swap pricing from
 * menuSubItemModifyPrices.addPrice) styled the same as Extra Toppings, stacked
 * directly above it — both rows stay visible together so a substitute and extra
 * toppings can be picked in the same view.
 */
function _alt2RenderIncluded(modifyPrices, stepperGroups, sels, modSels, detail) {
  const defaultItems = (modifyPrices || []).filter((m) => m.isDefaultItem);

  const includedRowsHTML = defaultItems
    .map((mp) => {
      const defaultId = mp.menuSubItemId;
      const name = mp.menuSubItem?.name || mp.name || `Item ${defaultId}`;
      const slot = modSels[defaultId];
      const thisIsRemoved = !!slot?.removed;
      const keepOnclick = thisIsRemoved
        ? `window._toggleModifyRemove(${defaultId}); window.updateMockupState('_lastUpdated', Date.now());`
        : "";
      const keepRemoveRow = `
      <div class="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0 gap-4">
          <div class="flex items-center gap-2">
              <span class="text-sm font-black text-gray-800 uppercase tracking-tight ${thisIsRemoved ? "line-through text-gray-400" : ""}">${name}</span>
              <div class="w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${thisIsRemoved ? "bg-red-100" : "bg-emerald-100"}">
                  <i class="fa-solid ${thisIsRemoved ? "fa-right-left text-red-600" : "fa-check text-emerald-600"} text-[9px]"></i>
              </div>
          </div>
          <div class="flex rounded-full border border-gray-200 overflow-hidden shrink-0">
              <button type="button" onclick="${keepOnclick}"
                  class="px-5 py-1.5 text-[11px] font-black uppercase tracking-wider transition-all active:scale-95
                         ${!thisIsRemoved ? "bg-[#623696] text-white" : "bg-white text-gray-400 hover:text-gray-600"}">
                  Keep
              </button>
              <button type="button" onclick="window._toggleModifyRemove(${defaultId}); window.updateMockupState('_lastUpdated', Date.now());"
                  class="px-5 py-1.5 text-[11px] font-black uppercase tracking-wider transition-all active:scale-95 border-l border-gray-200
                         ${thisIsRemoved ? "bg-rose-500 text-white" : "bg-white text-gray-400 hover:text-gray-600"}">
                  Remove
              </button>
          </div>
      </div>`;

      let subRow = "";
      if (thisIsRemoved) {
        const subItems = (modifyPrices || []).filter(
          (m) => !m.isDefaultItem && (!m.menuSubItem || m.menuSubItem.isActive !== false),
        );
        if (subItems.length > 0) {
          const subPills = subItems
            .map((sMp) => {
              const sName = sMp.menuSubItem?.name || sMp.name || `Item ${sMp.menuSubItemId}`;
              const sPrice = sMp.addPrice || 0;
              const isSelected = String(sMp.menuSubItemId) === String(slot?.sub?.menuSubItemId);
              const priceTag = sPrice > 0 ? ` +$${sPrice.toFixed(2)}` : " Free";
              return `<button type="button" onclick="window._toggleModifySub(${defaultId}, ${sMp.menuSubItemId}); window.updateMockupState('_lastUpdated', Date.now());"
                    class="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide transition-all active:scale-95 whitespace-nowrap
                           ${
                             isSelected
                               ? "bg-[#623696] text-white shadow-[0_4px_12px_rgba(98,54,150,0.35)]"
                               : "bg-violet-50 border border-violet-200 text-violet-600 hover:border-violet-400 hover:bg-violet-100"
                           }">
                    ${sName}${priceTag}
                    ${isSelected ? '<span class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><i class="fa-solid fa-check text-[10px] text-emerald-600"></i></span>' : ""}
                </button>`;
            })
            .join("");
          subRow = `
          <div class="ml-4 mb-3 mt-2 pl-4 border-l-2 border-violet-100">
              <span class="text-xs font-black text-[#623696] uppercase tracking-widest block">Substitute for ${name}</span>
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">Choose 1 substitute</p>
              <div class="flex flex-wrap gap-2">${subPills}</div>
          </div>`;
        }
      }

      return keepRemoveRow + subRow;
    })
    .join("");

  // Extra Toppings pool — always shown; when an ingredient is removed, the
  // Substitute With row is pushed above it, but this row stays visible too.
  // Each groupPrice's own menuSubItemGroup.maxSelect governs how many of that
  // topping can be added — this menu's Extra Toppings groups set maxSelect well
  // above 1 (quantity-capable per the API), so this renders as a qty stepper
  // per item rather than an on/off pill.
  const toppingItems = [];
  (stepperGroups || []).forEach((group) => {
    const gid = group.menuSubItemGroupId;
    const maxSel = group.maxSelect || 99;
    (group.groupPrices || []).forEach((p) => toppingItems.push({ gid, p, maxSel }));
  });
  let toppingsLabel = "";
  let toppingsSubtitle = "";
  let toppingsPills = "";
  if (toppingItems.length > 0) {
    toppingsLabel = "Extra Toppings";
    toppingsSubtitle = "Add as many as you'd like (optional)";
    toppingsPills = toppingItems
      .map(({ gid, p, maxSel }) => {
        const sub = p.menuSubItem || {};
        const name = sub.name || "";
        const price = p.price || 0;
        const fmtPrice = price > 0 ? `+$${price.toFixed(2)}` : "Free";
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
                <button type="button" onclick="window._adjustSubItemQty(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, -1)"
                    class="w-7 h-7 rounded-full border transition-all active:scale-90 flex items-center justify-center text-xs
                           ${qty > 0 ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-red-50 hover:border-red-300 hover:text-red-500" : "border-gray-100 bg-gray-50 text-gray-300 cursor-default"}">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class="font-black text-gray-900 w-5 text-center text-sm">${qty}</span>
                <button type="button" onclick="window._adjustSubItemQty(${gid}, ${p.menuSubItemId}, ${sub.itemTypeId || 2}, '${safeName}', ${price}, 1)"
                    class="w-7 h-7 rounded-full border transition-all active:scale-90 flex items-center justify-center text-xs
                           ${canAdd ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600" : "border-gray-100 bg-gray-50 text-gray-300 cursor-default"}">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>`;
      })
      .join("");
  }

  if (defaultItems.length === 0) {
    // No removable default ingredient on this item — give the toppings row its own
    // icon header instead of nesting it under "What's Included".
    if (!toppingsPills) return "";
    return `
    ${_alt2ModSectionHeader(toppingsLabel.toUpperCase(), toppingsSubtitle, "fa-solid fa-plus")}
    <div class="ml-16 mb-3">${toppingsPills}</div>
  `;
  }

  const toppingsHTML = toppingsPills
    ? `
        <div class="py-2">
            ${_alt2ModSectionHeader(toppingsLabel.toUpperCase(), toppingsSubtitle, "fa-solid fa-plus")}
            <div class="ml-16 mb-3">${toppingsPills}</div>
        </div>`
    : "";

  const dividerHTML = toppingsHTML
    ? `<div class="ml-16 mb-3 border-t border-violet-100"></div>`
    : "";

  return `
    ${_alt2ModSectionHeader("WHAT'S INCLUDED", "", "fa-solid fa-list-check")}
    <div class="ml-16 mb-3">${includedRowsHTML}</div>
    ${dividerHTML}
    ${toppingsHTML}
  `;
}

function renderAllModifierSectionsAlt2(detail, sels, modSels, colLayout) {
  if (!detail) return "";
  let html = '<div class="space-y-0 divide-y divide-gray-100/50">';

  // Stepper Groups (real Extra Toppings pricing data — needed by the Included section below)
  const groups = (detail?.menuSubItemGroups || []).filter(g => g.isActive !== false);

  const isSegmented = (g) => {
      const name = (g.displayName || g.groupName || "").toLowerCase();
      if (name.includes("ice") || name.includes("cup") || name.includes("sugar") || name.includes("sweet")) return true;
      return (g.maxSelect || 1) === 1;
  };

  const stepperGroups = groups.filter(g => !isSegmented(g));
  const radioGroups = groups.filter(g => isSegmented(g));

  // Included Items: Keep/Remove + Extra Toppings (kept) / Substitute With (removed)
  const modifyPrices = (detail?.menuSubItemModifyPrices || []).filter(m => m.isActive !== false);
  if (modifyPrices.length > 0 || stepperGroups.length > 0) {
      const includedHtml = _alt2RenderIncluded(modifyPrices, stepperGroups, sels, modSels, detail);
      if (includedHtml) {
          html += `<div class="py-2">
        ${includedHtml}
      </div>`;
      }
  }

  // Radio Groups (Segmented Controls)
  const subMenuChoices = detail?.subMenuChoices || [];
  
  // Render subMenuChoices as segmented controls
  for (const choice of subMenuChoices) {
      // A choice with only one (or zero) selectable sub-item isn't a real choice —
      // it's a fixed attribute of the drink. Skip rendering it.
      if ((choice.subItems || []).length <= 1) continue;
      const gid = `choice_${choice.subMenuChoiceId}`;
      const selectedId = Object.keys(sels[gid]?.items || {})[0];
      const selectedSub = choice.subItems?.find(s => String(s.menuSubItemId) === String(selectedId));
      const subtitle = selectedSub ? selectedSub.name : '';
      let icon = 'fa-solid fa-check-circle';
      const nameMatch = _groupIcon(choice.displayName || choice.name || "").match(/fa-[a-z-]+/);
      if (nameMatch) icon = nameMatch[0];
      
      html += `<div class="py-2">
        ${_alt2ModSectionHeader(choice.displayName || choice.name || "Choose", subtitle, icon)}
        ${_alt2RenderSegmentedControl(choice, sels)}
      </div>`;
  }
  
  // Render radioGroups as segmented controls
  for (const g of radioGroups) {
      // A group with only one (or zero) selectable option isn't a real choice —
      // it's a fixed attribute of the drink. Skip rendering it. Exception: Cup
      // Option groups (e.g. "Split Cup") always get a synthetic "1 Cup" baseline
      // from _alt2RenderSegmentedControl, so one active paid option there is
      // still a real two-way choice and must not be dropped.
      const isCupGroup = (g.displayName || g.groupName || "").toLowerCase().includes("cup");
      if (!isCupGroup && (g.groupPrices || []).length <= 1) continue;
      if (isCupGroup && (g.groupPrices || []).length === 0) continue;
      const gid = g.menuSubItemGroupId;
      const selectedId = Object.keys(sels[gid]?.items || {})[0];
      const selectedPrice = g.groupPrices?.find(p => String(p.menuSubItemId) === String(selectedId));
      const subtitle = selectedPrice?.menuSubItem?.name || '';
      
      let icon = 'fa-solid fa-check-circle';
      const name = (g.displayName || g.groupName || "").toLowerCase();
      if (name.includes('sugar') || name.includes('sweet')) icon = 'fa-solid fa-spoon';
      else if (name.includes('ice')) icon = 'fa-solid fa-cube';
      else if (name.includes('cup')) icon = _groupIcon('cup').replace('w-4 h-4', 'text-[#623696] w-6 h-6');
      else if (name.includes('size')) icon = 'fa-solid fa-maximize';
      
      html += `<div class="py-2">
        ${_alt2ModSectionHeader(g.displayName || g.groupName || "Options", subtitle, icon)}
        ${_alt2RenderSegmentedControl(g, sels)}
      </div>`;
  }
  
  // Flat sub-items (Add-Ons)
  const activeSubItems = (detail?.menuSubItems || []).filter(s => s.isActive !== false);
  if (activeSubItems.length > 0) {
      html += `<div class="py-2">
        ${_alt2ModSectionHeader("Add-Ons", "", "fa-solid fa-sparkles")}
        <div class="ml-16 mb-3 pl-4 border-l-2 border-violet-100">
            ${_renderFlatSubItemSection(activeSubItems, sels)}
        </div>
      </div>`;
  }

  // Special Instructions
  if (detail && !detail.disableSpecialInstruction) {
      html += `<div class="py-2">
        ${_alt2ModSectionHeader('SPECIAL INSTRUCTIONS <span class="text-[9px] text-gray-400 ml-2 font-medium normal-case tracking-normal">(Max 50 characters)</span>', "Please let us know any special instruction(s)", 'fa-solid fa-pen')}
        <div class="ml-16 mb-2">
            <textarea id="special-instruction-input" maxlength="50" placeholder="Ex. No Pickles and No Onions, etc." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20 transition-colors">${mockupState._specialInstruction || ""}</textarea>
        </div>
      </div>`;
  }

  html += '</div>';
  return html;
}
