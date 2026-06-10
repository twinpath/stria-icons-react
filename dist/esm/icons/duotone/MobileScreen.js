import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const MobileScreenDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M304 0H80C53.5 0 32 21.5 32 48V464C32 490.5 53.5 512 80 512H304C330.5 512 352 490.5 352 464V48C352 21.5 330.5 0 304 0ZM240 448C240 456.837 232.837 464 224 464H160C151.163 464 144 456.837 144 448V448C144 439.163 151.163 432 160 432H224C232.837 432 240 439.163 240 448V448ZM288 384H96V64H288V384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M288 384H96V64H288V384Z" })
    ]
  }
));
MobileScreenDuotone.displayName = "MobileScreenDuotone";
var MobileScreen_default = MobileScreenDuotone;
export {
  MobileScreen_default as default
};
