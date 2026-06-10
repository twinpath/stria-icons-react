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
var MessageSlash_exports = {};
__export(MessageSlash_exports, {
  default: () => MessageSlash_default
});
module.exports = __toCommonJS(MessageSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32C529.6 32 544 46.4 544 64V351.297L572.031 373.428C574.449 366.695 576 359.549 576 352.002V64C576 28.75 547.25 0 512 0H128C119.793 0 111.998 1.693 104.775 4.529L139.57 32H512ZM367.924 384.002C360.996 384.002 354.254 386.25 348.713 390.408L256 460.002V400.002C256 391.164 248.836 384.002 240 384.002H128C110.4 384.002 96 369.602 96 352.002V160.684L64 135.42V352.002C64 387.252 92.75 416.002 128 416.002H224V500.002C224 509.84 235.025 515.479 243.125 509.627L368 416.002H419.392L378.861 384.002H367.924ZM633.908 483.436L25.904 3.418C18.998 -2.02 8.935 -0.848 3.435 6.059C-2.033 12.996 -0.846 23.061 6.092 28.545L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.92 633.908 483.436Z" })
  }
));
MessageSlashLight.displayName = "MessageSlashLight";
var MessageSlash_default = MessageSlashLight;
