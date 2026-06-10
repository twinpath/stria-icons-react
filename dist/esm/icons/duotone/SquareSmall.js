import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareSmallDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M320 160V352C320 387.346 291.346 416 256 416H64C28.654 416 0 387.346 0 352V160C0 124.654 28.654 96 64 96H256C291.346 96 320 124.654 320 160Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
SquareSmallDuotone.displayName = "SquareSmallDuotone";
var SquareSmall_default = SquareSmallDuotone;
export {
  SquareSmall_default as default
};
