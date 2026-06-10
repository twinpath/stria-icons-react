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
var MarsStrokeRight_exports = {};
__export(MarsStrokeRight_exports, {
  default: () => MarsStrokeRight_default
});
module.exports = __toCommonJS(MarsStrokeRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M606.781 217.809C605.97 215.856 604.804 214.092 603.332 212.62L512.822 122.11C506.568 115.856 496.449 115.856 490.195 122.11S483.941 138.485 490.195 144.737L553.392 207.936H464V159.934C464 151.09 456.844 143.934 448 143.934S432 151.09 432 159.934V207.936H383.238C379.646 168.366 362.742 129.776 332.451 99.483C263.719 30.75 152.281 30.75 83.549 99.483C14.818 168.215 14.816 279.651 83.549 348.385C152.281 417.118 263.719 417.116 332.451 348.385C362.742 318.092 379.644 279.502 383.236 239.932H432V287.934C432 296.778 439.156 303.934 448 303.934S464 296.778 464 287.934V239.932H553.392L490.195 303.129C483.941 309.383 483.941 319.504 490.195 325.756C496.449 332.01 506.568 332.01 512.822 325.756L603.332 235.246C604.804 233.776 605.97 232.012 606.781 230.057C608.406 226.141 608.406 221.727 606.781 217.809ZM309.824 325.756C253.677 381.903 162.322 381.903 106.176 325.756C50.031 269.612 50.031 178.256 106.176 122.11C162.322 65.963 253.677 65.963 309.824 122.11C365.969 178.256 365.969 269.612 309.824 325.756Z" })
  }
));
MarsStrokeRightLight.displayName = "MarsStrokeRightLight";
var MarsStrokeRight_default = MarsStrokeRightLight;
