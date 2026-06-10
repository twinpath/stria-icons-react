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
var Percent_exports = {};
__export(Percent_exports, {
  default: () => Percent_default
});
module.exports = __toCommonJS(Percent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PercentThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M381.656 66.344C378.531 63.219 373.469 63.219 370.344 66.344L2.344 434.344C-0.781 437.469 -0.781 442.531 2.344 445.656C3.906 447.219 5.938 448 8 448S12.094 447.219 13.656 445.656L381.656 77.656C384.781 74.531 384.781 69.469 381.656 66.344ZM64 192C99.346 192 128 163.346 128 128S99.346 64 64 64S0 92.654 0 128S28.654 192 64 192ZM64 80C90.467 80 112 101.533 112 128S90.467 176 64 176S16 154.467 16 128S37.533 80 64 80ZM320 320C284.654 320 256 348.654 256 384S284.654 448 320 448S384 419.346 384 384S355.346 320 320 320ZM320 432C293.533 432 272 410.467 272 384S293.533 336 320 336S368 357.533 368 384S346.467 432 320 432Z" })
  }
));
PercentThin.displayName = "PercentThin";
var Percent_default = PercentThin;
