import { MdGroups } from "react-icons/md";
import { FaBook } from "react-icons/fa6";

import T30Pro from "@/public/T30Pro.png";
import T30Pro_1 from "@/public/T30Pro-1.jpg";
import T30Pro_2 from "@/public/T30Pro-2.jpg";
import T30Pro_3 from "@/public/T30Pro-3.jpg";
import T30Pro_4 from "@/public/T30Pro-4.jpg";
import T20Pro from "@/public/T20Pro.png";
import T20Pro_1 from "@/public/T20Pro-1.png";
import T20Pro_2 from "@/public/T20Pro-2.png";
import T20Pro_3 from "@/public/T20Pro-3.png";
import T20Pro_4 from "@/public/T20Pro-4.jpg";
import T10Pro from "@/public/T10Pro.png";
import T10Pro_1 from "@/public/T10Pro-1.png";
import T10Pro_2 from "@/public/T10Pro-2.png";
import T10Pro_3 from "@/public/T10Pro-3.jpg";
import T10Pro_4 from "@/public/T10Pro-4.png";
import T5 from "@/public/T5.png";
import T5_1 from "@/public/T5-1.png";
import T5_2 from "@/public/T5-2.png";
import T5_3 from "@/public/T5-3.jpg";
import T30 from "@/public/T30.png";
import T30_1 from "@/public/T30-1.png";
import T30_2 from "@/public/T30-2.jpg";
import T30_3 from "@/public/T30-3.jpg";
import T30_4 from "@/public/T30-4.jpg";
import support from "@/public/support.svg";
import registered from "@/public/registered.svg";
import toolbox from "@/public/toolbox.svg";
import logo1 from "@/public/logo-1.jpg";
import logo2 from "@/public/logo-2.png";
import logo3 from "@/public/logo-3.jpeg";
import logo4 from "@/public/logo-4.jpg";
import logo5 from "@/public/logo-5.png";
import logo6 from "@/public/logo-6.jpeg";
import logo7 from "@/public/logo-7.PNG";
import logo8 from "@/public/logo-8.jpg";
import logo9 from "@/public/logo-9.jpeg";
import logo10 from "@/public/logo-10.jpeg";
import logo11 from "@/public/logo-11.jpeg";
import logo12 from "@/public/logo-12.jpeg";
import logo13 from "@/public/logo-13.png";
import logo14 from "@/public/logo-14.png";
import logo15 from "@/public/logo-15.webp";
import logo16 from "@/public/logo-16.png";
import logo17 from "@/public/logo-17.png";
import Acc1 from "@/public/acc1.jpeg";
import Acc2 from "@/public/acc2.jpeg";
import Acc3 from "@/public/acc3.jpeg";
import Acc4 from "@/public/acc4.jpeg";
import Acc5 from "@/public/acc5.jpeg";
import Acc6 from "@/public/acc6.jpeg";
import Acc8 from "@/public/acc8.jpeg";
import Acc9 from "@/public/acc9.jpeg";
import Acc10 from "@/public/acc10.jpeg";
import Acc11 from "@/public/acc11.jpeg";
import Acc12 from "@/public/acc12.jpeg";
import Acc13 from "@/public/acc13.jpeg";
import Acc14 from "@/public/acc14.jpeg";
import Acc15 from "@/public/acc15.jpeg";
import Acc16 from "@/public/acc16.jpeg";
import Acc17 from "@/public/acc17.jpeg";
import Acc19 from "@/public/acc19.jpeg";
import Acc20 from "@/public/acc20.jpeg";
import Acc21 from "@/public/acc21.jpeg";
import Acc22 from "@/public/acc22.jpeg";
import Opts2 from "@/public/opts2.png";
import Opts3 from "@/public/opts3.jpg";
import Opts4 from "@/public/opts4.jpeg";
import Opts5 from "@/public/opts5.jpeg";
import Opts6 from "@/public/opts6.jpeg";
import TBase from "@/public/TBase-1.png";
import Robot from "@/public/robot-1.png";
import Cors1 from "@/public/cors-1.jpeg";
import Project1 from "@/public/project1.jpeg";
import Project2 from "@/public/project2.jpeg";
import Project3 from "@/public/project3.jpeg";
import Project4 from "@/public/project4.jpeg";
import Project5 from "@/public/project5.jpeg";

import { create } from "@/lib/utils";

