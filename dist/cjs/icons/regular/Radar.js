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
var Radar_exports = {};
__export(Radar_exports, {
  default: () => Radar_default
});
module.exports = __toCommonJS(Radar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 256C504 396.877 386.629 510.262 244.308 503.731C118 497.936 14.064 394 8.269 267.692C1.738 125.371 115.123 8 256 8C305.625 8 354.125 22.875 395.125 50.875L419.687 26.312C429.076 16.924 444.299 16.924 453.687 26.312L453.688 26.312C463.076 35.701 463.076 50.924 453.687 60.312L257.999 256H257.875H320C320.125 291.125 291.875 319.75 256.875 320.125C221.75 320.625 192.875 292.75 192 257.625C191.25 222.625 218.75 193.375 253.875 192.25L288.375 157.625C277.999 154 267 152.125 256 152C198.021 152 151.226 199.278 152.01 257.439C152.754 312.705 199.295 359.245 254.561 359.99C312.722 360.774 360 313.979 360 256H408C408 330 355.125 391.375 285.25 405C277.75 396.75 267.125 392 256 392S234.25 396.75 226.75 405C166.25 393.125 118.875 345.75 107 285.25C115.25 277.75 120 267.125 120 256S115.25 234.25 107 226.75C120.625 156.875 181.999 104 256 104C280.875 104 304 110.625 324.625 121.375L360.25 85.75C329 66.375 292.875 56 256 56C157 56 74.875 128.25 59 222.75C47.875 229.875 40 241.75 40 256C40 270.25 47.875 282.125 59 289.25C73.25 373 139 438.75 222.75 453C229.875 464.125 241.75 472 256 472C270.25 472 282.125 464.125 289.25 453C383.75 437.125 456 355 456 256H504Z" })
  }
));
RadarRegular.displayName = "RadarRegular";
var Radar_default = RadarRegular;
