import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const LockKeyholeDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M416 144V224H352V144C352 99.875 316.109 64 272 64S192 99.875 192 144V224H128V144C128 64.594 192.594 0 272 0S416 64.594 416 144Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M48 288V448C48 483.344 76.654 512 112 512H432C467.346 512 496 483.344 496 448V288C496 252.652 467.346 224 432 224H112C76.654 224 48 252.652 48 288ZM240 352C240 334.328 254.326 320 272 320S304 334.328 304 352V384C304 401.672 289.674 416 272 416S240 401.672 240 384V352Z" })
    ]
  }
));
LockKeyholeDuotone.displayName = "LockKeyholeDuotone";
var LockKeyhole_default = LockKeyholeDuotone;
export {
  LockKeyhole_default as default
};
