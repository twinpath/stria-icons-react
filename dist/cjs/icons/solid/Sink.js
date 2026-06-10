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
const SinkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 288H400V256H464C472.838 256 480 248.836 480 240V224C480 215.162 472.838 208 464 208H384C366.328 208 352 222.326 352 240V288H288V96C288 78.359 302.359 64 320 64S352 78.359 352 96V112C352 120.836 359.164 128 368 128H400C408.838 128 416 120.836 416 112V96C416 36.805 362.154 -10.043 300.867 1.861C255.291 10.715 224 53.361 224 99.789V288H160V240C160 222.326 145.674 208 128 208H48C39.164 208 32 215.162 32 224V240C32 248.836 39.164 256 48 256H112V288H16C7.164 288 0 295.164 0 304V336C0 344.836 7.164 352 16 352H496C504.836 352 512 344.836 512 336V304C512 295.164 504.836 288 496 288ZM32 416C32 469.02 74.98 512 128 512H384C437.02 512 480 469.02 480 416V384H32V416Z" })
  }
));
SinkSolid.displayName = "SinkSolid";
var Sink_default = SinkSolid;
