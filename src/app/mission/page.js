export const metadata = {
  title: "Our Mission - Mukul Foundation",
  description:
    "Discover Mukul Foundation's vision, mission, and values. We're committed to education, healthcare, sustainability, and empowering individuals through skill development programs.",
  keywords:
    "mukul foundation mission, vision, values, education programs, healthcare initiatives, sustainability",
  openGraph: {
    title: "Our Mission - Mukul Foundation",
    description:
      "Discover our vision, mission, and values focused on education, healthcare, and sustainable development.",
    type: "website",
  },
};

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Vision</h2>
          <p className="text-lg text-blue-700">
            To create a world where every individual has access to opportunities
            for growth, education, and a dignified life.
          </p>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Mission
          </h2>
          <p className="text-lg text-green-700 mb-4">
            Mukul Foundation is committed to:
          </p>
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>
              Providing educational opportunities to underprivileged children
            </li>
            <li>
              Supporting healthcare initiatives in underserved communities
            </li>
            <li>
              Promoting sustainable development and environmental conservation
            </li>
            <li>Empowering individuals through skill development programs</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">
            Values
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-purple-700">
            <div>
              <h3 className="font-semibold">Integrity</h3>
              <p>
                We maintain the highest standards of honesty and transparency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Compassion</h3>
              <p>
                We approach every initiative with empathy and understanding.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Excellence</h3>
              <p>We strive for excellence in all our programs and services.</p>
            </div>
            <div>
              <h3 className="font-semibold">Collaboration</h3>
              <p>
                We believe in the power of partnerships and community
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
