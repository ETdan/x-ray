import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GlobalSearchOverlay from "../components/search/GlobalSearchOverlay";

export default function MainLayout() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text selection:bg-primary/20 selection:text-primary relative">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      
      <main className="flex-1 w-full relative">
        <Outlet context={{ openSearch: () => setSearchOpen(true) }} />
      </main>

      <Footer />

      <GlobalSearchOverlay 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  );
}
