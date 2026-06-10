import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LessThanRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M370.312 117.656L79.812 256L370.312 394.344C382.281 400.031 387.375 414.344 381.656 426.312C377.562 434.969 368.938 440 359.969 440C356.531 440 353 439.25 349.687 437.656L13.687 277.656C5.312 273.688 0 265.25 0 256S5.312 238.312 13.688 234.344L349.688 74.344C361.625 68.594 376 73.719 381.656 85.688C387.375 97.656 382.281 111.969 370.312 117.656Z" })
  }
));
LessThanRegular.displayName = "LessThanRegular";
var LessThan_default = LessThanRegular;
export {
  LessThan_default as default
};
