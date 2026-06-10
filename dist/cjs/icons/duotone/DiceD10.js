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
var DiceD10_exports = {};
__export(DiceD10_exports, {
  default: () => DiceD10_default
});
module.exports = __toCommonJS(DiceD10_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD10Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M209.786 12.555C209.786 7.541 205.57 3.838 201.168 3.838C198.943 3.838 196.671 4.784 194.871 6.984L3.059 240.862C1.63 242.607 1 244.601 1 246.542C1 251.147 4.545 255.456 9.385 255.456C9.957 255.456 10.548 255.396 11.153 255.269L141.528 228.018L209.309 15.516C209.636 14.493 209.786 13.5 209.786 12.555ZM256.059 0C252.684 0 249.309 2.016 248.028 6.047L174.621 236.143L256.059 292.863L337.496 236.143L264.09 6.047C262.809 2.016 259.434 0 256.059 0ZM502.704 255.481C507.558 255.481 511.118 251.158 511.118 246.543C511.118 244.601 510.488 242.607 509.059 240.862L317.246 6.984C315.447 4.784 313.175 3.838 310.949 3.838C306.538 3.838 302.31 7.554 302.31 12.581C302.31 13.519 302.457 14.502 302.778 15.516L370.59 228.049L500.965 255.3C501.56 255.422 502.14 255.481 502.704 255.481Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M150.875 262.145L239.062 323.614V503.116C239.062 508.409 234.918 511.986 230.555 511.986C228.658 511.986 226.72 511.31 225.062 509.804L2.906 307.614C0.916 305.789 0 303.366 0 300.977C0 297.024 2.508 293.166 6.812 292.27L150.875 262.145ZM511.999 300.977C511.999 303.366 511.083 305.789 509.093 307.614L286.937 509.804C285.279 511.32 283.34 512 281.442 512C277.08 512 272.937 508.408 272.937 503.116V323.614L361.125 262.145L505.187 292.27C509.492 293.166 511.999 297.024 511.999 300.977Z " })
    ]
  }
));
DiceD10Duotone.displayName = "DiceD10Duotone";
var DiceD10_default = DiceD10Duotone;
