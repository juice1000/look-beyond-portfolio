import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Eye, Globe, ChevronDown } from "lucide-react";
import { t, Language } from "../lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";
import LBLogoWhite from "/images/LB_logo_bg_remove_white.png";
import LBLogo from "/images/LB_logo_bg_removed.png";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    // find the id from the path set the label as active item
    if (path === "/") {
      setActiveItem(t("nav.home", language));
    } else {
      const navItem = navItems.find((item) => item.href === path)?.label;
      setActiveItem(navItem);
    }
  }, []);

  const navItems = [
    { label: t("nav.home", language), href: "/" },
    {
      label: t("nav.howWeWork", language),
      subItems: [
        {
          label: t("nav.aiReadiness", language),
          href: "/ai-readiness",
        },
        {
          label: t("nav.ourProcess", language),
          href: "/our-process",
        },
        {
          label: t("nav.projects", language),
          href: "/projects",
        },
        {
          label: t("nav.pricingEngagement", language),
          href: "/pricing-engagement",
        },
        { label: t("nav.workshops", language), href: "/workshops" },
      ],
    },
    { label: t("nav.contact", language), href: "/contact" },
    // { label: t("nav.imprint", language), href: "/imprint" },
  ];

  return (
    <nav className="fixed top-0 w-full h-28 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              className="h-28 w-auto"
              src={isDarkMode ? LBLogoWhite : LBLogo}
              alt="Logo"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="relative px-3 py-2 text-xl font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center gap-1">
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
                      className="relative px-3 py-2 text-xl font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
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
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
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
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
          className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
                        className="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
