import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownLeftThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M39.999 160C44.419 160 47.998 163.58 47.998 167.999V388.688L338.345 98.341C341.461 95.225 346.532 95.214 349.659 98.341S352.775 106.539 349.659 109.655L59.312 400.002H280.001C284.42 400.002 288 403.581 288 408.001S284.42 416 280.001 416H39.999C35.58 416 32 412.42 32 408.001V167.999C32 163.577 35.577 160 39.999 160Z" })
  }
));
ArrowDownLeftThin.displayName = "ArrowDownLeftThin";
var ArrowDownLeft_default = ArrowDownLeftThin;
export {
  ArrowDownLeft_default as default
};
