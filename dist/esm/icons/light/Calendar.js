import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CalendarLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 64H352V16C352 7.163 344.837 0 336 0H336C327.163 0 320 7.163 320 16V64H128V16C128 7.163 120.837 0 112 0H112C103.163 0 96 7.163 96 16V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V128C448 92.654 419.346 64 384 64ZM64 96H384C401.673 96 416 110.327 416 128V160H32V128C32 110.327 46.327 96 64 96ZM384 480H64C46.327 480 32 465.673 32 448V192H416V448C416 465.673 401.673 480 384 480Z" })
  }
));
CalendarLight.displayName = "CalendarLight";
var Calendar_default = CalendarLight;
export {
  Calendar_default as default
};
