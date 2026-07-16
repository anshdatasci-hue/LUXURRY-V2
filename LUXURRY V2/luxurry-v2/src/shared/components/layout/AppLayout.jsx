"use client";

import { useState } from "react";

import Header from "./Header";
import WelcomeBar from "./WelcomeBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#3A3530]">
      <Header
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
      />

      <WelcomeBar />

      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
      />

      <main
        className={`
          flex
          min-h-screen
          flex-col
          pt-40
          lg:pt-28
          transition-all
          duration-300
          ${
            sidebarCollapsed
              ? "lg:ml-24"
              : "lg:ml-64"
          }
        `}
      >
        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
}