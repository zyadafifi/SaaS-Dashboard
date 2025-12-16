import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (type, message) => {
      const id = Date.now() + Math.random();
      const toast = { id, type, message };
      setToasts((prev) => [...prev, toast]);

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        removeToast(id);
      }, 3000);

      return id;
    },
    [removeToast]
  );

  const toast = {
    success: (message) => addToast("success", message),
    error: (message) => addToast("error", message),
  };

  return (
    <ToastContext.Provider value={{ toast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

