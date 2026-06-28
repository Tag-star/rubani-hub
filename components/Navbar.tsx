"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white border-b border-gray-200 py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.jpeg"
                alt="Rubani Hub — Aviation Training Kenya"
                style={{
                  height: scrolled ? "80px" : "100px",
                  width: "auto",
                  maxWidth: "280px",
                  objectFit: "contain",
                  transition: "height 0.3s ease",
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-inter text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-yellow-600 active"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30 tracking-wide"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-brand-navy flex flex-col pt-24 px-6"
          >
            {/* Mobile logo */}
            <div className="absolute top-4 left-4">
              <img
                src="/logo.jpeg"
                alt="Rubani Hub"
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`font-montserrat text-2xl font-bold ${
                      pathname === link.href ? "text-brand-green" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="block w-full text-center bg-brand-blue text-white font-montserrat font-semibold text-lg px-6 py-4 rounded-xl"
              >
                Enroll Now
              </Link>
            </motion.div>
            <div className="mt-auto mb-10 text-white/40 font-inter text-sm">
              rubanihub@gmail.com · +254 724 852 457
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
