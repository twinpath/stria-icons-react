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
var Radiation_exports = {};
__export(Radiation_exports, {
  default: () => Radiation_default
});
module.exports = __toCommonJS(Radiation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadiationSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.25 304C282.75 304 304.25 282.5 304.25 256S282.75 208 256.25 208S208.25 229.5 208.25 256S229.75 304 256.25 304ZM213.849 188L142.914 74.715C132.705 58.412 110.17 54.311 95.5 66.75C50.562 104.848 19.31 158.568 10.334 219.539C7.515 238.672 22.92 255.801 42.26 255.801H176.051C176.051 227.199 191.25 202.301 213.849 188ZM417 66.75C402.33 54.311 379.795 58.412 369.586 74.715L298.65 188C321.25 202.301 336.449 227.199 336.449 255.801H470.24C489.58 255.801 504.984 238.672 502.166 219.539C493.189 158.568 461.937 104.848 417 66.75ZM298.65 323.5C286.349 331.199 271.849 335.9 256.25 335.9S226.15 331.199 213.849 323.5L142.914 436.873C132.771 453.086 138.754 475.072 156.236 482.824C186.826 496.389 220.658 504 256.25 504S325.674 496.389 356.264 482.824C373.746 475.072 379.728 453.086 369.586 436.873L298.65 323.5Z" })
  }
));
RadiationSolid.displayName = "RadiationSolid";
var Radiation_default = RadiationSolid;
