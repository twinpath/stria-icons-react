import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ISolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 432C320 458.5 298.5 480 272 480H48C21.5 480 0 458.5 0 432S21.5 384 48 384H112V128H48C21.5 128 0 106.5 0 80S21.5 32 48 32H272C298.5 32 320 53.5 320 80S298.5 128 272 128H208V384H272C298.5 384 320 405.5 320 432Z" })
  }
));
ISolid.displayName = "ISolid";
var I_default = ISolid;
export {
  I_default as default
};
