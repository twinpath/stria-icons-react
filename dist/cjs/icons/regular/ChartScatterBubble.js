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
const ChartScatterBubbleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 432H48V56C48 42.75 37.25 32 24 32S0 42.75 0 56V448C0 465.594 14.406 480 32 480H488C501.25 480 512 469.25 512 456S501.25 432 488 432ZM384 192C419.346 192 448 163.346 448 128S419.346 64 384 64S320 92.654 320 128S348.654 192 384 192ZM384 112C392.822 112 400 119.178 400 128S392.822 144 384 144S368 136.822 368 128S375.178 112 384 112ZM352 352C387.346 352 416 323.346 416 288S387.346 224 352 224S288 252.654 288 288S316.654 352 352 352ZM352 272C360.822 272 368 279.178 368 288S360.822 304 352 304S336 296.822 336 288S343.178 272 352 272ZM176 352C202.51 352 224 330.51 224 304S202.51 256 176 256S128 277.49 128 304S149.49 352 176 352ZM240 224C266.51 224 288 202.51 288 176S266.51 128 240 128S192 149.49 192 176S213.49 224 240 224Z" })
  }
));
ChartScatterBubbleRegular.displayName = "ChartScatterBubbleRegular";
var ChartScatterBubble_default = ChartScatterBubbleRegular;
