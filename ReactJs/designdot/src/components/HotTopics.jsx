import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const HotTopics = () => {
  const topics = [
    "Parliament Introduces Income Tax Bill to Reshape India’s Direct Tax Landscape",
    "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    "India Modernizes Maritime Law with Carriage of Goods by Sea Bill 2025",
  ];
  return (
    <section className="bg-[#f5f5f5] py-2 ">
      {/* Main Container */}
      <div className="max-w-[94%] mx-auto px-4">
        {/* Responsive Layout: Flex Column on Mobile, Row on Desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT TAG (Button) */}
          <div className="flex-shrink-0 self-start">
            <button
              className="bg-[#FF7A00] text-black flex items-center gap-3 px-8 py-3 font-bold uppercase text-[10px] tracking-wider transition-all hover:bg-orange-600 rounded-lg whitespace-nowrap"
              style={{
                clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {/* <IconArrowNarrowRight className="w-5 h-5" /> */}
              Hot Topics
            </button>
          </div>

          {/* TOPICS GRID (Responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {topics.map((item, i) => (
              <div
                key={i}
                className="h-full  p-6 rounded-md  hover:shadow-lg transition cursor-pointer flex flex-col"
              >
                {/* TOP UNDERLINE */}
                <div className="w-full h-[4px] bg-[#003893] mb-4"></div>

                {/* TEXT - flex-grow pushes content to fill space */}
                <p className="text-base font-medium text-gray-500 flex-grow mb-6 leading-relaxed">
                  {item}
                </p>

                {/* ARROW - Always at bottom right */}
                <div className="mt-auto ml-auto">
                  <IconArrowNarrowRight className="w-6 h-6 text-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
