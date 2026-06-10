import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M8 480C3.594 480 0 476.406 0 472V40C0 35.594 3.594 32 8 32H184C259 32 320 93 320 168S259 304 184 304H16V472C16 476.406 12.406 480 8 480ZM16 288H184C250.156 288 304 234.156 304 168S250.156 48 184 48H16V288Z" })
  }
));
PThin.displayName = "PThin";
var P_default = PThin;
export {
  P_default as default
};
