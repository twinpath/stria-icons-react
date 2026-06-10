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
var Icicles_exports = {};
__export(Icicles_exports, {
  default: () => Icicles_default
});
module.exports = __toCommonJS(Icicles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IciclesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M465.946 0H45.963C16.214 0 -7.285 28.5 2.09 59.75L90.711 309.25C93.086 315.875 98.711 320.5 106.461 320C113.46 319.75 119.585 314.875 121.335 308.125L144.834 231.125L180.208 403.25C181.708 410.75 188.207 416.125 195.832 416.125C203.582 416.125 210.082 410.75 211.581 403.125L247.955 221.625L270.204 307.625C271.829 314.75 278.204 320 285.704 320.125H285.829C293.203 320.125 299.703 315.125 301.328 307.875L333.702 188.625L390.199 498.875C391.574 506.5 398.074 512 405.699 512H405.949C413.574 512 420.198 506.625 421.698 499.25L511.195 54.75V54.5C516.569 25.75 494.32 0 465.946 0ZM406.699 411L351.826 109.25C348.701 92.25 324.702 91.625 320.577 108.25L286.579 246.5L262.454 140.5C258.705 124.25 234.581 123.75 231.206 141L195.832 323L162.958 157C159.459 139.375 135.71 141.25 131.71 156L104.086 260.75L32.589 50C29.964 41.25 36.338 32 45.963 32H465.946C477.071 32 480.821 42.5 479.696 48.5L406.699 411Z" })
  }
));
IciclesLight.displayName = "IciclesLight";
var Icicles_default = IciclesLight;
