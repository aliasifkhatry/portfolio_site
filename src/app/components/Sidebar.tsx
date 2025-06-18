import React, { useEffect, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#blog", label: "Blogs" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div
      className={`fixed top-0 right-0 md:w-64 w-2/3 h-full transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-30 ${
        isDarkMode ? "bg-sidebar" : "bg-gray-400"
      } text-white`}
    >
      <nav className="mt-16">
        <ul className="space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block px-4 py-2 hover:text-gray-800"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;