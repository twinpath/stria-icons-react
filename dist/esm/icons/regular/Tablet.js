import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const TabletRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM400 448C400 456.822 392.822 464 384 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H384C392.822 48 400 55.178 400 64V448ZM256 400H192C183.164 400 176 407.164 176 416S183.164 432 192 432H256C264.838 432 272 424.836 272 416S264.838 400 256 400Z" })
  }
));
TabletRegular.displayName = "TabletRegular";
var Tablet_default = TabletRegular;
export {
  Tablet_default as default
};
