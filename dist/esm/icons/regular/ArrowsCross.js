import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowsCrossRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M424 32H280C266.75 32 256 42.75 256 56S266.75 80 280 80H366.063L7.031 439.031C-2.344 448.406 -2.344 463.594 7.031 472.969S31.594 482.344 40.969 472.969L400 113.938V200C400 213.25 410.75 224 424 224S448 213.25 448 200V56C448 42.836 437.188 32 424 32ZM167.438 233.375L201.375 199.438L40.969 39.031C31.594 29.656 16.406 29.656 7.031 39.031S-2.344 63.594 7.031 72.969L167.438 233.375ZM424 288C410.75 288 400 298.75 400 312V398.062L280.563 278.625L246.625 312.562L366.063 432H280C266.75 432 256 442.75 256 456S266.75 480 280 480H424C437.164 480 448 469.188 448 456V312C448 298.75 437.25 288 424 288Z" })
  }
));
ArrowsCrossRegular.displayName = "ArrowsCrossRegular";
var ArrowsCross_default = ArrowsCrossRegular;
export {
  ArrowsCross_default as default
};
