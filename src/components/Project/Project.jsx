import React from "react";
import { useRef } from "react";
import { MENULINKS, PROJECTS } from "../../../constants";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Project = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  return (
    <>
      <section
        ref={sectionRef}
        id={MENULINKS[4].ref}
        className={`${
          isDesktop && "min-h-screen"
        } w-full relative select-none section-container my-12 lg:my-24 transform-gpu`}
      >
        <div className="w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all" />
        <img
          src="/hero.svg"
          alt="Hero"
          className="absolute top-0 h-[100%] object-cover"
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
            <div
              className="flex items-center justify-center flex-col carousel-container w-[100vw]"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <Swiper
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1025: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="max-w-[100%] pl-[8px]"
              >
                {PROJECTS.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      classes={
                        index === PROJECTS.length - 1
                          ? ""
                          : "mr-10 xs:mr-12 sm:mr-16"
                      }
                      project={project}
                      key={project.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
