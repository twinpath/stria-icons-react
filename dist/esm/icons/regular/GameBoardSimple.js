import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GameBoardSimpleRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 400H368V256H224V400ZM384 32H64C28.801 32 0 60.801 0 96V416C0 451.199 28.801 480 64 480H384C419.201 480 448 451.199 448 416V96C448 60.801 419.201 32 384 32ZM400 416C400 424.674 392.674 432 384 432H64C55.328 432 48 424.674 48 416V96C48 87.326 55.328 80 64 80H384C392.674 80 400 87.326 400 96V416ZM80 112V256H224V112H80Z" })
  }
));
GameBoardSimpleRegular.displayName = "GameBoardSimpleRegular";
var GameBoardSimple_default = GameBoardSimpleRegular;
export {
  GameBoardSimple_default as default
};
