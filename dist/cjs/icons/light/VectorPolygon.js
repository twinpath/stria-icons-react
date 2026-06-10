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
var VectorPolygon_exports = {};
__export(VectorPolygon_exports, {
  default: () => VectorPolygon_default
});
module.exports = __toCommonJS(VectorPolygon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VectorPolygonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 160C433.674 160 448 145.672 448 128V64C448 46.326 433.674 32 416 32H352C334.328 32 320 46.326 320 64V80H128V64C128 46.326 113.674 32 96 32H32C14.328 32 0 46.326 0 64V128C0 145.672 14.328 160 32 160H48V352H32C14.328 352 0 366.326 0 384V448C0 465.672 14.328 480 32 480H96C113.674 480 128 465.672 128 448V432H320V448C320 465.672 334.328 480 352 480H416C433.674 480 448 465.672 448 448V384C448 366.326 433.674 352 416 352H364.256L340.355 312.158C347.322 306.287 352 297.822 352 288V224C352 214.176 347.322 205.711 340.355 199.842L364.256 160H416ZM352 64H416V128H352V64ZM32 128V64H96V128H32ZM96 448H32V384H96V448ZM320 384V400H128V384C128 366.326 113.674 352 96 352H80V160H96C113.674 160 128 145.672 128 128V112H320V128C320 137.822 324.678 146.289 331.645 152.158L307.744 192H256C238.328 192 224 206.326 224 224V288C224 305.672 238.328 320 256 320H307.744L331.645 359.842C324.678 365.711 320 374.176 320 384ZM320 288H256V224H320V288ZM416 448H352V384H416V448Z" })
  }
));
VectorPolygonLight.displayName = "VectorPolygonLight";
var VectorPolygon_default = VectorPolygonLight;
