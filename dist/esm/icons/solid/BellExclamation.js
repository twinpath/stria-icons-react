import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BellExclamationSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M224 512C259.375 512 288 483.375 288 448H160C160 483.375 188.625 512 224 512ZM439.375 362.25C420.125 341.5 383.875 310.25 383.875 208C383.875 130.25 329.5 68.125 256 52.875V32C256 14.375 241.625 0 224 0C206.25 0 192 14.375 192 32V52.875C118.5 68.125 64.125 130.25 64.125 208C64.125 310.25 27.875 341.5 8.625 362.25C3 368.125 0 375.875 0 384C0.125 400.375 13 416 32.125 416H415.875C435 416 447.875 400.375 448 384C448 375.875 445 368.125 439.375 362.25ZM200 136C200 122.75 210.75 112 224 112S248 122.75 248 136V232C248 245.25 237.25 256 224 256S200 245.25 200 232V136ZM224 352C206.326 352 192 337.672 192 320S206.326 288 224 288S256 302.328 256 320S241.674 352 224 352Z" })
  }
));
BellExclamationSolid.displayName = "BellExclamationSolid";
var BellExclamation_default = BellExclamationSolid;
export {
  BellExclamation_default as default
};
