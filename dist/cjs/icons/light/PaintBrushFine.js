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
var PaintBrushFine_exports = {};
__export(PaintBrushFine_exports, {
  default: () => PaintBrushFine_default
});
module.exports = __toCommonJS(PaintBrushFine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaintBrushFineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M557.038 18.962C531.724 -6.321 490.565 -6.321 465.282 18.962L195.043 289.204C191.472 288.727 187.958 287.987 184.29 287.983C184.259 287.983 184.259 287.983 184.259 287.983C156.444 287.983 130.286 298.857 110.691 318.595C88.315 341.108 78.406 371.497 80.978 400.99C83.228 426.818 64.004 447.995 32.002 447.995C14.327 447.995 0 462.322 0 479.998C0 497.671 14.327 512 32.002 512C32.002 512 60.129 512 85.721 512C140.256 512 218.73 504.431 257.826 465.077C280.511 442.219 289.326 411.359 286.269 381.49L557.038 110.719C582.321 85.421 582.321 44.261 557.038 18.962ZM221.453 308.047L285.457 244.042L331.96 290.546L267.956 354.55L221.453 308.047ZM235.123 442.522C211.464 466.338 157.009 479.998 85.721 479.998H32.002C57.021 479.998 79.095 470.948 94.155 454.517C108.058 439.35 114.701 419.354 112.859 398.208C111.004 376.943 118.487 356.146 133.402 341.141C146.94 327.504 165.001 319.991 184.264 319.985C185.536 319.987 186.872 320.052 188.337 320.188L255.318 387.172C256.744 407.848 249.495 428.039 235.123 442.522ZM534.411 88.093L354.587 267.919L308.083 221.415L487.908 41.589C500.721 28.776 521.598 28.776 534.411 41.589S547.225 75.279 534.411 88.093Z" })
  }
));
PaintBrushFineLight.displayName = "PaintBrushFineLight";
var PaintBrushFine_default = PaintBrushFineLight;
