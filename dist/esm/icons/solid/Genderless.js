import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GenderlessSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M192 80C94.833 80 16 158.83 16 256C16 353.165 94.833 432 192 432S368 353.165 368 256C368 158.83 289.167 80 192 80ZM192 352C139.049 352 96 308.945 96 256C96 203.049 139.049 160 192 160S288 203.049 288 256C288 308.945 244.951 352 192 352Z" })
  }
));
GenderlessSolid.displayName = "GenderlessSolid";
var Genderless_default = GenderlessSolid;
export {
  Genderless_default as default
};
