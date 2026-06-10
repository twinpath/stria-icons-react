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
const ChartScatter3dRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 192C145.625 192 160 177.625 160 160S145.625 128 128 128S96 142.375 96 160S110.375 192 128 192ZM384 96C401.625 96 416 81.625 416 64S401.625 32 384 32S352 46.375 352 64S366.375 96 384 96ZM32 96C49.625 96 64 81.625 64 64S49.625 32 32 32S0 46.375 0 64S14.375 96 32 96ZM384 288C401.625 288 416 273.625 416 256S401.625 224 384 224S352 238.375 352 256S366.375 288 384 288ZM64 256C64 238.375 49.625 224 32 224S0 238.375 0 256S14.375 288 32 288S64 273.625 64 256ZM480 128C462.375 128 448 142.375 448 160S462.375 192 480 192S512 177.625 512 160S497.625 128 480 128ZM256 416C238.375 416 224 430.375 224 448S238.375 480 256 480S288 465.625 288 448S273.625 416 256 416ZM280 276.818V56C280 42.75 269.25 32 256 32S232 42.75 232 56V276.818L40.562 437.625C30.422 446.156 29.094 461.281 37.625 471.437C46.141 481.594 61.266 482.891 71.437 474.375L256 319.344L440.562 474.375C445.062 478.156 450.531 480 455.984 480C462.828 480 469.625 477.094 474.375 471.438C482.906 461.281 481.578 446.156 471.437 437.625L280 276.818Z" })
  }
));
ChartScatter3dRegular.displayName = "ChartScatter3dRegular";
var ChartScatter3d_default = ChartScatter3dRegular;
