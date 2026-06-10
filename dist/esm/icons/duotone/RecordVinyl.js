import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RecordVinylDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 128C185.307 128 128 185.307 128 256S185.307 384 256 384S384 326.693 384 256S326.693 128 256 128ZM256 288C238.334 288 224 273.666 224 256S238.334 224 256 224C273.668 224 288 238.334 288 256S273.668 288 256 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM256 384C185.25 384 128 326.75 128 256S185.25 128 256 128S384 185.25 384 256S326.75 384 256 384Z" })
    ]
  }
));
RecordVinylDuotone.displayName = "RecordVinylDuotone";
var RecordVinyl_default = RecordVinylDuotone;
export {
  RecordVinyl_default as default
};
