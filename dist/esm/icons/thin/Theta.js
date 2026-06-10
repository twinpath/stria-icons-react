import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ThetaThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M192 16C103.635 16 32 123.451 32 256S103.635 496 192 496S352 388.549 352 256S280.365 16 192 16ZM192 32C269.666 32 333 128.209 335.74 248H48.26C51 128.209 114.334 32 192 32ZM192 480C114.334 480 51 383.791 48.26 264H335.74C333 383.791 269.666 480 192 480Z" })
  }
));
ThetaThin.displayName = "ThetaThin";
var Theta_default = ThetaThin;
export {
  Theta_default as default
};
