import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketSquareRightSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M32 64V64C32 81.673 46.327 96 64 96H128V416H64C46.327 416 32 430.327 32 448V448C32 465.673 46.327 480 64 480H160C177.6 480 192 465.6 192 448V64C192 46.4 177.6 32 160 32H64C46.327 32 32 46.327 32 64Z" })
  }
));
BracketSquareRightSolid.displayName = "BracketSquareRightSolid";
var BracketSquareRight_default = BracketSquareRightSolid;
export {
  BracketSquareRight_default as default
};
