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
var MusicSlash_exports = {};
__export(MusicSlash_exports, {
  default: () => MusicSlash_default
});
module.exports = __toCommonJS(MusicSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.999 356.893C181.944 353.915 171.28 351.995 159.999 351.995C106.979 351.995 63.999 387.81 63.999 431.993C63.999 476.174 106.979 511.992 159.999 511.992S255.998 476.174 255.998 431.993V297.318L191.999 247.156V356.893ZM630.811 469.102L558.694 412.578C569.278 399.822 575.997 384.699 575.997 367.994V31.97C575.966 14.328 561.653 0 543.997 0C541.278 0 536.966 0.656 534.372 1.484L214.405 95.973C202.428 99.748 192.782 112.723 192.209 125.336L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM511.997 292.894C501.943 289.915 491.279 287.996 479.997 287.996C457.851 287.996 437.83 294.622 421.634 305.154L301.193 210.757L511.997 148.992V292.894Z" })
  }
));
MusicSlashSolid.displayName = "MusicSlashSolid";
var MusicSlash_default = MusicSlashSolid;
