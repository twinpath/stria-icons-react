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
var Mitten_exports = {};
__export(Mitten_exports, {
  default: () => Mitten_default
});
module.exports = __toCommonJS(Mitten_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MittenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M335.987 384H80C53.483 384 31.987 405.49 31.987 432V464C31.987 490.51 53.483 512 80 512H335.987C362.504 512 384 490.51 384 464V432C384 405.49 362.504 384 335.987 384ZM352.116 464C352.116 472.836 344.95 480 336.112 480H80C71.16 480 63.996 472.836 63.996 464V432C63.996 423.162 71.16 416 80 416H336.112C344.95 416 352.116 423.162 352.116 432V464ZM445.655 236.857C436.36 201.314 405.309 180 372.979 180C350.969 180 330.461 189.5 315.955 206.125L295.573 117.125C279.94 48.125 219.916 0 149.887 0C138.633 0 127.254 1.25 116.123 3.875C35.717 22.625 -14.679 103.875 3.828 185L39.239 339.67C40.889 346.885 47.311 352 54.715 352C64.909 352 72.461 342.533 70.194 332.598L34.842 177.75C20.211 113.75 59.852 49.75 123.252 35C132.006 33 140.885 31.875 149.887 31.875C205.035 31.875 252.305 69.75 264.684 124.25L292.196 244.625L299.448 276L319.957 251.25L339.34 227.75C347.592 217.625 359.848 211.875 372.854 211.875C382.983 211.875 392.862 215.5 400.739 222.125C419.371 237.75 421.873 265.5 406.493 284.25L371.936 326.016C363.373 336.361 370.737 352 384.17 352H384.362C389.098 352 393.588 349.885 396.604 346.234L428.629 307.471C444.869 287.812 452.106 261.523 445.655 236.857Z" })
  }
));
MittenLight.displayName = "MittenLight";
var Mitten_default = MittenLight;
