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
var WonSign_exports = {};
__export(WonSign_exports, {
  default: () => WonSign_default
});
module.exports = __toCommonJS(WonSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WonSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 272.008H443.506L511.281 52.735C513.891 44.298 509.172 35.345 500.719 32.736C492.25 30.08 483.313 34.845 480.719 43.298L410.02 272.008H332.555L271.453 43.876C267.703 29.877 244.297 29.877 240.547 43.876L179.445 272.008H101.98L31.281 43.298C28.672 34.876 19.703 30.142 11.281 32.736C2.828 35.345 -1.891 44.298 0.719 52.735L68.494 272.008H16C7.156 272.008 0 279.164 0 288.007S7.156 304.007 16 304.007H78.385L129.297 468.719C131.391 475.516 137.188 479.859 144.875 480C152.016 479.859 158.188 475.031 160.031 468.141L203.996 304.007H308.004L351.969 468.141C353.812 475.031 359.984 479.859 367.125 480H367.422C374.422 480 380.641 475.438 382.703 468.719L433.615 304.007H496C504.844 304.007 512 296.851 512 288.007S504.844 272.008 496 272.008ZM143.484 406.268L111.873 304.007H170.873L143.484 406.268ZM212.566 272.008L256 109.858L299.434 272.008H212.566ZM368.516 406.268L341.127 304.007H400.127L368.516 406.268Z" })
  }
));
WonSignLight.displayName = "WonSignLight";
var WonSign_default = WonSignLight;
