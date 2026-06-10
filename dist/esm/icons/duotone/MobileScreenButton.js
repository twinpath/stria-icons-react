import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MobileScreenButtonDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M288 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H288C323.346 512 352 483.346 352 448V64C352 28.654 323.346 0 288 0ZM192 480C174.25 480 160 465.75 160 448S174.25 416 192 416S224 430.25 224 448S209.75 480 192 480ZM288 64V384H96V64H288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M288 64V384H96V64H288Z" })
    ]
  }
));
MobileScreenButtonDuotone.displayName = "MobileScreenButtonDuotone";
var MobileScreenButton_default = MobileScreenButtonDuotone;
export {
  MobileScreenButton_default as default
};
