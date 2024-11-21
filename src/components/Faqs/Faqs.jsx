import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import faqs from "./faqData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center w-screen mx-auto mt-20 text-3xl text-white">
        <h1 className="mt-16 text-6xl text-center">FAQ'S </h1>
        {faqs.map((comp, i) => (
          <Accordion
            key={i}
            type="single"
            collapsible
            className="w-[18rem] sm:w-[35rem] md:w-[45rem] lg:[w-60rem] mx-auto mt-8"
          >
            <AccordionItem value={`item-${i}`} className="text-4xl ">
              <AccordionTrigger className="text-sm md:text-[1rem]">
                {comp.question}
              </AccordionTrigger>
              <AccordionContent className=" text-lightgray">
                {comp.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
