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
var WineGlassEmpty_exports = {};
__export(WineGlassEmpty_exports, {
  default: () => WineGlassEmpty_default
});
module.exports = __toCommonJS(WineGlassEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineGlassEmptyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M303.4 192.658L288.747 29.104C287.271 12.621 273.653 0 257.343 0H62.657C46.346 0 32.729 12.621 31.252 29.104L16.6 192.658C9.436 272.619 67.319 341.098 144 349.842V480H79.999C71.163 480 63.999 487.162 63.999 496C63.999 504.836 71.163 512 79.999 512H240.001C248.837 512 256.001 504.836 256.001 496C256.001 487.162 248.837 480 240.001 480H176V349.842C252.68 341.098 310.564 272.619 303.4 192.658ZM48.473 195.514L62.657 32H256.878L271.526 195.514C274.335 226.855 264.645 257.094 244.243 280.656C224.139 303.873 196.324 317.568 165.922 319.217C158.649 319.61 161.464 319.616 154.078 319.217C123.675 317.568 95.86 303.873 75.757 280.656C55.354 257.094 45.665 226.855 48.473 195.514Z" })
  }
));
WineGlassEmptyLight.displayName = "WineGlassEmptyLight";
var WineGlassEmpty_default = WineGlassEmptyLight;
