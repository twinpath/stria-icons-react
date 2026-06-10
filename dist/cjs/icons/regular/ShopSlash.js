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
var ShopSlash_exports = {};
__export(ShopSlash_exports, {
  default: () => ShopSlash_default
});
module.exports = __toCommonJS(ShopSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShopSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.998 426.146V224H607.998C632.623 224 647.873 197.5 635.748 176.125L544.248 16.125C538.545 6.152 527.94 0 516.452 0H123.545C112.059 0 101.452 6.152 95.748 16.125L82.477 39.332L38.813 5.109C28.36 -3.062 13.282 -1.234 5.11 9.188C-3.062 19.625 -1.234 34.719 9.188 42.891L601.188 506.891C605.594 510.328 610.797 512 615.985 512C623.11 512 630.157 508.844 634.891 502.812C643.063 492.375 641.235 477.281 630.813 469.109L575.998 426.146ZM527.998 388.525L318.086 224H527.998V388.525ZM132.748 48H507.248L580.248 176H256.846L120.62 69.229L132.748 48ZM111.998 320.25V224H163.018L101.776 176H59.623L72.661 153.18L34.483 123.256L4.248 176.125C-7.877 197.5 7.373 224 31.998 224H63.998L64 464C64 490.51 85.491 512 112 512H336C362.51 512 384 490.51 384 464V397.203L285.819 320.25H111.998ZM335.998 464H111.998V368.25H335.998V464Z" })
  }
));
ShopSlashRegular.displayName = "ShopSlashRegular";
var ShopSlash_default = ShopSlashRegular;
