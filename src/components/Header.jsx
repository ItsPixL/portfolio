import "./Header.css";
import logo_dark from "../assets/logo_dark.svg";

function Header() {
  return (
    <nav>
      <img src={logo_dark} alt="Neer's logo." className="logo"></img>
      <ul className="nav-ul">
        <li className="light-dark-switch">
          <div>
            <span className="material-symbols-outlined">dark_mode</span>
            <span className="material-symbols-outlined">light_mode</span>
          </div>
        </li>
        <li className="nav-ul_li">Home</li>
        <li className="nav-ul_li">About</li>
        <li className="nav-ul_li">Projects</li>
        <li className="nav-ul_li">Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
