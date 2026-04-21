import React from "react";

const Insights = () => {
  return (
   

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
