import SubHeading from "../components/SubHeading";

const Newsletter = () => {
  return (
    <div className="flex flex-col text-white items-center sm:border-2 border-golden py-8 mt-16 bg-black mx-4 sm:mx-8 lg:mx-16">
      <div className="text-center mx-8">
        <SubHeading title="Newsletter" isCentered={true} />
        <h1 className="font-base font-semibold tracking-custom text-golden xs:text-4xl md:text-5xl mb-2">
          Subscribe To Our Newsletter
        </h1>
        <p className="mb-12">And never miss latest Updates!</p>
      </div>
      <div className="flex lg:flex-row xs:flex-col items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
        <input
          type="email"
          placeholder="Enter your e-mail"
          className="font-base lg:w-[612px] xs:w-[300px] font-semibold border-golden border-2 bg-black text-md rounded-md py-2 px-4"
        />
        <button className="bg-crimson font-base text-black text-base px-6 py-2 rounded-md leading-7 font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

// import SubHeading from "../components/SubHeading";

// const Newsletter = () => {
//   return (
//     <div className="flex flex-col text-white items-center sm:border-2 border-golden py-8 mt-16 bg-black">
//       <div className="text-center mx-8">
//         <SubHeading title="Newsletter" isCentered={true} />
//         <h1 className="font-base font-semibold tracking-custom text-golden text-5xl mb-2">
//           Subscribe to Our Newsletter
//         </h1>
//         <p className="mb-12">And never miss latest Updates!</p>
//       </div>
//       <div className="flex lg:flex-row xs:flex-col">
//         <input
//           type="email"
//           placeholder="Enter your e-mail"
//           className="font-base lg:w-[612px] xs:w-[300px] font-semibold border-golden border-2 bg-black text-md mr-8 rounded-md mb-6"
//         />
//         <button className="bg-crimson font-base text-black text-base py-2 rounded-sm leading-7 font-bold">
//           Subscribe
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;
