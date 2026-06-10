import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EqualsLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M16 176H432C440.844 176 448 168.844 448 160S440.844 144 432 144H16C7.156 144 0 151.156 0 160S7.156 176 16 176ZM432 336H16C7.156 336 0 343.156 0 352S7.156 368 16 368H432C440.844 368 448 360.844 448 352S440.844 336 432 336Z" })
  }
));
EqualsLight.displayName = "EqualsLight";
var Equals_default = EqualsLight;
export {
  Equals_default as default
};
