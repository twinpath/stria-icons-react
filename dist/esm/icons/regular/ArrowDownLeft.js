import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownLeftRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M344.969 136.969L113.938 368H296C309.25 368 320 378.75 320 392S309.25 416 296 416H56C42.75 416 32 405.25 32 392V152C32 138.75 42.75 128 56 128S80 138.75 80 152V334.062L311.031 103.031C320.406 93.656 335.594 93.656 344.969 103.031S354.344 127.594 344.969 136.969Z" })
  }
));
ArrowDownLeftRegular.displayName = "ArrowDownLeftRegular";
var ArrowDownLeft_default = ArrowDownLeftRegular;
export {
  ArrowDownLeft_default as default
};
