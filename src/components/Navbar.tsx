import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Eye, Globe, ChevronDown } from "lucide-react";
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
    mode: "none" | "protanopia" | "deuteranopia" | "tritanopia"
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
    // find the id from the path set the label as active item
    if (path === "/") {
      setActiveItem(t("nav.home", language));
    } else {
      const navItem = navItems.find((item) => {
        if (item.subItems) {
          return item.subItems.some((subItem) => subItem.href === path);
        }
        return item.href === path;
      });

      if (navItem?.subItems) {
        const subItem = navItem.subItems.find((item) => item.href === path);
        setActiveItem(subItem?.label || "");
      } else {
        setActiveItem(navItem?.label || "");
      }
    }
  }, [location.pathname, language]);

  const navItems: NavItem[] = [
    { label: t("nav.solutions", language), href: "/#solutions" },
    { label: t("nav.industries", language), href: "/#industries" },
    { label: t("nav.process", language), href: "/#process" },
    { label: t("nav.projects", language), href: "/#proof" },
    // { label: t("nav.imprint", language), href: "/imprint" },
    // { label: t("nav.privacyPolicy", language), href: "/privacy-policy" },
  ];

  return (
    <nav className="fixed top-0 z-50 h-16 w-full border-b border-[#0f1e35] bg-[#060b18]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-white font-mono text-xs font-bold text-[#060b18]">
              LB
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Look Beyond
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-5">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="relative flex items-center gap-1 px-2 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-[#3a5872] transition-colors hover:text-blue-300">
                          {item.label}
                          <ChevronDown size={16} />
                          {activeItem === item.label && (
                            <motion.div
                              layoutId="underline"
                              className="absolute left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 bottom-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-56">
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.label} asChild>
                            <a
                              href={subItem.href}
                              onClick={() => setActiveItem(subItem.label)}
                              className="w-full cursor-pointer"
                            >
                              {subItem.label}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className="relative px-2 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-[#3a5872] transition-colors hover:text-blue-300"
                    >
                      {item.label}
                      {activeItem === item.label && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 bottom-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2">
            <Button
              className="rounded-sm bg-blue-600 px-4 font-mono text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Book a call
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative rounded-sm border-[#1a3050] bg-transparent text-[#4a6a8a] hover:bg-[#0b1426] hover:text-blue-300"
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
                  className="relative rounded-sm border-[#1a3050] bg-transparent text-[#4a6a8a] hover:bg-[#0b1426] hover:text-blue-300"
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
            <Button
              variant="outline"
              size="icon"
              onClick={onThemeToggle}
              className="rounded-sm border-[#1a3050] bg-transparent text-[#4a6a8a] hover:bg-[#0b1426] hover:text-blue-300"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#4a6a8a] hover:bg-[#0b1426] hover:text-blue-300"
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
          className="absolute left-0 right-0 top-16 border-b border-[#0f1e35] bg-[#060b18] md:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 font-mono text-xs uppercase tracking-wide text-[#3a5872] hover:text-blue-300"
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
                        className="block py-2 font-mono text-xs uppercase tracking-wide text-[#3a5872] hover:text-blue-300"
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
            <a
              href="/contact"
              className="mt-3 block rounded-sm bg-blue-600 px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-wide text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a call
            </a>
            <div className="py-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onThemeToggle();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                {isDarkMode ? (
                  <>
                    <Sun size={20} className="mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={20} className="mr-2" /> Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
