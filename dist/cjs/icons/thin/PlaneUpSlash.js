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
var PlaneUpSlash_exports = {};
__export(PlaneUpSlash_exports, {
  default: () => PlaneUpSlash_default
});
module.exports = __toCommonJS(PlaneUpSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneUpSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M271.997 96C271.997 64.412 297.743 16 319.997 16C342.253 16 367.997 64.412 367.997 96V187.566L559.997 297.281L559.99 354.771L575.167 366.838C575.523 365.514 575.997 364.236 575.997 362.783V297.281C575.997 291.563 572.919 286.25 567.935 283.406L383.997 178.281V96C383.997 60.654 355.341 0 319.997 0S255.997 60.654 255.997 96V113.139L271.997 125.855V96ZM636.98 497.725L12.988 1.73C9.534 -1.016 4.507 -0.424 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.256C631.076 513.465 636.036 511.771 638.261 508.975C641.011 505.506 640.433 500.475 636.98 497.725ZM367.997 387.938V408.002L431.997 456.002L432.599 496.141L319.997 463.338L207.997 496.002L208.003 455.99L271.997 408.002V307.914L79.997 362.783V297.268L182.517 238.693L169.029 227.973L72.06 283.375C67.607 285.938 63.997 292.156 63.997 297.281V362.783C63.997 374.227 74.941 380.877 84.388 378.158L255.997 329.127V400.002L198.404 443.189C194.372 446.221 191.997 450.971 191.997 456.002V496.002C191.997 507.285 202.618 513.816 211.872 511.502L319.997 480.002L428.122 511.502C437.595 513.871 447.997 507.029 447.997 496.002V456.002C447.997 450.971 445.622 446.221 441.591 443.189L367.997 387.938Z" })
  }
));
PlaneUpSlashThin.displayName = "PlaneUpSlashThin";
var PlaneUpSlash_default = PlaneUpSlashThin;
