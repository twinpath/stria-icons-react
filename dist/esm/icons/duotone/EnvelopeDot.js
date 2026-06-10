import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const EnvelopeDotDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M48.287 145.305L260.469 310.359C276.662 322.955 299.338 322.955 315.531 310.359L509.186 159.717C457.498 158.191 416 116.057 416 64H80C53.49 64 32 85.49 32 112C32 125.02 38.01 137.311 48.287 145.305ZM335.178 335.812C321.756 346.25 305.002 352 288 352S254.244 346.25 240.82 335.811L32 173.369V400C32 426.51 53.49 448 80 448H496C522.51 448 544 426.51 544 400V173.371L335.178 335.812Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M512 0C547.346 0 576 28.654 576 64S547.346 128 512 128S448 99.346 448 64S476.654 0 512 0Z" })
    ]
  }
));
EnvelopeDotDuotone.displayName = "EnvelopeDotDuotone";
var EnvelopeDot_default = EnvelopeDotDuotone;
export {
  EnvelopeDot_default as default
};
