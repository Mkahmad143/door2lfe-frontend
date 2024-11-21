import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full py-10 mx-auto text-white md:mt-16">
        <div className=" flex  justify-center flex-col items-center  border-t-[.08rem] border-b-[.08rem]  ">
          <div className="grid grid-cols-1 gap-12 pt-6 sm:grid-cols-2 lg:grid-cols-4 ">
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
            <div className="space-y-4">
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
          </div>

          {/* Legal Section */}
          <div className="py-4 mt-8 text-sm text-center text-gray-400 ">
            <p>© 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
