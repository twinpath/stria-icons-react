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
var MapPin_exports = {};
__export(MapPin_exports, {
  default: () => MapPin_default
});
module.exports = __toCommonJS(MapPin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MapPinSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 316.941V460.223C128 465.189 129.156 470.09 131.379 474.533L145.689 503.154C151.586 514.947 168.414 514.947 174.311 503.154L188.621 474.533C190.844 470.09 192 465.189 192 460.223V316.941C181.607 318.861 170.941 320 160 320S138.393 318.861 128 316.941ZM160 0C80.471 0 16 64.471 16 144S80.471 288 160 288S304 223.529 304 144S239.529 0 160 0ZM160 80C124.719 80 96 108.719 96 144C96 152.844 88.844 160 80 160S64 152.844 64 144C64 91.062 107.062 48 160 48C168.844 48 176 55.156 176 64S168.844 80 160 80Z" })
  }
));
MapPinSolid.displayName = "MapPinSolid";
var MapPin_default = MapPinSolid;
