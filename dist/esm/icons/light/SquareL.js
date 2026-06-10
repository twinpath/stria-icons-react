import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareLLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM304 352H160V144C160 135.156 152.844 128 144 128S128 135.156 128 144V368C128 376.844 135.156 384 144 384H304C312.844 384 320 376.844 320 368S312.844 352 304 352Z" })
  }
));
SquareLLight.displayName = "SquareLLight";
var SquareL_default = SquareLLight;
export {
  SquareL_default as default
};
