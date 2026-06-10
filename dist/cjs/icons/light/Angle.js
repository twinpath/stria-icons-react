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
var Angle_exports = {};
__export(Angle_exports, {
  default: () => Angle_default
});
module.exports = __toCommonJS(Angle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AngleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M324.518 402.434C325.737 410.342 332.549 415.998 340.315 415.998C341.128 415.998 341.94 415.936 342.768 415.811C351.503 414.467 357.485 406.279 356.141 397.559C352.298 372.621 345.534 348.121 336.034 324.682C332.706 316.494 323.331 312.432 315.19 315.869C307.003 319.182 303.065 328.494 306.378 336.682C314.956 357.84 321.049 379.965 324.518 402.434ZM432.001 447.998H41.895L238.315 55.143C242.268 47.236 239.065 37.625 231.159 33.672C223.237 29.766 213.659 32.922 209.69 40.828L1.692 456.842C-0.792 461.811 -0.527 467.687 2.395 472.406S10.458 480 16.005 480H432.001C440.844 480 448.001 472.844 448.001 463.998C448.001 455.154 440.844 447.998 432.001 447.998ZM208.753 190.334C203.378 197.35 204.706 207.396 211.721 212.771C232.659 228.805 251.362 247.523 267.315 268.414C270.471 272.523 275.237 274.695 280.049 274.695C283.44 274.695 286.846 273.617 289.753 271.414C296.768 266.039 298.112 256.008 292.753 248.977C275.065 225.836 254.362 205.115 231.19 187.365C224.174 182.006 214.143 183.35 208.753 190.334Z" })
  }
));
AngleLight.displayName = "AngleLight";
var Angle_default = AngleLight;
