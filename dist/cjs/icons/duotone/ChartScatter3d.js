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
var ChartScatter3d_exports = {};
__export(ChartScatter3d_exports, {
  default: () => ChartScatter3d_default
});
module.exports = __toCommonJS(ChartScatter3d_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartScatter3dDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472.601 468.484C466.258 476.078 457.164 480 447.976 480C440.758 480 433.508 477.562 427.508 472.578L256.008 329.656L84.508 472.578C70.851 483.891 50.726 482.047 39.414 468.484C28.101 454.906 29.945 434.734 43.508 423.422L224.008 273.01V64C224.008 46.328 238.32 32 256.008 32S288.008 46.328 288.008 64V273.01L468.508 423.422C482.07 434.734 483.914 454.906 472.601 468.484Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 192C145.625 192 160 177.625 160 160S145.625 128 128 128S96 142.375 96 160S110.375 192 128 192ZM32 96C49.625 96 64 81.625 64 64S49.625 32 32 32S0 46.375 0 64S14.375 96 32 96ZM384 288C401.625 288 416 273.625 416 256S401.625 224 384 224S352 238.375 352 256S366.375 288 384 288ZM384 96C401.625 96 416 81.625 416 64S401.625 32 384 32S352 46.375 352 64S366.375 96 384 96ZM256 416C238.375 416 224 430.375 224 448S238.375 480 256 480S288 465.625 288 448S273.625 416 256 416ZM480 128C462.375 128 448 142.375 448 160S462.375 192 480 192S512 177.625 512 160S497.625 128 480 128ZM64 256C64 238.375 49.625 224 32 224S0 238.375 0 256S14.375 288 32 288S64 273.625 64 256Z" })
    ]
  }
));
ChartScatter3dDuotone.displayName = "ChartScatter3dDuotone";
var ChartScatter3d_default = ChartScatter3dDuotone;
