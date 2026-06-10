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
var Music_exports = {};
__export(Music_exports, {
  default: () => Music_default
});
module.exports = __toCommonJS(Music_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M481.5 0C478.25 0 475.125 0.5 472.25 1.5L181.375 97.5C168.75 101.75 160 114 160 128V372.75C143 360 120.75 352 96 352C43 352 0 387.75 0 432S43 512 96 512S192 476.25 192 432V256L480 160V308.75C463 296 440.75 288 416 288C363 288 320 323.75 320 368S363 448 416 448S512 412.25 512 368V32C512 13.75 497.75 0 481.5 0ZM96 480C61.25 480 32 458.001 32 432C32 406.001 61.25 384 96 384S160 406.001 160 432C160 458.001 130.75 480 96 480ZM416 416C381.25 416 352 394.001 352 368C352 342 381.25 320 416 320S480 342 480 368C480 394.001 450.75 416 416 416ZM480 126.25L192 222.25V128H191.5V127.875L480 32.625V126.25Z" })
  }
));
MusicLight.displayName = "MusicLight";
var Music_default = MusicLight;
