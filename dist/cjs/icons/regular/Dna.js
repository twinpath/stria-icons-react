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
var Dna_exports = {};
__export(Dna_exports, {
  default: () => Dna_default
});
module.exports = __toCommonJS(Dna_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DnaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32.03 495.125C31.53 503 37.279 512 47.403 512H62.775C70.899 512 77.523 505.75 78.148 497.625C78.398 493.125 79.148 487.125 80.273 480H367.227C368.477 487.125 369.352 493.375 369.727 497.75C370.477 505.75 377.101 512 385.1 512H400.597C412.095 512 416.345 501.25 415.845 495.25C413.72 465.75 399.597 368.375 307.362 286.375C294.739 295.75 281.241 304.625 266.493 313.125C275.617 320.625 283.491 328.25 291.114 336.125H155.636C176.257 315.25 202.003 294.75 234.873 276.75C391.724 190.5 413.22 56 415.97 16.875C416.47 9 410.721 0 400.597 0H385.225C377.101 0 370.477 6.25 369.852 14.375C369.602 18.875 368.852 24.875 367.727 32H80.647C79.273 24.875 78.648 18.75 78.273 14.25C77.523 6.25 70.899 0 62.9 0H47.403C37.279 0 31.53 9.125 32.03 16.875C34.655 52.625 53.277 169.875 179.882 255.75C53.277 341.375 34.655 458.875 32.03 495.125ZM354.355 80C348.73 95 340.732 111.25 330.233 128H118.267C107.768 111.25 99.769 95 94.02 80H354.355ZM224 228.75C196.629 212.5 174.633 194.5 156.511 176H291.864C273.742 194.375 251.621 212.375 224 228.75ZM93.395 432C99.145 417.125 106.893 400.75 117.517 384H329.233C339.732 400.75 347.731 417 353.605 432H93.395Z" })
  }
));
DnaRegular.displayName = "DnaRegular";
var Dna_default = DnaRegular;
