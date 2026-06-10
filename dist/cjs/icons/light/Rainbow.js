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
var Rainbow_exports = {};
__export(Rainbow_exports, {
  default: () => Rainbow_default
});
module.exports = __toCommonJS(Rainbow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RainbowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 32C143.562 32 0 175.562 0 352V464C0 472.844 7.156 480 16 480S32 472.844 32 464V352C32 193.188 161.188 64 320 64S608 193.188 608 352V464C608 472.844 615.156 480 624 480S640 472.844 640 464V352C640 175.562 496.438 32 320 32ZM320 128C196.5 128 96 228.5 96 352V464C96 472.844 103.156 480 112 480S128 472.844 128 464V352C128 246.125 214.125 160 320 160S512 246.125 512 352V464C512 472.844 519.156 480 528 480S544 472.844 544 464V352C544 228.5 443.5 128 320 128ZM320 224C249.406 224 192 281.406 192 352V464C192 472.844 199.156 480 208 480S224 472.844 224 464V352C224 299.062 267.062 256 320 256S416 299.062 416 352V464C416 472.844 423.156 480 432 480S448 472.844 448 464V352C448 281.406 390.594 224 320 224Z" })
  }
));
RainbowLight.displayName = "RainbowLight";
var Rainbow_default = RainbowLight;
