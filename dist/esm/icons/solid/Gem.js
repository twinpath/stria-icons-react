import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GemSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M378.682 32H133.318L256 182.734L378.682 32ZM512 192L404.586 50.67L289.57 192H512ZM107.414 50.67L0 192H222.43L107.414 50.67ZM244.375 474.938C247.391 478.172 251.586 480 256 480S264.611 478.172 267.625 474.938L510.635 224H1.365L244.375 474.938Z" })
  }
));
GemSolid.displayName = "GemSolid";
var Gem_default = GemSolid;
export {
  Gem_default as default
};
