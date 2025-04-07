import React, { useEffect, useRef } from "react";
import { MENULINKS, personalData } from "../../../constants";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import styles from "./Contact.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ isDesktop }) => {
  // const [contact, setContact] = useState([])
  const URL = import.meta.env.VITE_APP_API;
  const sectionRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // ** useForm ต้องรับ data  **
    const id = toast.loading("Please wait...", { position: "top-center" });
    await axios
      .post(`${URL}/contact`, data)
      .then((res) => {
        toast.update(id, {
          render: "Successfully sent to the server.",
          type: "success",
          isLoading: false,
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
        reset();
      })
      .catch((err) => {
        toast.update(id, {
          render: "Faild sent to the server.",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          pauseOnHover: false,
        });
        reset();
      });
  };

  useEffect(() => {
    try {
      axios.get(`${URL}/contact`).then((res) => console.log(res.data));
    } catch (error) {
      console.log("Failed to connect to server.");
    }
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id={MENULINKS[5].ref}
        className="w-full relative select-none section-container"
      >
        <div className="w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all" />
        <img
          src="/hero.svg"
          alt="Hero"
          className="absolute top-[0] h-[100%] object-cover"
        />
        <div className="hidden lg:flex flex-col items-center absolute top-[26%] right-[-2rem] xl:right-[2rem] ">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            Contacts
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="container mx-auto px-5 pb-5 lg:pb-24 pt-24">
            <div
              className="mb-12 flex w-full justify-center gap-3 items-center"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 className="title-font mb-4 text-4xl font-medium text-gradient w-fit">
                Contact Us
              </h1>
              <span className="block animate-bounce text-3xl">❤️</span>
            </div>
            <div className="mx-auto max-w-[75%] lg:w-[85%] ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="-m-2 flex flex-wrap"
              >
                {/* <!-- form --> */}
                <div
                  className="w-1/2 p-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="relative">
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      name="name"
                      className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Name"
                      required
                    />
                    <label
                      for="name"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div
                  className="w-1/2 p-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="relative">
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      name="email"
                      className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Email"
                      required
                    />
                    <label
                      for="email"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div
                  className="mt-4 w-full p-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="relative">
                    <textarea
                      id="message"
                      {...register("message")}
                      name="message"
                      className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Message"
                      required
                    ></textarea>
                    <label
                      for="message"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Message
                    </label>
                  </div>
                </div>
                <div
                  className="w-full p-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <button type="submit" className={styles.button}>
                    <span>Send -&gt;</span>
                    <span className={styles.success}>
                      <svg viewBox="0 0 16 16">
                        <polyline points="3.75 9 7 12 13 5"></polyline>
                      </svg>
                      Sent
                    </span>
                    <svg className={styles.trails} viewBox="0 0 33 64">
                      <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                      <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
                    </svg>
                    <div className={styles.plane}>
                      <div className={styles.left} />
                      <div className={styles.right} />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- contact --> */}
          <div className="container mx-auto lg:px-5 px-[14%] pb-24 lg:py-24 flex items-center justify-start lg:justify-center">
            <div
              className="lg:w-3/4 pt-10"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="flex flex-col gap-4 lg:gap-8">
                <p className="text-sm md:text-lg flex items-center gap-3">
                  <MdAlternateEmail
                    className="bg-[#8b98a5] p-2 rounded-full z-[1] hover:bg-[#7000ff] hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>{personalData.email}</span>
                </p>
                <p className="text-sm md:text-lg flex items-center gap-3">
                  <IoMdCall
                    className="bg-[#8b98a5] p-2 rounded-full z-[1] hover:bg-[#7000ff] hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>{personalData.phone}</span>
                </p>
                <p className="text-sm md:text-lg flex items-center gap-3">
                  <CiLocationOn
                    className="bg-[#8b98a5] p-2 rounded-full z-[1] hover:bg-[#7000ff] hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>{personalData.address}</span>
                </p>
              </div>
              <div className="icon-contact mt-9 lg:mt-[4rem] flex items-center gap-6 lg:gap-9">
                <a
                  className="rounded-full"
                  target="_blank"
                  href={personalData.github}
                >
                  <IoLogoGithub
                    className="bg-[#8b98a5] rounded-full p-3 hover:bg-[#333] hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a
                  className="rounded-full"
                  target="_blank"
                  href={personalData.linkedIn}
                >
                  <BiLogoLinkedin
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#0A66C2] hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a
                  className="rounded-full"
                  target="_blank"
                  href={personalData.instagram}
                >
                  <FaInstagram
                    className="bg-[#8b98a5] p-3 rounded-full ig  hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a
                  className="rounded-full"
                  target="_blank"
                  href={personalData.twitter}
                >
                  <FaXTwitter
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#1a1717] hover:text-[#FFF] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
