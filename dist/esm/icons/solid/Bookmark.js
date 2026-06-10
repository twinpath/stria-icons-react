import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BookmarkSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 48V512L192 400L0 512V48C0 21.5 21.5 0 48 0H336C362.5 0 384 21.5 384 48Z" })
  }
));
BookmarkSolid.displayName = "BookmarkSolid";
var Bookmark_default = BookmarkSolid;
export {
  Bookmark_default as default
};
