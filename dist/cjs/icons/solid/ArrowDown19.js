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
var ArrowDown19_exports = {};
__export(ArrowDown19_exports, {
  default: () => ArrowDown19_default
});
module.exports = __toCommonJS(ArrowDown19_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDown19Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.998 192C319.998 209.688 334.31 224 351.998 224H415.998C433.685 224 447.998 209.688 447.998 192S433.685 160 415.998 160V63.984C415.998 52.797 410.154 42.453 400.623 36.641C391.091 30.859 379.216 30.453 369.279 35.578L337.279 52.172C321.591 60.297 315.466 79.609 323.591 95.301C329.279 106.305 340.435 112.586 351.998 112.586V160C334.31 160 319.998 174.312 319.998 192ZM391.998 255.555C343.396 255.555 303.998 294.953 303.998 343.555C303.998 379.992 326.144 411.254 357.711 424.621L350.029 432.625C339.31 443.781 339.685 461.5 350.841 472.188C356.248 477.406 363.248 480 370.216 480C377.56 480 384.935 477.125 390.404 471.375C460.015 398.844 480 385.984 480 343.555C480 294.953 440.599 255.555 391.998 255.555ZM391.998 367.555C378.763 367.555 367.998 356.789 367.998 343.555S378.763 319.555 391.998 319.555S416 330.32 416 343.555S405.232 367.555 391.998 367.555ZM216.013 320.281C207.341 320.281 198.716 323.781 192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C51.642 317.656 31.392 316.75 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C231.482 323.062 223.732 320.281 216.013 320.281Z" })
  }
));
ArrowDown19Solid.displayName = "ArrowDown19Solid";
var ArrowDown19_default = ArrowDown19Solid;
