"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  MdEmail,
  MdPhone,
  MdCheckCircle,
  MdLocationOn,
  MdSend,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const courses = [
  { value: "", label: "Select a course or service" },
  { value: "ppl-ground-school", label: "PPL Ground School" },
  { value: "cpl-ground-school", label: "CPL Ground School" },
  { value: "helicopter-training", label: "Helicopter PPL & CPL" },
  { value: "online-courses", label: "Online Pilot Courses" },
  { value: "simulator-training", label: "Simulator Training" },
  { value: "mentorship", label: "1-on-1 Pilot Mentorship" },
  { value: "career-guidance", label: "Career Guidance" },
  { value: "airport-tours", label: "Airport Tours" },
  { value: "spare-parts", label: "Aircraft Spare Parts" },
  { value: "partnerships", label: "Corporate / Airline Partnerships" },
  { value: "other", label: "General Enquiry" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const courseParam = searchParams.get("course");
    if (courseParam) {
      setForm((prev) => ({ ...prev, course: courseParam }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-10 border border-gray-100 text-center shadow-xl"
      >
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <MdCheckCircle className="text-brand-green text-4xl" />
        </div>
        <h3 className="font-montserrat font-black text-2xl text-brand-navy mb-3">
          Message Received!
        </h3>
        <p className="font-inter text-gray-600 text-base max-w-sm mx-auto mb-6">
          Thank you, {form.name}. One of our aviation advisors will get back to
          you within 24 hours. For urgent enquiries, reach us directly on
          WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="https://wa.me/254724852457"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </Link>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", phone: "", course: "", message: "" });
            }}
            className="font-inter text-brand-blue text-sm hover:underline"
          >
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  const inputClass =
    "w-full bg-brand-grey border border-gray-200 rounded-xl px-4 py-3.5 font-inter text-brand-navy text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <h2 className="font-montserrat font-black text-2xl text-brand-navy mb-6">
        Send Us a Message
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-inter font-medium text-brand-navy text-xs mb-1.5 uppercase tracking-wide">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block font-inter font-medium text-brand-navy text-xs mb-1.5 uppercase tracking-wide">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block font-inter font-medium text-brand-navy text-xs mb-1.5 uppercase tracking-wide">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+254 700 000 000"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block font-inter font-medium text-brand-navy text-xs mb-1.5 uppercase tracking-wide">
            Course of Interest *
          </label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className={inputClass}
          >
            {courses.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-inter font-medium text-brand-navy text-xs mb-1.5 uppercase tracking-wide">
            Your Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your aviation goals, current stage, or any questions you have..."
            required
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-montserrat font-bold text-sm py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <MdSend className="text-base" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContactClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy pt-36 pb-24 overflow-hidden hero-grid">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/40 text-brand-green font-inter text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            We'd Love to Hear from You
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5"
          >
            Get in{" "}
            <span className="text-brand-green">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-white/70 text-lg max-w-xl mx-auto"
          >
            Ready to take flight? Fill in the form below or reach us directly on
            WhatsApp, our team typically responds within a few hours.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Suspense fallback={<div className="bg-white rounded-2xl p-8 border border-gray-100 h-96 animate-pulse" />}>
                  <ContactForm />
                </Suspense>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {/* Contact Info Cards */}
                <div className="space-y-4 mb-5">
                  {[
                    {
                      icon: MdEmail,
                      label: "Email Us",
                      value: "rubanihub@gmail.com",
                      href: "mailto:rubanihub@gmail.com",
                      color: "bg-brand-blue/10 text-brand-blue",
                    },
                    {
                      icon: MdPhone,
                      label: "Call / WhatsApp",
                      value: "+254 724 852 457",
                      href: "tel:+254724852457",
                      color: "bg-brand-green/10 text-brand-green",
                    },
                    {
                      icon: MdLocationOn,
                      label: "Based In",
                      value: "Nairobi, Kenya",
                      href: null,
                      color: "bg-amber-100 text-amber-600",
                    },
                  ].map((contact) => (
                    <div
                      key={contact.label}
                      className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4"
                    >
                      <div className={`w-11 h-11 rounded-xl ${contact.color} flex items-center justify-center flex-shrink-0`}>
                        <contact.icon className="text-xl" />
                      </div>
                      <div>
                        <div className="font-montserrat font-bold text-brand-navy text-sm">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="font-inter text-gray-600 text-sm hover:text-brand-blue transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="font-inter text-gray-600 text-sm">
                            {contact.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <Link
                  href="https://wa.me/254724852457?text=Hello%20Rubani%20Hub%2C%20I%27d%20like%20to%20enquire%20about%20your%20aviation%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-brand-green hover:bg-green-600 text-white rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-base">
                      Chat on WhatsApp
                    </div>
                    <div className="font-inter text-white/80 text-sm">
                      Get an instant response from our team
                    </div>
                  </div>
                  <span className="ml-auto text-white/60 group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mt-5">
                  <div className="h-48 bg-gradient-to-br from-brand-grey to-gray-200 flex flex-col items-center justify-center gap-2">
                    <MdLocationOn className="text-brand-blue text-3xl" />
                    <span className="font-montserrat font-bold text-brand-navy text-sm">
                      Find Us
                    </span>
                    <span className="font-inter text-gray-500 text-xs">
                      Nairobi, Kenya
                    </span>
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <p className="font-inter text-gray-500 text-xs text-center">
                      Serving students across Kenya & East Africa. Sessions
                      available in-person in Nairobi and online nationwide.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
