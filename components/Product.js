"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Products from "./Products";
import { products } from "@/constants";
import DatasheetBtn from "./DatasheetBtn";
import { Button } from "./ui/button";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";
import { randomProperty } from "@/lib/utils";

const replaceCategoryName = {
  gnss: "GNSS Receiver",
  opts: "Optical Survey",
  rugged: "Rugged&GIS",
};

const Product = ({ categoryName, ID }) => {
  const product = products[categoryName].items.filter(({ id }) => id === ID)[0];
  const randomEl = randomProperty(products, categoryName);
  const t = useTranslations("Product");
  const t2 = useTranslations("Products");

  const [image, setImage] = useState(product.images[0]);
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
      style={{
        direction: currentLocale === "ar" ? "rtl" : "ltr",
      }}
      className="flex flex-col mx-auto px-8 py-6 mb-8 w-full max-w-7xl gap-12"
    >
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        <div className="flex flex-col gap-4 items-start justify-center">
          <div className="w-[300px] h-[300px] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            {product.images.map((imgUrl, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  imgUrl === image
                    ? "border-teal-500 shadow-md"
                    : "border-transparent hover:border-teal-300"
                }`}
                onClick={() => setImage(imgUrl)}
              >
                <div className="sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] relative">
                  <Image
                    src={imgUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <p className="text-base text-slate-500 almarai-regular">
            {t("Home")} / {replaceCategoryName[categoryName]} / {product.name}
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="almarai-bold text-4xl text-gray-800">
              {product.name}
            </h1>
            <p className="almarai-regular text-lg text-gray-600">
              {t2(`${categoryName}.items.${ID}.desc`)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="almarai-extrabold text-3xl text-gray-800">
            {t("desc")}
          </h1>
          <p className="almarai-regular text-lg text-gray-600">
            {t2(`${categoryName}.items.${ID}.desc2`)}
          </p>
          <DatasheetBtn link={product.datasheet}>{t("Catalog")}</DatasheetBtn>
        </div>

        <div className="flex flex-col gap-6">
          {product.details.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <p className="almarai-regular text-lg text-gray-600">
                {t2(`${categoryName}.items.${ID}.details.${index}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-teal-600 text-3xl font-extrabold">{t("other")}</h1>
        <div className="w-full">
          <Products title={randomEl.id} isMaxItems={true} isSM={true} />
        </div>
      </div>
    </div>
  );
};

export default Product;
