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
var UmbrellaBeach_exports = {};
__export(UmbrellaBeach_exports, {
  default: () => UmbrellaBeach_default
});
module.exports = __toCommonJS(UmbrellaBeach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaBeachRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M443.517 18.069C409.764 5.732 375.262 0 341.386 0C251.003 0 164.621 41.371 107.993 112.025C101.241 120.374 105.241 132.96 115.368 136.573C303.109 203.573 447.451 258.263 618.406 319.128C620.157 319.751 622.03 320.125 623.907 320.125C632.157 320.125 639.782 313.77 639.907 305.047C643.032 180.686 567.151 62.928 443.517 18.069ZM177.997 108.411C220.875 71.9 275.755 50.343 332.509 48.224C328.008 51.963 295.631 76.636 262.255 138.941L177.997 108.411ZM452.642 208.1L307.383 155.39C321.633 130.218 338.009 108.162 355.511 91.589C380.889 67.664 405.639 57.57 423.017 63.925C440.517 70.28 452.767 93.707 456.77 128.349C459.645 152.399 457.895 179.564 452.642 208.1ZM497.773 224.424C505.148 189.533 509.898 147.664 501.898 106.542C547.651 144.673 579.029 197.882 588.779 257.446L497.773 224.424ZM576.015 488.075C576.015 501.283 565.265 512 552.014 512L24.001 510.405C10.75 510.405 0 499.689 0 486.48C0 473.271 10.75 462.555 24.001 462.555L252.034 463.244L330.382 248.462C341.126 252.397 351.978 256.369 362.609 260.265C366.933 261.85 371.142 263.39 375.443 264.965L303.059 463.398L552.014 464.15C565.265 464.15 576.015 474.866 576.015 488.075Z" })
  }
));
UmbrellaBeachRegular.displayName = "UmbrellaBeachRegular";
var UmbrellaBeach_default = UmbrellaBeachRegular;
