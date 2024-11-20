import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = ["A4.png", "A2.webp", "A3.webp", "A23.avif", "A6.avif"];

const CarouselComponent = () => {
  return (
    <div className="min-w-screen h-screen flex items-center justify-center xl:pt-[3rem]">
      <CarouselUI className="aspect-video">
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
                className="w-full h-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselUI>
    </div>
  );
};

export default CarouselComponent;
