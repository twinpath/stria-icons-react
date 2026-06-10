import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareFullThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M0 0V512H512V0H0ZM496 496H16V16H496V496Z" })
  }
));
SquareFullThin.displayName = "SquareFullThin";
var SquareFull_default = SquareFullThin;
export {
  SquareFull_default as default
};
