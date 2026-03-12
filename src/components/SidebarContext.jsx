import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [appSection, setAppSection] = useState("main");
  const [networkView, setNetworkView] = useState("dashboard");

  const [crmView, setCrmView] = useState("stream");
  const [marketingView, setMarketingView] = useState("stream");

  // ✅ SINGLE SOURCE OF TRUTH
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark");

    if (theme === "dark") {
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <SidebarContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,

        appSection,
        setAppSection,

        networkView,
        setNetworkView,

        crmView,
        setCrmView,

        marketingView,
        setMarketingView,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }
  return context;
}