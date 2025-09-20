# Real Estate Dashboard

A small real estate listings dashboard built with **React + TypeScript + CSS** as part of the Frontend Developer Test (Sept 17).

The project displays a list of properties with filtering, sorting, and property detail pages — all implemented **without external UI/state libraries**, focusing on clean React, TypeScript, and CSS.

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Bakhtiar85/test-real-estate-dashboard.git
   cd real-estate-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

---

## 🛠️ Features Implemented

- **Property List Page**
  - Responsive card grid layout.
  - Each card shows image, title, price, bedrooms, and location.
  - Hover interaction with scale + shadow.

- **Filters & Sorting**
  - Search bar (filters by property title, case-insensitive).
  - Minimum bedrooms filter (dropdown).
  - Sort by price (low→high / high→low).

- **Property Details Page**
  - Accessible via SEO-friendly `slug` (e.g., `/#/property/modern-apartment-1`).
  - Displays large image, price, bedrooms, location, and description.
  - Back button to return to list (preserves filters/search state).

- **Empty State**
  - Shows fallback message when no results match filters.

- **Small UX Requirement**
  - Hover scale + shadow animation on cards.
  - Button hover interaction with subtle lift.

---

## 🎨 Styling

- Pure CSS (no frameworks).
- Responsive design: grid auto-fits cards, details page switches to one-column on mobile.
- Clean, minimal UI with light background and subtle elevation for cards/details.

---

## 📂 Project Structure

```
src/
│   App.tsx                 # Root app with routing
│   index.css               # Global styles
│   index.tsx               # Entry point
│   router.ts               # Minimal hash-based router
│
├── components/             # Reusable UI building blocks
│   ControlsBar.css
│   ControlsBar.tsx
│   PropertyCard.css
│   PropertyCard.tsx
│   PropertyGrid.tsx
│
├── data/                   # Mock dataset
│   properties.ts
│
├── pages/                  # Page-level components
│   DetailsPage.css
│   DetailsPage.tsx
│
├── types-interfaces/       # Shared TypeScript contracts
│   interfaces.ts
│   types.ts
│
└── utils/                  # Helper utilities
    propertyUtils.ts
    slug.ts
```

---

## 🧪 Notes on the Project

- Built strictly with **React, TypeScript, and CSS**.
- No external state management or UI libraries used.
- Routing implemented manually with `window.location.hash` for simplicity.
- Slug-based URLs added for better SEO-friendliness.

---

## ✨ Self-Evaluation

- **Satisfaction:** 9/10  
  The requirements were met with clean separation of concerns, reusable components, and attention to UX polish.
- **Trade-offs:** Did not include chart/map bonus due to time constraint, but structure allows easy extension.
- **Improvements if given more time:**  
  - Add unit tests for utils (filtering/sorting).  
  - Implement basic chart (price distribution).  
  - Integrate a simple map with markers.

---

## 📧 Submission

- GitHub Repo: [https://github.com/Bakhtiar85/test-real-estate-dashboard.git](https://github.com/Bakhtiar85/test-real-estate-dashboard.git)  
- Email subject line:  
  ```
  Trial Task Submission - Frontend Developer - Muhammad Abubakar Bakhtiar - 2025
  ```
