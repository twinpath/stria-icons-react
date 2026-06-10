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
var CodeBranch_exports = {};
__export(CodeBranch_exports, {
  default: () => CodeBranch_default
});
module.exports = __toCommonJS(CodeBranch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeBranchLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 0C323.818 0 288 35.816 288 80C288 118.703 315.486 150.973 352 158.387V192C352 218.469 330.469 240 304 240H144C125.922 240 109.412 246.254 96 256.406V158.387C132.516 150.973 160 118.703 160 80C160 35.816 124.184 0 80 0C35.818 0 0 35.816 0 80C0 118.703 27.486 150.973 64 158.387V353.613C27.486 361.027 0 393.297 0 432C0 476.184 35.818 512 80 512C124.184 512 160 476.184 160 432C160 393.297 132.516 361.027 96 353.613V320C96 293.531 117.531 272 144 272H304C348.109 272 384 236.125 384 192V158.387C420.516 150.973 448 118.703 448 80C448 35.816 412.184 0 368 0ZM128 432C128 458.469 106.467 480 80 480S32 458.469 32 432S53.533 384 80 384S128 405.531 128 432ZM80 128C53.533 128 32 106.469 32 80S53.533 32 80 32S128 53.531 128 80S106.467 128 80 128ZM368 128C341.533 128 320 106.469 320 80S341.533 32 368 32S416 53.531 416 80S394.467 128 368 128Z" })
  }
));
CodeBranchLight.displayName = "CodeBranchLight";
var CodeBranch_default = CodeBranchLight;
