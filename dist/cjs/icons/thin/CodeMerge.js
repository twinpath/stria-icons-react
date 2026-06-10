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
const CodeMergeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 208C351.395 208 324.783 232.473 320.807 264H224C149.016 264 88 203 88 128V127.195C119.527 123.219 144 96.609 144 64C144 28.652 115.348 0 80 0C44.654 0 16 28.652 16 64C16 96.609 40.475 123.219 72 127.195V384.805C40.475 388.781 16 415.391 16 448C16 483.348 44.654 512 80 512C115.348 512 144 483.348 144 448C144 415.391 119.527 388.781 88 384.805V194.531C112.775 244.93 164.154 280 224 280H320.807C324.783 311.527 351.395 336 384 336C419.348 336 448 307.348 448 272S419.348 208 384 208ZM128 448C128 474.469 106.467 496 80 496S32 474.469 32 448S53.533 400 80 400S128 421.531 128 448ZM80 112C53.533 112 32 90.469 32 64S53.533 16 80 16S128 37.531 128 64S106.467 112 80 112ZM384 320C357.533 320 336 298.469 336 272S357.533 224 384 224S432 245.531 432 272S410.467 320 384 320Z" })
  }
));
CodeMergeThin.displayName = "CodeMergeThin";
var CodeMerge_default = CodeMergeThin;
