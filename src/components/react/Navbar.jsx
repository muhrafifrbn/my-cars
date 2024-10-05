import { useRef } from "react";

export default function Navbar() {
  const elementNav = useRef({});

  function hamburgerMenu(el) {
    el.target.classList.toggle("hamburger-active");
    elementNav.current.navMenu.classList.toggle("hidden");
  }

  return (
    <div className="container">
      <div className="flex items-center justify-between relative">
        <div className="px-4 group">
          <a href="#home" className="font-bold text-xl text-slate-800 flex justify-center items-center py-2 px-4 rounded-xl group-hover:scale-110 transition">
            My Cars
          </a>
        </div>
        <div className="flex items-center px-4">
          <button onClick={hamburgerMenu} id="hamburger" name="hamburger" type="button" className="block absolute right-10 lg:hidden">
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>

          <nav
            id="nav-menu"
            ref={(el) => (elementNav.current.navMenu = el)}
            className="hidden absolute py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
          >
            <ul className="block lg:flex">
              <li className="group">
                <a href="/" className="text-base text-dark py-2 px-5 mx-4 flex group-hover:bg-slate-800 group-hover:rounded-lg group-hover:text-sky-50 transition group-hover:scale-110 group-hover:shadow-md group-hover:shadow-slate-700">
                  Home
                </a>
              </li>
              <li className="group">
                <a href="/" className="text-base text-dark py-2 px-5 mx-4 flex group-hover:bg-slate-800 group-hover:rounded-lg group-hover:text-sky-50 transition group-hover:scale-110 group-hover:shadow-md group-hover:shadow-slate-700">
                  Cars
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
