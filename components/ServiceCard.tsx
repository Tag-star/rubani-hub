"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  index?: number;
  variant?: "home" | "courses";
  courseSlug?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  variant = "home",
  courseSlug,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="service-card group bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 cursor-default flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-navy/5 group-hover:bg-brand-blue flex items-center justify-center mb-4 transition-colors duration-300">
        <Icon className="text-brand-blue group-hover:text-white text-2xl transition-colors duration-300" />
      </div>
      <h3 className="font-montserrat font-bold text-brand-navy text-base mb-2 leading-snug">
        {title}
      </h3>
      <p className="font-inter text-gray-500 text-sm leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4">
        <Link
          href={
            variant === "courses" && courseSlug
              ? `/contact?course=${courseSlug}`
              : "/courses"
          }
          className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-green font-inter font-semibold text-sm transition-colors duration-200 group/btn"
        >
          {variant === "courses" ? "Get Details" : "Learn More"}
          <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
