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
var HouseHeart_exports = {};
__export(HouseHeart_exports, {
  default: () => HouseHeart_default
});
module.exports = __toCommonJS(HouseHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseHeartSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.072 231.906L511.986 185.459V47.985C511.986 39.156 504.832 31.985 495.989 31.985H431.993C423.15 31.985 415.995 39.156 415.995 47.985V101.473L309.075 7.922C303.044 2.64 295.52 0 287.996 0C281.866 0 273.893 1.815 266.919 7.922L10.922 231.906C3.842 238.104 0 246.947 0 256C0 273.557 14.222 288 32 288H64.023V448C64.023 483.345 92.677 512 128.022 512H447.989C483.334 512 511.988 483.345 511.988 448V288H543.994C561.73 288 575.994 273.602 575.994 256C575.994 246.947 572.152 238.104 565.072 231.906ZM397.685 283.778C397.685 299.148 392.002 314.523 380.638 326.312L297.651 411.871C294.959 414.623 291.47 415.999 287.982 415.999S281.005 414.623 278.311 411.871L195.326 326.312C183.949 314.509 178.267 299.113 178.267 283.724C178.267 254.191 200.717 223.998 235.532 223.998C251.475 223.998 267.52 230.585 279.413 242.879L287.86 251.633L296.305 242.879C308.266 230.585 324.379 223.998 340.348 223.998C375.051 223.998 397.685 254.088 397.685 283.778Z " })
  }
));
HouseHeartSolid.displayName = "HouseHeartSolid";
var HouseHeart_default = HouseHeartSolid;
