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
var PaletteBoxes_exports = {};
__export(PaletteBoxes_exports, {
  default: () => PaletteBoxes_default
});
module.exports = __toCommonJS(PaletteBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaletteBoxesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 288H512C547.346 288 576 259.346 576 224V128C576 92.652 547.346 64 512 64H448C412.654 64 384 92.652 384 128V224C384 259.346 412.654 288 448 288ZM416 128C416 110.355 430.355 96 448 96H512C529.645 96 544 110.355 544 128V224C544 241.645 529.645 256 512 256H448C430.355 256 416 241.645 416 224V128ZM128 288H288C323.346 288 352 259.346 352 224V64C352 28.652 323.346 0 288 0H128C92.654 0 64 28.652 64 64V224C64 259.346 92.654 288 128 288ZM96 64C96 46.355 110.355 32 128 32H288C305.645 32 320 46.355 320 64V224C320 241.645 305.645 256 288 256H128C110.355 256 96 241.645 96 224V64ZM624 480H560V384H624C632.844 384 640 376.844 640 368S632.844 352 624 352H16C7.156 352 0 359.156 0 368S7.156 384 16 384H80V480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H624C632.844 512 640 504.844 640 496S632.844 480 624 480ZM304 480H112V384H304V480ZM528 480H336V384H528V480Z" })
  }
));
PaletteBoxesLight.displayName = "PaletteBoxesLight";
var PaletteBoxes_default = PaletteBoxesLight;
