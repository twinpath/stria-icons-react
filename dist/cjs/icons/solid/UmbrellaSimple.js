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
const UmbrellaSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.001 34.188V32C288.001 14.326 273.675 0 256.001 0S224.001 14.326 224.001 32V34.188C108.553 48.361 16.651 137.828 0.319 251.625C-2.435 270.812 13.003 288 32.555 288H479.446C498.999 288 514.436 270.812 511.682 251.625C495.35 137.828 403.448 48.361 288.001 34.188ZM223.997 432.078C223.997 440.893 216.809 448.082 207.997 448.082C200.182 448.082 194.807 442.768 192.901 437.393C186.995 420.67 168.805 411.98 152.087 417.889C135.397 423.764 126.678 442.08 132.585 458.678C143.805 490.59 174.182 512 207.997 512C252.093 512 288.001 476.086 288.001 431.984V320H223.997V432.078Z" })
  }
));
UmbrellaSimpleSolid.displayName = "UmbrellaSimpleSolid";
var UmbrellaSimple_default = UmbrellaSimpleSolid;
