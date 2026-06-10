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
const PlanetMoonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0C476.625 0 448 28.625 448 64S476.625 128 512 128S576 99.375 576 64S547.375 0 512 0ZM224 64C100.25 64 0 164.25 0 288S100.25 512 224 512S448 411.75 448 288S347.75 64 224 64ZM224 464C127 464 48 385 48 288C48 261.375 54.125 235 65.875 211.125C71.125 219.125 80.125 224 89.75 224H114.75C123.25 224 131.375 227.375 137.375 233.375L192 288V320C192 337.625 206.375 352 224 352C224 352 224 391.625 224 415.125C224 419.625 225.875 423.875 229.25 427C232.625 430 237.125 431.5 241.625 431C245.125 430.625 248.625 430.25 252 429.625C261 428.125 268.875 422.375 272.875 414.125L313.25 333.5C317.625 324.625 320 314.875 320 304.875V288C320 270.375 305.625 256 288 256H223.5C213.5 256 204.125 252.125 197.125 245.125C185.25 233.25 184.5 214.125 195.5 201.5L245.25 144.125C251.125 135.375 254 125.25 255.125 114.875C337.375 129.625 400 201.625 400 288C400 385 321 464 224 464Z" })
  }
));
PlanetMoonRegular.displayName = "PlanetMoonRegular";
var PlanetMoon_default = PlanetMoonRegular;
