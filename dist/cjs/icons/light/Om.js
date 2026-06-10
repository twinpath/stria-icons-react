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
var Om_exports = {};
__export(Om_exports, {
  default: () => Om_default
});
module.exports = __toCommonJS(Om_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OmLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M429.248 191.816C396.28 191.816 363.998 205.191 340.686 228.504C323.326 245.863 299.295 255.816 274.748 255.816H219.801C237.155 237.941 247.998 214.141 247.998 187.816C247.998 132.676 201.342 87.816 143.998 87.816C111.139 87.816 80.889 102.285 61.03 127.504C55.561 134.457 56.748 144.504 63.686 149.973C70.655 155.473 80.717 154.238 86.155 147.316C99.92 129.832 120.998 119.816 143.998 119.816C183.701 119.816 215.998 150.316 215.998 187.816S183.701 255.816 143.998 255.816C135.155 255.816 127.998 262.973 127.998 271.816S135.155 287.816 143.998 287.816C145.846 287.816 147.571 287.383 149.395 287.291C150.276 287.441 151.074 287.816 151.998 287.816C210.311 287.816 255.998 329.988 255.998 383.816C255.998 436.754 207.811 479.816 148.576 479.816C91.67 479.816 40.389 431.223 31.842 369.191C30.639 360.441 22.655 354.16 13.811 355.535C5.061 356.738 -1.064 364.801 0.155 373.566C10.826 451.082 76.03 511.816 148.576 511.816C225.451 511.816 287.998 454.395 287.998 383.816C287.998 344.986 270.149 311.104 242.026 287.816H274.748C307.717 287.816 339.998 274.441 363.311 251.129C380.67 233.77 404.701 223.816 431.998 223.816C458.467 223.816 479.998 245.348 479.998 271.816V399.816C479.998 426.285 458.467 447.816 431.998 447.816H407.545C389.264 447.816 372.811 437.645 364.623 421.285L350.311 392.66C346.358 384.754 336.717 381.582 328.842 385.504C320.936 389.457 317.733 399.066 321.686 406.973L335.998 435.598C349.655 462.879 377.061 479.816 407.545 479.816H431.998C476.108 479.816 511.998 443.926 511.998 399.816V271.816C511.998 227.707 476.108 191.816 429.248 191.816ZM282.201 142.723L321.889 158.145C338.373 164.566 355.623 167.738 372.858 167.738C397.795 167.738 422.686 161.082 445.155 148.004L456.061 141.645C463.686 137.191 466.264 127.395 461.826 119.754C457.358 112.145 447.592 109.582 439.936 113.988L429.03 120.348C399.076 137.801 365.139 140.598 333.483 128.332L293.795 112.91C285.576 109.691 276.295 113.785 273.092 122.02S273.967 139.535 282.201 142.723ZM347.639 103.551C353.326 109.066 360.623 111.832 367.936 111.832C375.311 111.832 382.717 109.02 388.53 103.379L415.92 75.973C421.123 70.426 423.998 63.27 423.998 55.816S421.123 41.207 415.561 35.285L388.155 7.895C377.061 -2.512 359.311 -2.871 347.467 8.254L320.076 35.66C314.873 41.207 311.998 48.363 311.998 55.816S314.873 70.426 320.436 76.348L347.639 103.551ZM367.998 32.973L390.842 55.816L367.998 78.66L345.155 55.816L367.998 32.973Z" })
  }
));
OmLight.displayName = "OmLight";
var Om_default = OmLight;
