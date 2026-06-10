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
var DiceD12_exports = {};
__export(DiceD12_exports, {
  default: () => DiceD12_default
});
module.exports = __toCommonJS(DiceD12_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD12Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.25 178.5L457.5 83.125C451.375 70.75 441.25 60.625 428.875 54.5L333.5 6.75C324.625 2.25 314.875 0 304.875 0H207.125C197.125 0 187.375 2.25 178.5 6.75L83.125 54.5C70.75 60.625 60.625 70.75 54.5 83.125L6.75 178.5C2.25 187.375 0 197.125 0 207.125V304.875C0 314.875 2.25 324.625 6.75 333.5L54.5 428.875C60.625 441.25 70.75 451.375 83.125 457.5L178.5 505.25C187.375 509.625 197.125 512 207.125 512H304.875C314.875 512 324.625 509.75 333.5 505.25L428.875 457.5C441.25 451.375 451.375 441.25 457.5 428.875L505.25 333.5C509.625 324.625 512 314.875 512 304.875V207.125C512 197.125 509.75 187.375 505.25 178.5ZM475.75 190.875L380.125 300.125L272 246.125V140.25L429 97.375L475.75 190.875ZM308.75 480H203.25L147.875 328L256 273.875L364.125 328L308.75 480ZM199.5 32H312.5L395.25 73.375L256 111.375L116.75 73.375L199.5 32ZM83 97.375L240 140.25V246.125L131.875 300.125L36.25 190.875L83 97.375ZM32 312.5V234.625L113.999 328.25L162.375 461.375L87.875 424.125L32 312.5ZM424.125 424.125L349.625 461.375L397.999 328.25L480 234.625V312.5L424.125 424.125Z " })
  }
));
DiceD12Light.displayName = "DiceD12Light";
var DiceD12_default = DiceD12Light;
