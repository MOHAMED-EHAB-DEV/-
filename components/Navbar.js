"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Logo from "@/public/logo.png";
import MobileDrawer from "./MobileDrawer";
import { links } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ChangeLocale from "./ChangeLocale";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";
import DatasheetBtn from "./DatasheetBtn";

const Navbar = ({ isHomePage }) => {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();

      setCurrentLocale(currentLocale);
    };

    getLocale();
  });

  return (
    <nav
      className={`bg-white ${
        currentLocale === "en" && "flex-row-reverse"
      } shadow-md fixed top-0 z-50 w-screen sm:w-full flex items-center justify-around sm:items-center sm:justify-center gap-16 transition-colors duration-300`}
    >
      <ChangeLocale />
      <DatasheetBtn link="https://drive.google.com/file/d/1-pK-L4AP-eZOE5vP7NHRbGuJ7KoTbw9s/view?usp=sharing" className="hidden sm:flex items-center bg-teal rounded-3xl text-white px-8 py-3 text-sm almarai-extrabold">
        {t("btn")}
      </DatasheetBtn>

      <div
        className={`hidden sm:flex justify-center gap-7 sm:gap-10 ${
          currentLocale === "en" && "flex-row-reverse"
        }`}
      >
        {links.map(({ id, translation, path, subLinks }) => (
          <div key={id}>
            {subLinks === undefined ? (
              <Link
                href={path}
                key={id}
                className={`text-black hover:text-gray-400 text-lg ${
                  path === pathname ? "almarai-extrabold" : "font-medium"
                }`}
              >
                {t(translation)}
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`text-black hover:text-gray-400 text-lg ${
                    path === pathname ? "almarai-extrabold" : "font-medium"
                  }`}
                >
                  {t(translation)}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="flex flex-col gap-1 p-3">
                    {subLinks.map(({ id, text, link }) => (
                      <Link
                        href={`${path}${link}`}
                        key={id}
                        className="px-3 pb-2 pt-[9px] rounded-md cursor-pointer w-full hover:text-blue-900 text-[#607d8b] hover:bg-blue-50 bg-opacity-80 transition-all"
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-2 right-1">
        <MobileDrawer isHomePage={isHomePage} />
      </div>

      <Image src={Logo} alt="Logo" width={130} height={60} />
    </nav>
  );
};

export default Navbar;
