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
var Stocking_exports = {};
__export(Stocking_exports, {
  default: () => Stocking_default
});
module.exports = __toCommonJS(Stocking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StockingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M343.939 144C339.533 144 335.941 147.594 335.941 152V304.312C335.941 352.812 311.879 397.844 271.601 424.781L193.543 476.812C174.701 489.375 152.826 496 130.297 496C92.017 496 56.426 476.969 35.146 445.125C0.211 392.812 14.43 321.75 66.488 286.969L112.017 259.781V152C112.017 147.594 108.424 144 104.017 144S96.017 147.594 96.017 152V250.719L57.957 273.438C-1.789 313.344 -18.006 394.344 21.836 454C46.115 490.312 86.644 512 130.297 512C155.982 512 180.951 504.438 202.418 490.125L280.475 438.094C325.223 408.156 351.939 358.156 351.939 304.312V152C351.939 147.594 348.346 144 343.939 144ZM352.002 0H96.017C78.346 0 64.019 14.326 64.019 32V80C64.019 97.674 78.346 112 96.017 112H352.002C369.674 112 384 97.674 384 80V32C384 14.326 369.674 0 352.002 0ZM368.002 80C368.002 88.822 360.824 96 352.002 96H96.017C87.197 96 80.019 88.822 80.019 80V32C80.019 23.178 87.197 16 96.017 16H352.002C360.824 16 368.002 23.178 368.002 32V80Z" })
  }
));
StockingThin.displayName = "StockingThin";
var Stocking_default = StockingThin;
