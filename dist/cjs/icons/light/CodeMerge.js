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
var CodeMerge_exports = {};
__export(CodeMerge_exports, {
  default: () => CodeMerge_default
});
module.exports = __toCommonJS(CodeMerge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeMergeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 192C329.299 192 297.027 219.484 289.613 256H224C163.529 256 113.008 213.734 99.693 157.266C134.295 148.453 160 117.348 160 80C160 35.816 124.184 0 80 0C35.818 0 0 35.816 0 80C0 118.703 27.486 150.973 64 158.387V353.613C27.486 361.027 0 393.297 0 432C0 476.184 35.818 512 80 512C124.184 512 160 476.184 160 432C160 393.297 132.516 361.027 96 353.613V223.008C125.191 262.219 171.479 288 224 288H289.613C297.027 324.516 329.299 352 368 352C412.184 352 448 316.184 448 272S412.184 192 368 192ZM128 432C128 458.469 106.467 480 80 480S32 458.469 32 432S53.533 384 80 384S128 405.531 128 432ZM80 128C53.533 128 32 106.469 32 80S53.533 32 80 32S128 53.531 128 80S106.467 128 80 128ZM368 320C341.533 320 320 298.469 320 272S341.533 224 368 224S416 245.531 416 272S394.467 320 368 320Z" })
  }
));
CodeMergeLight.displayName = "CodeMergeLight";
var CodeMerge_default = CodeMergeLight;
