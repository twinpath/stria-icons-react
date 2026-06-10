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
var TriangleInstrument_exports = {};
__export(TriangleInstrument_exports, {
  default: () => TriangleInstrument_default
});
module.exports = __toCommonJS(TriangleInstrument_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleInstrumentDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.02 462.875C482.893 493.375 450.766 512.125 415.889 512H96.112C61.235 512.125 29.108 493.375 11.981 462.875C-4.771 433.375 -3.896 396.875 14.231 368.125L173.995 109.375C185.745 90.375 203.621 77.125 223.998 70V32.002C223.998 14.328 238.326 0 256 0H256C273.675 0 288.002 14.328 288.002 32.002V70C308.379 77.125 326.256 90.375 338.006 109.375L374.155 167.918L327.594 214.445L283.502 143.125C275.127 129.5 261.5 128 256 128S236.873 129.5 228.498 143.125L68.61 401.75C62.86 410.875 62.485 422.375 67.86 431.75C73.61 442 84.487 448.25 96.112 448H415.889C427.514 448.25 438.391 442 444.141 431.75C449.516 422.375 449.141 410.875 443.391 401.75L353.514 256.369L400.041 209.846L497.77 368.125C515.897 396.875 516.772 433.375 500.02 462.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.51 263.875C230.762 263.5 208.514 279.375 200.765 303C193.14 326.625 201.64 352.5 221.888 366.875C242.136 381.375 269.384 380.875 289.132 365.75C309.005 350.75 316.63 324.625 308.13 301.25L504.471 104.998C513.822 95.646 513.864 80.496 504.564 71.092L504.564 71.092C495.25 61.673 479.966 61.631 470.599 70.998L274.258 267.25C268.259 265.125 261.884 264 255.51 263.875Z" })
    ]
  }
));
TriangleInstrumentDuotone.displayName = "TriangleInstrumentDuotone";
var TriangleInstrument_default = TriangleInstrumentDuotone;
