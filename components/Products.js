"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { products } from "@/constants";
import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";

const Products = ({
  title,
  isSM = false,
  isAcc = false,
  isMaxItems = false,
}) => {
  const Items = isMaxItems
    ? products[title].items.slice(0, 3)
    : products[title].items;

  return (
    <div
      className={`flex flex-wrap justify-center w-full ${
        isAcc ? "gap-4" : "gap-8"
      } p-8 ${!isSM && "bg-gray-50"}`}
    >
      {Items.map(({ name, desc, images, id }) => (
        <Product
          key={id}
          name={name}
          desc={desc}
          image={images[0]}
          id={id}
          categName={title}
          isAcc={isAcc}
        />
      ))}
    </div>
  );
};

const Product = ({ id, name, image, desc, categName, isAcc }) => {
  const t = useTranslations("Products");
  return (
    <div
      className={`${
        isAcc ? "sm:w-1/5" : "sm:w-1/4"
      } h-96 w-[calc(100%-40px)] bg-white hover:bg-teal-50 transition ease-in-out duration-500 flex rounded-lg p-7 flex-col items-center justify-center gap-3 sm:hover:scale-105 shadow-md hover:shadow-teal-200/50`}
    >
      <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h2 className="almarai-bold text-2xl text-teal-700 mt-3">{name}</h2>
        {!isAcc && (
        <p className="almarai-regular text-base text-slate-600">
          {/* {t(`items.${id}.desc`)} */}
          {desc}
        </p>
        )}
      </div>
      {!isAcc && (
        <Button
          variant="outline"
          className=" border-teal text-black hover:bg-teal-600 hover:border-teal-600 transition-all duration-300"
          onClick={() => redirect(`/products/${categName}/details/${id}`)}
        >
          MORE DETAILS
        </Button>
      )}
    </div>
  );
};

export default Products;
