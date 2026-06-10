import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ComputerMouseRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM336 160V176H216V48H224C285.875 48.125 335.875 98.125 336 160ZM160 48H168V176H48V160C48.125 98.125 98.125 48.125 160 48ZM224 464H160C98.125 463.875 48.125 413.875 48 352V224H336V352C335.875 413.875 285.875 463.875 224 464Z" })
  }
));
ComputerMouseRegular.displayName = "ComputerMouseRegular";
var ComputerMouse_default = ComputerMouseRegular;
export {
  ComputerMouse_default as default
};
