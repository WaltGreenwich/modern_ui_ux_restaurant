import { images } from "../constants";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-[url('src/assets/bg.png')] bg-cover min-h-screen relative flex items-center justify-center px-8 py-16"
    >
      {/* Contenedor de la letra "G" en el fondo, centrada */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50 z-0">
        <img src={images.G} alt="g letter" className="w-[391px] h-[415px]" />
      </div>

      {/* Contenedor principal con disposición en línea y z-index para estar sobre la "G" */}
      <div className="relative z-10 flex flex-1 items-center justify-center space-x-8 max-w-screen-xl">
        {/* Bloque de "About Us" */}
        <div className="text-center max-w-xs">
          <h1 className="text-4xl font-base font-bold text-golden tracking-custom">
            About Us
          </h1>
          <img src={images.spoon} alt="spoon" className="mx-auto my-4" />
          <p className="text-lg py-4 text-grey">
            At Gericht Restaurant, we blend passion with culinary expertise to
            offer a unique dining experience. Our team of skilled chefs crafts
            each dish with fresh ingredients, bringing flavors to life in every
            meal.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
            Know More
          </button>
        </div>

        {/* Imagen del cuchillo */}
        <div className="flex justify-center">
          <img src={images.knife} alt="knife" className="h-[910px]" />
        </div>

        {/* Bloque de "Our History" */}
        <div className="text-center max-w-xs">
          <h1 className="text-4xl font-base font-bold text-golden tracking-custom">
            Our History
          </h1>
          <img src={images.spoon} alt="spoon" className="mx-auto my-4" />
          <p className="text-lg py-4 text-grey">
            Since our founding, Gericht Restaurant has been dedicated to
            excellence in cuisine and hospitality.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

// import { images } from "../constants";

// const AboutUs = () => {
//   return (
//     <section
//       id="about-us"
//       className="bg-[url('src/assets/bg.png')] min-h-screen"
//     >
//       <div className="relative items-center justify-center max-w-screen-xl">
//         <div className="absolute inset-0 items-center justify-center">
//           <img
//             src={images.G}
//             alt="g letter"
//             className="w-[391px] h-[415] z-0"
//           />
//         </div>
//         <div>
//           <div>
//             <h1 className="text-4xl font-base font-bold text-golden tracking-custom">
//               About Us
//             </h1>
//             <img src={images.spoon} alt="spoon" />
//             <p className="text-lg py-8 text-grey">
//               At Gericht Restaurant, we blend passion with culinary expertise to
//               offer a unique dining experience. Our team of skilled chefs crafts
//               each dish with fresh ingredients, bringing flavors to life in
//               every meal. Join us to savor a perfect blend of tradition and
//               innovation in fine dining.
//             </p>
//             <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
//               Know More
//             </button>

//             <div className="my-8 mx-16">
//               <img src={images.knife} alt="knife" className="h-[910px]" />
//             </div>

//             <div>
//               <h1 className="text-4xl font-base font-bold text-golden tracking-custom">
//                 Our History
//               </h1>
//               <img src={images.spoon} alt="spoon" />
//               <p className="text-lg py-8 text-grey">
//                 Since our founding, Gericht Restaurant has been dedicated to
//                 excellence in cuisine and hospitality. Starting as a small local
//                 eatery, we have grown into a beloved destination for food
//                 lovers, where every meal celebrates our heritage and commitment
//                 to quality.
//               </p>
//               <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
//                 Know More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
