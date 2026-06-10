import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const CalendarMinusRegular = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448ZM143.998 351.998H304.002C317.262 351.998 328 341.258 328 328S317.262 304.002 304.002 304.002H143.998C130.738 304.002 120 314.742 120 328C120 341.256 130.73 351.998 143.998 351.998Z" })
  }
));
CalendarMinusRegular.displayName = "CalendarMinusRegular";
var CalendarMinus_default = CalendarMinusRegular;
export {
  CalendarMinus_default as default
};
