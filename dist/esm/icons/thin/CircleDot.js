import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleDotThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM256 160C202.98 160 160 202.98 160 256S202.98 352 256 352S352 309.02 352 256S309.02 160 256 160ZM256 336C211.889 336 176 300.111 176 256S211.889 176 256 176C300.113 176 336 211.889 336 256S300.113 336 256 336Z" })
  }
));
CircleDotThin.displayName = "CircleDotThin";
var CircleDot_default = CircleDotThin;
export {
  CircleDot_default as default
};
