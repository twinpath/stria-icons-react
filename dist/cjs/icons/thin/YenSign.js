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
var YenSign_exports = {};
__export(YenSign_exports, {
  default: () => YenSign_default
});
module.exports = __toCommonJS(YenSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const YenSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M318.546 44.6L175.413 248.004H295.999C300.421 248.004 303.999 251.598 303.999 256.002C303.999 260.408 300.421 264.002 295.999 264.002H167.999V344.002H295.999C300.421 344.002 303.999 347.596 303.999 352.002S300.421 360.002 295.999 360.002H167.999V472C167.999 476.406 164.421 480 159.999 480S151.999 476.406 151.999 472V360.002H23.999C19.577 360.002 15.999 356.408 15.999 352.002S19.577 344.002 23.999 344.002H151.999V264.002H23.999C19.577 264.002 15.999 260.408 15.999 256.002C15.999 251.598 19.577 248.004 23.999 248.004H144.585L1.452 44.6C-1.079 41.006 -0.219 36.006 3.39 33.475C7.015 30.881 11.999 31.818 14.546 35.412L159.999 242.098L305.452 35.412C307.999 31.818 312.999 30.881 316.609 33.475C320.218 36.006 321.077 41.006 318.546 44.6Z" })
  }
));
YenSignThin.displayName = "YenSignThin";
var YenSign_default = YenSignThin;
