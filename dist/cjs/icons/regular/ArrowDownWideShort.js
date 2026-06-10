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
var ArrowDownWideShort_exports = {};
__export(ArrowDownWideShort_exports, {
  default: () => ArrowDownWideShort_default
});
module.exports = __toCommonJS(ArrowDownWideShort_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownWideShortRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M359.999 432H311.999C298.749 432 287.999 442.75 287.999 456S298.749 480 311.999 480H359.999C373.247 480 383.997 469.25 383.997 456S373.247 432 359.999 432ZM423.997 304H311.999C298.749 304 287.999 314.75 287.999 328S298.749 352 311.999 352H423.997C437.247 352 447.997 341.25 447.997 328S437.247 304 423.997 304ZM487.997 176H311.999C298.749 176 287.999 186.75 287.999 200S298.749 224 311.999 224H487.997C501.247 224 511.997 213.25 511.997 200S501.247 176 487.997 176ZM551.995 48H311.999C298.749 48 287.999 58.75 287.999 72S298.749 96 311.999 96H551.995C565.245 96 575.995 85.25 575.995 72S565.245 48 551.995 48ZM206.372 335.961L151.999 394.914V56.023C151.999 42.758 141.249 32 127.999 32S103.999 42.758 103.999 56.023V394.914L49.626 335.961C44.907 330.836 38.47 328.242 32.001 328.242C26.189 328.242 20.345 330.336 15.722 334.617C5.972 343.594 5.378 358.797 14.378 368.555L110.374 472.633C119.437 482.453 136.562 482.453 145.624 472.633L241.62 368.555C250.62 358.797 250.027 343.594 240.277 334.617C230.497 325.547 215.31 326.203 206.372 335.961Z" })
  }
));
ArrowDownWideShortRegular.displayName = "ArrowDownWideShortRegular";
var ArrowDownWideShort_default = ArrowDownWideShortRegular;
