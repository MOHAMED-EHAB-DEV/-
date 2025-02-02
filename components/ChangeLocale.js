"use client";

import { useTransition, useState, useEffect } from "react";
import Image from "next/image";

import { setUserLocale, getUserLocale } from "@/lib/db";
import { defaultLocale, locales } from "@/lib/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const replacedLocale = {
  en: "English",
  ar: "Arabic",
};

const ChangeLocale = () => {
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const [Open, setOpen] = useState(false);

  const changeLanguage = (value) => {
    const locale = value;
    startTransition(() => {
      setUserLocale(locale);
    });
  };
  const arrowImage = Open ? "/up-arrow.svg" : "/down-arrow.svg";

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();

      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, [isPending]);

  return (
    <DropdownMenu open={Open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center justify-center gap-2">
        {replacedLocale[currentLocale]} - {currentLocale}{" "}
        <Image src={arrowImage} alt="Arrow" width={15} height={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((value) => (
          <DropdownMenuItem
            key={value}
            className={`px-4 py-2 ${
              value === currentLocale && "bg-neutral-200"
            }`}
            onClick={() => changeLanguage(value)}
          >
            {replacedLocale[value]} - {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeLocale;
