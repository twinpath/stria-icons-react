import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LockOpenSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M446.377 0.703C360.541 -7.664 288 59.852 288 144V224H64C28.654 224 0 252.652 0 288V448C0 483.344 28.654 512 64 512H384C419.346 512 448 483.344 448 448V288C448 252.652 419.346 224 384 224H352V144C352 97.113 392.523 59.539 440.371 64.43C481.988 68.68 512 106.883 512 148.719V208C512 216.836 519.164 224 528 224H560C568.836 224 576 216.836 576 208V150.406C576 75.242 521.188 7.992 446.377 0.703Z" })
  }
));
LockOpenSolid.displayName = "LockOpenSolid";
var LockOpen_default = LockOpenSolid;
export {
  LockOpen_default as default
};