const links = [
  {
    id: 0,
    path: "/contacts",
    translation: "contacts",
  },
  {
    id: 1,
    path: "/products",
    translation: "products",
    subLinks: [
      {
        id: 0,
        text: "GNSS Receiver",
        link: "/gnss",
        // translation: "Product1",
      },
      {
        id: 1,
        text: "Accessory",
        link: "/accessory",
        // translation: "Product2",
      },
      {
        id: 2,
        text: "Optical Survey",
        link: "/opts",
        // translation: "Product3",
      },
      {
        id: 3,
        text: "Cors Station",
        link: "/opts",
        // translation: "Product3",
      },
      {
        id: 4,
        text: "Pre-Marking Robot",
        link: "/rbt",
        // translation: "Product3",
      },
    ],
  },
  {
    id: 2,
    path: "/about",
    translation: "about",
  },
  {
    id: 3,
    path: "/",
    translation: "home",
  },
];

const logos = [
  {
    id: 1,
    alt: "Logo 1",
    imgUrl: logo1,
  },
  {
    id: 2,
    alt: "Logo 2",
    imgUrl: logo2,
  },
  {
    id: 3,
    alt: "Logo 3",
    imgUrl: logo3,
    website: "",
  },
  {
    id: 4,
    alt: "Logo 4",
    imgUrl: logo4,
  },
  {
    id: 5,
    alt: "Logo 5",
    imgUrl: logo5,
  },
  {
    id: 6,
    alt: "Logo 6",
    imgUrl: logo6,
  },
  {
    id: 7,
    alt: "Logo 7",
    imgUrl: logo7,
  },
  {
    id: 8,
    alt: "Logo 9",
    imgUrl: logo8,
  },
  {
    id: 9,
    alt: "Logo 9",
    imgUrl: logo9,
  },
  {
    id: 10,
    alt: "Logo 10",
    imgUrl: logo10,
  },
  {
    id: 11,
    alt: "Logo 11",
    imgUrl: logo11,
  },
  {
    id: 12,
    alt: "Logo 12",
    imgUrl: logo12,
  },
  {
    id: 13,
    alt: "Logo 13",
    imgUrl: logo13,
  },
  {
    id: 14,
    alt: "Logo 14",
    imgUrl: logo14,
  },
  {
    id: 15,
    alt: "Logo 15",
    imgUrl: logo15,
  },
  {
    id: 16,
    alt: "Logo 16",
    imgUrl: logo16,
    website: "",
  },
  {
    id: 17,
    alt: "Logo 17",
    imgUrl: logo17,
    website: "",
  },
];

const projects = [
  {
    id: 1,
    alt: "مشروع وادي صفار",
    imgUrl: Project1,
  },
  {
    id: 2,
    alt: "مشروع البحر الاحمر",
    imgUrl: Project2,
  },
  {
    id: 3,
    alt: "مشروع القدية",
    imgUrl: Project3,
  },
  {
    id: 4,
    alt: "مشروع تطوير الواجهه البحرية",
    imgUrl: Project4,
  },
];

