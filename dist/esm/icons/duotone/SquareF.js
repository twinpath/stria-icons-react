import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareFDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM296 176H176V240H264C277.25 240 288 250.75 288 264S277.25 288 264 288H176V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 138.75 138.75 128 152 128H296C309.25 128 320 138.75 320 152S309.25 176 296 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M296 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V288H264C277.25 288 288 277.25 288 264S277.25 240 264 240H176V176H296C309.25 176 320 165.25 320 152S309.25 128 296 128Z" })
    ]
  }
));
SquareFDuotone.displayName = "SquareFDuotone";
var SquareF_default = SquareFDuotone;
export {
  SquareF_default as default
};
