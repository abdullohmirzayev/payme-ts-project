import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleHeandler = () => setToggleNav((prev) => !prev);

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="sm:w-[100px] w-[85px] sm:h-[60px] h-[50px] cursor-pointer"
      />

      {/* Nanigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${
              idx === navigationLinks.length - 1 ? "mr-0    " : "mr-10"
            } hover:text-lightWhite transition-all duration-500`}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img
          src={toggleNav ? close : menu}
          alt="munu"
          className="w-[40px] h-[40px] object-contain"
          onClick={toggleHeandler}
        />
      </div>
    </div>
  );
};

export default Navbar;
