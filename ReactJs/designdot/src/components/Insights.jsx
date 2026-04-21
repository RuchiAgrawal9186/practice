import React from "react";

const Insights = () => {
  return (
    // <section className="bg-[#f5f5f5] py-10">
    //   <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-6 items-start">
    //     {/* LEFT LABEL */}
    //     <div className="lg:col-span-2">
    //       <div className="bg-gray-200 rounded-xl h-[120px] flex items-center justify-center">
    //         <p className="text-sm font-semibold text-gray-700 text-center">
    //           INSPIRATION & <br /> INSIGHTS
    //         </p>
    //       </div>
    //     </div>

    //     {/* MIDDLE CONTENT */}
    //     <div className="lg:col-span-5 space-y-4">
    //       {/* ACTIVE */}
    //       <div className="pb-3 border-b-2 border-blue-900">
    //         <h3 className="text-sm font-semibold text-blue-900">
    //           Pre-market Entry
    //         </h3>
    //         <p className="text-xs text-gray-600 mt-1">
    //           Pre-market entry means trading securities before regular market
    //           hours to react to overnight news, with lower liquidity and wider
    //           spreads.
    //         </p>
    //       </div>

    //       {/* OTHERS */}
    //       <div className="pb-3 border-b">
    //         <h3 className="text-sm font-semibold">Market Entry</h3>
    //         <p className="text-xs text-gray-600 mt-1">
    //           Research demand, assess competition, choose mode, localize
    //           offering, comply regulations, price strategically, partner
    //           locally, iterate learning.
    //         </p>
    //       </div>

    //       <div className="pb-3 border-b">
    //         <h3 className="text-sm font-semibold">Operations</h3>
    //         <p className="text-xs text-gray-600 mt-1">
    //           Planning, organizing, and managing processes to efficiently
    //           produce goods or services, ensuring quality and customer
    //           satisfaction.
    //         </p>
    //       </div>

    //       <div className="pb-3 border-b">
    //         <h3 className="text-sm font-semibold">Growth & Expansion</h3>
    //         <p className="text-xs text-gray-600 mt-1">
    //           Increasing business size, market reach, revenue, and resources to
    //           achieve long-term sustainability and competitive advantage.
    //         </p>
    //       </div>
    //     </div>

    //     {/* RIGHT CARDS */}
    //     <div className="lg:col-span-5 flex gap-4 overflow-x-auto">
    //       {/* BIG CARD */}
    //       <div className="min-w-[220px] h-[300px] rounded-xl overflow-hidden relative">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YGkh4TzVJuaR_Hnbbe2Dy1LHI86BKgkYcg&s"
    //           alt="premarket"
    //           className="w-full h-full object-cover"
    //         />

    //         <div className="absolute bottom-4 left-4 text-white">
    //           <p className="text-sm font-semibold">Pre-Market</p>
    //           <p className="text-xs opacity-80">
    //             Evolving supply chain readiness before committing capital
    //           </p>
    //         </div>
    //       </div>

    //       {/* SMALL CARD 1 */}
    //       <div className="min-w-[80px] h-[300px] rounded-xl overflow-hidden relative">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx6GHAqQBD6JFiqDC5wRTGaBamlx3ZQ2xqA&s"
    //           alt="operations"
    //           className="w-full h-full object-cover"
    //         />

    //         <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-[-90deg] text-white text-xs font-semibold whitespace-nowrap">
    //           Operations
    //         </p>
    //       </div>

    //       {/* SMALL CARD 2 */}
    //       <div className="min-w-[80px] h-[300px] rounded-xl overflow-hidden relative">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx6GHAqQBD6JFiqDC5wRTGaBamlx3ZQ2xqA&s"
    //           alt="growth"
    //           className="w-full h-full object-cover"
    //         />

    //         <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-[-90deg] text-white text-xs font-semibold whitespace-nowrap">
    //           Growth & Expansion
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="py-20 px-12 lg:px-20 bg-white">
      {/* This container ensures everything stays in one row on desktop */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* 1. SIDEBAR HEADER */}
        <div className="bg-gray-200 p-8 w-full lg:w-48 shrink-0 rounded-3xl h-50 font-bold text-lg">
          INSPIRATION &<br />
          INSIGHTS
        </div>

        {/* 2. CONTENT LIST */}
        <div className="flex-1 space-y-1">
          {[
            {
              title: "Pre-market Entry",
              desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
            },
            {
              title: "Market Entry",
              desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
            },
            {
              title: "Operations",
              desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
            },
            {
              title: "Growth & Expansion",
              desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
            },
          ].map((item, i) => (
            <div key={i} className="border-b border-gray-300 pb-2">
              <h3 className="text-md font-bold text-[#000000] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 ">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. IMAGE CARDS GALLERY */}
        <div className="flex flex-row lg:flex-row gap-4 shrink-0">
          {[
            {
              name: "Pre-Market",
              img: "/market.jpg",
              desc: "Pre-Market Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets",
            },
            { name: "Operations", img: "/operation.jpg", desc: "" },
            { name: "Growth & Expansion", img: "/growth.jpg", desc: "" },
          ].map((card, i) => (
            <div
              key={i}
              className="relative w-40 h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg">{card.name}</p>
                {card.desc && (
                  <p className="text-white font-normal text-sm">{card.desc}</p>
                )}
              </div>
            </div>
          ))}
            </div>
                     
      </div>
    </section>
  );
};

export default Insights;
