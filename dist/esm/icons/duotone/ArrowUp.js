import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowUpDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
    children: [
      /* @__PURE__ */ jsx("path", { d: "M224 127.188L264 165.18V440C264 462.094 246.094 480 224 480S184 462.094 184 440V165.18L224 127.188Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M251.547 43L411.547 195C427.562 210.219 428.218 235.531 413 251.562C397.781 267.531 372.437 268.187 356.453 253L224 127.188L91.547 253C75.578 268.188 50.234 267.5 35 251.562C19.781 235.531 20.437 210.219 36.453 195L196.453 43C204.172 35.656 214.078 32 224 32S243.828 35.656 251.547 43Z" })
    ]
  }
));
ArrowUpDuotone.displayName = "ArrowUpDuotone";
var ArrowUp_default = ArrowUpDuotone;
export {
  ArrowUp_default as default
};
