import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BreadSliceRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 32C132.369 32 0 96.291 0 192C0 227.289 26.916 256 60 256H64V432C64 458.51 85.49 480 112 480H400C426.51 480 448 458.51 448 432V256H452C485.084 256 512 227.289 512 192C512 96.291 379.631 32 256 32ZM452 208H400V432H112V208H60C54.25 208 48 201.625 48 192C48 132.375 153.75 80 256 80S464 132.375 464 192C464 201.625 457.75 208 452 208Z" })
  }
));
BreadSliceRegular.displayName = "BreadSliceRegular";
var BreadSlice_default = BreadSliceRegular;
export {
  BreadSlice_default as default
};
