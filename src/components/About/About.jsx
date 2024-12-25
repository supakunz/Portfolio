/* eslint-disable no-unused-vars */
import React from "react";
import { MENULINKS, SKILLS } from "../../../constants";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <>
      <section
        id={MENULINKS[1].ref}
        className=" w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 h-container h-screen relative select-none"
        style={{ opacity: "1" }}
      >
        <div className="w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all" />
        <img
          src="/hero.svg"
          alt="Hero"
          className="absolute top-[0] h-[100%] object-cover"
        />
        <div className="flex flex-col top-20 z-10 select-none">
          <div className="flex flex-col skills-wrapper">
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <p className="uppercase tracking-widest text-gray-light-1">
                ABOUT
              </p>
              <h1 className="text-4xl mt-2 font-medium text-gradient w-fit">
                Who I am?
              </h1>
              <h2 className="text-[1rem] text-justify -tracking-[0.5px] lg:-tracking-[1px] 2xl:-tracking-[1.1px] font-medium md:max-w-[539px] w-[99.2vw] mt-2 pr-7 md:pr-0">
                My name is Supakun Thata. I am FullStack Developer. I am a quick
                learner with a self-learning attitude. I love to learn and
                explore new technologies, passionate about problem-solving and
                like almost all the stacks of web application development.
              </h2>
            </div>
            <div
              className="mt-10 flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 className="text-4xl mt-2 font-medium text-gradient w-fit">
                Skills
              </h1>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                LANGUAGES AND TOOLS
              </h3>
            </div>
            <div
              className="slid-container w-screen my-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {SKILLS.map((skill, id) => (
                  <div
                    className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    key={id}
                  >
                    <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                          <img
                            src={skill.img}
                            alt={skill.tools}
                            width={40}
                            height={40}
                            className="h-full w-auto rounded-lg"
                          />
                        </div>
                        <p className="text-white text-sm sm:text-lg">
                          {skill.tools}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
