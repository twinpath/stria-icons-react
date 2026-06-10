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
var CaretDown_exports = {};
__export(CaretDown_exports, {
  default: () => CaretDown_default
});
module.exports = __toCommonJS(CaretDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaretDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 192H24C10.686 192 0 202.82 0 215.994C0 222.008 2.26 227.934 6.551 232.479L142.551 376.479C147.086 381.279 153.396 384 160 384S172.914 381.279 177.449 376.479L313.449 232.479C317.74 227.934 320 222.008 320 215.994C320 202.836 309.332 192 296 192ZM301.816 221.494L165.82 365.49C164.312 367.086 162.191 368 160 368S155.688 367.086 154.184 365.494L18.186 221.494C16.775 220.004 16 218.049 16 215.994C16 211.586 19.588 208 24 208H296C300.412 208 304 211.586 304 215.994C304 218.049 303.225 220.004 301.816 221.494Z" })
  }
));
CaretDownThin.displayName = "CaretDownThin";
var CaretDown_default = CaretDownThin;
