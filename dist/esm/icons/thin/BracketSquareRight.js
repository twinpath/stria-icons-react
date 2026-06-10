import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketSquareRightThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M176 72V440C176 453.234 165.219 464 152 464H72C67.594 464 64 467.578 64 472S67.594 480 72 480H152C174.062 480 192 462.062 192 440V72C192 49.938 174.062 32 152 32H72C67.594 32 64 35.578 64 40S67.594 48 72 48H152C165.219 48 176 58.766 176 72Z" })
  }
));
BracketSquareRightThin.displayName = "BracketSquareRightThin";
var BracketSquareRight_default = BracketSquareRightThin;
export {
  BracketSquareRight_default as default
};
