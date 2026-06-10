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
var QuoteRight_exports = {};
__export(QuoteRight_exports, {
  default: () => QuoteRight_default
});
module.exports = __toCommonJS(QuoteRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H352C316.654 32 288 60.654 288 96V192C288 227.346 316.654 256 352 256H448C459.717 256 470.555 252.621 480 247.123V304C480 383.406 415.406 448 336 448C327.156 448 320 455.156 320 464S327.156 480 336 480C433.047 480 512 401.047 512 304V96C512 60.654 483.346 32 448 32ZM480 192C480 209.645 465.645 224 448 224H352C334.355 224 320 209.645 320 192V96C320 78.355 334.355 64 352 64H448C465.645 64 480 78.355 480 96V192ZM160 32H64C28.654 32 0 60.654 0 96V192C0 227.346 28.654 256 64 256H160C171.717 256 182.555 252.621 192 247.123V304C192 383.406 127.406 448 48 448C39.156 448 32 455.156 32 464S39.156 480 48 480C145.047 480 224 401.047 224 304V96C224 60.654 195.346 32 160 32ZM192 192C192 209.645 177.645 224 160 224H64C46.355 224 32 209.645 32 192V96C32 78.355 46.355 64 64 64H160C177.645 64 192 78.355 192 96V192Z" })
  }
));
QuoteRightLight.displayName = "QuoteRightLight";
var QuoteRight_default = QuoteRightLight;
