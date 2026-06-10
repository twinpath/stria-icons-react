import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Tally2Solid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M32 32H32C14.327 32 0 46.327 0 64V448C0 465.673 14.327 480 32 480H32C49.673 480 64 465.673 64 448V64C64 46.327 49.673 32 32 32ZM160 32H160C142.327 32 128 46.327 128 64V448C128 465.673 142.327 480 160 480H160C177.673 480 192 465.673 192 448V64C192 46.327 177.673 32 160 32Z" })
  }
));
Tally2Solid.displayName = "Tally2Solid";
var Tally2_default = Tally2Solid;
export {
  Tally2_default as default
};
