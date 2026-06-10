import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ToggleOnDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M384 64.001H192C85.999 64.001 0 150.001 0 256.001S85.999 448.001 192 448.001H384C489.999 448.001 576 362.001 576 256.001S489.999 64.001 384 64.001ZM384 352.001C330.938 352.001 288 309.063 288 256.001S330.938 160.001 384 160.001S480 202.938 480 256.001S437.062 352.001 384 352.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M480 256C480 309.062 437.062 352 384 352S288 309.062 288 256S330.938 160 384 160S480 202.938 480 256Z" })
    ]
  }
));
ToggleOnDuotone.displayName = "ToggleOnDuotone";
var ToggleOn_default = ToggleOnDuotone;
export {
  ToggleOn_default as default
};
