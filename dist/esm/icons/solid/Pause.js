import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PauseSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M272 64H240C213.49 64 192 85.49 192 112V400C192 426.51 213.49 448 240 448H272C298.51 448 320 426.51 320 400V112C320 85.49 298.51 64 272 64ZM80 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H80C106.51 448 128 426.51 128 400V112C128 85.49 106.51 64 80 64Z" })
  }
));
PauseSolid.displayName = "PauseSolid";
var Pause_default = PauseSolid;
export {
  Pause_default as default
};
