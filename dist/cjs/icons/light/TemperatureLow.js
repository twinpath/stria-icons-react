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
var TemperatureLow_exports = {};
__export(TemperatureLow_exports, {
  default: () => TemperatureLow_default
});
module.exports = __toCommonJS(TemperatureLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureLowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 354.875V304C192 295.25 184.75 288 176 288S160 295.25 160 304V354.875C141.375 361.5 128 379.125 128 400C128 426.5 149.5 448 176 448S224 426.5 224 400C224 379.125 210.625 361.5 192 354.875ZM384 32C348.75 32 320 60.75 320 96S348.75 160 384 160S448 131.25 448 96S419.25 32 384 32ZM384 128C366.25 128 352 113.75 352 96S366.25 64 384 64S416 78.25 416 96S401.75 128 384 128ZM256 80C256 35.875 220.125 0 176 0S96 35.875 96 80V321.875C75.75 342.625 64 370.75 64 400C64 461.75 114.25 512 176 512S288 461.75 288 400C288 370.75 276.25 342.625 256 321.875V80ZM176 480C131.875 480 96 444.125 96 400C96 374.5 108.25 351.125 128 336.25V80C128 53.5 149.5 32 176 32S224 53.5 224 80V336.25C243.75 351 256 374.5 256 400C256 444.125 220.125 480 176 480Z" })
  }
));
TemperatureLowLight.displayName = "TemperatureLowLight";
var TemperatureLow_default = TemperatureLowLight;
