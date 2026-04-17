import React from 'react'

const Insights = () => {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-6 items-start">
        {/* LEFT LABEL */}
        <div className="lg:col-span-2">
          <div className="bg-gray-200 rounded-xl h-[120px] flex items-center justify-center">
            <p className="text-sm font-semibold text-gray-700 text-center">
              INSPIRATION & <br /> INSIGHTS
            </p>
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="lg:col-span-5 space-y-4">
          {/* ACTIVE */}
          <div className="pb-3 border-b-2 border-blue-900">
            <h3 className="text-sm font-semibold text-blue-900">
              Pre-market Entry
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Pre-market entry means trading securities before regular market
              hours to react to overnight news, with lower liquidity and wider
              spreads.
            </p>
          </div>

          {/* OTHERS */}
          <div className="pb-3 border-b">
            <h3 className="text-sm font-semibold">Market Entry</h3>
            <p className="text-xs text-gray-600 mt-1">
              Research demand, assess competition, choose mode, localize
              offering, comply regulations, price strategically, partner
              locally, iterate learning.
            </p>
          </div>

          <div className="pb-3 border-b">
            <h3 className="text-sm font-semibold">Operations</h3>
            <p className="text-xs text-gray-600 mt-1">
              Planning, organizing, and managing processes to efficiently
              produce goods or services, ensuring quality and customer
              satisfaction.
            </p>
          </div>

          <div className="pb-3 border-b">
            <h3 className="text-sm font-semibold">Growth & Expansion</h3>
            <p className="text-xs text-gray-600 mt-1">
              Increasing business size, market reach, revenue, and resources to
              achieve long-term sustainability and competitive advantage.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="lg:col-span-5 flex gap-4 overflow-x-auto">
          {/* BIG CARD */}
          <div className="min-w-[220px] h-[300px] rounded-xl overflow-hidden relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YGkh4TzVJuaR_Hnbbe2Dy1LHI86BKgkYcg&s"
              alt="premarket"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">Pre-Market</p>
              <p className="text-xs opacity-80">
                Evolving supply chain readiness before committing capital
              </p>
            </div>
          </div>

          {/* SMALL CARD 1 */}
          <div className="min-w-[80px] h-[300px] rounded-xl overflow-hidden relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx6GHAqQBD6JFiqDC5wRTGaBamlx3ZQ2xqA&s"
              alt="operations"
              className="w-full h-full object-cover"
            />

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-[-90deg] text-white text-xs font-semibold whitespace-nowrap">
              Operations
            </p>
          </div>

          {/* SMALL CARD 2 */}
          <div className="min-w-[80px] h-[300px] rounded-xl overflow-hidden relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx6GHAqQBD6JFiqDC5wRTGaBamlx3ZQ2xqA&s"
              alt="growth"
              className="w-full h-full object-cover"
            />

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-[-90deg] text-white text-xs font-semibold whitespace-nowrap">
              Growth & Expansion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights
