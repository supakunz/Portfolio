/* eslint-disable no-unused-vars */
import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconGithub,
} from "./src/components/Icons/index";
import html from "./public/skills/html.svg";
import css from "./public/skills/css.svg";
import javascript from "./public/skills/javascript.svg";
import react from "./public/skills/react.svg";
import bootstrap from "./public/skills/bootstrap5.svg";
import git from "./public/skills/git.svg";
import tailwind from "./public/skills/tailwind.svg";
import { FaXTwitter } from "react-icons/fa6";
import mongoDB from "./public/skills/mongoDB.svg";
import mysql from "./public/skills/mysql.svg";
import python from "./public/skills/python.svg";
import sass from "./public/skills/sass.svg";
import nodejs from "./public/skills/nodejs.svg";
import redux from "./public/skills/redux.svg";
import supabase from "./public/skills/supabase.svg";
import nextjs from "./public/skills/nextJS.webp";
import typescript from "./public/skills/typescript.svg";
import reactquery from "./public/skills/react-query.svg";
import materialui from "./public/skills/materialui.svg";
import redis from "./public/skills/redis.svg";
import postgresql from "./public/skills/postgresql.svg";
import aws from "./public/skills/aws.svg";
import gcp from "./public/skills/gcp.svg";
import docker from "./public/skills/docker.svg";
import airflow from "./public/skills/airflow.svg";
import pandas from "./public/skills/pandas.svg";
import powerbi from "./public/skills/powerbi.svg";
import looker from "./public/skills/looker.svg";

export const METADATA = {
  author: "Supakun Thata",
  title: "Portfolio | Supakun Thata",
  description:
    "Supakun Thata is a passionate Frontend Developer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  keywords: [
    "Supakun Thata",
    "Frontend Developer",
    "Data Engineering",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "About",
    ref: "about",
  },
  {
    name: "Experience",
    ref: "experience",
  },
  {
    name: "Education",
    ref: "education",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I'm a Fullstack Developer",
  "I build apps & pipelines",
  "I turn data into products",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: supakunt.thata@gmail.com",
    img: <IconMail />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/supakun-thata-437a62328/",
    img: <IconLinkedin />,
  },
  {
    name: "github",
    url: "https://github.com/SupakunZ",
    img: <IconGithub />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/gunnkkun_/",
    img: <IconInstagram />,
  },
  {
    name: "twitter",
    url: "https://x.com/GuNz246448",
    img: <FaXTwitter style={{ width: "24px", height: "24px" }} />,
  },
];

export const SKILLS_FULLSTACK = [
  {
    tools: "Html",
    img: html,
  },
  {
    tools: "Css",
    img: css,
  },
  {
    tools: "Javascript",
    img: javascript,
  },
  {
    tools: "Typescript",
    img: typescript,
  },
  {
    tools: "React",
    img: react,
  },
  {
    tools: "NextJS",
    img: nextjs,
  },
  {
    tools: "Redux",
    img: redux,
  },
  {
    tools: "Tailwind",
    img: tailwind,
  },
  {
    tools: "Bootstrap",
    img: bootstrap,
  },
  {
    tools: "MaterialUI",
    img: materialui,
  },
  {
    tools: "Git",
    img: git,
  },
  {
    tools: "Sass",
    img: sass,
  },
  {
    tools: "Nodejs",
    img: nodejs,
  },
  {
    tools: "MongoDB",
    img: mongoDB,
  },
  {
    tools: "Mysql",
    img: mysql,
  },
  {
    tools: "Supabase",
    img: supabase,
  },
  {
    tools: "Redis",
    img: redis,
  },
  {
    tools: "ReactQuery",
    img: reactquery,
  },
];

export const SKILLS_DATA_ENGINEERING = [
  {
    tools: "Python",
    img: python,
  },
  {
    tools: "Pandas",
    img: pandas,
  },
  {
    tools: "Airflow",
    img: airflow,
  },
  {
    tools: "Docker",
    img: docker,
  },
  {
    tools: "Aws",
    img: aws,
  },
  {
    tools: "Gcp",
    img: gcp,
  },
  {
    tools: "PostgreSQL",
    img: postgresql,
  },
  {
    tools: "Mysql",
    img: mysql,
  },
  {
    tools: "PowerBI",
    img: powerbi,
  },
  {
    tools: "Looker",
    img: looker,
  },
];

