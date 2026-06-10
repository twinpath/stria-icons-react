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
const QuoteLeftRoundRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 256C88.16 256 66.16 263.57 48 276.268V184C48 126.656 94.656 80 152 80H168C181.25 80 192 69.25 192 56S181.25 32 168 32H152C68.188 32 0 100.188 0 184V368C0 429.855 50.145 480 112 480S224 429.855 224 368S173.855 256 112 256ZM112 432C76.711 432 48 403.289 48 368S76.711 304 112 304S176 332.711 176 368S147.289 432 112 432ZM400 256C376.16 256 354.16 263.57 336 276.268V184C336 126.656 382.656 80 440 80H456C469.25 80 480 69.25 480 56S469.25 32 456 32H440C356.188 32 288 100.188 288 184V368C288 429.855 338.145 480 400 480S512 429.855 512 368S461.855 256 400 256ZM400 432C364.711 432 336 403.289 336 368S364.711 304 400 304S464 332.711 464 368S435.289 432 400 432Z" })
  }
));
QuoteLeftRoundRegular.displayName = "QuoteLeftRoundRegular";
var QuoteLeftRound_default = QuoteLeftRoundRegular;
