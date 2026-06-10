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
const QuoteLeftRoundDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 256C394.002 256 388.23 256.857 382.486 257.766L384 256V192C384 156.75 412.75 128 448 128H456C469.25 128 480 117.25 480 104V56C480 42.75 469.25 32 456 32H448C359.625 32 288 103.625 288 192V368C288 429.855 338.145 480 400 480S512 429.855 512 368S461.855 256 400 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 256C106.002 256 100.23 256.857 94.486 257.766L96 256V192C96 156.75 124.75 128 160 128H168C181.25 128 192 117.25 192 104V56C192 42.75 181.25 32 168 32H160C71.625 32 0 103.625 0 192V368C0 429.855 50.145 480 112 480S224 429.855 224 368S173.855 256 112 256Z" })
    ]
  }
));
QuoteLeftRoundDuotone.displayName = "QuoteLeftRoundDuotone";
var QuoteLeftRound_default = QuoteLeftRoundDuotone;
