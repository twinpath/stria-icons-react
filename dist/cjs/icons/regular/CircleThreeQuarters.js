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
var CircleThreeQuarters_exports = {};
__export(CircleThreeQuarters_exports, {
  default: () => CircleThreeQuarters_default
});
module.exports = __toCommonJS(CircleThreeQuarters_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleThreeQuartersRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.29 256H255.999V50.709C255.999 32.834 241.38 18.418 224.095 18.418C222.527 18.418 220.933 18.537 219.329 18.783C89.095 38.75 -6.659 163.406 20.685 304.148C38.864 397.727 114.273 473.135 207.851 491.314C224.163 494.484 240.257 496 255.999 496C376.079 496 475.564 407.811 493.216 292.668C496.171 273.396 480.788 256 461.29 256ZM255.999 448C243.114 448 229.995 446.721 217.005 444.195C142.28 429.678 82.321 369.719 67.804 294.994C57.472 241.809 68.501 188.766 98.864 145.635C125.185 108.246 164.253 81.383 207.999 70.055V256C207.999 282.51 229.489 304 255.999 304H441.946C420.388 387.287 343.573 448 255.999 448Z" })
  }
));
CircleThreeQuartersRegular.displayName = "CircleThreeQuartersRegular";
var CircleThreeQuarters_default = CircleThreeQuartersRegular;
