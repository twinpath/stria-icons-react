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
const ChartScatterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 288C305.674 288 320 273.672 320 256C320 238.326 305.674 224 288 224S256 238.326 256 256C256 273.672 270.326 288 288 288ZM384 352C401.674 352 416 337.672 416 320C416 302.326 401.674 288 384 288S352 302.326 352 320C352 337.672 366.326 352 384 352ZM416 160C433.674 160 448 145.672 448 128C448 110.326 433.674 96 416 96S384 110.326 384 128C384 145.672 398.326 160 416 160ZM488 432H48V56C48 42.744 37.254 32 24 32S0 42.744 0 56V448C0 465.6 14.4 480 32 480H488C501.254 480 512 469.254 512 456C512 442.744 501.254 432 488 432ZM192 192C209.674 192 224 177.672 224 160C224 142.326 209.674 128 192 128S160 142.326 160 160C160 177.672 174.326 192 192 192ZM160 352C177.674 352 192 337.672 192 320C192 302.326 177.674 288 160 288S128 302.326 128 320C128 337.672 142.326 352 160 352Z" })
  }
));
ChartScatterRegular.displayName = "ChartScatterRegular";
var ChartScatter_default = ChartScatterRegular;
