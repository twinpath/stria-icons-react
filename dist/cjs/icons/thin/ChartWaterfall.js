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
var ChartWaterfall_exports = {};
__export(ChartWaterfall_exports, {
  default: () => ChartWaterfall_default
});
module.exports = __toCommonJS(ChartWaterfall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartWaterfallThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 352H464C472.828 352 480 344.828 480 336V80C480 71.172 472.828 64 464 64H432C423.141 64 416 71.172 416 80V336C416 344.828 423.141 352 432 352ZM432 80H464V336H432V80ZM240 256H272C280.828 256 288 248.828 288 240V144C288 135.172 280.828 128 272 128H240C231.141 128 224 135.172 224 144V240C224 248.828 231.141 256 240 256ZM240 144H272V240H240V144ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.578 12.422 32 8 32S0 35.578 0 40V408C0 447.688 32.312 480 72 480H504C508.422 480 512 476.422 512 472S508.422 464 504 464ZM336 192H368C376.828 192 384 184.828 384 176V80C384 71.172 376.828 64 368 64H336C327.141 64 320 71.172 320 80V176C320 184.828 327.141 192 336 192ZM336 80H368V176H336V80ZM144 352H176C184.828 352 192 344.828 192 336V240C192 231.172 184.828 224 176 224H144C135.141 224 128 231.172 128 240V336C128 344.828 135.141 352 144 352ZM144 240H176V336H144V240Z" })
  }
));
ChartWaterfallThin.displayName = "ChartWaterfallThin";
var ChartWaterfall_default = ChartWaterfallThin;
