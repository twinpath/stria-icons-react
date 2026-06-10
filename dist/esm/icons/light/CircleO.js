import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CircleOLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M256 128C185.422 128 128 185.422 128 256S185.422 384 256 384S384 326.578 384 256S326.578 128 256 128ZM256 352C203.062 352 160 308.938 160 256S203.062 160 256 160S352 203.062 352 256S308.938 352 256 352ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
CircleOLight.displayName = "CircleOLight";
var CircleO_default = CircleOLight;
export {
  CircleO_default as default
};
