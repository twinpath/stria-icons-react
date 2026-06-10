import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TengeSignRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M24 80H360C373.25 80 384 69.25 384 56S373.25 32 360 32H24C10.75 32 0 42.75 0 56S10.75 80 24 80ZM360 160H24C10.75 160 0 170.75 0 184S10.75 208 24 208H168V456C168 469.25 178.75 480 192 480S216 469.25 216 456V208H360C373.25 208 384 197.25 384 184S373.25 160 360 160Z" })
  }
));
TengeSignRegular.displayName = "TengeSignRegular";
var TengeSign_default = TengeSignRegular;
export {
  TengeSign_default as default
};
