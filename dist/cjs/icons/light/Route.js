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
var Route_exports = {};
__export(Route_exports, {
  default: () => Route_default
});
module.exports = __toCommonJS(Route_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 72C383.906 72 384.094 120 416 120C448.094 120 447.906 72 416 72ZM432 352H320C293.5 352 272 330.5 272 304S293.5 256 320 256H416C416 256 512 149 512 96S469 0 416 0S320 43 320 96C320 130.625 360.875 188.25 389.25 224H320C275.875 224 240 259.875 240 304S275.875 384 320 384H432C458.5 384 480 405.5 480 432S458.5 480 432 480H122.75C151.125 444.25 192 386.625 192 352C192 299 149 256 96 256S0 299 0 352S96 512 96 512H432C476.125 512 512 476.125 512 432S476.125 352 432 352ZM352 96C352 60.75 380.75 32 416 32S480 60.75 480 96C480 116.375 449.875 164 416 206.375C382 163.75 352 115.75 352 96ZM32 352C32 316.75 60.75 288 96 288S160 316.75 160 352C160 372.375 129.875 420 96 462.375C62 419.75 32 371.75 32 352ZM96 328C63.906 328 64.094 376 96 376C128.094 376 127.906 328 96 328Z" })
  }
));
RouteLight.displayName = "RouteLight";
var Route_default = RouteLight;
