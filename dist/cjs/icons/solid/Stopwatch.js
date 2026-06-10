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
var Stopwatch_exports = {};
__export(Stopwatch_exports, {
  default: () => Stopwatch_default
});
module.exports = __toCommonJS(Stopwatch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StopwatchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M398.501 190.906L399.094 190.297L425.682 163.725C431.933 157.477 431.935 147.344 425.686 141.094L403.003 118.407C396.754 112.157 386.622 112.157 380.374 118.406L355.688 143.094C327.688 120.094 293.499 104.297 255.999 98.5V64H272.017C289.617 64 304.016 49.6 304.016 32.001V31.999C304.016 14.4 289.617 0 272.017 0H176.015C158.415 0 144.014 14.4 144.014 32.001V32.001C144.014 49.6 158.414 64 176.013 64H191.999V98.5C94.365 113.477 19.154 196.476 16.092 297.588C12.642 411.508 106.768 510.222 220.727 511.972C337.135 513.76 432.001 419.997 432.001 304C432.001 262.203 419.688 223.297 398.501 190.906ZM248.001 328C248.001 341.25 237.251 352 224.001 352S200.001 341.25 200.001 328V216C200.001 202.75 210.751 192 224.001 192S248.001 202.75 248.001 216V328Z" })
  }
));
StopwatchSolid.displayName = "StopwatchSolid";
var Stopwatch_default = StopwatchSolid;
