import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Courses & Services",
  description:
    "Explore all aviation courses and services at Rubani Hub — PPL ground school, CPL ground school, helicopter training, simulator sessions, 1-on-1 mentorship, and more. Kenya's most comprehensive pilot training hub.",
  keywords: [
    "PPL ground school Kenya",
    "CPL ground school Nairobi",
    "helicopter pilot course Africa",
    "aviation simulator training Kenya",
    "online pilot courses Kenya",
    "pilot mentorship Kenya",
    "KCAA exams preparation",
  ],
};

export default function CoursesPage() {
  return <CoursesClient />;
}
