import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SquareUpRightSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM330.508 323.883C330.508 330.355 326.619 336.188 320.631 338.664C314.652 341.148 307.77 339.77 303.195 335.195L257.941 289.941L190.059 357.824C177.562 370.321 157.301 370.321 144.804 357.824L122.176 335.196C109.679 322.699 109.679 302.438 122.176 289.941L190.059 222.059L144.805 176.805C140.23 172.227 138.85 165.344 141.334 159.367C143.811 153.383 149.643 149.492 156.117 149.492H314.51C323.345 149.492 330.508 156.655 330.508 165.49V323.883Z" })
  }
));
SquareUpRightSolid.displayName = "SquareUpRightSolid";
var SquareUpRight_default = SquareUpRightSolid;
export {
  SquareUpRight_default as default
};
