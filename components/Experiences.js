import Image from "next/image";

import Experience from "@/public/experience.webp";

const Experiences = ({ t }) => {
  return (
    <div className="flex sm:flex-row flex-col-reverse sm:h-screen h-auto">
      <div className="sm:w-4/5 w-full flex flex-col items-center justify-center p-6 bg-[#28221A] text-white">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 w-full">
          <div className="flex flex-col gap-3 items-center pr-3">
            <h1 className="almarai-extrabold text-xl">
              {t("Experience.Col1.title")}
            </h1>
            <p className="text-right almarai-regular">
              {t("Experience.Col1.desc")}
            </p>

            <div className="flex flex-col gap-3">
              {[0, 1, 2, 3].map((value) => (
                <div key={value} className="flex gap-1 items-center relative justify-end text-base almarai-regular text-right">
                  {t(`Experience.Col1.items.${value}`)}
                  <div className="rounded-full bg-orange w-2 top-2 -right-4 absolute h-2 inline-block" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={Experience}
              alt="Experience Image"
              width={1124}
              height={1124}
              className="border-2 border-orange rounded-tl-[35px] rounded-br-[35px]"
            />
          </div>

          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col gap-3 items-center">
              <h1 className="almarai-extrabold text-xl">
                {t("Experience.Col2.Sec1.title")}
              </h1>
              <p className="text-right">{t("Experience.Col2.Sec1.desc")}</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <h1 className="almarai-extrabold text-xl">
                {t("Experience.Col2.Sec2.title")}
              </h1>
              <p className="text-right">{t("Experience.Col2.Sec2.desc")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-1/5 w-full bg-orange flex items-center justify-center p-3">
        <h1 className="text-3xl almarai-extrabold w-full text-center">
          عن قمم المساحة التجارية
        </h1>
      </div>
    </div>
  );
};

export default Experiences;
