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
const ChartPieDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M411.858 443.864C418.733 450.738 418.233 462.362 410.233 467.986C371.987 495.108 325.366 511.356 274.996 511.981C146.882 513.606 36.517 408.492 32.143 280.381C27.893 155.645 119.01 51.531 238.124 34.658C247.623 33.283 255.997 41.157 255.997 50.781V288.005L411.858 443.864Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.727 288.004H322.498L480.484 445.988C486.608 452.112 496.482 452.487 502.732 446.737C541.353 410.241 567.976 361.122 575.85 305.878C577.225 296.379 569.351 288.004 559.727 288.004ZM543.978 223.261C535.729 103.774 440.238 8.284 320.748 0.035C311.624 -0.59 304 7.16 304 16.284V240.01H527.73C536.854 240.01 544.603 232.385 543.978 223.261Z" })
    ]
  }
));
ChartPieDuotone.displayName = "ChartPieDuotone";
var ChartPie_default = ChartPieDuotone;
