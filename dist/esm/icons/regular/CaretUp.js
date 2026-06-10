import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CaretUpRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M47.968 336H271.976C314.603 336 336.103 284.242 305.852 253.988L193.973 141.971C175.223 123.343 144.722 123.343 125.971 141.971L14.092 253.988C-16.034 284.242 5.342 336 47.968 336ZM159.972 175.976L271.976 287.993H47.968L159.972 175.976Z" })
  }
));
CaretUpRegular.displayName = "CaretUpRegular";
var CaretUp_default = CaretUpRegular;
export {
  CaretUp_default as default
};
