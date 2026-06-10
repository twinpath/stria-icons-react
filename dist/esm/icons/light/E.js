import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ELight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 464C320 472.844 312.844 480 304 480H16C7.156 480 0 472.844 0 464V48C0 39.156 7.156 32 16 32H304C312.844 32 320 39.156 320 48S312.844 64 304 64H32V240H240C248.844 240 256 247.156 256 256S248.844 272 240 272H32V448H304C312.844 448 320 455.156 320 464Z" })
  }
));
ELight.displayName = "ELight";
var E_default = ELight;
export {
  E_default as default
};
