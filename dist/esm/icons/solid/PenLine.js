import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PenLineSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M497.937 142.084C516.687 123.316 516.687 92.91 497.937 74.158L437.847 14.062C419.097 -4.688 388.662 -4.688 369.912 14.062L313.384 70.611L441.378 198.633L497.937 142.084ZM290.75 93.232L31.037 352.955C28.802 355.189 27.281 358.033 26.66 361.131L0.32 492.854C-1.92 504.049 7.951 513.92 19.144 511.68L150.855 485.334C153.953 484.715 156.796 483.193 159.031 480.961L418.75 221.258L290.75 93.232ZM552 464H248C234.746 464 224 474.744 224 488C224 501.254 234.746 512 248 512H552C565.253 512 576 501.254 576 488C576 474.744 565.253 464 552 464Z" })
  }
));
PenLineSolid.displayName = "PenLineSolid";
var PenLine_default = PenLineSolid;
export {
  PenLine_default as default
};
