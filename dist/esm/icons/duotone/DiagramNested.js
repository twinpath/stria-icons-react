import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const DiagramNestedDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M288 432H176C123.062 432 80 388.938 80 336V224H144V336C144 353.656 158.344 368 176 368H288V432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0ZM464 288H336C309.49 288 288 309.49 288 336V464C288 490.51 309.49 512 336 512H464C490.51 512 512 490.51 512 464V336C512 309.49 490.51 288 464 288Z" })
    ]
  }
));
DiagramNestedDuotone.displayName = "DiagramNestedDuotone";
var DiagramNested_default = DiagramNestedDuotone;
export {
  DiagramNested_default as default
};
