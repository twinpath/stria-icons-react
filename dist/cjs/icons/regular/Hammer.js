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
var Hammer_exports = {};
__export(Hammer_exports, {
  default: () => Hammer_default
});
module.exports = __toCommonJS(Hammer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HammerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.094 389.094C-7.031 417.219 -7.031 462.781 21.094 490.906C35.156 504.969 53.562 512 72 512S108.844 504.969 122.906 490.906L325.139 259.387L252.844 186.66L21.094 389.094ZM571.273 194.906L548.541 172.047C542.262 165.898 532.088 165.77 525.807 172.047L514.504 183.477L485.49 154.469C491.143 132.992 485.867 109.383 469.037 92.555L423.57 47.094C392.17 15.695 350.975 0 309.902 0C268.707 0 227.637 15.695 196.236 47.094L264.436 115.285V134.125C264.436 142.16 266.068 150.07 268.957 157.484L353.988 243.004C361.65 246.02 369.687 247.523 377.727 247.523C383.379 247.523 389.031 246.773 394.557 245.391L423.57 274.398L412.266 285.828C405.986 292.109 405.986 302.281 412.266 308.559L434.873 331.289C441.154 337.57 451.328 337.57 457.732 331.289L571.4 217.637C577.555 211.359 577.555 201.188 571.273 194.906ZM469.037 251.672L409 191.641L382.248 198.797C372.703 201.312 367.051 195.156 366.674 194.906L317.313 145.426C314.299 142.539 312.666 138.391 312.666 134.125V95.32L272.098 54.754C284.029 50.484 296.715 48.227 309.902 48.227C339.922 48.227 368.182 59.902 389.406 81.125L434.873 126.586C440.777 132.492 439.395 139.898 438.893 142.16L431.734 168.91L491.77 228.938L469.037 251.672Z" })
  }
));
HammerRegular.displayName = "HammerRegular";
var Hammer_default = HammerRegular;
