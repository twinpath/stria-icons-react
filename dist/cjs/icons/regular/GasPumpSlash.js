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
const GasPumpSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M391.999 464H383.999V397.658L335.999 360.037V464H143.999V209.551L95.999 171.93V464H87.999C74.8 464 63.999 474.799 63.999 488C63.999 501.199 74.8 512 87.999 512H391.999C405.198 512 415.999 501.199 415.999 488C415.999 474.799 405.198 464 391.999 464ZM630.81 469.102L563.31 416.195C571.195 404.73 575.999 391 575.999 376V152.625C575.999 135.576 569.228 119.227 557.173 107.172L481.898 32.039C472.54 22.682 457.376 22.664 447.999 32C438.591 41.365 438.573 56.59 447.96 65.977L479.999 97.875V160C479.999 188.125 500.874 211.25 527.999 215.25V376C527.999 379.797 526.931 383.262 525.361 386.453L383.999 275.658V64C383.999 28.652 355.345 0 319.999 0H159.999C129.116 0 103.355 21.877 97.337 50.979L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM335.999 238.037L143.999 87.551V64C143.999 55.162 151.163 48 159.999 48H319.999C328.835 48 335.999 55.162 335.999 64V238.037Z" })
  }
));
GasPumpSlashRegular.displayName = "GasPumpSlashRegular";
var GasPumpSlash_default = GasPumpSlashRegular;
