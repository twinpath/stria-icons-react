import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowMinimizeLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M496 480H16C7.25 480 0 472.75 0 464S7.25 448 16 448H496C504.75 448 512 455.25 512 464S504.75 480 496 480Z" })
  }
));
WindowMinimizeLight.displayName = "WindowMinimizeLight";
var WindowMinimize_default = WindowMinimizeLight;
export {
  WindowMinimize_default as default
};
