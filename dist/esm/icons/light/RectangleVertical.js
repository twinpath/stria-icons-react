import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RectangleVerticalLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM416 448C416 465.645 401.645 480 384 480H96C78.355 480 64 465.645 64 448V64C64 46.355 78.355 32 96 32H384C401.645 32 416 46.355 416 64V448Z" })
  }
));
RectangleVerticalLight.displayName = "RectangleVerticalLight";
var RectangleVertical_default = RectangleVerticalLight;
export {
  RectangleVertical_default as default
};
