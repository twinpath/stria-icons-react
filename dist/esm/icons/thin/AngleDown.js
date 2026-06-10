import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const AngleDownThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M191.999 352C189.999 352 188.03 351.266 186.468 349.781L34.471 205.774C31.283 202.727 31.158 197.649 34.221 194.461C37.314 191.273 42.377 191.18 45.533 194.211L191.999 332.921L338.467 194.209C341.686 191.178 346.748 191.271 349.779 194.459C352.842 197.646 352.717 202.725 349.529 205.772L197.53 349.781C195.968 351.266 193.999 352 191.999 352Z" })
  }
));
AngleDownThin.displayName = "AngleDownThin";
var AngleDown_default = AngleDownThin;
export {
  AngleDown_default as default
};
