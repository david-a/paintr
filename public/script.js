// Pricing Constants - Easy to modify
const PRICING = {
  BASE_ROOM: 500, // Base price per room (up to 12 sqm)
  CEILING_PER_ROOM: 100, // Ceiling painting per room
  PLASTER_PER_ROOM: 100, // Plaster repairs per room
  SANDING_PER_ROOM: 250, // Sanding/additional layers per room
  SPECIAL_COLOR_NOTE: true, // Special color adds note (price varies by paint cost)

  // Location pricing (distance from Beit Shean)
  LOCATION: {
    BASE_DISTANCE: 10, // km - no extra charge
    MEDIUM_DISTANCE: 30, // km - 50 NIS extra
    MEDIUM_EXTRA: 50, // NIS extra for 10-30km
    PER_30KM: 70, // NIS extra per 30km beyond 30km
    MAX_DISTANCE: 200, // km - maximum service area
  },
};

// Israeli cities and towns for autocomplete
const ISRAELI_CITIES = [
  "בית שאן",
  "נצרת",
  "טבריה",
  "עפולה",
  "נהריה",
  "צפת",
  "כרמיאל",
  "נצרת עילית",
  "עכו",
  "מגדל העמק",
  "יקנעם",
  "מעלות-תרשיחא",
  "קריית שמונה",
  "מעלות",
  "תרשיחא",
  "חיפה",
  "נשר",
  "קריית ביאליק",
  "קריית ים",
  "קריית מוצקין",
  "קריית אתא",
  "תל אביב-יפו",
  "רמת גן",
  "גבעתיים",
  "פתח תקווה",
  "ראשון לציון",
  "חולון",
  "בת ים",
  "אילת",
  "דימונה",
  "ערד",
  "באר שבע",
  "אופקים",
  "קרית גת",
  "אשקלון",
  "אשדוד",
  "רחובות",
  "רמלה",
  "לוד",
  "יהוד-מונוסון",
  "אור יהודה",
  "קרית אונו",
  "גבעת שמואל",
  "כפר סבא",
  "הוד השרון",
  "רעננה",
  "הרצליה",
  "רמת השרון",
  "ירושלים",
  "בית שמש",
  "מעלה אדומים",
  "מבשרת ציון",
  "גבעת זאב",
  "אבו גוש",
  "נס ציונה",
  "יבנה",
  "גדרה",
  "קרית מלאכי",
  "שדרות",
  "נתיבות",
  "אופקים",
  "דימונה",
  "ערד",
  "באר שבע",
  "אילת",
  "מצפה רמון",
  "ירוחם",
  "עומר",
  "להבים",
];

// Distance calculations from Beit Shean (approximate)
// This is a fallback cache for when API is not available
const DISTANCE_CACHE = {
  "בית שאן": 0,
  // נצרת: 25,
  // טבריה: 35,
  // עפולה: 20,
  // נהריה: 45,
  // צפת: 50,
  // כרמיאל: 40,
  // "נצרת עילית": 25,
  // עכו: 50,
  // "מגדל העמק": 15,
  // יקנעם: 25,
  // "מעלות-תרשיחא": 45,
  // "קריית שמונה": 55,
  // מעלות: 45,
  // תרשיחא: 45,
  // חיפה: 60,
  // נשר: 60,
  // "קריית ביאליק": 60,
  // "קריית ים": 60,
  // "קריית מוצקין": 60,
  // "קריית אתא": 60,
  // "תל אביב-יפו": 90,
  // "רמת גן": 90,
  // גבעתיים: 90,
  // "פתח תקווה": 85,
  // "ראשון לציון": 95,
  // חולון: 95,
  // "בת ים": 95,
  // אילת: 200,
  // דימונה: 120,
  // ערד: 100,
  // "באר שבע": 110,
  // אופקים: 120,
  // "קרית גת": 100,
  // אשקלון: 110,
  // אשדוד: 105,
  // רחובות: 95,
  // רמלה: 90,
  // לוד: 90,
  // "יהוד-מונוסון": 85,
  // "אור יהודה": 85,
  // "קרית אונו": 85,
  // "גבעת שמואל": 85,
  // "כפר סבא": 80,
  // "הוד השרון": 80,
  // רעננה: 80,
  // הרצליה: 85,
  // "רמת השרון": 85,
  // ירושלים: 100,
  // "בית שמש": 95,
  // "מעלה אדומים": 100,
  // "מבשרת ציון": 100,
  // "גבעת זאב": 100,
  // "אבו גוש": 100,
  // "נס ציונה": 95,
  // יבנה: 100,
  // גדרה: 105,
  // "קרית מלאכי": 110,
  // שדרות: 120,
  // נתיבות: 120,
  // "מצפה רמון": 150,
  // ירוחם: 130,
  // עומר: 110,
  // להבים: 120,
};

