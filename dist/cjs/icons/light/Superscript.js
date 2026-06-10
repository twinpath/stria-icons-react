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
var Superscript_exports = {};
__export(Superscript_exports, {
  default: () => Superscript_default
});
module.exports = __toCommonJS(Superscript_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SuperscriptLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 96C344.844 96 352 88.844 352 80S344.844 64 336 64H288C282.531 64 277.438 66.797 274.5 71.406L176 226.195L77.5 71.406C74.562 66.797 69.469 64 64 64H16C7.156 64 0 71.156 0 80S7.156 96 16 96H55.219L157.035 256L55.219 416H16C7.156 416 0 423.156 0 432S7.156 448 16 448H64C69.469 448 74.562 445.203 77.5 440.594L176 285.805L274.5 440.594C277.438 445.203 282.531 448 288 448H336C344.844 448 352 440.844 352 432S344.844 416 336 416H296.781L194.965 256L296.781 96H336ZM496 160H464V16C464 7.156 456.844 0 448 0H416C407.156 0 400 7.156 400 16S407.156 32 416 32H432V160H400C391.156 160 384 167.156 384 176S391.156 192 400 192H496C504.844 192 512 184.844 512 176S504.844 160 496 160Z" })
  }
));
SuperscriptLight.displayName = "SuperscriptLight";
var Superscript_default = SuperscriptLight;
