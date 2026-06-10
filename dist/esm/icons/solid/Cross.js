import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CrossSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 160V224C384 241.625 369.625 256 352 256H256V480C256 497.625 241.625 512 224 512H160C142.375 512 128 497.625 128 480V256H32C14.375 256 0 241.625 0 224V160C0 142.375 14.375 128 32 128H128V32C128 14.375 142.375 0 160 0H224C241.625 0 256 14.375 256 32V128H352C369.625 128 384 142.375 384 160Z" })
  }
));
CrossSolid.displayName = "CrossSolid";
var Cross_default = CrossSolid;
export {
  Cross_default as default
};
