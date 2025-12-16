import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import ToastContainer from "./components/ToastContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <AuthProvider>
          <SearchProvider>
            <ToastProvider>
              <App />
              <ToastContainer />
            </ToastProvider>
          </SearchProvider>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
