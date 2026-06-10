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
var TurkishLiraSign_exports = {};
__export(TurkishLiraSign_exports, {
  default: () => TurkishLiraSign_default
});
module.exports = __toCommonJS(TurkishLiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurkishLiraSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.999 272C383.999 386.688 290.687 480 176 480H80.001C71.157 480 64.001 472.844 64.001 464V260.484L19.877 271.516C18.58 271.844 17.267 272 15.986 272C8.814 272 2.299 267.156 0.486 259.875C-1.67 251.312 3.549 242.625 12.127 240.484L64.001 227.516V164.484L19.877 175.516C18.58 175.844 17.267 176 15.986 176C8.814 176 2.299 171.156 0.486 163.875C-1.67 155.312 3.549 146.625 12.127 144.484L64.001 131.516V48C64.001 39.156 71.157 32 80.001 32S96.001 39.156 96.001 48V123.516L268.125 80.484C276.687 78.297 285.374 83.547 287.515 92.125C289.671 100.687 284.453 109.375 275.874 111.516L96.001 156.484V219.516L268.125 176.484C276.687 174.266 285.374 179.531 287.515 188.125C289.671 196.687 284.453 205.375 275.874 207.516L96.001 252.484V448H176C273.046 448 351.999 369.047 351.999 272C351.999 263.156 359.155 256 367.999 256S383.999 263.156 383.999 272Z" })
  }
));
TurkishLiraSignLight.displayName = "TurkishLiraSignLight";
var TurkishLiraSign_default = TurkishLiraSignLight;
