import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EllipsisVerticalRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 128 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M64 112C90.5 112 112 90.5 112 64S90.5 16 64 16S16 37.5 16 64S37.5 112 64 112ZM64 400C37.5 400 16 421.5 16 448S37.5 496 64 496S112 474.5 112 448S90.5 400 64 400ZM64 208C37.5 208 16 229.5 16 256S37.5 304 64 304S112 282.5 112 256S90.5 208 64 208Z" })
  }
));
EllipsisVerticalRegular.displayName = "EllipsisVerticalRegular";
var EllipsisVertical_default = EllipsisVerticalRegular;
export {
  EllipsisVertical_default as default
};
