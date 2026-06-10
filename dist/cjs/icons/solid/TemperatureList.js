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
var TemperatureList_exports = {};
__export(TemperatureList_exports, {
  default: () => TemperatureList_default
});
module.exports = __toCommonJS(TemperatureList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureListSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 322.875V160C160 151.25 152.75 144 144 144S128 151.25 128 160V322.875C109.375 329.5 96 347.125 96 368C96 394.5 117.5 416 144 416S192 394.5 192 368C192 347.125 178.625 329.5 160 322.875ZM256 112C256 50.125 205.875 0 144 0S32 50.125 32 112V278.5C12.25 303.25 0 334 0 368C0 447.5 64.5 512 144 512S288 447.5 288 368C288 334 275.75 303.125 256 278.5V112ZM144 448C99.875 448 64 412.125 64 368C64 342.5 76.25 319.125 96 304.25V112C96 85.5 117.5 64 144 64S192 85.5 192 112V304.25C211.75 319 224 342.5 224 368C224 412.125 188.125 448 144 448ZM352 96H480C497.674 96 512 81.674 512 64S497.674 32 480 32H352C334.326 32 320 46.326 320 64S334.326 96 352 96ZM480 160H352C334.326 160 320 174.326 320 192S334.326 224 352 224H480C497.674 224 512 209.674 512 192S497.674 160 480 160ZM480 288H384C366.326 288 352 302.326 352 320S366.326 352 384 352H480C497.674 352 512 337.674 512 320S497.674 288 480 288Z" })
  }
));
TemperatureListSolid.displayName = "TemperatureListSolid";
var TemperatureList_default = TemperatureListSolid;
