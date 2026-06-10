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
const WatchSmartDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80H64C28.625 80 0 108.625 0 144V368C0 403.375 28.625 432 64 432H320C355.375 432 384 403.375 384 368V144C384 108.625 355.375 80 320 80ZM258.438 311.375C253.688 317.062 246.875 320 240 320C234.562 320 229.125 318.188 224.625 314.438L176.625 274.438C171.156 269.875 168 263.125 168 256V184C168 170.75 178.75 160 192 160S216 170.75 216 184V244.75L255.375 277.562C265.562 286.062 266.938 301.188 258.438 311.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0H96C78.375 0 64 14.375 64 32V80H320V32C320 14.375 305.625 0 288 0ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V432H64V480ZM192 160C178.75 160 168 170.75 168 184V256C168 263.125 171.156 269.875 176.625 274.438L224.625 314.438C229.125 318.188 234.562 320 240 320C246.875 320 253.688 317.062 258.438 311.375C266.938 301.188 265.562 286.063 255.375 277.563L216 244.75V184C216 170.75 205.25 160 192 160Z" })
    ]
  }
));
WatchSmartDuotone.displayName = "WatchSmartDuotone";
var WatchSmart_default = WatchSmartDuotone;
