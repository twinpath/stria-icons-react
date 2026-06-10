import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M156.438 480H32C14.328 480 0 465.688 0 448V64C0 46.312 14.328 32 32 32H156.438C281.922 32 384 132.5 384 256S281.922 480 156.438 480ZM64 416H156.438C246.625 416 320 344.219 320 256S246.625 96 156.438 96H64V416Z" })
  }
));
DRegular.displayName = "DRegular";
var D_default = DRegular;
export {
  D_default as default
};
