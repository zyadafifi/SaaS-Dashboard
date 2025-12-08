# SaaS Dashboard Project

A modern, fully-featured SaaS dashboard built with React, Vite, and Tailwind CSS v4.

## Features

### 🎨 **Complete UI Components**

- **Navbar**: Search, notifications, user profile dropdown
- **Sidebar**: Collapsible navigation with active state indicators
- **Cards**: Stat cards, info cards, project cards
- **Charts**: Line, Bar, Area, and Pie charts
- **Tables**: Data tables with sorting and actions
- **Buttons**: Multiple variants and sizes

### 📊 **Dashboard Pages**

- **Home**: Welcome dashboard with key metrics and quick stats
- **Dashboard**: Detailed analytics and project overview
- **Analytics**: Comprehensive analytics with multiple chart types
- **Projects**: Project management with grid/table views
- **Team**: Team member management with list/grid views
- **Settings**: User settings, notifications, and security

### 🛠️ **Technical Features**

- React Router for navigation
- Custom hooks (useAuth, useFetch, useTheme)
- Mock data for development
- Utility functions for formatting
- Responsive design
- Modern UI/UX patterns

## Getting Started

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

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Buttons.jsx
│   ├── Cards.jsx
│   ├── Charts.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── Tables.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Analytics.jsx
│   ├── Projects.jsx
│   ├── Team.jsx
│   └── Settings.jsx
├── layouts/         # Layout components
│   └── DashboardLayout.jsx
├── hooks/           # Custom React hooks
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useTheme.js
├── data/            # Mock data
│   └── mockData.js
├── utils/           # Utility functions
│   └── format.js
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add navigation item in `src/components/Sidebar.jsx`

### Styling

The project uses Tailwind CSS v4. Customize colors and styles in `tailwind.config.js` (if needed) or use Tailwind's utility classes directly.

### Mock Data

Update `src/data/mockData.js` to modify the sample data used throughout the application.

## License

ISC

## Author

Created as a complete SaaS dashboard template.
