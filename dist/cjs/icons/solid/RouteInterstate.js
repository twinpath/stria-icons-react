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
const RouteInterstateSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.847 55.125C477.222 43.5 465.849 36 454.6 39.25C436.352 44.25 416.855 47.125 396.482 47.125C347.364 47.125 302.994 31.125 270.373 5C266.124 1.625 261.124 0 256 0C250.876 0 245.876 1.625 241.627 5C209.131 31.125 164.636 47.125 115.518 47.125C95.145 47.125 75.648 44.25 57.4 39.125C46.151 36 34.778 43.5 31.153 55.125C-5.842 175.125 9.406 410.375 256 512C502.594 410.375 517.842 175.125 480.847 55.125ZM256 441.875C131.266 380.875 88.021 279.5 80.772 192H431.228C423.979 279.5 380.734 380.875 256 441.875Z" })
  }
));
RouteInterstateSolid.displayName = "RouteInterstateSolid";
var RouteInterstate_default = RouteInterstateSolid;
