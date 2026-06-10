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
var SensorTriangleExclamation_exports = {};
__export(SensorTriangleExclamation_exports, {
  default: () => SensorTriangleExclamation_default
});
module.exports = __toCommonJS(SensorTriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorTriangleExclamationLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 144V272C224 280.875 231.125 288 240 288S256 280.875 256 272V144C256 135.125 248.875 128 240 128S224 135.125 224 144ZM160 144V272C160 280.875 167.125 288 176 288S192 280.875 192 272V144C192 135.125 184.875 128 176 128S160 135.125 160 144ZM233.875 448H64C46.375 448 32 433.625 32 416V96C32 78.375 46.375 64 64 64H384C401.625 64 416 78.375 416 96V101C426.375 97.75 437.125 96 448 96C448 60.625 419.375 32 384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H254.5C248.25 473.625 242.75 466.375 238.25 458.75C236.375 455.25 235.375 451.5 233.875 448ZM629.963 368.25L512.656 165.25C499.275 142.25 474.639 128 448 128S396.725 142.25 383.344 165.25L266.037 368.25C252.654 391.375 252.654 419.75 266.037 442.75C279.418 465.875 303.93 480 330.568 480H565.432C592.07 480 616.582 465.875 629.963 442.75C643.346 419.75 643.346 391.375 629.963 368.25ZM565.375 448H330.625C297.875 448 277.375 412.625 293.75 384.25L411.125 181.25C418.75 168.125 432.75 160 448 160S477.25 168.125 484.875 181.25L602.25 384.25C618.625 412.625 598.125 448 565.375 448ZM96 144V272C96 280.875 103.125 288 112 288S128 280.875 128 272V144C128 135.125 120.875 128 112 128S96 135.125 96 144ZM448 376C434.746 376 424 386.742 424 400C424 413.254 434.746 424 448 424S472 413.254 472 400C472 386.742 461.254 376 448 376ZM448 352C456.844 352 464 344.844 464 336V240C464 231.156 456.844 224 448 224S432 231.156 432 240V336C432 344.844 439.156 352 448 352Z" })
  }
));
SensorTriangleExclamationLight.displayName = "SensorTriangleExclamationLight";
var SensorTriangleExclamation_default = SensorTriangleExclamationLight;
