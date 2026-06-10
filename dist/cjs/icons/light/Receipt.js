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
var Receipt_exports = {};
__export(Receipt_exports, {
  default: () => Receipt_default
});
module.exports = __toCommonJS(Receipt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReceiptLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.093 240H112.031C103.229 240 96.027 247.2 96.027 256V256C96.027 264.8 103.229 272 112.031 272H336.093C344.896 272 352.098 264.8 352.098 256V256C352.098 247.2 344.896 240 336.093 240ZM336.093 336H112.031C103.229 336 96.027 343.2 96.027 352V352C96.027 360.8 103.229 368 112.031 368H336.093C344.896 368 352.098 360.8 352.098 352V352C352.098 343.2 344.896 336 336.093 336ZM418.241 0C412.364 0 406.363 1.75 400.861 5.75L357.349 37L318.838 9.25C310.336 3.25 300.583 0.125 290.706 0.125S271.075 3.125 262.698 9.25L224.062 37L185.426 9.25C177.049 3.25 167.171 0.125 157.294 0.125C147.541 0.125 137.788 3.125 129.286 9.25L90.775 37L47.263 5.75C41.762 1.75 35.76 0 29.883 0C14.379 0.125 0 12.25 0 29.875V482.25C0 499.5 14.254 512 29.883 512C35.76 512 41.762 510.25 47.263 506.25L90.775 475L129.286 502.75C137.788 508.75 147.541 511.875 157.419 511.875C167.296 511.875 177.049 508.875 185.426 502.75L224.062 475L262.698 502.75C271.075 508.75 280.953 511.875 290.831 511.875C300.583 511.875 310.336 508.875 318.838 502.75L357.349 475L400.861 506.25C406.363 510.25 412.364 512 418.241 512C433.745 512 447.999 499.75 447.999 482.25V29.875C448.124 12.5 433.87 0 418.241 0ZM416.115 477.75L357.349 435.5L300.083 476.75C297.332 478.75 294.081 479.75 290.831 479.75C287.33 479.75 284.204 478.75 281.328 476.75L224.062 435.5L166.796 476.75C163.92 478.75 160.795 479.75 157.294 479.75C153.918 479.75 150.792 478.75 147.916 476.75L90.65 435.5L32.009 478.375V34.25L90.775 76.5L148.041 35.25C150.792 33.25 154.042 32.25 157.294 32.25C160.795 32.25 163.92 33.25 166.796 35.25L224.062 76.5L281.328 35.25C284.204 33.25 287.33 32.25 290.831 32.25C294.207 32.25 297.332 33.25 300.208 35.25L357.474 76.5L416.115 34.25V477.75ZM336.093 144H112.031C103.229 144 96.027 151.2 96.027 160V160C96.027 168.8 103.229 176 112.031 176H336.093C344.896 176 352.098 168.8 352.098 160V160C352.098 151.2 344.896 144 336.093 144Z" })
  }
));
ReceiptLight.displayName = "ReceiptLight";
var Receipt_default = ReceiptLight;
