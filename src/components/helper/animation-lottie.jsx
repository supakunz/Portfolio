"use client";
import { useEffect, useRef, useState } from "react";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = "80%" }) => {
  const lottieRef = useRef(null);
  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setCanAnimate(!mediaQuery.matches);
    };

    updateMotionPreference();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (canAnimate) {
      lottieRef.current.play();
      return;
    }
    lottieRef.current.stop();
    lottieRef.current.pause();
  }, [canAnimate]);

  return (
    <div style={{ width }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationPath}
        loop={canAnimate}
        autoplay={canAnimate}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default AnimationLottie;
