import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MinusLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M432 256C432 264.844 424.844 272 416 272H32C23.156 272 16 264.844 16 256S23.156 240 32 240H416C424.844 240 432 247.156 432 256Z" })
  }
));
MinusLight.displayName = "MinusLight";
var Minus_default = MinusLight;
export {
  Minus_default as default
};
