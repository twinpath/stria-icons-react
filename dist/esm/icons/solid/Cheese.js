import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CheeseSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 288.007V448.001C0 465.626 14.375 480 32 480H480C497.625 480 512 465.626 512 448.001V288.007H0ZM299.875 32.017C292.125 31.767 284.625 34.267 278.75 39.017L0 256.009H512C512 136.138 417.999 38.267 299.875 32.017Z" })
  }
));
CheeseSolid.displayName = "CheeseSolid";
var Cheese_default = CheeseSolid;
export {
  Cheese_default as default
};
