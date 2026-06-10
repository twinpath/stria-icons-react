import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PenToSquareDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M497.941 42.193L469.809 14.059C451.062 -4.687 420.672 -4.687 401.928 14.059L363.307 52.691L459.318 148.705L497.937 110.078C516.686 91.334 516.688 60.939 497.941 42.193ZM383.99 448H63.998V128H220.125L284.125 64H63.998C28.654 64 0 92.652 0 128V448C0 483.346 28.654 512 63.998 512H383.99C419.334 512 447.988 483.346 447.988 448V227.896L383.99 291.891V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M153.845 262.154L363.308 52.69L459.319 148.703L249.847 358.151C246.497 361.501 242.23 363.784 237.585 364.713L142.358 383.76C133.963 385.439 126.561 378.037 128.24 369.641L147.282 274.418C148.211 269.771 150.495 265.504 153.845 262.154Z" })
    ]
  }
));
PenToSquareDuotone.displayName = "PenToSquareDuotone";
var PenToSquare_default = PenToSquareDuotone;
export {
  PenToSquare_default as default
};
