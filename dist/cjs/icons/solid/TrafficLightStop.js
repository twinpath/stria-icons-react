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
var TrafficLightStop_exports = {};
__export(TrafficLightStop_exports, {
  default: () => TrafficLightStop_default
});
module.exports = __toCommonJS(TrafficLightStop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrafficLightStopSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 344C178.781 344 168 354.781 168 368S178.781 392 192 392S216 381.219 216 368S205.219 344 192 344ZM192 216C178.781 216 168 226.781 168 240C168 253.219 178.781 264 192 264S216 253.219 216 240C216 226.781 205.219 216 192 216ZM384 192H320V154.125C357.25 140.875 384 105.75 384 64H320V32C320 14.375 305.625 0 288 0H96C78.375 0 64 14.375 64 32V64H0C0 105.75 26.75 140.875 64 154.125V192H0C0 233.75 26.75 268.875 64 282.125V320H0C0 362.875 28.25 398.75 67 411C79.375 468.75 130.625 512 192 512S304.625 468.75 317 411C355.75 398.75 384 362.875 384 320H320V282.125C357.25 268.875 384 233.75 384 192ZM192 416C165.5 416 144 394.5 144 368S165.5 320 192 320S240 341.5 240 368S218.5 416 192 416ZM192 288C165.5 288 144 266.5 144 240S165.5 192 192 192S240 213.5 240 240S218.5 288 192 288ZM192 160C165.5 160 144 138.5 144 112S165.5 64 192 64S240 85.5 240 112S218.5 160 192 160Z" })
  }
));
TrafficLightStopSolid.displayName = "TrafficLightStopSolid";
var TrafficLightStop_default = TrafficLightStopSolid;
