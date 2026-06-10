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
const CricketBatBallSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.965 352.006C387.715 352.006 351.964 387.754 351.964 432.003S387.715 512 431.965 512S511.965 476.251 511.965 432.003S476.215 352.006 431.965 352.006ZM407.906 257.111C413.301 251.715 415.998 244.644 415.998 237.573C415.998 230.503 413.301 223.432 407.906 218.038L373.554 183.687L507.312 49.934C510.438 46.81 512 42.716 512 38.621S510.438 30.432 507.312 27.308L484.691 4.686C481.568 1.562 477.474 0 473.378 0S465.187 1.562 462.062 4.686L328.304 138.439L293.953 104.089C288.558 98.694 281.488 95.997 274.417 95.997S260.277 98.694 254.882 104.089L223.999 134.97V287.992H377.023L407.906 257.111ZM191.999 166.967L9.592 349.365C3.731 355.228 0 363.166 0 371.382C0 474.17 108.873 511.982 140.599 511.982C148.816 511.982 156.758 508.251 162.624 502.387L345.023 319.991H191.999V166.967Z " })
  }
));
CricketBatBallSolid.displayName = "CricketBatBallSolid";
var CricketBatBall_default = CricketBatBallSolid;
