import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TombstoneBlankSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M416 192C416 86 330 0 224 0C118 0 32 86 32 192V416H416V192ZM432 448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H432C440.875 512 448 504.875 448 496V464C448 455.125 440.875 448 432 448Z" })
  }
));
TombstoneBlankSolid.displayName = "TombstoneBlankSolid";
var TombstoneBlank_default = TombstoneBlankSolid;
export {
  TombstoneBlank_default as default
};
