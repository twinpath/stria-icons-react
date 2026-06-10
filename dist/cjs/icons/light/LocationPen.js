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
var LocationPen_exports = {};
__export(LocationPen_exports, {
  default: () => LocationPen_default
});
module.exports = __toCommonJS(LocationPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationPenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM281.531 109.957C273.914 102.398 264.031 97.125 253.305 96.18C240.066 95.008 227.406 99.594 218.145 108.773L117.887 208.098C115.652 210.313 114.133 213.137 113.512 216.211L101.258 276.996C99.023 288.109 108.891 297.906 120.086 295.68L181.336 283.527C184.43 282.914 187.273 281.402 189.508 279.184L288.609 181.031C296.227 173.477 301.531 163.664 302.477 153.016C303.645 139.875 299.02 127.312 289.766 118.133L281.531 109.957ZM170.312 253.328L137.344 259.867L143.938 227.156L206.82 164.926L233.199 191.102L170.312 253.328ZM267.133 157.43L255.828 168.648L229.449 142.469L240.758 131.246C245.445 126.602 253.039 126.594 257.727 131.25L267.137 140.586C271.812 145.227 271.84 152.762 267.133 157.43Z" })
  }
));
LocationPenLight.displayName = "LocationPenLight";
var LocationPen_default = LocationPenLight;
