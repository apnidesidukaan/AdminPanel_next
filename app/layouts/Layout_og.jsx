import { useState } from "react";
import ErpSidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ContentArea from "../components/ContentArea";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Navbar (Adjusts width based on sidebar) */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1">
        {/* Sidebar (Toggles open/close) */}
        <ErpSidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content Area (Grows/shrinks with sidebar) */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
          <ContentArea />

          <main className="p-6 bg-gray-100 overflow-y-auto h-full">
            <div className="w-full max-w-6xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
