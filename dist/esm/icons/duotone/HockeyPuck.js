import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HockeyPuckDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M512 160C512 213 397.375 256 256 256S0 213 0 160S114.625 64 256 64S512 107 512 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M512 160V352C512 405 397.375 448 256 448S0 405 0 352V160C0 213 114.625 256 256 256S512 213 512 160Z" })
    ]
  }
));
HockeyPuckDuotone.displayName = "HockeyPuckDuotone";
var HockeyPuck_default = HockeyPuckDuotone;
export {
  HockeyPuck_default as default
};
