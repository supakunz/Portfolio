const canUseDOM = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

export const shouldReduceMotion = () => {
  // Product decision: keep animation behavior consistent across browsers/OS.
  return false;
};

export const applyMotionOverrideClass = () => {
  if (!canUseDOM()) return false;
  document.documentElement.classList.add("force-motion");
  return true;
};
