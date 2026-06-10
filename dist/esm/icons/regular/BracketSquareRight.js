import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketSquareRightRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M48 56V56C48 69.255 58.745 80 72 80H144V432H72C58.745 432 48 442.745 48 456V456C48 469.255 58.745 480 72 480H160C177.6 480 192 465.6 192 448V64C192 46.4 177.6 32 160 32H72C58.745 32 48 42.745 48 56Z" })
  }
));
BracketSquareRightRegular.displayName = "BracketSquareRightRegular";
var BracketSquareRight_default = BracketSquareRightRegular;
export {
  BracketSquareRight_default as default
};
