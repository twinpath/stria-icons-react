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
var TrafficLightGo_exports = {};
__export(TrafficLightGo_exports, {
  default: () => TrafficLightGo_default
});
module.exports = __toCommonJS(TrafficLightGo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrafficLightGoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.982 175.994C191.984 175.994 191.984 175.994 191.986 175.994C218.482 175.992 239.979 154.488 239.977 127.986C239.973 101.486 218.477 79.986 191.98 79.986C191.979 79.986 191.979 79.986 191.977 79.986C165.48 79.99 143.984 101.494 143.988 127.996C143.99 154.494 165.488 175.994 191.982 175.994ZM191.982 111.986C200.801 111.986 207.975 119.166 207.977 127.988C207.977 136.814 200.801 143.994 191.982 143.994S175.988 136.816 175.988 127.992C175.986 119.168 183.162 111.988 191.982 111.986ZM192.002 336.004C165.504 336.008 144.01 357.512 144.012 384.014C144.014 410.514 165.514 432.014 192.01 432.012C218.508 432.01 240.002 410.506 240 384.004S218.498 336.002 192.002 336.004ZM191.994 304.004C191.996 304.004 191.996 304.004 191.998 304.004C218.494 304 239.99 282.498 239.988 255.996C239.984 229.496 218.488 207.996 191.994 207.996C191.992 207.996 191.992 207.996 191.99 207.996C165.492 207.998 143.998 229.502 144 256.004C144.002 282.504 165.5 304.004 191.994 304.004ZM180.689 244.686C182.439 242.936 186.236 239.996 191.994 239.996C200.812 239.996 207.986 247.176 207.988 255.998C207.988 264.822 200.812 272.002 191.994 272.004C183.176 272.004 176 264.826 176 256.002C176 250.238 178.938 246.438 180.689 244.686ZM335.982 319.99L335.977 274.736C364.598 257.982 383.967 227.479 383.963 191.977L335.971 191.98L335.965 146.729C364.586 129.975 383.955 99.471 383.951 63.967L335.957 63.973V63.967C335.955 28.768 307.152 -0.029 271.951 -0.025L111.988 -0.012C76.787 -0.008 47.99 28.795 47.994 63.994V64L0 64.004C0.004 99.506 19.379 130.006 48.002 146.756L48.006 192.008L0.012 192.014C0.016 227.516 19.391 258.016 48.014 274.764L48.018 320.018L0.023 320.021C0.027 357.775 22.027 390.025 53.65 405.773C70.279 466.9 125.65 512.023 192.018 512.018S313.748 466.877 330.365 405.746C361.984 389.992 383.979 357.738 383.977 319.986L335.982 319.99ZM173.031 462.186C127.398 453.408 96.02 410.756 96.016 364.287L95.988 63.994C95.986 55.156 103.15 47.992 111.986 47.992L271.963 47.977C280.799 47.977 287.963 55.139 287.963 63.975L287.992 367.998C287.998 427.072 234.344 473.98 173.031 462.186Z" })
  }
));
TrafficLightGoRegular.displayName = "TrafficLightGoRegular";
var TrafficLightGo_default = TrafficLightGoRegular;
