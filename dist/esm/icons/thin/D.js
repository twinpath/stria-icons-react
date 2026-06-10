import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M160 480H8C3.578 480 0 476.406 0 472V40C0 35.594 3.578 32 8 32H160C283.516 32 384 132.5 384 256S283.516 480 160 480ZM16 464H160C274.688 464 368 370.688 368 256S274.688 48 160 48H16V464Z" })
  }
));
DThin.displayName = "DThin";
var D_default = DThin;
export {
  D_default as default
};
