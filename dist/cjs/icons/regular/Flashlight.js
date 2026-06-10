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
var Flashlight_exports = {};
__export(Flashlight_exports, {
  default: () => Flashlight_default
});
module.exports = __toCommonJS(Flashlight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlashlightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 96H576C513.375 96 452.25 114.5 400.125 149.25L384 160H48C21.5 160 0 181.5 0 208V304C0 330.5 21.5 352 48 352H384L400.125 362.75C452.25 397.5 513.375 416 576 416H608C625.625 416 640 401.625 640 384V128C640 110.375 625.625 96 608 96ZM544 365.625C502.125 360.875 461.875 346.125 426.75 322.75L398.5 304H48V208H398.5L426.75 189.25C461.875 165.875 502.125 151.25 544 146.375V365.625ZM284 232H260C246.75 232 236 242.75 236 256C236 269.25 246.75 280 260 280H284C297.25 280 308 269.25 308 256C308 242.75 297.25 232 284 232Z" })
  }
));
FlashlightRegular.displayName = "FlashlightRegular";
var Flashlight_default = FlashlightRegular;
