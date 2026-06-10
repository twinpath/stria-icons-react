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
var HeadSideCoughSlash_exports = {};
__export(HeadSideCoughSlash_exports, {
  default: () => HeadSideCoughSlash_default
});
module.exports = __toCommonJS(HeadSideCoughSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideCoughSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.999 336C559.999 327.125 552.874 320 544.003 320C537.165 320 531.456 324.266 529.153 330.266L552.776 349.045C557.034 346.18 559.999 341.551 559.999 336ZM608.003 368C600.284 368 594.192 373.5 592.655 380.744L614.819 398.361C620.219 395.799 623.999 390.404 623.999 384C623.999 375.125 616.874 368 608.003 368ZM608.003 304C616.874 304 623.999 296.875 623.999 288S616.874 272 608.003 272C599.128 272 592.003 279.125 592.003 288S599.128 304 608.003 304ZM15.999 192C15.999 165.967 21.831 141.322 32.018 119.068L19.405 109.041C8.038 132.07 1.118 157.65 0.13 184.881C-2.036 244.486 23.114 298.156 63.999 334.875V504.012C63.999 508.424 67.575 512 71.987 512H72.012C76.423 512 79.999 508.424 79.999 504.012V327.738L74.69 322.971C37.391 289.473 15.999 241.736 15.999 192ZM636.981 497.734L12.989 1.73C11.524 0.566 9.774 0 8.024 0C5.673 0 3.337 1.031 1.739 3.012C-1.011 6.48 -0.433 11.512 3.02 14.262L627.012 510.266C628.497 511.438 630.247 512 631.997 512C634.34 512 636.684 510.969 638.262 508.984C641.012 505.516 640.434 500.484 636.981 497.734ZM191.999 16H234.094C296.401 16 355.063 46.455 391.008 97.457C404.819 117.084 421.083 165.021 435.43 207.316C444.124 232.941 452.354 256.994 460.03 275.322L479.831 291.061C480.35 285.814 479.581 280.322 477.219 275C456.219 227.875 428.719 123.25 404.094 88.25C365.594 33.625 302.469 0 234.094 0H196.405C172.77 0 150.022 4.361 128.805 12.035L142.774 23.139C158.415 18.57 174.901 16 191.999 16ZM397.204 416H321.374C304.661 416 289.735 403.779 288.149 387.143C286.331 368.057 301.29 352 319.999 352H325.057L307.979 338.426C289.661 343.586 274.907 358.205 272.405 377.682C268.647 406.951 291.454 432 319.999 432H397.229C390.626 450.625 372.831 464 351.969 464H271.969L271.995 504.018C271.997 508.426 275.573 512 279.981 512H279.983C284.393 512 287.969 508.424 287.969 504.012V480H351.969C380.012 480 403.813 462.012 412.475 436.934C416.018 426.672 408.059 416 397.204 416Z" })
  }
));
HeadSideCoughSlashThin.displayName = "HeadSideCoughSlashThin";
var HeadSideCoughSlash_default = HeadSideCoughSlashThin;
