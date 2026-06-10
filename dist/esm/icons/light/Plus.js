import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const PlusLight = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M432 256C432 264.844 424.844 272 416 272H240V448C240 456.844 232.844 464 224 464S208 456.844 208 448V272H32C23.156 272 16 264.844 16 256S23.156 240 32 240H208V64C208 55.156 215.156 48 224 48S240 55.156 240 64V240H416C424.844 240 432 247.156 432 256Z" })
  }
));
PlusLight.displayName = "PlusLight";
var Plus_default = PlusLight;
export {
  Plus_default as default
};
