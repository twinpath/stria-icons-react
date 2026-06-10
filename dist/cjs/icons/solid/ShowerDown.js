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
const ShowerDownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 192H352C352 114.596 297.029 50.053 224 35.225V16C224 7.162 216.836 0 208 0H176C167.164 0 160 7.162 160 16V35.225C86.971 50.053 32 114.596 32 192H16C7.164 192 0 199.162 0 208V240C0 248.836 7.164 256 16 256H368C376.836 256 384 248.836 384 240V208C384 199.162 376.836 192 368 192ZM69.262 290.879C66.887 287.176 61.113 287.176 58.738 290.879C54.275 297.83 32 333.25 32 349.754C32 368.699 46.35 384.102 64 384.102S96 368.699 96 349.754C96 333.25 73.725 297.83 69.262 290.879ZM314.738 290.879C310.275 297.83 288 333.25 288 349.754C288 368.699 302.35 384.102 320 384.102S352 368.699 352 349.754C352 333.25 329.725 297.83 325.262 290.879C322.887 287.176 317.113 287.176 314.738 290.879ZM122.738 418.777C118.275 425.727 96 461.148 96 477.652C96 496.596 110.35 512 128 512S160 496.596 160 477.652C160 461.148 137.725 425.727 133.262 418.777C130.887 415.074 125.113 415.074 122.738 418.777ZM197.262 290.879C194.887 287.176 189.113 287.176 186.738 290.879C182.275 297.83 160 333.25 160 349.754C160 368.699 174.35 384.102 192 384.102S224 368.699 224 349.754C224 333.25 201.725 297.83 197.262 290.879ZM250.738 418.777C246.275 425.727 224 461.148 224 477.652C224 496.596 238.35 512 256 512S288 496.596 288 477.652C288 461.148 265.725 425.727 261.262 418.777C258.887 415.074 253.113 415.074 250.738 418.777Z" })
  }
));
ShowerDownSolid.displayName = "ShowerDownSolid";
var ShowerDown_default = ShowerDownSolid;
