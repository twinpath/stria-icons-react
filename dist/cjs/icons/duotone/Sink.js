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
const SinkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 416.002C32 469.021 74.98 512.002 128 512.002H384C437.02 512.002 480 469.021 480 416.002V384.002H32V416.002ZM496 288.002H16C7.164 288.002 0 295.166 0 304.002V336.002C0 344.838 7.164 352.002 16 352.002H496C504.836 352.002 512 344.838 512 336.002V304.002C512 295.166 504.836 288.002 496 288.002Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 112.002C352 120.838 359.164 128.002 368 128.002H400C408.838 128.002 416 120.838 416 112.002V96.002C416 36.807 362.154 -10.043 300.867 1.861C255.291 10.715 224 53.363 224 99.791V288.002H288V96.002C288 78.361 302.359 64.002 320 64.002S352 78.361 352 96.002V112.002ZM128 208.002H48C39.164 208.002 32 215.164 32 224.002V240.002C32 248.838 39.164 256.002 48 256.002H112V288.002H160V240.002C160 222.328 145.674 208.002 128 208.002ZM464 208.002H384C366.328 208.002 352 222.328 352 240.002V288.002H400V256.002H464C472.838 256.002 480 248.838 480 240.002V224.002C480 215.164 472.838 208.002 464 208.002Z" })
    ]
  }
));
SinkDuotone.displayName = "SinkDuotone";
var Sink_default = SinkDuotone;
