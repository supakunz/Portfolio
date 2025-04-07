import { MENULINKS } from "../../../constants";
import AnimationLottie from "../helper/animation-lottie";
import GlowCard from "../helper/glow-card";
import { education } from "../../../constants";
import experience from "../../../public/json/education4.json";
import { BsPersonWorkspace } from "react-icons/bs";

const Education = () => {
  return (
    <>
      <section
        id={MENULINKS[3].ref}
        className=" w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative select-none"
        style={{ opacity: "1" }}
      >
        <div className="w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all" />
        <img
          src="/hero.svg"
          alt="Hero"
          className="absolute top-[0] h-[100%] object-cover"
        />
        <div
          id="experience"
          className="relative z-10 border-t  border-[#25213b]"
        >
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Educations
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <div
                  className="flex flex-col gap-6"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  {education.map((education) => (
                    <GlowCard
                      key={education.id}
                      identifier={`experience-${education.id}`}
                    >
                      <div className="p-3 relative">
                        <img
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {education.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {education.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {education.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
              <div
                className="flex justify-center items-center"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="w-full h-full flex justify-center items-center">
                  <AnimationLottie animationPath={experience} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
