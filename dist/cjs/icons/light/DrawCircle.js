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
var DrawCircle_exports = {};
__export(DrawCircle_exports, {
  default: () => DrawCircle_default
});
module.exports = __toCommonJS(DrawCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrawCircleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 222.5 486.125 195.25 453.375 192.5C432.875 129 383 79.125 319.5 58.625C316.75 25.875 289.5 0 256 0S195.25 25.875 192.5 58.625C129 79.125 79.125 129 58.625 192.5C25.875 195.25 0 222.5 0 256S25.875 316.75 58.625 319.5C79.125 383 129 432.875 192.5 453.375C195.25 486.125 222.5 512 256 512S316.75 486.125 319.5 453.375C383 432.875 432.875 383 453.375 319.5C486.125 316.75 512 289.5 512 256ZM256 32C273.625 32 288 46.375 288 64S273.625 96 256 96C238.375 96 224 81.625 224 64S238.375 32 256 32ZM32 256C32 238.375 46.375 224 64 224S96 238.375 96 256S81.625 288 64 288S32 273.625 32 256ZM256 480C238.375 480 224 465.625 224 448S238.375 416 256 416C273.625 416 288 430.375 288 448S273.625 480 256 480ZM314.125 421.5C304 399.375 281.875 384 256 384C230.125 384 208 399.375 197.875 421.5C147.75 403.875 108.125 364.25 90.5 314.125C112.625 304 128 281.875 128 256S112.625 208 90.5 197.875C108.125 147.75 147.75 108.125 197.875 90.5C208 112.625 230.125 128 256 128C281.875 128 304 112.625 314.125 90.5C364.25 108.125 403.875 147.75 421.5 197.875C399.375 208 384 230.125 384 256S399.375 304 421.5 314.125C403.875 364.25 364.25 403.875 314.125 421.5ZM448 288C430.375 288 416 273.625 416 256S430.375 224 448 224S480 238.375 480 256S465.625 288 448 288Z" })
  }
));
DrawCircleLight.displayName = "DrawCircleLight";
var DrawCircle_default = DrawCircleLight;
