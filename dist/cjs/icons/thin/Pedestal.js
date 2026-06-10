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
var Pedestal_exports = {};
__export(Pedestal_exports, {
  default: () => Pedestal_default
});
module.exports = __toCommonJS(Pedestal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PedestalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 64C302.355 64 288 78.355 288 96S302.355 128 320 128S352 113.645 352 96S337.645 64 320 64ZM320 112C311.164 112 304 104.836 304 96C304 87.162 311.164 80 320 80S336 87.162 336 96C336 104.836 328.836 112 320 112ZM128 64C110.355 64 96 78.355 96 96S110.355 128 128 128S160 113.645 160 96S145.645 64 128 64ZM128 112C119.164 112 112 104.836 112 96C112 87.162 119.164 80 128 80S144 87.162 144 96C144 104.836 136.836 112 128 112ZM440 496H416V64C416 28.654 387.346 0 352 0H96C60.654 0 32 28.654 32 64V496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H440C444.422 512 448 508.406 448 504S444.422 496 440 496ZM48 496V64C48 37.533 69.533 16 96 16H352C378.467 16 400 37.533 400 64L400.021 496H48Z" })
  }
));
PedestalThin.displayName = "PedestalThin";
var Pedestal_default = PedestalThin;
