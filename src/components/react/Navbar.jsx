import { useRef, useState } from "react";

export default function Navbar() {
  const element = useRef({});
  const [responsive, setResponsive] = useState(true);

  function handleBtnHamburger({ btnHamburger }) {
    btnHamburger.classList.toggle("hamburger-active");
  }

  function handleMenuResponsive({ menuResponsive }) {
    if (responsive) {
      menuResponsive.classList.remove("animate-hidden");
      menuResponsive.classList.add("animate-show");
    } else {
      menuResponsive.classList.remove("animate-show");
      menuResponsive.classList.add("animate-hidden");
    }

    setResponsive(!responsive);
  }

  return (
    <nav className="">
      <div className="px-8 md:px-16 navigation-head flex justify-between items-center">
        <div className="logo group">
          <a href="/my-cars" className="font-oswald  font-bold text-3xl  flex justify-center items-center py-2 px-4 rounded-xl group-hover:scale-110 transition">
            Spotted Cars
          </a>
        </div>
        <div className="menu hidden md:flex font-montserrat">
          <div className="group">
            <a
              className="text-base font-semibold  py-2 px-5 mx-4 flex group-hover:bg-slate-800 group-hover:rounded-lg group-hover:text-sky-50 transition group-hover:scale-105 group-hover:shadow-md group-hover:shadow-slate-700"
              href="/my-cars"
            >
              Home
            </a>
          </div>
          <div className="group">
            <a
              className="text-base font-semibold  py-2 px-5 mx-4 flex group-hover:bg-slate-800 group-hover:rounded-lg group-hover:text-sky-50 transition group-hover:scale-105 group-hover:shadow-md group-hover:shadow-slate-700"
              href="/my-cars/allCars"
            >
              Cars
            </a>
          </div>
        </div>

        <div className="navbar-responsive md:hidden">
          <button
            onClick={() => {
              handleBtnHamburger(element.current);
              handleMenuResponsive(element.current);
            }}
            ref={(el) => (element.current.btnHamburger = el)}
          >
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
        </div>
      </div>

      <div className="menu-responsive style-nav font-montserrat  rounded-3xl bg-opacity-75 overflow-hidden md:hidden h-0" ref={(el) => (element.current.menuResponsive = el)}>
        <div className="group">
          <a
            className="text-orange-600   block text-base font-bold text-center  py-2 px-5 mx-4  group-hover:bg-slate-800 group-hover:rounded-lg group-hover:text-sky-50 transition group-hover:scale-105 group-hover:shadow-md group-hover:shadow-slate-700"
            href="/my-cars"
          >
            Home
          </a>
        </div>
        <div className="group ">
          <a
            className="text-orange-600   font-bold text-base  py-2 px-5 mx-4 block text-center group-hover:bg-slate-800 group-hover:rounded-lg group-hover:text-sky-50 transition group-hover:scale-105 group-hover:shadow-md group-hover:shadow-slate-700"
            href="/my-cars/allCars"
          >
            Cars
          </a>
        </div>
      </div>
    </nav>
  );
}
