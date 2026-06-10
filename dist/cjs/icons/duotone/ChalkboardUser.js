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
var ChalkboardUser_exports = {};
__export(ChalkboardUser_exports, {
  default: () => ChalkboardUser_default
});
module.exports = __toCommonJS(ChalkboardUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChalkboardUserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 0H208C181.5 0 160 22.25 160 49.625V96C183.418 96 205.096 102.781 224 113.807V64H576V352H287.313C309.387 368.484 326.848 390.496 338.072 416H592C618.498 416 639.998 393.75 639.998 366.375V49.625C639.998 22.25 618.498 0 592 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320C213.02 320 256 277.018 256 224C256 170.98 213.02 128 160 128C106.982 128 64 170.98 64 224C64 277.018 106.982 320 160 320ZM192 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.307 262.693 352 192 352ZM224 64V113.805C262.072 136.01 288 176.838 288 224C288 265.807 267.855 302.996 236.76 326.371C255.289 331.777 272.215 340.725 287.314 352H384.002V304C384.002 295.162 391.166 288 400.002 288H496.002C504.838 288 512.002 295.162 512.002 304V352H576.002V64H224Z" })
    ]
  }
));
ChalkboardUserDuotone.displayName = "ChalkboardUserDuotone";
var ChalkboardUser_default = ChalkboardUserDuotone;
