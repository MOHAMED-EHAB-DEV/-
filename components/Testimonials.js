"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { testimonials } from "@/constants";
import Quotes from "@/public/quotes.svg";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";

const Testimonials = () => {
  const [slide, setSlide] = useState(0);
  const t = useTranslations("Testimonials");

  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();
      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeDevice = useMediaQuery(theme.breakpoints.up("md"));

  let testimonialsPerSlide;
  if (isMobile) {
    testimonialsPerSlide = 1;
  } else if (isTablet) {
    testimonialsPerSlide = 2;
  } else {
    testimonialsPerSlide = 3;
  }

  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      style={{ direction: currentLocale === "ar" ? "rtl" : "ltr" }}
      className="flex almarai flex-col text-right items-center justify-center gap-12 p-12 w-full bg-[#F9F9F9]"
    >
      <motion.div
        className="flex flex-col gap-2 items-center justify-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="almarai-bold text-gold text-lg">{t("title")}</h3>
        <h2 className="almarai-extrabold text-[#1A1313] text-[32px]">
          {t("desc")}
        </h2>
      </motion.div>

      <motion.div
        className="relative w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          className={`grid p-6 sm:p-12 gap-4 sm:gap-8 ${
            isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {testimonials
            .slice(
              slide * testimonialsPerSlide,
              (slide + 1) * testimonialsPerSlide
            )
            .map(({ id, user, points }) => (
              <div
                key={`testimonial-${id}`}
                className="flex flex-col p-6 sm:p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 gap-4 w-full"
                // variants={itemVariants}
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-start gap-1">
                      <h4 className="text-teal almarai-extrabold text-base sm:text-lg">
                        {user.name}
                      </h4>
                    </div>
                  </div>
                </div>
                <p
                  className={`almarai-regular text-slate-600 text-sm sm:text-base w-full ${
                    currentLocale === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t(`items.${id}.text`)}
                </p>
                <ul className="gap-[1px] flex flex-col">
                  {Array.isArray(points) &&
                    points.length > 0 &&
                    points.map((point, index2) => (
                      <li
                        className="almarai-regular text-base text-slate-600"
                        key={`point-${id}-${index2}`}
                      >
                        {t(`items.${id}.points.${index2}`)}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={`dot-${index}`}
              className={`h-2 w-8 rounded-full cursor-pointer transition-all ${
                slide === index ? "bg-teal w-20" : "bg-gray-300"
              }`}
              onClick={() => setSlide(index)}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
