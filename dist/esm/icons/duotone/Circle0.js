import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const Circle0Duotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 176C229.531 176 208 197.531 208 224V288C208 314.469 229.531 336 256 336S304 314.469 304 288V224C304 197.531 282.469 176 256 176ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM352 288C352 340.938 308.938 384 256 384S160 340.938 160 288V224C160 171.062 203.062 128 256 128S352 171.062 352 224V288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 128C203.062 128 160 171.062 160 224V288C160 340.938 203.062 384 256 384S352 340.938 352 288V224C352 171.062 308.938 128 256 128ZM304 288C304 314.469 282.469 336 256 336S208 314.469 208 288V224C208 197.531 229.531 176 256 176S304 197.531 304 224V288Z" })
    ]
  }
));
Circle0Duotone.displayName = "Circle0Duotone";
var Circle0_default = Circle0Duotone;
export {
  Circle0_default as default
};
