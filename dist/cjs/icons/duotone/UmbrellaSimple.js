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
var UmbrellaSimple_exports = {};
__export(UmbrellaSimple_exports, {
  default: () => UmbrellaSimple_default
});
module.exports = __toCommonJS(UmbrellaSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.26 432.078C224.26 440.893 217.072 448.082 208.26 448.082C200.446 448.082 195.071 442.768 193.164 437.393C187.258 420.67 169.069 411.98 152.35 417.889C135.66 423.764 126.942 442.08 132.848 458.678C144.069 490.59 174.446 512 208.26 512C252.356 512 288.264 476.086 288.264 431.984V288H224.26V432.078Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.001 34.188V32C288.001 14.326 273.675 0 256.001 0S224.001 14.326 224.001 32V34.188C108.553 48.361 16.651 137.828 0.319 251.625C-2.435 270.812 13.003 288 32.555 288H479.446C498.999 288 514.436 270.812 511.682 251.625C495.35 137.828 403.448 48.361 288.001 34.188Z" })
    ]
  }
));
UmbrellaSimpleDuotone.displayName = "UmbrellaSimpleDuotone";
var UmbrellaSimple_default = UmbrellaSimpleDuotone;