// API Configuration
const API_CONFIG = {
  // Google Distance Matrix API (requires API key)
  GOOGLE_API_KEY: "", // Add your Google API key here
  GOOGLE_DISTANCE_API:
    "https://maps.googleapis.com/maps/api/distancematrix/json",

  // OpenRouteService API (free tier available)
  ORS_API_KEY:
    "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjUzYmFkYmQ3NTQ1NTQyNjBhODViNjYxZTkxOWQ5MmJmIiwiaCI6Im11cm11cjY0In0=", // Add your ORS API key here
  ORS_DISTANCE_API:
    "https://api.openrouteservice.org/v2/directions/driving-car",

  // MapBox API (free tier available)
  MAPBOX_API_KEY: "", // Add your Mapbox API key here
  MAPBOX_DISTANCE_API:
    "https://api.mapbox.com/directions-matrix/v1/mapbox/driving",

  // Use API instead of cache
  USE_API: true, // Set to true to enable API calls
  API_PROVIDER: "ors", // 'google', 'ors', or 'mapbox'
};

// Beit Shean coordinates
const BEIT_SHEAN_COORDS = {
  lat: 32.496579,
  lng: 35.496566,
  address: "בית שאן, ישראל",
};

// DOM Elements
let calculatorForm, contactForm, locationInput, suggestionsDiv;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeElements();
  setupEventListeners();
  updateCalculation();
});

function initializeElements() {
  calculatorForm = document.getElementById("calculatorForm");
  contactForm = document.getElementById("contactForm");
  locationInput = document.getElementById("location");
  suggestionsDiv = document.getElementById("locationSuggestions");
}

function setupEventListeners() {
  // Calculator form changes (excluding location input to prevent premature loading state)
  calculatorForm.addEventListener("input", function (event) {
    if (event.target.id !== "location") {
      updateCalculation();
    }
  });
  calculatorForm.addEventListener("change", function (event) {
    if (event.target.id !== "location") {
      updateCalculation();
    }
  });

  // Radio button changes for custom inputs
  setupRadioListeners();

  // Location autocomplete
  setupLocationAutocomplete();

  // Contact form submission
  contactForm.addEventListener("submit", handleContactFormSubmit);
}

function setupRadioListeners() {
  // Ceiling radio buttons
  document.querySelectorAll('input[name="ceiling"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const customDiv = document.getElementById("ceilingCustom");
      customDiv.style.display = this.value === "custom" ? "block" : "none";
      updateCalculation();
    });
  });

  // Plaster radio buttons
  document.querySelectorAll('input[name="plaster"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const customDiv = document.getElementById("plasterCustom");
      customDiv.style.display = this.value === "custom" ? "block" : "none";
      updateCalculation();
    });
  });

  // Sanding radio buttons
  document.querySelectorAll('input[name="sanding"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const customDiv = document.getElementById("sandingCustom");
      customDiv.style.display = this.value === "custom" ? "block" : "none";
      updateCalculation();
    });
  });

  // Special color radio buttons
  document.querySelectorAll('input[name="specialColor"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const customDiv = document.getElementById("specialColorCustom");
      customDiv.style.display = this.value === "custom" ? "block" : "none";
      updateCalculation();
    });
  });
}

