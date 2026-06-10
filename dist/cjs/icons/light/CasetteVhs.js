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
var CasetteVhs_exports = {};
__export(CasetteVhs_exports, {
  default: () => CasetteVhs_default
});
module.exports = __toCommonJS(CasetteVhs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteVhsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V160H544V416ZM544 128H32V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V128ZM124.812 400H451.188C456.016 400 460.594 397.812 463.641 394.062C484.812 367.844 496 336.703 496 304S484.812 240.156 463.641 213.938C460.594 210.188 456.016 208 451.188 208H124.812C119.984 208 115.406 210.188 112.359 213.938C91.188 240.156 80 271.297 80 304S91.188 367.844 112.359 394.062C115.406 397.812 119.984 400 124.812 400ZM384 336C401.674 336 416 321.672 416 304C416 286.326 401.674 272 384 272V240H443.25C456.844 259.125 464 281.109 464 304S456.844 348.875 443.25 368H384V336ZM224 240H352V368H224V240ZM132.75 240H192V272C174.326 272 160 286.326 160 304C160 321.672 174.326 336 192 336V368H132.75C119.156 348.875 112 326.891 112 304S119.156 259.125 132.75 240Z" })
  }
));
CasetteVhsLight.displayName = "CasetteVhsLight";
var CasetteVhs_default = CasetteVhsLight;
