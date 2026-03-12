import { useSidebar } from "./SidebarContext";
import Sidebar from "./sidebars/Sidebar";
import NetworkSidebar from "./sidebars/NetworkSidebar";
import MarketingSidebar from "./sidebars/MarketingSidebar";


import CrmSidebar from "./sidebars/CrmSidebar";

export default function SidebarInset() {
  const { appSection } = useSidebar();

  if (appSection === "network") return <NetworkSidebar />;
  if (appSection === "crm") return <CrmSidebar />;
  if (appSection === "market") return <MarketingSidebar />;

  return <Sidebar />;
}
