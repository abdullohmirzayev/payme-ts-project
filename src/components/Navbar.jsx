import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHeandler = () => setToggleNav((prev) => !prev);
  const activeHeandler = (id) => setActive(id);

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
            className={`${idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
            ${active === nav.id ? "text-white" : "text-lightWhite"}
            font-montserrat font-normal cursor-pointer text-[16px]
            hover:text-white transition-all duration-500`}
            onClick={() => activeHeandler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className={"sm:hidden flex flex-1 justify-end items-end"}>
        <img
          src={toggleNav ? close : menu}
          alt="munu"
          className="w-[40px] h-[40px] object-contain"
          onClick={toggleHeandler}
        />

        <div
          className={`${!toggleNav ? "hidden" : "flex"
            } p-6 absolute top-[6rem] right-0 left-0 w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex justify-center items-center flex-1">
            {navigationLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`${idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
              ${active === nav.id ? "text-white" : "text-lightWhite"}
              font-montserrat font-normal cursor-pointer text-[16px] transition-all duration-500`}
                onClick={() => activeHeandler(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
