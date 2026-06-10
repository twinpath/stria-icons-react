import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BookMedicalDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M416 384V448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384H416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M96 384H424C437.254 384 448 373.254 448 360V32C448 14.326 433.674 0 416 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 458.744 437.254 448 424 448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384ZM128 166C128 157.162 135.164 150 144 150H198V96C198 87.162 205.164 80 214 80H266C274.836 80 282 87.162 282 96V150H336C344.836 150 352 157.162 352 166V218C352 226.836 344.836 234 336 234H282V288C282 296.836 274.836 304 266 304H214C205.164 304 198 296.836 198 288V234H144C135.164 234 128 226.836 128 218V166Z" })
    ]
  }
));
BookMedicalDuotone.displayName = "BookMedicalDuotone";
var BookMedical_default = BookMedicalDuotone;
export {
  BookMedical_default as default
};
