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
var GaugeSimpleLow_exports = {};
__export(GaugeSimpleLow_exports, {
  default: () => GaugeSimpleLow_default
});
module.exports = __toCommonJS(GaugeSimpleLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeSimpleLowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 288C278.5 288 269.625 290.125 261.5 293.875L164.5 174C158.875 167 148.875 166 142 171.5C135 177.125 134 187.25 139.5 194L236.75 314C228.875 324.75 224 337.75 224 352C224 387.375 252.625 416 288 416S352 387.375 352 352S323.375 288 288 288ZM288 384C270.375 384 256 369.625 256 352S270.375 320 288 320S320 334.375 320 352S305.625 384 288 384ZM288 32C129 32 0 161 0 320C0 372.75 14.25 422.25 39 464.75C44.625 474.375 55.375 480 66.5 480H509.5C520.625 480 531.375 474.375 537 464.75C561.75 422.25 576 372.75 576 320C576 161 447 32 288 32ZM509.5 448H66.75C44 409.125 32 365.25 32 320C32 178.875 146.875 64 288 64S544 178.875 544 320C544 365.25 532 409.75 509.5 448Z" })
  }
));
GaugeSimpleLowLight.displayName = "GaugeSimpleLowLight";
var GaugeSimpleLow_default = GaugeSimpleLowLight;
