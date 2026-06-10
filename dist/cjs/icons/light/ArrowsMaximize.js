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
var ArrowsMaximize_exports = {};
__export(ArrowsMaximize_exports, {
  default: () => ArrowsMaximize_default
});
module.exports = __toCommonJS(ArrowsMaximize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsMaximizeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 176V86.625L246.625 256L416 425.375V336C416 327.156 423.156 320 432 320S448 327.156 448 336V464C448 472.844 440.844 480 432 480H304C295.156 480 288 472.844 288 464S295.156 448 304 448H393.375L224 278.625L54.625 448H144C152.844 448 160 455.156 160 464S152.844 480 144 480H16C7.156 480 0 472.844 0 464V336C0 327.156 7.156 320 16 320S32 327.156 32 336V425.375L201.375 256L32 86.625V176C32 184.844 24.844 192 16 192S0 184.844 0 176V48C0 39.156 7.156 32 16 32H144C152.844 32 160 39.156 160 48S152.844 64 144 64H54.625L224 233.375L393.375 64H304C295.156 64 288 56.844 288 48S295.156 32 304 32H432C440.844 32 448 39.156 448 48V176C448 184.844 440.844 192 432 192S416 184.844 416 176Z" })
  }
));
ArrowsMaximizeLight.displayName = "ArrowsMaximizeLight";
var ArrowsMaximize_default = ArrowsMaximizeLight;
