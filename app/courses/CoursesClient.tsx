"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MdSchool,
  MdWork,
  MdExplore,
  MdBuild,
  MdBusiness,
  MdComputer,
  MdPerson,
  MdFlight,
} from "react-icons/md";
import { FaHelicopter, FaDesktop, FaWhatsapp } from "react-icons/fa";
import { GiJetFighter } from "react-icons/gi";
import { IconType } from "react-icons";

interface Course {
  icon: IconType;
  title: string;
  slug: string;
  badge?: string;
  description: string;
  details: string[];
  level: string;
  format: string;
}

const courses: Course[] = [
  {
    icon: MdSchool,
    title: "PPL Ground School",
    slug: "ppl-ground-school",
    badge: "Most Popular",
    description:
      "Your journey into aviation starts here. Our Private Pilot Licence ground school is the most structured PPL programme in Kenya, covering every subject you need to pass your KCAA theory exams and become a safe, competent pilot.",
    details: [
      "Aviation Meteorology & Weather Interpretation",
      "Air Navigation & Flight Planning",
      "Aviation Law & KCAA Regulations",
      "Aircraft General Knowledge & Airframe Systems",
      "Flight Performance, Planning & Loading",
      "Human Performance & Limitations",
    ],
    level: "Beginner → PPL",
    format: "In-Person & Online",
  },
  {
    icon: GiJetFighter,
    title: "CPL Ground School",
    slug: "cpl-ground-school",
    badge: "Professional Track",
    description:
      "For pilots with their PPL ready to go commercial. Our CPL ground school dives deep into advanced aircraft systems, instrument flight rules, and the commercial regulations that govern professional aviation in Kenya and beyond.",
    details: [
      "Advanced Meteorology & Upper Air Charts",
      "IFR Navigation & Instrument Procedures",
      "Advanced Aircraft Technical Knowledge",
      "ATPL Bridging Preparation",
      "Commercial Air Law & Chicago Convention",
      "Mock KCAA Examination Sessions",
    ],
    level: "PPL Holder → CPL",
    format: "In-Person & Online",
  },
  {
    icon: FaHelicopter,
    title: "Helicopter PPL & CPL",
    slug: "helicopter-training",
    description:
      "Rotorcraft flying demands a distinct skillset. Our helicopter training programme covers both Private and Commercial levels, equipping students with the theoretical and practical foundation for a helicopter career in utility, tourism, or offshore operations.",
    details: [
      "Rotorcraft Aerodynamics & Autorotation",
      "Helicopter Systems & Powerplant",
      "Mountain & Confined Area Operations",
      "Helicopter Navigation & Flight Planning",
      "PPL(H) & CPL(H) Exam Preparation",
      "Career Pathways in Helicopter Aviation",
    ],
    level: "Zero to CPL(H)",
    format: "In-Person & Online",
  },
  {
    icon: MdComputer,
    title: "Online Pilot Courses",
    slug: "online-courses",
    badge: "Study Anywhere",
    description:
      "Geography should never be a barrier to becoming a pilot. Our fully online aviation courses are self-paced, instructor-supported, and aligned with KCAA standards — giving students across Africa access to world-class training from home.",
    details: [
      "Video-based lectures by licensed instructors",
      "Downloadable study materials & revision notes",
      "Weekly live Q&A sessions with tutors",
      "Online mock examinations with feedback",
      "Progress tracking & study plans",
      "Certificates of completion",
    ],
    level: "All Levels",
    format: "100% Online",
  },
  {
    icon: FaDesktop,
    title: "Simulator Training",
    slug: "simulator-training",
    description:
      "Cockpit familiarity and instrument confidence are built through repetition. Our simulator sessions place you in a realistic flight environment where you can practise emergency procedures, navigation exercises, and instrument approaches without the cost of flight hours.",
    details: [
      "Instrument Flight Rules (IFR) Practice",
      "Emergency Procedures & Abnormal Checklists",
      "Cross-Country Navigation Scenarios",
      "Approach & Landing Techniques",
      "Crew Resource Management Exposure",
      "Debriefing & Performance Analysis",
    ],
    level: "Student Pilot & Above",
    format: "In-Person (Nairobi)",
  },
  {
    icon: MdPerson,
    title: "1-on-1 Pilot Mentorship",
    slug: "mentorship",
    badge: "High Impact",
    description:
      "The most powerful thing in aviation is having someone who has done it before walk beside you. Our licensed commercial pilots offer intensive one-on-one mentorship sessions tailored entirely to your stage, goals, and challenges.",
    details: [
      "Personalised aviation roadmap creation",
      "Study strategy & exam technique coaching",
      "Interview preparation for airline cadetships",
      "Financial planning for pilot training",
      "CV & portfolio review for aviation jobs",
      "Ongoing accountability & progress check-ins",
    ],
    level: "All Stages",
    format: "1-on-1 (In-Person or Virtual)",
  },
  {
    icon: MdWork,
    title: "Career Guidance for Aviation Students",
    slug: "career-guidance",
    description:
      "Becoming a pilot is only the beginning. Our career advisory service helps you navigate the complex world of aviation employment — from understanding type rating requirements to identifying cadet programmes and negotiating your first airline contract.",
    details: [
      "Airline cadet programme identification & application",
      "Type rating pathway planning",
      "CV, cover letter & LinkedIn optimisation",
      "Pilot interview coaching (technical & HR)",
      "African & international airline landscape briefing",
      "Networking & industry introductions",
    ],
    level: "Student Pilots & Licence Holders",
    format: "Consultation Sessions",
  },
  {
    icon: MdExplore,
    title: "Airport Tours",
    slug: "airport-tours",
    description:
      "Before you commit to a training pathway, experience aviation first-hand. Our guided airport tours take you airside — into the world of ATC, ground handling, engineering hangars, and live aircraft operations — giving you a real feel for the industry.",
    details: [
      "Guided tours of active airport facilities",
      "ATC tower and operations centre visits",
      "Aircraft hangar and maintenance exposure",
      "Interaction with active aviation professionals",
      "Ideal for students at career decision stage",
      "Group and private tour options",
    ],
    level: "Aspiring Pilots",
    format: "In-Person (Nairobi Airports)",
  },
  {
    icon: MdBuild,
    title: "Aircraft Spare Parts",
    slug: "spare-parts",
    description:
      "We supply quality aircraft spare parts to flying schools, private aircraft operators, and approved maintenance organisations across Kenya and East Africa. Our network of trusted suppliers ensures airworthy parts with full documentation.",
    details: [
      "Light aircraft component sourcing",
      "Engine and avionics parts supply",
      "Flying school fleet support",
      "Full documentation & airworthiness traceability",
      "Expedited procurement services",
      "East Africa-wide delivery network",
    ],
    level: "Operators & MROs",
    format: "B2B Supply",
  },
  {
    icon: MdBusiness,
    title: "Corporate & Airline Partnerships",
    slug: "partnerships",
    description:
      "We partner with airlines, flying academies, and corporates to create structured cadet pipelines, training sponsorship schemes, and co-branded mentorship programmes that address the growing demand for aviation talent across Africa.",
    details: [
      "Cadet pipeline design & management",
      "Corporate aviation awareness programmes",
      "Scholarship & sponsorship programme structure",
      "Flying school curriculum collaboration",
      "HR & recruitment advisory for airlines",
      "Co-branded events & aviation outreach",
    ],
    level: "Airlines, Corporates & Schools",
    format: "Partnership Agreement",
  },
];

