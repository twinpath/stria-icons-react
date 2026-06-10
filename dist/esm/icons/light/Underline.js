import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UnderlineLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M16 32H64V250.382C64 335.532 128.138 409.98 213.1 415.636C306.265 421.838 384 347.856 384 256V32H432C440.8 32 448 24.8 448 16S440.8 0 432 0H304C295.2 0 288 7.2 288 16S295.2 32 304 32H352V251.681C352 319.891 300.469 379.4 232.396 383.732C157.836 388.477 96 329.528 96 256V32H144C152.8 32 160 24.8 160 16S152.8 0 144 0H16C7.2 0 0 7.2 0 16S7.2 32 16 32ZM432 480H16C7.2 480 0 487.2 0 496S7.2 512 16 512H432C440.8 512 448 504.8 448 496S440.8 480 432 480Z" })
  }
));
UnderlineLight.displayName = "UnderlineLight";
var Underline_default = UnderlineLight;
export {
  Underline_default as default
};
