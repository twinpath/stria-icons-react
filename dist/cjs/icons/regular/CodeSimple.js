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
const CodeSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.969 71.031C199.594 61.656 184.406 61.656 175.031 71.031L7.031 239.031C-2.344 248.406 -2.344 263.594 7.031 272.969L175.031 440.969C179.719 445.656 185.859 448 192 448S204.281 445.656 208.969 440.969C218.344 431.594 218.344 416.406 208.969 407.031L57.938 256L208.969 104.969C218.344 95.594 218.344 80.406 208.969 71.031ZM568.969 239.031L400.969 71.031C391.594 61.656 376.406 61.656 367.031 71.031S357.656 95.594 367.031 104.969L518.063 256L367.031 407.031C357.656 416.406 357.656 431.594 367.031 440.969C371.719 445.656 377.859 448 384 448S396.281 445.656 400.969 440.969L568.969 272.969C578.344 263.594 578.344 248.406 568.969 239.031Z" })
  }
));
CodeSimpleRegular.displayName = "CodeSimpleRegular";
var CodeSimple_default = CodeSimpleRegular;
