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
var WeightHanging_exports = {};
__export(WeightHanging_exports, {
  default: () => WeightHanging_default
});
module.exports = __toCommonJS(WeightHanging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightHangingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.913 431.406L441.482 163.688C436.198 142.688 417.9 128 397.005 128H319.607C329.759 114.59 336.011 98.082 336.011 80C336.011 35.875 300.116 0 255.999 0S175.987 35.875 175.987 80C175.987 98.082 182.239 114.59 192.392 128H114.993C94.099 128 75.8 142.688 70.532 163.625L2.085 431.375C-2.995 451.187 1.335 472.5 13.681 488.406C25.292 503.406 42.529 512 60.952 512H451.046C469.47 512 486.706 503.406 498.318 488.406C510.663 472.5 514.993 451.188 509.913 431.406ZM255.999 32C282.472 32 304.007 53.531 304.007 80S282.472 128 255.999 128S207.991 106.469 207.991 80S229.527 32 255.999 32ZM473.032 468.812C467.439 476.031 459.624 480 451.046 480H60.952C52.374 480 44.56 476.031 38.966 468.812C32.636 460.656 30.448 449.656 33.089 439.344L101.554 171.5C103.257 164.719 108.788 160 114.993 160H397.005C403.21 160 408.741 164.719 410.46 171.562L478.909 439.344V439.375C481.55 449.656 479.362 460.656 473.032 468.812Z" })
  }
));
WeightHangingLight.displayName = "WeightHangingLight";
var WeightHanging_default = WeightHangingLight;
