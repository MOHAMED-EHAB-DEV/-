"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroProducts } from "@/constants";
import DatasheetBtn from "./DatasheetBtn";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";

const Hero = () => {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  const t = useTranslations("Navbar");
  const t2 = useTranslations("Hero");

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();
      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, []);

  return (
    <div className={`almarai h-full`}>
      <Carousel
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="relative"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <CarouselContent className="w-screen h-screen relative z-20 !ml-0">
            {heroProducts.map(({ id, name, img, backgroundImage }, index) => (
              <CarouselItem
                key={id}
                className={`flex flex-col sm:flex-row w-full sm:w-16 pb-0 pt-10 px-8 sm:p-8 gap-16 items-center justify-center sm:justify-evenly ${
                  currentLocale === "ar" && "sm:flex-row-reverse"
                }`}
                style={{
                  backgroundImage: `url(${backgroundImage})`, // Dynamic background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Text Content with Gray Background */}
                <motion.div
                  initial={{ opacity: 0, x: currentLocale === "ar" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex gap-4 flex-col items-center justify-center sm:items-start sm:justify-start p-6 rounded-lg"
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.6)" }} // Gray background with 60% opacity
                >
                  <h1
                    className={`${
                      currentLocale === "ar" && "self-end"
                    } almarai-bold text-4xl text-white pb-2 border-b-4 border-teal`} // Added border bottom
                  >
                    {name}
                  </h1>
                  <p
                    className={`${
                      currentLocale === "ar" && "self-end sm:text-right"
                    } almarai-regular text-lg text-center w-[250px] sm:w-[400px] text-white`}
                  >
                    {t2(`products.${index}.text`)}
                  </p>
                  <DatasheetBtn
                    className={`${
                      currentLocale === "ar" && "self-end"
                    } border-teal bg-teal w-36 text-base`}
                  >
                    {t("btn")}
                  </DatasheetBtn>
                </motion.div>

                {/* Image Section with Motion */}
                <motion.div
                  initial={{ opacity: 0, x: currentLocale === "ar" ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src={img}
                    alt={name}
                    width={600} // Increased width
                    height={900} // Increased height
                    className="hidden sm:block w-[400px] h-[500px] object-contain rounded-lg" // Adjusted size
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute top-1/2 left-4 rounded-full p-2 z-30 transition hover:scale-110" />
          <CarouselNext className="absolute top-1/2 right-4 rounded-full p-2 z-30 transition hover:scale-110" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;