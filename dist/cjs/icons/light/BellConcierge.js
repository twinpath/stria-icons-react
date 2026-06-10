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
var BellConcierge_exports = {};
__export(BellConcierge_exports, {
  default: () => BellConcierge_default
});
module.exports = __toCommonJS(BellConcierge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellConciergeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 384C56.844 384 64 376.844 64 368C64 262.125 150.125 176 256 176S448 262.125 448 368C448 376.844 455.156 384 464 384S480 376.844 480 368C480 249.9 388.033 153.074 272 144.811V96H304C312.844 96 320 88.844 320 80S312.844 64 304 64H208C199.156 64 192 71.156 192 80S199.156 96 208 96H240V144.811C123.967 153.074 32 249.9 32 368C32 376.844 39.156 384 48 384ZM496 416H16C7.156 416 0 423.156 0 432S7.156 448 16 448H496C504.844 448 512 440.844 512 432S504.844 416 496 416Z" })
  }
));
BellConciergeLight.displayName = "BellConciergeLight";
var BellConcierge_default = BellConciergeLight;
