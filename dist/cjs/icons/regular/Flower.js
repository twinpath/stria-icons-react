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
var Flower_exports = {};
__export(Flower_exports, {
  default: () => Flower_default
});
module.exports = __toCommonJS(Flower_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlowerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 170.281C480 94.031 417.969 32 341.719 32C310.5 32 280.344 42.844 256 62.312C231.656 42.844 201.5 32 170.281 32C94.031 32 32 94.031 32 170.281C32 201.5 42.828 231.656 62.297 256C42.828 280.344 32 310.5 32 341.719C32 417.969 94.031 480 170.281 480C201.5 480 231.656 469.156 256 449.688C280.344 469.156 310.5 480 341.719 480C417.969 480 480 417.969 480 341.719C480 310.5 469.172 280.344 449.703 256C469.172 231.656 480 201.5 480 170.281ZM400.812 274.062C420.922 291.656 432 315.688 432 341.719C432 391.5 391.5 432 341.719 432C315.687 432 291.656 420.906 274.062 400.781L256 380.125L237.938 400.781C220.344 420.906 196.312 432 170.281 432C120.5 432 80 391.5 80 341.719C80 315.687 91.078 291.656 111.188 274.062L131.859 256L111.188 237.938C91.078 220.344 80 196.312 80 170.281C80 120.5 120.5 80 170.281 80C196.313 80 220.344 91.094 237.938 111.219L256 131.875L274.062 111.219C291.656 91.094 315.688 80 341.719 80C391.5 80 432 120.5 432 170.281C432 196.313 420.922 220.344 400.812 237.938L380.141 256L400.812 274.062ZM256 176C211.875 176 176 211.875 176 256S211.875 336 256 336S336 300.125 336 256S300.125 176 256 176ZM256 288C238.355 288 224 273.645 224 256S238.355 224 256 224S288 238.355 288 256S273.645 288 256 288Z" })
  }
));
FlowerRegular.displayName = "FlowerRegular";
var Flower_default = FlowerRegular;
