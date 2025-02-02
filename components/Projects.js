import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
import { projects } from "@/constants";
import Image from "next/image";

const Projects = () => {
  const t = useTranslations("Projects");

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
              {projects.map(({ imgUrl, alt }, i) => (
                <div
                  key={i}
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg flex flex-col items-center justify-center gap-2 bg-white p-2"
                >
                  <Image
                    alt={alt}
                    src={imgUrl}
                    width={300}
                    height={150}
                    className="object-contain w-full h-full"
                  />
                  <span>{alt}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Projects;
