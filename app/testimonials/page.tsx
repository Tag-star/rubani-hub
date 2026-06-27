import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Student Testimonials",
  description:
    "Read what Rubani Hub students say about our aviation training. Real stories from Kenyan pilots who found their path to the cockpit through our ground school, mentorship, and career guidance programmes.",
  keywords: [
    "Rubani Hub reviews",
    "pilot training Kenya testimonials",
    "aviation school Nairobi reviews",
    "student pilot success Kenya",
    "PPL CPL training feedback Kenya",
  ],
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
