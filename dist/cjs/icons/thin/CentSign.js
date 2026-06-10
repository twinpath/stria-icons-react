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
const CentSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.219 393.656C353 397.094 352.469 402.125 349.031 404.906C314.604 432.654 273.389 446.566 232 447.764V504C232 508.422 228.406 512 224 512S216 508.422 216 504V447.244C169.701 444.785 124.207 426.629 88.938 391.797C52.219 355.531 32 307.297 32 256S52.219 156.469 88.938 120.203C124.219 85.35 169.682 66.516 216 64.07V8C216 3.578 219.594 0 224 0S232 3.578 232 8V64.605C273.379 65.803 314.604 79.346 349.031 107.094C352.469 109.875 353 114.906 350.219 118.344C347.469 121.797 342.438 122.297 338.969 119.562C267.906 62.234 165.25 67.375 100.188 131.578C66.531 164.828 48 209 48 256S66.531 347.172 100.188 380.422C165.25 444.656 267.938 449.781 338.969 392.438C342.438 389.703 347.469 390.203 350.219 393.656Z" })
  }
));
CentSignThin.displayName = "CentSignThin";
var CentSign_default = CentSignThin;
