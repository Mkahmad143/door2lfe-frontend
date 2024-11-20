import React from "react";

const Footer = () => {
  return (
    <div>
      {localStorage.getItem("adminLogin") ? (
        <footer className="p-4 text-sm text-center text-lightgray h-[5vh]">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </footer>
      ) : (
        <footer className="flex items-center justify-center border border-t-2 boder-lightgray bg-gray ">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-4 text-white md:grid-cols-3">
            <div className="w-full p-4 ">
              <h2 className="mb-4 text-xl font-bold ">Product</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    Release Notes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    Feature Request
                  </a>
                </li>
              </ul>
            </div>
            {/* OFFICE */}
            <div className="w-full p-4 ">
              <h2 className="mb-4 text-xl font-bold ">For English</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    3693 NW 8th Ave, Okeechobee, FL 34972
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    (863) 623-4220 (Main Office)
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    contact@openingdoorstolife.org
                  </a>
                </li>
              </ul>
              <h2 className="mb-4 text-xl font-bold ">PARA </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    (863) 623-4220 (Main Office)
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    contact@openingdoorstolife.org
                  </a>
                </li>
              </ul>
            </div>
            {/* Language */}
            <div className="w-full p-4 ">
              <h2 className="mb-4 text-xl font-bold ">Office</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    3693 NW 8th Ave, Okeechobee, FL 34972
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    (863) 623-4220 (Main Office)
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    contact@openingdoorstolife.org
                  </a>
                </li>
              </ul>
              <h2 className="mb-4 text-xl font-bold ">LINKS</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block transition duration-300 hover:text-lightgreen "
                  >
                    POLICES
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal section */}
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
