import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FlipboardBrands = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" })
  }
));
FlipboardBrands.displayName = "FlipboardBrands";
var Flipboard_default = FlipboardBrands;
export {
  Flipboard_default as default
};
