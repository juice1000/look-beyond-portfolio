import React, { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";

interface NavbarProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const Navbar = ({
  onThemeToggle = () => {},
  isDarkMode = false,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img
              className="h-24 w-auto"
              src={
                isDarkMode
                  ? "../../../LB_logo_bg_remove_white.png"
                  : "../../../LB_logo_bg_removed.png"
              }
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className="relative px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
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
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            size="icon"
            onClick={onThemeToggle}
            className="ml-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
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
