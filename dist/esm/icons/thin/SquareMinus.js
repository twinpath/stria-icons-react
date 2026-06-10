import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareMinusThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M344 248H104C99.578 248 96 251.578 96 256S99.578 264 104 264H344C348.422 264 352 260.422 352 256S348.422 248 344 248ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM432 416C432 442.469 410.467 464 384 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416Z" })
  }
));
SquareMinusThin.displayName = "SquareMinusThin";
var SquareMinus_default = SquareMinusThin;
export {
  SquareMinus_default as default
};
