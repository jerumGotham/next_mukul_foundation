export const metadata = {
  title: "About Us - Mukul Foundation",
  description:
    "Learn about Mukul Foundation's history, mission, and commitment to creating positive change in communities through education, healthcare, and sustainable development.",
  keywords:
    "about mukul foundation, charity history, foundation story, community impact",
  openGraph: {
    title: "About Us - Mukul Foundation",
    description:
      "Learn about Mukul Foundation's history, mission, and commitment to creating positive change in communities.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          Welcome to Mukul Foundation - dedicated to making a positive impact in
          our community.
        </p>
        <p className="text-lg mb-6">
          Our foundation was established with the vision of creating meaningful
          change and supporting those in need through various charitable
          initiatives and programs.
        </p>
        <p className="text-lg">
          We believe in the power of collective action and community support to
          build a better future for all.
        </p>
      </div>
    </div>
  );
}
