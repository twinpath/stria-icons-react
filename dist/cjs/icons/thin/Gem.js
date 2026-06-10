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
var Gem_exports = {};
__export(Gem_exports, {
  default: () => Gem_default
});
module.exports = __toCommonJS(Gem_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GemThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.4 195.203L390.403 35.203C388.872 33.188 386.528 32 383.997 32H128.003C125.472 32 123.128 33.188 121.597 35.203L1.6 195.203C-0.713 198.266 -0.494 202.547 2.1 205.391L250.094 477.391C251.594 479.047 253.75 480 256 480S260.406 479.047 261.906 477.391L509.9 205.391C512.494 202.547 512.713 198.266 510.4 195.203ZM383.796 53.064L487.995 192H272.65L383.796 53.064ZM256 187.188L144.653 48H367.347L256 187.188ZM128.204 53.064L239.35 192H24.005L128.204 53.064ZM256 460.125L26.13 208H485.87L256 460.125Z" })
  }
));
GemThin.displayName = "GemThin";
var Gem_default = GemThin;
