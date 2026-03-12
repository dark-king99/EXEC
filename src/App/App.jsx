import { useState, useEffect} from "react"
import { useSidebar } from "../components/SidebarContext";
import Login from "../auth/Login";

import { SidebarProvider } from "../components/SidebarContext";
import SidebarInset from "../components/SidebarInset";
import ContentArea from "../components/ContentArea";
import Navbar from "../components/Navbar";

function AppLayout({ user, setUser, roleToUse, effectiveRole, setEffectiveRole }) {

  const { appSection } = useSidebar();

  const fullScreenSections = ["network", "crm", "market"];
  const hideNavbar = fullScreenSections.includes(appSection);

  return (
    <div className="flex h-screen w-screen bg-slate-50 dark:bg-slate-950">

      <SidebarInset user={user} />

      <div className="flex-1 flex flex-col">

        {!hideNavbar && (
          <Navbar
            user={user}
            roleToUse={roleToUse}
            effectiveRole={effectiveRole}
            setEffectiveRole={setEffectiveRole}
            onLogout={() => setUser(null)}
          />
        )}

        <main className="flex-1 overflow-y-auto p-6">
          <ContentArea />
        </main>

      </div>
    </div>
  );
}

export default function App() {

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [effectiveRole, setEffectiveRole] = useState(null);

  const roleToUse =
    user?.role === "system_admin"
      ? effectiveRole || "enterprise_admin"
      : user?.role;

  const [activeView, setActiveView] = useState(() => {
    return localStorage.getItem("activeView") || "analytics";
  });

  useEffect(() => {
    localStorage.setItem("activeView", activeView);
  }, [activeView]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
      <SidebarProvider>
        <AppLayout
          user={user}
          setUser={setUser}
          roleToUse={roleToUse}
          effectiveRole={effectiveRole}
          setEffectiveRole={setEffectiveRole}
        />
      </SidebarProvider>
    );
}