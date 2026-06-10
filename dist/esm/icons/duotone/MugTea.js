import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MugTeaDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M448 64H416V128H448C483.375 128 512 156.625 512 192S483.375 256 448 256H416V320H448C518.75 320 576 262.75 576 192S518.75 64 448 64ZM176.002 128V64H144.002V128L105.375 166.625C99.375 172.625 96 180.75 96 189.25V256C96 273.625 110.375 288 128 288H192.002C209.627 288 224.002 273.625 224.002 256V189.25C224.002 180.75 220.627 172.625 214.627 166.625L176.002 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M416 64V352C416 405 373 448 320 448H128C75 448 32 405 32 352V88C32 72.977 44.418 64 56 64H144.002V128L105.375 166.625C99.375 172.625 96 180.75 96 189.25V256C96 273.625 110.375 288 128 288H192.002C209.627 288 224.002 273.625 224.002 256V189.25C224.002 180.75 220.627 172.625 214.627 166.625L176.002 128V64H416Z" })
    ]
  }
));
MugTeaDuotone.displayName = "MugTeaDuotone";
var MugTea_default = MugTeaDuotone;
export {
  MugTea_default as default
};
