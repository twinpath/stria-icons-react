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
var Stamp_exports = {};
__export(Stamp_exports, {
  default: () => Stamp_default
});
module.exports = __toCommonJS(Stamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StampLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 256H349.5C333.125 256 320 242.875 320 226.5V217.125C320 189.75 328.875 163.625 341.5 139.375C350.625 121.75 354.375 101 350.5 79C343.75 40.125 312 8.25 273.25 1.5C267.375 0.5 261.625 0 256 0C203 0 160 43 160 96C160 110.125 163.125 123.5 168.625 135.625C182 164.375 192 194.75 192 226.5C192 242.875 178.875 256 162.5 256H96C43 256 0 299 0 352V384C0 401.625 14.375 416 32 416H480C497.625 416 512 401.625 512 384V352C512 299 469 256 416 256ZM480 384H32V352C32 316.75 60.75 288 96 288H162.5C196.5 288 224 260.5 224 226.5C224 194.125 215.625 160.875 197.75 122.125C193.875 113.875 192 105.125 192 96C192 60.75 220.75 32 256 32C259.875 32 263.875 32.375 267.75 33C293 37.375 314.5 59 319 84.5C321.375 98.5 319.375 112.375 313 124.625C296.25 157.25 288 187.5 288 217.125V226.5C288 260.5 315.5 288 349.5 288H416C451.25 288 480 316.75 480 352V384ZM464 448C455.156 448 448 455.156 448 464C448 472.828 440.828 480 432 480H80C71.172 480 64 472.828 64 464C64 455.156 56.844 448 48 448S32 455.156 32 464C32 490.469 53.531 512 80 512H432C458.469 512 480 490.469 480 464C480 455.156 472.844 448 464 448Z" })
  }
));
StampLight.displayName = "StampLight";
var Stamp_default = StampLight;
