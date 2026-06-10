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
var Starship_exports = {};
__export(Starship_exports, {
  default: () => Starship_default
});
module.exports = __toCommonJS(Starship_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarshipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64C364.125 64 292.875 117.875 266.75 193L214.875 197.75L159 160H206.375C232.875 160 254.375 138.5 254.375 112S232.875 64 206.375 64H32C14.375 64 0 78.375 0 96V128C0 145.625 14.375 160 32 160H101.75L164.625 202.375L142.375 204.5C116 207 96 229.125 96 256S116 305 142.375 307.5L164.625 309.625L101.75 352H32C14.375 352 0 366.375 0 384V416C0 433.625 14.375 448 32 448H206.375C232.875 448 254.375 426.5 254.375 400S232.875 352 206.375 352H159L214.875 314.25L266.75 319C292.875 394.125 364.125 448 448 448C554 448 640 362 640 256C640 150 554 64 448 64ZM32 128V96H206.375C215.25 96 222.375 103.125 222.375 112S215.25 128 206.375 128H32ZM206.375 384C215.25 384 222.375 391.125 222.375 400S215.25 416 206.375 416H32V384H206.375ZM258.625 286.125L145.375 275.625C135.5 274.75 128 266.25 128 256C128 245.75 135.5 237.25 145.375 236.375L258.625 225.875C257 235.875 256.125 245.875 256 256C256.125 266.125 257 276.125 258.625 286.125ZM448 416C359.625 416 288 344.375 288 256S359.625 96 448 96S608 167.625 608 256S536.375 416 448 416ZM448 192C412.625 192 384 220.625 384 256S412.625 320 448 320S512 291.375 512 256S483.375 192 448 192ZM448 288C430.375 288 416 273.625 416 256S430.375 224 448 224S480 238.375 480 256S465.625 288 448 288Z" })
  }
));
StarshipLight.displayName = "StarshipLight";
var Starship_default = StarshipLight;
