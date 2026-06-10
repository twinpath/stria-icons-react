import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HockeyPuckThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 80C112.453 80 0 122.156 0 176V336C0 389.844 112.453 432 256 432S512 389.844 512 336V176C512 122.156 399.547 80 256 80ZM256 96C399.562 96 496 137.375 496 176S399.562 256 256 256S16 214.625 16 176S112.438 96 256 96ZM496 336C496 374.625 399.562 416 256 416S16 374.625 16 336V209.734C51.717 246.426 144.309 272 256 272S460.283 246.426 496 209.734V336Z" })
  }
));
HockeyPuckThin.displayName = "HockeyPuckThin";
var HockeyPuck_default = HockeyPuckThin;
export {
  HockeyPuck_default as default
};
