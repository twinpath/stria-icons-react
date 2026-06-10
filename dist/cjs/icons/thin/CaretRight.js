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
var CaretRight_exports = {};
__export(CaretRight_exports, {
  default: () => CaretRight_default
});
module.exports = __toCommonJS(CaretRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaretRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248.48 238.551L104.48 102.551C99.936 98.26 94.008 96 87.996 96C74.836 96 64 106.668 64 120V392C64 405.314 74.82 416 87.996 416C94.008 416 99.936 413.74 104.48 409.447L248.48 273.447C253.279 268.914 256 262.604 256 256S253.279 243.084 248.48 238.551ZM237.494 261.816L93.494 397.816C92.004 399.225 90.051 400 87.996 400C83.588 400 80 396.41 80 392V120C80 115.588 83.588 112 87.996 112C90.051 112 92.004 112.775 93.494 114.184L237.492 250.182C239.086 251.688 240 253.809 240 256S239.086 260.312 237.494 261.816Z" })
  }
));
CaretRightThin.displayName = "CaretRightThin";
var CaretRight_default = CaretRightThin;
