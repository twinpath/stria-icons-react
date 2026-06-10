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
var RouteInterstate_exports = {};
__export(RouteInterstate_exports, {
  default: () => RouteInterstate_default
});
module.exports = __toCommonJS(RouteInterstate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteInterstateRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.848 55.125C477.723 45.25 469.098 38.5 459.85 38.5C458.1 38.5 456.35 38.75 454.6 39.25C436.352 44.25 416.856 47.125 396.483 47.125C347.363 47.125 302.994 31.125 270.373 5C266.123 1.625 261.125 0 256 0S245.877 1.625 241.627 5C209.006 31.125 164.637 47.125 115.518 47.125C95.145 47.125 75.649 44.25 57.401 39.125C55.651 38.75 53.901 38.5 52.151 38.5C42.902 38.5 34.278 45.25 31.152 55.125C-5.842 175.125 9.406 410.375 256 512C502.594 410.375 517.842 175.125 480.848 55.125ZM256 459.605C169.488 419.336 111.197 357.219 82.58 274.723C72.912 246.854 67.733 218.82 65.512 192H446.479C444.264 218.83 439.086 246.859 429.42 274.723C400.803 357.219 342.512 419.336 256 459.605Z" })
  }
));
RouteInterstateRegular.displayName = "RouteInterstateRegular";
var RouteInterstate_default = RouteInterstateRegular;