const products = {
  gnss: {
    id: "gnss",
    name: "GNSS Receiver",
    items: [
      {
        id: 0,
        name: "T30Pro",
        images: [T30Pro, T30Pro_1, T30Pro_2, T30Pro_3, T30Pro_4],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: create(19),
        datasheet:
          "https://drive.google.com/file/d/1YWxedW5SdM1yR3PZE4DLewRx4hOlG0oG/view?usp=sharing",
        desc2:
          "The T30Pro GNSS Receiver is a high-performance positioning device designed to meet the demands of modern surveying, mapping, and geospatial applications. It supports multi-constellation tracking, including GPS, GLONASS, Galileo, and BeiDou, ensuring reliable and accurate positioning even in challenging environments. Equipped with advanced RTK (Real-Time Kinematic) technology, the T30Pro delivers centimeter-level accuracy, making it an ideal solution for precision-intensive tasks. In addition to its high accuracy, the T30Pro features a rugged, durable design built to withstand tough field conditions. Its extended battery life ensures uninterrupted operation during long workdays, while seamless connectivity options enable easy data transfer and integration into existing workflows. With its ability to integrate AR (Augmented Reality) and image surveying (IS) capabilities, the T30Pro enhances efficiency and accuracy, providing a comprehensive solution for professional geospatial users.",
      },
      {
        id: 1,
        name: "T5",
        images: [T5, T5_1, T5_2, T5_3],
        desc: "T5 is a GNSS receiver offering precise positioning with support for multiple constellations, ideal for surveying and autonomous systems.",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        datasheet:
          "https://drive.google.com/file/d/1Kwt82oNjqdyUUXyCvwpprbNVIO6m_I5w/view?usp=sharing",
        desc2:
          "The T5 GNSS Receiver is a high-performance device designed for precise global navigation and positioning. It supports multiple satellite constellations such as GPS, GLONASS, Galileo, and BeiDou, ensuring reliable and accurate location data in various environments. With advanced signal processing and robust interference mitigation, the T5 is ideal for applications in surveying, geodesy, agriculture, and autonomous systems. Its compact design, energy efficiency, and user-friendly interface make it suitable for both professional and industrial use, offering seamless integration into diverse workflows.",
      },
      {
        id: 2,
        name: "T20Pro",
        images: [T20Pro, T20Pro_1, T20Pro_2, T20Pro_3, T20Pro_4],
        desc: "T20Pro is a GNSS receiver featuring advanced RTK for high-precision positioning, suited for professional geospatial applications.",
        details: create(18),
        datasheet:
          "https://drive.google.com/file/d/1fPUmqWtfBnUDp77ovqlDAUJwLK0pefM4/view?usp=sharing",
        desc2:
          "The T20Pro GNSS Receiver is a cutting-edge positioning device offering exceptional accuracy and reliability for professional applications. Supporting multiple satellite constellations, including GPS, GLONASS, Galileo, and BeiDou, the T20Pro ensures robust performance even in challenging environments. It features advanced RTK (Real-Time Kinematic) technology for centimeter-level precision, making it ideal for surveying, mapping, construction, and agricultural use. With a compact, rugged design, long battery life, and seamless connectivity options, the T20Pro delivers high efficiency and adaptability for demanding field operations.",
      },
      {
        id: 3,
        name: "T10Pro",
        images: [T10Pro, T10Pro_1, T10Pro_2, T10Pro_3, T10Pro_4],
        desc: "T10Pro is a compact GNSS receiver providing centimeter-level accuracy with RTK technology, designed for surveying and mapping.",
        details: create(18),
        datasheet:
          "https://drive.google.com/file/d/1S5_rRDGnVxkyTBfwln_1_eHbPepASHFn/view?usp=sharing",
        desc2:
          "The T10Pro GNSS Receiver is a reliable and versatile positioning device designed for precise navigation and geospatial applications. It supports multi-constellation tracking, including GPS, GLONASS, Galileo, and BeiDou, ensuring consistent and accurate performance across diverse environments. With advanced RTK technology for centimeter-level precision, the T10Pro is well-suited for surveying, mapping, and precision agriculture. Its rugged design, user-friendly interface, and long-lasting battery make it an excellent choice for professionals requiring efficiency and durability in the field.",
      },
      {
        id: 4,
        name: "T30",
        images: [T30, T30_1, T30_2, T30_3, T30_4],
        desc: "T30 is a GNSS receiver delivering robust performance with multi-constellation support, ideal for surveying and agriculture.",
        details: create(19),
        datasheet:
          "https://drive.google.com/file/d/1Td6xtKhBnTSufGzGtiKOTRwrjQGRTAQQ/view?usp=sharing",
        desc2:
          "The T30 GNSS Receiver is a high-precision device engineered for advanced geospatial and navigation tasks. It supports multiple satellite constellations, including GPS, GLONASS, Galileo, and BeiDou, ensuring robust and accurate positioning in challenging conditions. Featuring state-of-the-art RTK technology, the T30 delivers centimeter-level accuracy, making it ideal for applications such as surveying, construction, and agriculture. Its durable design, extended battery life, and versatile connectivity options ensure reliable performance and seamless integration into professional workflows.",
      },
      {
        id: 5,
        name: "TBase",
        images: [TBase],
        desc: "T30 is a GNSS receiver delivering robust performance with multi-constellation support, ideal for surveying and agriculture.",
        details: create(18),
        datasheet:
          "https://drive.google.com/file/d/1LB-98aTDGwLLQQVDl4xVG70d-74znO4g/view?usp=sharing",
        desc2:
          "The T30 GNSS Receiver is a high-precision device engineered for advanced geospatial and navigation tasks. It supports multiple satellite constellations, including GPS, GLONASS, Galileo, and BeiDou, ensuring robust and accurate positioning in challenging conditions. Featuring state-of-the-art RTK technology, the T30 delivers centimeter-level accuracy, making it ideal for applications such as surveying, construction, and agriculture. Its durable design, extended battery life, and versatile connectivity options ensure reliable performance and seamless integration into professional workflows.",
      },
    ],
  },
  accessory: {
    id: "accessory",
    name: "Accessory",
    items: [
      {
        id: 0,
        name: "Laser Meter",
        images: [Acc1],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 1,
        name: "External Radio Antenna ",
        images: [Acc2],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 2,
        name: "25 cm Pole ",
        images: [Acc3],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 3,
        name: "Pole Battery Connector ",
        images: [Acc4],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 4,
        name: "Antenna  ",
        images: [Acc5],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 5,
        name: "Leica Reflector",
        images: [Acc6],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 7,
        name: "Tribrach + Adapter ",
        images: [Acc8],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 8,
        name: "Charger",
        images: [Acc9],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 9,
        name: "Battery Charger ",
        images: [Acc10],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 10,
        name: "Pole Fiber",
        images: [Acc11],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 11,
        name: "Mini Prism",
        images: [Acc12],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 12,
        name: "Leaser Level",
        images: [Acc13],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 13,
        name: "Leaser Level",
        images: [Acc14],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 14,
        name: "Auto Level",
        images: [Acc15],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 15,
        name: "P8 GPS",
        images: [Acc16],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 16,
        name: "Tripod Aluminum",
        images: [Acc17],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 18,
        name: "Bipod Sokia",
        images: [Acc19],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 19,
        name: "External radio battery charger",
        images: [Acc20],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 20,
        name: "Triple reflector",
        images: [Acc21],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
      {
        id: 21,
        name: "Reflective sheet",
        images: [Acc22],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: [
          {
            title: "Latest Laser Technology",
            desc: "Laser technology offers unparalleled advantages in precision positioning and makes surveying work rodless and Easier. Combining cutting-edge laser technology with full constellation GNSS, IMU, and 4G integration, delivers calibration-free accuracy, significantly enhancing work efficiency and reducing potential risks.",
          },
        ],
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
    ],
  },
  cors: {
    id: "cors",
    name: "Cors Station",
    items: [
      {
        id: 0,
        name: "NET660i GNSS Receiver",
        images: [Cors1],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: create(6),
        datasheet:
          "https://drive.google.com/file/d/1jo6_MIJPKd-JzWXJaI-QEiqYFWwNhMhg/view?usp=sharing",
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
    ],
  },
  opts: {
    id: "opts",
    name: "Optical Survey",
    items: [
      {
        id: 0,
        name: "Auto Level",
        images: [Opts2, Opts4, Opts5, Opts6, Acc17],
        desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
        details: create(3),
        datasheet:
          "https://drive.google.com/file/d/1mG46bgF0rhXFt-DzW6sdkbqrbCkTkTsA/view?usp=sharing",
        desc2:
          "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
      },
    ],
  },
  rbt: {
    id: "rbt",
    name: "Pre-Marking Robot",
    items: [
      {
        id: 0,
        name: "Pre-Marking Robot",
        images: [Robot],
        desc: "",
        details: create(5),
        desc2: "",
        datasheet:
          "https://drive.google.com/file/d/17NZEOueOgJUuS75AzKnb-pkOJw4djhBl/view?usp=sharing",
      },
    ],
  },
};

// Opts4, Opts5, Opts6, Opts7

const testimonials = [
  // {
  //   id: 0,
  //   user: {
  //     name: "مهندس أحمد أشرف",
  //   },
  //   points: [],
  // },
  // {
  //   id: 1,
  //   user: {
  //     name: "مهندس محمد أحمد",
  //   },
  //   points: [],
  // },
  // {
  //   id: 2,
  //   user: {
  //     name: "شركة الاجتياز",
  //   },
  //   points: [
  //     "1- الدقة عاليه جدا في قراءة المناسيب و الاحداثيات",
  //     "2- المدى الجهاز شبكته ممتاز في المدى و يغطي الأماكن ذات الاعماق العاليه و البعيدة",
  //     "3- سهل الاستخدام و التعامل معه أفضل من الاجهزه الأخرى",
  //   ],
  // },
  // {
  //   id: 3,
  //   user: {
  //     name: "شركة رواسي المدن",
  //   },
  //   points: [],
  // },
  // {
  //   id: 4,
  //   user: {
  //     name: "شركة فجر الإنشائية",
  //     type: "مبرمج",
  //   },
  //   points: [],
  // },
  // {
  //   id: 5,
  //   user: {
  //     name: "ِشركة MPL",
  //   },
  //   points: [],
  // },
  // "0": {
  //       "text": "The T10Pro has been a fantastic addition to our team in the field of geodetic surveying. Its incredible accuracy with RTK technology has helped us achieve precise results in a short time, even in challenging locations. Its compact design and ease of use have made fieldwork more efficient and comfortable. I highly recommend it to anyone in need of a reliable and effective GNSS device."
  //     },
  //     "1": {
  //       "text": "May God bless you, Engineer Mohammed. Honestly, the performance exceeded expectations. I have worked with several types of GPS devices, but I have never seen performance like this before. Thank you for not letting us down and even visiting the site to set up the device."
  //     },
  //     "2": {
  //       "text": "",
  //       "points": {
  //         "0": "1- Very high accuracy in reading levels and coordinates",
  //         "1": "2- The device's network range is excellent and covers deep and distant areas",
  //         "2": "3- Easy to use and handle, better than other devices"
  //       }
  //     },
  //     "3": {
  //       "text": "Hello Engineer, I am Sajid Ali, and I am doing well. I have been using the TOKNOV GPS device for 6 months, and it is easy to use and works well. The accuracy is good, battery life is good, support services are good, guidance is good, everything is excellent. The Toknav GPS is good for future construction work."
  //     },
  //     "4": {
  //       "text": "The T30Pro has been a game-changer in our operations. Its support for multiple satellite systems and long-lasting battery make it the ideal choice for long-term field projects. Additionally, its integration of RTK technology and augmented reality (AR) support has made surveying more accurate and faster. It is an indispensable device for geodetic surveying professionals."
  //     },
  //     "5": {
  //       "text": "I have relied on the T30 for many agriculture and surveying projects, and I have always been satisfied with its performance. It provides high accuracy with support for multiple systems, and its robust design and long-lasting battery make it an invaluable tool for fieldwork. A reliable tool for all professionals in this field."
  //     },
  // "0": {
  //       "text": "كان T10Pro إضافة رائعة لفريقنا في مجال المسح الجيوديسي. دقته المذهلة مع تقنية RTK ساعدتنا في تحقيق نتائج دقيقة في وقت قصير، حتى في المواقع الصعبة. تصميمه المضغوط وسهولة استخدامه جعلا العمل الميداني أكثر كفاءة وراحة. أوصي به بشدة لأي شخص يحتاج إلى جهاز GNSS موثوق وفعال."
  //     },
  //     "1": {
  //       "text": "بارك الله فيك، المهندس محمد. بصراحة، الأداء تجاوز التوقعات. لقد عملت مع عدة أنواع من أجهزة GPS، لكنني لم أرَ أداءً مثل هذا من قبل. شكرًا لعدم خيبة أملنا بل حتى زيارتك الموقع لإعداد الجهاز."
  //     },
  //     "2": {
  //       "text": "",
  //       "points": {
  //         "0": "1- دقة عالية جدًا في قراءة المستويات والإحداثيات",
  //         "1": "2- نطاق شبكة الجهاز ممتاز ويغطي المناطق العميقة والبعيدة",
  //         "2": "3- سهل الاستخدام والتعامل، أفضل من الأجهزة الأخرى"
  //       }
  //     },
  //     "3": {
  //       "text": "مرحبًا مهندس، أنا ساجد علي، وأنا بخير. لقد كنت أستخدم جهاز TOKNOV GPS لمدة 6 أشهر، وهو سهل الاستخدام ويعمل بشكل جيد. الدقة جيدة، عمر البطارية جيد، خدمات الدعم جيدة، التوجيه جيد، كل شيء ممتاز. جهاز Toknav GPS جيد لأعمال البناء المستقبلية."
  //     },
  //     "4": {
  //       "text": "كان T30Pro نقطة تحول في عملياتنا. دعمه لأنظمة الأقمار الصناعية المتعددة وبطارية طويلة الأمد يجعله الخيار المثالي للمشاريع الميدانية طويلة الأجل. بالإضافة إلى ذلك، تكامله مع تقنية RTK ودعم الواقع المعزز (AR) جعلا المسح أكثر دقة وسرعة. إنه جهاز لا غنى عنه لمحترفي المسح الجيوديسي."
  //     },
  //     "5": {
  //       "text": "لقد اعتمدت على T30 في العديد من مشاريع الزراعة والمسح، وكنت دائمًا راضيًا عن أدائه. يوفر دقة عالية مع دعم أنظمة متعددة، وتصميمه القوي وبطارية طويلة الأمد يجعله أداة لا تقدر بثمن للعمل الميداني. أداة موثوقة لجميع المحترفين في هذا المجال."
  //     },
  {
    id: 0,
    user: {
      name: "ِشركة العيداب للمقاولات",
    },
    points: [],
  },
  {
    id: 1,
    user: {
      name: "شركة الغويري مشروع المطار",
    },
    points: [],
  },
  {
    id: 2,
    user: {
      name: "شركة مسار الحديث",
    },
    points: [],
  },
  {
    id: 3,
    user: {
      name: "اسيات العربيه",
    },
    points: [],
  },
  {
    id: 4,
    user: {
      name: " شركة اورباكون",
    },
    points: [],
  },
  {
    id: 5,
    user: {
      name: " شركة مفرح الحربي",
    },
    points: [],
  },
  {
    id: 6,
    user: {
      name: " شركة الأعمال المتنوعة",
    },
    points: [],
  },
  {
    id: 7,
    user: {
      name: "شركة القطاع الغربي للمقاولات",
    },
    points: [],
  },
];

const whyUS = [
  {
    id: 0,
    Icon: registered,
    title: "وكيل حصري",
    desc: "لشركة قمم المساحة التجارية داخل السعودية المصنعة لأفضل الأجهزة المساحية بمختلف تطبيقاتها.",
  },
  {
    id: 1,
    Icon: support,
    title: "دعم فني",
    desc: "دعم فني متواصل لتوفير المعلومات اللازمة و التحديثات لجميع أجهزة المساحة لدى الشركة.",
  },
  {
    id: 2,
    Icon: toolbox,
    title: "قسم صيانة",
    desc: "لسنا مجرد منفذ بيع فقط، بل لدينا قسم صيانة شارك في تنفيذ أبرز مشاريع المملكة.",
  },
];

const heroProducts = [
  {
    id: 0,
    name: "T30Pro",
    img: T30Pro,
    desc: "T30Pro is a GNSS receiver with a long battery life integrates AR and image surveying (IS).",
    backgroundImage: "/hero_bg-3.jpg",
  },
  {
    id: 1,
    name: "T20Pro",
    img: T20Pro,
    desc: "T20Pro is a GNSS receiver featuring advanced RTK for high-precision positioning, suited for professional geospatial applications.",
    backgroundImage: "/hero_bg-4.jpg",
  },
  {
    id: 2,
    name: "T10Pro",
    img: T10Pro,
    desc: "T10Pro is a compact GNSS receiver providing centimeter-level accuracy with RTK technology, designed for surveying and mapping.",
    backgroundImage: "/hero_bg-5.jpg",
  },
  {
    id: 3,
    name: "TBase",
    img: TBase,
    desc: "T10Pro is a compact GNSS receiver providing centimeter-level accuracy with RTK technology, designed for surveying and mapping.",
    backgroundImage: "/hero_bg-5.jpg",
  },
  {
    id: 4,
    name: "Pre-Marking Robot",
    img: Robot,
    desc: "TR10 Pre-Marking Robot is an auxiliary robot that can automatically measure, mark, and draw lines on the road. It can improve the printing and spraying efficiency of road auxiliary lines, and reduce labor pressure and costs.",
    backgroundImage: "/hero_bg-5.jpg",
  },
  {
    id: 5,
    name: "NET660i GNSS Receiver",
    img: Cors1,
    desc: "TR10 Pre-Marking Robot is an auxiliary robot that can automatically measure, mark, and draw lines on the road. It can improve the printing and spraying efficiency of road auxiliary lines, and reduce labor pressure and costs.",
    backgroundImage: "/hero_bg-5.jpg",
  },
];

const details = [
  {
    id: 1,
    Icon: MdGroups,
  },
  {
    id: 2,
    Icon: FaBook,
  },
];

export {
  links,
  logos,
  products,
  testimonials,
  whyUS,
  heroProducts,
  details,
  projects,
};
