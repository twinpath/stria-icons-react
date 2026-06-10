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
const PercentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.312 68.688C373.062 62.438 362.937 62.438 356.688 68.688L4.688 420.688C-1.562 426.938 -1.562 437.063 4.688 443.312C7.812 446.438 11.906 448 16 448S24.188 446.438 27.312 443.312L379.312 91.312C385.562 85.062 385.562 74.938 379.312 68.688ZM64 192C99.348 192 128 163.346 128 128S99.348 64 64 64C28.654 64 0 92.654 0 128S28.654 192 64 192ZM64 96C81.645 96 96 110.355 96 128S81.645 160 64 160S32 145.645 32 128S46.355 96 64 96ZM320 320C284.654 320 256 348.654 256 384S284.654 448 320 448C355.348 448 384 419.346 384 384S355.348 320 320 320ZM320 416C302.355 416 288 401.645 288 384S302.355 352 320 352S352 366.355 352 384S337.645 416 320 416Z" })
  }
));
PercentLight.displayName = "PercentLight";
var Percent_default = PercentLight;
