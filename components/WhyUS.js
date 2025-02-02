"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { whyUS } from "@/constants";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";

const WhyUS = ({ isHome }) => {
  const t = useTranslations("WhyUS");
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();
      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, []);

  // Animation variants for Framer Motion
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
      {/* Title and Description */}
      {!isHome && (
        <motion.div
          className="flex flex-col gap-4 items-center justify-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className={`${
              currentLocale === "ar" ? "almarai-extrabold" : "font-extrabold"
            } text-4xl text-[#1A1313]`}
          >
            {t("title")}
          </h3>
          <h2 className="almarai-bold text-lg text-[#1A1313] opacity-80">
            {t("desc")}
          </h2>
        </motion.div>
      )}

      {/* Cards */}
      <motion.div
        className="relative w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-center gap-8 px-3 py-4">
          {whyUS.map(({ id, Icon }) => (
            <motion.div
              key={id}
              className={`flex flex-col bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-96 ${
                currentLocale === "en" ? "h-[320px]" : "h-fit"
              } items-center justify-center gap-4`}
              variants={itemVariants}
            >
              {/* Icon with Teal Background */}
              <div className="p-4 rounded-full bg-teal">
                <Image
                  src={Icon}
                  alt={t(`items.${id}.title`)}
                  width={32}
                  height={32}
                  className="filter brightness-0 invert" // تحويل الأيقونة إلى اللون الأبيض
                />
              </div>

              {/* Title and Description */}
              <div className="flex items-center justify-center gap-2 flex-col">
                <h2 className="almarai-bold text-2xl text-center text-[#1A1313]">
                  {t(`items.${id}.title`)}
                </h2>
                <p className="almarai-regular text-center text-[#1A1313] opacity-80">
                  {t(`items.${id}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUS;
