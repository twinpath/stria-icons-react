import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HammerWarDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M224 267.074V496C224 504.836 216.836 512 208 512H176C167.164 512 160 504.836 160 496V267.074L192 261.75L224 267.074ZM192 58.25L224 52.926V16C224 7.164 216.836 0 208 0H176C167.164 0 160 7.164 160 16V52.926L192 58.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M384 64V256C384 275.75 366.25 290.75 346.75 287.5L192 261.75L37.25 287.5C17.75 290.75 0 275.75 0 256V64C0 44.25 17.75 29.25 37.25 32.5L192 58.25L346.75 32.5C366.25 29.25 384 44.25 384 64Z" })
    ]
  }
));
HammerWarDuotone.displayName = "HammerWarDuotone";
var HammerWar_default = HammerWarDuotone;
export {
  HammerWar_default as default
};
