import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import belief from "./belief";

const Beliefs = () => {
  return (
    <div className="flex justify-center text-white flex-col w-screen mx-auto text-3xl mt-20">
      <h1 className="text-6xl text-center">Our Beliefs</h1>
      {belief.map((comp, i) => (
        <div
          key={i}
          type="single"
          collapsible
          className="w-[17rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] mx-auto"
        >
          <ul className="text-xl gap-2">
            <li className="mt-6 pl-6 relative  ">
              <span className="absolute left-0">➔</span>
              {comp.belief}
            </li>
          </ul>
        </div>
      ))}
      <h6 className="text-center text-xl mt-6">
        Join us to create the World of Yours and Mine.
      </h6>
    </div>
  );
};

export default Beliefs;
