import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CameraDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z" })
    ]
  }
));
CameraDuotone.displayName = "CameraDuotone";
var Camera_default = CameraDuotone;
export {
  Camera_default as default
};
