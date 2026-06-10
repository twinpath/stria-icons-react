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
var DiagramNested_exports = {};
__export(DiagramNested_exports, {
  default: () => DiagramNested_default
});
module.exports = __toCommonJS(DiagramNested_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramNestedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 288H352C316.654 288 288 316.654 288 352V448C288 483.346 316.654 512 352 512H448C483.346 512 512 483.346 512 448V352C512 316.654 483.346 288 448 288ZM496 448C496 474.467 474.467 496 448 496H352C325.533 496 304 474.467 304 448V352C304 325.533 325.533 304 352 304H448C474.467 304 496 325.533 496 352V448ZM248 392H176C145.125 392 120 366.875 120 336V224H160C195.346 224 224 195.346 224 160V64C224 28.654 195.346 0 160 0H64C28.654 0 0 28.654 0 64V160C0 195.346 28.654 224 64 224H104V336C104 375.688 136.312 408 176 408H248C252.406 408 256 404.406 256 400S252.406 392 248 392ZM64 208C37.533 208 16 186.467 16 160V64C16 37.533 37.533 16 64 16H160C186.467 16 208 37.533 208 64V160C208 186.467 186.467 208 160 208H64Z" })
  }
));
DiagramNestedThin.displayName = "DiagramNestedThin";
var DiagramNested_default = DiagramNestedThin;
