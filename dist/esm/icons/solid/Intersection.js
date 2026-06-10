import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const IntersectionSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 224V440C384 462.094 366.094 480 344 480S304 462.094 304 440V224C304 162.25 253.75 112 192 112S80 162.25 80 224V440C80 462.094 62.094 480 40 480S0 462.094 0 440V224C0 118.125 86.125 32 192 32S384 118.125 384 224Z" })
  }
));
IntersectionSolid.displayName = "IntersectionSolid";
var Intersection_default = IntersectionSolid;
export {
  Intersection_default as default
};
