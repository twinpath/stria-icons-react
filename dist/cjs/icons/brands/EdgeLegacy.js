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
var EdgeLegacy_exports = {};
__export(EdgeLegacy_exports, {
  default: () => EdgeLegacy_default
});
module.exports = __toCommonJS(EdgeLegacy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EdgeLegacyBrands = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25.71,228.16l.35-.48c0,.16,0,.32-.07.48Zm460.58,15.51c0-44-7.76-84.46-28.81-122.4C416.5,47.88,343.91,8,258.89,8,119,7.72,40.62,113.21,26.06,227.68c42.42-61.31,117.07-121.38,220.37-125,0,0,109.67,0,99.42,105H170c6.37-37.39,18.55-59,34.34-78.93-75.05,34.9-121.85,96.1-120.75,188.32.83,71.45,50.13,144.84,120.75,172,83.35,31.84,192.77,7.2,240.13-21.33V363.31C363.6,419.8,173.6,424.23,172.21,295.74H486.29V243.67Z" })
  }
));
EdgeLegacyBrands.displayName = "EdgeLegacyBrands";
var EdgeLegacy_default = EdgeLegacyBrands;
