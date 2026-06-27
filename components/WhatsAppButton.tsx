"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/254704832506?text=Hello%20Rubani%20Hub%2C%20I%27d%20like%20to%20know%20more%20about%20your%20aviation%20courses."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rubani Hub on WhatsApp"
        className="whatsapp-pulse flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-900/40 transition-all duration-300 group"
      >
        <div className="flex items-center gap-2 px-4 py-3">
          <FaWhatsapp className="text-2xl flex-shrink-0" />
          <span className="font-montserrat font-semibold text-sm hidden sm:block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap">
            Chat with Us
          </span>
        </div>
      </a>
    </motion.div>
  );
}
