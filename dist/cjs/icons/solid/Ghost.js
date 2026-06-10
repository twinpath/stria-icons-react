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
var Ghost_exports = {};
__export(Ghost_exports, {
  default: () => Ghost_default
});
module.exports = __toCommonJS(Ghost_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GhostSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.125 0.088C81 3.214 0 94.856 0 200.002V464.053C0 478.306 17.25 485.432 27.25 475.305L52.25 456.802C58.875 451.801 68.25 452.801 73.75 459.052L116.75 507.312C123 513.563 133.125 513.563 139.375 507.312L180 461.553C186.375 454.301 197.625 454.301 204 461.553L244.625 507.312C250.875 513.563 261 513.563 267.25 507.312L310.25 459.052C315.75 452.801 325.125 451.801 331.75 456.802L356.75 475.305C366.75 485.432 384 478.306 384 464.053V192C384 83.979 294.875 -3.163 186.125 0.088ZM128 224.007C110.375 224.007 96 209.629 96 192S110.375 159.994 128 159.994S160 174.372 160 192S145.625 224.007 128 224.007ZM256 224.007C238.375 224.007 224 209.629 224 192S238.375 159.994 256 159.994C273.625 159.994 288 174.372 288 192S273.625 224.007 256 224.007Z" })
  }
));
GhostSolid.displayName = "GhostSolid";
var Ghost_default = GhostSolid;
