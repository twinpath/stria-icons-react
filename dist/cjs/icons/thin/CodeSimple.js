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
var CodeSimple_exports = {};
__export(CodeSimple_exports, {
  default: () => CodeSimple_default
});
module.exports = __toCommonJS(CodeSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M189.53 66.22C186.342 63.189 181.28 63.251 178.217 66.47L2.215 250.469C-0.738 253.563 -0.738 258.438 2.215 261.532L178.217 445.531C179.795 447.188 181.889 448 183.999 448C185.983 448 187.983 447.25 189.53 445.781C192.717 442.719 192.827 437.656 189.78 434.469L19.074 256.001L189.78 77.533C192.827 74.345 192.717 69.283 189.53 66.22ZM573.785 250.469L397.783 66.47C394.736 63.251 389.673 63.189 386.47 66.22C383.283 69.283 383.173 74.345 386.22 77.533L556.926 256.001L386.22 434.469C383.173 437.656 383.283 442.719 386.47 445.781C388.017 447.25 390.017 448 392.001 448C394.111 448 396.205 447.188 397.783 445.531L573.785 261.532C576.738 258.438 576.738 253.563 573.785 250.469Z" })
  }
));
CodeSimpleThin.displayName = "CodeSimpleThin";
var CodeSimple_default = CodeSimpleThin;
