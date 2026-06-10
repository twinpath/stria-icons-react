import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareTSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM328 176H248V360C248 373.25 237.25 384 224 384S200 373.25 200 360V176H120C106.75 176 96 165.25 96 152S106.75 128 120 128H328C341.25 128 352 138.75 352 152S341.25 176 328 176Z" })
  }
));
SquareTSolid.displayName = "SquareTSolid";
var SquareT_default = SquareTSolid;
export {
  SquareT_default as default
};
