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
var ChartLine_exports = {};
__export(ChartLine_exports, {
  default: () => ChartLine_default
});
module.exports = __toCommonJS(ChartLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M123.328 315.328L224 214.625L308.672 299.297C314.92 305.545 325.047 305.545 331.295 299.299L475.312 155.311C481.562 149.062 481.562 138.934 475.314 132.686S458.937 126.437 452.691 132.686L320 265.375L235.33 180.674C229.107 174.449 218.926 174.449 212.703 180.672L100.703 292.672C94.469 298.906 94.469 309.062 100.703 315.297C106.938 321.562 117.062 321.562 123.328 315.328ZM496 448H80C53.531 448 32 426.469 32 400V48C32 39.172 24.828 32 16 32S0 39.172 0 48V400C0 444.125 35.875 480 80 480H496C504.828 480 512 472.828 512 464S504.828 448 496 448Z" })
  }
));
ChartLineLight.displayName = "ChartLineLight";
var ChartLine_default = ChartLineLight;
