import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MobileButtonRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M304 0H80C44.654 0 16 28.654 16 64V448C16 483.346 44.654 512 80 512H304C339.346 512 368 483.346 368 448V64C368 28.654 339.346 0 304 0ZM320 448C320 456.822 312.822 464 304 464H80C71.178 464 64 456.822 64 448V64C64 55.178 71.178 48 80 48H304C312.822 48 320 55.178 320 64V448ZM192 392C178.746 392 168 402.744 168 416C168 429.254 178.746 440 192 440S216 429.254 216 416C216 402.744 205.254 392 192 392Z" })
  }
));
MobileButtonRegular.displayName = "MobileButtonRegular";
var MobileButton_default = MobileButtonRegular;
export {
  MobileButton_default as default
};
