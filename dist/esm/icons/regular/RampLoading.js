import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RampLoadingRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 352V32C384 14.25 369.75 0 352 0H32C14.25 0 0 14.25 0 32V352C0 369.75 14.25 384 32 384H38.875L3.25 467.375C-5.875 488.5 9.625 512 32.625 512H351.5C374.5 512 390 488.5 380.875 467.375L345.125 384H352C369.75 384 384 369.75 384 352ZM56.75 464L111.75 336H272.25L327.25 464H56.75ZM312.25 307.375C307.25 295.625 295.75 288 282.875 288H101.125C88.25 288 76.75 295.625 71.75 307.375L59.5 336H48V48H336V336H324.5L312.25 307.375Z" })
  }
));
RampLoadingRegular.displayName = "RampLoadingRegular";
var RampLoading_default = RampLoadingRegular;
export {
  RampLoading_default as default
};
