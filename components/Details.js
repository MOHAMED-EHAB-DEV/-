"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { details } from "@/constants";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";

const Details = ({ isHome }) => {
  const t = useTranslations("Details");
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();
      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, []);

  // تعريف الحركات
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // تأخير بين حركات العناصر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // العناصر تظهر من الأسفل
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`lg:container px-6 sm:px-10 ${!isHome ? "pt-28" : "py-20"}`}
      style={{
        background: "#F6F6F6",
        direction: currentLocale === "ar" ? "rtl" : "ltr",
      }}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-stretch w-full justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // الحركة تحدث مرة واحدة فقط
      >
        {details.map(({ id, Icon }) => (
          <motion.div
            key={id}
            className={`flex flex-col gap-6 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 ${
              currentLocale === "en" ? "text-left" : "text-right"
            }`}
            variants={itemVariants}
          >
            <div
              className={`flex items-center gap-4`}
            >
              <motion.div
                className="p-4 w-fit h-fit rounded-full bg-teal"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>

              <h1
                className={`almarai-extrabold text-3xl text-black`}
              >
                {t(`items.${id}.title`)}
              </h1>
            </div>

            {/* Description */}
            <p className="almarai-regular text-base text-[#949393]">
              {t(`items.${id}.desc`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Details;
