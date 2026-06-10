import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareRightRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M248.156 150.242C241.125 143.836 230.969 142.211 222.281 146.055S208 158.492 208 167.992V223.992L120 224C106.75 224 96 234.75 96 248V264C96 277.25 106.75 288 120 288L208 287.992V343.992C208 353.523 213.656 362.148 222.375 365.992C231.125 369.805 241.281 368.086 248.281 361.617L344.281 272.867C349.219 268.336 352 261.93 352 255.242C351.688 247.461 349.125 241.992 344.156 237.492L248.156 150.242ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM400 416C400 424.82 392.82 432 384 432H64C55.18 432 48 424.82 48 416V96C48 87.18 55.18 80 64 80H384C392.82 80 400 87.18 400 96V416Z" })
  }
));
SquareRightRegular.displayName = "SquareRightRegular";
var SquareRight_default = SquareRightRegular;
export {
  SquareRight_default as default
};
