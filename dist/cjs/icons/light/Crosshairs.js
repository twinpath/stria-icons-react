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
var Crosshairs_exports = {};
__export(Crosshairs_exports, {
  default: () => Crosshairs_default
});
module.exports = __toCommonJS(Crosshairs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrosshairsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 240H463.191C455.398 137.924 374.076 56.602 272 48.809V16C272 7.156 264.844 0 256 0S240 7.156 240 16V48.809C137.924 56.602 56.602 137.924 48.809 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H48.809C56.602 374.076 137.924 455.398 240 463.191V496C240 504.844 247.156 512 256 512S272 504.844 272 496V463.191C374.076 455.398 455.398 374.076 463.191 272H496C504.844 272 512 264.844 512 256S504.844 240 496 240ZM400 272H431.189C423.547 356.289 356.289 423.547 272 431.189V400C272 391.156 264.844 384 256 384S240 391.156 240 400V431.189C155.711 423.547 88.453 356.289 80.811 272H112C120.844 272 128 264.844 128 256S120.844 240 112 240H80.811C88.453 155.711 155.711 88.453 240 80.811V112C240 120.844 247.156 128 256 128S272 120.844 272 112V80.811C356.289 88.453 423.547 155.711 431.189 240H400C391.156 240 384 247.156 384 256S391.156 272 400 272ZM256 232C242.75 232 232 242.75 232 256S242.75 280 256 280S280 269.25 280 256S269.25 232 256 232Z" })
  }
));
CrosshairsLight.displayName = "CrosshairsLight";
var Crosshairs_default = CrosshairsLight;
