/* eslint-disable react/prop-types */
import "./Header.css";
import { AnimatePresence, motion } from "framer-motion";
import logo_dark from "../assets/logo_dark.svg";
import logo_light from "../assets/logo_light.svg";

function Header({ isDarkMode, toggleDarkMode }) {
  const logo = (
    <AnimatePresence mode="wait">
      <motion.img
        src={isDarkMode ? logo_dark : logo_light}
        alt="Neer's logo."
        className="logo"
        key={isDarkMode ? "dark_mode" : "light_mode"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      ></motion.img>
    </AnimatePresence>
  );

  const darkLightIcon = (
    <AnimatePresence mode="wait">
      <motion.span
        key={isDarkMode ? "dark_mode" : "light_mode"}
        className="material-symbols-outlined nav-ul_switch_icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          fontVariationSettings: '"FILL" 1, "wght" 300, "GRAD" 200, "opsz" 20',
        }}
      >
        {isDarkMode ? "dark_mode" : "light_mode"}
      </motion.span>
    </AnimatePresence>
  );

  return (
    <nav>
      {logo}
      <ul className="nav-ul">
        <li className="nav-ul_switch" onClick={toggleDarkMode}>
          {darkLightIcon}
        </li>
        <motion.li
          className="nav-ul_li"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.1 }}
        >
          Home
        </motion.li>
        <motion.li
          className="nav-ul_li"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.1 }}
        >
          About
        </motion.li>
        <motion.li
          className="nav-ul_li"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.1 }}
        >
          Projects
        </motion.li>
        <motion.li
          className="nav-ul_li"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.1 }}
        >
          Contact
        </motion.li>
      </ul>
    </nav>
  );
}

export default Header;
