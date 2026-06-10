var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var AlarmExclamation_exports = {};
__export(AlarmExclamation_exports, {
  default: () => AlarmExclamation_default
});
module.exports = __toCommonJS(AlarmExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlarmExclamationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 480.005C480 471.793 476.873 463.581 470.619 457.348L435.25 421.949C464.375 383.328 480 336.333 480 287.964C480 165.11 383.634 63.993 256 63.993C132.25 63.993 32 164.229 32 287.965C32 336.334 47.75 383.328 76.75 421.949L41.334 457.455C35.112 463.697 32 471.867 32 480.038C32 488.838 38.935 511.999 64 511.999C72.214 511.999 80.429 508.873 86.664 502.619L122 467.193C161.688 497.064 208.844 512 256 512S350.312 497.064 390 467.193L425.443 502.664C431.687 508.888 439.859 512 448.032 512C456.865 512 480 505.062 480 480.005ZM232 184C232 170.75 242.75 160 256 160S280 170.75 280 184V296C280 309.25 269.25 320 256 320S232 309.25 232 296V184ZM256 416C238.326 416 224 401.672 224 384S238.326 352 256 352S288 366.328 288 384S273.674 416 256 416Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 320C269.25 320 280 309.25 280 296V184C280 170.75 269.25 160 256 160S232 170.75 232 184V296C232 309.25 242.75 320 256 320ZM0 95.988C0.125 114.236 5.375 131.984 15.25 147.232L161.25 25.621C143.5 9.123 120.25 0 96 0C43 0 0 42.994 0 95.988ZM416 0C391.75 0 368.5 9.123 350.875 25.621L496.75 147.232C506.625 131.984 511.875 114.236 512 95.988C512 42.994 469 0 416 0ZM256 352C238.326 352 224 366.328 224 384S238.326 416 256 416S288 401.672 288 384S273.674 352 256 352Z " })
    ]
  }
));
AlarmExclamationDuotone.displayName = "AlarmExclamationDuotone";
var AlarmExclamation_default = AlarmExclamationDuotone;
