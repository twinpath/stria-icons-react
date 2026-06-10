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
var WarehouseFull_exports = {};
__export(WarehouseFull_exports, {
  default: () => WarehouseFull_default
});
module.exports = __toCommonJS(WarehouseFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WarehouseFullLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M610.625 118.375L338.625 3.75C326.75 -1.25 313.25 -1.25 301.375 3.75L29.375 118.375C11.625 125.75 0 143.25 0 162.5V496C0 504.801 7.201 512 16 512C24.801 512 32 504.801 32 496V162.5C32 156.125 35.875 150.25 41.75 147.75L313.75 33.125C317.75 31.5 322.25 31.5 326.25 33.125L598.25 147.75C604.125 150.25 608 156.125 608 162.5V496C608 504.801 615.201 512 624 512C632.801 512 640 504.801 640 496V162.5C640 143.25 628.375 125.75 610.625 118.375ZM512 352H352V256C352 238.326 337.674 224 320 224H128C110.326 224 96 238.326 96 256V480C96 497.672 110.326 512 128 512H512C529.674 512 544 497.672 544 480V384C544 366.326 529.674 352 512 352ZM320 480H128V384H320V480ZM320 352H128V256H320V352ZM512 480H352V384H512V480Z" })
  }
));
WarehouseFullLight.displayName = "WarehouseFullLight";
var WarehouseFull_default = WarehouseFullLight;
