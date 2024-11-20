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
    <div className="flex flex-col justify-center w-screen mx-auto mt-20 text-3xl text-white">
      <h1 className="mt-16 text-6xl text-center">Our Beliefs</h1>
      {belief.map((comp, i) => (
        <div
          key={i}
          type="single"
          collapsible
          className="w-[17rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] mx-auto mt-8 lg:mt-16"
        >
          <ul className="gap-2 text-sm md:text-lg">
            <li className="relative pl-6 mt-6 ">
              <span className="absolute left-0">➔</span>
              {comp.belief}
            </li>
          </ul>
        </div>
      ))}
      <h6 className="mt-6 text-xl text-center">
        Join us to create the World of Yours and Mine.
      </h6>
    </div>
  );
};

export default Beliefs;
