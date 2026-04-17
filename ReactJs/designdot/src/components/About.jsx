import React from "react";

const About = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* TOP RIGHT LOCATION */}
        <div className="flex justify-end mb-4">
          <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
            WE ARE LOCATED
            <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs">
              INDIA
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* LEFT SIDE LABEL */}
          <div className="md:col-span-2">
            <div className="bg-gray-200 rounded-xl w-full h-[120px] md:h-[160px] flex items-center justify-center">
              <p className="text-sm font-semibold text-gray-700 text-center">
                ABOUT <br /> FIRM
              </p>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="md:col-span-6">
            <h2 className="text-lg font-semibold mb-3">HLS Global Group</h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              is an international accounting and business advisory firm with a
              focus on providing superior services in the areas of accounting,
              tax, audit, advisory, and consulting. Founded in 1990, we pride
              ourselves in delivering the highest levels of quality and customer
              service while maintaining cost-effectiveness.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-6 border-t pt-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">250+</h3>
                <p className="text-xs text-gray-500">
                  Professional Staff Members Globally
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">1000+</h3>
                <p className="text-xs text-gray-500">
                  Clients in the HLS Global Network
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">35+</h3>
                <p className="text-xs text-gray-500">
                  Years of Experience Connecting Japan and the World
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">15+</h3>
                <p className="text-xs text-gray-500">
                  Countries Covered With Our Alliance Network
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-4">
            <img
              src="/first.png"
              alt="building"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
