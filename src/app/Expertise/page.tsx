import React from "react";

const Expertise = () => {
  return (
    <div className="container mx-auto pt-[100px] pb-10 text-white drop-shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-accent drop-shadow-md">
        Our <span className="text-white drop-shadow-md">Expertise</span>
      </h1>
      <img
          src="/images/main_image.jpg" 
          alt="Expertise Overview"
          className="w-full h-96 rounded-ss-full ring-gray-900 ring-opacity-50 drop-shadow-md"
        />
      <p className="text-slate-400 pt-4 mb-8 drop-shadow-md">
        At CodeCrafters Studio, we specialize in providing customized software
        solutions that meet the unique needs of our clients. Our team is
        proficient in the latest technologies and techniques to create
        innovative, scalable, and efficient solutions for a wide range of
        industries.
      </p>
  
      <h2 className="text-3xl font-bold mb-4 pt-8 text-white drop-shadow-md">
        Our Areas of <span className="text-accent drop-shadow-md">Expertise</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
        <div className="bg-[#ffffff14] p-6 rounded-md flex flex-col items-center">
          <img
            src="/images/e_1.jpg" 
            alt="Bespoke Software Development"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Bespoke Software Development
          </h3>
          <p className="text-slate-400 drop-shadow-md text-center">
            We design and develop custom software solutions tailored to your
            business requirements, from web applications to mobile apps and
            enterprise solutions.
          </p>
        </div>

        <div className="bg-[#ffffff14] p-6 rounded-md flex flex-col items-center">
          <img
            src="/images/e_2.jpg" 
            alt="Artificial Intelligence Integration"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Artificial Intelligence (AI) Integration
          </h3>
          <p className="text-slate-400 drop-shadow-md text-center">
            Our team helps you harness the power of AI to optimize your
            business processes, enhance user experiences, and make
            data-driven decisions with smart automation.
          </p>
        </div>

        <div className="bg-[#ffffff14] p-6 rounded-md flex flex-col items-center">
          <img
            src="/images/e_3.jpg" 
            alt="Data Science & Analytics"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Data Science & Analytics
          </h3>
          <p className="text-slate-400 drop-shadow-md text-center">
            Transform your data into actionable insights with our
            sophisticated analytics solutions, guiding your business
            strategy and growth.
          </p>
        </div>

        <div className="bg-[#ffffff14] p-6 rounded-md flex flex-col items-center">
          <img
            src="/images/e_4.jpg" 
            alt="Blockchain Solutions"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Blockchain Solutions
          </h3>
          <p className="text-slate-400 drop-shadow-md text-center">
            We build secure, transparent, and scalable blockchain-based
            applications that allow businesses to operate with greater
            transparency and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
