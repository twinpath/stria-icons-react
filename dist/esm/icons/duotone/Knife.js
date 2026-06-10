import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const KnifeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M279.609 315.086L202 237.477L441.322 8.379C452.443 -2.742 470.574 -2.844 481.801 8.379C529.574 56.156 556.461 331.18 279.609 315.086Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M201.826 237.477L279.435 315.086L90.388 502.504C85.144 508.328 77.738 511.781 69.886 511.992C62.005 512.176 54.417 509.172 48.857 503.609L8.38 463.133C-2.793 451.961 -2.793 433.828 8.38 422.656L201.826 237.477Z" })
    ]
  }
));
KnifeDuotone.displayName = "KnifeDuotone";
var Knife_default = KnifeDuotone;
export {
  Knife_default as default
};
