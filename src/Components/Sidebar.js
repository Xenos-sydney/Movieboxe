"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Tablet } from "lucide-react";
import { NAV } from "../Data/Movies";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden md:flex flex-col shrink-0 border-r border-white/5 bg-[#0e0f14] py-4 transition-[width] duration-300 ease-in-out overflow-hidden ${
        collapsed ? "w-[68px] px-2" : "w-60 px-3"
      }`}
    >
      <div className={`flex items-center mb-6 ${collapsed ? "justify-center px-0" : "gap-2 px-2"}`}>
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={18} />
        </button>
        {!collapsed && (
          <>
            <Image
              src="/Logo/MovieBox logo.jpg"
              alt="MovieBox logo"
              width={28}
              height={28}
              className="rounded-md object-cover shrink-0"
            />
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">MovieBox</span>
          </>
        )}
      </div>

      <nav className="flex flex-col gap-1">
        {NAV.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            title={collapsed ? label : undefined}
            className={`flex items-center rounded-lg text-sm text-left transition-colors ${
              collapsed ? "justify-center p-2.5" : "gap-3 px-3 py-2.5"
            } ${
              active
                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                : "text-white/60 hover:bg-white/5 hover:text-white/90"
            }`}
          >
            <Icon size={17} className="shrink-0" />
            {!collapsed && <span className="whitespace-nowrap">{label}</span>}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4">
        <div className={`rounded-xl bg-white/5 flex items-center ${collapsed ? "justify-center p-2" : "gap-3 p-3"}`}>
          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
            <Tablet size={16} className="text-emerald-400" />
          </div>
          {!collapsed && (
            <div className="text-xs leading-tight whitespace-nowrap">
              <p className="font-semibold text-white/90">Get MovieBox</p>
              <p className="text-white/45">For mobile &amp; desktop</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}