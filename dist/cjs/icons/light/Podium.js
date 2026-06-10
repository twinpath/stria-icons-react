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
var Podium_exports = {};
__export(Podium_exports, {
  default: () => Podium_default
});
module.exports = __toCommonJS(Podium_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodiumLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 160H96V144C96 104.25 125.25 71.375 163.375 65.25C170.25 83.25 187.625 96 208 96H270.387C294.793 96 316.541 78.465 319.604 54.25C323.307 24.969 300.557 0 272 0H208C186.625 0 168.75 14 162.5 33.375C107.125 40.125 64 86.875 64 144V160H16C7.199 160 0 167.199 0 176C0 184.797 7.199 192 16 192H432C440.801 192 448 184.797 448 176C448 167.199 440.801 160 432 160ZM208 32H272C280.875 32 288 39.125 288 48S280.875 64 272 64H208C199.125 64 192 56.875 192 48S199.125 32 208 32ZM385.812 224.094C376.703 223.188 369.094 229.438 368.109 238.188L341.891 468.875C341.156 475.219 335.562 480 328.875 480H119.125C112.437 480 106.844 475.219 106.109 468.875L79.891 238.188C78.906 229.438 71.219 223.219 62.188 224.094C53.406 225.094 47.109 233.031 48.109 241.812L74.328 472.5C76.891 495.031 96.141 512 119.125 512H328.875C351.859 512 371.109 495.031 373.672 472.5L399.891 241.812C400.891 233.031 394.594 225.094 385.812 224.094Z" })
  }
));
PodiumLight.displayName = "PodiumLight";
var Podium_default = PodiumLight;
