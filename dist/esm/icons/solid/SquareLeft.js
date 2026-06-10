import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareLeftSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96ZM214.125 129.219C220.109 131.688 224 137.531 224 144V208H320C337.673 208 352 222.327 352 240V272C352 289.673 337.673 304 320 304H224V368C224 374.469 220.109 380.312 214.125 382.781C208.141 385.266 201.266 383.891 196.687 379.313L84.687 267.313C78.44 261.065 78.44 250.935 84.687 244.688L196.687 132.688C201.266 128.109 208.141 126.734 214.125 129.219Z" })
  }
));
SquareLeftSolid.displayName = "SquareLeftSolid";
var SquareLeft_default = SquareLeftSolid;
export {
  SquareLeft_default as default
};
