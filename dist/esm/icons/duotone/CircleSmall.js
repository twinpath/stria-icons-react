import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleSmallDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 256C320 344.366 248.366 416 160 416S0 344.366 0 256S71.634 96 160 96S320 167.634 320 256Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
CircleSmallDuotone.displayName = "CircleSmallDuotone";
var CircleSmall_default = CircleSmallDuotone;
export {
  CircleSmall_default as default
};
