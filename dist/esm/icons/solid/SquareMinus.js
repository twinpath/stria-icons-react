import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareMinusSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM319.998 280H127.998C114.797 280 103.996 269.197 103.996 256C103.996 242.799 114.797 232 127.998 232H319.998C333.195 232 343.996 242.799 343.996 256C343.996 269.197 333.195 280 319.998 280Z" })
  }
));
SquareMinusSolid.displayName = "SquareMinusSolid";
var SquareMinus_default = SquareMinusSolid;
export {
  SquareMinus_default as default
};
