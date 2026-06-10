import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChevronLeftThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M253.934 34.652C255.31 36.183 255.982 38.09 255.982 39.996C255.982 42.184 255.091 44.371 253.34 45.934L19.829 256L253.34 466.066C256.623 468.973 256.92 474.067 253.934 477.348C250.964 480.629 245.915 480.91 242.617 477.942L2.509 261.938C-0.836 258.938 -0.836 253.062 2.509 250.062L242.617 34.058C245.915 31.09 250.964 31.371 253.934 34.652Z" })
  }
));
ChevronLeftThin.displayName = "ChevronLeftThin";
var ChevronLeft_default = ChevronLeftThin;
export {
  ChevronLeft_default as default
};
