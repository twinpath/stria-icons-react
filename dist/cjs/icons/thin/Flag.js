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
var Flag_exports = {};
__export(Flag_exports, {
  default: () => Flag_default
});
module.exports = __toCommonJS(Flag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlagThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M498.529 6.23C491.717 2.098 484.258 0 476.367 0C469.73 0 463.008 1.465 456.928 4.238C415.164 23.301 380.898 32.18 349.092 32.18C320.131 32.18 297.332 24.848 273.195 17.086C247.5 8.836 220.957 0.316 185.211 0.312C157.084 0.312 119.732 3.289 32 38.836L16 45.32V8C16 3.582 12.418 0 8 0S0 3.582 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V398.219L22.508 395.32L32.002 391.094L36.682 388.941C56.305 379.82 115.812 352.164 180.844 352.164C217.687 352.164 248.002 359.879 280.096 368.047C310.82 375.863 342.586 383.945 379.4 383.945C414.861 383.945 451.486 376.391 491.365 360.848C503.732 356.043 511.738 344.352 511.75 331.07L512 32.352C512.008 21.281 506.846 11.273 498.529 6.23ZM495.75 331.055C495.744 337.691 491.746 343.535 485.557 345.941C447.557 360.75 412.832 367.945 379.4 367.945C344.588 367.945 313.809 360.113 284.041 352.539C250.945 344.117 219.684 336.164 180.844 336.164C112.264 336.164 50.342 364.949 29.994 374.406L25.494 376.477L16 380.703V62.582L38.008 53.664C123.072 19.199 158.594 16.313 185.209 16.313C218.459 16.316 242.656 24.086 268.297 32.316C292.553 40.117 317.635 48.18 349.092 48.18C383.275 48.18 419.646 38.844 463.566 18.797C467.523 16.992 472.07 16 476.367 16C481.361 16 485.896 17.281 490.236 19.914C493.742 22.039 496.004 26.918 496 32.34L495.75 331.055Z" })
  }
));
FlagThin.displayName = "FlagThin";
var Flag_default = FlagThin;
