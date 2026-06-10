import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FlagPennantDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M512.264 208C512.264 218.062 505.998 227.031 496.561 230.531L64.264 389.801V32C64.264 29.777 63.432 27.828 63 25.734L496.561 185.469C505.998 188.969 512.264 197.938 512.264 208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M32 0C14.326 0 0 14.328 0 32V496C0 504.836 7.164 512 16 512H48C56.836 512 64 504.836 64 496V32C64 14.328 49.674 0 32 0Z" })
    ]
  }
));
FlagPennantDuotone.displayName = "FlagPennantDuotone";
var FlagPennant_default = FlagPennantDuotone;
export {
  FlagPennant_default as default
};
