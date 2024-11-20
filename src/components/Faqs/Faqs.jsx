import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import faqs from "./faqData";
import Footer from "../Footer/Footer";

const Faqs = () => {
  return (
    <>
      <div></div>
      <div className="flex justify-center text-white flex-col w-screen mx-auto text-3xl mt-20">
        <h1 className="text-6xl text-center ">FAQ'S </h1>
        {faqs.map((comp, i) => (
          <Accordion
            key={i}
            type="single"
            collapsible
            className="w-[18rem] sm:w-[35rem] md:w-[45rem] lg:[w-55rem] mx-auto"
          >
            <AccordionItem value={`item-${i}`} className="text-4xl ">
              <AccordionTrigger className="text-[1rem]">
                {comp.question}
              </AccordionTrigger>
              <AccordionContent className=" text-lightgray">
                {comp.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Faqs;
