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
var Seedling_exports = {};
__export(Seedling_exports, {
  default: () => Seedling_default
});
module.exports = __toCommonJS(Seedling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SeedlingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 96H16C7.156 96 0 103.156 0 112C0 226.688 93.312 320 208 320H256V464C256 472.836 263.164 480 272 480S288 472.836 288 464V304C288 189.312 194.688 96 80 96ZM208 288C116.344 288 40.828 217.594 32.719 128H80C171.656 128 247.172 198.406 255.281 288H208ZM496 32H432C365.25 32 302.094 64.406 263.047 118.656C257.891 125.812 259.516 135.812 266.688 141C273.828 146.125 283.844 144.5 289.016 137.344C322.078 91.406 375.516 64 432 64H479.266C471.531 147.781 403.781 216.375 318.688 223.406C309.875 224.125 303.328 231.844 304.047 240.656C304.75 249.031 311.734 255.344 319.984 255.344C320.422 255.344 320.875 255.312 321.313 255.281C428.234 246.469 512 155.406 512 48C512 39.156 504.844 32 496 32Z" })
  }
));
SeedlingLight.displayName = "SeedlingLight";
var Seedling_default = SeedlingLight;
