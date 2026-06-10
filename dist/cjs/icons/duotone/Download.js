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
var Download_exports = {};
__export(Download_exports, {
  default: () => Download_default
});
module.exports = __toCommonJS(Download_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownloadDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 352H346.5L301.25 397.25C289.156 409.344 273.094 416 256 416S222.844 409.344 210.75 397.25L165.5 352H32C14.326 352 0 366.326 0 384V480C0 497.672 14.326 512 32 512H480C497.674 512 512 497.672 512 480V384C512 366.326 497.674 352 480 352ZM432 456C418.801 456 408 445.199 408 432C408 418.799 418.801 408 432 408S456 418.799 456 432C456 445.199 445.199 456 432 456Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M105.371 246.621C92.876 234.125 92.876 213.867 105.371 201.371C117.867 188.875 138.126 188.875 150.621 201.371L224 274.75V32C224 14.326 238.328 0 256 0C273.673 0 288 14.326 288 32V274.75L361.378 201.371C373.873 188.875 394.132 188.875 406.628 201.371C419.123 213.867 419.123 234.125 406.628 246.621L278.625 374.625C272.375 380.875 264.187 384 256 384S239.625 380.875 233.375 374.625L105.371 246.621Z" })
    ]
  }
));
DownloadDuotone.displayName = "DownloadDuotone";
var Download_default = DownloadDuotone;
