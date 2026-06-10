import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowMinimizeRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M480 480H32C14.25 480 0 465.75 0 448S14.25 416 32 416H480C497.75 416 512 430.25 512 448S497.75 480 480 480Z" })
  }
));
WindowMinimizeRegular.displayName = "WindowMinimizeRegular";
var WindowMinimize_default = WindowMinimizeRegular;
export {
  WindowMinimize_default as default
};
