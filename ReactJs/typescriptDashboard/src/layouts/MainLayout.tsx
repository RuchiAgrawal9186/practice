import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import SideBar from "../components/SideBar";
import { useState } from "react";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col  bg-gray-200">
      <MainHeader onMenuClick={() => setIsSidebarOpen(true)}></MainHeader>

      <div className="flex flex-1 overflow-hidden">
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        ></SideBar>

        <main className="flex-1 py-2 px-4  overflow-y-auto bg-gray-200  md:p-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
