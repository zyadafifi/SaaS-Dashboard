# SaaS Dashboard

A modern, fully-featured SaaS dashboard built with React, Vite, and Tailwind CSS. Features authentication, protected routes, CRUD operations, global search, and a responsive design with dark mode support.

![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)

## Live Demo

Live Demo: <PASTE_NETLIFY_URL_HERE>

## Screenshots

![Dashboard](./screenshots/dashboard.png)
*Main dashboard with key metrics and analytics*

![Projects](./screenshots/projects.png)
*Projects management page with CRUD operations*

![Login](./screenshots/login.png)
*Login page with form validation*

## Features

### 🔐 Authentication & Security
- **Mock Authentication System** - Context-based auth with localStorage persistence
- **Protected Routes** - Automatic redirect to login for unauthenticated users
- **Session Persistence** - User session persists across page refreshes
- **Login Validation** - Email format and password length validation

### 📊 Data Management
- **Projects CRUD** - Full Create, Read, Update, Delete operations
- **localStorage Persistence** - All project data persists in browser storage
- **Fake API Layer** - Simulated API calls with loading states and delays
- **Real-time Updates** - UI updates immediately after CRUD operations

### 🔍 Global Search
- **Cross-Page Search** - Search input in navbar filters data across all pages
- **Debounced Input** - 300ms debounce for optimal performance
- **Multi-Field Filtering** - Search across name, email, description, and status fields
- **Persistent State** - Search query persists while navigating between pages

### 🎨 User Interface
- **Dark Mode Toggle** - Seamless theme switching with persistent preference
- **Responsive Design** - Mobile-first approach with collapsible sidebar
- **Toast Notifications** - Success and error messages for user actions
- **Loading States** - Skeleton loaders for better UX during data fetching
- **Empty States** - Contextual messages when no data matches search

### 📱 Pages & Views
- **Home** - Welcome dashboard with personalized greeting
- **Dashboard** - Analytics overview with charts and recent projects
- **Analytics** - Detailed metrics with multiple chart types
- **Projects** - Full project management with grid/table views and filters
- **Team** - Team member management with list/grid views
- **Settings** - User preferences and account settings
- **404 Page** - Custom not found page with navigation

### 🛠️ Technical Features
- **React Context API** - Global state management for auth, theme, search, and toasts
- **React Router** - Client-side routing with protected routes
- **Custom Hooks** - Reusable hooks for search, auth, and theme
- **Component Architecture** - Modular, reusable components
- **Error Handling** - Graceful error handling with user-friendly messages

## Tech Stack

- **React 19.2.0** - UI library with hooks and context
- **Vite 7.2.4** - Fast build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Router DOM 7.10.1** - Client-side routing
- **ESLint** - Code quality and linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Environment Variables

No environment variables required. The project uses localStorage for data persistence and mock authentication.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Buttons.jsx     # Button variants
│   ├── Cards.jsx       # Card components (Stat, Info, Project)
│   ├── Charts.jsx      # Chart components (Line, Bar, Area, Pie)
│   ├── Navbar.jsx      # Top navigation bar with search
│   ├── Sidebar.jsx     # Collapsible sidebar navigation
│   ├── Tables.jsx      # Data table components
│   ├── ProjectModal.jsx # Create/Edit project modal
│   ├── ProtectedRoute.jsx # Route protection component
│   └── ToastContainer.jsx # Toast notification container
├── context/            # React Context providers
│   ├── AuthContext.jsx # Authentication state
│   ├── SearchContext.jsx # Global search state
│   ├── ThemeContext.jsx # Dark mode theme
│   ├── ToastContext.jsx # Toast notifications
│   └── SidebarContext.jsx # Sidebar state
├── hooks/              # Custom React hooks
│   ├── useAuth.js      # Legacy auth hook (deprecated)
│   ├── useFetch.js     # Data fetching hook
│   ├── useGlobalSearch.js # Global search filtering hook
│   └── useTheme.js     # Theme hook
├── pages/              # Page components
│   ├── Home.jsx        # Home dashboard
│   ├── Dashboard.jsx   # Analytics dashboard
│   ├── Analytics.jsx   # Detailed analytics
│   ├── Projects.jsx    # Projects management
│   ├── Team.jsx        # Team management
│   ├── Settings.jsx    # User settings
│   ├── Login.jsx       # Login page
│   └── NotFound.jsx    # 404 page
├── layouts/            # Layout components
│   └── DashboardLayout.jsx # Main dashboard layout
├── services/           # API services
│   └── api/
│       └── projects.js # Projects API (localStorage-based)
├── data/               # Mock data
│   └── mockData.js     # Sample data for development
├── utils/              # Utility functions
│   └── format.js       # Formatting helpers
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## Implementation Details

### Authentication
- Uses React Context (`AuthContext`) for global authentication state
- Mock authentication accepts any email/password combination (min 6 characters)
- User data stored in `localStorage` with key `"user"`
- Protected routes redirect unauthenticated users to `/login`
- Login state persists across page refreshes

### Data Persistence
- Projects stored in `localStorage` with key `"projects_db"`
- Fake API layer (`src/services/api/projects.js`) simulates backend calls
- Includes loading delays (300-500ms) for realistic UX
- Seeded with initial data from `mockData.js` on first load

### Global Search
- Search state managed via `SearchContext`
- Debounced input (300ms) prevents excessive re-renders
- Reusable `useGlobalSearch` hook filters any array by specified fields
- Search query persists across page navigation
- Automatically clears on user logout

### Toast Notifications
- Custom toast system without external libraries
- Auto-dismiss after 3 seconds
- Supports success and error types
- Positioned top-right with smooth animations

## What I Learned

- **React Architecture** - Implementing global state management with Context API for multiple concerns (auth, theme, search, toasts)
- **Protected Routing** - Creating route guards that check authentication and redirect appropriately
- **State Management** - Balancing local component state with global context for optimal performance
- **Reusable Patterns** - Building custom hooks (`useGlobalSearch`) that abstract common filtering logic
- **UX Best Practices** - Implementing loading states, empty states, debouncing, and toast notifications
- **Data Persistence** - Creating a fake API layer that mimics real backend behavior with localStorage

## Future Improvements

- [ ] Replace mock authentication with real backend integration
- [ ] Add user roles and permissions system
- [ ] Implement real-time updates with WebSockets
- [ ] Add data export functionality (CSV, PDF)
- [ ] Enhance search with advanced filters and sorting
- [ ] Add pagination for large datasets
- [ ] Implement drag-and-drop for project organization
- [ ] Add keyboard shortcuts for common actions
- [ ] Create comprehensive test suite

## License

This project is for portfolio use. Feel free to explore the code and use it as a reference for your own projects.

---

Built with ❤️ using React, Vite, and Tailwind CSS
