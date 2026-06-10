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
var BeerMugEmpty_exports = {};
__export(BeerMugEmpty_exports, {
  default: () => BeerMugEmpty_default
});
module.exports = __toCommonJS(BeerMugEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BeerMugEmptyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 128C135.156 128 128 135.156 128 144V368C128 376.844 135.156 384 144 384S160 376.844 160 368V144C160 135.156 152.844 128 144 128ZM272 128C263.156 128 256 135.156 256 144V368C256 376.844 263.156 384 272 384S288 376.844 288 368V144C288 135.156 280.844 128 272 128ZM208 128C199.156 128 192 135.156 192 144V368C192 376.844 199.156 384 208 384S224 376.844 224 368V144C224 135.156 216.844 128 208 128ZM432 96H384V80C384 53.49 362.51 32 336 32H80C53.49 32 32 53.49 32 80V384C32 437.02 74.98 480 128 480H288C341.02 480 384 437.02 384 384V377.891L467.781 336C495.062 322.359 512 294.953 512 264.453V176C512 131.891 476.125 96 432 96ZM352 384C352 419.289 323.291 448 288 448H128C92.711 448 64 419.289 64 384V80C64 71.178 71.178 64 80 64H336C344.822 64 352 71.178 352 80V384ZM480 264.453C480 282.75 469.844 299.188 453.469 307.375L384 342.109V128H432C458.469 128 480 149.531 480 176V264.453Z" })
  }
));
BeerMugEmptyLight.displayName = "BeerMugEmptyLight";
var BeerMugEmpty_default = BeerMugEmptyLight;
