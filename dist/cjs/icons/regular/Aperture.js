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
var Aperture_exports = {};
__export(Aperture_exports, {
  default: () => Aperture_default
});
module.exports = __toCommonJS(Aperture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ApertureRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM417.156 152H251.381L299.248 69.094C348.482 80.488 390.469 110.789 417.156 152ZM320.666 255.998L288.332 312H223.666L191.334 256.002L223.668 200H288.334L320.666 255.998ZM246.492 64.48L163.625 208.008L115.826 125.221C148.859 89.838 195 67.021 246.492 64.48ZM85.346 168.414L168.246 312H72.381C66.963 294.27 64 275.479 64 256C64 224.438 71.795 194.709 85.346 168.414ZM94.844 360H260.619L212.752 442.906C163.518 431.512 121.531 401.211 94.844 360ZM265.508 447.52L348.375 303.992L396.174 386.779C363.141 422.162 317 444.979 265.508 447.52ZM426.654 343.586L343.754 200H439.619C445.037 217.73 448 236.521 448 256C448 287.562 440.205 317.291 426.654 343.586Z" })
  }
));
ApertureRegular.displayName = "ApertureRegular";
var Aperture_default = ApertureRegular;
