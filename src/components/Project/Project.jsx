import React from 'react'
import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from '../../../constants'
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";


const Project = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  return (
    <>
      <section
        ref={sectionRef}
        id={MENULINKS[2].ref}
        className={`${isDesktop && "min-h-screen"
          } w-full relative select-none section-container my-12 lg:my-24 transform-gpu`}
      >
        <div className='w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all' />
        <img src="../../../public/hero.svg" alt="Hero" width={1572} height={795} className=" absolute top-[0]" />
        <div className="sticky top-10 z-[11]">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
              Projects
            </span>
            <span className="w-full h-[1.7px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full pt-[5.5rem]">
          <div
            className="flex flex-col inner-container transform-gpu z-[11]"
            ref={sectionTitleRef}
          >
            <h1 className="text-4xl font-medium text-gradient w-fit staggered-reveal">
              My Projects
            </h1>
            <p className="uppercase mt-5 tracking-widest text-gray-light-1 staggered-reveal">
              PROJECTS
            </p>
          </div>
          <div
            className={`${clientHeight > 650 ? "mt-12" : "mt-8"
              } flex project-wrapper no-scrollbar w-fit`}
          >
            <div className="flex items-center justify-center flex-col carousel-container w-[100vw]">
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
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[100%]"
              >
                {PROJECTS.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Card classes={index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"} project={project} key={project.name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project

