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
var AlignJustify_exports = {};
__export(AlignJustify_exports, {
  default: () => AlignJustify_default
});
module.exports = __toCommonJS(AlignJustify_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignJustifyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 432H16C7.199 432 0 439.199 0 448S7.199 464 16 464H432C440.801 464 448 456.801 448 448S440.801 432 432 432ZM16 80H432C440.801 80 448 72.801 448 64S440.801 48 432 48H16C7.199 48 0 55.199 0 64S7.199 80 16 80ZM432 176H16C7.199 176 0 183.199 0 192S7.199 208 16 208H432C440.801 208 448 200.801 448 192S440.801 176 432 176ZM432 304H16C7.199 304 0 311.199 0 320S7.199 336 16 336H432C440.801 336 448 328.801 448 320S440.801 304 432 304Z" })
  }
));
AlignJustifyLight.displayName = "AlignJustifyLight";
var AlignJustify_default = AlignJustifyLight;
