# 🍹 CocktailForYou - Angular Assignment

This is a frontend web application built with Angular for displaying cocktails using [TheCocktailDB API](https://www.thecocktaildb.com/). It demonstrates routing,  filtering, API integration, sorting and reusable component-based architecture.

---

##  Live Demo

https://68868c59702b506af3421fc2--splendid-profiterole-82e7fd.netlify.app/

---

##  Features

- Static **Home Page** with cocktail cards (e.g., Mojito, Martini)
- On clicking a cocktail card, navigates to a **Cocktail List Page**
  - Uses real-time API from [TheCocktailDB](https://www.thecocktaildb.com/)
  - Displays: drink name, image, alcoholic/non-alcoholic label
- Filter by: **Alcoholic** or **Non-Alcoholic**
- Sort by: **Name**
- Search filter with input text
- Click any drink to open **Ingredient Details Page**
  - Shows ingredients list with image
- Responsive design
- Reusable `core` module with:
  - CocktailFilter pipe for filtering,searching and sorting
  - Data file for static cards
  - Interface for model typing

---

##  API Used

> Cocktail List:  
[`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita`](https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita)

> This endpoint fetches detailed cocktail info including drink name, image, ingredients, alcoholic content etc.

---

##  Getting Started

Follow these steps to set up and run the project locally on your machine.

---

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16+)
- [Angular CLI](https://angular.io/cli) (version 16+)

Install Angular CLI:

```bash
npm install -g @angular/cli
```

---

###  1. Clone the Repository

```bash
git clone https://github.com/Deepashree45/cocktail-app.git
cd cocktail-app
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start the Development Server

```bash
ng serve
```

Open your browser at:

```bash
http://localhost:4200
```

---

### 4. Build for Production (Optional)

```bash
ng build --configuration production
```

This will generate a production build in the `dist/` folder.







