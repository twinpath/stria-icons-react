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
var GaugeSimpleMax_exports = {};
__export(GaugeSimpleMax_exports, {
  default: () => GaugeSimpleMax_default
});
module.exports = __toCommonJS(GaugeSimpleMax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeSimpleMaxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M477.375 304.25L346.375 326C336.5 303.625 314.125 288 288 288C252.625 288 224 316.625 224 352S252.625 416 288 416C321.375 416 348.5 390.25 351.375 357.625L482.625 335.75C491.375 334.375 497.25 326.125 495.75 317.375C494.375 308.625 485.875 302.75 477.375 304.25ZM288 384C270.375 384 256 369.625 256 352S270.375 320 288 320S320 334.375 320 352S305.625 384 288 384ZM288 32C129 32 0 161 0 320C0 372.75 14.25 422.25 39 464.75C44.625 474.375 55.375 480 66.5 480H509.5C520.625 480 531.375 474.375 537 464.75C561.75 422.25 576 372.75 576 320C576 161 447 32 288 32ZM509.5 448H66.75C44 409.125 32 365.25 32 320C32 178.875 146.875 64 288 64S544 178.875 544 320C544 365.25 532 409.75 509.5 448Z" })
  }
));
GaugeSimpleMaxLight.displayName = "GaugeSimpleMaxLight";
var GaugeSimpleMax_default = GaugeSimpleMaxLight;
