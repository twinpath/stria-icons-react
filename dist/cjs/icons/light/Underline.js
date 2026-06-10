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
var Underline_exports = {};
__export(Underline_exports, {
  default: () => Underline_default
});
module.exports = __toCommonJS(Underline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnderlineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 32H64V250.382C64 335.532 128.138 409.98 213.1 415.636C306.265 421.838 384 347.856 384 256V32H432C440.8 32 448 24.8 448 16S440.8 0 432 0H304C295.2 0 288 7.2 288 16S295.2 32 304 32H352V251.681C352 319.891 300.469 379.4 232.396 383.732C157.836 388.477 96 329.528 96 256V32H144C152.8 32 160 24.8 160 16S152.8 0 144 0H16C7.2 0 0 7.2 0 16S7.2 32 16 32ZM432 480H16C7.2 480 0 487.2 0 496S7.2 512 16 512H432C440.8 512 448 504.8 448 496S440.8 480 432 480Z" })
  }
));
UnderlineLight.displayName = "UnderlineLight";
var Underline_default = UnderlineLight;
