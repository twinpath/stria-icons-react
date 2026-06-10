import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MobileButtonSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M320 0H64C37.49 0 16 21.49 16 48V464C16 490.51 37.49 512 64 512H320C346.51 512 368 490.51 368 464V48C368 21.49 346.51 0 320 0ZM192 464C174.25 464 160 449.75 160 432S174.25 400 192 400S224 414.25 224 432S209.75 464 192 464Z" })
  }
));
MobileButtonSolid.displayName = "MobileButtonSolid";
var MobileButton_default = MobileButtonSolid;
export {
  MobileButton_default as default
};
