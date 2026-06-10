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
var Egg_exports = {};
__export(Egg_exports, {
  default: () => Egg_default
});
module.exports = __toCommonJS(Egg_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 16C86 16 0 216.625 0 316S86 496 192 496C298 496 384 415.375 384 316S298 16 192 16ZM192 480C94.953 480 16 406.43 16 316C16 267.057 37.797 194.924 70.238 136.502C107.117 70.09 151.498 32 192 32S276.883 70.09 313.762 136.502C346.203 194.924 368 267.057 368 316C368 406.43 289.047 480 192 480ZM147.688 119.984C147.406 119.984 147.125 120 146.844 120.031C144.719 120.25 142.781 121.297 141.438 122.969C107.781 164.656 72 242.266 72 304C72 308.406 75.594 312 80 312S88 308.406 88 304C88 248.031 121.5 173.125 153.906 133.016C156.688 129.594 156.125 124.547 152.688 121.766C151.25 120.594 149.5 119.984 147.688 119.984Z" })
  }
));
EggThin.displayName = "EggThin";
var Egg_default = EggThin;
