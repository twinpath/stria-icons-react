import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleChevronRightSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM358.625 278.625L246.625 390.625C234.125 403.125 213.875 403.125 201.375 390.625S188.875 357.875 201.375 345.375L290.75 256L201.375 166.625C188.875 154.125 188.875 133.875 201.375 121.375S234.125 108.875 246.625 121.375L358.625 233.375C364.875 239.625 368 247.812 368 256S364.875 272.375 358.625 278.625Z" })
  }
));
CircleChevronRightSolid.displayName = "CircleChevronRightSolid";
var CircleChevronRight_default = CircleChevronRightSolid;
export {
  CircleChevronRight_default as default
};
