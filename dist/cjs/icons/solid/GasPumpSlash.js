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
var GasPumpSlash_exports = {};
__export(GasPumpSlash_exports, {
  default: () => GasPumpSlash_default
});
module.exports = __toCommonJS(GasPumpSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GasPumpSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96.001 171.919V415.994H384V397.642L96.001 171.919ZM400 447.993H80.001C71.251 447.993 64.001 455.243 64.001 463.993V495.992C64.001 504.742 71.251 511.992 80.001 511.992H400C408.75 511.992 416 504.742 416 495.992V463.993C416 455.243 408.75 447.993 400 447.993ZM630.811 469.102L563.046 415.994C570.944 404.525 575.999 390.986 575.999 375.994V152.623C575.999 135.623 569.249 119.248 557.249 107.248L476.249 26.25C469.999 20.125 459.749 20.125 453.625 26.25L442.25 37.624C436.125 43.749 436.125 54 442.25 60.249L479.999 97.874V159.998C479.999 188.122 500.874 211.247 527.999 215.247V375.994C527.999 379.799 526.859 383.221 525.269 386.385L384 275.66V63.999C384 28.75 355.25 0 320 0H160.001C129.208 0 103.391 21.945 97.348 50.991L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
  }
));
GasPumpSlashSolid.displayName = "GasPumpSlashSolid";
var GasPumpSlash_default = GasPumpSlashSolid;
