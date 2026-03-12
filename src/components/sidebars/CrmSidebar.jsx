import { useState } from "react";
import { useSidebar } from "../SidebarContext";
import {
  LayoutDashboard,
  Database,
  Grid2x2Check,
  Briefcase,
  CalendarSync,
  BotMessageSquare,
  Boxes,
  Handshake,
  AlignEndHorizontal,
  ArrowLeft,
  BotIcon,
  ChevronDown,
  ChevronRight,
  UserPlus,
} from "lucide-react";

export default function CrmSidebar() {
  const { setAppSection, crmView, setCrmView } = useSidebar();

  // Track which sections are open
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Section = ({ id, icon: Icon, label, children }) => {
    const isOpen = !!open[id];

    return (
      <div className="space-y-1  text-slate-900 dark:text-white">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCrmView(id)}
            className={`flex items-center gap-2 w-full p-2 rounded ${
              crmView === id ? " text-slate-900 dark:text-white " : "hover:bg-slate-800"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>

          <button
            onClick={() => toggle(id)}
            className="p-1 rounded hover:bg-slate-800"
          >
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {isOpen && (
          <div className="ml-6 space-y-1 text-sm text-slate-400">
            {children || <div className="italic text-slate-500">No subpages yet</div>}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-white p-4 space-y-2">
      <button
        onClick={() => setAppSection("main")}
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800 text-slate-300"
      >
        <ArrowLeft size={18} /> Back to Main
      </button>

      <div className="mt-10 space-y-4">
        <Section id="stream" icon={LayoutDashboard} label="Stream" />
        <Section id="service integration" icon={Grid2x2Check} label="Service Integration" />
        <Section id="account360" icon={UserPlus} label="Account360" />
        <Section id="pipeline tracking" icon={Briefcase} label="Pipeline Tracking" />
        <Section id="revenue intelligence" icon={BotIcon} label="Revenue Intelligence" />
        <Section id="deal" icon={BotIcon} label="Deals" />
        <Section id="smartcrm" icon={BotMessageSquare} label="SmartCRM" />
        <Section id="reports" icon={CalendarSync} label="Reports" />
        <Section id="team" icon={Boxes} label="Team" />
        <Section id="teammanager" icon={Boxes} label="TeamManager" />

        <Section id="partners" icon={Handshake} label="Partners">
          <button
            onClick={() => setCrmView("partners.board")}
            className="block w-full text-left hover:text-indigo-400"
          >
            Board Voting & Resolutions
          </button>
        </Section>

        <Section id="database" icon={Database} label="Database" />
        <Section id="crm analytics" icon={AlignEndHorizontal} label="CRM Analytics" />
      </div>
    </aside>
  );
}