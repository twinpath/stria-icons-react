import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const JRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M160 480C71.781 480 0 410.844 0 325.812V288C0 270.312 14.312 256 32 256S64 270.312 64 288V325.812C64 375.531 107.062 416 160 416S256 375.531 256 325.812V64C256 46.312 270.312 32 288 32S320 46.312 320 64V325.812C320 410.844 248.219 480 160 480Z" })
  }
));
JRegular.displayName = "JRegular";
var J_default = JRegular;
export {
  J_default as default
};
