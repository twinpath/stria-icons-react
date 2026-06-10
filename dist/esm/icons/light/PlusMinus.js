import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PlusMinusLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M16 208H176V368C176 376.844 183.156 384 192 384S208 376.844 208 368V208H368C376.844 208 384 200.844 384 192S376.844 176 368 176H208V16C208 7.156 200.844 0 192 0S176 7.156 176 16V176H16C7.156 176 0 183.156 0 192S7.156 208 16 208ZM368 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H368C376.844 512 384 504.844 384 496S376.844 480 368 480Z" })
  }
));
PlusMinusLight.displayName = "PlusMinusLight";
var PlusMinus_default = PlusMinusLight;
export {
  PlusMinus_default as default
};
