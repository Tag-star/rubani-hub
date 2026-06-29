"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  MdSchool,
  MdVerified,
  MdFlight,
  MdPerson,
  MdComputer,
  MdHeadphones,
  MdWork,
  MdExplore,
  MdBuild,
  MdBusiness,
  MdStar,
} from "react-icons/md";
import {
  FaHelicopter,
  FaDesktop,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import { GiJetFighter } from "react-icons/gi";

const services = [
  {
    icon: MdSchool,
    title: "PPL Ground School",
    description:
      "Comprehensive Private Pilot Licence ground school training that covers aviation theory, meteorology, navigation, and air law fully aligned with KCAA standards.",
    slug: "ppl-ground-school",
  },
  {
    icon: GiJetFighter,
    title: "CPL Ground School",
    description:
      "Advanced Commercial Pilot Licence ground school that prepares you for a professional aviation career with rigorous theoretical and practical preparation.",
    slug: "cpl-ground-school",
  },
  {
    icon: FaHelicopter,
    title: "Helicopter PPL & CPL",
    description:
      "Specialist helicopter pilot training from Private to Commercial level, covering rotorcraft aerodynamics, navigation, and emergency procedures.",
    slug: "helicopter-training",
  },
  {
    icon: MdComputer,
    title: "Online Pilot Courses",
    description:
      "Flexible, self-paced aviation courses delivered online, allowing you to study from anywhere in Africa while maintaining the highest training standards.",
    slug: "online-courses",
  },
  {
    icon: FaDesktop,
    title: "Simulator Training",
    description:
      "Hands-on flight simulator sessions that build real cockpit familiarity, instrument proficiency, and emergency response skills in a safe environment.",
    slug: "simulator-training",
  },
  {
    icon: MdPerson,
    title: "1-on-1 Pilot Mentorship",
    description:
      "Personalised mentorship from licensed commercial pilots who guide you through your aviation journey from course selection to career placement.",
    slug: "mentorship",
  },
  {
    icon: MdWork,
    title: "Career Guidance",
    description:
      "Structured career advisory for aviation students covering airline applications, type rating pathways, interview preparation, and CV building.",
    slug: "career-guidance",
  },
  {
    icon: MdExplore,
    title: "Airport Tours",
    description:
      "Immersive guided tours of active airports and aviation facilities to give aspiring pilots a real-world feel for the industry before they commit.",
    slug: "airport-tours",
  },
  {
    icon: MdBuild,
    title: "Aircraft Spare Parts",
    description:
      "Sourcing and supply of quality aircraft spare parts for flying schools, private operators, and maintenance organisations across East Africa.",
    slug: "spare-parts",
  },
  {
    icon: MdBusiness,
    title: "Corporate & Airline Partnerships",
    description:
      "Strategic partnerships with airlines, corporates, and flying academies to create cadet pipelines, sponsorship pathways, and training agreements.",
    slug: "partnerships",
  },
];

const whyCards = [
  {
    icon: MdStar,
    title: "Experienced Instructors",
    body: "Our instructors are licensed commercial pilots with thousands of flight hours and a passion for building the next generation of African aviators.",
  },
  {
    icon: MdVerified,
    title: "KCAA-Aligned Training",
    body: "All our curricula are structured in line with Kenya Civil Aviation Authority regulations, ensuring your qualifications are recognised and respected.",
  },
  {
    icon: MdFlight,
    title: "Real Aircraft Experience",
    body: "Beyond the classroom, we connect students with hands-on exposure to real aircraft, simulator platforms, and working aviation environments.",
  },
  {
    icon: MdHeadphones,
    title: "Personalised Mentorship",
    body: "We treat every student as an individual. Your goals, pace, and background shape a tailored learning plan designed for your success.",
  },
];

const testimonials = [
  {
    name: "Brian Otieno",
    course: "PPL Ground School",
    quote:
      "Rubani Hub completely changed my perspective on aviation. I was lost about how to start, and within three months I had a clear pathway and was already studying for my PPL. The instructors are genuinely invested in you.",
    rating: 5,
  },
  {
    name: "Amina Wanjiku",
    course: "1-on-1 Pilot Mentorship",
    quote:
      "The personalised mentorship I received here was unlike anything I'd experienced elsewhere. My mentor helped me understand the real cost of training, how to apply for sponsorships, and how to structure my studies.",
    rating: 5,
  },
  {
    name: "Kevin Mwangi",
    course: "CPL Ground School",
    quote:
      "I came to Rubani Hub after struggling with self-study for over a year. The structured CPL ground school content, combined with the instructor's clarity, made the difference. I passed my KCAA exams on first attempt.",
    rating: 5,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-navy hero-grid">
        {/* Atmospheric orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />

        {/* Diagonal accent line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-brand-green/20 to-transparent" />
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/40 text-brand-green font-inter text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            Kenya's Premier Aviation Training Hub
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Your Flight{" "}
            <span className="relative">
              <span className="text-brand-green">Begins</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green/40" />
            </span>{" "}
            Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-inter text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kenya's premier aviation mentorship and pilot training hub. We train
            Africa's next generation of commercial pilots through expert
            instruction, real aircraft exposure, and personalised guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/courses"
              className="bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/40 tracking-wide w-full sm:w-auto text-center"
            >
              Explore Courses
            </Link>
            <Link
              href="https://wa.me/254724852457?text=Hello%20Rubani%20Hub%2C%20I%27d%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-green hover:bg-green-600 text-white font-montserrat font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/30 tracking-wide w-full sm:w-auto"
            >
              <FaWhatsapp className="text-lg" />
              Talk to Us on WhatsApp
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-8 mt-16 flex-wrap"
          >
            {[
              { value: "100+", label: "Students Mentored" },
              { value: "10+", label: "Courses Offered" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-montserrat font-black text-3xl text-white">
                  {stat.value}
                </div>
                <div className="font-inter text-white/50 text-xs mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="font-inter text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronDown className="text-sm" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHY RUBANI HUB ───────────────────────────────────── */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mt-2">
              Why Rubani Hub?
            </h2>
            <p className="font-inter text-gray-500 text-base mt-3 max-w-xl mx-auto">
              We combine expert instruction, African aviation insight, and
              personalised support to ensure you don't just learn, you thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 group-hover:bg-brand-blue flex items-center justify-center mb-4 transition-colors duration-300">
                  <card.icon className="text-brand-blue group-hover:text-white text-2xl transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-brand-navy text-base mb-2">
                  {card.title}
                </h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mt-2">
              Our Courses & Services
            </h2>
            <p className="font-inter text-gray-500 text-base mt-3 max-w-xl mx-auto">
              From ground school to career placement everything an aspiring
              African pilot needs, in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.slice(0, 8).map((svc, i) => (
              <ServiceCard
                key={svc.title}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                index={i}
                variant="home"
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30"
            >
              View All Courses & Services
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
              Student Voices
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mt-2">
              What Our Students Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-montserrat font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300"
            >
              Read All Testimonials →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/profile1.jpeg"
                  alt="Rubani Hub Founder"
                  style={{ width: "120", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-green text-white rounded-2xl px-5 py-3 shadow-xl">
                <div className="font-montserrat font-black text-2xl">5+</div>
                <div className="font-inter text-xs text-white/80">
                  Years Flying
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
                Meet the Founder
              </span>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-brand-navy mt-3 mb-5 leading-tight">
                A Pilot Who Came Back to Lift Others Up
              </h2>
              <p className="font-inter text-gray-600 text-base leading-relaxed mb-4">
                Rubani Hub was founded by a licensed commercial pilot with a
                singular mission: to make aviation accessible to every African
                who dreams of the skies. Having navigated the complex,
                expensive and often lonely path to becoming a commercial pilot,
                our founder understood what was missing structured mentorship,
                clear guidance, and a community that believed in you.
              </p>
              <p className="font-inter text-gray-600 text-base leading-relaxed mb-8">
                Today, Rubani Hub serves students across Kenya and East Africa,
                providing the kind of personalised, expert support that
                transforms aviation dreams into licensed realities. We exist
                because the skies deserve more African pilots.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-brand-grey rounded-xl p-4">
                  <div className="font-montserrat font-black text-2xl text-brand-navy">
                    Commercial Pilot
                  </div>
                  <div className="font-inter text-gray-500 text-sm mt-0.5">
                    Founder & Lead Instructor
                  </div>
                </div>
                <Link
                  href="/about"
                  className="flex-1 flex items-center justify-center border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-montserrat font-bold text-sm rounded-xl transition-all duration-300 py-4 px-4 text-center"
                >
                  Our Full Story →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative py-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-brand-green text-xs font-semibold tracking-widest uppercase">
              Take the First Step
            </span>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white mt-3 mb-5 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-brand-green">Aviation Journey?</span>
            </h2>
            <p className="font-inter text-white/60 text-base max-w-xl mx-auto mb-10">
              Whether you're just curious or ready to commit; talk to us today.
              Our advisors will map out the fastest, most affordable route to
              your pilot licence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-bold text-sm px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/40 tracking-wide w-full sm:w-auto text-center"
              >
                Enroll Now
              </Link>
              <Link
                href="https://wa.me/254724852457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-brand-green text-white hover:text-brand-green font-montserrat font-bold text-sm px-10 py-4 rounded-xl transition-all duration-300 tracking-wide w-full sm:w-auto"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
