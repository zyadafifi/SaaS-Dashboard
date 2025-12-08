import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking auth state
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate login
    const userData = {
      id: 1,
      name: "John Doe",
      email: email,
      role: "Admin",
    };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    return Promise.resolve(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
}
