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
const ArrowUp19Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 192C320 209.688 334.312 224 352 224H416C433.688 224 448 209.688 448 192S433.688 160 416 160V63.984C416 52.797 410.156 42.453 400.625 36.641C391.094 30.859 379.219 30.453 369.281 35.578L337.281 52.172C321.594 60.297 315.469 79.609 323.594 95.301C329.281 106.305 340.438 112.586 352 112.586V160C334.312 160 320 174.312 320 192ZM392 255.555C343.398 255.555 304 294.953 304 343.555C304 379.992 326.146 411.254 357.713 424.621L350.031 432.625C339.312 443.781 339.687 461.5 350.844 472.188C356.25 477.406 363.25 480 370.219 480C377.562 480 384.937 477.125 390.406 471.375C460.018 398.844 480.002 385.984 480.002 343.555C480.002 294.953 440.602 255.555 392 255.555ZM392 367.555C378.766 367.555 368 356.789 368 343.555S378.766 319.555 392 319.555S416.002 330.32 416.002 343.555S405.234 367.555 392 367.555Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.377 173.359C5.347 161.406 4.472 141.141 16.408 128.094L104.406 32C116.531 18.742 139.468 18.742 151.593 32L239.591 128.094C251.527 141.141 250.652 161.406 237.623 173.359C224.607 185.305 204.357 184.398 192.404 171.391L160 135.992V438.023C160 455.727 145.671 470.055 128 470.055S96 455.727 96 438.023V135.992L63.595 171.391C57.283 178.273 48.658 181.773 39.986 181.773C32.267 181.773 24.517 178.992 18.377 173.359Z" })
    ]
  }
));
ArrowUp19Duotone.displayName = "ArrowUp19Duotone";
var ArrowUp19_default = ArrowUp19Duotone;
