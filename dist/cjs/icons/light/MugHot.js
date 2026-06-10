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
var MugHot_exports = {};
__export(MugHot_exports, {
  default: () => MugHot_default
});
module.exports = __toCommonJS(MugHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugHotLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 192H32C14.328 192 0 206.326 0 224V416C0 469.02 42.98 512 96 512H288C341.02 512 384 469.02 384 416H400C461.75 416 512 365.75 512 304S461.75 192 400 192ZM352 416C352 451.289 323.291 480 288 480H96C60.711 480 32 451.289 32 416V224H352V416ZM400 384H384V224H400C444.125 224 480 259.875 480 304S444.125 384 400 384ZM104.844 94.312C119.125 101.453 128 115.812 128 131.781V144C128 152.844 135.156 160 144 160S160 152.844 160 144V131.781C160 103.625 144.344 78.297 119.156 65.688C104.875 58.547 96 44.188 96 28.219V16C96 7.156 88.844 0 80 0S64 7.156 64 16V28.219C64 56.375 79.656 81.703 104.844 94.312ZM232.844 94.312C247.125 101.453 256 115.812 256 131.781V144C256 152.844 263.156 160 272 160S288 152.844 288 144V131.781C288 103.625 272.344 78.297 247.156 65.688C232.875 58.547 224 44.188 224 28.219V16C224 7.156 216.844 0 208 0S192 7.156 192 16V28.219C192 56.375 207.656 81.703 232.844 94.312Z" })
  }
));
MugHotLight.displayName = "MugHotLight";
var MugHot_default = MugHotLight;
