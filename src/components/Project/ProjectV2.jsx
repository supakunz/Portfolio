/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useRef } from "react";
import { MENULINKS, PROJECTS } from "../../../constants";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Filter from "../Filter/Filter";
import { AnimatePresence, motion } from "framer-motion";

const ProjectV2 = ({ isDesktop, clientHeight }) => {
  const [projectData, setProjectData] = useState(PROJECTS); // Data ของหนังทั้งหมด
  const [filtered, setFiltered] = useState([]); // Data ของหนังที่ filter แล้ว
  const [activeGenre, setActiveGenre] = useState("all"); // Action เพื่อเลือกประเภทของหนัง
  const [showProject, setShowProject] = useState(6);
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  return (
    <>
      <section
        ref={sectionRef}
        id={MENULINKS[4].ref}
        className={`${
          isDesktop && "min-h-screen"
        } w-full relative select-none section-container my-12 lg:my-24 transform-gpu mb-[3.5rem] lg:mb-[6rem]`}
      >
        <div className="w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all" />
        <img
          src="/hero.svg"
          alt="Hero"
          className="absolute top-[0px] w-full h-full max-h-[750px] object-cover"
        />
        <div className="relative z-[11]">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
              Projects
            </span>
            <span className="w-full h-[1.7px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div
          className="flex flex-col justify-center h-full pt-[5.5rem]"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div
            className="flex flex-col inner-container transform-gpu z-[11]"
            ref={sectionTitleRef}
          >
            <h1 className="text-4xl font-medium text-gradient w-fit">
              My Projects
            </h1>
            <p className="uppercase mt-5 tracking-widest text-gray-light-1">
              PROJECTS
            </p>
          </div>
          <div
            className={`${
              clientHeight > 650 ? "mt-12" : "mt-8"
            } flex project-wrapper no-scrollbar overflow-hidden`}
          >
            <div className="flex items-center justify-center flex-col w-[100vw] gap-[5rem] h-full">
              <Filter
                projectData={projectData}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
                setShowProject={setShowProject}
              />
              <motion.div
                layout
                className="grid-projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative w-[95%]"
              >
                <AnimatePresence>
                  {filtered.slice(0, showProject).map((project, index) => (
                    <motion.div
                      animate={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      layout
                      key={index}
                    >
                      <Card
                        classes={
                          index === PROJECTS.length - 1
                            ? ""
                            : "mr-10 xs:mr-12 sm:mr-16"
                        }
                        project={project}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
              {filtered.length > 6 &&
              filtered.length != filtered.slice(0, showProject).length ? (
                <button
                  onClick={() => setShowProject(showProject + 3)}
                  className="absolute bottom-[-3.5rem] animate-bounce btn-project p-[0.35rem_0.9rem] rounded-md"
                >
                  View All
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectV2;
