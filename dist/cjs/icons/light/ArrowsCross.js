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
var ArrowsCross_exports = {};
__export(ArrowsCross_exports, {
  default: () => ArrowsCross_default
});
module.exports = __toCommonJS(ArrowsCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsCrossLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M429.322 288.414C421.455 289.684 416 297.062 416 305.031V425.57L291.875 301.445C285.627 295.195 275.498 295.195 269.25 301.445S263.002 317.82 269.25 324.07L393.375 448.195H272.834C264.865 448.195 257.488 453.648 256.217 461.516C254.596 471.547 262.279 480.195 272 480.195H432C440.836 480.195 448 473.031 448 464.195V304.195C448 294.477 439.352 286.789 429.322 288.414ZM156.125 210.945C162.373 217.195 172.502 217.195 178.75 210.945S184.998 194.57 178.75 188.32L27.91 37.48C22.275 31.844 13.203 30.48 6.738 35.141C-1.5 41.078 -2.184 52.637 4.688 59.508L156.125 210.945ZM432 32H272C263.156 32 256 39.156 256 48S263.156 64 272 64H393.375L4.688 452.688C-1.563 458.938 -1.563 469.063 4.688 475.312S21.063 481.562 27.312 475.312L416 86.625V208C416 216.844 423.156 224 432 224S448 216.844 448 208V48C448 39.156 440.844 32 432 32Z" })
  }
));
ArrowsCrossLight.displayName = "ArrowsCrossLight";
var ArrowsCross_default = ArrowsCrossLight;
