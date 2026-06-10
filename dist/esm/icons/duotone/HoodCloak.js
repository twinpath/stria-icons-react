import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const HoodCloakDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M287.998 192C217.374 192 160 249.25 160 320V512H415.995V320C415.995 249.25 358.746 192 287.998 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M575.995 480C575.745 496.5 562.495 512 543.62 512H416.248V320C416.248 249.25 358.999 192 288.25 192C217.626 192 160.252 249.25 160.252 320V512H32.38C13.505 512 0.256 496.5 0.006 480C-0.119 473.5 1.88 466.75 6.38 460.875C64.004 383.875 64.004 320 64.004 320V256C64.004 109.5 192.002 0 287.625 0H436.747C454.247 0 462.997 21.125 450.622 33.5L410.873 73.25C465.622 133 511.996 172 511.996 256V320C511.996 320 511.996 383.875 569.62 460.875C574.12 466.75 576.12 473.5 575.995 480Z" })
    ]
  }
));
HoodCloakDuotone.displayName = "HoodCloakDuotone";
var HoodCloak_default = HoodCloakDuotone;
export {
  HoodCloak_default as default
};
