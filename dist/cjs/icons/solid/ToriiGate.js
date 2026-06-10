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
const ToriiGateSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128C497.625 128 512 113.625 512 96V0C469.875 21 423.5 32 376.5 32H135.5C88.5 32 42.125 21 0 0V96C0 113.625 14.375 128 32 128H64V192H16C7.125 192 0 199.125 0 208V240C0 248.875 7.125 256 16 256H64V496C64 504.875 71.125 512 80 512H112C120.875 512 128 504.875 128 496V256H384V496C384 504.875 391.125 512 400 512H432C440.875 512 448 504.875 448 496V256H496C504.875 256 512 248.875 512 240V208C512 199.125 504.875 192 496 192H448V128H480ZM224 192H128V128H224V192ZM384 192H288V128H384V192Z" })
  }
));
ToriiGateSolid.displayName = "ToriiGateSolid";
var ToriiGate_default = ToriiGateSolid;
