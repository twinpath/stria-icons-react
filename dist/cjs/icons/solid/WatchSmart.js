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
var WatchSmart_exports = {};
__export(WatchSmart_exports, {
  default: () => WatchSmart_default
});
module.exports = __toCommonJS(WatchSmart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchSmartSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 48H64V32C64 14.375 78.375 0 96 0H288C305.625 0 320 14.375 320 32V48ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V464H64V480ZM384 144V368C384 403.375 355.375 432 320 432H64C28.625 432 0 403.375 0 368V144C0 108.625 28.625 80 64 80H320C355.375 80 384 108.625 384 144ZM255.375 277.562L216 244.75V184C216 170.75 205.25 160 192 160S168 170.75 168 184V256C168 263.125 171.156 269.875 176.625 274.438L224.625 314.438C229.125 318.188 234.562 320 240 320C246.875 320 253.688 317.062 258.438 311.375C266.938 301.188 265.562 286.062 255.375 277.562Z" })
  }
));
WatchSmartSolid.displayName = "WatchSmartSolid";
var WatchSmart_default = WatchSmartSolid;
