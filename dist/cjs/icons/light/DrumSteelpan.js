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
var DrumSteelpan_exports = {};
__export(DrumSteelpan_exports, {
  default: () => DrumSteelpan_default
});
module.exports = __toCommonJS(DrumSteelpan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumSteelpanLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C129 32 0 89.25 0 160V352C0 422.75 129 480 288 480S576 422.75 576 352V160C576 89.25 447 32 288 32ZM288 64C313.625 64 338.375 65.5 361.875 68.125L346.375 128.125C341.875 145.75 315.625 160 288 160S234.125 145.75 229.625 128.125L214.125 68.125C237.625 65.5 262.375 64 288 64ZM382.875 249.125C353.5 253.5 321.5 256 288 256C254.25 256 221.999 253.5 192.5 249C212.625 229.375 225.875 203.625 229.625 175.5C245.999 185.875 266.625 192 288 192C309 192 329.5 186.125 345.625 176C349.375 204.125 362.75 229.75 382.875 249.125ZM178.25 73.375L195.25 133.375C207.25 176.125 187.625 220.125 150.5 240.875C79.375 223.875 32 194 32 160C32 121.75 91.875 88.75 178.25 73.375ZM544 352C544 391.125 444.25 448 288 448S32 391.125 32 352V218.5C79.75 259.75 176.375 288 288 288S496.25 259.75 544 218.5V352ZM425.625 240.875C389.625 222.125 369 181 378.625 139.75L394.25 72.75C482.5 87.875 544 121.25 544 160C544 194 496.75 223.75 425.625 240.875Z" })
  }
));
DrumSteelpanLight.displayName = "DrumSteelpanLight";
var DrumSteelpan_default = DrumSteelpanLight;
