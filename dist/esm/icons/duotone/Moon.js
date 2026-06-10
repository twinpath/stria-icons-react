import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MoonDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 256C32 132.187 132.259 32 255.793 32C267.158 32 285.488 33.668 296.689 35.746C306.305 37.523 308.436 50.375 299.967 55.187C245.03 86.496 211.237 144.602 211.237 207.793C211.237 317.496 310.949 400.812 419.513 380.113C429.075 378.309 435.795 389.437 429.621 397.066C387.851 448.555 324.827 480 255.793 480C132.095 480 32 379.648 32 256Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
MoonDuotone.displayName = "MoonDuotone";
var Moon_default = MoonDuotone;
export {
  Moon_default as default
};
