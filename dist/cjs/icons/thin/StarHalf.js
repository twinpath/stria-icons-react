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
var StarHalf_exports = {};
__export(StarHalf_exports, {
  default: () => StarHalf_default
});
module.exports = __toCommonJS(StarHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarHalfThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.944 10.073C287.942 4.033 281.425 0.062 276.149 3.001C271.93 5.352 268.462 9.006 266.189 13.688L197.787 154.5L44.83 177.125C35.457 178.5 28.113 184.781 25.238 193.875C22.332 202.906 24.613 212.281 31.332 218.906L142.103 328.469L115.918 483.281C114.67 490.531 116.512 497.531 121.105 503.031C125.793 508.656 132.824 512 139.887 512C143.853 512 147.666 511 151.197 509.094L279.535 440.581C284.746 437.8 288 432.374 288 426.467C288 426.467 287.966 74.526 287.944 10.073ZM143.572 495C138.742 497.697 130.334 494.07 131.668 485.969L159.291 322.969L42.58 207.531C38.234 203.24 39.498 194.107 47.174 192.938L208.474 169.062L272 38.312V426.475L143.572 495Z" })
  }
));
StarHalfThin.displayName = "StarHalfThin";
var StarHalf_default = StarHalfThin;
