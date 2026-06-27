"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

interface TestimonialCardProps {
  name: string;
  course: string;
  quote: string;
  rating?: number;
  index?: number;
  initials?: string;
}

export default function TestimonialCard({
  name,
  course,
  quote,
  rating = 5,
  index = 0,
  initials,
}: TestimonialCardProps) {
  const getInitials = (n: string) =>
    n
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-blue/8 transition-all duration-300 flex flex-col relative overflow-hidden"
    >
      {/* Decorative quote mark */}
      <FiMessageSquare className="absolute top-4 right-4 text-brand-blue/8 text-5xl" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="star-filled text-sm" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-inter text-gray-600 text-sm leading-relaxed italic flex-1 mb-5">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
          <span className="font-montserrat font-bold text-white text-xs">
            {initials || getInitials(name)}
          </span>
        </div>
        <div>
          <p className="font-montserrat font-bold text-brand-navy text-sm">{name}</p>
          <p className="font-inter text-brand-green text-xs">{course}</p>
        </div>
      </div>
    </motion.div>
  );
}
