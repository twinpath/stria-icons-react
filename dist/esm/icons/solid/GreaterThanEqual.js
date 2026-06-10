import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GreaterThanEqualSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M34.805 326.686C41.008 342.406 56.068 352 72.021 352C76.896 352 81.865 351.094 86.693 349.219L390.688 229.213C405.969 223.182 416 208.432 416 191.992C416 175.555 405.969 160.805 390.688 154.771L86.693 34.768C66.068 26.736 42.883 36.768 34.805 57.299C26.695 77.863 36.773 101.082 57.318 109.209L267.064 191.992L57.318 274.777C36.773 282.902 26.695 306.123 34.805 326.686ZM408.016 400H39.984C17.902 400 0 417.908 0 440S17.902 480 39.984 480H408.016C430.098 480 448 462.092 448 440V439.998C448 417.908 430.098 400 408.016 400Z" })
  }
));
GreaterThanEqualSolid.displayName = "GreaterThanEqualSolid";
var GreaterThanEqual_default = GreaterThanEqualSolid;
export {
  GreaterThanEqual_default as default
};
