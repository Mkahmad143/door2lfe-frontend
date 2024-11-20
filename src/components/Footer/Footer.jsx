import React from "react";

const Footer = () => {
  return (
    <div>
      {localStorage.getItem("adminLogin") ? (
        <footer className="p-4 text-sm text-center text-lightgray h-[5vh]">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </footer>
      ) : (
        <footer className="w-full py-10 text-white md:mt-16">
          <div className="container px-4 mx-auto border-t-[.08rem] ">
            <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Product Section */}
              <div className="space-y-4">
                <h2 className="mb-4 text-xl font-bold">Product</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Release Notes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Feature Request
                    </a>
                  </li>
                </ul>
              </div>

              {/* Office and Contact Section */}
              <div className="space-y-4">
                <h2 className="mb-4 text-xl font-bold">For English</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      3693 NW 8th Ave, Okeechobee, FL 34972
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      (863) 623-4220 (Main Office)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      contact@openingdoorstolife.org
                    </a>
                  </li>
                </ul>

                <h2 className="mb-4 text-xl font-bold">PARA</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      (863) 623-4220 (Main Office)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      contact@openingdoorstolife.org
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links Section */}
              <div className="space-y-4">
                <h2 className="mb-4 text-xl font-bold">Links</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-lightgreen"
                    >
                      Policies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Section */}
            <div className="pt-4 mt-8 text-sm text-center text-gray-400 border-t">
              <p>© 2024 Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
