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
var Grid2_exports = {};
__export(Grid2_exports, {
  default: () => Grid2_default
});
module.exports = __toCommonJS(Grid2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Grid2Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 0H64C28.654 0 0 28.654 0 64V160C0 195.346 28.654 224 64 224H160C195.346 224 224 195.346 224 160V64C224 28.654 195.346 0 160 0ZM192 160C192 177.645 177.645 192 160 192H64C46.355 192 32 177.645 32 160V64C32 46.355 46.355 32 64 32H160C177.645 32 192 46.355 192 64V160ZM160 288H64C28.654 288 0 316.654 0 352V448C0 483.346 28.654 512 64 512H160C195.346 512 224 483.346 224 448V352C224 316.654 195.346 288 160 288ZM192 448C192 465.645 177.645 480 160 480H64C46.355 480 32 465.645 32 448V352C32 334.355 46.355 320 64 320H160C177.645 320 192 334.355 192 352V448ZM448 0H352C316.654 0 288 28.654 288 64V160C288 195.346 316.654 224 352 224H448C483.346 224 512 195.346 512 160V64C512 28.654 483.346 0 448 0ZM480 160C480 177.645 465.645 192 448 192H352C334.355 192 320 177.645 320 160V64C320 46.355 334.355 32 352 32H448C465.645 32 480 46.355 480 64V160ZM448 288H352C316.654 288 288 316.654 288 352V448C288 483.346 316.654 512 352 512H448C483.346 512 512 483.346 512 448V352C512 316.654 483.346 288 448 288ZM480 448C480 465.645 465.645 480 448 480H352C334.355 480 320 465.645 320 448V352C320 334.355 334.355 320 352 320H448C465.645 320 480 334.355 480 352V448Z" })
  }
));
Grid2Light.displayName = "Grid2Light";
var Grid2_default = Grid2Light;
