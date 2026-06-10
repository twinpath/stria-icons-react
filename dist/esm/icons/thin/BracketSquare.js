import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketSquareThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M40 48H120C124.406 48 128 44.422 128 40S124.406 32 120 32H40C17.938 32 0 49.938 0 72V440C0 462.062 17.938 480 40 480H120C124.406 480 128 476.422 128 472S124.406 464 120 464H40C26.781 464 16 453.234 16 440V72C16 58.766 26.781 48 40 48Z" })
  }
));
BracketSquareThin.displayName = "BracketSquareThin";
var BracketSquare_default = BracketSquareThin;
export {
  BracketSquare_default as default
};
