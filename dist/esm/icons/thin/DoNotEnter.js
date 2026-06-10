import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DoNotEnterThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM415.949 208H96.051C87.211 208 79.945 215.125 79.945 224V288C79.945 296.875 87.211 304 96.051 304H415.949C424.789 304 432.055 296.875 432.055 288V224C432.055 215.125 424.789 208 415.949 208ZM415.949 288H95.945L96.051 224H416.055L415.949 288Z" })
  }
));
DoNotEnterThin.displayName = "DoNotEnterThin";
var DoNotEnter_default = DoNotEnterThin;
export {
  DoNotEnter_default as default
};
