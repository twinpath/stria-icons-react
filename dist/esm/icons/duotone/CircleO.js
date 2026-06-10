import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleODuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 384C185.422 384 128 326.578 128 256S185.422 128 256 128S384 185.422 384 256S326.578 384 256 384ZM256 176C211.891 176 176 211.891 176 256S211.891 336 256 336S336 300.109 336 256S300.109 176 256 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 128C185.422 128 128 185.422 128 256S185.422 384 256 384S384 326.578 384 256S326.578 128 256 128ZM256 336C211.891 336 176 300.109 176 256S211.891 176 256 176S336 211.891 336 256S300.109 336 256 336Z" })
    ]
  }
));
CircleODuotone.displayName = "CircleODuotone";
var CircleO_default = CircleODuotone;
export {
  CircleO_default as default
};
