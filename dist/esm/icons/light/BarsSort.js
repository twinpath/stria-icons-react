import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BarsSortLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M16 112H432C440.844 112 448 104.844 448 96S440.844 80 432 80H16C7.156 80 0 87.156 0 96S7.156 112 16 112ZM304 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H304C312.844 272 320 264.844 320 256S312.844 240 304 240ZM176 400H16C7.156 400 0 407.156 0 416S7.156 432 16 432H176C184.844 432 192 424.844 192 416S184.844 400 176 400Z" })
  }
));
BarsSortLight.displayName = "BarsSortLight";
var BarsSort_default = BarsSortLight;
export {
  BarsSort_default as default
};
