"use client";

export default function PackagesHeroSection() {
  

  return (
    <div className="relative h-[536px] flex flex-col justify-center items-center text-center ">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      
      <div className="relative z-10 max-w-xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-medium px-2">
          Country Images
        </h1>
        <p className="mt-6 text-lg">
        the content of the country description goes here
        </p>
      </div>

    </div>
  );
}
