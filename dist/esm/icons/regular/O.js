import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ORegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 96C135.781 96 64 167.781 64 256S135.781 416 224 416S384 344.219 384 256S312.219 96 224 96Z" })
  }
));
ORegular.displayName = "ORegular";
var O_default = ORegular;
export {
  O_default as default
};
