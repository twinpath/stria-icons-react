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
var Blender_exports = {};
__export(Blender_exports, {
  default: () => Blender_default
});
module.exports = __toCommonJS(Blender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlenderLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 400C274.75 400 264 410.75 264 424S274.75 448 288 448S312 437.25 312 424S301.25 400 288 400ZM470.58 0H48C21.49 0 0 21.49 0 48V208C0 234.51 21.49 256 48 256H150.25L157.75 342.5C121.75 356.375 96 391.125 96 432V480C96 497.6 110.4 512 128 512H448C465.6 512 480 497.6 480 480V432C480 392.625 456.25 358.875 422.25 344L501.543 40.078C506.834 19.803 491.533 0 470.58 0ZM48 224C39.25 224 32 216.875 32 208V48C32 39.125 39.25 32 48 32H130.75L147.5 224H48ZM448 432V480H128V432C128 396.75 156.75 368 192 368H384C419.25 368 448 396.75 448 432ZM453.875 96H304C295.199 96 288 103.199 288 112S295.199 128 304 128H445.5L428.875 192H304C295.199 192 288 199.199 288 208S295.199 224 304 224H420.5L391.25 336H189.375L162.875 32H470.625L453.875 96Z" })
  }
));
BlenderLight.displayName = "BlenderLight";
var Blender_default = BlenderLight;
