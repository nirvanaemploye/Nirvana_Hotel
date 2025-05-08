import React from "react";
import Logo from "../../assets/Png/Logo3.png";
import PrimaryBtn from "../PrimaryBtn";
import { Link } from "react-router-dom";
import { LuSquareMenu, LuSquareX } from "react-icons/lu";
import { IoClose, IoMenu } from "react-icons/io5";

const NavData = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Gallery", link: "/gallery" },
  { id: 5, name: "Login", link: "/login" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div data-aos="fade" className="bg-primary w-8/12 sm:w-1/3 xl:w-4/12 flex justify-center rounded-tr-full">
          <img src={Logo} alt="Logo" className="h-16 sm:h-20 py-4" />
        </div>

        {/* Desktop Menu */}
        <div data-aos="fade-in"  className="pr-12 lg:w-full flex justify-between ">
          <ul className="hidden px-7 lg:flex items-center gap-8">
            {NavData.map((item) => (
              <li key={item.id} className="">
                <Link
                  to={item.link}
                  className="text-sm font-semibold hover:text-primary transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryBtn className="bg-secondary hover:bg-primary hidden lg:block">
            Book Now
          </PrimaryBtn>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden pr-4">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-3xl transition-transform duration-300 ease-in-out"
          >
            <div
              className={`transform transition-transform ease-in-out duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 py-4 shadow-md animate-fade-in flex flex-col gap-4 ">
          <ul className="flex flex-col gap-4 items-center sm:items-start justify-center">
            {NavData.map((item) => (
              <li
                key={item.id}
                className="hover:text-primary transition duration-300 "
              >
                <Link
                  to={item.link}
                  onClick={closeMenu}
                  className="text-sm font-semibold "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryBtn
            className="bg-secondary hover:bg-primary mt-2 sm:mr-auto"
            onClick={closeMenu}
          >
            Book Now
          </PrimaryBtn>
        </div>
      )}
    </header>
  );
};

export default Navbar;
