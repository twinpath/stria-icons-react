import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BarsThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M8 104H440C444.406 104 448 100.406 448 96S444.406 88 440 88H8C3.594 88 0 91.594 0 96S3.594 104 8 104ZM440 248H8C3.594 248 0 251.594 0 256S3.594 264 8 264H440C444.406 264 448 260.406 448 256S444.406 248 440 248ZM440 408H8C3.594 408 0 411.594 0 416S3.594 424 8 424H440C444.406 424 448 420.406 448 416S444.406 408 440 408Z" })
  }
));
BarsThin.displayName = "BarsThin";
var Bars_default = BarsThin;
export {
  Bars_default as default
};
