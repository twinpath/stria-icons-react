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
var WeightHanging_exports = {};
__export(WeightHanging_exports, {
  default: () => WeightHanging_default
});
module.exports = __toCommonJS(WeightHanging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightHangingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.387 430.08L430.963 162.561C424.961 142.08 406.092 128 384.651 128H319.639C329.768 114.598 336 98.096 336 80C336 35.816 300.184 0 256 0S176 35.816 176 80C176 98.096 182.233 114.598 192.362 128H127.35C105.908 128 87.039 142.08 81.037 162.561L2.614 430.08C-9.394 471.039 21.483 512 64.365 512H447.635C490.518 512 521.395 471.039 509.387 430.08ZM192 80C192 44.711 220.711 16 256 16S320 44.711 320 80C320 99.205 311.321 116.26 297.881 128H214.119C200.68 116.26 192 99.205 192 80ZM486.41 476.646C477.199 488.945 463.067 496 447.635 496H64.365C48.934 496 34.801 488.945 25.59 476.646C16.477 464.477 13.698 449.145 17.967 434.582L96.391 167.061C100.371 153.482 113.102 144 127.35 144H384.651C398.899 144 411.629 153.482 415.61 167.062L494.033 434.582C498.303 449.145 495.524 464.477 486.41 476.646Z" })
  }
));
WeightHangingThin.displayName = "WeightHangingThin";
var WeightHanging_default = WeightHangingThin;
