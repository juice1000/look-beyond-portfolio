import React, { useState, useEffect } from "react";
import LBLogoWhite from "/images/LB_logo_bg_remove_white.png";
import LBLogoBlack from "/images/LB_logo_bg_removed.png";
import { Button } from "./ui/button";
import { Menu, X, Eye, Globe } from "lucide-react";
import { t, Language } from "../lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
  onColorBlindToggle?: (
    mode: "none" | "protanopia" | "deuteranopia" | "tritanopia",
  ) => void;
  colorBlindMode?: "none" | "protanopia" | "deuteranopia" | "tritanopia";
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
}

type NavItem = {
  label: string;
  href?: string;
  subItems?: Array<{
    label: string;
    href: string;
  }>;
};

const Navbar = ({
  onThemeToggle = () => {},
  isDarkMode = false,
  onColorBlindToggle = () => {},
  colorBlindMode = "none",
  language = "en",
  onLanguageChange = (lang: Language) => {
    localStorage.setItem("language", lang);
  },
}: NavbarProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = location.pathname;
    const navItem = navItems.find((item) => item.href === path);
    setActiveItem(navItem?.label || "");
  }, [location.pathname, language]);

  const navItems: NavItem[] = [
    { label: t("nav.ourProcess", language), href: "/our-process" },
    { label: t("nav.projects", language), href: "/projects" },
    { label: t("nav.partners", language), href: "/partners" },
    { label: t("nav.contact", language), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 h-20 w-full border-b border-white/30 dark:border-white/[0.06] bg-white/20 dark:bg-[#060b18]/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-full grid grid-cols-3 items-center">
        {/* Logo — left */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              className="h-20 w-auto object-contain"
              src={isDarkMode ? LBLogoWhite : LBLogoBlack}
              alt="Look Beyond"
            />
          </a>
        </div>

        {/* Desktop Navigation — glass pill, truly centered */}
        <div className="hidden md:flex justify-center">
          <div className="relative overflow-hidden rounded-full
                          border border-white/60 dark:border-white/[0.08]
                          bg-gradient-to-br from-white/50 to-white/25
                          dark:bg-white/[0.05]
                          backdrop-blur-xl backdrop-saturate-150
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.06)]
                          dark:shadow-none
                          px-2 py-1">
            <div className="pointer-events-none absolute -top-3 -right-3 h-12 w-12 rounded-full bg-white/70 blur-xl dark:hidden" />
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={`relative px-3 py-1.5 rounded-full font-mono text-[13px] font-semibold uppercase tracking-wide transition-colors
                        ${activeItem === item.label
                          ? "bg-white/60 dark:bg-white/10 text-blue-600 dark:text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                          : "text-slate-600 dark:text-[#3a5872] hover:text-blue-600 dark:hover:text-blue-300 hover:bg-white/40 dark:hover:bg-white/5"
                        }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right controls — col 3 always visible for grid; desktop vs mobile contents swap */}
        <div className="flex items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative rounded-sm border-slate-300 dark:border-[#1a3050] bg-transparent text-slate-500 dark:text-[#4a6a8a] hover:bg-slate-100 dark:hover:bg-[#0b1426] hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Globe size={20} />
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {language.toUpperCase()}
                    </div>
                  </motion.div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => onLanguageChange("en")}
                  className={language === "en" ? "bg-accent" : ""}
                >
                  <span className="mr-2">🇬🇧</span>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onLanguageChange("de")}
                  className={language === "de" ? "bg-accent" : ""}
                >
                  <span className="mr-2">🇩🇪</span>
                  <span>Deutsch</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative rounded-sm border-slate-300 dark:border-[#1a3050] bg-transparent text-slate-500 dark:text-[#4a6a8a] hover:bg-slate-100 dark:hover:bg-[#0b1426] hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Eye
                      size={20}
                      className={
                        colorBlindMode !== "none" ? `text-blue-600` : ""
                      }
                    />
                    {colorBlindMode !== "none" && (
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {colorBlindMode[0].toUpperCase()}
                      </div>
                    )}
                  </motion.div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => onColorBlindToggle("none")}
                  className={colorBlindMode === "none" ? "bg-accent" : ""}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  <span>Normal Vision</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onColorBlindToggle("protanopia")}
                  className={colorBlindMode === "protanopia" ? "bg-accent" : ""}
                >
                  <div className="mr-2 h-4 w-4 flex items-center justify-center font-bold text-sm">
                    P
                  </div>
                  <span>Protanopia (Red-Blind)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onColorBlindToggle("deuteranopia")}
                  className={
                    colorBlindMode === "deuteranopia" ? "bg-accent" : ""
                  }
                >
                  <div className="mr-2 h-4 w-4 flex items-center justify-center font-bold text-sm">
                    D
                  </div>
                  <span>Deuteranopia (Green-Blind)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onColorBlindToggle("tritanopia")}
                  className={colorBlindMode === "tritanopia" ? "bg-accent" : ""}
                >
                  <div className="mr-2 h-4 w-4 flex items-center justify-center font-bold text-sm">
                    T
                  </div>
                  <span>Tritanopia (Blue-Blind)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-500 dark:text-[#4a6a8a] hover:bg-slate-100 dark:hover:bg-[#0b1426] hover:text-blue-600 dark:hover:text-blue-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-16 border-b border-white/[0.06] bg-white/95 dark:bg-[#060b18]/90 backdrop-blur-md md:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 font-mono text-xs uppercase tracking-wide text-slate-600 dark:text-[#3a5872] hover:text-blue-600 dark:hover:text-blue-300"
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <div className="pl-4 border-l border-gray-200 dark:border-gray-700 ml-2">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2 font-mono text-xs uppercase tracking-wide text-slate-600 dark:text-[#3a5872] hover:text-blue-600 dark:hover:text-blue-300"
                        onClick={() => {
                          setActiveItem(subItem.label);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
