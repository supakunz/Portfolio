/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import "./filter.css";

/* eslint-disable react/prop-types */
const Filter = ({
  projectData,
  setFiltered,
  activeGenre,
  setActiveGenre,
  setShowProject,
}) => {
  // ** เมื่อ State ของ activeGenre มีการเปลี่ยนแปลง ให้ useEffect ทำงาน
  useEffect(() => {
    if (activeGenre === "all") {
      // active === 0
      return setFiltered(projectData); // set Data หนังทั้งหมดลงใน filtered
    }
    // active != 0
    const filtered = projectData.filter(
      (project) => project.tag.includes(activeGenre) // * filter genre_ids #[35, 1] ที่มีค่า เหมือน 35 or 28 ใน array โดยใช้ includes ที่ retrun เป็น boolean
    );
    return setFiltered(filtered); // set Data ที่ผ่านก่ร filter ลงใน filtered
  }, [activeGenre]);

  return (
    <div className="relative w-full">
      <div className="flex justify-center -z-40">
        <div className="absolute z-10 top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      </div>
      <div className="flex justify-center gap-x-[5rem] gap-y-1 text-[#B7B7B7] border-none">
        <input hidden="" className="mode" id="theme-mode" type="checkbox" />
        <div className="container-filter">
          <div className="wrap">
            <input
              hidden=""
              className="rd-1"
              name="radio"
              id="rd-1"
              type="radio"
              defaultChecked
            />
            <label
              onClick={() => {
                setActiveGenre("all");
                setShowProject(6);
              }}
              style={{ index: 0 }}
              className="label"
              htmlFor="rd-1"
            >
              <span className="tracking-wider">All</span>
            </label>
            <input
              hidden=""
              className="rd-2"
              name="radio"
              id="rd-2"
              type="radio"
            />
            <label
              onClick={() => {
                setActiveGenre("frontend");
                setShowProject(6);
              }}
              style={{ index: 1 }}
              className="label"
              htmlFor="rd-2"
            >
              <span className="tracking-wider">Frontend</span>
            </label>
            <input
              hidden=""
              className="rd-3"
              name="radio"
              id="rd-3"
              type="radio"
            />
            <label
              onClick={() => {
                setActiveGenre("fullstack");
                setShowProject(6);
              }}
              style={{ index: 2 }}
              className="label"
              htmlFor="rd-3"
            >
              <span className="tracking-wider">FullStack</span>
            </label>
            <input
              hidden=""
              className="rd-4"
              name="radio"
              id="rd-4"
              type="radio"
            />
            <label
              onClick={() => {
                setActiveGenre("data-engineering");
                setShowProject(6);
              }}
              style={{ index: 3 }}
              className="label"
              htmlFor="rd-4"
            >
              <span className="tracking-wider data-eng-full">Data Eng</span>
              <span className="tracking-wider data-eng-short">DE</span>
            </label>
            <div className="bar"></div>
            <div className="slidebar"></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
