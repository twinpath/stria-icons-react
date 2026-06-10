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
var ArrowUpFromSquare_exports = {};
__export(ArrowUpFromSquare_exports, {
  default: () => ArrowUpFromSquare_default
});
module.exports = __toCommonJS(ArrowUpFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 160H360C355.594 160 352 163.594 352 168S355.594 176 360 176H408C421.219 176 432 186.781 432 200V472C432 485.219 421.219 496 408 496H40C26.781 496 16 485.219 16 472V200C16 186.781 26.781 176 40 176H88C92.406 176 96 172.406 96 168S92.406 160 88 160H40C17.938 160 0 177.938 0 200V472C0 494.062 17.938 512 40 512H408C430.062 512 448 494.062 448 472V200C448 177.938 430.062 160 408 160ZM128 112C130.047 112 132.094 111.219 133.656 109.656L216 27.312V376C216 380.406 219.594 384 224 384S232 380.406 232 376V27.312L314.344 109.656C315.906 111.219 317.938 112 320 112C325.719 112 328 106.906 328 104C328 101.953 327.219 99.906 325.656 98.344L229.656 2.344C228.094 0.781 226.047 0 224 0S219.906 0.781 218.344 2.344L122.344 98.344C120.781 99.906 120 101.953 120 104C120 108.57 123.737 112 128 112Z " })
  }
));
ArrowUpFromSquareThin.displayName = "ArrowUpFromSquareThin";
var ArrowUpFromSquare_default = ArrowUpFromSquareThin;
