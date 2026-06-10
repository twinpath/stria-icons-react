import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CommentMiddleTopSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M512 304C512 418.906 397.406 512 256 512S0 418.906 0 304C0 208.012 80.076 127.467 188.838 103.475L237.725 10.084C241.243 3.361 248.622 0 256 0S270.757 3.361 274.275 10.084L323.162 103.475C431.924 127.467 512 208.012 512 304Z " })
  }
));
CommentMiddleTopSolid.displayName = "CommentMiddleTopSolid";
var CommentMiddleTop_default = CommentMiddleTopSolid;
export {
  CommentMiddleTop_default as default
};
