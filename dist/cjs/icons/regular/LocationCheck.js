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
var LocationCheck_exports = {};
__export(LocationCheck_exports, {
  default: () => LocationCheck_default
});
module.exports = __toCommonJS(LocationCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCheckRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 445.836C174.307 420.371 158.582 397.969 144.623 378.086C57.562 254.066 48 238.875 48 192C48 112.598 112.598 48 192 48S336 112.598 336 192C336 238.875 326.438 254.066 239.377 378.086C225.412 397.98 209.684 420.383 192 445.836ZM249.781 136.375L170.656 228.719L132.969 191.031C123.594 181.656 108.406 181.656 99.031 191.031S89.656 215.594 99.031 224.969L155.031 280.969C159.531 285.469 165.656 288 172 288C172.312 288 172.625 288 172.906 287.969C179.594 287.719 185.875 284.687 190.219 279.625L286.219 167.625C294.844 157.562 293.687 142.406 283.625 133.781C273.594 125.188 258.438 126.344 249.781 136.375Z" })
  }
));
LocationCheckRegular.displayName = "LocationCheckRegular";
var LocationCheck_default = LocationCheckRegular;
