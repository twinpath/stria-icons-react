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
var TemperatureHalf_exports = {};
__export(TemperatureHalf_exports, {
  default: () => TemperatureHalf_default
});
module.exports = __toCommonJS(TemperatureHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureHalfLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.001 384C208.001 410.5 186.501 432 160.001 432S112.001 410.5 112.001 384C112.001 363.125 125.376 345.375 144.001 338.75V208C144.001 199.125 151.126 192 160.001 192S176.001 199.125 176.001 208V338.75C194.626 345.375 208.001 363.125 208.001 384ZM256 299.375C275.875 321.875 288 351.5 288 384C288 454.75 230.75 512 160.001 512C159.751 512 159.376 512 159.126 512C88.751 511.5 31.627 453.625 32.002 383.375C32.127 351.125 44.252 321.75 64.002 299.375V96C64.002 43 107.001 0 160.001 0S256 43 256 96V299.375ZM256 384C256 344.125 233.125 321.875 224 311.5V96C224 60.75 195.251 32 160.001 32S96.001 60.75 96.001 96V311.5C86.501 322.125 64.252 344 64.002 383.5C63.752 436.25 106.626 479.625 159.376 480H160.001C212.876 480 256 436.875 256 384Z" })
  }
));
TemperatureHalfLight.displayName = "TemperatureHalfLight";
var TemperatureHalf_default = TemperatureHalfLight;
