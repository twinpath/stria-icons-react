import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CaretRightSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M118.625 105.375L246.625 233.375C252.875 239.625 256 247.812 256 256C256 264.187 252.875 272.375 246.625 278.625L118.625 406.625C109.469 415.781 95.719 418.516 83.75 413.562S64 396.937 64 384V128C64 115.062 71.781 103.391 83.75 98.437S109.469 96.219 118.625 105.375Z" })
  }
));
CaretRightSolid.displayName = "CaretRightSolid";
var CaretRight_default = CaretRightSolid;
export {
  CaretRight_default as default
};
