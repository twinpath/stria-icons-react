import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Icon3Light = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M320 352C320 422.594 262.578 480 192 480H93.094C51.156 480 14.078 453.281 0.828 413.5C-1.969 405.125 2.562 396.062 10.938 393.25C19.359 390.438 28.375 395 31.172 403.375C40.078 430.062 64.953 448 93.094 448H192C244.938 448 288 404.938 288 352S244.938 256 192 256H80C73.406 256 67.5 251.969 65.094 245.812C62.703 239.688 64.312 232.719 69.141 228.25L247.078 64H16C7.156 64 0 56.844 0 48S7.156 32 16 32H288C294.594 32 300.5 36.031 302.906 42.188C305.297 48.312 303.688 55.281 298.859 59.75L120.922 224H192C262.578 224 320 281.406 320 352Z" })
  }
));
Icon3Light.displayName = "Icon3Light";
var __default = Icon3Light;
export {
  __default as default
};
