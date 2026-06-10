import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M320 80C320 106.5 298.516 128 272 128H96V224H208C234.516 224 256 245.5 256 272S234.516 320 208 320H96V432C96 458.5 74.516 480 48 480S0 458.5 0 432V80C0 53.5 21.484 32 48 32H272C298.516 32 320 53.5 320 80Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
FDuotone.displayName = "FDuotone";
var F_default = FDuotone;
export {
  F_default as default
};
