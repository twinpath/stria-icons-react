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
var Bandage_exports = {};
__export(Bandage_exports, {
  default: () => Bandage_default
});
module.exports = __toCommonJS(Bandage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BandageThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 320C280.875 320 288 312.863 288 304C288 295.135 280.875 288 272 288S256 295.135 256 304C256 312.863 263.125 320 272 320ZM272 224C280.875 224 288 216.863 288 208C288 199.135 280.875 192 272 192S256 199.135 256 208C256 216.863 263.125 224 272 224ZM368 320C376.875 320 384 312.863 384 304C384 295.135 376.875 288 368 288S352 295.135 352 304C352 312.863 359.125 320 368 320ZM368 224C376.875 224 384 216.863 384 208C384 199.135 376.875 192 368 192S352 199.135 352 208C352 216.863 359.125 224 368 224ZM576 96H64C28.688 96 0 124.703 0 160V352C0 387.297 28.688 416 64 416H576C611.312 416 640 387.297 640 352V160C640 124.703 611.312 96 576 96ZM168 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H168V400ZM456 400H184V112H456V400ZM624 352C624 378.467 602.467 400 576 400H472V112H576C602.467 112 624 133.533 624 160V352Z" })
  }
));
BandageThin.displayName = "BandageThin";
var Bandage_default = BandageThin;
