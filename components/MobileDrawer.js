import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

import MenuIcon from "@/public/menu-icon.svg";
import CloseIcon from "@/public/close.svg";
import { links } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileDrawer = () => {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  const drawerVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <div className="relative sm:hidden block">
      <button className="p-2 bg-transparent" onClick={() => setIsOpen(true)}>
        {/* <Image src={MenuIcon} alt="Menu Icon" width={24} height={24} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-4">
              <button className="p-2 mb-2" onClick={() => setIsOpen(false)}>
                <Image
                  src={CloseIcon}
                  alt="Close Icon"
                  width={24}
                  height={24}
                />
              </button>
              <ul className="flex flex-col-reverse">
                {links.map(({ id, translation, path, subLinks }) => (
                  <div key={id}>
                    <>
                      {subLinks === undefined ? (
                        <li className="p-2 border-b">
                          <Link
                            href={path}
                            key={id}
                            className={`text-black flex justify-end hover:text-gray-400 text-lg ${
                              path === pathname
                                ? "almarai-extrabold"
                                : "font-medium"
                            }`}
                          >
                            {t(translation)}
                          </Link>
                        </li>
                      ) : (
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            className={`text-black flex justify-end hover:text-gray-400 text-lg ${
                              path === pathname
                                ? "almarai-extrabold"
                                : "font-medium"
                            } p-2 border-b w-full`}
                          >
                            {t(translation)}
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <div className="flex flex-col gap-1">
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
                    </>
                  </div>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MobileDrawer;
