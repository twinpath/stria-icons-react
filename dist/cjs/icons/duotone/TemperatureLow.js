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
var TemperatureLow_exports = {};
__export(TemperatureLow_exports, {
  default: () => TemperatureLow_default
});
module.exports = __toCommonJS(TemperatureLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureLowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 112.001C256 50.126 205.875 0.001 144 0.001S32 50.126 32 112.001V278.501C12.25 303.251 0 334.001 0 368.001C0 447.501 64.5 512.001 144 512.001S288 447.501 288 368.001C288 334.001 275.75 303.126 256 278.501V112.001ZM144 448.001C99.875 448.001 64 412.126 64 368.001C64 342.501 76.25 319.126 96 304.251V112.001C96 85.501 117.5 64.001 144 64.001S192 85.501 192 112.001V304.251C211.75 319.001 224 342.501 224 368.001C224 412.126 188.125 448.001 144 448.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 322.875V304C160 295.25 152.75 288 144 288S128 295.25 128 304V322.875C109.375 329.5 96 347.125 96 368C96 394.5 117.5 416 144 416S192 394.5 192 368C192 347.125 178.625 329.5 160 322.875ZM416 0C363.125 0 320 43.125 320 96S363.125 192 416 192S512 148.875 512 96S468.875 0 416 0ZM416 128C398.25 128 384 113.75 384 96S398.25 64 416 64S448 78.25 448 96S433.75 128 416 128Z" })
    ]
  }
));
TemperatureLowDuotone.displayName = "TemperatureLowDuotone";
var TemperatureLow_default = TemperatureLowDuotone;
