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
var HomeSimple_exports = {};
__export(HomeSimple_exports, {
  default: () => HomeSimple_default
});
module.exports = __toCommonJS(HomeSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.997 255.989C575.997 253.787 575.092 251.594 573.312 250.016L293.311 2.016C291.795 0.673 289.897 0.001 287.998 0.001S284.202 0.673 282.686 2.016L2.685 250.016C0.905 251.594 0 253.787 0 255.989C0 260.311 3.479 263.987 7.969 263.987C9.865 263.987 11.773 263.319 13.31 261.984L63.998 217.816V448C63.998 483.346 92.651 512 127.997 512H447.999C483.345 512 511.999 483.346 511.999 448V217.816L562.687 261.984C564.218 263.328 566.093 264 567.999 264C572.458 264 575.997 260.361 575.997 255.989ZM447.999 496H127.998C101.488 496 79.998 474.51 79.998 448V203.594L287.998 18.703L495.999 203.594V448C495.999 474.51 474.509 496 447.999 496Z " })
  }
));
HomeSimpleThin.displayName = "HomeSimpleThin";
var HomeSimple_default = HomeSimpleThin;
