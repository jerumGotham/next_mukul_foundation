export const metadata = {
  title: "Donate - Support Mukul Foundation",
  description:
    "Make a donation to Mukul Foundation and support our mission. Every contribution helps us provide education, healthcare, and development programs to communities in need.",
  keywords:
    "donate mukul foundation, charitable donations, support education, healthcare donations, tax deductible",
  openGraph: {
    title: "Donate - Support Mukul Foundation",
    description:
      "Make a donation and support our mission to create positive change in communities worldwide.",
    type: "website",
  },
};

export default function DonationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Make a Donation</h1>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Your Support Makes a Difference
          </h2>
          <p className="text-lg">
            Every donation, no matter the size, helps us continue our mission of
            creating positive change in communities around the world. Join us in
            making a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Donation Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Donation Options</h3>

            {/* Quick Amounts */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Quick Donate</h4>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition">
                  $25
                </button>
                <button className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition">
                  $50
                </button>
                <button className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition">
                  $100
                </button>
                <button className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition">
                  $250
                </button>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="custom-amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="custom-amount"
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Make this a monthly donation</span>
                </label>
              </div>

              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition font-semibold">
                Donate Now
              </button>
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Your Impact</h3>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">
                  $25 can provide
                </h4>
                <p className="text-green-700">
                  School supplies for one child for a month
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">$50 can provide</h4>
                <p className="text-blue-700">
                  Nutritious meals for a family for a week
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800">
                  $100 can provide
                </h4>
                <p className="text-purple-700">
                  Medical care for one person in need
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800">
                  $250 can provide
                </h4>
                <p className="text-orange-700">
                  Vocational training for one individual
                </p>
              </div>
            </div>

            {/* Other Ways to Help */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Other Ways to Help</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Volunteer your time and skills</li>
                <li>• Organize a fundraising event</li>
                <li>• Share our mission with friends and family</li>
                <li>• Follow us on social media</li>
                <li>• Corporate partnerships and sponsorships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tax Information */}
        <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Tax Deductible</h4>
          <p className="text-yellow-700 text-sm">
            Mukul Foundation is a registered 501(c)(3) nonprofit organization.
            Your donation is tax-deductible to the full extent allowed by law.
            Tax ID: XX-XXXXXXX
          </p>
        </div>
      </div>
    </div>
  );
}
