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
var ChartScatterBubble_exports = {};
__export(ChartScatterBubble_exports, {
  default: () => ChartScatterBubble_default
});
module.exports = __toCommonJS(ChartScatterBubble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartScatterBubbleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 192C419.346 192 448 163.346 448 128S419.346 64 384 64S320 92.654 320 128S348.654 192 384 192ZM384 96C401.645 96 416 110.355 416 128S401.645 160 384 160S352 145.645 352 128S366.355 96 384 96ZM496 448H80C53.531 448 32 426.469 32 400V48C32 39.172 24.828 32 16 32S0 39.172 0 48V400C0 444.125 35.875 480 80 480H496C504.828 480 512 472.828 512 464S504.828 448 496 448ZM240 224C266.51 224 288 202.51 288 176S266.51 128 240 128S192 149.49 192 176S213.49 224 240 224ZM240 160C248.822 160 256 167.178 256 176S248.822 192 240 192S224 184.822 224 176S231.178 160 240 160ZM176 352C202.51 352 224 330.51 224 304S202.51 256 176 256S128 277.49 128 304S149.49 352 176 352ZM176 288C184.822 288 192 295.178 192 304S184.822 320 176 320S160 312.822 160 304S167.178 288 176 288ZM352 352C387.346 352 416 323.346 416 288S387.346 224 352 224S288 252.654 288 288S316.654 352 352 352ZM352 256C369.645 256 384 270.355 384 288S369.645 320 352 320S320 305.645 320 288S334.355 256 352 256Z" })
  }
));
ChartScatterBubbleLight.displayName = "ChartScatterBubbleLight";
var ChartScatterBubble_default = ChartScatterBubbleLight;
