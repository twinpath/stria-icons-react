import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 80V432C384 458.5 362.516 480 336 480S288 458.5 288 432V288H96V432C96 458.5 74.516 480 48 480S0 458.5 0 432V80C0 53.5 21.484 32 48 32S96 53.5 96 80V192H288V80C288 53.5 309.484 32 336 32S384 53.5 384 80Z" })
  }
));
HSolid.displayName = "HSolid";
var H_default = HSolid;
export {
  H_default as default
};
