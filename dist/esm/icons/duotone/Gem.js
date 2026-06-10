import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const GemDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 192L400 64H112L256 192ZM222.25 224L112 64L0 224H222.25ZM512 224L400 64L289.75 224H512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M512 224L267.688 474.938C264.656 478.172 260.438 480 256 480S247.344 478.172 244.312 474.938L0 224H512Z" })
    ]
  }
));
GemDuotone.displayName = "GemDuotone";
var Gem_default = GemDuotone;
export {
  Gem_default as default
};
