import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MinusRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M432 256C432 269.25 421.25 280 408 280H40C26.75 280 16 269.25 16 256S26.75 232 40 232H408C421.25 232 432 242.75 432 256Z" })
  }
));
MinusRegular.displayName = "MinusRegular";
var Minus_default = MinusRegular;
export {
  Minus_default as default
};
