import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="slider-area pos-rel">
        <div
          className="single-slider slider-height pos-rel d-flex align-items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/img/slider/1.jpg')",
            minHeight: "100vh",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="col-xl-7">
                <div className="slider__content text-left">
                  <h5 className="text-lg mb-6 text-white flex items-center">
                    <span className="pr-3">
                      <i className="fas fa-heart text-red-500"></i>
                    </span>
                    Raising Your Helping Hands
                  </h5>
                  <h1 className="text-5xl font-bold mb-8 text-white leading-tight">
                    Mission To Access Safe The Nation
                  </h1>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/about"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-200 inline-flex items-center"
                    >
                      Learn more{" "}
                      <span className="ml-2">
                        <i className="fas fa-heart"></i>
                      </span>
                    </Link>
                    <Link
                      href="/mission"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition duration-200 inline-flex items-center"
                    >
                      Our Cases{" "}
                      <span className="ml-2">
                        <i className="fas fa-heart"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/assets/img/services/01.jpg"
                    alt="Charity For Food"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      <Link href="/donation">Charity For Food</Link>
                    </h4>
                    <p className="text-gray-200 mb-4">
                      Giving food to those in need
                    </p>
                    <Link
                      href="/donation"
                      className="text-white hover:text-blue-300"
                    >
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/assets/img/services/02.jpg"
                    alt="Children Support"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      <Link href="/mission">Children Support</Link>
                    </h4>
                    <p className="text-gray-200 mb-4">
                      Supporting children's education and welfare
                    </p>
                    <Link
                      href="/mission"
                      className="text-white hover:text-blue-300"
                    >
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/assets/img/services/03.jpg"
                    alt="Refuge Shelter"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      <Link href="/about">Refuge Shelter</Link>
                    </h4>
                    <p className="text-gray-200 mb-4">
                      Providing safe shelter for refugees
                    </p>
                    <Link
                      href="/about"
                      className="text-white hover:text-blue-300"
                    >
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/assets/img/about/01.jpg"
                    alt="About Mukul Foundation"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <h1 className="text-4xl font-bold">25</h1>
                  <h4 className="text-lg font-semibold">Years Experience</h4>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="mb-8">
                <h6 className="text-blue-600 font-semibold mb-4 flex items-center">
                  <span className="mr-2">
                    <i className="fas fa-heart"></i>
                  </span>{" "}
                  About US
                </h6>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Challenge 264 Million Children Go to Schools
                </h2>
                <p className="text-gray-600 mb-6">
                  The Mukul Kumar Memorial Foundation is dedicated to creating
                  positive change in communities through education, healthcare,
                  and sustainable development initiatives. We believe every
                  child deserves access to quality education and healthcare.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span className="text-gray-600">
                      Providing quality education opportunities to
                      underprivileged children and ensuring they have the
                      resources they need to succeed.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                    <span className="text-gray-600">
                      Supporting healthcare initiatives and medical assistance
                      programs for communities in need across the region.
                    </span>
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-200 inline-flex items-center"
                >
                  Learn more{" "}
                  <span className="ml-2">
                    <i className="fas fa-heart"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold text-white">
                Join With Our{" "}
                <Link
                  href="/contact"
                  className="text-yellow-300 hover:underline"
                >
                  Volunteer
                </Link>{" "}
                Team
              </h2>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-200 inline-flex items-center"
              >
                Join Now{" "}
                <span className="ml-2">
                  <i className="fas fa-heart"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-blue-600 font-semibold mb-4 flex items-center justify-center">
              <span className="mr-2">
                <i className="fas fa-heart"></i>
              </span>{" "}
              Popular Cases
            </h6>
            <h2 className="text-4xl font-bold text-gray-800 max-w-4xl mx-auto">
              Donate Our Popular Charity Causes Around The World
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={`/assets/img/cases/0${item}.jpg`}
                    alt={`Case ${item}`}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 flex items-center">
                    <Image
                      src="/assets/img/cases/04.png"
                      alt="Location"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span className="ml-2 font-semibold text-sm">Somalia</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Link
                      href="/donation"
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-200"
                    >
                      Donate
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">
                        Raised <strong className="text-blue-600">$8,420</strong>
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    <Link href="/donation" className="hover:text-blue-600">
                      {index === 0 &&
                        "Donate Your Mind For The Homeless Children"}
                      {index === 1 &&
                        "Give Your Assets For The Homeless Children"}
                      {index === 2 &&
                        "Spent Your Money For The Homeless Children"}
                    </Link>
                  </h3>
                  <p className="text-gray-600">
                    Sed perspiciat unde omnis iste natus error voluptatem
                    accntiume
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="mb-8">
              <div className="text-4xl mb-4">
                <i className="flaticon-social-care text-yellow-300"></i>
              </div>
              <h1 className="text-4xl font-bold mb-2">85,642</h1>
              <p className="text-xl">Volunteers</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl mb-4">
                <i className="flaticon-donation text-yellow-300"></i>
              </div>
              <h1 className="text-4xl font-bold mb-2">74,523</h1>
              <p className="text-xl">Global Partners</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl mb-4">
                <i className="flaticon-charity text-yellow-300"></i>
              </div>
              <h1 className="text-4xl font-bold mb-2">65,634</h1>
              <p className="text-xl">Children Saved</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl mb-4">
                <i className="flaticon-community text-yellow-300"></i>
              </div>
              <h1 className="text-4xl font-bold mb-2">98,563</h1>
              <p className="text-xl">Refuge Shelters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Donation CTA */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/img/bg/02.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h6 className="text-yellow-300 font-semibold mb-4 flex items-center">
                <span className="mr-2">
                  <i className="fas fa-heart"></i>
                </span>{" "}
                Get Started With Us
              </h6>
              <h2 className="text-4xl font-bold text-white">
                Ready To Donate Our 250 Million Refugee?
              </h2>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end space-x-4">
                <div className="bg-white rounded-lg p-4">
                  <input
                    type="text"
                    defaultValue="$5"
                    className="text-center font-bold text-lg border-none outline-none w-16"
                  />
                </div>
                <Link
                  href="/donation"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-200 inline-flex items-center"
                >
                  Donate Now{" "}
                  <span className="ml-2">
                    <i className="fas fa-heart"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
