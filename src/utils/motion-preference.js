const FORCE_MOTION_STORAGE_KEY = "portfolio-motion-preference";
const FULL_MOTION_VALUES = new Set(["full", "on", "force", "true", "1"]);
const REDUCED_MOTION_VALUES = new Set(["reduce", "off", "false", "0"]);
const SYSTEM_MOTION_VALUES = new Set(["system", "auto", "default", "unset"]);

const canUseDOM = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

const getQueryMotionValue = () => {
  if (!canUseDOM()) return null;
  const motion = new URLSearchParams(window.location.search).get("motion");
  return motion ? motion.trim().toLowerCase() : null;
};

const getStoredMotionPreference = () => {
  if (!canUseDOM()) return null;
  try {
    return window.localStorage.getItem(FORCE_MOTION_STORAGE_KEY);
  } catch {
    return null;
  }
};

const setStoredMotionPreference = (preference) => {
  if (!canUseDOM()) return;
  try {
    if (preference) {
      window.localStorage.setItem(FORCE_MOTION_STORAGE_KEY, preference);
      return;
    }
    window.localStorage.removeItem(FORCE_MOTION_STORAGE_KEY);
  } catch {
    // Ignore storage write errors (private mode, blocked storage, etc.)
  }
};

const isForceMotionEnabled = () => {
  if (!canUseDOM()) return false;

  const queryValue = getQueryMotionValue();
  if (queryValue && FULL_MOTION_VALUES.has(queryValue)) {
    setStoredMotionPreference("full");
    return true;
  }
  if (queryValue && REDUCED_MOTION_VALUES.has(queryValue)) {
    setStoredMotionPreference("reduce");
    return false;
  }
  if (queryValue && SYSTEM_MOTION_VALUES.has(queryValue)) {
    setStoredMotionPreference(null);
    return false;
  }

  return getStoredMotionPreference() === "full";
};

export const shouldReduceMotion = () => {
  if (!canUseDOM()) return false;
  if (isForceMotionEnabled()) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const applyMotionOverrideClass = () => {
  if (!canUseDOM()) return false;
  const forceMotionEnabled = isForceMotionEnabled();
  document.documentElement.classList.toggle("force-motion", forceMotionEnabled);
  return forceMotionEnabled;
};
