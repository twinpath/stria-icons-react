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
var DrawSquare_exports = {};
__export(DrawSquare_exports, {
  default: () => DrawSquare_default
});
module.exports = __toCommonJS(DrawSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrawSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 354.25V157.75C427.5 150.625 448 125.75 448 96C448 60.625 419.375 32 384 32C354.25 32 329.375 52.5 322.25 80H125.75C118.625 52.5 93.75 32 64 32C28.625 32 0 60.625 0 96C0 125.75 20.5 150.625 48 157.75V354.25C20.5 361.375 0 386.25 0 416C0 451.375 28.625 480 64 480C93.75 480 118.625 459.5 125.75 432H322.25C329.375 459.5 354.25 480 384 480C419.375 480 448 451.375 448 416C448 386.25 427.5 361.375 400 354.25ZM322.25 400H125.75C120 377.625 102.375 360.125 80 354.25V157.75C102.375 152 119.875 134.375 125.75 112H322.25C328.125 134.375 345.625 151.875 368 157.75V354.25C345.625 360.125 328.125 377.625 322.25 400ZM384 64C401.625 64 416 78.375 416 96S401.625 128 384 128S352 113.625 352 96S366.375 64 384 64ZM32 96C32 78.375 46.375 64 64 64S96 78.375 96 96S81.625 128 64 128S32 113.625 32 96ZM64 448C46.375 448 32 433.625 32 416S46.375 384 64 384S96 398.375 96 416S81.625 448 64 448ZM384 448C366.375 448 352 433.625 352 416S366.375 384 384 384S416 398.375 416 416S401.625 448 384 448Z" })
  }
));
DrawSquareLight.displayName = "DrawSquareLight";
var DrawSquare_default = DrawSquareLight;
