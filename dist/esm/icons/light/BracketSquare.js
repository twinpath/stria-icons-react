import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketSquareLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M48 64H144C152.822 64 160 56.822 160 48S152.822 32 144 32H48C21.533 32 0 53.533 0 80V432C0 458.467 21.533 480 48 480H144C152.822 480 160 472.822 160 464S152.822 448 144 448H48C39.178 448 32 440.822 32 432V80C32 71.178 39.178 64 48 64Z" })
  }
));
BracketSquareLight.displayName = "BracketSquareLight";
var BracketSquare_default = BracketSquareLight;
export {
  BracketSquare_default as default
};
