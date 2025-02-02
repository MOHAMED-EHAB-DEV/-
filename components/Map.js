function Map() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* العنوان أو الوصف */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          موقعنا على الخريطة
        </h2>
        <p className="text-center text-gray-600 mb-12">
          يمكنك العثور علينا بسهولة باستخدام الخريطة التالية.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842407.205980734!2d43.31868612433816!3d19.867404322246575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfee75b226dd%3A0xa91278aa4a3265c4!2z2YLZhdmFINin2YTZhdiz2KfYrdipINin2YTYqtis2KfYsdmK2Kk!5e0!3m2!1sar!2ssa!4v1738527847601!5m2!1sar!2ssa"
            className="w-full h-96 border-0"
            allowFullScreen
            loading="lazy"
            title="موقعنا على الخريطة"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
