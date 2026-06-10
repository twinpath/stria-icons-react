import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MartiniGlassEmptyLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M502.037 57.625C523.29 36.375 508.289 0 478.283 0H33.716C3.712 0 -11.29 36.375 9.962 57.625L239.998 287.625V480H143.999C135.164 480 127.999 487.164 127.999 496S135.164 512 143.999 512H367.999C376.837 512 383.999 504.836 383.999 496S376.837 480 367.999 480H272.001V287.625L502.037 57.625ZM255.999 258.375L31.999 32H479.999L255.999 258.375Z" })
  }
));
MartiniGlassEmptyLight.displayName = "MartiniGlassEmptyLight";
var MartiniGlassEmpty_default = MartiniGlassEmptyLight;
export {
  MartiniGlassEmpty_default as default
};
