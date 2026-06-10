import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GenderlessThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M192 96C280.225 96 352 167.775 352 256S280.225 416 192 416S32 344.225 32 256S103.775 96 192 96M192 80C94.799 80 16 158.799 16 256S94.799 432 192 432S368 353.201 368 256S289.201 80 192 80L192 80Z" })
  }
));
GenderlessThin.displayName = "GenderlessThin";
var Genderless_default = GenderlessThin;
export {
  Genderless_default as default
};
