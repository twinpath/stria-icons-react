import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BlackTieBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z" })
  }
));
BlackTieBrands.displayName = "BlackTieBrands";
var BlackTie_default = BlackTieBrands;
export {
  BlackTie_default as default
};
