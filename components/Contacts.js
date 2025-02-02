"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { InboxArrowDownIcon } from "@heroicons/react/20/solid";

import leftArrow from "@/public/leftArrow.svg";
import { getUserLocale } from "@/lib/db";
import { defaultLocale } from "@/lib/config";

const Contacts = () => {
  const t = useTranslations("Contacts");

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    const getLocale = async () => {
      const currentLocale = await getUserLocale();
      setCurrentLocale(currentLocale);
    };

    getLocale();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // بناء الرسالة باللغة العربية مع تنسيق محترف
    const whatsappMessage = `
السلام عليكم ورحمة الله وبركاته،

أنا عميل أرغب في التواصل مع شركة قمم المساحة التجارية.

👤 *الاسم:* ${formData.fullName}
📞 *الهاتف:* ${formData.phoneNumber}
📧 *البريد الإلكتروني:* ${formData.email}
🏢 *الشركة:* ${formData.companyName}
📝 *الرسالة:*
${formData.message}

شكرًا لاهتمامكم، وأتطلع لردكم قريبًا.
    `.trim(); // إزالة المسافات الزائدة

    // فتح واتساب مع الرسالة المنسقة
    window.open(
      `https://api.whatsapp.com/send?phone=+966509314427&text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      companyName: "",
      message: "",
    });

    setError("تم إرسال الرسالة بنجاح!");
  };

  const handleWhatsAppClick = () => {
    // بناء الرسالة باللغة العربية مع تنسيق محترف
    const whatsappMessage = `
السلام عليكم ورحمة الله وبركاته،

أنا عميل أرغب في التواصل مع شركة قمم المساحة التجارية.

👤 *الاسم:* ${formData.fullName}
📞 *الهاتف:* ${formData.phoneNumber}
📧 *البريد الإلكتروني:* ${formData.email}
🏢 *الشركة:* ${formData.companyName}
📝 *الرسالة:*
${formData.message}

شكرًا لاهتمامكم، وأتطلع لردكم قريبًا.
    `.trim(); // إزالة المسافات الزائدة

    // فتح واتساب مع الرسالة المنسقة
    window.open(
      `https://api.whatsapp.com/send?phone=+966509314427&text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  const handleEmailClick = () => {
    const emailSubject = "Contact Form Submission";
    const emailBody = `
Dear Qimam Al-Masaha Commercial,

I am a customer interested in contacting your company.

 Name: ${formData.fullName}
 Phone: ${formData.phoneNumber}
 Email: ${formData.email}
 Company: ${formData.companyName}
 Message:
${formData.message}

Thank you for your attention, and I look forward to your response.

Best regards,
${formData.fullName}
    `.trim(); // إزالة المسافات الزائدة

    // فتح نافذة جديدة لإرسال البريد الإلكتروني عبر Gmail
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=info@surveyingpeaks.com&su=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`,
      "_blank"
    );
  };

  return (
    <div
      className="relative flex almarai flex-col text-right items-center justify-center gap-4 p-0 sm:p-12 sm:pt-0 pt-0 bg-[#FCFCFC]"
      style={{ direction: currentLocale === "ar" ? "rtl" : "ltr" }}
    >
      <div className="flex flex-col p-11 gap-6 w-full sm:w-fit bg-white">
        <div className="pt-16">
          <h2 className="pt-8 pb-4 text-center text-3xl text-teal almarai-bold uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="max-w-4xl text-center flex flex-col items-center justify-center">
          <form className="flex flex-col items-start" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 p-0 sm:p-6 items-center justify-center w-screen sm:w-[800px]">
              <div className="flex flex-col sm:flex-row gap-[18px] items-center justify-center w-full">
                <input
                  type="text"
                  name="fullName"
                  placeholder={t("Fields.name")}
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[calc(100%-40px)] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.fullName}
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="رقم الهاتف (KSA)" // تغيير النص النائب
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[calc(100%-40px)] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-[18px] items-center justify-center w-full">
                <input
                  type="email"
                  name="email"
                  placeholder={t("Fields.email")}
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[calc(100%-40px)] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder={t("Fields.whatsapp")}
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[calc(100%-40px)] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.companyName}
                />
              </div>
              <textarea
                name="message"
                className="bg-[#FBFBFB] border-[#BBC1CE]  focus:border-gold border-2 focus:outline-none resize-none rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[calc(100%-40px)] sm:w-full h-48"
                rows={30}
                cols={20}
                placeholder={t("Fields.message")}
                onChange={handleChange}
                value={formData.message}
              />
            </div>
            {error && (
              <div className="text-red-500 text-center w-full mb-4">
                {error}
              </div>
            )}
            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                className={`flex ${
                  currentLocale === "en" ? "flex-row-reverse" : "flex-row"
                } justify-center items-center text-center bg-teal rounded-3xl text-white px-8 py-3 my-2 text-xl font-almarai almarai-extrabold w-48 gap-3 hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={leftArrow}
                    alt="Arrow"
                    width={24}
                    height={24}
                    className={`${
                      currentLocale === "en" && "rotate-180"
                    } pt-1 mx-2 transition-transform duration-300`}
                  />
                </div>
                {t("submit")}
              </button>
            </div>
          </form>
          <div
            className="flex flex-wrap items-around justify-center"
            style={{ marginTop: "50px" }}
          >
            <button
              className="inline-flex items-center rounded-md cursor-pointer justify-center shrink-0 flex-wrap text-sm h-12 px-4 transition bg-orange border-orange my-2 gap-2 almarai-bold lg:mx-4 uppercase text-black hover:text-white"
              onClick={handleEmailClick} // تحديث الدالة
            >
              <InboxArrowDownIcon width="16" height="16" aria-hidden="true" />
              {t("email")}
            </button>
            <button
              className="inline-flex items-center rounded-md cursor-pointer justify-center shrink-0 flex-wrap text-sm h-12 px-4 transition bg-[#0c8029] border-[#0c8029] my-2 gap-2 almarai-bold lg:mx-4 uppercase text-white hover:text-black hover:bg-transparent"
              onClick={handleWhatsAppClick} // تحديث الدالة
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              {t("whatsapp")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
