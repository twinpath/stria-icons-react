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
var ArrowLeftToLine_exports = {};
__export(ArrowLeftToLine_exports, {
  default: () => ArrowLeftToLine_default
});
module.exports = __toCommonJS(ArrowLeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 240H134.625L251.312 123.312C257.562 117.062 257.562 106.937 251.312 100.688S234.937 94.438 228.688 100.688L84.688 244.688C81.562 247.812 80 251.906 80 256S81.562 264.188 84.688 267.312L228.688 411.312C234.938 417.562 245.063 417.562 251.312 411.312S257.562 394.937 251.312 388.688L134.625 272H432C440.844 272 448 264.844 448 256S440.844 240 432 240ZM16 64C7.156 64 0 71.156 0 80V432C0 440.844 7.156 448 16 448S32 440.844 32 432V80C32 71.156 24.844 64 16 64Z" })
  }
));
ArrowLeftToLineLight.displayName = "ArrowLeftToLineLight";
var ArrowLeftToLine_default = ArrowLeftToLineLight;
