import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SdCardsSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 0H208L96 112V352C96 387.25 124.75 416 160 416H384C419.25 416 448 387.25 448 352V64C448 28.75 419.25 0 384 0ZM304 160H256V64H304V160ZM384 160H336V64H384V160ZM48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H304C330.51 512 352 490.508 352 464H80C62.326 464 48 449.672 48 432Z" })
  }
));
SdCardsSolid.displayName = "SdCardsSolid";
var SdCards_default = SdCardsSolid;
export {
  SdCards_default as default
};
