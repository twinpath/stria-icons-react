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
var CentSign_exports = {};
__export(CentSign_exports, {
  default: () => CentSign_default
});
module.exports = __toCommonJS(CentSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CentSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 445.146V480C192 497.688 206.312 512 224 512S256 497.688 256 480V445.557C245.414 447.354 234.719 448.25 224.031 448.25C213.293 448.25 202.604 446.949 192 445.146ZM224 0C206.312 0 192 14.328 192 32V67.154C213.193 63.549 234.73 63.359 256 66.98V32C256 14.328 241.688 0 224 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.969 348.547C364.969 365.656 362.406 390.844 345.312 404.844C309.719 433.906 266.812 448.25 224.031 448.25C174.781 448.25 125.687 429.219 88.25 391.75C51.969 355.516 32 307.297 32 256S51.969 156.484 88.25 120.234C158.188 50.219 268.719 44.625 345.312 107.156C362.406 121.141 364.969 146.328 350.969 163.438C337 180.594 311.812 183.109 294.688 169.125C250.125 132.703 185.688 135.984 144.812 176.797C123.656 197.953 112 226.078 112 256S123.656 314.047 144.812 335.203C185.688 376.063 250.125 379.281 294.688 342.891C311.812 328.891 337 331.469 350.969 348.547Z" })
    ]
  }
));
CentSignDuotone.displayName = "CentSignDuotone";
var CentSign_default = CentSignDuotone;
