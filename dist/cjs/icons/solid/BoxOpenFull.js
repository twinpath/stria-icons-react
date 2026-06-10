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
const BoxOpenFullSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M194.262 143.75C192.887 138.625 192.012 133.375 192.012 128C192.012 92.75 220.762 64 256.012 64S320.012 92.75 320.012 128C320.012 139.25 316.887 149.5 311.762 158.75L320.012 159.75L475.262 140L511.012 41.75C514.012 33.375 509.762 24.25 501.387 21.25L445.887 1C437.637 -2 428.387 2.25 425.387 10.625L383.762 125C382.012 55.75 325.762 0 256.012 0C185.262 0 128.012 57.25 128.012 128C128.012 130.5 128.637 132.875 128.762 135.375L194.262 143.75ZM638.293 271.758L586.786 169.008C583.786 162.758 577.036 159.258 570.159 160.133L320 192.008L411.762 344.135C415.514 350.385 423.139 353.385 430.266 351.385L628.166 294.885C638.043 292.01 642.793 281.01 638.293 271.758ZM228.254 344.129L320 192.029L69.76 160.133C62.885 159.258 56.26 162.76 53.26 169.014L1.762 271.832C-2.863 281.088 2.012 292.096 11.762 294.848L209.754 351.385C216.754 353.385 224.379 350.383 228.254 344.129ZM425.75 385.266C408.75 385.266 392.875 376.316 384.25 362.021L320 256L255.75 362.021C247.125 376.439 231.25 385.389 214.25 385.389C209.75 385.389 205.25 384.768 201 383.525L64 344.496V425.49C64 440.158 74 452.836 88.25 456.316L304.375 510.135C314.625 512.621 325.25 512.621 335.375 510.135L551.75 456.316C566 452.711 576 440.033 576 425.49V344.496L439 383.4C434.75 384.645 430.25 385.266 425.75 385.266Z" })
  }
));
BoxOpenFullSolid.displayName = "BoxOpenFullSolid";
var BoxOpenFull_default = BoxOpenFullSolid;
