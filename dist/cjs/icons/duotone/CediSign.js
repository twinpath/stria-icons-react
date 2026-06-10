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
const CediSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 445.146V480C192 497.688 206.328 512 224 512S256 497.688 256 480V445.557C245.412 447.354 234.717 448.25 224.031 448.25C213.291 448.25 202.604 446.949 192 445.146ZM192 148.961V363.023C212.842 369.291 235.031 369.572 256 363.289V148.709C235.029 142.418 212.838 142.695 192 148.961ZM224 0C206.328 0 192 14.312 192 32V67.172C213.193 63.566 234.732 63.371 256 66.988V32C256 14.312 241.672 0 224 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.984 348.562C364.953 365.687 362.406 390.875 345.297 404.844C309.719 433.906 266.797 448.25 224.031 448.25C174.766 448.25 125.687 429.219 88.234 391.75C51.969 355.5 32 307.281 32 256S51.969 156.5 88.234 120.25C158.188 50.25 268.75 44.625 345.297 107.156C362.406 121.125 364.953 146.312 350.984 163.438C337.016 180.531 311.781 183.156 294.703 169.094C250.031 132.688 185.625 135.969 144.797 176.812C123.641 197.969 112 226.094 112 256S123.641 314.031 144.797 335.188C185.625 376 250.062 379.312 294.703 342.906C311.766 328.906 336.984 331.5 350.984 348.562Z" })
    ]
  }
));
CediSignDuotone.displayName = "CediSignDuotone";
var CediSign_default = CediSignDuotone;
