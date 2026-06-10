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
var FilterList_exports = {};
__export(FilterList_exports, {
  default: () => FilterList_default
});
module.exports = __toCommonJS(FilterList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterListSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 224H352C334.326 224 320 238.326 320 256C320 273.672 334.326 288 352 288H480C497.674 288 512 273.672 512 256C512 238.326 497.674 224 480 224ZM480 384H352C334.326 384 320 398.326 320 416C320 433.672 334.326 448 352 448H480C497.674 448 512 433.672 512 416C512 398.326 497.674 384 480 384ZM448 128H480C497.674 128 512 113.672 512 96C512 78.326 497.674 64 480 64H448C430.326 64 416 78.326 416 96C416 113.672 430.326 128 448 128ZM329.518 64H22.482C3.582 64 -6.85 85.5 5.07 99.877L128 244.635V388C128 393.871 130.859 399.379 135.689 402.742L195.687 444.73C207.523 453.016 224 444.625 224 429.986V244.635L346.93 99.877C358.85 85.5 348.416 64 329.518 64Z" })
  }
));
FilterListSolid.displayName = "FilterListSolid";
var FilterList_default = FilterListSolid;
