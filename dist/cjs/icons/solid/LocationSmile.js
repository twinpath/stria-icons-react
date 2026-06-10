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
const LocationSmileSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.375 0 0 86.369 0 191.988C0 268.734 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.734 384 191.988C384 86.369 297.625 0 192 0ZM256 133.24C270.75 133.24 282.75 145.238 282.75 159.986C282.75 174.736 270.75 186.734 256 186.734S229.25 174.736 229.25 159.986C229.25 145.238 241.25 133.24 256 133.24ZM128 133.24C142.75 133.24 154.75 145.238 154.75 159.986C154.75 174.736 142.75 186.734 128 186.734S101.25 174.736 101.25 159.986C101.25 145.238 113.25 133.24 128 133.24ZM292.25 274.104C267.25 303.227 230.75 319.975 192 319.975S116.75 303.227 91.75 274.104C86 267.354 86.75 257.23 93.625 251.605C100.25 245.855 110.375 246.605 116.125 253.355C134.875 275.354 162.625 287.977 191.875 287.977C221.25 287.977 248.875 275.354 267.75 253.23C273.5 246.605 283.625 245.73 290.25 251.48C297.125 257.23 297.875 267.354 292.25 274.104Z" })
  }
));
LocationSmileSolid.displayName = "LocationSmileSolid";
var LocationSmile_default = LocationSmileSolid;
