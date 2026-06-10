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
const ChartWaterfallLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 256C264.828 256 272 248.828 272 240V144C272 135.172 264.828 128 256 128S240 135.172 240 144V240C240 248.828 247.172 256 256 256ZM352 192C360.828 192 368 184.828 368 176V80C368 71.172 360.828 64 352 64S336 71.172 336 80V176C336 184.828 343.172 192 352 192ZM160 352C168.828 352 176 344.828 176 336V240C176 231.172 168.828 224 160 224S144 231.172 144 240V336C144 344.828 151.172 352 160 352ZM496 448H80C53.531 448 32 426.469 32 400V48C32 39.172 24.828 32 16 32S0 39.172 0 48V400C0 444.125 35.875 480 80 480H496C504.828 480 512 472.828 512 464S504.828 448 496 448ZM448 352C456.828 352 464 344.828 464 336V80C464 71.172 456.828 64 448 64S432 71.172 432 80V336C432 344.828 439.172 352 448 352Z" })
  }
));
ChartWaterfallLight.displayName = "ChartWaterfallLight";
var ChartWaterfall_default = ChartWaterfallLight;
