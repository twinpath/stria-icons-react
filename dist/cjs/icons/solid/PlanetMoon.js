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
var PlanetMoon_exports = {};
__export(PlanetMoon_exports, {
  default: () => PlanetMoon_default
});
module.exports = __toCommonJS(PlanetMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlanetMoonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0C476.625 0 448 28.625 448 64S476.625 128 512 128S576 99.375 576 64S547.375 0 512 0ZM224 64C100.25 64 0 164.25 0 288S100.25 512 224 512S448 411.75 448 288S347.75 64 224 64ZM320 336.875C320 346.875 317.625 356.625 313.25 365.5L272.875 446.125C268.875 454.375 261 460.125 252 461.625C248.625 462.25 245.125 462.625 241.625 463C237.125 463.5 232.625 462 229.25 459C225.875 455.875 224 451.625 224 447.125C224 423.625 224 384 224 384C206.375 384 192 369.625 192 352V320L137.375 265.375C131.375 259.375 123.25 256 114.75 256H89.75C69 256 55.25 234.5 63.75 215.5C91.375 154.5 152.75 112 224 112C225.5 112 227 112 228.5 112C243.875 112.625 256 125.25 256 140.625C256 153.25 252.25 165.625 245.25 176.125L195.5 233.5C184.5 246.125 185.25 265.25 197.125 277.125C204.125 284.125 213.5 288 223.5 288H288C305.625 288 320 302.375 320 320V336.875Z" })
  }
));
PlanetMoonSolid.displayName = "PlanetMoonSolid";
var PlanetMoon_default = PlanetMoonSolid;
