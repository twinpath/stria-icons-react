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
const CentSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.969 348.562C364.969 365.672 362.406 390.859 345.312 404.844C318.613 426.643 287.783 440.162 256 445.557V480C256 497.672 241.688 512 224 512S192 497.672 192 480V445.148C153.957 438.686 117.527 421.068 88.25 391.766C51.969 355.516 32 307.297 32 256S51.969 156.484 88.25 120.234C117.516 90.93 153.979 73.609 192 67.143V32C192 14.328 206.312 0 224 0S256 14.328 256 32V66.971C287.764 72.379 318.635 85.371 345.312 107.156C362.406 121.141 364.969 146.328 350.969 163.438C337 180.578 311.844 183.109 294.688 169.125C250.094 132.687 185.656 135.969 144.812 176.797C123.656 197.953 112 226.078 112 256S123.656 314.047 144.812 335.203C185.594 376.047 250.094 379.313 294.688 342.875C311.844 328.891 337.031 331.453 350.969 348.562Z" })
  }
));
CentSignSolid.displayName = "CentSignSolid";
var CentSign_default = CentSignSolid;
