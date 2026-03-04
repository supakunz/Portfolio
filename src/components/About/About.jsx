/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  MENULINKS,
  SKILLS_FULLSTACK,
  SKILLS_DATA_ENGINEERING,
} from "../../../constants";
import Marquee from "react-fast-marquee";

const About = () => {
  const [activeSkillGroup, setActiveSkillGroup] = useState("fullstack");
  const activeSkills =
    activeSkillGroup === "fullstack"
      ? SKILLS_FULLSTACK
      : SKILLS_DATA_ENGINEERING;

  const renderSkillCard = (skill, id, extraClass = "mx-2 md:mx-3") => (
    <div
      className={`w-32 sm:w-36 min-w-[8rem] h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-[1.06] cursor-pointer ${extraClass}`}
      key={`${skill.tools}-${id}`}
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
              loading="lazy"
              decoding="async"
              width={40}
              height={40}
              className="h-full w-auto rounded-lg"
            />
          </div>
          <p className="text-white text-sm sm:text-lg">{skill.tools}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        id={MENULINKS[1].ref}
        className="w-full flex md:items-center py-8 lg:py-14 section-container min-h-screen relative select-none"
        style={{ opacity: "1" }}
      >
        <div className="w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all" />
        <img
          src="/hero.svg"
          alt="Hero"
          loading="lazy"
          decoding="async"
          className="absolute top-[0] h-[100%] object-cover"
        />
        <div className="flex flex-col top-20 z-10 select-none w-full">
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
              <h2 className="text-[1rem] text-justify -tracking-[0.5px] lg:-tracking-[1px] 2xl:-tracking-[1.1px] font-medium w-full md:max-w-[539px] mt-2 pr-2 md:pr-0">
                My name is Supakun Thata. I am a Fullstack Developer with a
                strong focus on Data Engineering. I am a quick learner with a
                self-learning attitude. I love to learn and explore new
                technologies, passionate about problem-solving and building
                practical end-to-end solutions.
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
              <div className="flex items-center w-fit p-1 rounded-lg bg-[#101123] border border-[#1f223c]">
                <button
                  className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    activeSkillGroup === "fullstack"
                      ? "bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveSkillGroup("fullstack")}
                  type="button"
                >
                  Fullstack
                </button>
                <button
                  className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    activeSkillGroup === "data-engineering"
                      ? "bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveSkillGroup("data-engineering")}
                  type="button"
                >
                  Data Engineering
                </button>
              </div>
            </div>
            <div
              className="w-full max-w-full overflow-hidden my-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <Marquee
                key={activeSkillGroup}
                gradient={false}
                speed={70}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction={activeSkillGroup === "fullstack" ? "left" : "right"}
              >
                {activeSkills.map((skill, id) =>
                  renderSkillCard(skill, id, "mx-2 md:mx-3")
                )}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
