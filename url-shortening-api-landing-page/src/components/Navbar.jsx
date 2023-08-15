import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/images/logo.svg";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <header className="w-full h-20 flex justify-between items-center relative bg-white">
        <img src={logo} alt="Shortly Logo" className="object-contain p-6 sm:hidden"/>

        <button onClick={toggleMenu} className="px-4 py-2 text-black sm:hidden">
            <FontAwesomeIcon icon={faBars} style={{color: "#bfbfbf"}} size="xl" />
        </button>
        <nav
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 p-4 mx-auto sm:hidden text-center w-full max-w-xs rounded-lg h-auto min-h-max bg-primary-dark-violet z-50 transition-transform duration-500 overflow-hidden ${
              menuOpen ? "translate-x-[-48%]" : "translate-x-full"
          }`}
      >
          <ul className="flex flex-col justify-evenly items-center border-neutral-grayish-violet mt-8 gap-y-6 border-b-2">
              <li className="text-white font-bold"><a href="#">Features</a></li>
              <li className="text-white font-bold"><a href="#">Pricing</a></li>
              <li className="text-white mb-4 font-bold"><a href="#">Resources</a></li>
          </ul>

          <ul className="flex w-full flex-col justify-evenly items-center mt-8 gap-y-6">
              <li className="text-white w-full font-bold">
                  <a href="#"><button>Login</button></a>
              </li>
              <li className="text-white w-full font-bold">
                  <a href="#"><button className="bg-primary-cyan w-full rounded-3xl p-2">Sign Up</button></a>
              </li>
          </ul>
        </nav>



       {/* Desktop Menu */}
       <nav className="hidden sm:flex sm:space-x-20 sm:items-start sm:justify-between sm:text-neutral-gray sm:w-full ">
        <ul className="flex space-x-6 p-6 lg:gap-6">
          <a className="hover:cursor-pointer"><img src={logo} alt="Shortly Logo" className="object-contain "/></a>

          <li className="text-black font-bold"><a className="hover:text-neutral-very-dark-violet hover:cursor-pointer">Features</a></li>
          <li className="text-black font-bold"><a className="hover:text-neutral-very-dark-violet hover:cursor-pointer">Pricing</a></li>
          <li className="text-black font-bold"><a className="hover:text-neutral-very-dark-violet hover:cursor-pointer">Resources</a></li>
        </ul>
        <ul className="flex space-x-6 p-4 justify-center items-center">
          <li className="text-black font-bold">
            <a href="#" className="hover:text-neutral-very-dark-violet hover:cursor-pointer">Login</a>
          </li>
          <li className="text-black font-bold">
            <button className="bg-primary-cyan rounded-3xl p-3 text-white hover:opacity-40">Sign Up</button>
          </li>
        </ul>
      </nav>


    </header>
  );
}

export default Navbar;
