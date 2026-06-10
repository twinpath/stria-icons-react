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
var DollyEmpty_exports = {};
__export(DollyEmpty_exports, {
  default: () => DollyEmpty_default
});
module.exports = __toCommonJS(DollyEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollyEmptyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.625 336.375L311.08 415.92C299.982 396.914 279.596 384 256 384C252.635 384 249.4 384.49 246.176 384.99L138.094 39.312C130.781 15.781 109.281 0 84.656 0H8C3.594 0 0 3.594 0 8S3.594 16 8 16H84.656C102.25 16 117.594 27.281 122.844 44.062L230.76 389.207C207.975 399.004 192 421.625 192 448C192 483.346 220.654 512 256 512S320 483.346 320 448C320 441.963 318.896 436.238 317.334 430.701L570.375 351.625C574.594 350.312 576.969 345.844 575.625 341.625C574.312 337.406 569.875 335.062 565.625 336.375ZM256 496C229.533 496 208 474.467 208 448S229.533 400 256 400S304 421.533 304 448S282.467 496 256 496Z" })
  }
));
DollyEmptyThin.displayName = "DollyEmptyThin";
var DollyEmpty_default = DollyEmptyThin;
