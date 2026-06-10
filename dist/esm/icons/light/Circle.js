import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 48C370.691 48 464 141.309 464 256S370.691 464 256 464S48 370.691 48 256S141.309 48 256 48M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16L256 16Z" })
  }
));
CircleLight.displayName = "CircleLight";
var Circle_default = CircleLight;
export {
  Circle_default as default
};
