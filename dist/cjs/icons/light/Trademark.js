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
var Trademark_exports = {};
__export(Trademark_exports, {
  default: () => Trademark_default
});
module.exports = __toCommonJS(Trademark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrademarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 96.038H16C7.17 96.038 0 103.195 0 112.036C0 120.866 7.157 128.034 16 128.034H112V400.002C112 408.832 119.157 416 128 416C136.83 416 144 408.843 144 400.002V128.034H240C248.83 128.034 256 120.877 256 112.036C256 103.206 248.843 96.038 240 96.038ZM629.438 97.006C623.062 94.6 616 96.631 611.719 101.787L464 279.016L316.281 101.787C311.969 96.631 304.875 94.6 298.562 97.006C292.219 99.287 288 105.287 288 112.036V400.002C288 408.845 295.156 416 304 416S320 408.845 320 400.002V156.218L451.719 314.262C457.781 321.574 470.219 321.574 476.281 314.262L608 156.218V400.002C608 408.845 615.156 416 624 416S640 408.845 640 400.002V112.036C640 105.287 635.781 99.287 629.438 97.006Z" })
  }
));
TrademarkLight.displayName = "TrademarkLight";
var Trademark_default = TrademarkLight;
