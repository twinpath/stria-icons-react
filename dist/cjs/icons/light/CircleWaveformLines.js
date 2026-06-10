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
var CircleWaveformLines_exports = {};
__export(CircleWaveformLines_exports, {
  default: () => CircleWaveformLines_default
});
module.exports = __toCommonJS(CircleWaveformLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleWaveformLinesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM144 160C135.164 160 128 167.162 128 176V336C128 344.836 135.164 352 144 352S160 344.836 160 336V176C160 167.162 152.836 160 144 160ZM208 200C199.164 200 192 207.162 192 216V296C192 304.836 199.164 312 208 312S224 304.836 224 296V216C224 207.162 216.836 200 208 200ZM272 136C263.164 136 256 143.162 256 152V360C256 368.836 263.164 376 272 376S288 368.836 288 360V152C288 143.162 280.836 136 272 136ZM336 184C327.164 184 320 191.162 320 200V312C320 320.836 327.164 328 336 328S352 320.836 352 312V200C352 191.162 344.836 184 336 184ZM400 224C391.164 224 384 231.162 384 240V272C384 280.836 391.164 288 400 288S416 280.836 416 272V240C416 231.162 408.836 224 400 224Z" })
  }
));
CircleWaveformLinesLight.displayName = "CircleWaveformLinesLight";
var CircleWaveformLines_default = CircleWaveformLinesLight;
