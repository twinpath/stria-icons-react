import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowLeftSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M448.004 256C448.004 278.094 430.098 296 408.004 296H133.18L221.004 388.438C236.223 404.469 235.566 429.781 219.551 445C211.816 452.344 201.91 456 192.004 456C181.426 456 170.863 451.812 163.004 443.562L11.004 283.562C-3.668 268.125 -3.668 243.875 11.004 228.438L163.004 68.438C178.238 52.469 203.582 51.844 219.551 67C235.566 82.219 236.223 107.531 221.004 123.562L133.18 216H408.004C430.098 216 448.004 233.906 448.004 256Z" })
  }
));
ArrowLeftSolid.displayName = "ArrowLeftSolid";
var ArrowLeft_default = ArrowLeftSolid;
export {
  ArrowLeft_default as default
};
