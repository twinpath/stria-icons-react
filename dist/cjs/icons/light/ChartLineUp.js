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
var ChartLineUp_exports = {};
__export(ChartLineUp_exports, {
  default: () => ChartLineUp_default
});
module.exports = __toCommonJS(ChartLineUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartLineUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 448H80C53.531 448 32 426.469 32 400V48C32 39.156 24.844 32 16 32S0 39.156 0 48V400C0 444.125 35.875 480 80 480H496C504.844 480 512 472.844 512 464S504.844 448 496 448ZM123.312 315.312L224 214.625L308.688 299.312C314.938 305.562 325.063 305.562 331.312 299.312L448 182.625V272C448 280.844 455.156 288 464 288S480 280.844 480 272V144C480 135.156 472.844 128 464 128H336C327.156 128 320 135.156 320 144S327.156 160 336 160H425.375L320 265.375L235.312 180.688C229.062 174.438 218.937 174.438 212.688 180.688L100.688 292.688C94.438 298.938 94.438 309.063 100.688 315.312C106.934 321.559 117.059 321.566 123.312 315.312Z" })
  }
));
ChartLineUpLight.displayName = "ChartLineUpLight";
var ChartLineUp_default = ChartLineUpLight;
