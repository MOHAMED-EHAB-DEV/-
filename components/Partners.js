import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
import { logos } from "@/constants";
import Image from "next/image";

const Partners = () => {
  const t = useTranslations("Partners");

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <h1 className="p-10 almarai-bold text-5xl text-black text-center">
            {t("title")}
          </h1>
        </div>

        <div className="relative overflow-hidden">
          <Marquee
            gradientWidth={100}
            pauseOnHover
            gradientColor={[245, 245, 245]}
            speed={50}
          >
            <div className="flex items-center lg:py-10 md:py-10 py-5 gap-x-16">
              {logos.map((img, i) => (
                <div
                  key={i}
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-4"
                >
                  <Image
                    alt={img.alt}
                    src={img.imgUrl}
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
