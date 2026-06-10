import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const URegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M192 480.018C86.125 480.018 0 395.206 0 290.924V64.018C0 46.33 14.328 32.018 32 32.018S64 46.33 64 64.018V290.924C64 359.893 121.422 416.018 192 416.018S320 359.893 320 290.924V64.018C320 46.33 334.328 32.018 352 32.018S384 46.33 384 64.018V290.924C384 395.206 297.875 480.018 192 480.018Z" })
  }
));
URegular.displayName = "URegular";
var U_default = URegular;
export {
  U_default as default
};
