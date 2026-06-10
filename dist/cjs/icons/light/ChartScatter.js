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
var ChartScatter_exports = {};
__export(ChartScatter_exports, {
  default: () => ChartScatter_default
});
module.exports = __toCommonJS(ChartScatter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartScatterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 280C301.25 280 312 269.25 312 256S301.25 232 288 232S264 242.75 264 256S274.75 280 288 280ZM384 344C397.25 344 408 333.25 408 320S397.25 296 384 296S360 306.75 360 320S370.75 344 384 344ZM416 152C429.25 152 440 141.25 440 128S429.25 104 416 104S392 114.75 392 128S402.75 152 416 152ZM160 344C173.25 344 184 333.25 184 320S173.25 296 160 296S136 306.75 136 320S146.75 344 160 344ZM192 184C205.25 184 216 173.25 216 160S205.25 136 192 136S168 146.75 168 160S178.75 184 192 184ZM496 448H80C53.531 448 32 426.469 32 400V48C32 39.156 24.844 32 16 32S0 39.156 0 48V400C0 444.125 35.875 480 80 480H496C504.844 480 512 472.844 512 464S504.844 448 496 448Z" })
  }
));
ChartScatterLight.displayName = "ChartScatterLight";
var ChartScatter_default = ChartScatterLight;
