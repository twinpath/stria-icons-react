import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const AngleLeftThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M32 255.999C32 253.999 32.734 252.03 34.219 250.468L178.226 98.471C181.273 95.283 186.351 95.158 189.539 98.221C192.727 101.314 192.82 106.377 189.789 109.533L51.079 255.999L189.791 402.467C192.822 405.686 192.729 410.748 189.541 413.779C186.354 416.842 181.275 416.717 178.228 413.529L34.219 261.53C32.734 259.968 32 257.999 32 255.999Z" })
  }
));
AngleLeftThin.displayName = "AngleLeftThin";
var AngleLeft_default = AngleLeftThin;
export {
  AngleLeft_default as default
};
