import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";
import { navLinks, navLogin } from "../constants/links";

const Nav = () => {
  return (
    <header className="padding-x py-4 absolute z-10 w-full bg-black">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={images.gericht} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-white hover:text-grey"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-6 max-lg:hidden">
          {navLogin.map((item, index) => (
            <React.Fragment key={item.key}>
              <li>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-white border-b border-transparent hover:border-golden transition duration-500 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
              {index === 0 && <div className="w-px h-6 bg-grey"></div>}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineRestaurantMenu } from "react-icons/md";
// import images from "../constants/images";
// import { navLinks, navLogin } from "../constants/links";

// const Nav = () => {
//   return (
//     <header className="padding-x py-4 absolute z-10 w-full bg-black">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={images.gericht} alt="Logo" width={130} height={29} />
//         </a>
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//           {navLinks.map((link) => (
//             <li key={link.key}>
//               <a
//                 href={link.href}
//                 className="font-montserrat leading-normal text-lg text-white hover:text-grey"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden ">
//           {navLogin.map((item) => (
//             <li key={item.key}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-white border-b border-transparent hover:border-golden transition duration-500 ease-in-out"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Nav;
