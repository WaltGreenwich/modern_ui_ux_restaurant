import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";
import { navLinks, navLogin } from "../constants/links";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-4 absolute z-10 w-full bg-black">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={images.gericht} alt="Logo" width={130} height={29} />
        </a>

        {/* Menú de navegación en pantallas grandes */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-alt text-lg text-white hover:text-grey"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Links adicionales de Login y Book Table en pantallas grandes */}
        <ul className="flex items-center gap-6 max-lg:hidden padding-x">
          {navLogin.map((item, index) => (
            <React.Fragment key={item.id}>
              <li>
                <a
                  href={item.href}
                  className="font-alt text-lg text-white border-b border-transparent hover:border-golden transition duration-500 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
              {index === 0 && <div className="w-px h-6 bg-grey"></div>}
            </React.Fragment>
          ))}
        </ul>

        {/* Menú hamburguesa en pantallas pequeñas */}
        <div className="hidden max-lg:block text-3xl text-white">
          {!isMenuOpen && (
            <GiHamburgerMenu
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </nav>

      {/* Menú hamburguesa desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center gap-8 z-50">
          {/* Icono de cierre en la esquina superior derecha */}
          <MdOutlineRestaurantMenu
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-7 text-golden text-3xl cursor-pointer"
          />

          {/* Links del menú hamburguesa */}
          <ul className="flex flex-col items-center gap-8 text-center font-base text-golden text-[2rem] ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
