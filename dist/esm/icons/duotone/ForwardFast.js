import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ForwardFastDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M512 96.034V415.969C512 433.641 497.674 447.968 480.001 447.968H480.001C462.327 447.968 448 433.64 448 415.966V96.031C448 78.359 462.326 64.032 479.999 64.032H479.999C497.673 64.032 512 78.36 512 96.034Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M448 284.12L276.5 440.594C255.875 457.716 224 443.343 224 415.973V284.12L52.5 440.594C31.875 457.716 0 443.343 0 415.973V96.027C0 68.657 31.875 54.284 52.5 71.406L224 226.755V96.027C224 68.657 255.875 54.284 276.5 71.406L448 226.755V284.12Z" })
    ]
  }
));
ForwardFastDuotone.displayName = "ForwardFastDuotone";
var ForwardFast_default = ForwardFastDuotone;
export {
  ForwardFast_default as default
};
