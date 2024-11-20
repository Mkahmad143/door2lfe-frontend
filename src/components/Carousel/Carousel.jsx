import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

const CarouselComponent = () => {
  return (
    <div className="w-screen h-screen mt-10 flex items-center justify-center xl:pt-[1em]  sm:px-0">
      <CarouselUI className=" w-screen  h-[100vh] mx-auto aspect-video">
        {/* Full width with a max width */}
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center text-center"
            >
              <img
                src={img}
                alt={`carousel-image-${index}`}
                className="h-screen min-w-screen object"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-2 top-1/2" />
        <CarouselNext className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-2 top-1/2" />
      </CarouselUI>
    </div>
  );
};

export default CarouselComponent;
