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
var CodePullRequest_exports = {};
__export(CodePullRequest_exports, {
  default: () => CodePullRequest_default
});
module.exports = __toCommonJS(CodePullRequest_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodePullRequestLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 96C160 51.816 124.184 16 80 16C35.818 16 0 51.816 0 96C0 134.703 27.486 166.973 64 174.387V337.613C27.486 345.027 0 377.297 0 416C0 460.184 35.818 496 80 496C124.184 496 160 460.184 160 416C160 377.297 132.516 345.027 96 337.613V174.387C132.516 166.973 160 134.703 160 96ZM128 416C128 442.469 106.467 464 80 464S32 442.469 32 416S53.533 368 80 368S128 389.531 128 416ZM80 144C53.533 144 32 122.469 32 96S53.533 48 80 48S128 69.531 128 96S106.467 144 80 144ZM448 337.613V160C448 115.875 412.125 80 368 80H284.197L346.25 28.281C353.031 22.625 353.938 12.531 348.281 5.75S332.531 -1.938 325.75 3.719L229.75 83.719C226.094 86.75 224 91.25 224 96S226.094 105.25 229.75 108.281L325.75 188.281C328.75 190.781 332.375 192 336 192C340.562 192 345.125 190.031 348.281 186.25C353.938 179.469 353.031 169.375 346.25 163.719L284.197 112H368C394.469 112 416 133.531 416 160V337.613C379.486 345.027 352 377.297 352 416C352 460.184 387.818 496 432 496C476.184 496 512 460.184 512 416C512 377.297 484.516 345.027 448 337.613ZM432 464C405.533 464 384 442.469 384 416S405.533 368 432 368S480 389.531 480 416S458.467 464 432 464Z" })
  }
));
CodePullRequestLight.displayName = "CodePullRequestLight";
var CodePullRequest_default = CodePullRequestLight;
