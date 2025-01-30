"use client";

import React, { useState } from "react";
import Header from "~/components/ui/header";
import Sidebar from "~/components/ui/sidebar";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col md:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {children}
          {/* <pre>{JSON.stringify(me, null, 2)}</pre> */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
