import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const UserLargeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 288.001C335.533 288.001 400 223.528 400 144.001S335.533 0.001 256 0.001C176.477 0.001 112 64.473 112 144.001S176.477 288.001 256 288.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M351.998 320.001H160.002C71.639 320.001 0 391.633 0 480.001C0 497.672 14.33 512.001 31.998 512.001H480.002C497.67 512.001 512 497.672 512 480.001C512 391.633 440.367 320.001 351.998 320.001Z" })
    ]
  }
));
UserLargeDuotone.displayName = "UserLargeDuotone";
var UserLarge_default = UserLargeDuotone;
export {
  UserLarge_default as default
};
