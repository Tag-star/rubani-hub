import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const courses = [
  "PPL Ground School",
  "CPL Ground School",
  "Helicopter Training",
  "Simulator Training",
  "1-on-1 Mentorship",
  "Online Pilot Courses",
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <div className="relative h-14 w-36">
                  <Image
                    src="/logo.jpeg"
                    alt="Rubani Hub — Aviation Training Kenya"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
            </div>
            <p className="font-inter text-white/60 text-sm leading-relaxed mb-6">
              Kenya's premier aviation mentorship and pilot training hub. We exist to bridge the gap in African aviation by creating world-class pilots.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61591331616531", label: "Facebook" },
                { icon: <FaInstagram />, href: "https://instagram.com/rubanihub", label: "Instagram" },
                { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/rubani-hub-96422b41a", label: "LinkedIn" },
                { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-white/60 hover:text-brand-green text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-brand-green/0 group-hover:bg-brand-green transition-all duration-300 group-hover:w-5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-5">
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    href="/courses"
                    className="font-inter text-white/60 hover:text-brand-green text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-brand-green/0 group-hover:bg-brand-green transition-all duration-300 group-hover:w-5" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdEmail className="text-brand-green text-lg mt-0.5 flex-shrink-0" />
                <a href="mailto:rubanihub254@gmail.com" className="font-inter text-white/60 hover:text-white text-sm transition-colors duration-200">
                  rubanihub@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="text-brand-green text-lg mt-0.5 flex-shrink-0" />
                <a href="tel:+254724852457" className="font-inter text-white/60 hover:text-white text-sm transition-colors duration-200">
                  +254 724 852 457
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-brand-green text-lg mt-0.5 flex-shrink-0" />
                <span className="font-inter text-white/60 text-sm">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
            <Link
              href="https://wa.me/254724852457"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white font-montserrat font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/40 text-xs">
            © {new Date().getFullYear()} Rubani Hub. All rights reserved.
          </p>
          <p className="font-inter text-white/40 text-xs italic">
            "Your Flight Begins Here" — Training Africa's Next Generation of Pilots
          </p>
        </div>
      </div>
    </footer>
  );
}
