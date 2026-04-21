import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:block overflow-hidden bg-[#003594]">
      {/* 1. Background Image Layer */}
      {/* On mobile, it sits at the bottom or hidden. On desktop, it's the full right side. */}
      <div className="absolute inset-0 z-0 h-1/2 lg:h-full lg:w-full">
        <img
          src="\hero.jpg"
          alt="Modern Office"
          className="w-full h-full object-cover object-center opacity-40 lg:opacity-100"
        />
      </div>

      {/* 2. Responsive Blue Overlay */}
      {/* Mobile: Full background | Desktop: Custom Curve */}
      <div
        className="absolute inset-0 z-10 bg-[#003594] transition-all duration-700"
        style={{
          clipPath:
            window.innerWidth > 1024
              ? 'path("M0,0 L600,0 C400,150 1050,700 950,1080 L0,1080 Z")'
              : "none",
          width: "100%",
        }}
      ></div>
      <div
        className="absolute inset-0 z-10 bg-[#003594]"
        style={{
          clipPath:
            window.innerWidth > 1024
              ? 'path("M1920,0 L1800,0 C2000,100 900,700 1000,1080 L1920,1080 Z")'
              : "none",
        }}
      ></div>

      {/* 3. Content Layer */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen p-6 md:p-12 lg:p-20 text-white">
        {/* Top Content Area */}
        <div className="max-w-1xl mt-10 lg:mt-30">
          <p className="text-[8px] md:text-xs font-semibold tracking-[0.1em] uppercase opacity-80 mb-4">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-[1.0] mb-2">
            EMPOWERED
            <br className="hidden md:block" /> WORKPLACES
          </h1>
          <div className="border-b-4 h- w-80 mb-5"></div>
          <p className="text-sm md:text-base max-w-md opacity-90 leading-relaxed mb-8 md:mb-10">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button
            className="bg-[#FF7A00] text-black flex items-center gap-3 px-8 py-3 font-bold uppercase text-[10px] tracking-wider transition-all hover:bg-orange-600 rounded-lg"
            style={{
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <IconArrowNarrowRight className="w-5 h-5" />
            LETS CONNECT
          </button>
        </div>

        {/* Bottom Section (Flexbox handles stacking on mobile) */}
        <div className="mt-12 lg:mt-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Footer Text */}
          <div className="max-w-xs lg:max-w-full">
            <p className="text-[7px] md:text-xs font-bold uppercase tracking-widest opacity-80 ">
              Accounting, Taxation, & Business Advisory between India, Japan,
              and the World {/* <br className="hidden lg:block" /> */}
            </p>
          </div>

          {/* Stats / Social Proof Badge */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#003594] lg:border-white object-cover"
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="User"
                />
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF7A00] border-2 border-[#003594] lg:border-white flex items-center justify-center text-[8px] md:text-[10px] font-bold">
                MORE
              </div>
            </div>
            <div className="text-white">
              <p className="text-2xl md:text-3xl font-bold leading-none">
                250 +
              </p>
              <p className="text-[10px] md:text-xs opacity-80">
                Enjoy Working
                <br />
                with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="relative w-full min-h-screen bg-[#003594] overflow-hidden">
    //   {/* 1. Background Image Layer */}
    //   {/* Always absolute. On mobile, we reduce opacity to let the blue show through. */}
    //   <div className="absolute inset-0 z-0">
    //     <img
    //       src="/hero.jpg"
    //       alt="Modern Office"
    //       className="w-full h-full object-cover object-center opacity-30 lg:opacity-100"
    //     />
    //   </div>

    //   {/* 2. Responsive Blue Overlay */}
    //   {/* On desktop (lg), we use clip-path to show only the left side. On mobile, it's a full overlay. */}
    //   <div
    //     className="absolute inset-0 z-10 bg-[#003594] lg:clip-path-custom"
    //     style={{
    //       // This clip-path works at all sizes because it uses % instead of pixels
    //       clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
    //     }}
    //   ></div>

    //   {/* 3. Content Layer */}
    //   <div className="relative z-20 flex flex-col justify-between min-h-screen p-6 md:p-12 lg:p-20 text-white">
    //     {/* Top Content Area */}
    //     <div className="max-w-2xl mt-10 lg:mt-20">
    //       <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase opacity-80 mb-4">
    //         Accountants and Global Business Advisors
    //       </p>

    //       <h1 className="text-5xl md:text-7xl font-bold leading-[1.0] mb-4">
    //         EMPOWERED
    //         <br />
    //         WORKPLACES
    //       </h1>

    //       <div className="border-b-4 border-[#FF7A00] w-20 mb-6"></div>

    //       <p className="text-sm md:text-base max-w-sm opacity-90 leading-relaxed mb-8">
    //         by fostering inclusivity, encouraging growth, promoting
    //         collaboration, valuing diversity, supporting innovation, and
    //         building trust for shared success.
    //       </p>

    //       <button
    //         className="bg-[#FF7A00] text-black flex items-center gap-3 px-8 py-3 font-bold uppercase text-[10px] tracking-wider transition-all hover:bg-orange-600 rounded-sm"
    //         style={{
    //           clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)",
    //         }}
    //       >
    //         <IconArrowNarrowRight className="w-5 h-5" />
    //         LETS CONNECT
    //       </button>
    //     </div>

    //     {/* Bottom Section */}
    //     <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
    //       {/* Footer Text */}
    //       <div className="max-w-xs">
    //         <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest opacity-80">
    //           Accounting, Taxation, & Business Advisory between India, Japan,
    //           and the World
    //         </p>
    //       </div>

    //       {/* Stats / Social Proof Badge */}
    //       <div className="flex items-center gap-3">
    //         <div className="flex -space-x-3">
    //           {[1, 2, 3].map((i) => (
    //             <img
    //               key={i}
    //               className="w-10 h-10 rounded-full border-2 border-white object-cover"
    //               src={`https://i.pravatar.cc/100?img=${i + 20}`}
    //               alt="User"
    //             />
    //           ))}
    //           <div className="w-10 h-10 rounded-full bg-[#FF7A00] border-2 border-white flex items-center justify-center text-[8px] font-bold">
    //             MORE
    //           </div>
    //         </div>
    //         <div className="text-white">
    //           <p className="text-2xl font-bold leading-none">250 +</p>
    //           <p className="text-[10px] opacity-80">
    //             Enjoy Working
    //             <br />
    //             with us
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
