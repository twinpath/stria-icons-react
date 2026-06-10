import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M384 80C384 106.5 362.516 128 336 128H240V432C240 458.5 218.516 480 192 480S144 458.5 144 432V128H48C21.484 128 0 106.5 0 80S21.484 32 48 32H336C362.516 32 384 53.5 384 80Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
TDuotone.displayName = "TDuotone";
var T_default = TDuotone;
export {
  T_default as default
};
