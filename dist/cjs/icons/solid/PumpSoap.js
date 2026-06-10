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
var PumpSoap_exports = {};
__export(PumpSoap_exports, {
  default: () => PumpSoap_default
});
module.exports = __toCommonJS(PumpSoap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PumpSoapSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M235.631 160H84.369C51.268 160 23.629 185.24 20.631 218.205L0.268 442.205C-3.138 479.686 26.371 512 64.006 512H255.994C293.629 512 323.139 479.686 319.733 442.205L299.369 218.205C296.371 185.24 268.733 160 235.631 160ZM160 416C124.668 416 96 389.672 96 357.25C96 332.25 134.084 281.781 151.5 259.984C155.75 254.672 164.25 254.672 168.5 259.984C185.918 281.781 224 332.25 224 357.25C224 389.672 195.334 416 160 416ZM379.315 94.061L335.991 50.738C323.993 38.74 307.721 32 290.752 32H224C224 14.326 209.674 0 192 0H128C110.326 0 96 14.326 96 32V128H224V96H290.752L334.065 139.311C340.313 145.559 350.444 145.559 356.692 139.311L379.315 116.688C385.563 110.439 385.563 100.309 379.315 94.061Z" })
  }
));
PumpSoapSolid.displayName = "PumpSoapSolid";
var PumpSoap_default = PumpSoapSolid;
