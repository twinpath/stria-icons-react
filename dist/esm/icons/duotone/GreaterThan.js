import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GreaterThanDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 255.945C384 271.094 375.438 284.932 361.891 291.71L57.898 443.642C34.232 455.47 11.915 441.111 4.228 425.744C-5.647 406.003 2.368 381.982 22.118 372.112L254.566 255.945L22.118 139.778C2.368 129.907 -5.647 105.887 4.228 86.146C14.102 66.342 38.102 58.346 57.898 68.247L361.891 220.179C375.438 226.958 384 240.795 384 255.945Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
GreaterThanDuotone.displayName = "GreaterThanDuotone";
var GreaterThan_default = GreaterThanDuotone;
export {
  GreaterThan_default as default
};
