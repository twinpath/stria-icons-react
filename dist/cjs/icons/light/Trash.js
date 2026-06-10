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
var Trash_exports = {};
__export(Trash_exports, {
  default: () => Trash_default
});
module.exports = __toCommonJS(Trash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.774 128C392.49 128 385.575 134.324 384.839 142.576L356 465.375C355.375 473.625 348.375 480 340.125 480H107.875C99.625 480 92.625 473.625 92 465.375L63.162 142.576C62.425 134.324 55.51 128 47.226 128C37.827 128 30.453 136.062 31.289 145.423L60.125 468.25C62.375 493 83 512 107.875 512H340.125C365 512 385.625 493 387.875 468.25L416.711 145.423C417.548 136.062 410.173 128 400.774 128ZM432 64H336L302.375 19.25C293.375 7.125 279.125 0 264 0H184C168.875 0 154.625 7.125 145.625 19.25L112 64H16C7.2 64 0 71.2 0 80S7.2 96 16 96H432C440.8 96 448 88.8 448 80S440.8 64 432 64ZM152 64L171.25 38.375C174.25 34.375 179 32 184 32H264C269 32 273.75 34.375 276.75 38.375L296 64H152Z" })
  }
));
TrashLight.displayName = "TrashLight";
var Trash_default = TrashLight;
