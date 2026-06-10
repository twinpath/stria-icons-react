import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SortDownLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M287.915 288H32.007C3.643 288 -10.727 322.5 9.391 342.625L137.344 470.625C149.84 483.125 170.207 483.125 182.703 470.625L310.657 342.625C330.649 322.5 316.28 288 287.915 288ZM159.961 448L32.007 320H287.915L159.961 448Z" })
  }
));
SortDownLight.displayName = "SortDownLight";
var SortDown_default = SortDownLight;
export {
  SortDown_default as default
};
