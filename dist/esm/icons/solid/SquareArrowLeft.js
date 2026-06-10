import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareArrowLeftSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM352 288H173.25L222.625 337.375C235.125 349.875 235.125 370.125 222.625 382.625S189.875 395.125 177.375 382.625L73.398 278.648C65.4 270.664 64 260.898 64 256C64 251.117 65.391 241.344 73.398 233.352L177.375 129.375C189.875 116.875 210.125 116.875 222.625 129.375S235.125 162.125 222.625 174.625L173.25 224H352C369.688 224 384 238.328 384 256S369.688 288 352 288Z" })
  }
));
SquareArrowLeftSolid.displayName = "SquareArrowLeftSolid";
var SquareArrowLeft_default = SquareArrowLeftSolid;
export {
  SquareArrowLeft_default as default
};
