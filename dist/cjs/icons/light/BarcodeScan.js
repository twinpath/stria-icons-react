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
var BarcodeScan_exports = {};
__export(BarcodeScan_exports, {
  default: () => BarcodeScan_default
});
module.exports = __toCommonJS(BarcodeScan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeScanLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H624C632.844 272 640 264.844 640 256S632.844 240 624 240ZM96 48C96 39.156 88.844 32 80 32S64 39.156 64 48V192H96V48ZM160 48C160 39.156 152.844 32 144 32S128 39.156 128 48V192H160V48ZM320 48C320 39.156 312.844 32 304 32S288 39.156 288 48V192H320V48ZM384 48C384 39.156 376.844 32 368 32S352 39.156 352 48V192H384V48ZM576 48C576 39.156 568.844 32 560 32S544 39.156 544 48V192H576V48ZM480 48C480 39.156 472.844 32 464 32S448 39.156 448 48V192H480V48ZM224 48C224 39.156 216.844 32 208 32S192 39.156 192 48V192H224V48ZM352 464C352 472.844 359.156 480 368 480S384 472.844 384 464V320H352V464ZM64 464C64 472.844 71.156 480 80 480S96 472.844 96 464V320H64V464ZM544 464C544 472.844 551.156 480 560 480S576 472.844 576 464V320H544V464ZM448 464C448 472.844 455.156 480 464 480S480 472.844 480 464V320H448V464ZM128 464C128 472.844 135.156 480 144 480S160 472.844 160 464V320H128V464ZM288 464C288 472.844 295.156 480 304 480S320 472.844 320 464V320H288V464ZM192 464C192 472.844 199.156 480 208 480S224 472.844 224 464V320H192V464Z" })
  }
));
BarcodeScanLight.displayName = "BarcodeScanLight";
var BarcodeScan_default = BarcodeScanLight;
