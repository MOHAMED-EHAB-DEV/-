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
            src="https://www.google.com/maps/embed/v1/place?q=21.4858,39.1925&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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