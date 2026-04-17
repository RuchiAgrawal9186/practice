import React from 'react'

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-300">
            Accounting & Legal Services Advisory
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Empowered <br /> Workplaces
          </h1>

          <p className="mt-4 text-gray-200 text-sm sm:text-base">
            We provide modern accounting, payroll, and compliance solutions.
          </p>

          <button className="mt-6 bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE3o8Rt5UptZfeNy5R2p0odgDma_1HqOrzQ&s"
            alt="office"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero
