"use client";

import { useTranslations } from "next-intl";

function Statistics() {
  const t = useTranslations("Statistics");

  return (
    <div className="container my-12 mx-auto">
      {/* العنوان الرئيسي */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        {t("title")} {/* يمكنك استخدام الترجمة هنا */}
      </h2>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white rounded-lg shadow-lg p-6">
        {/* Statistic 1 */}
        <div className="text-center p-6 bg-teal-100 rounded-lg border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-200 transition-colors duration-300 hover:bg-teal hover:text-white">
          <div className="text-5xl font-black text-teal-800">300+</div>
          <div className="mt-2 text-lg text-teal-800 opacity-80">{t("1")}</div>
        </div>

        {/* Statistic 2 */}
        <div className="text-center p-6 bg-teal-100 rounded-lg border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-200 transition-colors duration-300 hover:bg-teal hover:text-white">
          <div className="text-5xl font-black text-teal-800">400+</div>
          <div className="mt-2 text-lg text-teal-800 opacity-80">{t("2")}</div>
        </div>

        {/* Statistic 3 */}
        <div className="text-center p-6 bg-teal-100 rounded-lg border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-200 transition-colors duration-300 hover:bg-teal hover:text-white">
          <div className="text-5xl font-black text-teal-800">7+</div>
          <div className="mt-2 text-lg text-teal-800 opacity-80">{t("3")}</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
