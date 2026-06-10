import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CheeseDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M299.875 32.017C292.125 31.767 284.625 34.267 278.75 39.017L0 256.009H512C512 136.138 417.999 38.267 299.875 32.017Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M512 256V448.001C512 465.626 497.625 480 480 480H32C14.375 480 0 465.626 0 448.001V256H512Z" })
    ]
  }
));
CheeseDuotone.displayName = "CheeseDuotone";
var Cheese_default = CheeseDuotone;
export {
  Cheese_default as default
};
