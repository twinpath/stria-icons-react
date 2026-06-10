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
const ReceiptRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M402.031 2.22C393.531 -1.733 383.5 -0.327 376.375 5.798L337.25 39.327L304.969 7.048C296.5 -1.42 283.109 -2.342 273.594 4.814L224 42.014L174.406 4.814C164.891 -2.311 151.5 -1.389 143.031 7.048L110.75 39.327L71.625 5.798C64.516 -0.327 54.453 -1.733 45.969 2.22C37.453 6.126 32 14.641 32 24.015V487.986C32 497.36 37.453 505.876 45.969 509.782C54.453 513.719 64.516 512.313 71.625 506.204L110.75 472.675L143.031 504.954C151.469 513.422 164.844 514.312 174.406 507.188L224 469.987L273.594 507.188C283.156 514.344 296.516 513.453 304.969 504.954L337.25 472.675L376.375 506.204C380.813 510.016 386.375 511.985 392 511.985C395.406 511.985 398.828 511.266 402.031 509.782C410.547 505.876 416 497.36 416 487.986V24.015C416 14.641 410.547 6.126 402.031 2.22ZM368 435.802L351.625 421.772C342.094 413.6 327.922 414.147 319.031 423.021L285.75 456.301L238.406 420.787C234.141 417.584 229.062 415.991 224 415.991S213.859 417.584 209.594 420.787L162.25 456.301L128.969 423.021C120.094 414.147 105.922 413.6 96.375 421.772L80 435.802V76.2L96.375 90.23C105.922 98.417 120.094 97.886 128.969 88.98L162.25 55.701L209.594 91.214C218.125 97.62 229.875 97.62 238.406 91.214L285.75 55.701L319.031 88.98C327.922 97.886 342.094 98.417 351.625 90.23L368 76.2V435.802ZM312 160.007H136C127.156 160.007 120 167.163 120 176.006S127.156 192.005 136 192.005H312C320.844 192.005 328 184.849 328 176.006S320.844 160.007 312 160.007ZM312 319.997H136C127.156 319.997 120 327.153 120 335.996C120 344.839 127.156 351.995 136 351.995H312C320.844 351.995 328 344.839 328 335.996C328 327.153 320.844 319.997 312 319.997ZM312 240.002H136C127.156 240.002 120 247.158 120 256.001C120 264.844 127.156 272 136 272H312C320.844 272 328 264.844 328 256.001C328 247.158 320.844 240.002 312 240.002Z" })
  }
));
ReceiptRegular.displayName = "ReceiptRegular";
var Receipt_default = ReceiptRegular;
