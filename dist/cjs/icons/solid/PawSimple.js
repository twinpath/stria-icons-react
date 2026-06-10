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
var PawSimple_exports = {};
__export(PawSimple_exports, {
  default: () => PawSimple_default
});
module.exports = __toCommonJS(PawSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PawSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 128.011C170.5 128.011 192 106.508 192 80.005S170.5 32 144 32S96 53.502 96 80.005S117.5 128.011 144 128.011ZM96 192.018C96 165.515 74.5 144.012 48 144.012S0 165.515 0 192.018S21.5 240.023 48 240.023S96 218.521 96 192.018ZM304 128.011C330.5 128.011 352 106.508 352 80.005S330.5 32 304 32S256 53.502 256 80.005S277.5 128.011 304 128.011ZM400 144.012C373.5 144.012 352 165.515 352 192.018S373.5 240.023 400 240.023S448 218.521 448 192.018S426.5 144.012 400 144.012ZM367.25 300.78C341 286.029 320.125 239.398 300.125 203.019C284.375 174.266 254.25 160.014 224 160.014S163.625 174.266 147.875 203.019C127.5 239.898 107.75 285.528 80.625 300.78C51.625 317.157 32 348.16 32 384.039C32 437.045 75 479.925 128 479.925C179.75 481.8 200.25 448.046 224 448.046S268.25 481.8 320 479.925C373 479.925 416 437.045 416 384.039C416 348.16 396.375 317.157 367.25 300.78Z" })
  }
));
PawSimpleSolid.displayName = "PawSimpleSolid";
var PawSimple_default = PawSimpleSolid;