export default function CoursesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy pt-36 pb-24 overflow-hidden hero-grid">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/40 text-brand-green font-inter text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            10 Courses & Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5"
          >
            Our Courses &{" "}
            <span className="text-brand-green">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-white/70 text-lg max-w-2xl mx-auto"
          >
            From zero to commercial pilot — every step of the journey, covered.
            Explore our full range of aviation training programmes and support
            services.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Card header */}
                <div className="bg-gradient-to-br from-brand-navy to-brand-blue p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                        <course.icon className="text-white text-2xl" />
                      </div>
                      <div>
                        {course.badge && (
                          <span className="inline-block bg-brand-green/20 text-brand-green font-inter text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">
                            {course.badge}
                          </span>
                        )}
                        <h2 className="font-montserrat font-bold text-white text-lg leading-tight">
                          {course.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 relative z-10">
                    <span className="bg-white/10 border border-white/20 text-white/80 font-inter text-xs px-2.5 py-1 rounded-lg">
                      {course.level}
                    </span>
                    <span className="bg-brand-green/20 border border-brand-green/30 text-brand-green font-inter text-xs px-2.5 py-1 rounded-lg">
                      {course.format}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-inter text-gray-600 text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="font-montserrat font-bold text-brand-navy text-xs uppercase tracking-widest mb-3">
                      What's Covered
                    </h3>
                    <ul className="space-y-2">
                      {course.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 font-inter text-gray-600 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto flex gap-3">
                    <Link
                      href={`/contact?course=${course.slug}`}
                      className="flex-1 text-center bg-brand-blue hover:bg-brand-blue-light text-white font-montserrat font-semibold text-sm py-3 rounded-xl transition-all duration-300"
                    >
                      Get Details
                    </Link>
                    <Link
                      href="https://wa.me/254704832506"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white font-inter text-sm px-4 py-3 rounded-xl transition-all duration-300"
                    >
                      <FaWhatsapp className="text-base" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4">
              Not Sure Which Course Is Right for You?
            </h2>
            <p className="font-inter text-white/60 mb-8">
              Talk to one of our aviation advisors today — for free. We'll help
              you map out the fastest and most affordable path to your pilot
              licence.
            </p>
            <Link
              href="https://wa.me/254704832506"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-green-600 text-white font-montserrat font-bold text-sm px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30"
            >
              <FaWhatsapp className="text-xl" />
              Get Free Course Advice on WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
