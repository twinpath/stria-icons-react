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
var PenSlash_exports = {};
__export(PenSlash_exports, {
  default: () => PenSlash_default
});
module.exports = __toCommonJS(PenSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.308 113.934L462.07 196.694L411.825 246.934L437.115 266.899L557.254 146.774C582.25 121.782 582.252 81.258 557.26 56.264L519.748 18.748C507.252 6.25 490.869 0 474.492 0C458.109 0 441.73 6.248 429.232 18.75L294.042 153.946L319.331 173.912L379.308 113.934ZM451.861 41.377C457.906 35.33 465.943 32.002 474.492 32.002C483.039 32.002 491.076 35.33 497.121 41.375L534.631 78.889C540.674 84.934 544.002 92.969 544.002 101.518C544.002 110.065 540.672 118.1 534.629 124.145L484.697 174.073L401.931 91.307L451.861 41.377ZM207.184 451.557L201.281 454.715L199.188 455.836L100.404 475.594L120.158 376.807L124.172 369.305L124.437 368.809L228.188 265.057L202.897 245.09L98.459 349.533C95.478 355.104 92.689 360.315 89.707 365.885L64.318 492.854C62.296 502.967 70.156 511.998 79.947 511.998C80.994 511.998 82.062 511.895 83.144 511.68L210.11 486.285C215.678 483.305 220.891 480.516 226.459 477.535L345.964 358.041L320.675 338.076L207.184 451.557ZM633.924 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.08 508.563C617.018 510.875 620.518 512 623.987 512C628.721 512 633.409 509.906 636.565 505.922C642.034 498.984 640.846 488.92 633.924 483.436Z" })
  }
));
PenSlashLight.displayName = "PenSlashLight";
var PenSlash_default = PenSlashLight;
