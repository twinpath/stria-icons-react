import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BandcampBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z" })
  }
));
BandcampBrands.displayName = "BandcampBrands";
var Bandcamp_default = BandcampBrands;
export {
  Bandcamp_default as default
};
