import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LessThanDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M22.109 220.179L326.102 68.247C345.898 58.346 369.898 66.342 379.772 86.146C389.647 105.887 381.632 129.907 361.882 139.778L129.435 255.945L361.882 372.112C381.632 381.982 389.647 406.003 379.772 425.744C372.085 441.111 349.768 455.47 326.102 443.642L22.109 291.71C8.562 284.932 0 271.094 0 255.945S8.562 226.958 22.109 220.179Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
LessThanDuotone.displayName = "LessThanDuotone";
var LessThan_default = LessThanDuotone;
export {
  LessThan_default as default
};
