import HeroSliderexport default function Home() {
  return (
    <main style={{marginTop: '80px'}} suppressHydrationWarning={true}>
      {/* Hero Slider */}
      <HeroSlider /> "@/components/HeroSlider";
import ServicesArea from "@/components/ServicesArea";
import AboutArea from "@/components/AboutArea";
import CounterArea from "@/components/CounterArea";
import TestimonialArea from "@/components/TestimonialArea";

export const metadata = {
  title: "Home - Creating Positive Change",
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
    <main style={{ marginTop: "80px" }}>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Area */}
      <ServicesArea />

      {/* About Area */}
      <AboutArea />

      {/* Counter Area */}
      <CounterArea />

      {/* Testimonial Area */}
      <TestimonialArea />
    </main>
  );
}