function setupLocationAutocomplete() {
  locationInput.addEventListener("input", function () {
    const query = this.value.trim();
    if (query.length < 2) {
      suggestionsDiv.style.display = "none";
      return;
    }

    const filtered = ISRAELI_CITIES.filter((city) => city.includes(query));

    if (filtered.length > 0) {
      showSuggestions(filtered);
    } else {
      suggestionsDiv.style.display = "none";
    }
  });

  locationInput.addEventListener("blur", function () {
    // Delay hiding suggestions to allow clicking
    setTimeout(() => {
      suggestionsDiv.style.display = "none";
    }, 200);
  });

  locationInput.addEventListener("focus", function () {
    if (this.value.trim().length >= 2) {
      const query = this.value.trim();
      const filtered = ISRAELI_CITIES.filter((city) => city.includes(query));
      if (filtered.length > 0) {
        showSuggestions(filtered);
      }
    }
  });

  // Add change event to trigger API call when location is selected
  locationInput.addEventListener("change", function () {
    const location = this.value.trim();
    if (location) {
      updateDistanceFromAPI(location);
    }
  });

  // Add blur event to trigger API call when user finishes typing and leaves the field
  locationInput.addEventListener("blur", function () {
    const location = this.value.trim();
    if (location && !suggestionsDiv.contains(document.activeElement)) {
      updateDistanceFromAPI(location);
    }
  });
}

function showSuggestions(cities) {
  suggestionsDiv.innerHTML = "";
  cities.slice(0, 8).forEach((city) => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.textContent = city;
    item.addEventListener("click", function () {
      locationInput.value = city;
      suggestionsDiv.style.display = "none";
      // Trigger API call for the selected city (this will also update calculation)
      updateDistanceFromAPI(city);
    });
    suggestionsDiv.appendChild(item);
  });
  suggestionsDiv.style.display = "block";
}

// Counter button functions
function changeRooms(delta) {
  const input = document.getElementById("rooms");
  const currentValue = parseFloat(input.value) || 1;
  const newValue = Math.max(0.5, Math.min(20, currentValue + delta));
  input.value = newValue;
  updateCalculation();
}

function changeCeilingRooms(delta) {
  const input = document.getElementById("ceilingRooms");
  const currentValue = parseFloat(input.value) || 0;
  const newValue = Math.max(0, Math.min(20, currentValue + delta));
  input.value = newValue;
  updateCalculation();
}

function changePlasterRooms(delta) {
  const input = document.getElementById("plasterRooms");
  const currentValue = parseFloat(input.value) || 0;
  const newValue = Math.max(0, Math.min(20, currentValue + delta));
  input.value = newValue;
  updateCalculation();
}

function changeSandingRooms(delta) {
  const input = document.getElementById("sandingRooms");
  const currentValue = parseFloat(input.value) || 0;
  const newValue = Math.max(0, Math.min(20, currentValue + delta));
  input.value = newValue;
  updateCalculation();
}

function changeSpecialColorRooms(delta) {
  const input = document.getElementById("specialColorRooms");
  const currentValue = parseFloat(input.value) || 0;
  const newValue = Math.max(0, Math.min(20, currentValue + delta));
  input.value = newValue;
  updateCalculation();
}

