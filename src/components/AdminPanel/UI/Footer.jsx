import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 mt-10 text-sm text-center text-lightgray">
      © {new Date().getFullYear()} Admin Panel. All rights reserved.
    </footer>
  );
};

export default Footer;
