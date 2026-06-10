import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ArrowDownRightDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M231.438 351.981L27.719 148.263C12.094 132.638 12.094 107.325 27.719 91.7S68.656 76.075 84.281 91.7L288 295.419V351.981H231.438Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M288 352V184C288 161.906 305.906 144 328 144S368 161.906 368 184V392C368 414.094 350.094 432 328 432H120C97.906 432 80 414.094 80 392S97.906 352 120 352H288Z" })
    ]
  }
));
ArrowDownRightDuotone.displayName = "ArrowDownRightDuotone";
var ArrowDownRight_default = ArrowDownRightDuotone;
export {
  ArrowDownRight_default as default
};
