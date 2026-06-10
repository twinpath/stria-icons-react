import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ChevronsLeftRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M73.219 256L233.344 88.589C242.469 78.995 242.187 63.807 232.594 54.651S207.813 45.838 198.656 55.401L22.656 239.406C13.781 248.719 13.781 263.281 22.656 272.594L198.656 456.599C207.813 466.162 223 466.506 232.594 457.349C237.531 452.63 240 446.318 240 440.005C240 434.036 237.781 428.067 233.344 423.411L73.219 256ZM425.344 423.411L265.219 256L425.344 88.589C434.469 78.995 434.187 63.807 424.594 54.651S399.812 45.838 390.656 55.401L214.656 239.406C205.781 248.719 205.781 263.281 214.656 272.594L390.656 456.599C399.812 466.162 415 466.506 424.594 457.349C429.531 452.63 432 446.318 432 440.005C432 434.036 429.781 428.067 425.344 423.411Z" })
  }
));
ChevronsLeftRegular.displayName = "ChevronsLeftRegular";
var ChevronsLeft_default = ChevronsLeftRegular;
export {
  ChevronsLeft_default as default
};
