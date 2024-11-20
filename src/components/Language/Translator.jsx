import React from "react";
import { useTranslation } from "react-i18next";

const Translator = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change the language to the selected one
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Español
      </button>
    </div>
  );
};

export default Translator;
