import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PenFancyDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M64 288L0 496L97.625 391.75C96.875 389.25 96 386.75 96 384C96 366.375 110.375 352 128 352S160 366.375 160 384S145.625 416 128 416C125.25 416 122.75 415.125 120.25 414.375L16 512L224 448L262.125 348.75L163.25 249.875L64 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M369 28.375L163 249.875L261.875 348.75L483.25 142.5C568.125 67.5 443.5 -56 369 28.375Z" })
    ]
  }
));
PenFancyDuotone.displayName = "PenFancyDuotone";
var PenFancy_default = PenFancyDuotone;
export {
  PenFancy_default as default
};