export const SKILLS = [...SKILLS_FULLSTACK, ...SKILLS_DATA_ENGINEERING];

export const experiences = [
  {
    id: 1,
    title: "Data Engineer",
    company: "Data Solution Team | JipJipMoney",
    duration: "(Oct 2025 - Present)",
  },
  {
    id: 2,
    title: "Mechanical Engineer",
    company: "Site Engineer Air Conditioning | First Technology",
    duration: "(Oct 2023 - Mar 2024)",
  },
  {
    id: 3,
    title: "Gnss RTK Navigation",
    company: "Internship Python Developer | GISTDA",
    duration: "(Apr 2022 - Dec 2022)",
  },
];

export const education = [
  {
    id: 3,
    title: "Road to Data Engineer",
    company: "DataTH School",
    duration: "(Jan 2025 - Mar 2025)",
  },
  {
    id: 4,
    title: "Full Stack Development Bootcamp",
    company: "Westride Institute of Technology",
    duration: "(Apr 2024 - Aug 2024)",
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    company: "Naresuan University",
    duration: "(May 2019 - Apr 2023)",
  },
];

export const PROJECTS = [
  {
    name: "Portfolio",
    image: "/projects/portfolio.webp",
    blurImage: "/projects/portfolio.webp",
    description: "Portfolio using ReactJs + NodeJS 🚀",
    gradient: ["#5800ca", "#b37afd"],
    url: "https://github.com/SupakunZ/Portfolio",
    tech: ["vitejs", "react", "tailwind", "sass", "nodejs", "mongoDB2"],
    tag: ["fullstack"],
  },
  {
    name: "E-commerce",
    image: "/projects/ecommerce.webp",
    blurImage: "/projects/ecommerce.webp",
    description: "E-commerce using ReactJs + NodeJS 🔥",
    gradient: ["#45B649", "#DCE35B"],
    url: "https://github.com/SupakunZ/E-commerce",
    tech: ["vitejs", "react", "tailwind", "nodejs", "mongoDB2"],
    tag: ["fullstack"],
  },
  {
    name: "Restaurant",
    image: "/projects/restaurant.webp",
    blurImage: "/projects/restaurant.webp",
    description: "Restaurant using ReactJs + Redux 👽",
    gradient: ["#021B79", "#0575E6"],
    url: "https://github.com/SupakunZ/Restaurant-Website",
    tech: ["redux", "nextJS", "redis", "tailwind", "supabase"],
    tag: ["fullstack"],
  },
  {
    name: "Gunglz Chatbot",
    image: "/projects/chatbot.webp",
    blurImage: "/projects/chatbot.webp",
    description: "AI Chatbot using NextJs + Tailwind 🤖",
    gradient: ["#536976", "#BBD2C5"],
    url: "https://github.com/SupakunZ/Gunglz_Chatbot",
    tech: ["nextJS", "tailwind"],
    tag: ["frontend"],
  },
  {
    name: "Bookstore",
    image: "/projects/bookstore.webp",
    blurImage: "/projects/bookstore.webp",
    description: "Bookstore using NextJs + TS 📚",
    gradient: ["#3A4D6F", "#708daa"],
    url: "https://github.com/supakunz/Bookstore",
    tech: ["typescript", "nextJS", "tailwind"],
    tag: ["frontend"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/tesla.webp",
    description: "Tesla Clone using ReactJs + Bootstrap 🚗",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/SupakunZ/Tesla_Clone",
    tech: ["vitejs", "react", "bootstrap5"],
    tag: ["frontend"],
  },
  {
    name: "Pokédex",
    image: "/projects/pokedex02.webp",
    blurImage: "/projects/pokedex.webp",
    description: "Pokédex App using ReactJs + TS 🌏",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/SupakunZ/Pokedex_App",
    tech: ["vitejs", "typescript", "react", "tailwind", "sass"],
    tag: ["frontend"],
  },
  {
    name: "Admin Dashboard",
    image: "/projects/dashboard_image.webp",
    blurImage: "/projects/dashboard_image.webp",
    description: "Admin Dashboard using NextJs + MUI 🎃",
    gradient: ["#f857a6", "#ff5858"],
    url: "https://github.com/SupakunZ/Admin_Dashboard",
    tech: ["nextJS", "tailwind", "materialui", "nextauth"],
    tag: ["fullstack"],
  },
  {
    name: "Crypto Tracker",
    image: "/projects/crypto_image.webp",
    blurImage: "/projects/crypto_image.webp",
    description: "Crypto Tracker App using NextJs + TS 💸",
    gradient: ["#9140ac", "#ce44bc"],
    url: "https://github.com/SupakunZ/Crypto_tracker",
    tech: ["typescript", "nextJS", "react-query", "tailwind"],
    tag: ["frontend"],
  },
  {
    name: "SpaceX",
    image: "/projects/spacex_2.webp",
    blurImage: "/projects/spacex_2.webp",
    description: "SpaceX Clone using ReactJs + CSS 🪐",
    gradient: ["#667db6", "#0082c8"],
    url: "https://github.com/supakunz/SpaceX_Clone",
    tech: ["vitejs", "react", "css"],
    tag: ["frontend"],
  },
  {
    name: "Gnss-Rtk",
    image: "/projects/gnss-rtk.webp",
    blurImage: "/projects/gnss-rtk.webp",
    description: "GNSS-RTK Navigation using Python 🏆",
    gradient: ["#00416A", "#E4E5E6"],
    url: "https://github.com/SupakunZ/GNSS_RTK",
    tech: ["python", "numpy"],
    tag: ["data-engineering"],
  },
  {
    name: "Book Sales Pipeline",
    image: "/projects/bookrevenue.png",
    blurImage: "/projects/bookrevenue.png",
    description: "End-To-End Data Pipeline on GCP 📚",
    gradient: ["#5800ca", "#b37afd"],
    url: "https://www.notion.so/End-to-End-Data-Pipeline-for-Book-Sales-on-GCP-1cb20b6dac9d802aa613cc64292066df?pvs=4",
    tech: ["airflow", "gcp", "pandas", "looker"],
    tag: ["data-engineering"],
  },
  {
    name: "Employee Data Pipeline",
    image: "/projects/empdatafusion.png",
    blurImage: "/projects/empdatafusion.png",
    description: "End-To-End Data Pipeline on GCP 👽",
    gradient: ["#45B649", "#DCE35B"],
    url: "https://github.com/supakunz/ETL-Pipeline-Datafusion-GCP",
    tech: ["airflow", "gcp", "pandas", "looker"],
    tag: ["data-engineering"],
  },
  {
    name: "Uber Data Pipeline",
    image: "/projects/uberpipline.png",
    blurImage: "/projects/uberpipline.png",
    description: "End-To-End Data Pipeline on GCP 🚗",
    gradient: ["#f857a6", "#ff5858"],
    url: "https://github.com/supakunz/Uber-Pipeline-GCP",
    tech: ["airflow", "gcp", "pandas", "powerbi"],
    tag: ["data-engineering"],
  },
  {
    name: "Reddit Data Pipeline",
    image: "/projects/reddit-aws.png",
    blurImage: "/projects/reddit-aws.png",
    description: "End-To-End Data Pipeline on AWS 🤖",
    gradient: ["#536976", "#BBD2C5"],
    url: "https://github.com/supakunz/ETL-Reddit-Pipeline-AWS",
    tech: ["airflow", "aws", "pandas", "docker"],
    tag: ["data-engineering"],
  },
];

export const personalData = {
  name: "Supakun Thata",
  profile: "/profile.png",
  designation: "Software Developer",
  email: "supakunt.thata@gmail.com",
  phone: "0622787171",
  address: "Chiang Rai, Thailand - 57160 ",
  github: "https://github.com/SupakunZ",
  instagram: "https://www.instagram.com/gunnkkun_/",
  linkedIn: "https://www.linkedin.com/in/supakun-thata-437a62328/",
  twitter: "https://x.com/GuNz246448",
  devUsername: "NEOSPEX",
  resume:
    "https://drive.google.com/drive/folders/1GRcaBHYbOkJj2YxkCWBkup0LeSPaAgdH?usp=drive_link",
};
