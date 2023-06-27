import React, { useState, useEffect } from "react";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav
        className={`fixed w-full z-30 ${
          !top &&
          "mx-auto   lg:px-[70px] xl:px-[70px] fixed top-0 backdrop-blur-[2px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 ">
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between lg:flex lg:justify-between lg:items-center  xl:justify-between xl:items-center">
              <div className="flex-shrink-0 flex items-center">
                <a
                  href="#"
                  className=" text-[23px] text-[#3eb8f4] nav_Logo font-bold"
                >
                  <i>
                    JO<span className="text-[#ffa024]">BEST</span>
                  </i>
                </a>
              </div>
              <div className="hidden lg:block sm:ml-6">
                <div className="flex space-x-4 lg:flex lg:items-center  xl:flex xl:items-center gap-8 text-[16px] text-[#1f1534] font-[600]">
                  <a href="#">Home</a>
                  <a href="#">Jobs</a>
                  <a href="#">Career tips</a>
                  <a href=""></a>
                  <button className="w-[113px] h-[38px] rounded-full bg-[#1f3a63] text-[#fff] font-[500]">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-[#000]  uppercase  block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#000]   uppercase block px-3 py-2 rounded-md text-base font-medium"
              >
                Job
              </a>
              <a
                href="#"
                className="text-[#000]   uppercase block px-3 py-2 rounded-md text-base font-medium"
              >
                Career Tips
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
