# הגדרת API לחישוב מרחקים

המחשבון תומך במספר APIs לחישוב מרחקים מדויקים. הנה המדריך להגדרה:

## 1. Google Distance Matrix API (המומלץ)

### יתרונות:

- מדויק ביותר
- מהיר
- תמיכה מלאה בעברית
- נתונים עדכניים

### הגדרה:

1. היכנס ל-[Google Cloud Console](https://console.cloud.google.com/)
2. צור פרויקט חדש או בחר קיים
3. הפעל את Distance Matrix API
4. צור API key
5. הגבל את ה-API key רק ל-Distance Matrix API

### עלות:

- 5$ לכל 1000 בקשות
- 200$ קרדיט חינם לחודש הראשון

### הגדרה בקוד:

```javascript
const API_CONFIG = {
  GOOGLE_API_KEY: "YOUR_GOOGLE_API_KEY_HERE",
  USE_API: true,
  API_PROVIDER: "google",
};
```

## 2. OpenRouteService API (חינמי)

### יתרונות:

- חינמי עד 2000 בקשות ביום
- מדויק
- קל להגדרה

### הגדרה:

1. היכנס ל-[OpenRouteService](https://openrouteservice.org/)
2. צור חשבון
3. קבל API key

### הגדרה בקוד:

```javascript
const API_CONFIG = {
  ORS_API_KEY: "YOUR_ORS_API_KEY_HERE",
  USE_API: true,
  API_PROVIDER: "ors",
};
```

## 3. Mapbox API

### יתרונות:

- חינמי עד 100,000 בקשות בחודש
- מהיר
- נתונים איכותיים

### הגדרה:

1. היכנס ל-[Mapbox](https://www.mapbox.com/)
2. צור חשבון
3. קבל Access Token

### הגדרה בקוד:

```javascript
const API_CONFIG = {
  MAPBOX_API_KEY: "YOUR_MAPBOX_ACCESS_TOKEN_HERE",
  USE_API: true,
  API_PROVIDER: "mapbox",
};
```

## הגדרה מהירה

1. **בחר API** - מומלץ Google או OpenRouteService
2. **קבל API key** מהספק שבחרת
3. **ערוך את `script.js`**:

   ```javascript
   const API_CONFIG = {
     // הוסף את ה-API key שלך
     GOOGLE_API_KEY: "your-key-here",
     // או
     ORS_API_KEY: "your-key-here",
     // או
     MAPBOX_API_KEY: "your-key-here",

     // הפעל API
     USE_API: true,

     // בחר ספק
     API_PROVIDER: "google", // או 'ors' או 'mapbox'
   };
   ```

## מצב Fallback

אם ה-API לא זמין או נכשל, המחשבון ישתמש במרחקים מוגדרים מראש (cache) שנמצאים בקובץ.

## הגבלות CORS

**חשוב**: חלק מה-APIs עלולים להיות מוגבלים על ידי CORS. במקרה כזה:

1. **השתמש ב-Proxy** - הוסף proxy server
2. **השתמש ב-Backend** - צור API endpoint משלך
3. **השתמש ב-Cache** - השאר את המצב הנוכחי

## דוגמה ל-Proxy Server (Node.js)

```javascript
// proxy-server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api/google",
  createProxyMiddleware({
    target: "https://maps.googleapis.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api/google": "",
    },
  })
);

app.listen(3001);
```

## בדיקת הגדרה

1. פתח את הקונסול בדפדפן (F12)
2. הזן עיר במיקום
3. בדוק אם יש בקשות API בקונסול
4. אם יש שגיאות CORS, השתמש ב-proxy

## המלצות

- **לשימוש אישי**: OpenRouteService (חינמי)
- **לשימוש מסחרי**: Google Distance Matrix API
- **לפרויקטים גדולים**: Mapbox או Google
- **ללא הגדרה**: השאר את המצב הנוכחי (cache)
