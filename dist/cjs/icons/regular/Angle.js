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
var Angle_exports = {};
__export(Angle_exports, {
  default: () => Angle_default
});
module.exports = __toCommonJS(Angle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AngleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M315.459 400H364.349C358.031 356.705 343.509 316.045 322.33 279.662L281.228 304.322C298.05 333.387 309.589 365.738 315.459 400ZM208.859 221.906C229.439 238.043 248.078 256.498 263.623 277.566L304.931 252.781C284.498 224.297 259.513 199.48 231.38 178.602L208.859 221.906ZM424 432.002H63.527L253.295 67.094C259.404 55.328 254.826 40.846 243.076 34.721C231.279 28.596 216.826 33.158 210.701 44.938L2.699 444.938C-1.161 452.375 -0.864 461.281 3.48 468.469C7.839 475.625 15.605 480 23.996 480H424C437.25 480 448 469.25 448 456S437.25 432.002 424 432.002Z" })
  }
));
AngleRegular.displayName = "AngleRegular";
var Angle_default = AngleRegular;
