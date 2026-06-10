import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FlowerTulipDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M511.914 336.875C502.037 435 405.648 512 288.131 512H223.869C106.352 512 9.963 435 0.086 336.875C-0.914 327.75 6.963 320 16.088 320H63.346C126.355 320 183.238 342.25 223.994 377.875V256H288.006V377.875C328.762 342.25 385.644 320 448.654 320H495.912C505.037 320 512.914 327.75 511.914 336.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M224.02 256C153.259 256 96 198.75 96 128V32L176.012 80L257.15 0L336.037 80L416.049 32V128C416.049 198.75 358.79 256 288.029 256H224.02Z" })
    ]
  }
));
FlowerTulipDuotone.displayName = "FlowerTulipDuotone";
var FlowerTulip_default = FlowerTulipDuotone;
export {
  FlowerTulip_default as default
};
