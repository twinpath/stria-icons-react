import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BinocularsDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M400 32H336C327.125 32 320 39.125 320 48V96H416V48C416 39.125 408.875 32 400 32ZM224 288H288V128H224V288ZM176 32H112C103.125 32 96 39.125 96 48V96H192V48C192 39.125 184.875 32 176 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M63.875 160.1C61.336 253.891 3.5 274.295 0 404V448C0 465.6 14.398 480 32 480H160C177.602 480 192 465.6 192 448V288H224V128H95.875C78.258 128 64.352 142.486 63.875 160.1ZM448.125 160.1C447.648 142.486 433.742 128 416.125 128H288V288H320V448C320 465.6 334.398 480 352 480H480C497.602 480 512 465.6 512 448V404C508.5 274.295 450.664 253.891 448.125 160.1Z" })
    ]
  }
));
BinocularsDuotone.displayName = "BinocularsDuotone";
var Binoculars_default = BinocularsDuotone;
export {
  Binoculars_default as default
};
