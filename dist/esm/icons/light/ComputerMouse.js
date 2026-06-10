import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ComputerMouseLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM32 160C32.125 89.375 89.375 32.125 160 32H176V192H32V160ZM352 352C351.875 422.625 294.625 479.875 224 480H160C89.375 479.875 32.125 422.625 32 352V224H352V352ZM352 192H208V32H224C294.625 32.125 351.875 89.375 352 160V192Z" })
  }
));
ComputerMouseLight.displayName = "ComputerMouseLight";
var ComputerMouse_default = ComputerMouseLight;
export {
  ComputerMouse_default as default
};
