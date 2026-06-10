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
var TemperatureHigh_exports = {};
__export(TemperatureHigh_exports, {
  default: () => TemperatureHigh_default
});
module.exports = __toCommonJS(TemperatureHigh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureHighRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 0C355.875 0 320 35.875 320 80S355.875 160 400 160S480 124.125 480 80S444.125 0 400 0ZM400 112C382.25 112 368 97.75 368 80S382.25 48 400 48S432 62.25 432 80S417.75 112 400 112ZM288 112C288 50.125 237.875 0 176 0S64 50.125 64 112V278.5C44.25 303.125 32 334 32 368C32 447.5 96.5 512 176 512S320 447.5 320 368C320 334 307.75 303.125 288 278.5V112ZM176 464C123.125 464 80 420.875 80 368C80 341 91.75 320.75 101.5 308.5L112 295.375V112C112 76.75 140.75 48 176 48S240 76.75 240 112V295.25L250.5 308.375C260.25 320.75 272 341 272 368C272 420.875 228.875 464 176 464ZM192 322.875V112C192 103.25 184.75 96 176 96S160 103.25 160 112V322.875C141.375 329.5 128 347.125 128 368C128 394.5 149.5 416 176 416S224 394.5 224 368C224 347.125 210.625 329.5 192 322.875Z" })
  }
));
TemperatureHighRegular.displayName = "TemperatureHighRegular";
var TemperatureHigh_default = TemperatureHighRegular;
