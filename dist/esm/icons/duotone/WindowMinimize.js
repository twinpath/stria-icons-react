import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const WindowMinimizeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M512 400V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V400C0 373.5 21.5 352 48 352H464C490.5 352 512 373.5 512 400Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
WindowMinimizeDuotone.displayName = "WindowMinimizeDuotone";
var WindowMinimize_default = WindowMinimizeDuotone;
export {
  WindowMinimize_default as default
};
