import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HockeyPuckSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 160C0 107 114.625 64 256 64S512 107 512 160S397.375 256 256 256S0 213 0 160ZM0 242.25V352C0 405 114.625 448 256 448S512 405 512 352V242.25C398.625 324.5 113.5 324.625 0 242.25Z" })
  }
));
HockeyPuckSolid.displayName = "HockeyPuckSolid";
var HockeyPuck_default = HockeyPuckSolid;
export {
  HockeyPuck_default as default
};
