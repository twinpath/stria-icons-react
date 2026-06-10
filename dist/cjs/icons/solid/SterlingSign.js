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
var SterlingSign_exports = {};
__export(SterlingSign_exports, {
  default: () => SterlingSign_default
});
module.exports = __toCommonJS(SterlingSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SterlingSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 440C320 462.094 302.094 480 280 480H40C24.562 480 10.5 471.109 3.875 457.172C-2.75 443.219 -0.75 426.703 9 414.734C34.156 383.859 48 344.953 48 305.156V288H32C14.312 288 0 273.672 0 256S14.312 224 32 224H48V161.438C48 90.062 106.062 32 177.438 32C191.406 32 205.219 34.25 218.5 38.688L292.688 63.5C313.625 70.516 324.938 93.172 317.938 114.125C310.938 135.047 288.375 146.375 267.313 139.375L193.125 114.562C188.062 112.859 182.781 112 177.438 112C150.188 112 128 134.172 128 161.438V224H224C241.688 224 256 238.328 256 256S241.688 288 224 288H128V305.156C128 337.797 121.625 370.031 109.531 400H280C302.094 400 320 417.906 320 440Z" })
  }
));
SterlingSignSolid.displayName = "SterlingSignSolid";
var SterlingSign_default = SterlingSignSolid;
