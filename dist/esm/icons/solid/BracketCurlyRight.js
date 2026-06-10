import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BracketCurlyRightSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M32 64V64C32 81.673 46.327 96 64 96H96C113.6 96 128 110.4 128 128V165.475C128 190.943 138.117 215.367 156.125 233.375L178.75 256L156.108 278.642C138.111 296.639 128 321.048 128 346.5V384C128 401.6 113.6 416 96 416H64C46.327 416 32 430.327 32 448V448C32 465.673 46.327 480 64 480H96C149.019 480 192 437.019 192 384V346.5C192 338.016 195.37 329.88 201.369 323.881L246.625 278.625C259.12 266.13 259.12 245.87 246.625 233.375L201.369 188.119C195.37 182.12 192 173.984 192 165.5V128C192 74.981 149.019 32 96 32H64C46.327 32 32 46.327 32 64Z" })
  }
));
BracketCurlyRightSolid.displayName = "BracketCurlyRightSolid";
var BracketCurlyRight_default = BracketCurlyRightSolid;
export {
  BracketCurlyRight_default as default
};
