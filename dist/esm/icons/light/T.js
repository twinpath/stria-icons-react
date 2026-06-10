import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 48C384 56.844 376.844 64 368 64H208V464C208 472.844 200.844 480 192 480S176 472.844 176 464V64H16C7.156 64 0 56.844 0 48S7.156 32 16 32H368C376.844 32 384 39.156 384 48Z" })
  }
));
TLight.displayName = "TLight";
var T_default = TLight;
export {
  T_default as default
};
