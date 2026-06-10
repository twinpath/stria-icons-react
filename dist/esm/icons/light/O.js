import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const OLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 64C118.125 64 32 150.125 32 256S118.125 448 224 448S416 361.875 416 256S329.875 64 224 64Z" })
  }
));
OLight.displayName = "OLight";
var O_default = OLight;
export {
  O_default as default
};
