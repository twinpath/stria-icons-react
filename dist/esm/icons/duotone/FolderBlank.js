import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FolderBlankDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M512 144V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H208L272 96H464C490.5 96 512 117.5 512 144Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
FolderBlankDuotone.displayName = "FolderBlankDuotone";
var FolderBlank_default = FolderBlankDuotone;
export {
  FolderBlank_default as default
};
