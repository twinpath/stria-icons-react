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
var ToriiGate_exports = {};
__export(ToriiGate_exports, {
  default: () => ToriiGate_default
});
module.exports = __toCommonJS(ToriiGate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToriiGateLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 160C497.6 160 512 145.6 512 128V0C469.875 21 423.5 32 376.5 32H135.5C88.5 32 42.125 21 0 0V128C0 145.6 14.4 160 32 160H64V256H16C7.2 256 0 263.2 0 272V272C0 280.8 7.2 288 16 288H64V496C64 504.8 71.2 512 80 512H80C88.8 512 96 504.8 96 496V288H416V496C416 504.8 423.2 512 432 512H432C440.8 512 448 504.8 448 496V288H496C504.8 288 512 280.8 512 272V272C512 263.2 504.8 256 496 256H448V160H480ZM32 128V47.5C65.375 58.375 100.5 64 135.5 64H376.5C411.5 64 446.625 58.375 480 47.5V128H32ZM96 160H240V256H96V160ZM416 256H272V160H416V256Z" })
  }
));
ToriiGateLight.displayName = "ToriiGateLight";
var ToriiGate_default = ToriiGateLight;