// Main calculation function
function updateCalculation(showLoading = false) {
  console.log("updateCalculation() called");
  const formData = new FormData(calculatorForm);

  // Get basic room count
  const rooms = parseFloat(formData.get("rooms")) || 1;

  // Calculate ceiling rooms
  const ceilingValue = formData.get("ceiling");
  let ceilingRooms = 0;
  if (ceilingValue === "all") {
    ceilingRooms = rooms;
  } else if (ceilingValue === "custom") {
    ceilingRooms = parseFloat(formData.get("ceilingRooms")) || 0;
  }

  // Calculate plaster rooms
  const plasterValue = formData.get("plaster");
  let plasterRooms = 0;
  if (plasterValue === "all") {
    plasterRooms = rooms;
  } else if (plasterValue === "custom") {
    plasterRooms = parseFloat(formData.get("plasterRooms")) || 0;
  }

  // Calculate sanding rooms
  const sandingValue = formData.get("sanding");
  let sandingRooms = 0;
  if (sandingValue === "all") {
    sandingRooms = rooms;
  } else if (sandingValue === "custom") {
    sandingRooms = parseFloat(formData.get("sandingRooms")) || 0;
  }

  // Calculate special color rooms
  const specialColorValue = formData.get("specialColor");
  let specialColorRooms = 0;
  if (specialColorValue === "all") {
    specialColorRooms = rooms;
  } else if (specialColorValue === "custom") {
    specialColorRooms = parseFloat(formData.get("specialColorRooms")) || 0;
  }

  // Calculate base price
  let totalPrice = rooms * PRICING.BASE_ROOM;
  totalPrice += ceilingRooms * PRICING.CEILING_PER_ROOM;
  totalPrice += plasterRooms * PRICING.PLASTER_PER_ROOM;
  totalPrice += sandingRooms * PRICING.SANDING_PER_ROOM;

  // Add location surcharge
  const location = formData.get("location") || "";
  const locationSurcharge = calculateLocationSurcharge(location);
  console.log(`Location: ${location}, Surcharge: ${locationSurcharge}`);
  totalPrice += locationSurcharge;

  // Calculate total square meters (rooms * 12 sqm)
  const totalSqm = rooms * 12;

  // Generate special notes
  const notes = generateSpecialNotes(specialColorRooms, locationSurcharge);

  // Update display
  console.log(
    `Updating display - Total Price: ₪${totalPrice.toLocaleString()}, SQM: ${totalSqm}`
  );

  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = `₪${totalPrice.toLocaleString()}`;

  // Apply loading state if needed
  if (showLoading) {
    totalPriceElement.classList.add("price-loading");
  } else {
    totalPriceElement.classList.remove("price-loading");
  }

  document.getElementById("totalSqm").textContent = `${totalSqm} מ״ר`;

  const notesElement = document.getElementById("specialNotes");
  const notesTextElement = document.getElementById("notesText");

  if (notes.length > 0) {
    notesTextElement.textContent = notes;
    notesElement.style.display = "block";
  } else {
    notesElement.style.display = "none";
  }

  // Update hidden form data for contact form
  updateCalculationData({
    rooms,
    ceilingRooms,
    plasterRooms,
    sandingRooms,
    specialColorRooms,
    location,
    totalPrice,
    totalSqm,
    locationSurcharge,
    notes,
  });
}

// Distance calculation with API support
async function calculateDistance(location) {
  if (!location) return 0;

  // First check cache
  if (DISTANCE_CACHE[location] !== undefined) {
    return DISTANCE_CACHE[location];
  }

  // If API is enabled, try to get real distance
  if (API_CONFIG.USE_API) {
    try {
      const distance = await getDistanceFromAPI(location);
      if (distance > 0) {
        // Cache the result
        DISTANCE_CACHE[location] = distance;
        return distance;
      }
    } catch (error) {
      console.warn("API call failed, using fallback:", error);
    }
  }

  // Fallback to cache or return 0
  return DISTANCE_CACHE[location] || 0;
}

// API calls for distance calculation
async function getDistanceFromAPI(location) {
  const provider = API_CONFIG.API_PROVIDER;

  switch (provider) {
    case "google":
      return await getGoogleDistance(location);
    case "ors":
      return await getORSDistance(location);
    case "mapbox":
      return await getMapboxDistance(location);
    default:
      throw new Error("Unknown API provider");
  }
}

