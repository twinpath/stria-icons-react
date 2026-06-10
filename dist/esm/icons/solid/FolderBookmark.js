import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FolderBookmarkSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM448 335.969C448 349.385 432.48 356.844 422.004 348.463L368 305.26L313.996 348.463C303.52 356.844 288 349.385 288 335.969V160H448V335.969Z" })
  }
));
FolderBookmarkSolid.displayName = "FolderBookmarkSolid";
var FolderBookmark_default = FolderBookmarkSolid;
export {
  FolderBookmark_default as default
};
