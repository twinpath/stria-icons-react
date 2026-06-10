import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RampLoadingSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M288 320H96L11.572 488.857C6.256 499.49 13.988 512 25.875 512H358.125C370.014 512 377.746 499.49 372.43 488.857L288 320ZM352 0H32C14.25 0 0 14.25 0 32V352C0 368.5 12.625 381.5 28.625 383.25L63 314.5C63.25 313.875 63.75 313.5 64 313V64H320V313C320.25 313.5 320.75 314 321 314.5L355.375 383.25C371.375 381.5 384 368.375 384 352V32C384 14.25 369.75 0 352 0Z" })
  }
));
RampLoadingSolid.displayName = "RampLoadingSolid";
var RampLoading_default = RampLoadingSolid;
export {
  RampLoading_default as default
};
