import logo from "/assets/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const linkClass = (name) =>
    `hover:text-blue-400 ${active === name ? "text-blue-400" : ""}`;

  return (
    <nav className="bg-white text-black fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" className="w-10 h-10" />
          <h1 className="text-xl font-bold">PuraVirtus</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a
              href="#home"
              onClick={() => setActive("home")}
              className={linkClass("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActive("about")}
              className={linkClass("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#service"
              onClick={() => setActive("service")}
              className={linkClass("service")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActive("contact")}
              className={linkClass("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-8 items-center">
            <li>
              <a
                href="#home"
                onClick={() => setActive("home")}
                className={linkClass("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setActive("about")}
                className={linkClass("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                onClick={() => setActive("service")}
                className={linkClass("service")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActive("contact")}
                className={linkClass("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
