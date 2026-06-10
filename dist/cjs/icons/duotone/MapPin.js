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
const MapPinDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 284.149V460.223C192 465.188 190.844 470.091 188.621 474.532L174.311 503.157C168.414 514.946 151.586 514.946 145.689 503.157L131.379 474.532C129.156 470.091 128 465.188 128 460.223V284.149C138.324 286.5 148.963 288 160 288S181.676 286.5 192 284.149Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 -0.001C80.471 -0.001 16 64.468 16 144S80.471 288 160 288S304 223.531 304 144S239.529 -0.001 160 -0.001ZM160 79.999C124.719 79.999 96 108.718 96 144C96 152.843 88.844 160 80 160S64 152.843 64 144C64 91.062 107.062 47.999 160 47.999C168.844 47.999 176 55.155 176 63.999S168.844 79.999 160 79.999Z" })
    ]
  }
));
MapPinDuotone.displayName = "MapPinDuotone";
var MapPin_default = MapPinDuotone;
