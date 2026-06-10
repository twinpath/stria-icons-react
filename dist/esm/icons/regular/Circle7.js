import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Circle7Regular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM328 128H184C170.75 128 160 138.75 160 152S170.75 176 184 176H287.812L194.875 348.625C188.594 360.281 192.937 374.844 204.625 381.125C208.25 383.094 212.125 384 215.969 384C224.531 384 232.781 379.438 237.125 371.375L349.125 163.375C353.125 155.938 352.937 146.938 348.594 139.688C344.281 132.438 336.438 128 328 128Z" })
  }
));
Circle7Regular.displayName = "Circle7Regular";
var Circle7_default = Circle7Regular;
export {
  Circle7_default as default
};
