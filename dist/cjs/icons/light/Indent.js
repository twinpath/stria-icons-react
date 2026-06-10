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
var Indent_exports = {};
__export(Indent_exports, {
  default: () => Indent_default
});
module.exports = __toCommonJS(Indent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.219 350.5C11.375 351.5 13.688 352 16 352C19.688 352 23.312 350.75 26.25 348.281L122.25 268.281C125.906 265.25 128 260.75 128 256S125.906 246.75 122.25 243.719L26.25 163.719C23.314 161.262 19.684 160.02 16.016 160.02C13.711 160.02 11.391 160.512 9.219 161.5C3.594 164.156 0 169.781 0 176V336C0 342.219 3.594 347.844 9.219 350.5ZM32 210.164L87.002 256L32 301.836V210.164ZM16 80H432C440.844 80 448 72.844 448 64S440.844 48 432 48H16C7.156 48 0 55.156 0 64S7.156 80 16 80ZM432 176H208C199.156 176 192 183.156 192 192S199.156 208 208 208H432C440.844 208 448 200.844 448 192S440.844 176 432 176ZM432 304H208C199.156 304 192 311.156 192 320S199.156 336 208 336H432C440.844 336 448 328.844 448 320S440.844 304 432 304ZM432 432H16C7.156 432 0 439.156 0 448S7.156 464 16 464H432C440.844 464 448 456.844 448 448S440.844 432 432 432Z" })
  }
));
IndentLight.displayName = "IndentLight";
var Indent_default = IndentLight;
