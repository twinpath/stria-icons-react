import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CropSimpleRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M488 384H432V120C432 97.938 414.062 80 392 80H160V128H384V488C384 501.25 394.75 512 408 512S432 501.25 432 488V432H488C501.25 432 512 421.25 512 408S501.25 384 488 384ZM128 384V24C128 10.75 117.25 0 104 0S80 10.75 80 24V80H24C10.75 80 0 90.75 0 104S10.75 128 24 128H80V392C80 414.062 97.938 432 120 432H352V384H128Z" })
  }
));
CropSimpleRegular.displayName = "CropSimpleRegular";
var CropSimple_default = CropSimpleRegular;
export {
  CropSimple_default as default
};
