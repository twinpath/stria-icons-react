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
var StoreSlash_exports = {};
__export(StoreSlash_exports, {
  default: () => StoreSlash_default
});
module.exports = __toCommonJS(StoreSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StoreSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.907 384.002V250.482C148.483 254.043 136.526 256.004 124.35 256.004C118.901 256.004 113.452 255.639 107.997 254.924C103.825 254.363 100.016 252.764 96.001 251.723V464.001C96.001 490.51 117.491 512 144.001 512H496.093C505.198 512 513.618 509.322 520.872 504.92L366.596 384.002H159.907ZM124.35 224.004C135.217 224.004 145.374 221.645 154.903 218.083L49.284 135.303C43.628 175.648 68.649 217.344 112.262 223.211C116.237 223.731 120.294 224.004 124.35 224.004ZM630.811 469.102L544.093 401.134V251.658C539.946 252.74 536.005 254.367 531.689 254.939C526.351 255.639 521.011 256.004 515.45 256.004C503.324 256.004 491.4 254.051 479.999 250.5V350.899L300.959 210.573C308 206.259 314.432 201.089 319.9 195.036C335.799 212.626 359.012 224.004 385.066 224.004C411.232 224.004 434.361 212.626 450.259 195.036C466.24 212.626 489.396 224.004 515.45 224.004C519.591 224.004 523.566 223.731 527.54 223.211C583.017 215.852 609.319 150.724 579.649 103.813L522.323 13.137C517.218 4.986 508.109 0.008 498.394 0.008H141.575C131.858 0.008 122.751 4.986 117.645 13.137L94.919 49.083L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
  }
));
StoreSlashSolid.displayName = "StoreSlashSolid";
var StoreSlash_default = StoreSlashSolid;
