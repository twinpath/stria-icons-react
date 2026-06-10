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
var WeightHanging_exports = {};
__export(WeightHanging_exports, {
  default: () => WeightHanging_default
});
module.exports = __toCommonJS(WeightHanging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightHangingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.265 445.875L437.261 153.75C433.51 138.5 420.76 128 406.384 128H346.13C349.755 118 352.006 107.25 352.006 96C352.006 43 309.003 0 256 0S159.994 43 159.994 96C159.994 107.25 162.245 118 165.87 128H105.616C91.24 128 78.49 138.5 74.739 153.75L1.735 445.875C-6.64 479.125 16.361 512 47.988 512H464.012C495.639 512 518.64 479.125 510.265 445.875ZM256 128C238.374 128 223.998 113.625 223.998 96S238.374 64 256 64C273.626 64 288.002 78.375 288.002 96S273.626 128 256 128Z" })
  }
));
WeightHangingSolid.displayName = "WeightHangingSolid";
var WeightHanging_default = WeightHangingSolid;
