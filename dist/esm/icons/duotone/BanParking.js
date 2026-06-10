import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const BanParkingDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M176 352C176 369.6 190.4 384 208 384H208C225.6 384 240 369.6 240 352V334.945L176 284.783V352ZM272 128H208C190.4 128 176 142.4 176 160V162.799L240 212.961V192H272C289.625 192 304 206.375 304 224C304 235.529 297.523 245.211 288.336 250.846L339.395 290.863C352.574 278.154 362.412 262.098 366.113 243.23C378.125 181.998 331.166 128 272 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 432C158.953 432 80 353.047 80 256C80 223.707 88.893 193.516 104.135 167.471L378.264 382.328C346.57 413.01 303.49 432 256 432ZM407.865 344.529L133.736 129.672C165.43 98.99 208.51 80 256 80C353.047 80 432 158.953 432 256C432 288.293 423.107 318.484 407.865 344.529Z" })
    ]
  }
));
BanParkingDuotone.displayName = "BanParkingDuotone";
var BanParking_default = BanParkingDuotone;
export {
  BanParking_default as default
};
