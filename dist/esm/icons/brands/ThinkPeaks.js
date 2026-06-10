import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ThinkPeaksBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z" })
  }
));
ThinkPeaksBrands.displayName = "ThinkPeaksBrands";
var ThinkPeaks_default = ThinkPeaksBrands;
export {
  ThinkPeaks_default as default
};
