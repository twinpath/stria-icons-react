import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HouzzBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" })
  }
));
HouzzBrands.displayName = "HouzzBrands";
var Houzz_default = HouzzBrands;
export {
  Houzz_default as default
};
