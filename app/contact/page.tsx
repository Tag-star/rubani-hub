import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rubani Hub — Kenya's premier aviation training hub. Enroll in a course, book a mentorship session, or ask us anything about becoming a pilot in Kenya. Call, WhatsApp, or email us today.",
  keywords: [
    "contact Rubani Hub",
    "enroll aviation course Kenya",
    "pilot training enquiry Nairobi",
    "aviation school contact Kenya",
    "PPL CPL enrollment Kenya",
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
