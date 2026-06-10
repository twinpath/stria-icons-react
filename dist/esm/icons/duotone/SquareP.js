import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquarePDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM248 304H176V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 138.75 138.75 128 152 128H248C296.531 128 336 167.469 336 216S296.531 304 248 304ZM248 176H176V256H248C270.062 256 288 238.062 288 216S270.062 176 248 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M248 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V304H248C296.531 304 336 264.531 336 216S296.531 128 248 128ZM248 256H176V176H248C270.062 176 288 193.938 288 216S270.062 256 248 256Z" })
    ]
  }
));
SquarePDuotone.displayName = "SquarePDuotone";
var SquareP_default = SquarePDuotone;
export {
  SquareP_default as default
};
