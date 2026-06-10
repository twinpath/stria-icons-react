import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ToggleOnSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M384 64H192C85.999 64 0 150 0 256C0 362 85.999 448 192 448H384C489.999 448 576 362 576 256C576 150 489.999 64 384 64ZM384 352C330.938 352 288 309.062 288 256S330.938 160 384 160S480 202.938 480 256S437.062 352 384 352Z" })
  }
));
ToggleOnSolid.displayName = "ToggleOnSolid";
var ToggleOn_default = ToggleOnSolid;
export {
  ToggleOn_default as default
};
