"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";
import { FaBullseye } from "react-icons/fa";
import {
  MdMiscellaneousServices,
  MdOutlineSell,
  MdModelTraining,
} from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { create } from "@/lib/utils";

const About = () => {
  const t = useTranslations("Navbar");
  const t2 = useTranslations("About");
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();
      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, []);

  return (
    <div
      className="almarai h-full bg-gradient-to-b from-gray-50 to-white py-16"
      style={{ direction: currentLocale === "ar" ? "rtl" : "ltr" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="almarai-bold text-xl text-blue-600 uppercase tracking-wide">
            {t("about")}
          </h4>
          <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto" />
        </div>

        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t2("title")}
            </span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed almarai-bold text-center">
              {t2("desc")}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed almarai-regular text-center">
              {t2("desc2")}
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <div className="flex gap-9 items-center">
              <div className="text-blue-600 flex items-center gap-4">
                <FaBullseye className="w-12 h-12" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t2("items.0.title")}
                </h3>
              </div>
              <p className="text-gray-600">
                {t2("items.0.text")}
                <ul className="list-decimal">
                  {create(5).map((value, index) => (
                    <li>{t2(`items.0.options.${index}.text`)}</li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="flex gap-9 items-center">
              <div className="text-blue-600 flex items-center gap-4">
                <GoGoal className="w-12 h-12" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t2("items.1.title")}
                </h3>
              </div>
              <p className="text-gray-600">
                {t2("items.1.text")}
                <ol className="list-decimal">
                  {create(3).map((value, index) => (
                    <li>{t2(`items.1.options.${index}.text`)}</li>
                  ))}
                </ol>
              </p>
            </div>
            <div className="flex gap-9 items-center">
              <div className="text-blue-600 flex items-center gap-4">
                <MdMiscellaneousServices className="w-12 h-12" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t2("items.2.title")}
                </h3>
              </div>
              <p className="text-gray-600">{t2("items.2.text")}</p>
            </div>
            <div className="flex gap-9 items-center">
              <div className="text-blue-600 flex items-center gap-4">
                <MdOutlineSell className="w-12 h-12" />
                <h3 className="text-xl w-min font-bold text-gray-900">
                  {t2("items.3.title")}
                </h3>
              </div>
              <p className="text-gray-600">{t2("items.3.text")}</p>
            </div>
            <div className="flex gap-9 items-center">
              <div className="text-blue-600 flex items-center gap-4">
                <MdModelTraining className="w-12 h-12" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t2("items.4.title")}
                </h3>
              </div>
              <p className="text-gray-600">{t2("items.4.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
