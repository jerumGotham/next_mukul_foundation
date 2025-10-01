import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Preloader from "@/components/Preloader";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mukulkumarfoundation.org"),
  title: {
    default: "Mukul Kumar Memorial Foundation - Creating Positive Change",
    template: "%s | Mukul Kumar Memorial Foundation",
  },
  description:
    "Dedicated to creating positive change and empowering communities through education, healthcare, and sustainable development initiatives.",
  keywords: [
    "foundation",
    "charity",
    "education",
    "healthcare",
    "mukul kumar",
    "memorial",
    "donation",
    "volunteer",
  ],
  authors: [{ name: "Mukul Kumar Memorial Foundation" }],
  creator: "Mukul Kumar Memorial Foundation",
  publisher: "Mukul Kumar Memorial Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mukulkumarfoundation.org",
    siteName: "Mukul Kumar Memorial Foundation",
    title: "Mukul Kumar Memorial Foundation - Creating Positive Change",
    description:
      "Dedicated to creating positive change and empowering communities through education, healthcare, and sustainable development initiatives.",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mukul Kumar Memorial Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mukulkumarfoundation",
    creator: "@mukulkumarfoundation",
    title: "Mukul Kumar Memorial Foundation - Creating Positive Change",
    description:
      "Dedicated to creating positive change and empowering communities through education, healthcare, and sustainable development initiatives.",
    images: ["/assets/img/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/img/favicon.ico"
        />

        {/* Original Template CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/font.css" />
        <link rel="stylesheet" href="/assets/css/themify-icons.css" />
        <link rel="stylesheet" href="/assets/css/metisMenu.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/custom-foundation.css" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <StructuredData />
        <Preloader />
        <Navigation />

        <main>{children}</main>

        <Footer />

        {/* Original Template JavaScript */}
        <Script
          src="/assets/js/vendor/modernizr-3.5.0.min.js"
          strategy="beforeInteractive"
          suppressHydrationWarning={true}
        />
        <Script
          src="/assets/js/vendor/jquery-1.12.4.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
        {/* Commenting out problematic scripts that conflict with React DOM management */}
        {/* <Script
          src="/assets/js/jquery.meanmenu.min.js"
          strategy="afterInteractive"
        /> */}
        <Script src="/assets/js/metisMenu.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.nice-select.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.scrollUp.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.easypiechart.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/tilt.jquery.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/main.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
