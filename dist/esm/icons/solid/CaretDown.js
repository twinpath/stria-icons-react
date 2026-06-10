import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CaretDownSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M310.625 246.625L182.625 374.625C176.375 380.875 168.188 384 160 384S143.625 380.875 137.375 374.625L9.375 246.625C0.219 237.469 -2.516 223.719 2.438 211.75S19.063 192 32 192H288C300.938 192 312.609 199.781 317.563 211.75S319.781 237.469 310.625 246.625Z" })
  }
));
CaretDownSolid.displayName = "CaretDownSolid";
var CaretDown_default = CaretDownSolid;
export {
  CaretDown_default as default
};
