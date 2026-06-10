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
var Compress_exports = {};
__export(Compress_exports, {
  default: () => Compress_default
});
module.exports = __toCommonJS(Compress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 320H16C7.156 320 0 327.156 0 336S7.156 352 16 352H128V464C128 472.844 135.156 480 144 480S160 472.844 160 464V336C160 327.156 152.844 320 144 320ZM304 192H432C440.844 192 448 184.844 448 176S440.844 160 432 160H320V48C320 39.156 312.844 32 304 32S288 39.156 288 48V176C288 184.844 295.156 192 304 192ZM432 320H304C295.156 320 288 327.156 288 336V464C288 472.844 295.156 480 304 480S320 472.844 320 464V352H432C440.844 352 448 344.844 448 336S440.844 320 432 320ZM144 32C135.156 32 128 39.156 128 48V160H16C7.156 160 0 167.156 0 176S7.156 192 16 192H144C152.844 192 160 184.844 160 176V48C160 39.156 152.844 32 144 32Z" })
  }
));
CompressLight.displayName = "CompressLight";
var Compress_default = CompressLight;
