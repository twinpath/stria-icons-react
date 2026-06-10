import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareCaretLeftRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM400 416C400 424.82 392.82 432 384 432H64C55.18 432 48 424.82 48 416V96C48 87.18 55.18 80 64 80H384C392.82 80 400 87.18 400 96V416ZM273.625 138C264.906 134.188 254.719 135.906 247.719 142.375L143.719 238.375C138.812 242.906 136 249.312 136 256S138.812 269.094 143.719 273.625L247.719 369.625C254.719 376.094 264.906 377.812 273.625 374C282.344 370.156 288 361.531 288 352V160C288 150.469 282.344 141.844 273.625 138Z" })
  }
));
SquareCaretLeftRegular.displayName = "SquareCaretLeftRegular";
var SquareCaretLeft_default = SquareCaretLeftRegular;
export {
  SquareCaretLeft_default as default
};
