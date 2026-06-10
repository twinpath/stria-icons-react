import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RectangleVerticalSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 448V64C32 28.654 60.654 0 96 0H352C387.346 0 416 28.654 416 64V448C416 483.346 387.346 512 352 512H96C60.654 512 32 483.346 32 448Z" })
  }
));
RectangleVerticalSolid.displayName = "RectangleVerticalSolid";
var RectangleVertical_default = RectangleVerticalSolid;
export {
  RectangleVertical_default as default
};
