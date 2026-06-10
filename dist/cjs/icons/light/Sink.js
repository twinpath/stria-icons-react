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
var Sink_exports = {};
__export(Sink_exports, {
  default: () => Sink_default
});
module.exports = __toCommonJS(Sink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SinkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 288H384V272C384 263.188 391.172 256 400 256H464C472.844 256 480 248.844 480 240S472.844 224 464 224H400C373.531 224 352 245.531 352 272V288H272V80C272 53.531 293.531 32 320 32S368 53.531 368 80V112C368 120.844 375.156 128 384 128S400 120.844 400 112V80C400 35.875 364.109 0 320 0S240 35.875 240 80V288H160V272C160 245.531 138.469 224 112 224H48C39.156 224 32 231.156 32 240S39.156 256 48 256H112C120.828 256 128 263.188 128 272V288H16C7.156 288 0 295.156 0 304S7.156 320 16 320H496C504.844 320 512 312.844 512 304S504.844 288 496 288ZM464 352C455.156 352 448 359.156 448 368V400C448 444.125 412.109 480 368 480H144C99.891 480 64 444.125 64 400V368C64 359.156 56.844 352 48 352S32 359.156 32 368V400C32 461.75 82.25 512 144 512H368C429.75 512 480 461.75 480 400V368C480 359.156 472.844 352 464 352Z" })
  }
));
SinkLight.displayName = "SinkLight";
var Sink_default = SinkLight;
