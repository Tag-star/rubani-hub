import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rubani Hub's mission to bridge the African aviation gap. Founded by a licensed commercial pilot, we exist to make pilot training accessible to every aspiring aviator in Kenya and across Africa.",
  keywords: [
    "aviation school Kenya about",
    "Rubani Hub founder",
    "pilot training mission Kenya",
    "African aviation gap",
    "KCAA pilot training Nairobi",
  ],
};

export default function AboutPage() {
  return <AboutClient />;
}
