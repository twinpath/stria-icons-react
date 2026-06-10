import { jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
const ManatSignSolid = forwardRef(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("path", { d: "M368 272V440C368 462.094 350.094 480 328 480S288 462.094 288 440V272C288 245.875 277.688 221.469 258.969 203.219C248.863 193.375 236.891 186.207 224 181.621V448C224 465.688 209.672 480 192 480S160 465.688 160 448V181.869C122.555 194.986 96 229.984 96 272V440C96 462.094 78.094 480 56 480S16 462.094 16 440V272C16 185.285 77.461 114.467 160 99.465V64C160 46.312 174.328 32 192 32S224 46.312 224 64V99.068C257.955 105.293 289.404 121.199 314.781 145.906C349.109 179.344 368 224.094 368 272Z" })
  }
));
ManatSignSolid.displayName = "ManatSignSolid";
var ManatSign_default = ManatSignSolid;
export {
  ManatSign_default as default
};
