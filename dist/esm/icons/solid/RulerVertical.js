import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const RulerVerticalSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M160 112C160 120.801 167.201 128 176 128H256V192H176C167.201 192 160 199.199 160 208S167.201 224 176 224H256V288H176C167.201 288 160 295.199 160 304S167.201 320 176 320H256V384H176C167.201 384 160 391.199 160 400S167.201 416 176 416H256V480C256 497.6 241.6 512 224 512H32C14.4 512 0 497.6 0 480V32C0 14.4 14.4 0 32 0H224C241.6 0 256 14.4 256 32V96H176C167.201 96 160 103.199 160 112Z" })
  }
));
RulerVerticalSolid.displayName = "RulerVerticalSolid";
var RulerVertical_default = RulerVerticalSolid;
export {
  RulerVertical_default as default
};
