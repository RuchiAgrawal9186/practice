import React from "react";

const HotTopics = () => {
  const topics = [
    "Parliament Introduces Income Tax Bill to Reshape India’s Direct Tax Landscape",
    "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    "India Modernizes Maritime Law with Carriage of Goods by Sea Bill 2025",
  ];
  return (
    <section className="bg-[#f5f5f5] py-4 border-y">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto">
        {/* LEFT TAG */}
        <div className="relative min-w-fit">
          <div className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 pr-6 rounded-l-md">
            HOT TOPICS
          </div>

          {/* ANGLED EDGE */}
          <div className="absolute right-[-12px] top-0 w-0 h-0 border-t-[18px] border-b-[18px] border-l-[12px] border-t-transparent border-b-transparent border-l-orange-500"></div>
        </div>
        {/* TOPICS */}{" "}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {topics.map((item, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-gray-50 p-4 rounded-md hover:shadow transition cursor-pointer"
            >
              {/* TOP UNDERLINE */}
              <div className="w-full h-[4px] bg-blue-900 mb-3"></div>

              {/* TEXT */}
              <p className="text-sm font-medium text-gray-800">{item}</p>

              {/* ARROW */}
              <div className="mt-4 text-blue-900 text-lg">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
