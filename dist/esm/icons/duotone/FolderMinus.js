import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FolderMinusDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM336 311.998H176C162.73 311.998 152 301.256 152 288C152 274.742 162.738 264.002 176 264.002H336C349.262 264.002 360 274.742 360 288S349.262 311.998 336 311.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M360 288C360 301.258 349.262 311.998 336.002 311.998H175.998C162.73 311.998 152 301.256 152 288C152 274.742 162.738 264.002 175.998 264.002H336.002C349.262 264.002 360 274.742 360 288Z" })
    ]
  }
));
FolderMinusDuotone.displayName = "FolderMinusDuotone";
var FolderMinus_default = FolderMinusDuotone;
export {
  FolderMinus_default as default
};
