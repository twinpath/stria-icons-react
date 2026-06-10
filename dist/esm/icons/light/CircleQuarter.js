import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleQuarterLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M240.739 16.539C240.393 16.539 240.046 16.551 239.696 16.576C120.509 24.799 25.261 120.047 17.036 239.236C16.409 248.332 24.077 256 33.194 256H240.46C249.298 256 256.46 248.836 256.46 240V32.734C256.46 23.967 249.372 16.539 240.739 16.539ZM224.46 224H50.911C64.72 135.051 135.518 64.25 224.46 50.449V224Z" })
  }
));
CircleQuarterLight.displayName = "CircleQuarterLight";
var CircleQuarter_default = CircleQuarterLight;
export {
  CircleQuarter_default as default
};
