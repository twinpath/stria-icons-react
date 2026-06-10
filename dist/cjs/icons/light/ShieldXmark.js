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
var ShieldXmark_exports = {};
__export(ShieldXmark_exports, {
  default: () => ShieldXmark_default
});
module.exports = __toCommonJS(ShieldXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldXmarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M466.5 83.75L274.5 3.75C268.625 1.25 262.344 0 256.062 0S243.5 1.25 237.625 3.75L45.625 83.75C27.75 91.125 16 108.625 16 128C16 385.451 205.434 512 255.938 512C305.196 512 496 387.357 496 128C496 108.625 484.25 91.125 466.5 83.75ZM463.875 128.317C463.875 353.649 297.657 479.969 256.063 479.969C213.3 479.969 48 352.242 48 128C48 121.5 51.875 115.75 57.75 113.25L249.75 33.25C251.723 32.422 253.859 31.984 256.008 31.984C258.079 31.984 260.162 32.391 262.125 33.25L454.125 113.25C463.272 117.061 463.875 125.848 463.875 128.317ZM336 192C336 183.473 329.135 176 320 176C315.906 176 311.812 177.562 308.688 180.688L256 233.375L203.312 180.688C200.188 177.562 196.094 176 192 176C182.861 176 176 183.473 176 192C176 196.094 177.562 200.188 180.688 203.312L233.375 256L180.688 308.688C177.562 311.812 176 315.906 176 320C176 328.572 182.915 336 192.001 336C196.093 336 200.187 334.438 203.312 331.312L256 278.625L308.688 331.312C311.812 334.437 315.906 336 320.001 336C328.545 336 336 329.118 336 320C336 315.906 334.438 311.812 331.312 308.688L278.625 256L331.312 203.312C334.438 200.188 336 196.094 336 192Z " })
  }
));
ShieldXmarkLight.displayName = "ShieldXmarkLight";
var ShieldXmark_default = ShieldXmarkLight;
