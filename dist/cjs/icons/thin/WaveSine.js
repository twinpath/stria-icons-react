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
var WaveSine_exports = {};
__export(WaveSine_exports, {
  default: () => WaveSine_default
});
module.exports = __toCommonJS(WaveSine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveSineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.657 271.562C610.032 290.438 557.938 456 463.438 456C381.688 456 344.907 351.156 312.438 258.656C281.75 171.156 246.969 72 176.563 72C109.219 72 58.813 180.75 39.657 245C38.407 249.219 33.938 251.844 29.719 250.375C25.469 249.125 23.063 244.656 24.344 240.438C29.969 221.562 82.063 56 176.563 56C258.313 56 295.094 160.844 327.563 253.344C358.25 340.844 393.032 440 463.438 440C530.782 440 581.188 331.25 600.344 267C601.594 262.781 606.157 260.219 610.282 261.625C614.532 262.875 616.938 267.344 615.657 271.562Z" })
  }
));
WaveSineThin.displayName = "WaveSineThin";
var WaveSine_default = WaveSineThin;
