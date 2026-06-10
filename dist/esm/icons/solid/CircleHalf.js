import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleHalfSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16V496C123.453 496 16 388.549 16 256S123.453 16 256 16Z" })
  }
));
CircleHalfSolid.displayName = "CircleHalfSolid";
var CircleHalf_default = CircleHalfSolid;
export {
  CircleHalf_default as default
};
