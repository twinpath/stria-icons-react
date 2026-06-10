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
var StarSharpHalf_exports = {};
__export(StarSharpHalf_exports, {
  default: () => StarSharpHalf_default
});
module.exports = __toCommonJS(StarSharpHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarSharpHalfThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M263.278 17.969L211.903 176.219L46.912 176.219C35.672 176.219 25.057 182.906 21.43 193.544C17.728 204.403 21.363 215.831 30.606 222.562L165.106 320.375L113.731 478.625C111.153 486.562 112.434 494.875 117.247 501.5C125.309 512.562 141.637 515.531 153.137 507.281L281.048 414.261C285.188 411.25 287.637 406.44 287.637 401.321V10.141C287.637 4.279 281.476 0.277 276.214 2.859C270.19 5.816 265.506 11.126 263.278 17.969ZM143.762 494.312C136.446 499.592 125.973 492.748 128.95 483.562L183.919 314.25L40.012 209.625C32.46 204.139 36.36 192.219 45.653 192.219H223.528L271.637 44.035V401.295L143.762 494.312Z" })
  }
));
StarSharpHalfThin.displayName = "StarSharpHalfThin";
var StarSharpHalf_default = StarSharpHalfThin;
