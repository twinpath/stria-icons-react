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
var LocationSmile_exports = {};
__export(LocationSmile_exports, {
  default: () => LocationSmile_default
});
module.exports = __toCommonJS(LocationSmile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationSmileRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.375 0 0 86.375 0 192C0 268.75 25.625 291.25 172.75 502.375C177.625 508.75 184.75 512 192 512S206.375 508.75 211.25 502.375C358.375 291.25 384 268.75 384 192C384 86.375 297.625 0 192 0ZM192 446.125C177.625 425.5 164.5 407 152.625 390.125C58.375 256.5 48 240.25 48 192C48 112.625 112.625 48 192 48S336 112.625 336 192C336 240.25 325.625 256.5 231.375 390.125C219.5 407 206.375 425.5 192 446.125ZM136 176C149.25 176 160 165.25 160 152S149.25 128 136 128C122.75 128 112 138.75 112 152S122.75 176 136 176ZM248 176C261.25 176 272 165.25 272 152S261.25 128 248 128S224 138.75 224 152S234.75 176 248 176ZM237.999 227.25C214.75 253.625 169.25 253.625 145.999 227.25C137.25 217.25 121.999 216.375 112.125 225.125C102.125 233.875 101.25 249 109.999 259C130.75 282.5 160.75 296 192 296C223.375 296 253.25 282.5 273.999 259C282.75 249 281.75 233.875 271.875 225.125C261.999 216.375 246.75 217.25 237.999 227.25Z" })
  }
));
LocationSmileRegular.displayName = "LocationSmileRegular";
var LocationSmile_default = LocationSmileRegular;
