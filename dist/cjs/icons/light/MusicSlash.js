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
var MusicSlash_exports = {};
__export(MusicSlash_exports, {
  default: () => MusicSlash_default
});
module.exports = __toCommonJS(MusicSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.925 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.92 633.925 483.436ZM544.001 32.625V126.25L343.583 193.057L373.642 216.787L544.001 160V308.75C527.001 296 504.751 288 480.001 288C474.999 288 470.192 288.611 465.396 289.225L575.058 375.803C575.364 373.197 576.001 370.674 576.001 368V32C576.001 13.75 561.751 0 545.501 0C542.251 0 539.126 0.5 536.251 1.5L245.376 97.5C240.534 99.131 236.528 102.199 233.101 105.83L259.396 126.59L544.001 32.625ZM224.001 372.75C207.001 360 184.751 352 160.001 352C107.001 352 64.001 387.75 64.001 432S107.001 512 160.001 512S256.001 476.25 256.001 432V287.014L224.001 261.75V372.75ZM160.001 480C125.251 480 96.001 458 96.001 432S125.251 384 160.001 384S224.001 406 224.001 432S194.751 480 160.001 480Z" })
  }
));
MusicSlashLight.displayName = "MusicSlashLight";
var MusicSlash_default = MusicSlashLight;
