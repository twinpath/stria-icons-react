import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ContainerStorageDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M48 96V416H592V96H48ZM112 368V144H144V368H112ZM208 368V144H240V368H208ZM304 368V144H336V368H304ZM400 368V144H432V368H400ZM496 368V144H528V368H496Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M592 416H48C39.25 416 32 423.25 32 432V464C32 472.75 39.25 480 48 480H592C600.75 480 608 472.75 608 464V432C608 423.25 600.75 416 592 416ZM592 32H48C39.25 32 32 39.25 32 48V80C32 88.75 39.25 96 48 96H592C600.75 96 608 88.75 608 80V48C608 39.25 600.75 32 592 32Z" })
    ]
  }
));
ContainerStorageDuotone.displayName = "ContainerStorageDuotone";
var ContainerStorage_default = ContainerStorageDuotone;
export {
  ContainerStorage_default as default
};
