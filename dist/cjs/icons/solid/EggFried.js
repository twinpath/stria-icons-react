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
var EggFried_exports = {};
__export(EggFried_exports, {
  default: () => EggFried_default
});
module.exports = __toCommonJS(EggFried_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggFriedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.956 159.994C176.202 159.994 143.949 192.246 143.949 231.999C143.949 240.875 151.075 248.001 159.951 248.001C168.827 248.001 175.952 240.875 175.952 231.999C175.952 209.873 193.829 191.996 215.956 191.996C224.832 191.996 231.958 184.871 231.958 175.995C231.958 167.119 224.832 159.994 215.956 159.994ZM478.358 150.493C438.854 109.74 377.598 104.114 333.843 68.237C284.088 27.233 245.709 -9.269 175.327 2.106C88.569 16.108 63.566 82.113 50.315 159.244C39.189 223.624 -4.066 286.254 0.31 352.134S53.19 480.644 115.321 502.895C208.331 536.273 262.211 471.143 319.967 416.514C363.596 375.01 413.351 378.761 460.856 342.508C517.237 299.755 532.613 201.997 478.358 150.493ZM223.957 352.384C162.201 352.384 111.946 302.13 111.946 240.25C111.946 178.495 162.201 128.116 223.957 128.116S335.968 178.495 335.968 240.25C335.968 302.13 285.713 352.384 223.957 352.384Z" })
  }
));
EggFriedSolid.displayName = "EggFriedSolid";
var EggFried_default = EggFriedSolid;
