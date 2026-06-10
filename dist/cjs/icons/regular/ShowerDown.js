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
var ShowerDown_exports = {};
__export(ShowerDown_exports, {
  default: () => ShowerDown_default
});
module.exports = __toCommonJS(ShowerDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShowerDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 208H352V192C352 112 292.787 46.119 216 34.426V24C216 10.744 205.254 0 192 0S168 10.744 168 24V34.426C91.213 46.119 32 112 32 192V208H24C10.746 208 0 218.744 0 232C0 245.254 10.746 256 24 256H360C373.254 256 384 245.254 384 232C384 218.744 373.254 208 360 208ZM304 208H80V192C80 130.25 130.25 80 192 80S304 130.25 304 192V208ZM69.262 290.879C66.887 287.176 61.113 287.176 58.738 290.879C54.275 297.83 32 333.25 32 349.754C32 368.699 46.35 384.102 64 384.102S96 368.699 96 349.754C96 333.25 73.725 297.83 69.262 290.879ZM197.262 290.879C194.887 287.176 189.113 287.176 186.738 290.879C182.275 297.83 160 333.25 160 349.754C160 368.699 174.35 384.102 192 384.102S224 368.699 224 349.754C224 333.25 201.725 297.83 197.262 290.879ZM314.738 290.879C310.275 297.83 288 333.25 288 349.754C288 368.699 302.35 384.102 320 384.102S352 368.699 352 349.754C352 333.25 329.725 297.83 325.262 290.879C322.887 287.176 317.113 287.176 314.738 290.879ZM250.738 418.777C246.275 425.727 224 461.148 224 477.652C224 496.596 238.35 512 256 512S288 496.596 288 477.652C288 461.148 265.725 425.727 261.262 418.777C258.887 415.074 253.113 415.074 250.738 418.777ZM122.738 418.777C118.275 425.727 96 461.148 96 477.652C96 496.596 110.35 512 128 512S160 496.596 160 477.652C160 461.148 137.725 425.727 133.262 418.777C130.887 415.074 125.113 415.074 122.738 418.777Z" })
  }
));
ShowerDownRegular.displayName = "ShowerDownRegular";
var ShowerDown_default = ShowerDownRegular;
