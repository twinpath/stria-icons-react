import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GameBoardSimpleSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM384 256H224V416H64V256H224V96H384V256Z" })
  }
));
GameBoardSimpleSolid.displayName = "GameBoardSimpleSolid";
var GameBoardSimple_default = GameBoardSimpleSolid;
export {
  GameBoardSimple_default as default
};
