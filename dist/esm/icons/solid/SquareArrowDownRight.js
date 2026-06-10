import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareArrowDownRightSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM344 344C344 361.688 329.688 376 312 376H168C150.312 376 136 361.688 136 344S150.312 312 168 312H234.75L113.375 190.625C100.875 178.125 100.875 157.875 113.375 145.375S146.125 132.875 158.625 145.375L280 266.75V200C280 182.312 294.312 168 312 168S344 182.312 344 200V344Z" })
  }
));
SquareArrowDownRightSolid.displayName = "SquareArrowDownRightSolid";
var SquareArrowDownRight_default = SquareArrowDownRightSolid;
export {
  SquareArrowDownRight_default as default
};
