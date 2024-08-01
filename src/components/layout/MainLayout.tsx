import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        <div className="h-full p-2 md:p-5">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
