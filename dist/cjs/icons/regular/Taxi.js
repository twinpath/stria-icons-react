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
var Taxi_exports = {};
__export(Taxi_exports, {
  default: () => Taxi_default
});
module.exports = __toCommonJS(Taxi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TaxiRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 288C94.328 288 80 302.326 80 320C80 337.672 94.328 352 112 352S144 337.672 144 320C144 302.326 129.672 288 112 288ZM400 288C382.328 288 368 302.326 368 320C368 337.672 382.328 352 400 352S432 337.672 432 320C432 302.326 417.672 288 400 288ZM462.939 220.74L422.375 119.328C410.363 89.283 383.424 68.869 352 64.848V32C352 14.326 337.674 0 320 0H192C174.326 0 160 14.326 160 32V64.848C128.576 68.869 101.637 89.283 89.625 119.328L49.061 220.74C19.91 237.219 0 268.125 0 304V480C0 497.672 14.326 512 32 512S64 497.672 64 480V432H448V480C448 497.672 462.326 512 480 512S512 497.672 512 480V304C512 268.125 492.09 237.219 462.939 220.74ZM134.188 137.141C140.297 121.875 154.875 112 171.328 112H340.672C357.125 112 371.703 121.875 377.812 137.141L406.156 208H105.844L134.188 137.141ZM464 384H48V304C48 277.533 69.533 256 96 256H416C442.467 256 464 277.533 464 304V384Z" })
  }
));
TaxiRegular.displayName = "TaxiRegular";
var Taxi_default = TaxiRegular;
