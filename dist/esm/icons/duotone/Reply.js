import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ReplyDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M224 136.064C384.626 137.907 512.002 170.095 512.002 322.329C512.002 383.767 472.408 444.642 428.658 476.454C415.001 486.392 395.564 473.923 400.595 457.829C445.939 312.814 379.095 274.314 224 272.079V136.064Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M8.309 189.845L184.31 37.845C199.716 24.548 223.998 35.345 223.998 56.017V360.001C223.998 380.704 199.685 391.454 184.31 378.157L8.309 226.157C-2.754 216.595 -2.785 199.407 8.309 189.845Z" })
    ]
  }
));
ReplyDuotone.displayName = "ReplyDuotone";
var Reply_default = ReplyDuotone;
export {
  Reply_default as default
};
