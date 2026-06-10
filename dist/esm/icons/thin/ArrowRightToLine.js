import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowRightToLineThin = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M349.656 261.656C352.781 258.531 352.781 253.469 349.656 250.344L197.656 98.344C196.094 96.781 194.062 96 192 96S187.906 96.781 186.344 98.344C183.219 101.469 183.219 106.531 186.344 109.656L324.688 248H8C3.594 248 0 251.578 0 256S3.594 264 8 264H324.688L186.344 402.344C183.219 405.469 183.219 410.531 186.344 413.656S194.531 416.781 197.656 413.656L349.656 261.656ZM448 440V72C448 67.582 444.418 64 440 64S432 67.582 432 72V440C432 444.418 435.582 448 440 448S448 444.418 448 440Z" })
  }
));
ArrowRightToLineThin.displayName = "ArrowRightToLineThin";
var ArrowRightToLine_default = ArrowRightToLineThin;
export {
  ArrowRightToLine_default as default
};
