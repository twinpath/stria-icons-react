import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UnionLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 288V48C0 39.156 7.156 32 16 32S32 39.156 32 48V288C32 376.219 103.781 448 192 448S352 376.219 352 288V48C352 39.156 359.156 32 368 32S384 39.156 384 48V288C384 393.875 297.875 480 192 480S0 393.875 0 288Z" })
  }
));
UnionLight.displayName = "UnionLight";
var Union_default = UnionLight;
export {
  Union_default as default
};
