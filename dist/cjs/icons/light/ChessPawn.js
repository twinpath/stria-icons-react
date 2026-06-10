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
var ChessPawn_exports = {};
__export(ChessPawn_exports, {
  default: () => ChessPawn_default
});
module.exports = __toCommonJS(ChessPawn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessPawnLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 448H48C21.531 448 0 469.531 0 496C0 504.844 7.156 512 16 512S32 504.844 32 496C32 487.188 39.188 480 48 480H272C280.812 480 288 487.188 288 496C288 504.844 295.156 512 304 512S320 504.844 320 496C320 469.531 298.469 448 272 448ZM80 208C71.156 208 64 215.156 64 224S71.156 240 80 240H99.967L64.406 396.469C62.22 406.013 69.302 416 80 416C87.312 416 93.906 410.969 95.594 403.531L132.76 240H187.24L224.406 403.531C226.094 410.969 232.688 416 240 416C250.91 416 257.735 405.816 255.594 396.469L220.033 240H240C248.844 240 256 232.844 256 224S248.844 208 240 208H234.746C252.773 189.289 264 163.973 264 136C264 78.656 217.344 32 160 32S56 78.656 56 136C56 163.973 67.227 189.289 85.254 208H80ZM160 64C199.688 64 232 96.312 232 136S199.688 208 160 208S88 175.688 88 136S120.312 64 160 64Z" })
  }
));
ChessPawnLight.displayName = "ChessPawnLight";
var ChessPawn_default = ChessPawnLight;
