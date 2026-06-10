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
var TvMusic_exports = {};
__export(TvMusic_exports, {
  default: () => TvMusic_default
});
module.exports = __toCommonJS(TvMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TvMusicDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 448H128C110.327 448 96 462.327 96 480V480C96 497.673 110.327 512 128 512H512C529.673 512 544 497.673 544 480V480C544 462.327 529.673 448 512 448ZM592 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H592C618.5 416 640 394.5 640 368V48C640 21.5 618.5 0 592 0ZM576 352H64V64H576V352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 64V352H576V64H64ZM416 256C416 273.625 394.5 288 368 288S320 273.625 320 256S341.5 224 368 224C373.375 224 378.75 224.75 384 226V165.625L288 203.125V288C288 305.625 266.5 320 240 320S192 305.625 192 288S213.5 256 240 256C245.375 256 250.75 256.75 256 258V159.25C256 152.25 260.5 146.125 267.25 144L395.25 96.75C400 95.25 405.375 96.125 409.5 99.125S416 106.875 416 112V256Z" })
    ]
  }
));
TvMusicDuotone.displayName = "TvMusicDuotone";
var TvMusic_default = TvMusicDuotone;
