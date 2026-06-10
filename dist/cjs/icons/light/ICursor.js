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
var ICursor_exports = {};
__export(ICursor_exports, {
  default: () => ICursor_default
});
module.exports = __toCommonJS(ICursor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ICursorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 496C256 504.844 248.844 512 240 512C191.482 512 149.705 484.566 128 444.689C106.295 484.566 64.518 512 16 512C7.156 512 0 504.844 0 496S7.156 480 16 480C68.938 480 112 436.938 112 384V272H64C55.156 272 48 264.844 48 256S55.156 240 64 240H112V128C112 75.062 68.938 32 16 32C7.156 32 0 24.844 0 16S7.156 0 16 0C64.518 0 106.295 27.434 128 67.311C149.705 27.434 191.482 0 240 0C248.844 0 256 7.156 256 16S248.844 32 240 32C187.062 32 144 75.062 144 128V240H192C200.844 240 208 247.156 208 256S200.844 272 192 272H144V384C144 436.938 187.062 480 240 480C248.844 480 256 487.156 256 496Z" })
  }
));
ICursorLight.displayName = "ICursorLight";
var ICursor_default = ICursorLight;