// Google Distance Matrix API
async function getGoogleDistance(location) {
  if (!API_CONFIG.GOOGLE_API_KEY) {
    throw new Error("Google API key not configured");
  }

  const origin = `${BEIT_SHEAN_COORDS.lat},${BEIT_SHEAN_COORDS.lng}`;
  const destination = `${location}, ישראל`;

  const url = `${
    API_CONFIG.GOOGLE_DISTANCE_API
  }?origins=${origin}&destinations=${encodeURIComponent(destination)}&key=${
    API_CONFIG.GOOGLE_API_KEY
  }&language=he&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "OK" && data.rows[0]?.elements[0]?.status === "OK") {
    return data.rows[0].elements[0].distance.value / 1000; // Convert meters to km
  }

  throw new Error("Google API request failed");
}

// OpenRouteService API
async function getORSDistance(location) {
  if (!API_CONFIG.ORS_API_KEY) {
    throw new Error("ORS API key not configured");
  }

  const start = [BEIT_SHEAN_COORDS.lng, BEIT_SHEAN_COORDS.lat];
  const end = await geocodeLocation(location);

  const url = `${API_CONFIG.ORS_DISTANCE_API}?api_key=${API_CONFIG.ORS_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      coordinates: [start, end],
      units: "km",
    }),
  });

  const data = await response.json();

  // Check for different possible response structures
  if (data.routes && data.routes[0]?.summary?.distance) {
    // OpenRouteService structure: routes[0].summary.distance
    const distance = data.routes[0].summary.distance;
    console.log(`✅ ORS API success: ${distance} km to ${location}`);
    return distance;
  } else if (data.features && data.features[0]?.properties?.summary?.distance) {
    // Alternative structure: features[0].properties.summary.distance
    return data.features[0].properties.summary.distance;
  } else if (
    data.features &&
    data.features[0]?.properties?.segments?.[0]?.distance
  ) {
    // Old structure: features[0].properties.segments[0].distance
    return data.features[0].properties.segments[0].distance;
  } else if (data.distance) {
    // Direct distance property
    return data.distance;
  }

  console.error("ORS API response structure not recognized:", data);

  // Fallback: calculate straight-line distance
  try {
    const endCoords = await geocodeLocation(location);
    const straightLineDistance = calculateStraightLineDistance(
      BEIT_SHEAN_COORDS.lat,
      BEIT_SHEAN_COORDS.lng,
      endCoords[1],
      endCoords[0]
    );
    console.log(
      "Using straight-line distance as fallback:",
      straightLineDistance
    );
    return straightLineDistance;
  } catch (geocodeError) {
    console.error("Geocoding also failed:", geocodeError);
    throw new Error("ORS API request failed - unexpected response structure");
  }
}

// Mapbox API
async function getMapboxDistance(location) {
  if (!API_CONFIG.MAPBOX_API_KEY) {
    throw new Error("Mapbox API key not configured");
  }

  const start = `${BEIT_SHEAN_COORDS.lng},${BEIT_SHEAN_COORDS.lat}`;
  const end = await geocodeLocation(location);

  const url = `${API_CONFIG.MAPBOX_DISTANCE_API}?sources=0&destinations=1&access_token=${API_CONFIG.MAPBOX_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      coordinates: [start, end],
    }),
  });

  const data = await response.json();

  if (data.distances && data.distances[0] && data.distances[0][0]) {
    return data.distances[0][0] / 1000; // Convert meters to km
  }

  throw new Error("Mapbox API request failed");
}

// Geocoding helper function
async function geocodeLocation(location) {
  // Simple geocoding using Nominatim (OpenStreetMap)
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    location + ", ישראל"
  )}&format=json&limit=1`;

  const response = await fetch(url);
  const data = await response.json();

  if (data && data[0]) {
    return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
  }

  throw new Error("Geocoding failed");
}

