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
var ChartPie_exports = {};
__export(ChartPie_exports, {
  default: () => ChartPie_default
});
module.exports = __toCommonJS(ChartPie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartPieSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.72 288.005H322.491L480.477 445.988C486.602 452.113 496.476 452.488 502.725 446.738C541.347 410.242 567.969 361.122 575.844 305.878C577.218 296.379 569.344 288.005 559.72 288.005ZM543.971 223.262C535.722 103.774 440.231 8.284 320.742 0.035C311.617 -0.59 303.993 7.16 303.993 16.284V240.01H527.723C536.847 240.01 544.596 232.386 543.971 223.262ZM255.997 288.005V50.78C255.997 41.156 247.623 33.282 238.124 34.657C119.01 51.53 27.893 155.644 32.143 280.381C36.517 408.492 146.882 513.606 274.996 511.981C325.366 511.356 371.987 495.108 410.233 467.986C418.233 462.362 418.733 450.738 411.858 443.864L255.997 288.005Z" })
  }
));
ChartPieSolid.displayName = "ChartPieSolid";
var ChartPie_default = ChartPieSolid;
