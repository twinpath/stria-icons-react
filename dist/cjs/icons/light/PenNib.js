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
var PenNib_exports = {};
__export(PenNib_exports, {
  default: () => PenNib_default
});
module.exports = __toCommonJS(PenNib_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenNibLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.03 73.725L437.796 15.426C427.501 5.119 413.313 0 399.167 0C385.018 0 370.907 5.117 360.749 15.285L283.796 88.506L138.046 134.369C115.796 140.719 98.108 157.629 90.626 179.996L0.298 501.816C-0.483 504.617 0.298 507.604 2.345 509.654C3.86 511.17 5.907 512 8.001 512C8.72 512 9.454 511.906 10.173 511.703L332.015 421.15C354.03 413.768 370.936 396.014 377.171 373.912L423.03 227.893L496.03 150.996C506.327 140.688 511.999 126.971 511.999 112.361C511.999 97.75 506.327 84.033 496.03 73.725ZM346.372 365.225C342.987 377.23 333.815 386.795 323.349 390.346L74.171 460.453L175.69 358.934C185.208 364.553 196.165 368 207.999 368C243.296 368 271.999 339.297 271.999 304S243.296 240 207.999 240S143.999 268.703 143.999 304C143.999 315.834 147.446 326.791 153.065 336.309L51.462 437.912L120.972 190.15C125.056 177.945 134.722 168.596 147.651 164.893L289.601 120.227L391.349 221.975L346.372 365.225ZM175.999 304C175.999 286.359 190.358 272 207.999 272S239.999 286.359 239.999 304S225.64 336 207.999 336S175.999 321.641 175.999 304ZM472.823 128.965L409.886 195.262L316.337 101.713L383.39 37.9C387.136 34.15 392.888 32 399.167 32C405.493 32 411.321 34.201 415.157 38.041L473.392 96.34C477.714 100.668 479.999 106.207 479.999 112.361C479.999 118.514 477.714 124.053 472.823 128.965Z" })
  }
));
PenNibLight.displayName = "PenNibLight";
var PenNib_default = PenNibLight;
