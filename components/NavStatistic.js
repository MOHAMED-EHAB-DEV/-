import Image from "next/image";

function NavStatistic({ number, title, icon }) {
  return (
    <div className="flex p-3 bg-navstate">
      <div className="  text-right px-3">
        <h3 className=" almarai-extrabold text-xl text-darkblue poppins-extrabold">
          {number}
        </h3>
        <h4 className="font-bold text-sm text-color3 py-1 almarai-bold">
          {title}
        </h4>
      </div>
      <div className=" px-3">
        <Image src={icon} alt="Icon" width={50} height={50} />
      </div>
    </div>
  );
}

export default NavStatistic;