// Fallback: Calculate straight-line distance between coordinates
function calculateStraightLineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function calculateLocationSurcharge(location) {
  console.log("calculateLocationSurcharge", location);
  if (!location) return 0;
  console.log("DISTANCE_CACHE", DISTANCE_CACHE);

  // For immediate response, use cached distance
  const distance = DISTANCE_CACHE[location] || 0;

  if (distance <= PRICING.LOCATION.BASE_DISTANCE) {
    return 0; // No surcharge within 10km
  } else if (distance <= PRICING.LOCATION.MEDIUM_DISTANCE) {
    return PRICING.LOCATION.MEDIUM_EXTRA; // 50 NIS for 10-30km
  } else {
    // 70 NIS per 30km beyond 30km
    const extraDistance = distance - PRICING.LOCATION.MEDIUM_DISTANCE;
    const extraCharges = Math.ceil(extraDistance / 30);
    return (
      PRICING.LOCATION.MEDIUM_EXTRA + extraCharges * PRICING.LOCATION.PER_30KM
    );
  }
}

// Track ongoing API calls to prevent duplicates
const ongoingAPICalls = new Set();
let lastProcessedLocation = "";

// Separate async function to update distance from API
async function updateDistanceFromAPI(location) {
  if (!location || !API_CONFIG.USE_API) return;

  // Prevent duplicate API calls for the same location
  if (ongoingAPICalls.has(location) || lastProcessedLocation === location)
    return;

  ongoingAPICalls.add(location);
  lastProcessedLocation = location;

  // Show loading state immediately when starting API call
  updateCalculation(true);

  try {
    const distance = await calculateDistance(location);
    console.log(`API returned distance: ${distance} km for ${location}`);

    // Add a small delay to ensure loading state is visible
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (distance > 0) {
      // Update cache with new distance
      DISTANCE_CACHE[location] = distance;
      console.log("Updated DISTANCE_CACHE:", DISTANCE_CACHE);

      // Force recalculation with new distance (without loading state)
      updateCalculation(false);
      console.log("Called updateCalculation() after API success");
    } else {
      // If no distance returned, still update without loading state
      updateCalculation(false);
    }
  } catch (error) {
    console.warn("API call failed, using cached distance:", error);
    // Add a small delay even on error to show loading state
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Update calculation without loading state on error
    updateCalculation(false);
  } finally {
    ongoingAPICalls.delete(location);
  }
}

function generateSpecialNotes(specialColorRooms, locationSurcharge) {
  const notes = [];

  if (specialColorRooms > 0) {
    notes.push(
      `גוון/צבע מיוחד ב-${specialColorRooms} חדרים - תוספת מחיר לפי עלות הצבע`
    );
  }

  // if (locationSurcharge > 0) {
  //   notes.push(`תוספת נסיעה: ₪${locationSurcharge}`);
  // }

  return notes.join(", ");
}

function updateCalculationData(data) {
  const hiddenInput = document.getElementById("calculationData");
  hiddenInput.value = JSON.stringify(data);
}

// Contact form handling
function handleContactFormSubmit(event) {
  event.preventDefault();

  const submitButton = event.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;

  // Show loading state
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> שולח...';
  submitButton.disabled = true;

  // Submit to Formspree
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // Show success message
        contactForm.style.display = "none";
        document.getElementById("thankYou").style.display = "block";

        // Scroll to thank you message
        document.getElementById("thankYou").scrollIntoView({
          behavior: "smooth",
        });
      } else {
        throw new Error("Form submission failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("שגיאה בשליחת הטופס. אנא נסה שוב או צור קשר ישירות.");

      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    });
}

// Utility function to format numbers in Hebrew locale
function formatNumber(num) {
  return new Intl.NumberFormat("he-IL").format(num);
}

// Add some visual feedback for form interactions
document.addEventListener("DOMContentLoaded", function () {
  // Add focus effects to form inputs
  const inputs = document.querySelectorAll(".form-input, .form-textarea");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });

  // Add click effects to buttons
  const buttons = document.querySelectorAll(".btn-counter, .btn-submit");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.95)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
