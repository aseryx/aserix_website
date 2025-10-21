# Aseryx Website

A modern, responsive website built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
aseryx_website/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles with Tailwind
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
├── vite.config.js    # Vite configuration
└── README.md
```

## 🎨 Customization

### Colors

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Pages

Add new pages in `src/pages/` and update routes in `src/App.jsx`.

## 📝 License

MIT
