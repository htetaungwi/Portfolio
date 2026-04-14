import { useState } from "react";
import { Link, NavLink } from "react-router";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  }
  return (
    <header className="w-full  bg-neutral-900 ">
      <nav className="relative flex justify-between  text-green-700 p-4 text-2xl ">
        <h2 className="text-lg text-center md:text-2xl">Htet Aung Win's Portfolio</h2>
        {/* Mobile view navbar start */}
        <button onClick={toggle} className="text-end lg:hidden ">
          &#8801;
        </button>
        <div
          className={`fixed inset-0 transform right-0 ${isOpen ? "translate-x-0" : "translate-x-full"} duration-300 z-50  ease-in-out p-4`}
        >
          <div className="bg-gray-600 border-2 text-green-500 border-green-600 flex flex-col h-full items-center justify-center gap-8 rounded-2xl">
            <Link to="/" onClick={toggle} className=" hover:text-sky-400">
              Home
            </Link>
            <Link to="/about" onClick={toggle} className=" hover:text-sky-400">
              About
            </Link>
            <Link to="/skills" onClick={toggle} className=" hover:text-sky-400">
              Skills
            </Link>
            <Link
              to="/contact"
              onClick={toggle}
              className=" hover:text-sky-400"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile view end and desktop view start */}
        <ul className="hidden lg:flex gap-6">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-green-400"}>
              Home
            </NavLink>
          </li>
          <li className=" hover:text-sky-400 ">
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-green-400"}>
              About
            </NavLink>
          </li>
          <li className=" hover:text-sky-400 ">
            <NavLink to="/skills" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-green-400"}>
              Skills
            </NavLink>
          </li>
          <li className=" hover:text-sky-400 ">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-green-400"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header