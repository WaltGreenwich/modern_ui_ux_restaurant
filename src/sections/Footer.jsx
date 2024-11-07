import FooterOverlay from "../components/FooterOverlay";
import Newsletter from "../components/Newsletter";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../constants";

const Footer = () => {
  return (
    // Añadimos bg-cover para que la imagen de fondo se expanda y bg-center para centrar la imagen en el footer
    <footer
      className="flex items-center flex-col justify-center w-full relative z-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${images.bg})` }}
    >
      <FooterOverlay />
      <Newsletter />

      <div className="text-white grid grid-cols-1 md:grid-cols-3 justify-between gap-8 md:gap-0 mt-16 md:mt-12 px-4 md:px-0">
        {/* Sección de Contact Us */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-base text-3xl mb-4">Contact Us</h1>
          <p className="font-alt">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="font-alt">+1 212-344-1230</p>
          <p className="font-alt">+1 212-555-1230</p>
        </div>

        {/* Sección de logo e información */}
        <div className="flex flex-col items-center text-center mb-16">
          <img src={images.gericht} alt="logo" className="max-w-[210px] mb-3" />
          <p className="font-alt mb-4">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img src={images.spoon} alt="spoon" className="w-12 mb-4" />
          <div className="flex space-x-4 mb-4 text-2xl hover:text-golden">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        {/* Sección de Working Hours */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-base text-3xl mb-4">Working Hours</h1>
          <p className="font-alt">Monday-Friday:</p>
          <p className="font-alt mb-4">08:00 am - 12:00 am</p>
          <p className="font-alt">Saturday-Sunday:</p>
          <p className="font-alt">07:00 am - 11:00 pm</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white mt-8 mb-32 md:mt-12 text-center">
        <p className="font-alt xs:text-sm md:text-base">
          2021 Gerícht. All Rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
