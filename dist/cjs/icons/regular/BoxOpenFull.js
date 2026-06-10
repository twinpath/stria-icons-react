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
var BoxOpenFull_exports = {};
__export(BoxOpenFull_exports, {
  default: () => BoxOpenFull_default
});
module.exports = __toCommonJS(BoxOpenFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxOpenFullRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M228.254 344.129L320 192.029L69.76 160.133C62.885 159.258 56.26 162.76 53.26 169.014L1.762 271.832C-2.863 281.088 2.012 292.096 11.762 294.848L209.754 351.385C216.754 353.385 224.379 350.383 228.254 344.129ZM528 412.762L344 458.529V320C344 306.75 333.25 296 320 296S296 306.75 296 320V458.584L112 412.766V358.17L64 344.496V425.492C64 440.16 74 452.838 88.25 456.318L304.375 510.137C309.5 511.379 314.719 512 319.922 512S330.313 511.379 335.375 510.137L551.75 456.318C566 452.713 576 440.035 576 425.492V344.496L528 358.127V412.762ZM638.293 271.758L586.786 169.008C583.786 162.758 577.036 159.258 570.159 160.133L320 192.008L411.762 344.135C415.514 350.385 423.139 353.385 430.266 351.385L628.166 294.885C638.043 292.01 642.793 281.01 638.293 271.758ZM194.256 143.975C192.881 138.842 192.006 133.584 192.006 128.199C192.006 92.895 220.76 64.1 256.014 64.1S320.02 92.895 320.02 128.199C320.02 139.467 316.895 149.734 311.77 158.998L320.02 160L475.286 140.219L511.04 41.814C514.04 33.426 509.79 24.287 501.415 21.283L445.909 1.002C437.657 -2.004 428.407 2.254 425.407 10.641L383.776 125.195C382.026 55.836 325.77 0 256.014 0C185.256 0 128 57.34 128 128.199C128 130.703 128.625 133.082 128.75 135.586L194.256 143.975Z" })
  }
));
BoxOpenFullRegular.displayName = "BoxOpenFullRegular";
var BoxOpenFull_default = BoxOpenFullRegular;
