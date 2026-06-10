import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GameBoardSimpleDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM384 416H64V96H384V416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M64 96V256H224V96H64ZM224 256V416H384V256H224Z" })
    ]
  }
));
GameBoardSimpleDuotone.displayName = "GameBoardSimpleDuotone";
var GameBoardSimple_default = GameBoardSimpleDuotone;
export {
  GameBoardSimple_default as default
};
