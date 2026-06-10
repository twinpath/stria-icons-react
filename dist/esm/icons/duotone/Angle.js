import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const AngleDuotone = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("path", { d: "M235.818 181.238L214 224.771C233.391 240.582 250.508 258.986 265.234 279.254L305.65 253.271C286.086 225.893 262.527 201.66 235.818 181.238ZM323 280.186L282.666 306.113C296.346 330.148 306.615 356.309 312.932 384H362.066C354.861 346.818 341.4 311.928 323 280.186Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ jsx("path", { d: "M416.009 480H32.009C20.915 480 10.634 474.25 4.79 464.828C-1.053 455.391 -1.585 443.609 3.384 433.688L195.384 49.688C203.322 33.875 222.509 27.484 238.322 35.375C254.134 43.281 260.54 62.5 252.634 78.313L83.79 416H416.009C433.697 416 448.009 430.328 448.009 448S433.697 480 416.009 480Z" })
    ]
  }
));
AngleDuotone.displayName = "AngleDuotone";
var Angle_default = AngleDuotone;
export {
  Angle_default as default
};
