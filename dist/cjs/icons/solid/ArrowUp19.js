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
var ArrowUp19_exports = {};
__export(ArrowUp19_exports, {
  default: () => ArrowUp19_default
});
module.exports = __toCommonJS(ArrowUp19_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUp19Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.998 191.999C319.998 209.687 334.31 223.999 351.998 223.999H415.998C433.685 223.999 447.998 209.687 447.998 191.999S433.685 159.999 415.998 159.999V63.983C415.998 52.796 410.154 42.452 400.623 36.64C391.091 30.858 379.216 30.452 369.279 35.577L337.279 52.171C321.591 60.296 315.466 79.608 323.591 95.3C329.279 106.304 340.435 112.585 351.998 112.585V159.999C334.31 159.999 319.998 174.312 319.998 191.999ZM391.998 255.554C343.396 255.554 303.998 294.952 303.998 343.554C303.998 379.991 326.144 411.253 357.711 424.62L350.029 432.624C339.31 443.78 339.685 461.499 350.841 472.187C356.248 477.405 363.248 479.999 370.216 479.999C377.56 479.999 384.935 477.124 390.404 471.374C460.015 398.843 480 385.983 480 343.554C480 294.952 440.599 255.554 391.998 255.554ZM391.998 367.554C378.763 367.554 367.998 356.788 367.998 343.554S378.763 319.554 391.998 319.554S416 330.319 416 343.554S405.232 367.554 391.998 367.554ZM39.986 191.716C48.658 191.716 57.283 188.216 63.595 181.333L96 145.935V447.966C96 465.669 110.328 479.997 128 479.997S160 465.669 160 447.966V145.935L192.404 181.333C204.357 194.341 224.607 195.247 237.623 183.302C250.652 171.349 251.527 151.083 239.591 138.036L151.593 41.942C139.468 28.685 116.531 28.685 104.406 41.942L16.408 138.036C4.472 151.083 5.347 171.349 18.377 183.302C24.517 188.935 32.267 191.716 39.986 191.716Z" })
  }
));
ArrowUp19Solid.displayName = "ArrowUp19Solid";
var ArrowUp19_default = ArrowUp19Solid;
