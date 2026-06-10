import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 64C361.869 64 448 150.131 448 256S361.869 448 256 448S64 361.869 64 256S150.131 64 256 64M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16L256 16Z" })
  }
));
CircleRegular.displayName = "CircleRegular";
var Circle_default = CircleRegular;
export {
  Circle_default as default
};
