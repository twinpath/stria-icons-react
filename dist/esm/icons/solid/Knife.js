import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const KnifeSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M279.435 315.086L90.388 502.504C85.144 508.328 77.738 511.781 69.886 511.992C62.005 512.176 54.418 509.172 48.857 503.609L8.38 463.133C-2.793 451.961 -2.793 433.828 8.38 422.656L441.148 8.379C452.269 -2.742 470.4 -2.844 481.627 8.379C529.4 56.156 556.287 331.18 279.435 315.086Z" })
  }
));
KnifeSolid.displayName = "KnifeSolid";
var Knife_default = KnifeSolid;
export {
  Knife_default as default
};
