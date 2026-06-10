import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LambdaSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448 440C448 462.094 430.094 480 408 480H327.75L195.938 227.357L92.469 456.469C85.781 471.25 71.219 480 55.969 480C50.469 480 44.875 478.875 39.531 476.469C19.406 467.375 10.437 443.656 19.531 423.531L148.867 137.141L135.75 112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H184.25L376.25 400H408C430.094 400 448 417.906 448 440Z" })
  }
));
LambdaSolid.displayName = "LambdaSolid";
var Lambda_default = LambdaSolid;
export {
  Lambda_default as default
};
