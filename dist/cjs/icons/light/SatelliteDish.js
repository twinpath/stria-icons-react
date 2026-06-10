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
var SatelliteDish_exports = {};
__export(SatelliteDish_exports, {
  default: () => SatelliteDish_default
});
module.exports = __toCommonJS(SatelliteDish_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SatelliteDishLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M194.327 340.297L219.435 315.187C225.693 318.184 232.611 320 239.999 320C266.468 320 287.999 298.469 287.999 272S266.468 224 239.999 224S191.999 245.531 191.999 272C191.999 279.391 193.816 286.305 196.81 292.562L171.704 317.672L50.915 196.844C47.665 193.594 43.318 192 39.029 192C33.454 192 27.976 194.691 25.134 199.941C-17.923 280.277 -5.677 382.277 62.003 449.977C103.345 491.332 157.544 512 211.732 512C246.253 512 280.761 503.621 311.964 486.859C321.376 481.699 322.665 468.547 315.06 461.066L194.327 340.297ZM239.999 256C248.827 256 255.999 263.188 255.999 272S248.827 288 239.999 288S223.999 280.812 223.999 272S231.171 256 239.999 256ZM211.732 480C163.71 480 118.573 461.305 84.634 427.352C33.411 376.117 18.294 301.195 44.03 235.219L276.663 467.918C256.056 475.863 233.968 480 211.732 480ZM207.999 0C199.155 0 191.999 7.156 191.999 16S199.155 32 207.999 32C357.984 32 479.999 154.031 479.999 304C479.999 312.844 487.155 320 495.999 320S511.999 312.844 511.999 304C511.999 136.375 375.624 0 207.999 0ZM207.999 96C199.155 96 191.999 103.156 191.999 112S199.155 128 207.999 128C305.046 128 383.999 206.969 383.999 304C383.999 312.844 391.155 320 399.999 320S415.999 312.844 415.999 304C415.999 189.312 322.687 96 207.999 96Z" })
  }
));
SatelliteDishLight.displayName = "SatelliteDishLight";
var SatelliteDish_default = SatelliteDishLight;
