import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import SubHeading from "../components/SubHeading";
import { images } from "../constants";
import { useRef } from "react";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  // Función para controlar el desplazamiento en el carrusel
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300; // Cantidad de desplazamiento en px
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="flex justify-center bg-black py-16 px-16">
      <div className="flex lg:flex-row xs:flex-col w-full">
        {/* Sección izquierda con título y descripción */}
        <div className="text-white mb-16 lg:w-1/2 xs:w-full">
          <SubHeading title="Instagram" />
          <h1 className="font-base text-golden text-5xl font-semibold tracking-custom mb-8">
            Photo Gallery
          </h1>
          <p className="font-alt mb-8">
            Discover memorable moments in our photo gallery, showcasing our
            commitment to excellence and unique atmosphere.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
            View More
          </button>
        </div>

        {/* Sección derecha con el carrusel */}
        <div className="relative flex items-center lg:w-1/2 xs:w-full">
          {/* Carrusel de imágenes */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll no-scrollbar space-x-4 scroll-smooth"
          >
            {galleryImages.map((image, index) => (
              <div
                key={`gallery_image-${index + 1}`}
                className="relative min-w-[301px] h-[447px] transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt="gallery"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Icono de Instagram aparece sobre la imagen al pasar el mouse */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 rounded-lg transition-opacity duration-300">
                  <BsInstagram className="text-white text-4xl opacity-0 hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>

          {/* Botones de scroll izquierdo y derecho */}
          <div className="absolute left-0 -ml-8 bg-black bg-opacity-70 p-2 rounded-md cursor-pointer">
            <BsArrowLeftShort
              className="text-golden text-3xl"
              onClick={() => scroll("left")}
            />
          </div>
          <div className="absolute right-0 -mr-8 bg-black bg-opacity-70 p-2 rounded-md cursor-pointer">
            <BsArrowRightShort
              className="text-golden text-3xl"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
