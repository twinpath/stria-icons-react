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
var MoneyBillWave_exports = {};
__export(MoneyBillWave_exports, {
  default: () => MoneyBillWave_default
});
module.exports = __toCommonJS(MoneyBillWave_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillWaveSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.012 54.5C524.137 38.25 489.15 32 454.275 32C343.463 32 232.537 94.375 121.725 94.375C93.937 94.375 66.15 90.375 38.363 80.625C35.213 79.5 32.062 79 29.025 79C13.5 79 0 92.375 0 110.75V428.125C0 440.75 6.525 452.625 16.988 457.5C51.863 473.75 86.85 480 121.725 480C232.537 480 343.463 417.625 454.275 417.625C482.062 417.625 509.85 421.625 537.637 431.375C540.787 432.5 543.937 433 546.975 433C562.5 433 576 419.625 576 401.125V83.875C576 71.25 569.475 59.375 559.012 54.5ZM528 151.193C496.475 147.217 472 120.605 472 88C472 85.791 472.514 83.744 472.74 81.604C492.113 83.223 510.65 86.564 528 93.395V151.193ZM208 256C208 202.98 243.816 160 288 160S368 202.98 368 256C368 309.018 332.184 352 288 352S208 309.018 208 256ZM48 133.582C68.053 138.602 88.855 140.982 110.443 141.721C104.15 170.459 78.625 192 48 192V133.582ZM48 360.807C79.525 364.783 104 391.393 104 424C104 426.207 103.486 428.256 103.26 430.396C83.889 428.777 65.352 425.436 48 418.604V360.807ZM528 378.418C507.949 373.398 487.146 371.018 465.557 370.279C471.85 341.541 497.375 320 528 320V378.418Z" })
  }
));
MoneyBillWaveSolid.displayName = "MoneyBillWaveSolid";
var MoneyBillWave_default = MoneyBillWaveSolid;
