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
var ChartBar_exports = {};
__export(ChartBar_exports, {
  default: () => ChartBar_default
});
module.exports = __toCommonJS(ChartBar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartBarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 240H304C312.828 240 320 232.828 320 224S312.828 208 304 208H144C135.172 208 128 215.172 128 224S135.172 240 144 240ZM144 144H368C376.828 144 384 136.828 384 128S376.828 112 368 112H144C135.172 112 128 119.172 128 128S135.172 144 144 144ZM496 448H80C53.531 448 32 426.469 32 400V48C32 39.172 24.828 32 16 32S0 39.172 0 48V400C0 444.125 35.875 480 80 480H496C504.828 480 512 472.828 512 464S504.828 448 496 448ZM144 336H432C440.828 336 448 328.828 448 320S440.828 304 432 304H144C135.172 304 128 311.172 128 320S135.172 336 144 336Z" })
  }
));
ChartBarLight.displayName = "ChartBarLight";
var ChartBar_default = ChartBarLight;
