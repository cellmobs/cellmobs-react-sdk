import { useMediaQuery } from "react-responsive";

const mobileDevices = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

const mobile = mobileDevices.some((item) => {
  if (typeof window === "undefined") return false;
  return window.navigator.userAgent.match(item);
});

/** !!! must be the same with /styles/variables.scss breakpoints */
const BREAKPOINTS = Object.freeze({
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
});

/**
 *
 * @returns {{ xs: boolean, sm: boolean, md: boolean, lg: boolean, xl: boolean, mobile: boolean }}
 */
export default function useBreakpoints() {
  const xs = useMediaQuery({ maxWidth: BREAKPOINTS.xs });
  const sm = useMediaQuery({
    minWidth: BREAKPOINTS.xs,
    maxWidth: BREAKPOINTS.sm,
  });
  const md = useMediaQuery({
    minWidth: BREAKPOINTS.sm,
    maxWidth: BREAKPOINTS.md,
  });
  const lg = useMediaQuery({
    minWidth: BREAKPOINTS.md,
    maxWidth: BREAKPOINTS.lg,
  });
  const xl = useMediaQuery({
    minWidth: BREAKPOINTS.lg,
    maxWidth: BREAKPOINTS.xl,
  });
  const xxl = useMediaQuery({ minWidth: BREAKPOINTS.xl });

  return { xs, sm, md, lg, xl, mobile, xxl };
}
