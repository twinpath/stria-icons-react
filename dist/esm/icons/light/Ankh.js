import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const AnkhLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M304 288H215.375C252.25 252 288 191.625 288 137.125C288 53 230.75 0 160 0S32 53 32 137.125C32 191.625 67.75 252 104.625 288H16C7.199 288 0 295.199 0 304S7.199 320 16 320H144V496C144 504.801 151.199 512 160 512S176 504.801 176 496V320H304C312.801 320 320 312.801 320 304S312.801 288 304 288ZM160.25 288H160.125C139.25 286.125 64 208.875 64 137.125C64 75.25 103.5 32 160 32S256 75.25 256 137.125C256 208.875 180.75 286.125 160.25 288Z" })
  }
));
AnkhLight.displayName = "AnkhLight";
var Ankh_default = AnkhLight;
export {
  Ankh_default as default
};
