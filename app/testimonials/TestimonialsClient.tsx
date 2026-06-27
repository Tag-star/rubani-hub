"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Brian Otieno",
    course: "PPL Ground School",
    initials: "BO",
    quote:
      "Rubani Hub completely changed my perspective on aviation. I was lost about how to start, and within three months I had a clear pathway and was already deep into my PPL theory. The instructors are genuinely invested in your success — they remember your name, your challenges, and your goals. I can't recommend this place highly enough.",
    rating: 5,
  },
  {
    name: "Amina Wanjiku",
    course: "1-on-1 Pilot Mentorship",
    initials: "AW",
    quote:
      "The personalised mentorship I received here was unlike anything I'd experienced elsewhere. My mentor — a licensed CPL holder — helped me understand the real cost of training, where to find scholarships, and how to structure my studies for maximum efficiency. I felt like I finally had someone fighting in my corner. Aviation no longer felt impossible.",
    rating: 5,
  },
  {
    name: "Kevin Mwangi",
    course: "CPL Ground School",
    initials: "KM",
    quote:
      "I came to Rubani Hub after struggling with self-study for over a year. I'd buy books, watch YouTube videos, but nothing clicked. The structured CPL ground school content here — combined with the instructor's clarity and patience — made all the difference. I passed my KCAA meteorology and navigation exams on first attempt. First attempt!",
    rating: 5,
  },
  {
    name: "Fatuma Abubakar",
    course: "Career Guidance",
    initials: "FA",
    quote:
      "I had my frozen ATPL and zero idea how to convert that into an actual airline job. Rubani Hub's career guidance team walked me through the entire airline application process — from type rating planning to how to structure my CV and what panel interviewers at Kenyan carriers actually want to hear. I'm now at a final stage interview with a regional airline. Grateful doesn't cover it.",
    rating: 5,
  },
  {
    name: "Daniel Kimani",
    course: "Simulator Training",
    initials: "DK",
    quote:
      "The simulator sessions at Rubani Hub are incredibly well structured. I was nervous about instrument flying, but after just four sessions I was far more confident with my scan, my radio calls, and my approach procedures. The debrief after each session is genuinely one of the most valuable parts — honest, specific, and actionable feedback every single time.",
    rating: 5,
  },
  {
    name: "Grace Njeri",
    course: "Online Pilot Courses",
    initials: "GN",
    quote:
      "As a working professional, I couldn't attend in-person classes. The online pilot courses from Rubani Hub were the perfect solution. The content is professionally produced, the live Q&A sessions with instructors fill in any gaps, and the online mock exams are surprisingly tough — which is exactly what you need to be ready for the real KCAA papers. I studied from home and still felt fully supported.",
    rating: 5,
  },
];

export default function TestimonialsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy pt-36 pb-24 overflow-hidden hero-grid">
        <div className="absolute bottom-0 left-1/3 w-96 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/40 text-brand-green font-inter text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            Real Students. Real Results.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5"
          >
            What Our Students{" "}
            <span className="text-brand-green">Say</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-white/70 text-lg max-w-2xl mx-auto"
          >
            Don't take our word for it. Here's what aspiring pilots across Kenya
            say about training and mentoring with Rubani Hub.
          </motion.p>

          {/* Average rating display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <FaStar key={s} className="text-amber-400 text-xl" />
              ))}
            </div>
            <span className="font-montserrat font-black text-white text-2xl">
              5.0
            </span>
            <span className="font-inter text-white/50 text-sm">
              Average Rating · {testimonials.length} Reviews
            </span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mb-4">
              Ready to Write Your Own Story?
            </h2>
            <p className="font-inter text-gray-500 text-base mb-8 max-w-xl mx-auto">
              Join the growing community of Kenyan pilots who started their
              journey with Rubani Hub. Your success story starts with one
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-bold text-sm px-9 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30"
              >
                Enroll Now
              </Link>
              <Link
                href="https://wa.me/254704832506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-green hover:bg-green-600 text-white font-montserrat font-bold text-sm px-9 py-4 rounded-xl transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
