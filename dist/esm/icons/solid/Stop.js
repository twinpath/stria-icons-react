import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const StopSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 128V384C384 419.346 355.346 448 320 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H320C355.346 64 384 92.654 384 128Z" })
  }
));
StopSolid.displayName = "StopSolid";
var Stop_default = StopSolid;
export {
  Stop_default as default
};
