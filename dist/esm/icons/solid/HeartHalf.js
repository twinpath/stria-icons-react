import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HeartHalfSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M256 479.992C247.654 480.004 239.305 476.742 232.974 470.195L39.824 270.484C-16.197 212.516 -13.104 116.652 49.041 62.861C103.316 15.885 186.371 24.357 236.32 75.924L256 96.24V479.992Z" })
  }
));
HeartHalfSolid.displayName = "HeartHalfSolid";
var HeartHalf_default = HeartHalfSolid;
export {
  HeartHalf_default as default
};
