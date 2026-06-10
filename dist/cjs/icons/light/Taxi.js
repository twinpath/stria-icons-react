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
var Taxi_exports = {};
__export(Taxi_exports, {
  default: () => Taxi_default
});
module.exports = __toCommonJS(Taxi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TaxiLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.063 235.762L428.557 122C418.818 87.879 387.252 64.061 351.771 64.01L351.834 48.188C351.931 21.481 330.333 0 303.834 0H207.99C195.162 0 183.1 5 174.021 14.094C164.959 23.172 159.975 35.266 159.99 48.109C160.002 54.205 160.027 59.35 160.084 64.014C124.633 64.092 93.094 87.9 83.361 122L50.855 235.762C20.725 251.955 0 283.393 0 320V496C0 504.836 7.162 512 15.998 512C24.832 512 31.994 504.836 31.994 496V448H479.924V496C479.924 504.836 487.086 512 495.92 512C504.756 512 511.918 504.836 511.918 496V320C511.918 283.393 491.193 251.955 461.063 235.762ZM207.99 32H303.834C312.665 32 319.866 39.169 319.834 48.062L319.771 64H192.037C192.02 59.102 192.002 53.68 191.99 48.047C191.99 39.195 199.109 32 207.99 32ZM114.107 130.812C119.98 110.312 138.947 96 160.256 96H351.662C372.971 96 391.938 110.312 397.811 130.812L424.691 224.883C421.762 224.613 418.934 224 415.934 224H95.984C92.984 224 90.156 224.613 87.227 224.883L114.107 130.812ZM479.924 384C479.924 401.645 465.57 416 447.928 416H63.99C46.348 416 31.994 401.645 31.994 384V320C31.994 284.709 60.701 256 95.984 256H415.934C451.219 256 479.924 284.709 479.924 320V384ZM407.936 304C394.684 304 383.939 314.746 383.939 328S394.684 352 407.936 352S431.932 341.254 431.932 328S421.188 304 407.936 304ZM103.982 304C90.73 304 79.986 314.746 79.986 328S90.73 352 103.982 352S127.979 341.254 127.979 328S117.234 304 103.982 304Z" })
  }
));
TaxiLight.displayName = "TaxiLight";
var Taxi_default = TaxiLight;
