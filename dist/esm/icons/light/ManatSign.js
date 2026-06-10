import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ManatSignLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M368 272V464C368 472.844 360.844 480 352 480S336 472.844 336 464V272C336 198.072 279.803 137.695 208 129.617V464C208 472.844 200.844 480 192 480S176 472.844 176 464V129.617C104.197 137.695 48 198.072 48 272V464C48 472.844 40.844 480 32 480S16 472.844 16 464V272C16 180.369 86.434 104.934 176 96.811V48C176 39.156 183.156 32 192 32S208 39.156 208 48V96.811C297.566 104.934 368 180.369 368 272Z" })
  }
));
ManatSignLight.displayName = "ManatSignLight";
var ManatSign_default = ManatSignLight;
export {
  ManatSign_default as default
};
