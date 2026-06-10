import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Square7Regular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM296 128H152C138.75 128 128 138.75 128 152S138.75 176 152 176H255.812L162.875 348.625C156.594 360.281 160.937 374.844 172.625 381.125C176.25 383.094 180.125 384 183.969 384C192.531 384 200.781 379.438 205.125 371.375L317.125 163.375C321.125 155.938 320.937 146.938 316.594 139.688C312.281 132.438 304.438 128 296 128Z" })
  }
));
Square7Regular.displayName = "Square7Regular";
var Square7_default = Square7Regular;
export {
  Square7_default as default
};
