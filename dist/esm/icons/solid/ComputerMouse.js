import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ComputerMouseSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V224H0V352ZM176 0H160C71.625 0 0 71.625 0 160V192H176V0ZM224 0H208V192H384V160C384 71.625 312.375 0 224 0Z" })
  }
));
ComputerMouseSolid.displayName = "ComputerMouseSolid";
var ComputerMouse_default = ComputerMouseSolid;
export {
  ComputerMouse_default as default
};
