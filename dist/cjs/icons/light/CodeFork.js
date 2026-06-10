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
var CodeFork_exports = {};
__export(CodeFork_exports, {
  default: () => CodeFork_default
});
module.exports = __toCommonJS(CodeFork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeForkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 80C448 35.816 412.184 0 368 0S288 35.816 288 80C288 118.703 315.484 150.973 352 158.387V192C352 218.469 330.469 240 304 240H144C117.531 240 96 218.469 96 192V158.387C132.516 150.973 160 118.703 160 80C160 35.816 124.184 0 80 0S0 35.816 0 80C0 118.703 27.484 150.973 64 158.387V192C64 236.125 99.875 272 144 272H208V353.613C171.484 361.027 144 393.297 144 432C144 476.184 179.816 512 224 512S304 476.184 304 432C304 393.297 276.516 361.027 240 353.613V272H304C348.125 272 384 236.125 384 192V158.387C420.516 150.973 448 118.703 448 80ZM32 80C32 53.533 53.533 32 80 32S128 53.533 128 80S106.467 128 80 128S32 106.467 32 80ZM272 432C272 458.467 250.467 480 224 480S176 458.467 176 432S197.533 384 224 384S272 405.533 272 432ZM368 128C341.533 128 320 106.467 320 80S341.533 32 368 32S416 53.533 416 80S394.467 128 368 128Z" })
  }
));
CodeForkLight.displayName = "CodeForkLight";
var CodeFork_default = CodeForkLight;
