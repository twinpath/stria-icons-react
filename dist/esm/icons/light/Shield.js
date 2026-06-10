import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ShieldLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M466.5 83.75L274.5 3.75C268.625 1.25 262.344 0 256.062 0S243.5 1.25 237.625 3.75L45.625 83.75C27.75 91.125 16 108.625 16 128C16 385.451 205.434 512 255.938 512C305.196 512 496 387.357 496 128C496 108.625 484.25 91.125 466.5 83.75ZM255.967 32H255.814C255.867 32 255.914 32 255.967 32ZM48 128C48 121.5 51.875 115.75 57.75 113.25L240 37.312V474.246C145.131 430.555 48 298.094 48 128ZM463.875 128.318C463.875 298.329 366.732 430.683 272 474.297V37.367L454.125 113.25C463.273 117.062 463.875 125.848 463.875 128.318Z " })
  }
));
ShieldLight.displayName = "ShieldLight";
var Shield_default = ShieldLight;
export {
  Shield_default as default
};
