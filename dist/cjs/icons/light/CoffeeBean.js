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
var CoffeeBean_exports = {};
__export(CoffeeBean_exports, {
  default: () => CoffeeBean_default
});
module.exports = __toCommonJS(CoffeeBean_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeeBeanLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.288 32C219.795 32 148.332 69.664 93.24 124.705C-82.967 300.741 19.795 480 160.798 480C228.292 480 299.753 442.334 354.845 387.295C531.336 210.98 427.5 32 287.288 32ZM115.934 147.316C168.154 95.146 232.211 64 287.288 64C287.478 64 287.667 64 287.857 64.001C317.934 64.117 346.571 77.461 368.201 98.312C368.45 98.553 368.699 98.794 368.949 99.035C350.11 160.83 308.438 230.529 215.179 248.062C134.681 263.184 78.066 308.846 49.22 380.705C12.426 334.383 32.098 231.069 115.934 147.316ZM332.152 364.682C279.931 416.854 215.874 448 160.798 448C113.676 448 97.969 431.891 73.792 407.727C96.568 337.826 146.938 293.428 221.13 279.5C304.054 263.898 363.233 210.881 394.105 125.475C448.989 189.357 396.111 300.787 332.152 364.682Z" })
  }
));
CoffeeBeanLight.displayName = "CoffeeBeanLight";
var CoffeeBean_default = CoffeeBeanLight;
