import HeroSlider from "@/components/HeroSlider";
import ServicesArea from "@/components/ServicesArea";
import AboutArea from "@/components/AboutArea";
import CounterArea from "@/components/CounterArea";
import TestimonialArea from "@/components/TestimonialArea";
import CTAArea from "@/components/CTAArea";
import FeaturesArea from "@/components/FeaturesArea";
import AboutArea2 from "@/components/AboutArea2";
import EventsArea from "@/components/EventsArea";
import Volunteer from "@/components/Volunteer";
import Brand from "@/components/Brand";

export const metadata = {
  title: "Mukul Kumar Memorial Foundation",
  description:
    "Welcome to the Mukul Kumar Memorial Foundation. Join us in creating positive change through education, healthcare, and community development initiatives.",
  openGraph: {
    title: "Home - Mukul Kumar Memorial Foundation",
    description:
      "Creating positive change through education, healthcare, and community development initiatives.",
  },
};

export default function Home() {
  return (
    <main suppressHydrationWarning={true}>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Area */}
      <ServicesArea />

      {/* About Area */}
      <AboutArea />

      {/* Features Area */}
      <FeaturesArea />

      {/* Events Area */}
      <EventsArea />

      {/* CTA Area */}
      <CTAArea />

      {/* Counter Area */}
      <CounterArea />

      {/* Testimonial Area */}
      <TestimonialArea />

      {/* Volunteer Area */}
      <Volunteer />

      {/* Brand Area */}
      <Brand />
    </main>
  );
}
