import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M267.518 249.193C290.014 226.115 304 194.697 304 160C304 89.422 246.578 32 176 32H32C14.328 32 0 46.328 0 64V448C0 465.672 14.328 480 32 480H192C262.578 480 320 422.578 320 352C320 309.752 299.174 272.518 267.518 249.193ZM64 96H176C211.297 96 240 124.703 240 160S211.297 224 176 224H64V96ZM192 416H64V288H192C227.297 288 256 316.703 256 352S227.297 416 192 416Z" })
  }
));
BRegular.displayName = "BRegular";
var B_default = BRegular;
export {
  B_default as default
};
