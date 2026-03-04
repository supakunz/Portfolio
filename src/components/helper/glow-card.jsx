"use client";
import { useEffect, useRef } from "react";

const CONFIG = {
  proximity: 40,
  spread: 80,
  blur: 12,
  gap: 32,
  vertical: false,
  opacity: 0.15,
};

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (!container || !card) return;

    container.style.setProperty("--gap", String(CONFIG.gap));
    container.style.setProperty("--blur", String(CONFIG.blur));
    container.style.setProperty("--spread", String(CONFIG.spread));
    container.style.setProperty(
      "--direction",
      CONFIG.vertical ? "column" : "row"
    );
    card.style.setProperty("--active", String(CONFIG.opacity));

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    const pointer = { x: 0, y: 0 };

    const updateCard = (x, y) => {
      const bounds = card.getBoundingClientRect();
      const isNearCard =
        x > bounds.left - CONFIG.proximity &&
        x < bounds.left + bounds.width + CONFIG.proximity &&
        y > bounds.top - CONFIG.proximity &&
        y < bounds.top + bounds.height + CONFIG.proximity;

      card.style.setProperty("--active", isNearCard ? "1" : String(CONFIG.opacity));

      const centerX = bounds.left + bounds.width * 0.5;
      const centerY = bounds.top + bounds.height * 0.5;
      let angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI;
      angle = angle < 0 ? angle + 360 : angle;

      card.style.setProperty("--start", String(angle + 90));
    };

    const queueUpdate = (x, y) => {
      pointer.x = x;
      pointer.y = y;

      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        updateCard(pointer.x, pointer.y);
      });
    };

    const handlePointerMove = (event) => {
      queueUpdate(event.clientX, event.clientY);
    };

    const handlePointerEnter = (event) => {
      queueUpdate(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      card.style.setProperty("--active", String(CONFIG.opacity));
    };

    card.addEventListener("pointermove", handlePointerMove, { passive: true });
    card.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    card.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointerleave", handlePointerLeave);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`glow-container-${identifier} glow-container`}
    >
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
