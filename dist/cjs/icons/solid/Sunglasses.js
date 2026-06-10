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
var Sunglasses_exports = {};
__export(Sunglasses_exports, {
  default: () => Sunglasses_default
});
module.exports = __toCommonJS(Sunglasses_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunglassesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.125 280.387L528.75 98.646C522.875 74.898 507.25 54.65 485.75 42.9C464.25 31.025 438.75 28.777 415.5 36.525L400.25 41.65C391.875 44.4 387.375 53.525 390.25 61.9L395.25 77.023C398 85.398 407.125 89.898 415.5 87.148L428.625 82.773C439.5 79.148 451.625 79.148 461.75 84.523C472 89.773 479.5 99.146 482.25 110.271L520.625 264.137C494.375 255.889 467 251.764 439.5 251.639C404.75 251.639 365.5 258.639 324.625 278.387H251.375C210.5 258.639 171.375 251.639 136.5 251.639C109 251.764 81.625 255.889 55.375 264.137L93.75 110.271C96.5 99.146 104 89.773 114.25 84.523C124.375 79.148 136.5 79.148 147.375 82.773L160.5 87.148C164.5 88.523 168.875 88.148 172.75 86.273C176.5 84.398 179.375 81.023 180.75 77.023L185.75 61.775C188.625 53.4 184 44.4 175.75 41.65L160.5 36.525C137.25 28.777 111.75 31.025 90.25 42.9C68.75 54.65 53.125 74.898 47.25 98.646L1.875 280.387C0.75 285.512 0.125 290.637 0 295.885V366.131C0 429.002 51.625 480 115.25 480H152.25C212.625 480 262.75 434.002 267.25 374.631L270.125 336.008H305.875L308.75 374.631C313.25 434.002 363.375 480 423.75 480H460.75C524.375 480 576 429.002 576 366.131V295.885C576 290.637 575.375 285.512 574.125 280.387ZM64.25 367.881C64.25 367.256 64 366.756 64 366.131V328.508C87.25 320.135 111.875 315.76 136.625 315.635C145.75 315.635 154.75 316.885 163.75 318.135L64.25 367.881ZM372.375 365.881L369.5 328.508C391.875 320.01 415.5 315.635 439.5 315.635C449 315.76 458.625 316.51 468.125 317.885L372.375 365.881Z" })
  }
));
SunglassesSolid.displayName = "SunglassesSolid";
var Sunglasses_default = SunglassesSolid;
