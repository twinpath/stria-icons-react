import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleCalendarSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 356.572C384 371.715 371.715 384 356.572 384H155.43C140.287 384 128 371.715 128 356.572V224H384V356.572ZM384 192H128V155.428C128 140.28 140.28 128 155.428 128H192V112C192 103.2 199.2 96 208 96H208C216.8 96 224 103.2 224 112V128H288V112C288 103.2 295.2 96 304 96H304C312.8 96 320 103.2 320 112V128H356.572C371.72 128 384 140.28 384 155.428V192Z" })
  }
));
CircleCalendarSolid.displayName = "CircleCalendarSolid";
var CircleCalendar_default = CircleCalendarSolid;
export {
  CircleCalendar_default as default
};
