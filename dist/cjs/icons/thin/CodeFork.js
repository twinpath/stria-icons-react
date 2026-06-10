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
const CodeForkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64C448 28.654 419.346 0 384 0S320 28.654 320 64C320 96.605 344.475 123.217 376 127.193V192C376 221.625 335.75 248 304 248H128C97.125 248 72 222.875 72 192V127.193C103.525 123.217 128 96.605 128 64C128 28.654 99.346 0 64 0S0 28.654 0 64C0 96.605 24.475 123.217 56 127.193V192C56 231.688 88.312 264 128 264H216V384.807C184.475 388.783 160 415.395 160 448C160 483.346 188.654 512 224 512S288 483.346 288 448C288 415.395 263.525 388.783 232 384.807V264H304C343.844 264 392 231.875 392 192V127.193C423.525 123.217 448 96.605 448 64ZM16 64C16 37.533 37.533 16 64 16S112 37.533 112 64S90.467 112 64 112S16 90.467 16 64ZM272 448C272 474.467 250.467 496 224 496S176 474.467 176 448S197.533 400 224 400S272 421.533 272 448ZM384 112C357.533 112 336 90.467 336 64S357.533 16 384 16S432 37.533 432 64S410.467 112 384 112Z" })
  }
));
CodeForkThin.displayName = "CodeForkThin";
var CodeFork_default = CodeForkThin;
