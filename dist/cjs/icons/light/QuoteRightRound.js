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
var QuoteRightRound_exports = {};
__export(QuoteRightRound_exports, {
  default: () => QuoteRightRound_default
});
module.exports = __toCommonJS(QuoteRightRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteRightRoundLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 32C50.145 32 0 82.145 0 144S50.145 256 112 256C143.383 256 171.666 243.016 192 222.221V304C192 383.406 127.406 448 48 448C39.156 448 32 455.156 32 464S39.156 480 48 480C145.047 480 224 401.047 224 304V144C224 82.145 173.855 32 112 32ZM112 224C67.889 224 32 188.111 32 144S67.889 64 112 64S192 99.889 192 144S156.111 224 112 224ZM400 32C338.145 32 288 82.145 288 144S338.145 256 400 256C431.383 256 459.666 243.016 480 222.221V304C480 383.406 415.406 448 336 448C327.156 448 320 455.156 320 464S327.156 480 336 480C433.047 480 512 401.047 512 304V144C512 82.145 461.855 32 400 32ZM400 224C355.889 224 320 188.111 320 144S355.889 64 400 64S480 99.889 480 144S444.111 224 400 224Z" })
  }
));
QuoteRightRoundLight.displayName = "QuoteRightRoundLight";
var QuoteRightRound_default = QuoteRightRoundLight;
