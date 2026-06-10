import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RectangleVerticalThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M352 16C378.467 16 400 37.533 400 64V448C400 474.467 378.467 496 352 496H96C69.533 496 48 474.467 48 448V64C48 37.533 69.533 16 96 16H352M352 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H352C387.346 512 416 483.346 416 448V64C416 28.654 387.346 0 352 0L352 0Z" })
  }
));
RectangleVerticalThin.displayName = "RectangleVerticalThin";
var RectangleVertical_default = RectangleVerticalThin;
export {
  RectangleVertical_default as default
};
