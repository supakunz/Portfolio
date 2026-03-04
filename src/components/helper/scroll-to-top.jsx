"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BASE_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-[#9f55ff] to-[#7000ff] p-[0.7rem] hover:text-xl transition-opacity duration-300 ease-out";
const HIDDEN_BTN_CLS = "pointer-events-none opacity-0";
const VISIBLE_BTN_CLS = "opacity-100";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const shouldShow = window.scrollY > SCROLL_THRESHOLD;
        setIsVisible((prev) => (prev === shouldShow ? prev : shouldShow));
        rafId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const onClickBtn = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      className={`${BASE_BTN_CLS} ${
        isVisible ? VISIBLE_BTN_CLS : HIDDEN_BTN_CLS
      }`}
      onClick={onClickBtn}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
