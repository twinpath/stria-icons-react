import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const FaceMehBlankDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240ZM336.043 240C318.242 240 303.953 225.75 303.953 208S318.242 176 336.043 176C353.723 176 368.012 190.25 368.012 208S353.723 240 336.043 240Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M175.969 240C158.289 240 144 225.75 144 208S158.289 176 175.969 176C193.77 176 208.059 190.25 208.059 208S193.77 240 175.969 240ZM336.055 240C318.254 240 303.965 225.75 303.965 208S318.254 176 336.055 176C353.734 176 368.023 190.25 368.023 208S353.734 240 336.055 240Z" })
    ]
  }
));
FaceMehBlankDuotone.displayName = "FaceMehBlankDuotone";
var FaceMehBlank_default = FaceMehBlankDuotone;
export {
  FaceMehBlank_default as default
};
