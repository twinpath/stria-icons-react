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
var HorseHead_exports = {};
__export(HorseHead_exports, {
  default: () => HorseHead_default
});
module.exports = __toCommonJS(HorseHead_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HorseHeadSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.784 332.478L439.905 168.209C425.029 126.954 389.526 97.2 346.898 88.949C364.9 78.323 393.276 53.07 381.151 6.689C379.776 1.688 374.025 -1.312 369.15 0.563L166.886 76.197C35.877 123.328 0 238.842 0 398.736V479.996C0 497.748 14.251 512 32.002 512H268.268C292.02 512 307.521 486.997 296.77 465.744L256.017 383.985V383.234C210.389 379.734 171.387 352.606 151.76 313.726C150.135 310.601 150.76 306.725 153.26 304.35L165.386 292.223C169.261 288.348 176.012 289.598 178.262 294.724C193.138 328.353 226.515 352.106 265.768 352.106C282.894 352.106 298.77 346.98 312.521 338.854L358.524 402.737C364.525 411.238 374.275 416.113 384.526 416.113H434.779C443.28 416.113 451.405 412.738 457.406 406.737L502.784 366.858C511.659 357.731 514.41 344.23 509.784 332.478ZM328.022 223.965C314.771 223.965 304.021 213.214 304.021 199.962S314.771 175.959 328.022 175.959C341.273 175.959 352.024 186.711 352.024 199.962S341.273 223.965 328.022 223.965Z" })
  }
));
HorseHeadSolid.displayName = "HorseHeadSolid";
var HorseHead_default = HorseHeadSolid;
