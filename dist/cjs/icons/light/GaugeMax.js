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
var GaugeMax_exports = {};
__export(GaugeMax_exports, {
  default: () => GaugeMax_default
});
module.exports = __toCommonJS(GaugeMax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeMaxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 320C120 333.25 109.25 344 96 344S72 333.25 72 320S82.75 296 96 296S120 306.75 120 320ZM288 152C301.25 152 312 141.25 312 128S301.25 104 288 104S264 114.75 264 128S274.75 152 288 152ZM424 208C437.25 208 448 197.25 448 184S437.25 160 424 160S400 170.75 400 184S410.75 208 424 208ZM495.75 317.375C497.25 326.125 491.375 334.375 482.625 335.75L351.375 357.625C348.499 390.25 321.375 416 288 416C252.625 416 224 387.375 224 352S252.625 288 288 288C314.125 288 336.499 303.625 346.375 326L477.375 304.25C485.875 302.75 494.25 308.625 495.75 317.375ZM320 352C320 334.375 305.625 320 288 320S256 334.375 256 352C256 369.625 270.375 384 288 384S320 369.625 320 352ZM152 160C138.75 160 128 170.75 128 184S138.75 208 152 208S176 197.25 176 184S165.25 160 152 160ZM576 320C576 372.75 561.75 422.25 537 464.75C531.375 474.375 520.625 480 509.5 480H66.5C55.375 480 44.625 474.375 39 464.75C14.25 422.25 0 372.75 0 320C0 161 129 32 288 32S576 161 576 320ZM544 320C544 178.875 429.125 64 288 64S32 178.875 32 320C32 365.25 44 409.125 66.75 448H509.5C532 409.75 544 365.25 544 320Z" })
  }
));
GaugeMaxLight.displayName = "GaugeMaxLight";
var GaugeMax_default = GaugeMaxLight;
