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
var GunSquirt_exports = {};
__export(GunSquirt_exports, {
  default: () => GunSquirt_default
});
module.exports = __toCommonJS(GunSquirt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GunSquirtLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 112H525.736C518.6 84.445 493.787 64 464 64H128V48C128 39.164 120.836 32 112 32S96 39.164 96 48V64C42.98 64 0 106.98 0 160C0 207.938 35.238 247.328 81.158 254.504L33.25 439.211C27.41 459.648 42.76 480 64.02 480H167.863C182.15 480 194.705 470.531 198.629 456.793L227.113 352H288V368C288 376.836 295.164 384 304 384S320 376.836 320 368V304C320 295.164 312.836 288 304 288S288 295.164 288 304V320H235.811L253.207 256H464C493.787 256 518.6 235.555 525.736 208H544C561.674 208 576 193.672 576 176V144C576 126.328 561.674 112 544 112ZM167.863 448L64.225 447.246L113.83 256H220.047L167.863 448ZM544 176H500.969L494.758 199.977C491.096 214.121 478.447 224 464 224H96C60.711 224 32 195.289 32 160S60.711 96 96 96H464C478.447 96 491.096 105.879 494.758 120.023L500.969 144H544V176ZM448 144H96C87.156 144 80 151.156 80 160S87.156 176 96 176H448C456.844 176 464 168.844 464 160S456.844 144 448 144Z" })
  }
));
GunSquirtLight.displayName = "GunSquirtLight";
var GunSquirt_default = GunSquirtLight;
