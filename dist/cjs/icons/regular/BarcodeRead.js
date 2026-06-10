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
var BarcodeRead_exports = {};
__export(BarcodeRead_exports, {
  default: () => BarcodeRead_default
});
module.exports = __toCommonJS(BarcodeRead_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeReadRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 0H32C14.327 0 0 14.327 0 32V136C0 149.25 10.75 160 24 160S48 149.25 48 136V48H136C149.25 48 160 37.25 160 24S149.25 0 136 0ZM136 464H48V376C48 362.75 37.25 352 24 352S0 362.75 0 376V480C0 497.673 14.327 512 32 512H136C149.25 512 160 501.25 160 488S149.25 464 136 464ZM552 352C538.75 352 528 362.75 528 376V464H440C426.75 464 416 474.75 416 488S426.75 512 440 512H544C561.673 512 576 497.673 576 480V376C576 362.75 565.25 352 552 352ZM544 0H440C426.75 0 416 10.75 416 24S426.75 48 440 48H528V136C528 149.25 538.75 160 552 160S576 149.25 576 136V32C576 14.327 561.673 0 544 0ZM120.006 384C133.206 384 144.006 373.2 144.006 360V152C144.006 138.8 133.206 128 120.006 128H120.006C106.806 128 96.006 138.8 96.006 152V360C96.006 373.2 106.806 384 120.006 384H120.006ZM480 368.002V143.998C480 135.199 472.803 128 464.002 128C455.203 128 448.006 135.199 448.006 143.998V368.002C448.006 376.801 455.203 384 464.004 384C472.803 384 480 376.801 480 368.002ZM416.006 152C416.006 138.8 405.206 128 392.006 128H392.006C378.806 128 368.006 138.8 368.006 152V360C368.006 373.2 378.806 384 392.006 384H392.006C405.206 384 416.006 373.2 416.006 360V152ZM192.008 128C183.209 128 176.012 135.199 176.012 143.998V368.002C176.012 376.801 183.209 384 192.01 384C200.809 384 208.006 376.801 208.006 368.002V143.998C208.006 135.199 200.809 128 192.008 128ZM264.023 128H264.023C250.823 128 240.023 138.8 240.023 152V360C240.023 373.2 250.823 384 264.023 384H264.023C277.223 384 288.023 373.2 288.023 360V152C288.023 138.8 277.223 128 264.023 128Z" })
  }
));
BarcodeReadRegular.displayName = "BarcodeReadRegular";
var BarcodeRead_default = BarcodeReadRegular;
