import React from "react";

const About = () => {
  return (
    <div className="container mx-auto pt-[150px] pb-10 text-white drop-shadow-md">
      <div className="grid lg:grid-cols-[50%,1fr] pb-4 gap-4">
        <img
          src="/images/i_3.png"
          alt="Team Collaboration"
          className="w-full h-auto lg:w-auto lg:h-[100vh] rounded-md ring-4 ring-gray-900 ring-opacity-50"
        />

        <div className="self-center">
          <h1 className="text-4xl pl-4 font-bold mb-4 text-accent drop-shadow-md">
            About <span className="text-white drop-shadow-md "> Us</span>
          </h1>
          <p className="text-slate-400 pt-2 pl-4 drop-shadow-md">
            At Code Crafters Studio, we are dedicated to merging design,
            technology, and strategic thinking to create impactful solutions
            tailored to our clients' needs. <br /> Our mission is to transform
            visionary ideas into reality through a collaborative and innovative
            approach, ensuring that every project not only meets but exceeds
            expectations. We believe in crafting experiences that resonate,
            inspire, and drive success.
          </p>

          <h3 className="text-2xl font-bold pt-6 pl-4 mb-4 text-accent drop-shadow-md">
            Core Values
          </h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2 drop-shadow-md">
            <li className="pl-4 pt-2 drop-shadow-md">
              <span className="font-semibold text-white drop-shadow-md">
                Creativity :
              </span> We embrace imaginative thinking and innovative design, ensuring
              that every solution is not only functional but also unique and
              engaging.
            </li>
            <li className="pl-4 pt-2">
              <span className="font-semibold text-white drop-shadow-md">
                Quality :
              </span> Our commitment to excellence drives us to deliver high-quality
              work that stands the test of time. We pay attention to every
              detail, ensuring that our solutions are robust and reliable.
            </li>
            <li className="pl-4 pt-2">
              <span className="font-semibold text-white drop-shadow-md">
                Innovation :
              </span> Staying ahead of the curve is key. We continuously explore new
              technologies and methodologies, integrating the latest
              advancements into our work to offer cutting-edge solutions.
            </li>
            <li className="pl-4 pt-2">
              <span className="font-semibold text-white drop-shadow-md">
                Customer-Centricity :
              </span> Our clients are at the heart of everything we do. We prioritize
              their needs, listening to their goals and challenges to create
              solutions that truly reflect their vision.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
