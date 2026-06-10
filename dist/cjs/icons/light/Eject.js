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
var Eject_exports = {};
__export(Eject_exports, {
  default: () => Eject_default
});
module.exports = __toCommonJS(Eject_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EjectLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.014 351.988H399.986C441.607 351.988 463.48 302.359 435.359 271.607L259.373 79.469C249.873 69.156 236.938 64 224 64C211.064 64 198.127 69.156 188.627 79.469L12.641 271.607C-15.48 302.234 6.393 351.988 48.014 351.988ZM36.238 293.221L212.162 101.15C216.291 96.668 221.352 96 224 96C226.65 96 231.711 96.668 235.775 101.082L411.744 293.201C418.072 300.121 415.807 307.561 414.539 310.438C413.273 313.309 409.322 319.988 399.986 319.988H48.014C38.687 319.988 34.73 313.275 33.463 310.391C32.199 307.514 29.936 300.086 36.238 293.221ZM432 416H16C7.156 416 0 423.156 0 432S7.156 448 16 448H432C440.844 448 448 440.844 448 432S440.844 416 432 416Z" })
  }
));
EjectLight.displayName = "EjectLight";
var Eject_default = EjectLight;
