import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PlugSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M320 32C320 14.375 305.625 0 288 0S256 14.375 256 32V128H320V32ZM368 160H16C7.125 160 0 167.125 0 176V208C0 216.875 7.125 224 16 224H32V256C32 332 85.5 397.625 160 412.75V512H224V412.75C298.5 397.625 352 332 352 256V224H368C376.875 224 384 216.875 384 208V176C384 167.125 376.875 160 368 160ZM128 32C128 14.375 113.625 0 96 0S64 14.375 64 32V128H128V32Z" })
  }
));
PlugSolid.displayName = "PlugSolid";
var Plug_default = PlugSolid;
export {
  Plug_default as default
};
