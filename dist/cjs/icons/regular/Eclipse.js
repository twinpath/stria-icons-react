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
var Eclipse_exports = {};
__export(Eclipse_exports, {
  default: () => Eclipse_default
});
module.exports = __toCommonJS(Eclipse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EclipseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 458.004L204.125 381.008L113.25 398.631L130.75 307.387L54 255.391L130.75 203.393L113.25 112.273L204.25 129.773L256 53.027L287.75 99.9C298.875 88.4 311.375 78.025 324.875 69.152L289.625 16.779C274.5 -5.594 237.75 -5.594 222.625 16.779L182.25 76.65L111.375 62.902C98 60.402 84.5 64.527 75 74.15C65.5 83.775 61.25 97.275 63.875 110.398L77.625 181.395L17.75 221.893C6.625 229.518 0 242.016 0 255.516C0 269.014 6.75 281.514 17.75 289.014L77.625 329.51L63.875 400.506C61.25 413.756 65.5 427.254 75 436.754S97.875 450.504 111.25 447.879L182.125 434.254L222.5 494.125C230 505.25 242.625 512 256 512S282 505.25 289.5 494.25L324.25 442.629C310.75 433.629 298.5 423.256 287.25 411.756L256 458.004ZM229.625 206.893C233.875 187.77 240.625 169.645 249.5 152.646C195.25 156.146 152 200.893 152 256.016C152 311.137 195.25 355.885 249.5 359.26C240.625 342.385 233.875 324.262 229.625 305.012C212.125 295.514 200 277.264 200 255.891C200 234.641 212.125 216.393 229.625 206.893ZM448 64.027C342 64.027 256 150.021 256 256.016S342 448.004 448 448.004C554 448.004 640 362.01 640 256.016S554 64.027 448 64.027ZM448 400.006C368.625 400.006 304 335.385 304 256.016C304 176.645 368.625 112.023 448 112.023S592 176.645 592 256.016C592 335.385 527.375 400.006 448 400.006Z" })
  }
));
EclipseRegular.displayName = "EclipseRegular";
var Eclipse_default = EclipseRegular;
