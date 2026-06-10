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
var BoxingGlove_exports = {};
__export(BoxingGlove_exports, {
  default: () => BoxingGlove_default
});
module.exports = __toCommonJS(BoxingGlove_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxingGloveLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 129.609V96C416 43.062 372.938 0 320 0H128C75.062 0 32 43.062 32 96V288C32 315.406 43.562 340.922 64 359.188V448C64 483.297 92.703 512 128 512H320C355.297 512 384 483.297 384 448V390.625L447.188 327.437C468.344 306.281 480 278.156 480 248.234V208C480 169.359 452.469 137.047 416 129.609ZM448 248.234C448 269.609 439.672 289.703 424.562 304.812L352 377.375V448C352 465.641 337.641 480 320 480H128C110.359 480 96 465.641 96 448V343.672L89.641 338.875C73.344 326.562 64 308.016 64 288V96C64 60.703 92.703 32 128 32H320C355.297 32 384 60.703 384 96V128H368C329.369 128 297.053 155.529 289.619 192H217.688C183.125 192 149.641 181.859 120.875 162.688C113.5 157.781 103.562 159.75 98.688 167.125C93.781 174.484 95.781 184.406 103.125 189.312C137.172 212 176.781 224 217.688 224H289.619C297.053 260.471 329.369 288 368 288C376.844 288 384 280.844 384 272S376.844 256 368 256C341.531 256 320 234.469 320 208S341.531 160 368 160H400C426.469 160 448 181.531 448 208V248.234ZM285.312 343.125C280.391 335.75 270.5 333.797 263.125 338.687L224 364.771L184.875 338.688C177.484 333.797 167.563 335.75 162.688 343.125C157.781 350.484 159.766 360.406 167.125 365.313L195.156 384L167.125 402.688C159.766 407.594 157.781 417.516 162.687 424.875C166.044 429.918 175.481 435.539 184.875 429.313L224 403.229L263.125 429.312C272.51 435.533 281.901 430.001 285.312 424.875C290.219 417.516 288.234 407.594 280.875 402.687L252.844 384L280.875 365.312C288.234 360.406 290.219 350.484 285.312 343.125Z" })
  }
));
BoxingGloveLight.displayName = "BoxingGloveLight";
var BoxingGlove_default = BoxingGloveLight;
