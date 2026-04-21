import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const Hero = () => {
  return (
    // <section className="bg-blue-900 text-white">
    //   <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
    //     {/* LEFT */}
    //     <div>
    //       <p className="text-xs uppercase tracking-wide text-gray-300">
    //         Accounting & Legal Services Advisory
    //       </p>

    //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
    //         Empowered <br /> Workplaces
    //       </h1>

    //       <p className="mt-4 text-gray-200 text-sm sm:text-base">
    //         We provide modern accounting, payroll, and compliance solutions.
    //       </p>

    //       <button className="mt-6 bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition">
    //         Get Started
    //       </button>
    //     </div>

    //     {/* RIGHT */}
    //     <div>
    //       <img
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE3o8Rt5UptZfeNy5R2p0odgDma_1HqOrzQ&s"
    //         alt="office"
    //         className="w-full h-auto rounded-lg"
    //       />
    //     </div>
    //   </div>
    // </section>
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
          <div className="border-b-4 h- w-80 mb-5" ></div>
          <p className="text-sm md:text-base max-w-md opacity-90 leading-relaxed mb-8 md:mb-10">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button className="flex items-center gap-4 bg-[#FF7A00] hover:bg-orange-600 transition-all px-6 py-3 rounded-md font-bold text-xs md:text-sm uppercase tracking-widest group w-fit">
            {/* <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
            <IconArrowNarrowRight stroke={2} />
            Lets Connect
          </button>
        </div>

        {/* Bottom Section (Flexbox handles stacking on mobile) */}
        <div className="mt-12 lg:mt-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Footer Text */}
          <div className="max-w-xs lg:max-w-md">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80 leading-loose">
              Accounting, Taxation, & Business Advisory between{" "}
              <br className="hidden lg:block" />
              India, Japan, and the World
            </p>
          </div>

          {/* Stats / Social Proof Badge */}
          <div className="flex items-center gap-4 self-start lg:self-auto">
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
  );
};

export default Hero;
