import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Achievements",
  "Contact",
];

const Navbar: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Fix: Add this to use `navigate`

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.documentElement.classList.toggle("dark", localTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleNavClick = (item: string) => {
    const sectionId = item.toLowerCase();
    if (isMobile && location.pathname === "/home") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setMenuOpen(false), 500); // give time to scroll
      }
    } else {
      navigate(`/${sectionId}`);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <BrandLogo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="font-bold uppercase text-slate-800 dark:text-slate-100 hover:text-teal-500 dark:hover:text-cyan-400 cursor-pointer"
            >
              {item}
            </button>
          ))}
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-6 py-4 space-y-4 border-t dark:border-slate-800">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left text-xl uppercase font-bold text-slate-800 dark:text-slate-100 py-2 hover:bg-teal-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
