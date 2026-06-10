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
var WavePulse_exports = {};
__export(WavePulse_exports, {
  default: () => WavePulse_default
});
module.exports = __toCommonJS(WavePulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WavePulseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 256V256C640 269.255 629.255 280 616 280H495.25L437.75 402.25C433.375 411.375 424.25 417 413.75 415.875C403.75 415 395.25 407.875 392.75 398L322.75 129.375L247.5 492.875C245.25 503.75 235.875 511.625 224.75 512C224.5 512 224.25 512 224 512C213.25 512 203.75 504.75 200.875 494.375L141.75 280H24C10.745 280 0 269.255 0 256V256C0 242.745 10.745 232 24 232H160C170.79 232 180.252 239.206 183.12 249.608L220.625 385.625L296.5 19.125C298.75 8.25 308.25 0.25 319.375 0C319.625 0 319.75 0 320 0C330.875 0 340.5 7.375 343.25 18L422.5 321.875L458.25 245.75C462.25 237.375 470.75 232 480 232H616C629.255 232 640 242.745 640 256Z" })
  }
));
WavePulseRegular.displayName = "WavePulseRegular";
var WavePulse_default = WavePulseRegular;
