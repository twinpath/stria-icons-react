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
var Soap_exports = {};
__export(Soap_exports, {
  default: () => Soap_default
});
module.exports = __toCommonJS(Soap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SoapLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 240C355.346 240 384 211.346 384 176C384 140.652 355.346 112 320 112S256 140.652 256 176C256 211.346 284.654 240 320 240ZM320 144C337.674 144 352 158.326 352 176C352 193.672 337.674 208 320 208S288 193.672 288 176C288 158.326 302.326 144 320 144ZM400 96C426.469 96 448 74.469 448 48S426.469 0 400 0S352 21.531 352 48S373.531 96 400 96ZM400 32C408.828 32 416 39.172 416 48S408.828 64 400 64S384 56.828 384 48S391.172 32 400 32ZM434.428 193.766C424.809 191.896 416 199.826 416 209.625V209.684C416 217.455 421.658 223.773 429.262 225.381C458.209 231.504 480 257.256 480 288V416C480 451.346 451.346 480 416 480H96C60.654 480 32 451.346 32 416V288C32 252.652 60.654 224 96 224H208C216.836 224 224 216.836 224 208C224 199.162 216.836 192 208 192H96C42.98 192 0 234.98 0 288V416C0 469.02 42.98 512 96 512H416C469.02 512 512 469.02 512 416V288C512 241.283 478.631 202.359 434.428 193.766ZM160 272C115.816 272 80 307.816 80 352S115.816 432 160 432H352C396.184 432 432 396.184 432 352S396.184 272 352 272H160ZM400 352C400 378.467 378.467 400 352 400H160C133.533 400 112 378.467 112 352S133.533 304 160 304H352C378.467 304 400 325.533 400 352ZM192 128C227.346 128 256 99.346 256 64S227.346 0 192 0S128 28.654 128 64S156.654 128 192 128ZM192 32C209.645 32 224 46.355 224 64S209.645 96 192 96S160 81.645 160 64S174.355 32 192 32Z" })
  }
));
SoapLight.displayName = "SoapLight";
var Soap_default = SoapLight;
