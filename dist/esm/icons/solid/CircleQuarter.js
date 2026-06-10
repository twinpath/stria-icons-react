import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleQuarterSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16V256H16C16 123.451 123.453 16 256 16Z" })
  }
));
CircleQuarterSolid.displayName = "CircleQuarterSolid";
var CircleQuarter_default = CircleQuarterSolid;
export {
  CircleQuarter_default as default
};
