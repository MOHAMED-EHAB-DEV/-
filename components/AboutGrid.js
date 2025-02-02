import Image from "next/image";
import Link from "next/link";
import NavStatistic from "./NavStatistic";
import aboutImage from "@/public/T30Pro.png";
import leftArrow from "@/public/left-arrow.svg";
import stateIcon3 from "@/public/navstate3.svg";

function AboutGrid() {
  return (
    <div className="bg-aboutS px-8 relative mt-16">
      <div className="grid lg:grid-cols-2 gap-y-8 py-16 m-auto">
        <div className="flex-1 relative sm:flex hidden">
          <div className="flex justify-center items-center">
            <Image
              src={aboutImage}
              alt="About Iamge"
              width={467}
              height={477}
            />
          </div>
          <div className=" absolute top-2/3 right-0 shadow-lg lg:w-96 ">
            <NavStatistic
              icon={stateIcon3}
              number="إدارة تأجير العقارات "
              title="ادارة ايجــــار العقارات اليومية و الشهرية دارة تأجير العقارات "
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end text-right ">
          <h1 className="text-2xl text-gold almarai-bold text-center py-2">
            مـن نــحن
          </h1>
          <h2 className="text-3xl text-aboutTitle   almarai-extrabold">
            عن شركة قمم المساحة التجارية لخدمات الموقع
          </h2>
          <p className=" text-lg leading-10 my-3 almarai-regular">
            شركتنا <span className="font-bold text-[#42526E]">قمم المساحة التجارية</span> شركة
            رائدة في إدارة العقارات، اذ نتخصص في تأجير مرافق الضيافة اليومية و
            الشهرية عبر الأسواق الإقليمية. هي حكاية ارث لافت ومثير يمتد لأكثر من{" "}
            <span className="font-bold text-[#42526E]">7 سنوات</span>، وفي قلب مصر الدولة التي
            اشتهرت بقطاعها السياحي الجاذب، تمت رعاية رحلتنا في مجال الضيافة
          </p>
          <div className="my-2">
            <button className="flex items-center  bg-gold rounded-3xl text-white px-8 py-3  font-bold text-xl almarai-extrabold">
              <Image src={leftArrow} alt="Arrow" width={24} height={24} />
              <Link href="/Offer" className="pl-3">
                تواصل معنا
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutGrid;