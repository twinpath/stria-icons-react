import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleMinusThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM376.002 248H136.002C131.58 248 128.002 251.578 128.002 256S131.58 264 136.002 264H376.002C380.424 264 384.002 260.422 384.002 256S380.424 248 376.002 248Z" })
  }
));
CircleMinusThin.displayName = "CircleMinusThin";
var CircleMinus_default = CircleMinusThin;
export {
  CircleMinus_default as default
};
