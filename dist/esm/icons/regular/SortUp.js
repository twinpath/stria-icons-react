import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const SortUpRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M48.034 209.933H271.92C314.547 209.933 336.173 158.168 305.797 128.034L193.916 16C175.29 -2.756 144.789 -2.756 126.038 16L14.033 128.034C-15.969 158.168 5.282 209.933 48.034 209.933ZM160.04 49.885L272.045 161.919H48.034L160.04 49.885Z" })
  }
));
SortUpRegular.displayName = "SortUpRegular";
var SortUp_default = SortUpRegular;
export {
  SortUp_default as default
};
