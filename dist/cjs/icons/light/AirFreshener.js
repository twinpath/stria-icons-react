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
var AirFreshener_exports = {};
__export(AirFreshener_exports, {
  default: () => AirFreshener_default
});
module.exports = __toCommonJS(AirFreshener_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirFreshenerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.999 88C178.745 88 167.999 98.746 167.999 112S178.745 136 191.999 136S215.999 125.254 215.999 112S205.253 88 191.999 88ZM376.495 330.512L301.154 239.713H338.966C351.825 239.713 363.138 232.627 368.48 221.225C373.605 210.275 371.964 197.654 364.185 188.283L217.234 11.191C211.046 3.73 201.523 0 191.999 0S172.952 3.73 166.765 11.191L19.814 188.283C12.034 197.654 10.394 210.275 15.519 221.225C20.861 232.627 32.173 239.713 45.033 239.713H82.845L7.503 330.512C-0.559 340.225 -2.262 353.316 3.066 364.674C8.613 376.514 20.361 383.865 33.736 383.865H175.999V415.898H64.001C46.327 415.898 32.001 430.24 32.001 447.932V479.967C32.001 497.658 46.327 512 64.001 512H319.997C337.671 512 351.997 497.658 351.997 479.967V447.932C351.997 430.24 337.671 415.898 319.997 415.898H207.999V383.865H350.263C363.638 383.865 375.386 376.514 380.933 364.674C386.261 353.316 384.558 340.225 376.495 330.512ZM319.997 447.932V479.967H64.001V447.932H319.997ZM32.126 350.971L129.251 233.926C137.911 223.471 130.421 207.68 116.939 207.68L44.423 208.76L191.999 32.377L339.575 208.76L267.06 207.68C253.577 207.68 246.087 223.471 254.747 233.926L351.872 350.971H32.126Z" })
  }
));
AirFreshenerLight.displayName = "AirFreshenerLight";
var AirFreshener_default = AirFreshenerLight;
