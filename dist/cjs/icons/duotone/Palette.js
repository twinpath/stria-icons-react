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
var Palette_exports = {};
__export(Palette_exports, {
  default: () => Palette_default
});
module.exports = __toCommonJS(Palette_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaletteDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M204.312 5.037C104.906 24.444 24.812 104.351 5.187 203.447C-31.813 390.45 136.906 529.859 264 510.14C305.187 503.734 325.406 455.545 306.5 418.451C283.406 373.044 316.406 320.043 367.406 320.043H447.094C482.906 320.043 511.906 290.448 512 254.729C511.5 97.132 368.094 -26.87 204.312 5.037ZM96 320.043C78.312 320.043 64 305.73 64 288.042C64 270.354 78.312 256.042 96 256.042S128 270.354 128 288.042C128 305.73 113.687 320.043 96 320.043ZM128 192.04C110.312 192.04 96 177.728 96 160.04S110.312 128.039 128 128.039S160 142.352 160 160.04S145.687 192.04 128 192.04ZM256 128.039C238.312 128.039 224 113.726 224 96.039S238.312 64.038 256 64.038S288 78.351 288 96.039S273.687 128.039 256 128.039ZM384 192.04C366.312 192.04 352 177.728 352 160.04S366.312 128.039 384 128.039S416 142.352 416 160.04S401.687 192.04 384 192.04Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 320.043C78.312 320.043 64 305.73 64 288.042C64 270.354 78.312 256.042 96 256.042S128 270.354 128 288.042C128 305.73 113.688 320.043 96 320.043ZM128 192.04C110.312 192.04 96 177.728 96 160.04S110.312 128.039 128 128.039S160 142.352 160 160.04S145.688 192.04 128 192.04ZM256 128.039C238.312 128.039 224 113.726 224 96.039S238.312 64.038 256 64.038S288 78.351 288 96.039S273.688 128.039 256 128.039ZM384 192.04C366.312 192.04 352 177.728 352 160.04S366.312 128.039 384 128.039S416 142.352 416 160.04S401.688 192.04 384 192.04Z" })
    ]
  }
));
PaletteDuotone.displayName = "PaletteDuotone";
var Palette_default = PaletteDuotone;
