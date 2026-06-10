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
var CricketBatBall_exports = {};
__export(CricketBatBall_exports, {
  default: () => CricketBatBall_default
});
module.exports = __toCommonJS(CricketBatBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CricketBatBallDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.999 166.966L9.592 349.365C3.731 355.227 0 363.166 0 371.382C0 474.17 108.873 511.982 140.599 511.982C148.816 511.982 156.758 508.251 162.624 502.387L345.023 319.991H191.999V166.966Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.973 352.005C387.723 352.005 351.973 387.754 351.973 432.003S387.723 512 431.973 512S511.974 476.251 511.974 432.003S476.223 352.005 431.973 352.005ZM407.915 257.11C413.309 251.715 416.006 244.644 416.006 237.573S413.309 223.431 407.915 218.037L373.563 183.686L507.321 49.933C510.446 46.81 512.009 42.715 512.009 38.62S510.446 30.43 507.321 27.305L484.7 4.684C481.577 1.561 477.482 0 473.387 0S465.196 1.561 462.071 4.684L328.313 138.438L293.961 104.087C288.567 98.693 281.496 95.996 274.426 95.996S260.285 98.693 254.891 104.087L192 166.976V319.998H345.024L407.915 257.11Z " })
    ]
  }
));
CricketBatBallDuotone.displayName = "CricketBatBallDuotone";
var CricketBatBall_default = CricketBatBallDuotone;
