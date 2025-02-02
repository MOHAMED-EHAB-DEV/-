import { useTranslations } from "next-intl";

import Experiences from "./Experiences";

const Details = () => {
  const t = useTranslations("Details");
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex items-center text-4xl text-center almarai-bold h-fit py-2 justify-center w-full bg-orange">
        {t("title")}
      </h1>

      <div className="flex w-full p-0 m-0 items-center justify-center flex-col">
        <Experiences t={t} />
      </div>
    </div>
  );
};
// JSON
// "Details": {
//     "title": "Qimam Commercial Space Company",
//     "Experience": {
//       "Col1": {
//         "title": "Vision",
//         "desc": "Given the global development in the field of surveying and its technologies, and the progress witnessed in the Kingdom of Saudi Arabia in this field, it is imperative for us to keep pace with this development in line with Vision 2030. This is achieved through:",
//         "items": {
//           "0": "Providing an exceptional service to those working in and interested in the field of surveying, making it accessible and within their reach.",
//           "1": "Offering the latest in advanced and modern surveying equipment.",
//           "2": "Utilizing advanced surveying equipment in executing projects across the Kingdom.",
//           "3": "Training engineers and technicians to enhance their skills, increase productivity efficiency, and face future challenges."
//         }
//       },
//       "Col2": {
//         "Sec1": {
//           "title": "Mission",
//           "desc": "Qimam Surveying Company is committed to delivering a high level of performance in the tasks assigned to it according to quality standards. The company strives to satisfy its clients and is dedicated to the continuous development of its employees, equipment, and tools to maintain expertise and technical competencies through ongoing training and elevating the company's level of performance, accuracy, and excellence in work."
//         },
//         "Sec2": {
//           "title": "Goal",
//           "desc": "Qimam Surveying Company aims to become a leading company in surveying engineering and infrastructure at the level of the Kingdom of Saudi Arabia."
//         }
//       }
//     }
//   },

export default Details;
