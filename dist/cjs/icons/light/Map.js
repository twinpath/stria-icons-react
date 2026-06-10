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
var Map_exports = {};
__export(Map_exports, {
  default: () => Map_default
});
module.exports = __toCommonJS(Map_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MapLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.984 34.762C564.578 31.793 559.031 31.199 554.078 33.137L409.562 90.666L179.031 32.512C175.859 31.668 172.531 31.887 169.516 33.012L10.406 92.447C4.141 94.791 0 100.76 0 107.447V464C0 469.344 2.672 474.344 7.109 477.312S17.203 480.812 22.125 478.781L174.297 415.752L396.484 479.375C397.922 479.781 399.406 480 400.891 480C402.797 480 404.687 479.656 406.484 479L565.594 419.564C571.859 417.221 576 411.252 576 404.564V48.012C576 42.699 573.375 37.762 568.984 34.762ZM192 68.789L384 117.209V442.51L192 387.555V68.789ZM32 118.541L160 70.748V387.047L32 440.062V118.541ZM544 393.471L416 441.27V122.359C416.191 122.291 416.404 122.398 416.594 122.322L544 71.605V393.471Z" })
  }
));
MapLight.displayName = "MapLight";
var Map_default = MapLight;
