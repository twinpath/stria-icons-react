import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChevronDownThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M2.652 162.066C4.183 160.69 6.09 160.018 7.996 160.018C10.184 160.018 12.371 160.909 13.934 162.66L224 396.171L434.066 162.66C436.973 159.377 442.067 159.08 445.348 162.066C448.629 165.036 448.91 170.085 445.942 173.383L229.938 413.491C226.938 416.836 221.062 416.836 218.062 413.491L2.058 173.383C-0.91 170.085 -0.629 165.036 2.652 162.066Z" })
  }
));
ChevronDownThin.displayName = "ChevronDownThin";
var ChevronDown_default = ChevronDownThin;
export {
  ChevronDown_default as default
};
