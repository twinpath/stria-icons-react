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
var TrashCanUndo_exports = {};
__export(TrashCanUndo_exports, {
  default: () => TrashCanUndo_default
});
module.exports = __toCommonJS(TrashCanUndo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanUndoLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 128C391.156 128 384 135.156 384 144V432C384 458.469 362.469 480 336 480H112C85.531 480 64 458.469 64 432V144C64 135.156 56.844 128 48 128S32 135.156 32 144V432C32 476.109 67.891 512 112 512H336C380.109 512 416 476.109 416 432V144C416 135.156 408.844 128 400 128ZM432 64H336L302.375 19.25C293.375 7.125 279.125 0 264 0H184C168.875 0 154.625 7.125 145.625 19.25L112 64H16C7.201 64 0 71.199 0 80C0 88.799 7.201 96 16 96H432C440.801 96 448 88.799 448 80C448 71.199 440.801 64 432 64ZM152 64L171.25 38.375C174.25 34.375 179 32 184 32H264C269 32 273.75 34.375 276.75 38.375L296 64H152ZM219.312 196.688C213.062 190.438 202.937 190.438 196.688 196.688L116.688 276.688C110.438 282.938 110.438 293.063 116.688 299.312L196.688 379.312C199.812 382.438 203.906 384 208 384S216.188 382.438 219.312 379.312C225.562 373.062 225.562 362.937 219.312 356.688L166.625 304H240C266.469 304 288 325.531 288 352V400C288 408.844 295.156 416 304 416S320 408.844 320 400V352C320 307.891 284.109 272 240 272H166.625L219.312 219.312C225.562 213.062 225.562 202.938 219.312 196.688Z" })
  }
));
TrashCanUndoLight.displayName = "TrashCanUndoLight";
var TrashCanUndo_default = TrashCanUndoLight;
