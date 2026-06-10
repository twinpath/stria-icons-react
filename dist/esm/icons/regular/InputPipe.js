import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const InputPipeRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M128 160C114.746 160 104 170.744 104 184V328C104 341.254 114.746 352 128 352S152 341.254 152 328V184C152 170.744 141.254 160 128 160ZM576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM592.002 384C592.002 392.836 584.838 400 576.002 400H63.998C55.162 400 47.998 392.836 47.998 384V128C47.998 119.162 55.162 112 63.998 112H576.002C584.838 112 592.002 119.162 592.002 128V384Z" })
  }
));
InputPipeRegular.displayName = "InputPipeRegular";
var InputPipe_default = InputPipeRegular;
export {
  InputPipe_default as default
};
