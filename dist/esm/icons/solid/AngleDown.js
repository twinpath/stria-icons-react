import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const AngleDownSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M371.515 229.055L219.516 373.033C211.797 380.344 201.891 384 192 384S172.203 380.344 164.484 373.033L12.485 229.055C-3.546 213.87 -4.233 188.561 10.97 172.532C26.157 156.472 51.485 155.785 67.516 171.001L192 288.921L316.484 171.001C332.499 155.754 357.827 156.441 373.03 172.532C388.233 188.561 387.546 213.87 371.515 229.055Z" })
  }
));
AngleDownSolid.displayName = "AngleDownSolid";
var AngleDown_default = AngleDownSolid;
export {
  AngleDown_default as default
};
