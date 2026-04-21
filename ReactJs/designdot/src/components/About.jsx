import React from "react";

const About = () => {
  return (
    // <section className="bg-[#f5f5f5] py-10 relative overflow-hidden">
    //   <div className="max-w-7xl mx-auto px-4 relative">
    //     {/* TOP RIGHT LOCATION */}
    //     <div className="flex justify-end mb-4">
    //       <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
    //         WE ARE LOCATED
    //         <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs">
    //           INDIA
    //         </span>
    //       </div>
    //     </div>

    //     <div className="grid md:grid-cols-12 gap-6 items-start">
    //       {/* LEFT SIDE LABEL */}
    //       <div className="md:col-span-2">
    //         <div className="bg-gray-200 rounded-xl w-full h-[120px] md:h-[160px] flex items-center justify-center">
    //           <p className="text-sm font-semibold text-gray-700 text-center">
    //             ABOUT <br /> FIRM
    //           </p>
    //         </div>
    //       </div>

    //       {/* CENTER CONTENT */}
    //       <div className="md:col-span-6">
    //         <h2 className="text-lg font-semibold mb-3">HLS Global Group</h2>

    //         <p className="text-sm text-gray-600 leading-relaxed">
    //           is an international accounting and business advisory firm with a
    //           focus on providing superior services in the areas of accounting,
    //           tax, audit, advisory, and consulting. Founded in 1990, we pride
    //           ourselves in delivering the highest levels of quality and customer
    //           service while maintaining cost-effectiveness.
    //         </p>

    //         {/* STATS */}
    //         <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-6 border-t pt-6">
    //           <div>
    //             <h3 className="text-xl font-bold text-gray-800">250+</h3>
    //             <p className="text-xs text-gray-500">
    //               Professional Staff Members Globally
    //             </p>
    //           </div>

    //           <div>
    //             <h3 className="text-xl font-bold text-gray-800">1000+</h3>
    //             <p className="text-xs text-gray-500">
    //               Clients in the HLS Global Network
    //             </p>
    //           </div>

    //           <div>
    //             <h3 className="text-xl font-bold text-gray-800">35+</h3>
    //             <p className="text-xs text-gray-500">
    //               Years of Experience Connecting Japan and the World
    //             </p>
    //           </div>

    //           <div>
    //             <h3 className="text-xl font-bold text-gray-800">15+</h3>
    //             <p className="text-xs text-gray-500">
    //               Countries Covered With Our Alliance Network
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* RIGHT IMAGE */}
    //       <div className="md:col-span-4">
    //         <img
    //           src="/first.png"
    //           alt="building"
    //           className="w-full h-full object-cover rounded-xl"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="py-20 px-12 lg:px-20 bg-gray-50 flex flex-col lg:flex-row gap-16 lg:items-stretch">
      {/* THIS IS THE LEFT SIDE CONTAINER */}
      {/* We use flex-col on mobile/tablet and flex-row on desktop to align the box and text */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 relative">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="/map.jpg"
            alt="map"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ABOUT FIRM BOX - Fixed position to the left */}
        <div className="bg-gray-200 p-8 w-full lg:w-40 h-50 font-bold text-lg shrink-0 rounded-3xl">
          ABOUT
          <br />
          FIRM
        </div>

        {/* CONTENT BLOCK - Sits next to the box on desktop */}
        <div className="flex-1">
          <h2 className="text-2xl font mb-6">HLS Global Group</h2>
          <p className="text-gray-800 mb-5  text-justify font-sm">
            is an international accounting and business advisory firm with a
            focus on providing superior services in the areas of accounting,
            tax, audit, advisory, and consulting. Founded in 1990, we pride
            ourselves in delivering the highest levels of quality and customer
            service while remaining cost-effective. We have grown to more than
            250 professionals serving clients in the United States, Japan,
            Mexico, India, Germany, and UAE. While catering to the business
            requirements of Japanese subsidiaries operating in the United
            States, Mexico, India, Germany, and UAE, we also provide
            comprehensive solutions to non-Japanese multinational companies
            operating in Japan.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-10">
            {[
              { n: "250+", l: "Professional Staff Members Globally" },
              { n: "1000+", l: "Clients in the HLS Global Network" },
              {
                n: "35+",
                l: "Years of Experience Connecting Japan and the World",
              },
              { n: "15+", l: "Countries Covered With Our Alliance Network" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-[#00000]">{stat.n}</p>
                <p className="text-md text-gray-800">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 w-full">
        <img
          src="/first.png"
          alt="Building"
          className="rounded-lg shadow-2xl w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
