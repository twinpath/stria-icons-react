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
var CediSign_exports = {};
__export(CediSign_exports, {
  default: () => CediSign_default
});
module.exports = __toCommonJS(CediSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CediSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M294.703 342.906C282.926 352.512 269.738 359.172 256 363.289V148.705C269.734 152.828 282.92 159.492 294.703 169.094C311.781 183.125 337.016 180.531 350.984 163.438C364.953 146.313 362.406 121.125 345.297 107.156C318.633 85.375 287.766 72.391 256 66.988V32C256 14.312 241.672 0 224 0S192 14.312 192 32V67.172C153.977 73.643 117.506 90.959 88.234 120.25C51.969 156.5 32 204.719 32 256S51.969 355.5 88.234 391.75C117.523 421.051 153.963 438.68 192 445.146V480C192 497.688 206.328 512 224 512S256 497.688 256 480V445.557C287.787 440.162 318.607 426.645 345.297 404.844C362.406 390.875 364.953 365.688 350.984 348.562C336.984 331.5 311.766 328.875 294.703 342.906ZM144.797 335.188C123.641 314.031 112 285.906 112 256S123.641 197.969 144.797 176.812C158.412 163.182 174.748 154.135 192 148.947V363.023C174.748 357.836 158.41 348.795 144.797 335.188Z" })
  }
));
CediSignSolid.displayName = "CediSignSolid";
var CediSign_default = CediSignSolid;
