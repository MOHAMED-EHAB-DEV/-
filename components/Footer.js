import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-teal py-12">
      <footer className="grid grid-flow-row sm:grid-flow-col place-items-start sm:gap-10 gap-4 text-sm p-10 container mx-auto text-white">
        {/* الشعار والعنوان */}
        <div className="grid grid-flow-col sm:grid-flow-row gap-2 items-center">
          <Link href={`/`}>
            <h1 className="cursor-pointer almarai-bold text-white text-lg hover:text-teal-200 transition-colors duration-300">
              Qimma Commercial Space
              <br />
              For Industrial Systems
            </h1>
          </Link>

          <div className="flex gap-2">
            <Link href="https://www.facebook.com/Areameasurements">
              <FaFacebook className="w-12 h-12" />
            </Link>
          </div>
        </div>

        {/* روابط الصفحات */}
        <div className="text-lg sm:grid flex flex-col sm:w-fit w-full sm:grid-flow-row gap-2">
          <Link
            className="link-hover text-white almarai-bold text-lg hover:text-teal-200 transition-colors duration-300"
            href={`/services`}
            aria-label="Home"
          >
            Home
          </Link>
          <div className="flex flex-col pl-2 sm:p-0 gap-2 justify-center sm:justify-start">
            <Link
              className="text-white text-base hover:text-teal-200 transition-colors duration-300"
              href={`/about`}
              aria-label="About Us"
            >
              About Us
            </Link>
            <Link
              className="text-white text-base hover:text-teal-200 transition-colors duration-300"
              href={`/contacts`}
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* روابط المنتجات */}
        <div className="sm:grid flex flex-col w-full sm:w-fit sm:grid-flow-row gap-2">
          <Link
            className="text-white almarai-bold text-lg hover:text-teal-200 transition-colors duration-300"
            href={`/products`}
            aria-label="Products"
          >
            Products
          </Link>
          <div className="flex flex-col pl-2 sm:p-0 gap-2 justify-center sm:justify-start">
            <Link
              className="almarai-regular text-white hover:text-teal-200 transition-colors duration-300"
              href={`/products/gnss`}
              aria-label="GNSS Receiver"
            >
              GNSS Receiver
            </Link>
            <Link
              className="almarai-regular text-white hover:text-teal-200 transition-colors duration-300"
              href={`/products/rugged`}
              aria-label="Optical Survey"
            >
              Optical Survey
            </Link>
            <Link
              className="almarai-regular text-white hover:text-teal-200 transition-colors duration-300"
              href={`/products/accessory`}
              aria-label="Accessory"
            >
              Accessory
            </Link>
          </div>
        </div>

        {/* معلومات الاتصال */}
        <div className="sm:grid flex flex-col w-full sm:grid-flow-row gap-2">
          <Link
            className="text-white almarai-bold text-lg hover:text-teal-200 transition-colors duration-300"
            href={`/contacts`}
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
          <div className="flex gap-2 flex-col pl-2 sm:p-0 justify-center sm:justify-start">
            <span className="almarai-regular text-white hover:text-teal-200 transition-colors duration-300">
              E-mail: info@surveyingpeaks.com
            </span>
            <span className="almarai-regular text-white hover:text-teal-200 transition-colors duration-300">
              Address: Jeddah - Mushrifah District, Al-Sanee Communications
              Market, Toknaf Showroom
            </span>
            <span className="almarai-regular text-white hover:text-teal-200 transition-colors duration-300">
              Mobile Number: +966531372416
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
