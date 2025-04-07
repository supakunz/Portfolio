import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu/Menu";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
// import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/helper/scroll-to-top";
import ProjectV2 from "./components/Project/ProjectV2";
import Education from "./components/Education/Education";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader time={setIsLoading} />
      ) : (
        <>
          <Header>
            <Menu />
          </Header>
          <ScrollToTop />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            {/* <Project /> */} {/* Old Layout of MyProject */}
            <ProjectV2 /> {/* Update NewLayout of MyProject */}
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
