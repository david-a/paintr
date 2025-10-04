# מחשבון מחירי צביעה - בית שאן

מחשבון מחירי צביעה מקצועי לאזור בית שאן והסביבה. אפליקציה סטטית מודרנית עם ממשק משתמש מותאם למובייל.

## תכונות

- 🎨 מחשבון מחירים מדויק עם כל האפשרויות
- 📱 עיצוב מותאם למובייל (Mobile-First)
- 🗺️ אוטוקומפליט לערים בישראל
- 📧 אינטגרציה עם Formspree לשליחת פניות
- 🎯 ממשק משתמש אינטואיטיבי ומהיר
- 🔧 מחירים ניתנים לעריכה בקלות
- 🌐 תמיכה ב-API חיצוני לחישוב מרחקים מדויקים (Google, OpenRouteService, Mapbox)

## התקנה והפעלה

### 1. הכנת Formspree

1. היכנס ל-[Formspree.io](https://formspree.io)
2. צור חשבון חדש או התחבר
3. צור טופס חדש
4. העתק את ה-Form ID
5. פתח את `index.html` והחלף את `YOUR_FORM_ID` ב-Form ID שלך

```html
<form
  id="contactForm"
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
></form>
```

### 2. הגדרת API לחישוב מרחקים (אופציונלי)

לחישוב מרחקים מדויקים יותר, ניתן להשתמש ב-API חיצוני:

1. **Google Distance Matrix API** (מומלץ) - מדויק ביותר
2. **OpenRouteService** - חינמי עד 2000 בקשות ביום
3. **Mapbox** - חינמי עד 100,000 בקשות בחודש

ראה `API_SETUP.md` לפרטים מלאים.

### 3. העלאה לשרת סטטי

#### GitHub Pages

1. צור repository חדש ב-GitHub
2. העלה את הקבצים:
   - `index.html`
   - `styles.css`
   - `script.js`
3. עבור ל-Settings > Pages
4. בחר Source: Deploy from a branch
5. בחר branch: main
6. לחץ Save

#### Netlify

1. היכנס ל-[Netlify](https://netlify.com)
2. גרור את התיקייה לקטע "Deploy manually"
3. או חבר ל-GitHub repository

#### Vercel

1. היכנס ל-[Vercel](https://vercel.com)
2. Import Project
3. חבר ל-GitHub repository

## עריכת מחירים

כל המחירים מוגדרים כקבועים בתחילת קובץ `script.js`:

```javascript
const PRICING = {
  BASE_ROOM: 500, // מחיר בסיס לחדר (עד 12 מ״ר)
  CEILING_PER_ROOM: 100, // צביעת תקרה לחדר
  PLASTER_PER_ROOM: 100, // תיקוני שפכטל לחדר
  SANDING_PER_ROOM: 250, // שיוף מקדים לחדר
  // ... ועוד
};
```

## מבנה הפרויקט

```
paintr/
├── index.html              # עמוד ראשי
├── styles.css              # עיצוב וסטיילים
├── script.js               # לוגיקת המחשבון
├── test.html               # בדיקת חישובים
├── example-api-usage.html  # דוגמה לשימוש ב-API
├── API_SETUP.md            # מדריך הגדרת API
└── README.md               # מדריך זה
```

## תכונות טכניות

- **RTL Support**: תמיכה מלאה בעברית
- **Mobile-First**: עיצוב מותאם למובייל
- **Accessibility**: נגישות מלאה
- **Performance**: טעינה מהירה ללא תלות חיצונית
- **SEO**: מטא-תגים מותאמים

## תמיכה בדפדפנים

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers

## רישיון

פרויקט זה זמין לשימוש חופשי.

## תמיכה

לשאלות או בעיות, צור קשר דרך הטופס באתר.
