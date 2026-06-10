import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleHalfRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224.303 18.383C222.768 18.383 221.209 18.498 219.639 18.736C104.346 36.26 16 135.812 16 256S104.346 475.74 219.639 493.262C221.211 493.502 222.766 493.617 224.303 493.617C241.502 493.617 256 479.141 256 461.35V50.648C256 32.857 241.504 18.383 224.303 18.383ZM208 441.947C124.695 420.393 64 343.613 64 256S124.695 91.607 208 70.053V441.947Z" })
  }
));
CircleHalfRegular.displayName = "CircleHalfRegular";
var CircleHalf_default = CircleHalfRegular;
export {
  CircleHalf_default as default
};
