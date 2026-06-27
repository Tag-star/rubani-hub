"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MdFlight,
  MdVerified,
  MdGroups,
  MdLightbulb,
  MdFavorite,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const stats = [
  { value: "100+", label: "Students Mentored" },
  { value: "10+", label: "Courses Offered" },
  { value: "5+", label: "Years of Experience" },
  { value: "3+", label: "Countries Reached" },
];

const values = [
  {
    icon: MdVerified,
    title: "Excellence in Training",
    body: "We hold ourselves to the highest standards in everything we teach. Every course, mentorship session, and piece of guidance is crafted to produce competent, confident, and KCAA-ready pilots.",
  },
  {
    icon: MdGroups,
    title: "Community & Belonging",
    body: "Aviation is better together. We cultivate a community where students support each other, share knowledge, and celebrate each other's milestones — because the journey to the cockpit is always easier with the right people beside you.",
  },
  {
    icon: MdFavorite,
    title: "Passion for Africa's Skies",
    body: "Africa is one of the world's fastest-growing aviation markets, yet African pilots remain underrepresented in its cockpits. We exist to change that — with urgency, pride, and unwavering dedication.",
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy pt-36 pb-24 overflow-hidden hero-grid">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/40 text-brand-green font-inter text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5"
          >
            Built for Africa's{" "}
            <span className="text-brand-green">Aspiring Pilots</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-white/70 text-lg max-w-2xl mx-auto"
          >
            Rubani Hub exists to dismantle every barrier between a young African
            and a commercial pilot's licence. Our story starts with one pilot's
            frustration — and a commitment to making the journey better for
            everyone who follows.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-blue py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-montserrat font-black text-4xl text-white">
                  {stat.value}
                </div>
                <div className="font-inter text-white/60 text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-navy to-brand-blue flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-20" />
                <div className="relative z-10 text-center px-8">
                  <img
                        src="/founder.jpg"
                        alt="Rubani Hub Founder"
                        style={{ width:"100%", height:"100%", objectFit:"cover" }}
                      />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-green to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-navy text-white rounded-2xl p-4 shadow-2xl border border-white/10">
                <div className="font-montserrat font-black text-xl text-brand-green">
                  Licensed CPL
                </div>
                <div className="font-inter text-xs text-white/60">
                  Commercial Pilot & Educator
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
                The Founder's Story
              </span>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mt-3 mb-6 leading-tight">
                One Pilot's Frustration Became a Movement
              </h2>

              <div className="space-y-4 font-inter text-gray-600 text-base leading-relaxed">
                <p>
                  When our founder first started pursuing a pilot licence in
                  Kenya, the experience was disorienting. Resources were
                  scattered, guidance was scarce, and the few mentors available
                  were gatekept behind expensive flying schools or personal
                  connections. The system felt designed to keep out anyone who
                  didn't already have a foot in the door.
                </p>
                <p>
                  After earning a Commercial Pilot Licence through sheer
                  persistence and self-direction, the decision was clear: go
                  back and build the resource that should have existed from the
                  start. Rubani Hub was born from that conviction.
                </p>
                <p>
                  Today, we've helped over 100 students navigate the path from
                  curiosity to cockpit — and we're only getting started. Africa
                  needs tens of thousands of new pilots in the next two decades.
                  We intend to train as many of them as possible.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="https://wa.me/254704832506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-montserrat font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300"
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                <MdFlight className="text-brand-blue text-2xl" />
              </div>
              <h2 className="font-montserrat font-black text-2xl text-brand-navy mb-4">
                Our Mission
              </h2>
              <p className="font-inter text-gray-600 leading-relaxed">
                To democratise aviation education and mentorship in Kenya and
                Africa — providing every aspiring pilot with the structured
                training, expert guidance, and community support they need to
                earn their licence and build a successful aviation career,
                regardless of their background or starting point.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-navy rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/30 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mb-5">
                  <MdLightbulb className="text-brand-green text-2xl" />
                </div>
                <h2 className="font-montserrat font-black text-2xl text-white mb-4">
                  Our Vision
                </h2>
                <p className="font-inter text-white/70 leading-relaxed">
                  A future where African pilots command the aircraft that fly
                  over African skies — where the aviation industry reflects the
                  continent it serves, and where a young Kenyan who dreams of
                  flying has every tool, mentor, and resource they need to make
                  that dream a reality.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Why We Exist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-100 mb-20"
          >
            <div className="max-w-3xl">
              <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
                The Problem We're Solving
              </span>
              <h2 className="font-montserrat font-black text-3xl text-brand-navy mt-3 mb-6 leading-tight">
                Why We Exist: Closing the African Aviation Gap
              </h2>
              <div className="space-y-4 font-inter text-gray-600 text-base leading-relaxed">
                <p>
                  Africa is projected to need over 70,000 new pilots in the next
                  20 years to meet growing aviation demand. Yet today, African
                  nationals represent a fraction of pilots flying African routes.
                  The barriers are real — expensive training abroad, limited
                  ground school options locally, lack of structured mentorship,
                  and little visibility into how to fund a pilot career.
                </p>
                <p>
                  Rubani Hub was created to dismantle these barriers one by one.
                  By delivering high-quality, KCAA-aligned ground school
                  training locally, offering genuine mentorship from pilots who
                  understand the African context, and building pathways to
                  employment and sponsorship — we're creating a new pipeline for
                  African aviation talent.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
                What Guides Us
              </span>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mt-2">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/8 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-blue/5 group-hover:bg-brand-blue rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <val.icon className="text-brand-blue group-hover:text-white text-2xl transition-colors duration-300" />
                  </div>
                  <h3 className="font-montserrat font-bold text-brand-navy text-lg mb-3">
                    {val.title}
                  </h3>
                  <p className="font-inter text-gray-500 text-sm leading-relaxed">
                    {val.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
