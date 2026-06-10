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
const CircleThreeQuartersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.29 256H255.999V50.709C255.999 32.834 241.378 18.418 224.095 18.418C222.525 18.418 220.933 18.537 219.329 18.783C89.095 38.75 -6.659 163.406 20.685 304.148C38.864 397.727 114.273 473.135 207.851 491.314C224.155 494.482 240.265 496 255.999 496C376.089 496 475.562 407.818 493.216 292.668C496.171 273.396 480.788 256 461.29 256ZM255.999 480C241.073 480 225.9 478.521 210.902 475.609C123.501 458.629 53.37 388.498 36.392 301.096C24.382 239.285 37.277 177.533 72.698 127.215C107.685 77.516 162.015 43.758 221.755 34.598C222.542 34.477 223.323 34.418 224.095 34.418C232.716 34.418 239.999 41.879 239.999 50.709V256C239.999 264.836 247.163 272 255.999 272H461.29C466.056 272 470.591 274.1 473.736 277.764C475.503 279.822 478.329 284.182 477.4 290.244C460.816 398.422 365.634 480 255.999 480Z" })
  }
));
CircleThreeQuartersThin.displayName = "CircleThreeQuartersThin";
var CircleThreeQuarters_default = CircleThreeQuartersThin;
