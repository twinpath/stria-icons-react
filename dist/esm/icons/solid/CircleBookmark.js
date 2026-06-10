import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleBookmarkSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM352 384L256 320L160 384V160C160 142.326 174.326 128 192 128H320C337.674 128 352 142.326 352 160V384Z" })
  }
));
CircleBookmarkSolid.displayName = "CircleBookmarkSolid";
var CircleBookmark_default = CircleBookmarkSolid;
export {
  CircleBookmark_default as default
};
