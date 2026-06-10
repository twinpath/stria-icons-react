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
var QuoteLeftRound_exports = {};
__export(QuoteLeftRound_exports, {
  default: () => QuoteLeftRound_default
});
module.exports = __toCommonJS(QuoteLeftRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteLeftRoundLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 480C461.855 480 512 429.855 512 368S461.855 256 400 256C368.617 256 340.334 268.984 320 289.779V208C320 128.594 384.594 64 464 64C472.844 64 480 56.844 480 48S472.844 32 464 32C366.953 32 288 110.953 288 208V368C288 429.855 338.145 480 400 480ZM400 288C444.111 288 480 323.889 480 368S444.111 448 400 448S320 412.111 320 368S355.889 288 400 288ZM112 480C173.855 480 224 429.855 224 368S173.855 256 112 256C80.617 256 52.334 268.984 32 289.779V208C32 128.594 96.594 64 176 64C184.844 64 192 56.844 192 48S184.844 32 176 32C78.953 32 0 110.953 0 208V368C0 429.855 50.145 480 112 480ZM112 288C156.111 288 192 323.889 192 368S156.111 448 112 448S32 412.111 32 368S67.889 288 112 288Z" })
  }
));
QuoteLeftRoundLight.displayName = "QuoteLeftRoundLight";
var QuoteLeftRound_default = QuoteLeftRoundLight;
