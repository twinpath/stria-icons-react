import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CommentMiddleDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M323.162 408.525L274.275 501.916C267.238 515.361 244.762 515.361 237.725 501.916L188.838 408.525C80.076 384.533 0 303.988 0 208C0 93.094 114.594 0 256 0S512 93.094 512 208C512 303.988 431.924 384.533 323.162 408.525Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
CommentMiddleDuotone.displayName = "CommentMiddleDuotone";
var CommentMiddle_default = CommentMiddleDuotone;
export {
  CommentMiddle_default as default
};
