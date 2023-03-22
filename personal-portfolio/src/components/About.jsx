import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#3a75c2]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Avik, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I have always been fascinated by the power of the internet to
              connect people and facilitate communication, which is what led me
              to pursue a career in web development. I have experience in HTML,
              CSS, JavaScript, and other web technologies, and I enjoy working
              on both the front-end and back-end of web development. In my free
              time, I like to experiment with new coding techniques and
              frameworks, and I am constantly seeking out new resources to
              expand my knowledge and skill set.Thank you for taking the time to
              learn a little bit about me and my passion for web development. If
              you have any questions or would like to collaborate on a project,
              please don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
